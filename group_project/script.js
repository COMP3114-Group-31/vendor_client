/* =============================================
   供应商管理系统 - JavaScript文件
   Vendor Portal - JavaScript
   ============================================= */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initVendorPortal();
    setupStockLevels();
    initProductManagement();
});

// 初始化供应商门户
function initVendorPortal() {
    // 移动端菜单切换
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            
            // 更新图标
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // 菜单项点击效果与视图切换
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            if (window.innerWidth <= 991) {
                sidebar.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
            
            const menuText = this.querySelector('span').textContent;
            console.log('切换到:', menuText);
            
            // 更新页面标题
           const dashboardTitle = document.querySelector('.dashboard-title');
           if (dashboardTitle) {
               dashboardTitle.textContent = menuText !== '仪表板' ? menuText : '供应商仪表板';
           }

           // ====== 視圖切換邏輯 ======
           const dashboardView = document.getElementById('dashboardView');
           const productsView = document.getElementById('productsView');
           const ordersView = document.getElementById('ordersView');
           const inventoryView = document.getElementById('inventoryView');
           
           // 先隱藏所有視圖
           if(dashboardView) dashboardView.style.display = 'none';
           if(productsView) productsView.style.display = 'none';
           if(ordersView) ordersView.style.display = 'none';
           if(inventoryView) inventoryView.style.display = 'none';

           // 顯示選中的視圖
           if (menuText === '仪表板' && dashboardView) {
               dashboardView.style.display = 'block';
           } else if (menuText === '产品管理' && productsView) {
               productsView.style.display = 'block';
               if (typeof renderProductTable === 'function') renderProductTable(); 
           } else if (menuText === '订单管理' && ordersView) {
               ordersView.style.display = 'block';
           } else if (menuText === '库存管理' && inventoryView) {
               inventoryView.style.display = 'block';
           }
        });
    });
    
    // 搜索功能
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.trim().toLowerCase();
            simulateSearch(searchTerm);
        });
        
        // 防抖处理搜索输入 (保留你的原始優化)
        searchInput.addEventListener('keyup', debounce(function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        }, 500));
    }
    
    // 通知点击
    const notification = document.querySelector('.notification');
    if (notification) {
        notification.addEventListener('click', function() {
            alert('您有3条未读通知\n1. 新订单待处理\n2. 库存预警提醒\n3. 系统维护通知');
            const badge = this.querySelector('.notification-badge');
            if (badge) badge.style.display = 'none';
        });
    }
    
    // 查看订单按钮
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const orderId = this.closest('tr').querySelector('td:first-child').textContent;
            alert(`查看订单: ${orderId}\n详细信息将在实际应用中显示`);
        });
    });
    
    // 补货按钮
    const restockButtons = document.querySelectorAll('.btn-small');
    restockButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.alert-item').querySelector('.product-name').textContent;
            const quantity = prompt(`为 ${productName} 补货，请输入数量:`, "50");
            
            if (quantity && !isNaN(quantity) && quantity > 0) {
                showNotification(`已提交补货申请: ${productName} × ${quantity} 件`, 'success');
                
                // 模拟更新库存动画
                const stockLevel = this.closest('.alert-item').querySelector('.stock-fill');
                const currentWidth = parseInt(stockLevel.style.width) || 12;
                const newWidth = Math.min(currentWidth + 20, 100);
                stockLevel.style.width = `${newWidth}%`;
                
                if (newWidth > 30) stockLevel.className = 'stock-fill stock-medium';
                if (newWidth > 70) stockLevel.className = 'stock-fill stock-good';
                
                const stockText = this.closest('.alert-item').querySelector('.product-stock');
                const match = stockText.textContent.match(/(\d+)\s*\/\s*(\d+)/);
                if (match) {
                    const current = parseInt(match[1]) + parseInt(quantity);
                    const total = parseInt(match[2]);
                    stockText.textContent = `库存: ${current} / ${total}`;
                }
            }
        });
    });
    
    // 模拟数据更新 (保留你的儀表板跳動功能)
    startDataSimulation();
}

// 设置库存条宽度
function setupStockLevels() {
    const stockBars = document.querySelectorAll('.stock-fill');
    stockBars.forEach((bar, index) => {
        let width = index === 0 ? 12 : (index === 1 ? 17 : 22.5);
        bar.className = `stock-fill ${width < 20 ? 'stock-low' : 'stock-medium'}`;
        bar.style.width = `${width}%`;
    });
}

// 實時搜尋與過濾功能
function simulateSearch(term) {
    const productsView = document.getElementById('productsView');
    let activeTableRows;
    
    if (productsView && productsView.style.display === 'block') {
        activeTableRows = document.querySelectorAll('#productTableBody tr');
    } else {
        activeTableRows = document.querySelectorAll('#dashboardView .order-table tbody tr');
    }
    
    activeTableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (term === '' || rowText.includes(term)) {
            row.style.display = '';
            row.style.backgroundColor = term !== '' ? 'rgba(52, 152, 219, 0.05)' : '';
        } else {
            row.style.display = 'none';
        }
    });
}

function performSearch(term) {
    if (term.trim() === '') {
        simulateSearch('');
        return;
    }
    simulateSearch(term.toLowerCase());
}

// 防抖函数 (保留你的效能優化)
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// 模拟数据更新 (保留你的自動更新動畫)
function startDataSimulation() {
    setInterval(updateDashboardData, 30000);
    setInterval(updateOrderStatus, 60000);
}

function updateDashboardData() {
    const cards = document.querySelectorAll('.card');
    if (cards.length >= 4) {
        const todayOrders = cards[0].querySelector('.card-value');
        const todayChange = cards[0].querySelector('.card-change');
        if (todayOrders && todayChange) {
            const currentOrders = parseInt(todayOrders.textContent);
            const randomChange = Math.floor(Math.random() * 6) - 1;
            todayOrders.textContent = Math.max(0, currentOrders + randomChange);
            todayChange.textContent = randomChange >= 0 ? `+${randomChange} 个订单` : `${randomChange} 个订单`;
            todayChange.className = `card-change ${randomChange >= 0 ? 'positive' : 'negative'}`;
        }
        
        const salesValue = cards[2].querySelector('.card-value');
        const salesChange = cards[2].querySelector('.card-change');
        if (salesValue && salesChange) {
            const currentSales = parseInt(salesValue.textContent.replace('$', '').replace(',', '')) || 0;
            const salesIncrease = Math.floor(currentSales * 0.02);
            salesValue.textContent = `$${(currentSales + salesIncrease).toLocaleString()}`;
            salesChange.textContent = `+${(salesIncrease / currentSales * 100).toFixed(1)}% 增长`;
        }
    }
}

function updateOrderStatus() {
    const statusBadges = document.querySelectorAll('.status-badge');
    statusBadges.forEach(badge => {
        if (Math.random() > 0.7) {
            const currentStatus = badge.textContent.trim();
            let newStatus, newClass;
            
            if (currentStatus === '待处理') { newStatus = '处理中'; newClass = 'status-processing'; }
            else if (currentStatus === '处理中') { newStatus = '已发货'; newClass = 'status-shipped'; }
            else if (currentStatus === '已发货') { newStatus = '已交付'; newClass = 'status-delivered'; }
            
            if (newStatus) {
                badge.textContent = newStatus;
                badge.className = `status-badge ${newClass}`;
            }
        }
    });
}

// 窗口大小变化时调整布局 (保留你的響應式修復)
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const mainContent = document.querySelector('.main-content');
    
    if (!mainContent) return;
    
    if (window.innerWidth > 991 && sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
    
    if (window.innerWidth <= 991) {
        mainContent.style.marginLeft = '0';
    } else {
        mainContent.style.marginLeft = 'var(--sidebar-width)';
    }
});


// ========== 产品管理功能 ==========

const BASE_URL = 'http://localhost:8080';
const API_ENDPOINTS = {
    CREATE_PRODUCT: `${BASE_URL}/products`,
    LIST_PRODUCTS: `${BASE_URL}/products`,
    GET_PRODUCT: (id) => `${BASE_URL}/products/${id}`,
    UPDATE_PRODUCT: (id) => `${BASE_URL}/products/${id}`,
    UPDATE_STATUS: (id) => `${BASE_URL}/products/${id}/status`
};

function initProductManagement() {
    const modal = document.getElementById('productModal');
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    const quickAddProduct = document.getElementById('quickAddProduct'); 
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelFormBtn = document.getElementById('cancelFormBtn');
    const productForm = document.getElementById('productForm');

    const openModal = () => {
        if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
    };

    const closeModal = () => {
        if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; if (productForm) productForm.reset(); }
    };

    if (toggleFormBtn) toggleFormBtn.addEventListener('click', openModal);
    if (quickAddProduct) quickAddProduct.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelFormBtn) cancelFormBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    if (productForm) {
        productForm.addEventListener('submit', handleProductFormSubmit);
    }
}

async function handleProductFormSubmit(e) {
    e.preventDefault();
    
    const productData = {
        name: document.getElementById('productName').value.trim(),
        sku: document.getElementById('productSku').value.trim(),
        price: parseFloat(document.getElementById('productPrice').value) || 0,
        stock: parseInt(document.getElementById('productStock').value) || 0,
        category: document.getElementById('productCategory').value,
        status: document.getElementById('productStatus').value,
        description: document.getElementById('productDescription') ? document.getElementById('productDescription').value.trim() : ''
    };
    
    if (!productData.name || !productData.sku) {
        showNotification('产品名称和SKU编码是必填项', 'error');
        return;
    }
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';
    
    try {
        const response = await fetch(API_ENDPOINTS.CREATE_PRODUCT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
        
        if (response.ok) {
            showNotification(`产品 "${productData.name}" 创建成功！`, 'success');
            
            updateStockAlertCount(productData);
            updateProductCountBadge();
            
            const newProductForTable = {
                sku: productData.sku,
                name: productData.name,
                category: productData.category,
                price: productData.price,
                stock: productData.stock,
                status: productData.status
            };
            mockProducts.unshift(newProductForTable); 
            
            const productsView = document.getElementById('productsView');
            if (productsView && productsView.style.display === 'block') {
                renderProductTable();
            }
            
            e.target.reset();
            
            const modal = document.getElementById('productModal');
            if (modal) {
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto'; 
                }, 800);
            }
        } else {
            showNotification(`创建失败，服务器状态码: ${response.status}`, 'error');
        }
    } catch (error) {
        console.error('API 请求异常:', error);
        showNotification('网络错误：无法连接到服务器，请检查后端是否启动', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
}

// 完整保留：更新库存预警动画
function updateStockAlertCount(productData) {
    const lowStockCard = document.querySelector('.card:nth-child(4) .card-value');
    if (lowStockCard) {
        lowStockCard.textContent = (parseInt(lowStockCard.textContent) || 0) + 1;
    }
    
    const inventoryAlert = document.querySelector('.inventory-alert');
    if (inventoryAlert && productData.stock < 50) {
        const newAlert = document.createElement('div');
        newAlert.className = 'alert-item';
        newAlert.innerHTML = `
            <div class="product-info">
                <div class="product-img"><i class="fas fa-box"></i></div>
                <div class="product-details">
                    <div class="product-name" style="font-weight: 600;">${productData.name}</div>
                    <div class="product-stock" style="font-size: 0.9rem; color: #666;">库存: ${productData.stock}</div>
                    <div class="stock-level">
                        <div class="stock-fill ${productData.stock > 20 ? 'stock-medium' : 'stock-low'}" 
                             style="width: ${Math.min(productData.stock, 100)}%"></div>
                    </div>
                </div>
            </div>
            <button class="btn btn-small" onclick="alert('查看商品: ${productData.sku}')">
                <i class="fas fa-eye"></i> 查看
            </button>
        `;
        inventoryAlert.insertBefore(newAlert, inventoryAlert.firstChild);
    }
}

// 更新产品菜单徽章
function updateProductCountBadge() {
    const badge = document.getElementById('productCountBadge');
    if (badge) badge.textContent = (parseInt(badge.textContent) || 0) + 1;
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification-popup ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => { if (notification.parentNode) document.body.removeChild(notification); }, 300);
    }, 3000);
}

// 自动注入通知的CSS
(function addNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification-popup { position: fixed; top: 20px; right: 20px; background: white; border-radius: 8px; padding: 15px 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 9999; min-width: 300px; transform: translateX(150%); transition: transform 0.3s ease; border-left: 4px solid #3498db; }
            .notification-popup.show { transform: translateX(0); }
            .notification-popup.success { border-left-color: #27ae60; }
            .notification-popup.error { border-left-color: #e74c3c; }
            .notification-content { display: flex; align-items: center; gap: 10px; }
            .notification-content i { font-size: 20px; }
            .notification-content i.fa-check-circle { color: #27ae60; }
            .notification-content i.fa-exclamation-circle { color: #e74c3c; }
            .notification-content span { font-size: 14px; color: #333; }
        `;
        document.head.appendChild(style);
    }
})();

// 商品列表與狀態管理
let mockProducts = [
    { sku: 'PROD-001', name: '智能手表 X200', category: 'electronics', price: 899.00, stock: 12, status: 'active' },
    { sku: 'PROD-002', name: '无线耳机 Pro', category: 'electronics', price: 450.00, stock: 25, status: 'active' },
    { sku: 'PROD-003', name: '冬季保暖外套', category: 'clothing', price: 299.00, stock: 0, status: 'inactive' },
    { sku: 'PROD-004', name: '手机快速充电器', category: 'accessories', price: 45.00, stock: 45, status: 'draft' }
];

function renderProductTable() {
    const tbody = document.getElementById('productTableBody');
    if (!tbody) return;
    tbody.innerHTML = ''; 
    const categoryMap = { 'electronics': '电子产品', 'clothing': '服装', 'accessories': '配件', 'other': '其他' };
    
    mockProducts.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${product.sku}</td>
            <td>${product.name}</td>
            <td>${categoryMap[product.category] || product.category || '未分類'}</td>
            <td>¥${product.price.toFixed(2)}</td>
            <td>${product.stock}</td>
            <td>
                <select class="status-select ${product.status}" onchange="changeProductStatus('${product.sku}', this)">
                    <option value="active" ${product.status === 'active' ? 'selected' : ''}>🟢 上架</option>
                    <option value="draft" ${product.status === 'draft' ? 'selected' : ''}>📝 草稿</option>
                    <option value="inactive" ${product.status === 'inactive' ? 'selected' : ''}>🔴 下架</option>
                </select>
            </td>
            <td>
                <button class="btn-view" onclick="alert('編輯商品: ${product.sku}')"><i class="fas fa-edit"></i> 編輯</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.changeProductStatus = function(sku, selectElement) {
    const newStatus = selectElement.value;
    const productIndex = mockProducts.findIndex(p => p.sku === sku);
    if (productIndex !== -1) {
        mockProducts[productIndex].status = newStatus;
        selectElement.className = `status-select ${newStatus}`;
        const statusText = newStatus === 'active' ? '已上架' : newStatus === 'draft' ? '已存為草稿' : '已下架';
        showNotification(`商品 ${sku} 狀態已更新為：${statusText}`, 'success');
    }
};
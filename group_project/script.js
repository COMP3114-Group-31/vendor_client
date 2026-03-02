

const API_ENDPOINTS = {
    CREATE_PRODUCT: '/products',
    LIST_PRODUCTS: '/products',
    GET_PRODUCT: (id) => `/products/${id}`,
    UPDATE_PRODUCT: (id) => `/products/${id}`,
    UPDATE_STATUS: (id) => `/products/${id}/status`
};

let currentEditingProductId = null;

document.addEventListener('DOMContentLoaded', function () {
    initVendorPortal();
    //setupStockLevels(); 库存预警的模拟逻辑
    initProductManagement();
});

function initVendorPortal() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            const icon = this.querySelector('i');
            if (!icon) return;
            if (sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        item.addEventListener('click', function () {
            menuItems.forEach((i) => i.classList.remove('active'));
            this.classList.add('active');

            if (window.innerWidth <= 991 && sidebar && menuToggle) {
                sidebar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }

            const menuTextNode = this.querySelector('span');
            const title = document.querySelector('.dashboard-title');
            if (menuTextNode && title) {
                title.textContent = menuTextNode.textContent;
            }
        });
    });

    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.trim().toLowerCase();
            if (searchTerm.length > 1) {
                simulateSearch(searchTerm);
            }
        });

        searchInput.addEventListener('keyup', debounce(function (e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        }, 500));
    }

    const notification = document.querySelector('.notification');
    if (notification) {
        notification.addEventListener('click', function () {
            alert('你有新的通知');
            const badge = this.querySelector('.notification-badge');
            if (badge) badge.style.display = 'none';
        });
    }

    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach((button) => {
        button.addEventListener('click', function () {
            if (this.dataset.action) return;
            const row = this.closest('tr');
            if (!row) return;
            const orderIdCell = row.querySelector('td:first-child');
            if (!orderIdCell) return;
            alert(`查看订单: ${orderIdCell.textContent}`);
        });
    });

    startDataSimulation();

    //库存预警的模拟逻辑
    //const restockButtons = document.querySelectorAll('.inventory-alert .btn-small');
    //restockButtons.forEach((button) => {
    //    button.addEventListener('click', function () {
    //        const productName = this.closest('.alert-item')?.querySelector('.product-name')?.textContent || '产品';
    //        const quantity = prompt(`为 ${productName} 补货，输入数量:`, '50');
    //        if (!quantity || isNaN(quantity) || Number(quantity) <= 0) return;

    //       const stockLevel = this.closest('.alert-item')?.querySelector('.stock-fill');
    //        if (!stockLevel) return;

    //        const currentWidth = parseInt(stockLevel.style.width || '12', 10);
    //        const newWidth = Math.min(currentWidth + 20, 100);
    //        stockLevel.style.width = `${newWidth}%`;
    //        if (newWidth > 70) stockLevel.className = 'stock-fill stock-good';
    //        else if (newWidth > 30) stockLevel.className = 'stock-fill stock-medium';
    //        else stockLevel.className = 'stock-fill stock-low';
    //    });
    //});

}
//库存预警的模拟逻辑
//function setupStockLevels() {
//    const stockBars = document.querySelectorAll('.stock-fill');
//    stockBars.forEach((bar, index) => {
//        let width = 20;
//        if (index === 0) width = 12;
//        if (index === 1) width = 17;
//        if (index === 2) width = 23;
//       bar.style.width = `${width}%`;
//    });
//}

function simulateSearch(term) {
    const tableRows = document.querySelectorAll('.order-table tbody tr');
    tableRows.forEach((row) => {
        const rowText = row.textContent.toLowerCase();
        row.style.backgroundColor = rowText.includes(term) ? 'rgba(52, 152, 219, 0.1)' : '';
    });
}

function performSearch(term) {
    if (!term.trim()) return;
    alert(`执行搜索: ${term}`);
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) searchInput.value = '';
}

function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

function startDataSimulation() {
    setInterval(updateDashboardData, 30000);
    setInterval(updateOrderStatus, 60000);
}

function updateDashboardData() {
    const cards = document.querySelectorAll('.card');
    if (cards.length < 3) return;

    const todayOrders = cards[0].querySelector('.card-value');
    if (todayOrders) {
        const current = parseInt(todayOrders.textContent || '0', 10);
        todayOrders.textContent = String(Math.max(0, current + Math.floor(Math.random() * 6) - 1));
    }
}

function updateOrderStatus() {
    const statusBadges = document.querySelectorAll('.status-badge');
    statusBadges.forEach((badge) => {
        if (Math.random() <= 0.7) return;
        const s = badge.textContent.trim();
        if (s.includes('待')) {
            badge.textContent = '处理中';
            badge.className = 'status-badge status-processing';
        } else if (s.includes('处理')) {
            badge.textContent = '已发货';
            badge.className = 'status-badge status-shipped';
        }
    });
}

window.addEventListener('resize', function () {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    if (window.innerWidth > 991 && sidebar?.classList.contains('active')) {
        sidebar.classList.remove('active');
        const icon = menuToggle?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    mainContent.style.marginLeft = window.innerWidth <= 991 ? '0' : 'var(--sidebar-width)';
});

function initProductManagement() {
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    if (toggleFormBtn) {
        toggleFormBtn.addEventListener('click', function () {
            const formCard = document.getElementById('productFormCard');
            if (!formCard) return;
            const open = formCard.style.display === 'none';
            formCard.style.display = open ? 'block' : 'none';
            this.innerHTML = open ? '<i class="fas fa-minus"></i> 隐藏表单' : '<i class="fas fa-plus"></i> 显示表单';
        });
    }

    const quickAddProduct = document.getElementById('quickAddProduct');
    if (quickAddProduct) {
        quickAddProduct.addEventListener('click', function () {
            const formCard = document.getElementById('productFormCard');
            const toggleBtn = document.getElementById('toggleFormBtn');
            if (formCard) formCard.style.display = 'block';
            if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-minus"></i> 隐藏表单';
            setFormModeForCreate();
        });
    }

    document.getElementById('resetFormBtn')?.addEventListener('click', setFormModeForCreate);
    document.getElementById('cancelEditBtn')?.addEventListener('click', setFormModeForCreate);

    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', handleProductFormSubmit);
    }

    document.getElementById('refreshProductListBtn')?.addEventListener('click', loadProductList);

    const productTableBody = document.getElementById('productTableBody');
    if (productTableBody) {
        productTableBody.addEventListener('click', async function (e) {
            const btn = e.target.closest('button[data-action]');
            if (!btn) return;
            const action = btn.getAttribute('data-action');
            const id = btn.getAttribute('data-id');
            if (!id) return;
            if (action === 'edit') await handleEditProduct(id);
            if (action === 'delete') await handleDeleteProduct(id);
        });
    }

    // ========== 新增：保留原格式的图片上传与本地预览 ==========
    const imageInput = document.getElementById('productImage');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    const imagePreview = document.getElementById('imagePreview');

    if (imageInput) {
        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                currentProductImageFile = file; // 核心：保存原始 File 对象
                
                // 使用 URL.createObjectURL 生成本地内存地址，直接预览，不转 Base64
                currentProductImageUrl = URL.createObjectURL(file);
                if (imagePreview && imagePreviewContainer) {
                    imagePreview.src = currentProductImageUrl;
                    imagePreviewContainer.style.display = 'block';
                }
            } else {
                currentProductImageFile = null;
                currentProductImageUrl = '';
                if (imagePreviewContainer) imagePreviewContainer.style.display = 'none';
            }
        });
    }
    // ==========================================================

    setFormModeForCreate();
    loadProductList();
}

function getProductFormData() {
    return {
        name: (document.getElementById('productName')?.value || '').trim(),
        name_cn: (document.getElementById('productNameCn')?.value || '').trim(),
        price: parseFloat(document.getElementById('productPrice')?.value) || 0,
        category: document.getElementById('productCategory')?.value || '',
        description: (document.getElementById('productDescription')?.value || '').trim(),
        description_cn: (document.getElementById('productDescriptionCn')?.value || '').trim(),
        imageFile: currentProductImageFile // 将 File 对象传出，供 submit 函数处理
    };
}

// ========== 阿里云 OSS 直传函数 ==========
async function uploadToOSS(file) {
    try {
        // 【强烈推荐】生产环境：向你的后端请求 STS 临时凭证
        // const credentials = await fetch('/api/get-oss-sts-token').then(res => res.json());

        // 初始化 OSS 客户端
        const client = new OSS({
            // 你的 Bucket 所在地域，例如华东1（杭州）就是 oss-cn-hangzhou
            region: 'oss-cn-hangzhou', 
            
            // 开发测试阶段可以暂时写死（仅限本地测试），上线前务必改为使用 STS 临时凭证！
            accessKeyId: 'YOUR_ACCESS_KEY_ID',             // 替换为你的真实 ID 或临时 ID
            accessKeySecret: 'YOUR_ACCESS_KEY_SECRET',     // 替换为你的真实 Secret 或临时 Secret
            // stsToken: credentials.SecurityToken,        // 如果使用 STS，取消这行的注释

            // 你的 Bucket 名称
            bucket: 'your-bucket-name'                     
        });

        // 构造一个唯一的文件名，防止重名覆盖 (例如: products/16980234123-842.jpg)
        const fileExtension = file.name.split('.').pop();
        const uniqueFileName = `products/${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExtension}`;

        // 调用 put 接口上传文件
        console.log(`开始上传图片至 OSS: ${uniqueFileName}`);
        const result = await client.put(uniqueFileName, file);
        
        // 返回 OSS 上的可访问链接
        // 注意：如果你的 Bucket 是私有的，这里返回的 URL 会带有签名，过期后无法访问。
        // 对于产品图片，通常建议将 Bucket 读权限设置为“公共读”。
        return result.url; 
        
    } catch (error) {
        console.error('OSS 上传失败:', error);
        throw new Error('图片上传到云存储失败，请检查网络或配置');
    }
}
// =========================================

async function handleProductFormSubmit(e) {
    e.preventDefault();
    const productData = getProductFormData();

    if (!productData.name) {
        showNotification('产品名称是必填项', 'error');
        return;
    }

    const submitBtn = document.querySelector('#productForm button[type="submit"]');
    const originalText = submitBtn?.innerHTML || '';
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';
    }

    try {
        // ========== 新增：上传云存储逻辑占位 ==========
        let finalImageUrl = currentProductImageUrl; // 默认使用已有的 URL（如果是编辑状态）

        // 如果用户选择了新文件，先将其上传到云存储
        if (productData.imageFile) {
            console.log('准备上传的原始文件对象:', productData.imageFile);
            
        // TODO: 在这里调用你的云存储上传函数，获取真实 URL
        // 如果用户选择了新文件，先将其直传到阿里云 OSS
        if (productData.imageFile) {
            // 给用户一个上传中的提示
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> 上传图片中...';
            }
            
            // 调用我们刚才写好的 OSS 上传函数，并等待返回真实的云端 URL
            finalImageUrl = await uploadToOSS(productData.imageFile);
            
            // 图片上传完成后，更新按钮状态，准备提交表单数据
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 保存数据中...';
            }
        }
            // 演示用：模拟上传成功后获取到的云端 URL
            finalImageUrl = 'https://your-cloud-storage.com/path/image.jpg'; 
        }

        // 构造最终要发给后端的 JSON 负载 (剔除无法序列化的 File 对象)
        const payload = { ...productData, thumbnail_url: finalImageUrl };
        delete payload.imageFile; 
        // ==============================================

        const isEdit = currentEditingProductId !== null;
        const endpoint = isEdit ? API_ENDPOINTS.UPDATE_PRODUCT(currentEditingProductId) : API_ENDPOINTS.CREATE_PRODUCT;
        const method = isEdit ? 'PATCH' : 'POST';

        const response = await fetch(endpoint, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        // 检查请求是否成功
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(getErrorMessageFromResponse(errorData, '提交失败'));
        }

        // 成功后的处理：显示通知、重置表单、刷新列表
        showNotification(isEdit ? '产品更新成功' : '产品创建成功', 'success');
        setFormModeForCreate();
        await loadProductList();

    } catch (error) {
        console.error('表单提交错误:', error);
        showNotification(error.message || '网络或服务器错误，请重试', 'error');
    } finally {
        // 无论成功还是失败，都恢复提交按钮的状态
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }
}
function setFormModeForCreate() {
    currentEditingProductId = null;
    currentProductImageFile = null; // 清空暂存文件
    currentProductImageUrl = '';    // 清空预览链接
    const productForm = document.getElementById('productForm');
    const submitBtn = document.getElementById('productSubmitBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const formFeedback = document.getElementById('formFeedback');

    productForm?.reset();
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-save"></i> 创建产品';
        submitBtn.style.background = '#27ae60';
    }
    if (cancelEditBtn) cancelEditBtn.style.display = 'none';
    if (formFeedback) {
        formFeedback.style.display = 'none';
        formFeedback.style.background = '#d4edda';
        formFeedback.style.color = '#155724';
    }

    // 清空文件输入框和隐藏预览
    const imageInput = document.getElementById('productImage');
    if (imageInput) imageInput.value = '';
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    if (imagePreviewContainer) imagePreviewContainer.style.display = 'none';
}

function setFormModeForEdit(product) {
    currentEditingProductId = product.product_id || product.id;

    const formCard = document.getElementById('productFormCard');
    const toggleBtn = document.getElementById('toggleFormBtn');
    const submitBtn = document.getElementById('productSubmitBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const feedback = document.getElementById('formFeedback');
    const feedbackMessage = document.getElementById('feedbackMessage');

    if (formCard) formCard.style.display = 'block';
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-minus"></i> 隐藏表单';

    const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val ?? '';
    };
    setVal('productName', product.name);
    setVal('productNameCn', product.name_cn);
    setVal('productPrice', product.price ?? 0);
    setVal('productCategory', product.category ?? '');
    setVal('productDescription', product.description ?? '');
    setVal('productDescriptionCn', product.description_cn ?? '');
    

    // 处理编辑时的图片回显
    currentProductImageFile = null; // 编辑时不自带新文件，除非用户重新选
    currentProductImageUrl = product.thumbnail_url || ''; // 改为读取数据库的 thumbnail_url 字段
    
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    const imagePreview = document.getElementById('imagePreview');
    const imageInput = document.getElementById('productImage');
    
    if (imageInput) imageInput.value = ''; // 清空输入框
    
    if (currentProductImageUrl && imagePreview && imagePreviewContainer) {
        imagePreview.src = currentProductImageUrl;
        imagePreviewContainer.style.display = 'block';
    } else if (imagePreviewContainer) {
        imagePreviewContainer.style.display = 'none';
    }

    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-pen"></i> 更新产品';
        submitBtn.style.background = '#f39c12';
    }
    if (cancelEditBtn) cancelEditBtn.style.display = 'inline-block';
    if (feedback && feedbackMessage) {
        feedback.style.display = 'block';
        feedback.style.background = '#fff8e1';
        feedback.style.color = '#8a6d3b';
        feedbackMessage.textContent = `正在编辑产品 ID: ${currentEditingProductId}`;
    }
}


async function loadProductList() {
    const tbody = document.getElementById('productTableBody');
    if (!tbody) return;

    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:#7f8c8d;padding:20px;">正在加载产品...</td></tr>';

    try {
        const response = await fetch(API_ENDPOINTS.LIST_PRODUCTS);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const products = Array.isArray(data) ? data : (data.products || []);
        renderProductTable(products);

        const badge = document.getElementById('productCountBadge');
        if (badge) badge.textContent = String(products.length);
    } catch (error) {
        console.error(error);
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:#e74c3c;padding:20px;">加载失败，请确认后端已启动</td></tr>';
    }
}

function renderProductTable(products) {
    const tbody = document.getElementById('productTableBody');
    if (!tbody) return;

    if (!products.length) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:#7f8c8d;padding:20px;">暂无产品数据</td></tr>';
        return;
    }

    tbody.innerHTML = products.map((p) => {
        const id = p.product_id || p.id || '';
        return `
            <tr>
                <td>${id}</td>
                <td>${escapeHtml(p.name || '')}</td>
                <td>${escapeHtml(p.name_cn || '')}</td>
                <td>${formatPrice(p.price)}</td>
                <td>${escapeHtml(p.category || '')}</td>
                <td>${escapeHtml(p.status || '')}</td>
                <td>
                    <button class="btn-view" data-action="edit" data-id="${id}" style="margin-right:6px;">
                        <i class="fas fa-pen"></i> 编辑
                    </button>
                    <button class="btn-view" data-action="delete" data-id="${id}" style="background:#e74c3c;color:#fff;">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

async function handleEditProduct(productId) {
    try {
        const response = await fetch(API_ENDPOINTS.GET_PRODUCT(productId));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const product = await response.json();
        setFormModeForEdit(product);
    } catch (error) {
        console.error(error);
        showNotification('加载产品详情失败', 'error');
    }
}

async function handleDeleteProduct(productId) {
    const confirmed = window.confirm(`确认删除产品 ID: ${productId} ?`);
    if (!confirmed) return;

    try {
        const response = await fetch(API_ENDPOINTS.GET_PRODUCT(productId), { method: 'DELETE' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        showNotification('产品删除成功', 'success');
        await loadProductList();
        if (String(currentEditingProductId) === String(productId)) {
            setFormModeForCreate();
        }
    } catch (error) {
        console.error(error);
        showNotification('删除产品失败', 'error');
    }
}

function getErrorMessageFromResponse(data, fallback) {
    if (!data) return fallback;
    if (typeof data === 'string') return data;
    if (data.error) return data.error;
    if (data.message) return data.message;
    if (data.details && typeof data.details === 'object') {
        const k = Object.keys(data.details)[0];
        if (k) return data.details[k];
    }
    return fallback;
}

//function updateStockAlertCount(productData) {
//   const lowStockCard = document.querySelector('.card:nth-child(4) .card-value');
//    if (lowStockCard) {
//        const current = parseInt(lowStockCard.textContent || '0', 10);
//       lowStockCard.textContent = String(current + 1);
//    }
//
//    const inventoryAlert = document.querySelector('.inventory-alert');
//    if (!inventoryAlert || productData.stock >= 50) return;
//
//    const newAlert = document.createElement('div');
//    newAlert.className = 'alert-item';
//    newAlert.innerHTML = `
//        <div class="product-info">
//            <div class="product-img"><i class="fas fa-box"></i></div>
//            <div>
//                <div class="product-name" style="font-weight:600;">${escapeHtml(productData.name)}</div>
//                <div class="product-stock" style="font-size:.9rem;color:#666;">库存: ${productData.stock}</div>
//               <div class="stock-level">
//                    <div class="stock-fill ${productData.stock > 20 ? 'stock-medium' : 'stock-low'}" style="width:${Math.min(productData.stock, 100)}%"></div>
//                </div>
//            </div>
//        </div>
//       <button class="btn btn-small" onclick="viewProductDetail('')">
//            <i class="fas fa-eye"></i> 查看
//        </button>
//    `;
//
//    if (inventoryAlert.firstChild) inventoryAlert.insertBefore(newAlert, inventoryAlert.firstChild);
//    else inventoryAlert.appendChild(newAlert);
//}

function updateProductCountBadge() {
    const badge = document.getElementById('productCountBadge');
    if (!badge) return;
    const current = parseInt(badge.textContent || '0', 10);
    badge.textContent = String(current + 1);
}

function viewProductDetail(productId) {
    alert(`查看产品: ${productId}`);
}

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
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

(function addNotificationStyles() {
    if (document.getElementById('notification-styles')) return;
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        .notification-popup { position: fixed; top: 20px; right: 20px; background: #fff; border-radius: 8px; padding: 15px 20px; box-shadow: 0 4px 12px rgba(0,0,0,.15); z-index: 9999; min-width: 300px; transform: translateX(150%); transition: transform .3s ease; border-left: 4px solid #3498db; }
        .notification-popup.show { transform: translateX(0); }
        .notification-popup.success { border-left-color: #27ae60; }
        .notification-popup.error { border-left-color: #e74c3c; }
        .notification-content { display: flex; align-items: center; gap: 10px; }
    `;
    document.head.appendChild(style);
})();

async function fetchProductDetails(productId) {
    try {
        const response = await fetch(API_ENDPOINTS.GET_PRODUCT(productId));
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatPrice(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return '¥0.00';
    return `¥${n.toFixed(2)}`;
}

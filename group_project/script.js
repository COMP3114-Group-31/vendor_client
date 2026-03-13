// ==========================================
// 🌐 i18n 国际化字典
// ==========================================
const i18n = {
    en: {
        app_title: "Vendor Portal",
        menu_dashboard: "Dashboard",
        menu_products: "Products",
        menu_orders: "Orders",
        menu_inventory: "Inventory",
        menu_sales: "Sales Analytics",
        menu_finance: "Finance",
        menu_shipping: "Shipping",
        menu_settings: "System Settings",
        menu_help: "Help Center",
        user_role: "Vendor Admin",
        
        search_dash: "Search orders or customers...",
        search_prod: "Search products...",
        
        dashboard_title: "Vendor Dashboard",
        today_orders: "Today's Orders",
        today_orders_desc: "From order database",
        today_orders_hint: "New orders today",
        pending_orders: "Pending Orders",
        pending_orders_desc: "Currently pending",
        pending_orders_hint: "Needs immediate action",
        month_sales: "Monthly Sales",
        month_sales_desc: "Total sales this month",
        month_sales_hint: "From order database",
        total_products: "Total Products",
        total_products_desc: "Current inventory count",
        total_products_hint: "Go to products",
        recent_orders: "Recent Orders",
        loading_dashboard: "Loading dashboard data...",
        
        add_product: "Add Product",
        show_form: "Show Form",
        hide_form: "Hide Form",
        form_product_name: "Product Name",
        form_product_name_cn: "Chinese Name",
        form_price: "Price",
        form_category: "Category",
        form_status: "Status",
        form_desc: "Description",
        form_desc_cn: "Chinese Description",
        form_cover: "Cover Image (Max 1)",
        form_details: "Detail Images (Multiple)",
        cover_preview: "Cover Preview:",
        details_preview: "Details Preview:",
        
        btn_reset: "Reset",
        btn_cancel: "Cancel",
        btn_create: "Create Product",
        btn_update: "Update Product",
        btn_refresh: "Refresh",
        btn_edit: "Edit",
        btn_delete: "Delete",
        btn_view: "View",
        btn_save_order: "Save Order",
        btn_update_status: "Update Status",
        
        product_list: "Product List",
        th_id: "ID",
        th_cover: "Cover",
        th_name: "Name",
        th_name_cn: "Chinese Name",
        th_price: "Price",
        th_category: "Category",
        th_status: "Status",
        th_action: "Action",
        loading_products: "Loading products...",
        no_products: "No products found",
        tag_cover: "Cover",
        no_image: "No image",
        
        cat_select: "Select Category",
        cat_phone: "Phone",
        cat_tablet: "Tablet",
        cat_laptop: "Laptop",
        cat_accessory: "Accessory",
        cat_other: "Other",
        
        status_active: "Active",
        status_inactive: "Inactive",
        
        order_management: "Order Management",
        add_edit_order: "Add/Edit Order",
        customer_name: "Customer Name",
        order_total: "Total Amount ($)",
        order_status: "Order Status",
        order_list: "Order List",
        th_order_id: "Order ID",
        th_customer: "Customer",
        th_total: "Total",
        th_date: "Date",
        loading_orders: "Loading orders...",
        no_orders: "No orders found",
        
        status_pending: "Pending",
        status_processing: "Processing",
        status_shipped: "Shipped",
        status_delivered: "Delivered",
        
        settings_title: "System Settings",
        set_language: "Interface Language",
        set_font_size: "Font Size Adjustment",
        set_font_hint: "Drag the slider to adjust the global interface scale.",

        msg_test_create: "[Test] Created successfully",
        msg_test_update: "[Test] Updated successfully",
        msg_test_del_img: "[Test] Image deleted",
        msg_test_del_prod: "[Test] Product deleted",
        msg_test_del_order: "[Test] Order deleted",
        msg_req_name: "Product name is required",
        msg_uploading_cover: "Uploading cover...",
        msg_uploading_details: "Uploading details...",
        msg_submitting: "Submitting...",
        msg_success_prod: "Product saved",
        msg_success_order: "Order saved",
        msg_del_img_confirm: "Delete this image immediately?",
        msg_del_prod_confirm: "Confirm deletion of Product ID: ",
        msg_del_order_confirm: "Confirm deletion of Order #"
    },
    zh: {
        app_title: "供应商中心",
        menu_dashboard: "仪表板",
        menu_products: "产品管理",
        menu_orders: "订单管理",
        menu_inventory: "库存管理",
        menu_sales: "销售分析",
        menu_finance: "财务结算",
        menu_shipping: "发货管理",
        menu_settings: "系统设置",
        menu_help: "帮助中心",
        user_role: "供应商管理",
        
        search_dash: "搜索订单或客户...",
        search_prod: "搜索产品名称...",
        
        dashboard_title: "供应商仪表板",
        today_orders: "今日订单",
        today_orders_desc: "来自订单数据库",
        today_orders_hint: "今日新订单数量",
        pending_orders: "待处理订单",
        pending_orders_desc: "当前待处理订单",
        pending_orders_hint: "需要立即处理",
        month_sales: "本月销售额",
        month_sales_desc: "本月订单金额汇总",
        month_sales_hint: "来自订单数据库",
        total_products: "产品总数",
        total_products_desc: "当前商品记录数",
        total_products_hint: "点击前往产品管理",
        recent_orders: "最近订单",
        loading_dashboard: "正在加载仪表盘数据...",
        
        add_product: "新增产品",
        show_form: "显示表单",
        hide_form: "隐藏表单",
        form_product_name: "产品名称",
        form_product_name_cn: "中文名称",
        form_price: "价格",
        form_category: "分类",
        form_status: "状态",
        form_desc: "产品描述",
        form_desc_cn: "中文描述",
        form_cover: "商品封面图 / 缩略图 (仅 1 张)",
        form_details: "商品详情大图 (支持多张)",
        cover_preview: "封面图预览：",
        details_preview: "详情大图预览：",
        
        btn_reset: "重置",
        btn_cancel: "取消编辑",
        btn_create: "创建产品",
        btn_update: "更新产品",
        btn_refresh: "刷新",
        btn_edit: "编辑",
        btn_delete: "删除",
        btn_view: "查看",
        btn_save_order: "保存订单",
        btn_update_status: "更新状态",
        
        product_list: "产品列表",
        th_id: "编号",
        th_cover: "封面",
        th_name: "名称",
        th_name_cn: "中文名称",
        th_price: "价格",
        th_category: "分类",
        th_status: "状态",
        th_action: "操作",
        loading_products: "正在加载产品...",
        no_products: "暂无产品数据",
        tag_cover: "封面",
        no_image: "无图片",
        
        cat_select: "选择分类",
        cat_phone: "手机",
        cat_tablet: "平板",
        cat_laptop: "笔记本电脑",
        cat_accessory: "配件",
        cat_other: "其他",
        
        status_active: "启用",
        status_inactive: "停用",
        
        order_management: "订单管理",
        add_edit_order: "新增/编辑订单",
        customer_name: "客户名称",
        order_total: "订单总额 ($)",
        order_status: "订单状态",
        order_list: "订单列表",
        th_order_id: "订单号",
        th_customer: "客户",
        th_total: "总额",
        th_date: "日期",
        loading_orders: "正在加载订单...",
        no_orders: "暂无订单数据",
        
        status_pending: "待处理",
        status_processing: "处理中",
        status_shipped: "已发货",
        status_delivered: "已交付",
        
        settings_title: "系统设置",
        set_language: "界面语言",
        set_font_size: "全局字体调整",
        set_font_hint: "拖动滑块可等比例缩放整个界面的文字大小。",

        msg_test_create: "【测试】创建成功",
        msg_test_update: "【测试】更新成功",
        msg_test_del_img: "【测试】图片已删除",
        msg_test_del_prod: "【测试】产品删除成功",
        msg_test_del_order: "【测试】订单删除成功",
        msg_req_name: "产品名称是必填项",
        msg_uploading_cover: "上传封面中...",
        msg_uploading_details: "上传详情图中...",
        msg_submitting: "提交中...",
        msg_success_prod: "产品保存成功",
        msg_success_order: "订单保存成功",
        msg_del_img_confirm: "确认要直接从列表中删除这张图片吗？",
        msg_del_prod_confirm: "确认删除产品 ID: ",
        msg_del_order_confirm: "确认删除订单 #"
    }
};

// ==========================================
// 🌟 核心开关与基础设置
// ==========================================
const USE_MOCK_DATA = true; 
let currentLang = localStorage.getItem('vendor_lang') || 'en'; // 默认英文

// 获取翻译工具函数
function t(key) {
    return i18n[currentLang][key] || key;
}

// 📦 模拟数据库
let mockProducts = [
    {
        product_id: 'P1001',
        name: 'iPhone 15 Pro Max',
        name_cn: '苹果 15 Pro Max',
        price: 1199.00,
        category: 'phone',
        status: 'active',
        description: 'The latest iPhone featuring titanium design, A17 Pro chip, and a more advanced 48MP main camera system.',
        description_cn: '最新款 iPhone，采用航空级钛金属设计，搭载 A17 Pro 芯片，配备更先进的 4800 万像素主摄系统。',
        thumbnail_url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=200',
        media: [
            { media_id: 'm1', url: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=200' },
            { media_id: 'm2', url: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=200' }
        ]
    },
    {
        product_id: 'P1002',
        name: 'MacBook Air M2',
        name_cn: '苹果 MacBook Air M2',
        price: 999.00,
        category: 'laptop',
        status: 'active',
        description: 'Supercharged by M2. Thinly designed and highly capable with up to 18 hours of battery life.',
        description_cn: 'M2 芯片强势驱动。极致轻薄的设计，蕴含澎湃性能，电池续航最长可达 18 小时。',
        thumbnail_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=200',
        media: [
            { media_id: 'm3', url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=200' }
        ]
    }
];

let mockOrders = [
    {
        order_id: 'ORD-9921',
        customer_name: 'Tech Inc. (Test)',
        total_amount: 2198.00,
        status: 'processing',
        created_at: new Date().toISOString(),
        items: [{ product_name: 'iPhone 15 Pro Max', quantity: 1 }, { product_name: 'MacBook Air M2', quantity: 1 }]
    },
    {
        order_id: 'ORD-9920',
        customer_name: 'Global CrossBorder',
        total_amount: 1199.00,
        status: 'pending',
        created_at: new Date(Date.now() - 86400000).toISOString(),
        items: [{ product_name: 'iPhone 15 Pro Max', quantity: 1 }]
    }
];

const API_ENDPOINTS = {
    DASHBOARD_SUMMARY: '/dashboard/summary',
    CREATE_PRODUCT: '/products',
    LIST_PRODUCTS: '/products',
    GET_PRODUCT: (id) => `/products/${id}`,
    UPDATE_PRODUCT: (id) => `/products/${id}`,
    UPDATE_STATUS: (id) => `/products/${id}/status`,
    CREATE_ORDER: '/orders',
    LIST_ORDERS: '/orders',
    GET_ORDER: (id) => `/orders/${id}`,
    UPDATE_ORDER: (id) => `/orders/${id}`,
    DELETE_ORDER: (id) => `/orders/${id}`
};

let currentEditingProductId = null;
let currentEditingProductStatus = 'active';
let currentEditingOrderId = null; 

let currentExistingCoverUrl = '';
let currentNewCoverFile = null;
let currentExistingMedia = []; 
let currentNewFiles = []; 
let currentDashboardSearch = '';
let currentProductSearch = '';
let currentOrderSearch = '';

// ==========================================
// 初始化
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    initSystemSettings(); // 初始化语言和字体
    initVendorPortal();
    initProductManagement();
    initOrderManagement(); 
    loadDashboardSummary();
});

// ==========================================
// 全新功能：系统设置与多语言引擎
// ==========================================
function initSystemSettings() {
    // 1. 初始化字体大小
    const savedFontSize = localStorage.getItem('vendor_font_size') || '16';
    document.documentElement.style.fontSize = savedFontSize + 'px';
    const fontSlider = document.getElementById('fontSizeSlider');
    const fontDisplay = document.getElementById('fontSizeDisplay');
    
    if (fontSlider && fontDisplay) {
        fontSlider.value = savedFontSize;
        fontDisplay.textContent = savedFontSize + 'px';
        
        fontSlider.addEventListener('input', (e) => {
            const size = e.target.value;
            document.documentElement.style.fontSize = size + 'px';
            fontDisplay.textContent = size + 'px';
            localStorage.setItem('vendor_font_size', size);
        });
    }

    // 2. 初始化界面语言
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('vendor_lang', currentLang);
            updateInterfaceLanguage();
        });
    }
    
    updateInterfaceLanguage(); 
}

function updateInterfaceLanguage() {
    // 遍历所有带有 data-i18n 的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!i18n[currentLang][key]) return;
        
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.hasAttribute('placeholder')) {
                el.placeholder = t(key);
            }
        } else {
            el.textContent = t(key);
        }
    });

    // 动态更新搜索框 Placeholder
    updateGlobalSearchPlaceholder(document.querySelector('.menu-item.active')?.getAttribute('data-target'));

    // 重新渲染当前激活页面的表格（为了翻译表格数据内的按钮和状态）
    const activeSection = document.querySelector('.content-section[style*="block"]')?.id;
    if (activeSection === 'productSection') loadProductList();
    if (activeSection === 'orderSection') loadOrderList();
    if (activeSection === 'dashboardSection') loadDashboardSummary();
}

function updateGlobalSearchPlaceholder(targetId) {
    const globalSearchInput = document.getElementById('globalSearchInput');
    if (!globalSearchInput) return;
    if (targetId === 'productSection') {
        globalSearchInput.placeholder = t('search_prod');
    } else {
        globalSearchInput.placeholder = t('search_dash');
    }
}

// ==========================================
// 1. 基础框架与侧边栏逻辑
// ==========================================
function initVendorPortal() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const globalSearchInput = document.getElementById('globalSearchInput');

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

            const targetId = this.getAttribute('data-target');
            if (targetId) {
                document.querySelectorAll('.content-section').forEach(section => {
                    section.style.display = 'none'; 
                });
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block'; 
                }

                if (globalSearchInput) globalSearchInput.value = '';
                updateGlobalSearchPlaceholder(targetId);
                currentDashboardSearch = '';
                currentProductSearch = '';
                currentOrderSearch = '';

                if (targetId === 'dashboardSection') loadDashboardSummary();
                if (targetId === 'productSection') loadProductList();
                if (targetId === 'orderSection') loadOrderList();
            }
        });
    });

    const cardTodayOrders = document.getElementById('cardTodayOrders');
    const cardPendingOrders = document.getElementById('cardPendingOrders');
    const orderMenu = document.querySelector('.menu-item[data-target="orderSection"]');
    const productMenu = document.querySelector('.menu-item[data-target="productSection"]');
    const quickAddProduct = document.getElementById('quickAddProduct');

    if (cardTodayOrders && orderMenu) cardTodayOrders.addEventListener('click', () => orderMenu.click());
    if (cardPendingOrders && orderMenu) cardPendingOrders.addEventListener('click', () => orderMenu.click());
    if (quickAddProduct && productMenu) quickAddProduct.addEventListener('click', () => productMenu.click());

    if (globalSearchInput) {
        globalSearchInput.addEventListener('input', debounce(function () {
            const keyword = (this.value || '').trim();
            const activeTarget = document.querySelector('.menu-item.active')?.getAttribute('data-target');

            if (activeTarget === 'productSection') {
                currentProductSearch = keyword;
                loadProductList();
            } else if (activeTarget === 'orderSection') {
                currentOrderSearch = keyword;
                loadOrderList();
            } else {
                currentDashboardSearch = keyword;
                loadDashboardSummary();
            }
        }, 300));
    }
}

async function loadDashboardSummary() {
    if (USE_MOCK_DATA) {
        document.getElementById('dashboardTodayOrdersValue').textContent = "2";
        document.getElementById('dashboardPendingOrdersValue').textContent = "1";
        document.getElementById('dashboardMonthSalesValue').textContent = "$3397.00";
        document.getElementById('dashboardProductCountValue').textContent = String(mockProducts.length);
        renderDashboardRecentOrders(mockOrders);
        return;
    }

    const recentOrdersBody = document.getElementById('dashboardRecentOrdersBody');
    try {
        const params = new URLSearchParams();
        if (currentDashboardSearch) params.set('search', currentDashboardSearch);
        const url = params.toString() ? `${API_ENDPOINTS.DASHBOARD_SUMMARY}?${params.toString()}` : API_ENDPOINTS.DASHBOARD_SUMMARY;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        document.getElementById('dashboardTodayOrdersValue').textContent = String(Number(data.today_orders || 0));
        document.getElementById('dashboardPendingOrdersValue').textContent = String(Number(data.pending_orders || 0));
        document.getElementById('dashboardMonthSalesValue').textContent = `$${Number(data.month_sales || 0).toFixed(2)}`;
        document.getElementById('dashboardProductCountValue').textContent = String(Number(data.product_count || 0));
        renderDashboardRecentOrders(Array.isArray(data.recent_orders) ? data.recent_orders : []);
    } catch (error) {
        if (recentOrdersBody) {
            recentOrdersBody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#e74c3c;padding:20px;">Failed to load data</td></tr>`;
        }
    }
}

function renderDashboardRecentOrders(orders) {
    const tbody = document.getElementById('dashboardRecentOrdersBody');
    if (!tbody) return;

    if (!orders.length) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#7f8c8d;padding:20px;">${t('no_orders')}</td></tr>`;
        return;
    }

    tbody.innerHTML = orders.map((o) => {
        const id = o.order_id || o.id || '';
        let statusClass = 'status-pending';
        if (o.status === 'processing') statusClass = 'status-processing';
        if (o.status === 'shipped') statusClass = 'status-shipped';
        if (o.status === 'delivered') statusClass = 'status-delivered';

        const localizedStatus = t('status_' + (o.status || 'pending').toLowerCase());

        return `<tr>
            <td>#${id}</td>
            <td>${escapeHtml(o.customer_name || '')}</td>
            <td>${escapeHtml(o.created_at ? new Date(o.created_at).toLocaleDateString() : '-')}</td>
            <td>$${Number(o.total_amount || 0).toFixed(2)}</td>
            <td><span class="status-badge ${statusClass}">${escapeHtml(localizedStatus)}</span></td>
            <td><button class="btn-view" data-dashboard-order-id="${id}"><i class="fas fa-eye"></i> <span data-i18n="btn_view">${t('btn_view')}</span></button></td>
        </tr>`;
    }).join('');

    tbody.querySelectorAll('button[data-dashboard-order-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelector('.menu-item[data-target="orderSection"]')?.click();
            handleEditOrder(btn.getAttribute('data-dashboard-order-id'));
        });
    });
}

// ==========================================
// 2. 产品管理模块逻辑
// ==========================================
function initProductManagement() {
    const toggleFormBtn = document.getElementById('toggleFormBtn');
    if (toggleFormBtn) {
        toggleFormBtn.addEventListener('click', function () {
            const formCard = document.getElementById('productFormCard');
            if (!formCard) return;
            const open = formCard.style.display === 'none';
            formCard.style.display = open ? 'block' : 'none';
            
            // 安全更新 span 内部文本
            this.innerHTML = open 
                ? `<i class="fas fa-minus"></i> <span data-i18n="hide_form">${t('hide_form')}</span>`
                : `<i class="fas fa-plus"></i> <span data-i18n="show_form">${t('show_form')}</span>`;
        });
    }

    document.getElementById('resetFormBtn')?.addEventListener('click', setFormModeForCreate);
    document.getElementById('cancelEditBtn')?.addEventListener('click', setFormModeForCreate);
    document.getElementById('productForm')?.addEventListener('submit', handleProductFormSubmit);
    document.getElementById('refreshProductListBtn')?.addEventListener('click', loadProductList);

    const productTableBody = document.getElementById('productTableBody');
    if (productTableBody) {
        productTableBody.addEventListener('click', async function (e) {
            const deleteMediaBtn = e.target.closest('.btn-delete-media');
            if (deleteMediaBtn) {
                e.stopPropagation();
                const productId = deleteMediaBtn.getAttribute('data-product-id');
                const mediaId = deleteMediaBtn.getAttribute('data-media-id');
                const url = deleteMediaBtn.getAttribute('data-url');
                await handleDeleteProductMedia(productId, mediaId, url);
                return;
            }

            const btn = e.target.closest('button[data-action]');
            if (!btn) return;
            const action = btn.getAttribute('data-action');
            const id = btn.getAttribute('data-id');
            if (!id) return;
            if (action === 'edit') await handleEditProduct(id);
            if (action === 'delete') await handleDeleteProduct(id);
        });
    }

    const imageInput = document.getElementById('productImage');
    if (imageInput) {
        imageInput.addEventListener('change', function(e) {
            const files = Array.from(e.target.files);
            files.forEach(file => {
                currentNewFiles.push({ file: file, url: URL.createObjectURL(file) });
            });
            renderImagePreviews(); 
            e.target.value = ''; 
        });
    }

    const coverInput = document.getElementById('productCoverImage');
    if (coverInput) {
        coverInput.addEventListener('change', function (e) {
            const file = e.target.files?.[0];
            if (!file) return;
            if (currentNewCoverFile?.url) URL.revokeObjectURL(currentNewCoverFile.url);
            currentNewCoverFile = { file: file, url: URL.createObjectURL(file) };
            renderCoverPreview();
            e.target.value = '';
        });
    }

    setFormModeForCreate();
}

function renderCoverPreview() {
    const container = document.getElementById('coverPreviewContainer');
    const list = document.getElementById('coverPreviewList');
    if (!container || !list) return;

    list.innerHTML = '';
    const coverUrl = currentNewCoverFile?.url || currentExistingCoverUrl;
    container.style.display = coverUrl ? 'block' : 'none';
    if (!coverUrl) return;

    const canDelete = !!currentNewCoverFile;
    list.appendChild(createImageWrapper(coverUrl, () => {
        if (currentNewCoverFile?.url) URL.revokeObjectURL(currentNewCoverFile.url);
        currentNewCoverFile = null;
        renderCoverPreview();
    }, canDelete));
}

function renderImagePreviews() {
    const container = document.getElementById('imagePreviewContainer');
    const list = document.getElementById('imagePreviewList');
    if (!container || !list) return;

    list.innerHTML = '';
    const hasImages = currentExistingMedia.length > 0 || currentNewFiles.length > 0;
    container.style.display = hasImages ? 'block' : 'none';

    currentExistingMedia.forEach((media, index) => {
        const wrap = createImageWrapper(media.url, () => {
            currentExistingMedia.splice(index, 1); 
            renderImagePreviews(); 
        });
        list.appendChild(wrap);
    });

    currentNewFiles.forEach((item, index) => {
        const wrap = createImageWrapper(item.url, () => {
            URL.revokeObjectURL(item.url); 
            currentNewFiles.splice(index, 1);
            renderImagePreviews();
        });
        list.appendChild(wrap);
    });
}

function createImageWrapper(src, onDelete, showDelete = true) {
    const div = document.createElement('div');
    div.style.position = 'relative';
    div.style.width = '80px';
    div.style.height = '80px';
    
    const img = document.createElement('img');
    img.src = src;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '5px';
    img.style.border = '1px solid #ddd';

    div.appendChild(img);
    if (showDelete) {
        const delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="fas fa-times"></i>';
        delBtn.style.position = 'absolute';
        delBtn.style.top = '-6px';
        delBtn.style.right = '-6px';
        delBtn.style.background = '#e74c3c';
        delBtn.style.color = 'white';
        delBtn.style.border = 'none';
        delBtn.style.borderRadius = '50%';
        delBtn.style.width = '20px';
        delBtn.style.height = '20px';
        delBtn.style.cursor = 'pointer';
        delBtn.style.display = 'flex';
        delBtn.style.alignItems = 'center';
        delBtn.style.justifyContent = 'center';
        delBtn.style.fontSize = '12px';
        delBtn.onclick = (e) => { e.preventDefault(); onDelete(); };
        div.appendChild(delBtn);
    }
    return div;
}

async function uploadCoverByBackend(productId, file) {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`/products/${productId}/images/cover`, { method: 'POST', body: formData });
    const data = await response.json().catch(() => null);
    if (!response.ok) throw new Error(getErrorMessageFromResponse(data, 'Cover upload failed'));
    return data;
}

async function uploadDetailImagesByBackend(productId, files) {
    const formData = new FormData();
    files.forEach(file => { formData.append('files', file); });
    const response = await fetch(`/products/${productId}/images?set_first_as_main=false`, { method: 'POST', body: formData });
    const data = await response.json().catch(() => null);
    if (!response.ok) throw new Error(getErrorMessageFromResponse(data, 'Details upload failed'));
    return data;
}

async function handleProductFormSubmit(e) {
    e.preventDefault();
    const name = (document.getElementById('productName')?.value || '').trim();
    const selectedStatus = (document.getElementById('productStatus')?.value || 'active').trim().toLowerCase();
    const description = (document.getElementById('productDescription')?.value || '').trim();
    const descriptionCn = (document.getElementById('productDescriptionCn')?.value || '').trim();
    
    if (!name) return showNotification(t('msg_req_name'), 'error');

    if (USE_MOCK_DATA) {
        const isEdit = currentEditingProductId !== null;
        const newProduct = {
            product_id: isEdit ? currentEditingProductId : 'P' + Date.now().toString().slice(-4),
            name: name,
            name_cn: document.getElementById('productNameCn')?.value || '',
            price: parseFloat(document.getElementById('productPrice')?.value) || 0,
            category: document.getElementById('productCategory')?.value || '',
            status: selectedStatus,
            description: description,       
            description_cn: descriptionCn,  
            thumbnail_url: currentNewCoverFile?.url || currentExistingCoverUrl || '',
            media: [...currentExistingMedia, ...currentNewFiles.map((f, i) => ({ media_id: 'new_'+i, url: f.url }))]
        };

        if (isEdit) {
            const idx = mockProducts.findIndex(p => p.product_id === currentEditingProductId);
            if (idx > -1) mockProducts[idx] = { ...mockProducts[idx], ...newProduct };
        } else {
            mockProducts.unshift(newProduct);
        }

        showNotification(isEdit ? t('msg_test_update') : t('msg_test_create'), 'success');
        setFormModeForCreate();
        loadProductList();
        return;
    }

    const submitBtn = document.querySelector('#productForm button[type="submit"]');
    const originalText = submitBtn?.innerHTML || '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span data-i18n="msg_submitting">${t('msg_submitting')}</span>`; }

    try {
        const isEdit = currentEditingProductId !== null;
        const endpoint = isEdit ? API_ENDPOINTS.UPDATE_PRODUCT(currentEditingProductId) : API_ENDPOINTS.CREATE_PRODUCT;
        
        const payload = {
            name: name,
            name_cn: (document.getElementById('productNameCn')?.value || '').trim(),
            price: parseFloat(document.getElementById('productPrice')?.value) || 0,
            category: document.getElementById('productCategory')?.value || '',
            description: description,      
            description_cn: descriptionCn,
            media: currentExistingMedia.map(m => ({ media_id: m.media_id, media_type: m.media_type || 'image', url: m.url }))
        };

        const response = await fetch(endpoint, { method: isEdit ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error('Basic info submission failed');
        const responseData = await response.json().catch(() => ({}));
        const productId = isEdit ? currentEditingProductId : responseData?.product_id;

        if (!productId) throw new Error('Product saved but failed to fetch ID for images');

        if (!isEdit || selectedStatus !== currentEditingProductStatus) {
            await fetch(API_ENDPOINTS.UPDATE_STATUS(productId), { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: selectedStatus }) });
        }

        if (currentNewCoverFile?.file && productId) {
            if (submitBtn) submitBtn.innerHTML = `<i class="fas fa-image"></i> ${t('msg_uploading_cover')}`;
            await uploadCoverByBackend(productId, currentNewCoverFile.file);
        }

        const filesToUpload = currentNewFiles.map(item => item.file);
        if (filesToUpload.length > 0 && productId) {
            if (submitBtn) submitBtn.innerHTML = `<i class="fas fa-images"></i> ${t('msg_uploading_details')}`;
            await uploadDetailImagesByBackend(productId, filesToUpload);
        }

        showNotification(t('msg_success_prod'), 'success');
        setFormModeForCreate();
        await loadProductList();
    } catch (error) {
        showNotification(error.message || 'Operation failed', 'error');
    } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalText; }
    }
}

function setFormModeForCreate() {
    currentEditingProductId = null;
    currentEditingProductStatus = 'active';
    currentExistingCoverUrl = '';
    currentExistingMedia = []; 

    if (currentNewCoverFile?.url) URL.revokeObjectURL(currentNewCoverFile.url);
    currentNewCoverFile = null;
    
    if (currentNewFiles.length > 0) currentNewFiles.forEach(item => URL.revokeObjectURL(item.url));
    currentNewFiles = [];      

    document.getElementById('productForm')?.reset();
    const statusSelect = document.getElementById('productStatus');
    if (statusSelect) statusSelect.value = 'active';
    
    const submitBtn = document.getElementById('productSubmitBtn');
    if (submitBtn) { submitBtn.innerHTML = `<i class="fas fa-save"></i> <span data-i18n="btn_create">${t('btn_create')}</span>`; submitBtn.style.background = '#27ae60'; }
    const cancelBtn = document.getElementById('cancelEditBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';

    renderCoverPreview();
    renderImagePreviews();
}

function setFormModeForEdit(product) {
    currentEditingProductId = product.product_id || product.id;
    document.getElementById('productFormCard').style.display = 'block';
    
    document.getElementById('toggleFormBtn').innerHTML = `<i class="fas fa-minus"></i> <span data-i18n="hide_form">${t('hide_form')}</span>`;

    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val ?? ''; };
    setVal('productName', product.name);
    setVal('productNameCn', product.name_cn);
    setVal('productPrice', product.price ?? 0);
    setVal('productCategory', product.category ?? '');
    setVal('productStatus', (product.status || 'active').toLowerCase());
    setVal('productDescription', product.description ?? '');
    setVal('productDescriptionCn', product.description_cn ?? '');
    
    currentEditingProductStatus = (product.status || 'active').toLowerCase();

    currentExistingCoverUrl = product.thumbnail_url || product.cover_image_url || '';
    if (currentNewCoverFile?.url) URL.revokeObjectURL(currentNewCoverFile.url);
    currentNewCoverFile = null;

    currentExistingMedia = Array.isArray(product.detail_images) && product.detail_images.length > 0
        ? [...product.detail_images]
        : (Array.isArray(product.media) && product.media.length > 0 ? [...product.media] : []);
    
    if (currentNewFiles.length > 0) currentNewFiles.forEach(item => URL.revokeObjectURL(item.url));
    currentNewFiles = [];
    
    renderCoverPreview();
    renderImagePreviews();

    const submitBtn = document.getElementById('productSubmitBtn');
    if (submitBtn) { submitBtn.innerHTML = `<i class="fas fa-pen"></i> <span data-i18n="btn_update">${t('btn_update')}</span>`; submitBtn.style.background = '#f39c12'; }
    document.getElementById('cancelEditBtn').style.display = 'inline-block';
}

async function loadProductList() {
    const tbody = document.getElementById('productTableBody');
    if (!tbody) return;
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:#7f8c8d;padding:20px;"><span data-i18n="loading_products">${t('loading_products')}</span></td></tr>`;

    if (USE_MOCK_DATA) {
        setTimeout(() => { 
            const kw = currentProductSearch.toLowerCase();
            const filtered = kw 
                ? mockProducts.filter(p => (p.name || '').toLowerCase().includes(kw) || (p.name_cn || '').toLowerCase().includes(kw)) 
                : mockProducts;
            document.getElementById('productCountBadge').textContent = String(filtered.length);
            renderProductTable(filtered);
        }, 300);
        return;
    }

    try {
        const params = new URLSearchParams();
        if (currentProductSearch) params.set('search', currentProductSearch);
        const url = params.toString() ? `${API_ENDPOINTS.LIST_PRODUCTS}?${params.toString()}` : API_ENDPOINTS.LIST_PRODUCTS;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const products = Array.isArray(data) ? data : (data.products || []);
        
        const badge = document.getElementById('productCountBadge');
        if (badge) badge.textContent = String(products.length);
        renderProductTable(products);
    } catch (error) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:#e74c3c;padding:20px;">Failed to load</td></tr>';
    }
}

function renderProductTable(products) {
    const tbody = document.getElementById('productTableBody');
    if (!tbody) return;

    if (!products.length) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:#7f8c8d;padding:20px;">${t('no_products')}</td></tr>`;
        return;
    }

    tbody.innerHTML = products.map((p) => {
        const id = p.product_id || p.id || '';
        const coverUrl = p.thumbnail_url || p.cover_image_url || '';
        const coverHtml = coverUrl ? `
            <div style="position: relative; width: 45px; height: 45px; display: inline-block; margin-right: 6px; margin-bottom: 6px;">
                <img src="${coverUrl}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;">
                <span style="position:absolute;left:2px;bottom:2px;background:#27ae60;color:#fff;font-size:9px;padding:1px 4px;border-radius:10px;">${t('tag_cover')}</span>
            </div>
        ` : '';

        const mediaArray = Array.isArray(p.detail_images) && p.detail_images.length > 0 
            ? p.detail_images : (Array.isArray(p.media) ? p.media : []);
            
        const detailsHtml = mediaArray.map(m => `
            <div style="position: relative; width: 45px; height: 45px; display: inline-block; margin-right: 6px; margin-bottom: 6px;">
                <img src="${m.url}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;">
                <button class="btn-delete-media" data-product-id="${id}" data-media-id="${m.media_id || ''}" data-url="${m.url}" 
                        style="position: absolute; top: -5px; right: -5px; background: #e74c3c; color: white; border: none; border-radius: 50%; width: 16px; height: 16px; font-size: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.3);">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        const imageHtml = (coverHtml + detailsHtml) || `<span style="color: #999; font-size: 12px;">${t('no_image')}</span>`;
        const localStatus = p.status === 'inactive' ? t('status_inactive') : t('status_active');
        const localCat = t('cat_' + (p.category || 'other'));

        return `
            <tr>
                <td>${id}</td>
                <td style="max-width: 180px;">${imageHtml}</td>
                <td>${escapeHtml(p.name || '')}</td>
                <td>${escapeHtml(p.name_cn || '')}</td>
                <td>${formatPrice(p.price)}</td>
                <td>${escapeHtml(localCat)}</td>
                <td>${escapeHtml(localStatus)}</td>
                <td>
                    <button class="btn-view" data-action="edit" data-id="${id}" style="margin-right:6px;"><i class="fas fa-pen"></i> <span data-i18n="btn_edit">${t('btn_edit')}</span></button>
                    <button class="btn-view" data-action="delete" data-id="${id}" style="background:#e74c3c;color:#fff;"><i class="fas fa-trash"></i> <span data-i18n="btn_delete">${t('btn_delete')}</span></button>
                </td>
            </tr>
        `;
    }).join('');
}

async function handleDeleteProductMedia(productId, mediaId, url) {
    if (!window.confirm(t('msg_del_img_confirm'))) return;

    if (USE_MOCK_DATA) {
        const product = mockProducts.find(p => p.product_id === productId);
        if (product && product.media) {
            product.media = product.media.filter(m => m.url !== url);
        }
        showNotification(t('msg_test_del_img'), 'success');
        if (String(currentEditingProductId) === String(productId)) setFormModeForCreate();
        loadProductList();
        return;
    }

    try {
        if (!mediaId) throw new Error('Missing media_id');
        const response = await fetch(`/products/${productId}/images/${mediaId}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete');
        showNotification(t('msg_test_del_img'), 'success');
        if (String(currentEditingProductId) === String(productId)) setFormModeForCreate();
        await loadProductList();
    } catch (error) {
        showNotification(error.message || 'Error', 'error');
    }
}

async function handleEditProduct(productId) {
    if (USE_MOCK_DATA) {
        const product = mockProducts.find(p => p.product_id === productId);
        if (product) setFormModeForEdit(product);
        document.getElementById('productFormCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    try {
        const response = await fetch(API_ENDPOINTS.GET_PRODUCT(productId));
        if (!response.ok) throw new Error('Fetch failed');
        setFormModeForEdit(await response.json());
        document.getElementById('productFormCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
        showNotification('Failed to load detail', 'error');
    }
}

async function handleDeleteProduct(productId) {
    if (!window.confirm(t('msg_del_prod_confirm') + productId + ' ?')) return;

    if (USE_MOCK_DATA) {
        mockProducts = mockProducts.filter(p => p.product_id !== productId);
        showNotification(t('msg_test_del_prod'), 'success');
        loadProductList();
        if (String(currentEditingProductId) === String(productId)) setFormModeForCreate();
        return;
    }

    try {
        const response = await fetch(API_ENDPOINTS.GET_PRODUCT(productId), { method: 'DELETE' });
        if (!response.ok) throw new Error('Delete failed');
        showNotification(t('msg_test_del_prod'), 'success');
        await loadProductList();
        if (String(currentEditingProductId) === String(productId)) setFormModeForCreate();
    } catch (error) {
        showNotification('Delete failed', 'error');
    }
}

// ==========================================
// 3. 订单管理模块逻辑
// ==========================================
function initOrderManagement() {
    const toggleOrderFormBtn = document.getElementById('toggleOrderFormBtn');
    if (toggleOrderFormBtn) {
        toggleOrderFormBtn.addEventListener('click', () => {
            const formCard = document.getElementById('orderFormCard');
            const isHidden = formCard.style.display === 'none';
            formCard.style.display = isHidden ? 'block' : 'none';
            if (isHidden) resetOrderForm();
        });
    }

    document.getElementById('cancelOrderEditBtn')?.addEventListener('click', () => {
        document.getElementById('orderFormCard').style.display = 'none';
        resetOrderForm();
    });

    const orderForm = document.getElementById('orderForm');
    if (orderForm) orderForm.addEventListener('submit', handleOrderSubmit);
    document.getElementById('refreshOrderListBtn')?.addEventListener('click', loadOrderList);

    const orderTableBody = document.getElementById('orderTableBody');
    if (orderTableBody) {
        orderTableBody.addEventListener('click', async function (e) {
            const btn = e.target.closest('button[data-action]');
            if (!btn) return;
            const action = btn.getAttribute('data-action');
            const id = btn.getAttribute('data-id');
            if (action === 'edit') await handleEditOrder(id);
            if (action === 'delete') await handleDeleteOrder(id);
        });
    }

    loadOrderList();
}

function resetOrderForm() {
    currentEditingOrderId = null;
    document.getElementById('orderForm')?.reset();
    const btn = document.getElementById('orderSubmitBtn');
    if (btn) btn.innerHTML = `<i class="fas fa-save"></i> <span data-i18n="btn_save_order">${t('btn_save_order')}</span>`;

    const customerInput = document.getElementById('orderCustomer');
    const totalInput = document.getElementById('orderTotal');
    if (customerInput) { customerInput.disabled = false; customerInput.style.backgroundColor = '#fff'; }
    if (totalInput) { totalInput.disabled = false; totalInput.style.backgroundColor = '#fff'; }
}

async function loadOrderList() {
    const tbody = document.getElementById('orderTableBody');
    if (!tbody) return;
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;"><span data-i18n="loading_orders">${t('loading_orders')}</span></td></tr>`;

    if (USE_MOCK_DATA) {
        setTimeout(() => {
            const filteredOrders = currentOrderSearch
                ? mockOrders.filter(o => {
                    const kw = currentOrderSearch.toLowerCase();
                    return (o.order_id || '').toLowerCase().includes(kw) 
                        || (o.customer_name || '').toLowerCase().includes(kw) 
                        || (o.status || '').toLowerCase().includes(kw);
                })
                : mockOrders;
            renderOrderTable(filteredOrders);
        }, 300);
        return;
    }

    try {
        const response = await fetch(API_ENDPOINTS.LIST_ORDERS);
        if (!response.ok) throw new Error('Fetch failed');
        const data = await response.json();
        const orders = Array.isArray(data) ? data : (data.orders || []);
        
        const filteredOrders = currentOrderSearch
            ? orders.filter((o) => {
                const kw = currentOrderSearch.toLowerCase();
                return (String(o.order_id || o.id || '')).toLowerCase().includes(kw) 
                    || (String(o.customer_name || o.customer || '')).toLowerCase().includes(kw) 
                    || (String(o.status || '')).toLowerCase().includes(kw);
            })
            : orders;
        renderOrderTable(filteredOrders);
    } catch (error) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#e74c3c;">Fetch failed</td></tr>`;
    }
}

function renderOrderTable(orders) {
    const tbody = document.getElementById('orderTableBody');
    if (!tbody) return;
    if (!orders.length) { tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">${t('no_orders')}</td></tr>`; return; }

    tbody.innerHTML = orders.map((o) => {
        const id = o.order_id || o.id || '';
        let statusClass = 'status-pending';
        if (o.status === 'processing') statusClass = 'status-processing';
        if (o.status === 'shipped') statusClass = 'status-shipped';
        if (o.status === 'delivered') statusClass = 'status-delivered';

        const localizedStatus = t('status_' + (o.status || 'pending').toLowerCase());

        const items = o.items || o.products || o.order_items || [];
        let productsHtml = '';
        if (Array.isArray(items) && items.length > 0) {
            productsHtml = '<div style="margin-top: 6px; font-size: 0.85em; color: #7f8c8d; line-height: 1.4;">';
            items.forEach(item => {
                const pName = escapeHtml(item.product_name || item.name || 'Unknown');
                const qty = item.quantity || item.qty || 1;
                productsHtml += `<div style="margin-bottom: 2px;">• ${pName} <span style="color:#bdc3c7;">x${qty}</span></div>`;
            });
            productsHtml += '</div>';
        }

        return `<tr>
            <td style="vertical-align: top;">
                <div style="font-weight: 600; color: #2c3e50;">#${id}</div>
                ${productsHtml}
            </td>
            <td style="vertical-align: top;">${escapeHtml(o.customer_name || o.customer || '')}</td>
            <td style="vertical-align: top;">$${Number(o.total_amount || o.total || 0).toFixed(2)}</td>
            <td style="vertical-align: top;"><span class="status-badge ${statusClass}">${escapeHtml(localizedStatus)}</span></td>
            <td style="vertical-align: top;">${escapeHtml(o.created_at ? new Date(o.created_at).toLocaleDateString() : '-')}</td>
            <td style="vertical-align: top;">
                <button class="btn-view" data-action="edit" data-id="${id}" style="margin-right:6px;"><i class="fas fa-pen"></i> <span data-i18n="btn_edit">${t('btn_edit')}</span></button>
                <button class="btn-view" data-action="delete" data-id="${id}" style="background:#e74c3c;color:#fff;"><i class="fas fa-trash"></i> <span data-i18n="btn_delete">${t('btn_delete')}</span></button>
            </td>
        </tr>`;
    }).join('');
}

async function handleOrderSubmit(e) {
    e.preventDefault();
    const isEdit = currentEditingOrderId !== null;
    const totalAmount = parseFloat(document.getElementById('orderTotal').value) || 0;
    
    const payload = isEdit ? {
        status: document.getElementById('orderStatus').value
    } : {
        customer_name: document.getElementById('orderCustomer').value.trim(),
        total_amount: totalAmount,
        status: document.getElementById('orderStatus').value
    };

    if (USE_MOCK_DATA) {
        if (isEdit) {
            const idx = mockOrders.findIndex(o => o.order_id === currentEditingOrderId);
            if (idx > -1) mockOrders[idx].status = payload.status;
        } else {
            payload.order_id = 'ORD-' + Date.now().toString().slice(-4);
            payload.created_at = new Date().toISOString();
            payload.total_amount = totalAmount; 
            payload.items = [{ product_name: 'Manual Item', quantity: 1 }]; 
            mockOrders.unshift(payload);
        }
        showNotification(isEdit ? t('msg_test_update') : t('msg_test_create'), 'success');
        document.getElementById('orderFormCard').style.display = 'none';
        resetOrderForm();
        loadOrderList();
        return;
    }

    try {
        const response = await fetch(isEdit ? API_ENDPOINTS.UPDATE_ORDER(currentEditingOrderId) : API_ENDPOINTS.CREATE_ORDER, {
            method: isEdit ? 'PATCH' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error('Submission failed');
        showNotification(t('msg_success_order'), 'success');
        document.getElementById('orderFormCard').style.display = 'none';
        resetOrderForm();
        loadOrderList();
    } catch (error) {
        showNotification('Operation failed', 'error');
    }
}

async function handleEditOrder(orderId) {
    if (USE_MOCK_DATA) {
        const order = mockOrders.find(o => o.order_id === orderId);
        if (!order) return;
        currentEditingOrderId = orderId;
        document.getElementById('orderFormCard').style.display = 'block';
        document.getElementById('orderCustomer').value = order.customer_name || '';
        document.getElementById('orderTotal').value = order.total_amount || 0;
        document.getElementById('orderStatus').value = order.status || 'pending';
        const customerInput = document.getElementById('orderCustomer');
        const totalInput = document.getElementById('orderTotal');
        if (customerInput) { customerInput.disabled = true; customerInput.style.backgroundColor = '#f5f7fa'; }
        if (totalInput) { totalInput.disabled = true; totalInput.style.backgroundColor = '#f5f7fa'; }
        document.getElementById('orderSubmitBtn').innerHTML = `<i class="fas fa-pen"></i> <span data-i18n="btn_update_status">${t('btn_update_status')}</span>`;
        document.getElementById('orderSection').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    try {
        const response = await fetch(API_ENDPOINTS.GET_ORDER(orderId));
        if (!response.ok) throw new Error('Load failed');
        const order = await response.json();
        
        currentEditingOrderId = orderId;
        document.getElementById('orderFormCard').style.display = 'block';
        document.getElementById('orderCustomer').value = order.customer_name || order.customer || '';
        document.getElementById('orderTotal').value = order.total_amount || order.total || 0;
        document.getElementById('orderStatus').value = order.status || 'pending';

        const customerInput = document.getElementById('orderCustomer');
        const totalInput = document.getElementById('orderTotal');
        if (customerInput) { customerInput.disabled = true; customerInput.style.backgroundColor = '#f5f7fa'; }
        if (totalInput) { totalInput.disabled = true; totalInput.style.backgroundColor = '#f5f7fa'; }

        document.getElementById('orderSubmitBtn').innerHTML = `<i class="fas fa-pen"></i> <span data-i18n="btn_update_status">${t('btn_update_status')}</span>`;
        document.getElementById('orderSection').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        showNotification('Failed to load order', 'error');
    }
}

async function handleDeleteOrder(orderId) {
    if (!window.confirm(t('msg_del_order_confirm') + orderId + ' ?')) return;

    if (USE_MOCK_DATA) {
        mockOrders = mockOrders.filter(o => o.order_id !== orderId);
        showNotification(t('msg_test_del_order'), 'success');
        loadOrderList();
        return;
    }

    try {
        const response = await fetch(API_ENDPOINTS.DELETE_ORDER(orderId), { method: 'DELETE' });
        if (!response.ok) throw new Error('Delete failed');
        showNotification(t('msg_test_del_order'), 'success');
        loadOrderList();
    } catch (error) {
        showNotification('Delete failed', 'error');
    }
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

// ==========================================
// 全局工具函数
// ==========================================
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

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification-popup ${type}`;
    notification.innerHTML = `<div class="notification-content"><i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i><span>${message}</span></div>`;
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

function escapeHtml(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function formatPrice(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return '$0.00';
    return `$${n.toFixed(2)}`;
}

const categorySelect = document.getElementById("category");
const productInput = document.getElementById("product");
const priceInput = document.getElementById("price");
const totalDisplay = document.getElementById("total");

// 分类对应商品推荐和价格
const productMap = {
    "虚拟物品": { name: "高级会员账号", price: 10 },
    "服务类": { name: "平台推广服务", price: 20 },
    "数字资源": { name: "内部运营资料包", price: 30 }
};

// 商品分类联动名称 + 价格
categorySelect.addEventListener("change", () => {
    const selected = categorySelect.value;
    if (productMap[selected]) {
        productInput.value = productMap[selected].name;
        priceInput.value = productMap[selected].price;
        updateTotal();
    }
});

// 实时更新总价
document.getElementById("orderForm").addEventListener("input", updateTotal);
function updateTotal() {
    const price = parseFloat(priceInput.value);
    const qty = parseInt(document.getElementById("quantity").value);
    const total = price * qty;
    totalDisplay.textContent = total.toFixed(2);
}

// 下单弹窗 + 清空表单
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ 订单提交成功，请联系 Telegram 客服 @kefu832 进行支付确认。");
    this.reset();
    updateTotal();
});

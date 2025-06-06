
document.getElementById("orderForm").addEventListener("input", function () {
    const price = parseFloat(document.getElementById("price").value);
    const qty = parseInt(document.getElementById("quantity").value);
    const total = price * qty;
    document.getElementById("total").textContent = total.toFixed(2);
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // 弹窗提示
    alert("✅ 订单提交成功，请联系 Telegram 客服 @kefu832 进行支付确认。");

    // 清空表单
    this.reset();

    // 重置总价显示
    document.getElementById("total").textContent = "0.00";
});

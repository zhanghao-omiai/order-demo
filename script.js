
document.getElementById("orderForm").addEventListener("input", function () {
    const price = parseFloat(document.getElementById("price").value) || 0;
    const qty = parseInt(document.getElementById("quantity").value) || 0;
    const total = price * qty;
    document.getElementById("total").textContent = total.toFixed(2);
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ 订单提交成功，请联系 Telegram 客服 @kefu832 进行支付确认。");
    this.reset();
    document.getElementById("total").textContent = "0.00";
});


document.getElementById("orderForm").addEventListener("input", function () {
    const price = parseFloat(document.getElementById("price").value) || 0;
    const qty = parseInt(document.getElementById("quantity").value) || 0;
    const total = price * qty;
    document.getElementById("total").textContent = total.toFixed(2);
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // 可选：你可以在这里添加发送订单数据的逻辑

    // 跳转到支付页面
    window.location.href = "pay.html";
});

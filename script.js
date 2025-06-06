
document.getElementById("orderForm").addEventListener("input", function () {
    const price = parseFloat(document.getElementById("price").value);
    const qty = parseInt(document.getElementById("quantity").value);
    const total = price * qty;
    document.getElementById("total").textContent = total.toFixed(2);
});
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("这是一个演示订单页面，未连接后台系统。");
});


const productOptions = {
  "微博产品": [
    { name: "微博白号", price: 0.60 },
    { name: "微博长期(协议号)", price: 0.01 },
    { name: "微博养号封", price: 10.00 }
  ],
  "抖音接码": [
    { name: "抖音虚拟卡号", price: 0.80 },
    { name: "抖音实名号", price: 3.00 },
    { name: "抖音长期号", price: 5.00 }
  ]
};

const categorySelect = document.getElementById("category");
const productSelect = document.getElementById("product");
const priceInput = document.getElementById("price");

categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  productSelect.innerHTML = "";
  if (productOptions[selected]) {
    productOptions[selected].forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.name;
      opt.textContent = item.name + " —— " + item.price.toFixed(2) + " 元";
      opt.setAttribute("data-price", item.price);
      productSelect.appendChild(opt);
    });
  }
});

productSelect.addEventListener("change", () => {
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const price = selectedOption.getAttribute("data-price");
  priceInput.value = price;
  updateTotal();
});

document.getElementById("orderForm").addEventListener("input", updateTotal);

function updateTotal() {
  const price = parseFloat(priceInput.value) || 0;
  const qty = parseInt(document.getElementById("quantity").value) || 0;
  document.getElementById("total").textContent = (price * qty).toFixed(2);
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // ✅ 提交成功后跳转至支付页面
  window.location.href = "pay.html";
});

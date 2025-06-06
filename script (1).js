
const products = {
  "微博产品": [
    { name: "微博白号", price: 0.60 },
    { name: "微博长期(协议号)", price: 0.01 },
    { name: "微博养号封", price: 10.00 }
  ],
  "百度产品": [
    { name: "百度账号通用", price: 1.50 },
    { name: "百度账号+绑定", price: 2.20 }
  ],
  "抖音产品": [
    { name: "抖音实名号", price: 3.00 },
    { name: "抖音虚拟号", price: 0.80 },
    { name: "抖音封禁号", price: 5.00 }
  ]
};

const categorySelect = document.getElementById("category");
const productSelect = document.getElementById("product");
const priceInput = document.getElementById("price");

categorySelect.addEventListener("change", function() {
  const selectedCategory = this.value;
  productSelect.innerHTML = '<option value="">请选择商品</option>';
  if (products[selectedCategory]) {
    products[selectedCategory].forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name + " —— " + product.price.toFixed(2) + " USDT";
      option.dataset.price = product.price;
      productSelect.appendChild(option);
    });
  }
  priceInput.value = "";
  updateTotal();
});

productSelect.addEventListener("change", function() {
  const selectedOption = this.options[this.selectedIndex];
  priceInput.value = selectedOption.dataset.price || "";
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
  window.location.href = "pay.html";
});

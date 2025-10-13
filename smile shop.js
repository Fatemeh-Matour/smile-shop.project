//1  سبد خرید ساده
document.addEventListener("DOMContentLoaded", function load() {
  const carButtons = document.querySelectorAll(".product-card button");
  let cart = [];

  carButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const productCard = btn.parentElement;
      const productName = productCard.querySelector("h3").innerHTML;
      const productPrice = productCard.querySelector(".price").innerHTML;

      //اضافه کردن به سبد خرید
      cart.push({ name: productName, price: productPrice });
      alert(`${productName} به سبد خرید اضافه شد!`);

      //به روز رسانی تعداد سبد
      updateCartInfo();
    });
  });
  function updateCartInfo() {
    let cartInfo = document.getElementById("cart-info");
    if (!cartInfo) {
      cartInfo = document.createElement("div");
      cartInfo.id = "cart-info";
      cartInfo.style.position = "fixed";
      cartInfo.style.top = "20px";
      cartInfo.style.right = "20px";
      cartInfo.style.background = "#1dc7c7";
      cartInfo.style.color = "#fff";
      cartInfo.style.padding = "10px 20px";
      cartInfo.style.borderRadius = "10px";
      document.body.appendChild(cartInfo);
    }
    let totalItems = cart.length;
    let totalPrice = cart.reduce((sum, item) => {
      //حدف کاراکتر و تبدیل به عدد
      let priceNumber = parseInt(item.price.replace(/[^0-9]/g, ""));
      return sum + priceNumber;
    }, 0);
    cartInfo.innerHTML = `محصولات:${totalItems} | جمع کل:${totalPrice}`;
  }

  //اسکرول نرم
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

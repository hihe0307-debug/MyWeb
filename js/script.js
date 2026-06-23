const siteName = "MyWeb";
let topic = "Ẩm thực Việt Nam";
let imageCount = 5;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);

const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
  mainTitle.textContent = "MyWeb đã có JavaScript!";
  welcomeText.textContent =
    "Nội dung này được cập nhật bằng file js/script.js.";
}

const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent =
      "Cảm ơn bạn đã ghé thăm website Ẩm thực Việt Nam!";
  });
}

const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    aboutContent.classList.toggle("hidden");
  });
}
const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

if (searchInput && searchItems.length > 0) {
  searchInput.addEventListener("keyup", function () {
    const keyword = searchInput.value.toLowerCase();

    searchItems.forEach(function (item) {
      const text = item.textContent.toLowerCase();

      if (text.includes(keyword)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
}
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0 && galleryItems.length > 0) {
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const filter = btn.dataset.filter;

      galleryItems.forEach(function (item) {
        const category = item.dataset.category;

        if (filter === "all" || category === filter) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

if (contactForm && fullName && email && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === "") {
      formMessage.textContent = "❌ Vui lòng nhập họ tên";
      formMessage.style.color = "red";
      return;
    }

    if (emailValue === "" || !emailValue.includes("@")) {
      formMessage.textContent = "❌ Email không hợp lệ";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "✅ Gửi thành công!";
    formMessage.style.color = "green";
  });
}

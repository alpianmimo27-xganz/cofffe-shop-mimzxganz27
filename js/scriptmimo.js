// Pembuatan Toggle Untuk Class Yang aktif
const navbarNav = document.querySelector(".navbar-nav");

// ketika garang menu diklik
document.querySelector("#garang-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// script untuk menghilangkan nav dengan mengklik diluar sidebar
const garang = document.querySelector("#garang-menu");

document.addEventListener("click", function (e) {
  if (!garang.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

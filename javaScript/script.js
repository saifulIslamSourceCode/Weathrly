// script for the slider
const openBtn = document.getElementById('open-sidebar');
const closeBtn = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');

openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    document.body.classList.add('sidebar-open');
    document.querySelector(".dark-shawod").classList.add("dark-shawod-open");
});
function closeSideBar() {
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
    document.querySelector(".dark-shawod").classList.remove("dark-shawod-open");
}
closeBtn.addEventListener('click', () => {
    closeSideBar()
});

document.querySelector(".dark-shawod").addEventListener("click", () => {
    closeSideBar()
})

// scroll top btn
// Scroll-to-top button functionality
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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
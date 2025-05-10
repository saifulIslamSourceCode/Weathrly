// fetch header
fetch("../Components/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
    });
// Load the header HTML into the placeholder
fetch('../components/header.html') // Adjust the path to your file
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load header");
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
  .catch(error => {
    console.error("Error loading header:", error);
  });



// script for the slider
const openBtn = document.getElementById('open-sidebar');
const closeBtn = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');

openBtn.addEventListener('click', () => {
sidebar.classList.add('open');
document.body.classList.add('sidebar-open');
});

closeBtn.addEventListener('click', () => {
sidebar.classList.remove('open');
document.body.classList.remove('sidebar-open');
});
fetch('./components/header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load header");
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Now safely select elements from the loaded HTML
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
        closeSideBar();
    });

    document.querySelector(".dark-shawod").addEventListener("click", () => {
        closeSideBar();
    });
  })
  .catch(error => {
    console.error("Error loading header:", error);
  });

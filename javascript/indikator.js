document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-button');
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPage = 0;
  
    function showPage(index) {
      pages.forEach((page, pageIndex) => {
        if (pageIndex === index) {
          page.style.display = 'block';
        } else {
          page.style.display = 'none';
        }
      });
    }
  
    function navigate(direction) {
      if (direction === 'next') {
        currentPage++;
        if (currentPage >= pages.length) {
          currentPage = 0;
        }
      } else if (direction === 'prev') {
        currentPage--;
        if (currentPage < 0) {
          currentPage = pages.length - 1;
        }
      }
      showPage(currentPage);
    }
  
    showPage(currentPage);
  
    menuButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const target = button.getAttribute('data-target');
        const pageIndex = Array.from(pages).findIndex(page => page.id === target);
        if (pageIndex !== -1) {
          currentPage = pageIndex;
          showPage(currentPage);
        }
      });
    });
  
    prevBtn.addEventListener('click', () => navigate('prev'));
    nextBtn.addEventListener('click', () => navigate('next'));
  });
  
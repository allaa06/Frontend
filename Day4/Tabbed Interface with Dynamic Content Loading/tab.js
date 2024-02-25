document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
  
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
  
        document.getElementById(tabId).classList.add('active');
      });
    });
  });
  
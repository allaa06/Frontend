document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');
  
    loadFormData();
  
    form.addEventListener('input', function(event) {
      const formData = {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        message: form.elements['message'].value
      };
  
      saveFormData(formData);
    });
  
    function saveFormData(formData) {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  
    function loadFormData() {
      const savedFormData = localStorage.getItem('formData');
      if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        form.elements['name'].value = formData.name;
        form.elements['email'].value = formData.email;
        form.elements['message'].value = formData.message;
      }
    }
  });
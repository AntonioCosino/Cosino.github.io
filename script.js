document.addEventListener('DOMContentLoaded', function () {
   
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
        this.style.color = '#3498db';
      });
  
      link.addEventListener('mouseout', function() {
        this.style.color = '#fff'; 
      });
    });
  
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
      alert('Button clicked!'); 

    });
  });
  
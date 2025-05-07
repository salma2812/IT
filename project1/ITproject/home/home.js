let star = document.getElementById('star');

window.onscroll = function() {
      let value = scrollY;      
     star.style.right = value + 'px'; 
     
    }
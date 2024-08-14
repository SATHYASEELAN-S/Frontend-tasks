const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.style.backgroundColor = 'black';
      
    } else {
        body.style.backgroundColor = 'white';
    }
});

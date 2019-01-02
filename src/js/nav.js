
document.addEventListener('DOMContentLoaded',function() {
    
    const header = document.getElementById('header');
    
    let tmp = document.createElement('div');

    tmp.innerHTML = '<div class="o-hamburger js-hamburger"></div>';

    header.appendChild(tmp.firstChild);    
    
}, false);

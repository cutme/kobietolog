const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {
    
    const header = document.getElementById('header');
    const navigation = document.getElementsByClassName('navigation')[0];
    const submenuParent = navigation.getElementsByTagName('span');
    let hamburger;

    // If navigation is higher than window
    const setHeight = function() {

        let windowHeight = window.innerHeight,
            navigationHeight = navigation.getElementsByClassName('current')[0].clientHeight;
        
        if (navigationHeight > windowHeight) {
            navigation.classList.add('to-baseline');
        } else {
            navigation.classList.remove('to-baseline');
        }        
    };
    
    const closeSubmenus = function() {
        let openedSubmenus = document.getElementsByClassName('submenu-visible');
                
        for (let i = 0; i < openedSubmenus.length; i ++) {
            openedSubmenus[i].classList.remove('submenu-visible');
        }
    }

    // Open submenu
    const submenu = function() {
    
        const action = function(e) {
        
            let currentSubmenu = e.currentTarget.nextElementSibling;
            
            if (currentSubmenu.classList.contains('submenu-visible')) {
                currentSubmenu.classList.remove('submenu-visible');
            } else {
                closeSubmenus();
                currentSubmenu.classList.add('submenu-visible');
            }

            setHeight();                
        };

        for (let i = 0; i < submenuParent.length; i ++) {
            submenuParent[i].addEventListener('click', action);
        }
    }
    
    // Close Nav
    const closeNav = function() {
        enableBodyScroll(navigation);
        navigation.classList.remove('is-visible');
        hamburger.classList.remove('is-active');
        window.removeEventListener('resize', setHeight);
        navigation.removeEventListener("transitionend", setHeight, false);
        closeSubmenus();
    };
    
    // Open Nav
    const openNav = function() {
        disableBodyScroll(navigation);
        navigation.classList.add('is-visible');
        hamburger.classList.add('is-active');
        window.addEventListener('resize', setHeight);
        navigation.addEventListener("transitionend", setHeight, false);
        
    };
    
    // Init nav
    const nav = function(e) {
    
        if (hamburger.classList.contains('is-active')) {
            closeNav();
        } else {
            openNav();
        }
    };
    
    // Add hamburger to page
    const addHamburger = function() {        
    
        let tmp = document.createElement('div');

        tmp.innerHTML = '<div class="o-hamburger js-hamburger"></div>';
        header.appendChild(tmp.firstChild);
        
        hamburger = document.getElementsByClassName('js-hamburger')[0];
        hamburger.addEventListener('click', nav);
    };
    
    
    addHamburger();
    submenu();
    
}, false);

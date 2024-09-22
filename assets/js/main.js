//--------SHOW MENU-----------

const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');
      

    //----Logic------

    //---- Show Menu-----------
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('showMenu')
        })
        
    }

     //---- Hide Menu-----------
     if (navToggle) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('showMenu')
        })
        
     }
    // -----END------


    //--------REMOVE MENU MOBILE-----------
    const navLink = document.querySelectorAll('.nav-link')

    //-----Logic-------
    const linkAction = () => {
        navMenu = document.querySelector('#nav-menu')
        navMenu.classList.remove('showMenu')

    }

    navLink.forEach(n => n.addEventListener('click', linkAction))
    //-----END------

   

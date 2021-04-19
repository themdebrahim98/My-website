const hamburger = document.querySelector('.header .nav_bar .nav_list .hamburger');
const mobile_menu = document.querySelector('.header .nav_bar .nav_list ul');
const header  = document.querySelector('.header.container');
const item_menus = document.querySelectorAll('.header .nav_bar .nav_list ul li a');


hamburger.addEventListener('click',()=>{


    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active2");
})

document.addEventListener('scroll',()=>{

    const scroll_position = window.scrollY;
    if(scroll_position>250){
        header.style.backgroundColor = '#29323c';

    }
    else{
        header.style.backgroundColor = "transparent";
    }


})

item_menus.forEach((item)=> {

    item.addEventListener('click',()=>{

         hamburger.classList.toggle("active");
         mobile_menu.classList.toggle("active2");
    console.log("jkhuigyujweg");

    })
    
});
function ativarMenu(){
    let menuMobile = document.getElementById("menu-ham");
    let menuMobileClass = menuMobile.classList;

    menuMobileClass.toggle("cabecalho-menu-mobile-navActive");
    // var menuHam = document.querySelector(".cabecalho-menu-mobile-nav");

    // if(menuHam.className == "cabecalho-menu-mobile-nav"){
    //     menuHam.classList.toggle("cabecalho-menu-mobile-navActive");
    // }else{
    //     menuHam.classList.toggle("cabecalho-menu-mobile-nav");
    // }
    
}
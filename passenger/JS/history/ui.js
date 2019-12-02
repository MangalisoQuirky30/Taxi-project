// UI Controller

function UI(){
    this.selectors = {
        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") ,

        menuContainer :  document.querySelector(".home-navigation-container") ,
        menuBtnSec :  document.querySelector(".home-navigation-content-access-container") ,
        page : document.getElementById('page') ,
    }
}

UI.prototype = {
    init : function(){
        console.log('ui init') ;
    } ,
}
// user model 

function User(){
    this.data = [] ; 
    this.errors = [] ;
}

User.prototype = {

    init : function(){
        this.data = JSON.parse(localStorage.getItem('users'))  != null    ?    JSON.parse(localStorage.getItem('users'))     :    [ ]  ;
        console.log(this.data) ; 
    } ,
    showHideMenu : function(selectors){
        if (selectors.menu.style.transform != "translateX(-320px)") {
            selectors.menu.style.transform = "TranslateX(-320PX)"
            selectors.homeNav.style.zIndex = "0"
            selectors.menu.style.display = "none"
            selectors.page.style.display = "block"
            selectors.menuContainer.style.backgroundColor = ""
        } else {
            selectors.homeNav.style.zIndex = "20"
            selectors.menu.style.transform = "TranslateX(0PX)"
            selectors.menu.style.display = "block"
            selectors.page.style.display = "none"
            selectors.menuContainer.style.backgroundColor = "rgba(0,0,0,.5"
        }
    
    } ,   
}
var menuBtn = document.querySelector(".home-navigation-content-access__btn")
var menu =  document.querySelector(".home-navigation-content-main")
var homeNav =  document.querySelector(".home-navigation")
var menuCont =  document.querySelector(".home-navigation-content")

var menuContainer =  document.querySelector(".home-navigation-container")
var menuBtnSec =  document.querySelector(".home-navigation-content-access-container")
var page = document.getElementById('page')


menuBtn.addEventListener("click" , function(){
    if (menu.style.transform != "translateX(-320px)") {
        menu.style.transform = "TranslateX(-320PX)"
        homeNav.style.zIndex = "0"
        menu.style.display = "none"
        page.style.display = "block"
        menuContainer.style.backgroundColor = ""
    } else {
        console.log("shifted");
        
        homeNav.style.zIndex = "20"
        menu.style.transform = "TranslateX(0PX)"
        menu.style.display = "block"
        page.style.display = "none"
        menuContainer.style.backgroundColor = "rgba(0,0,0,.5"
    }

    //transform: translatex(0PX)
})




//testing

var inputData = document.querySelector('input.home-page-mylocation-search__input')
var list = document.querySelectorAll('.home-page-nearby-taxirank-list-item')

inputData.addEventListener('keyup', function(e){
    var val = e.target.value.charAt(0).toUpperCase();
    list.forEach(function(l){
        if(l.textContent.indexOf(val) != -1){
            l.style.display = 'flex'
        }else{
            l.style.display = 'none'
        }
    })  
})































///////
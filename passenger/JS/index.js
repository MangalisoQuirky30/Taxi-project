var logoPage = document.querySelector(".logo-page") ;
var logo = document.getElementById('logo') ;
var logoPageCont = document.querySelector(".logo-page-container") ;
var driverBtn = document.getElementById("driver_btn");
var passengerBtn = document.getElementById("passenger_btn") ;
var formPage = document.querySelector(".form-page") ;
var formSection = document.querySelector(".form-section") ;
var formSU = document.getElementById("sign-up-form") ;
var formSI = document.getElementById("sign-in-form") ;
var formSUbtn = document.querySelector(".form-section-btn-sign-up__btn") ;
 var formSIbtn = document.querySelector(".form-section-btn-sign-in__btn") ;
var logoCont = document.querySelector(".logo-page-image-container") ;

var formSUhr = document.querySelector(".form-section-btn-sign-up__hr");
var formSIhr = document.querySelector(".form-section-btn-sign-in__hr");




driverBtn.addEventListener('click' , function(){
    showForms();
}) ;
passengerBtn.addEventListener('click' , function(){
    showForms() ;
}) ;
formSUbtn.addEventListener('click' , function(){
    showSUform()
}) ;
formSIbtn.addEventListener('click' , function(){
    showSIform()
}) ;

function showForms(){
    
        formPage.style.display = "block" ;
        driverBtn.style.display = "none" ;
        passengerBtn.style.display = "none" ;
        logoCont.style.width = "300px"
        logoPage.style.height = "50vh" ;
        logoPage.style.backgroundImage = "linear-gradient(to top, white 15% , white 15% )" ;
        logoPageCont.style.paddingTop  = "2.5vh" ;
        formSection.style.transform  = " translateY(-98px)" ;
    }


function showSUform() {
    formSU.style.display = "block"
    formSI.style.display = "none"
    formSUbtn.style.color = "black"
    formSIbtn.style.color = "grey"
    formSUhr.style.backgroundColor = "#f5cf37"
    formSIhr.style.backgroundColor = "#ccc"
    formSUhr.style.width = "80px"
    formSIhr.style.width = "40px"

} 
function showSIform(){
    formSU.style.display = "none"
    formSI.style.display = "block"
    formSUbtn.style.color = "grey"
    formSIbtn.style.color = "black"
    formSUhr.style.backgroundColor = "#ccc"
    formSIhr.style.backgroundColor = "#f5cf37"
    formSUhr.style.width = "40px"
    formSIhr.style.width = "80px"
} 



































/*
var User = function() {

}

User.prototype = {
    showForms : function(){

    }
}

var UI = function() {

}
 
UI.prototype = function() {

}

var App = function(UsrCtrl , UICtrl){

}

App(User, UI) ; 
*/
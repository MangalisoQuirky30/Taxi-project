// UI Controller

function UI(){
    this.selectors = {
        // logo page
        logoPage : document.querySelector(".logo-page") ,
        logo : document.getElementById('logo')  ,
        formPage : document.querySelector(".form-page") ,
        logoPageCont : document.querySelector(".logo-page-container") ,
        logoCont: document.querySelector(".logo-page-image-container") ,
        
        //logo page with form(s)
        formSection : document.querySelector(".form-section") ,
        formSUbtn : document.querySelector(".form-section-btn-sign-up__btn") ,
        formSIbtn : document.querySelector(".form-section-btn-sign-in__btn") ,


        formSUhr: document.querySelector(".form-section-btn-sign-up__hr"),
        formSIhr: document.querySelector(".form-section-btn-sign-in__hr"),

        driverBtn : document.getElementById('driver_btn'),
        passengerBtn : document.getElementById('passenger_btn'),
        driverOrPass : document.getElementById('driver-or-passenger'),

        formSU : document.getElementById('sign-up-form') ,
        formSI : document.getElementById('sign-in-form') ,
        name :  document.getElementById('name-su') ,
        email :  document.getElementById('email-su') ,
        pass :  document.getElementById('password-su') ,
        cpass :  document.getElementById('cpassword-su') ,
        loginEmail :  document.getElementById('email-si') ,
        loginPass :  document.getElementById('password-si') ,



        // home page
        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") ,

        menuContainer :  document.querySelector(".home-navigation-container") ,
        menuBtnSec :  document.querySelector(".home-navigation-content-access-container") ,
        page : document.getElementById('page') ,

        inputData : document.querySelector('input.home-page-mylocation-search__input'),
        list : document.querySelectorAll('.home-page-nearby-taxirank-list-item'),

        


    }
}

UI.prototype = {
    showFormsUI : function(){
        var elements = {
            formPage : this.selectors.formPage ,
            driverBtn : this.selectors.driverBtn ,
            passengerBtn : this.selectors.passengerBtn ,
            logoPage : this.selectors.logoPage ,
            logoPageCont : this.selectors.logoPageCont ,
            formSection : this.selectors.formSection ,
        }
        return elements ;
    } ,

    registerHandler : function(){
        var user = {
            name : this.selectors.name.value ,
            email : this.selectors.email.value ,
            pass : this.selectors.pass.value 
        }
        return user ;
    } ,

    init : function(){
        console.log('ui init') ;
    } ,

    loginHandler : function(){
        var loginData = {
            email : this.selectors.loginEmail.value  ,
            pass : this.selectors.loginPass.value  ,
        }
        return loginData ;
    }

}
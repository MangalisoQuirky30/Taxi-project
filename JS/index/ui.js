// UI Controller

function UI(){
    this.selectors = {
        // logo page
        logoPage : document.querySelector(".logo-page") ,
        logo : document.getElementById('logo')  ,
        driverFormPage : document.querySelector(".user-driver") ,
        passFormPage : document.querySelector(".user-pass") ,
        logoPageCont : document.querySelector(".logo-page-container") ,
        logoCont: document.querySelector(".logo-page-image-container") ,
        
        //logo page with form(s)
        formSection : document.querySelector(".form-section") ,
        passFormSUbtn : document.querySelector(".pass-form-section-btn-sign-up__btn") ,
        passFormSIbtn : document.querySelector(".pass-form-section-btn-sign-in__btn") ,
        driverFormSUbtn : document.querySelector(".driver-form-section-btn-sign-up__btn") ,
        driverFormSIbtn : document.querySelector(".driver-form-section-btn-sign-in__btn") ,

        driverSuccessSIbtn : document.querySelector(".pass-success-su") ,
        passSuccessSIbtn : document.querySelector(".driver-success-su") ,

        passFormSUhr: document.querySelector(".pass-form-section-btn-sign-up__hr"),
        passFormSIhr: document.querySelector(".pass-form-section-btn-sign-in__hr"),
        driverFormSUhr: document.querySelector(".driver-form-section-btn-sign-up__hr"),
        driverFormSIhr: document.querySelector(".driver-form-section-btn-sign-in__hr"),
        passFormSbmtBtn : document.getElementById("pass-submit-su"),
        driverFormSbmtBtn : document.getElementById("driver-submit-su"),

        driverBtn : document.getElementById('driver_btn'),
        passengerBtn : document.getElementById('passenger_btn'),
        driverOrPass : document.querySelector('.driver-or-passenger'),

        driverOrPassD : document.querySelector('.driver-or-passenger-d'),

        errorsDSU : document.querySelector(".errors-d-su"),
        errorsDSI : document.querySelector(".errors-d-si"),
        errorsPSU : document.querySelector(".errors-p-su"),
        errorsPSI : document.querySelector(".errors-p-si"),
        
        successD : document.querySelector(".driver-success-si"),
        successP : document.querySelector(".pass-success-si"),

        passFormSU : document.getElementById('passSUForm') ,
        passFormSI : document.getElementById('passSIForm') ,
        pName :  document.getElementById('pass-name-su') ,
        pEmail :  document.getElementById('pass-email-su') , 
        pPass :  document.getElementById('pass-password-su') ,
        pCpass :  document.getElementById('pass-cpassword-su') ,
        pLoginEmail :  document.getElementById('pass-email-si') ,
        pLoginPass :  document.getElementById('pass-password-si') ,

        driverFormSU : document.getElementById('driverSUForm') ,
        driverFormSI : document.getElementById('driverSIForm') ,

        taxiRanks : document.getElementById("taxi-rank-list") ,

        dName :  document.getElementById('driver-name-su') ,
        dEmail :  document.getElementById('driver-email-su') ,
        dNumberPlate :  document.getElementById('driver-plate-su') ,
        dPhoneNum :  document.getElementById('driver-phone-su') ,
        dIdNumber :  document.getElementById('driver-idnumber-su') ,
        dSeatsNumber :  document.getElementById('driver-sitNum-su') ,
        dTaxiRank :  document.getElementById('taxi-rank-list') ,
        dPass :  document.getElementById('driver-password-su') ,
        dCpass :  document.getElementById('driver-cpassword-su') ,
        dLoginEmail :  document.getElementById('driver-email-si') ,
        dLoginPass :  document.getElementById('driver-password-si') 
    }
}

UI.prototype = {

    init : function(){
        console.log('ui init') ;
    } ,
    showPassengerFormsUI : function(){
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

    registerPassengerHandler : function(){
        var passenger = {
            pName : this.selectors.pName.value ,
            pEmail : this.selectors.pEmail.value ,
            pPass : this.selectors.pPass.value 
        }
        return passenger ;
    } ,

    loginPassengerHandler : function(){
        var loginData = {
            pLoginEmail : this.selectors.pLoginEmail.value  ,
            pLoginPass : this.selectors.pLoginPass.value  ,
        }
        return loginData ;
    } ,

    registerDriverHandler : function(){
        var driver = {
            dIdNumber : this.selectors.dIdNumber.value,
            dNumberPlate : this.selectors.dNumberPlate.value,
            dPhoneNum : this.selectors.dPhoneNum.value,
            dTaxiRank : this.selectors.dTaxiRank.value ,
            dSeatsNumber : this.selectors.dSeatsNumber.value ,
            dAllSeats : this.selectors.dSeatsNumber.value ,
            dName : this.selectors.dName.value ,
            dEmail : this.selectors.dEmail.value ,
            dPass : this.selectors.dPass.value ,
            location : "" ,
            destination : "" ,
            price : "" ,
            dBookings : []
        }
        return driver ;
    } ,

    loginDriverHandler : function(){
        var loginData = {
            dLoginEmail : this.selectors.dLoginEmail.value  ,
            dLoginPass : this.selectors.dLoginPass.value  
        }
        return loginData ;
    } ,

}
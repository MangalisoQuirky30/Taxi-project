// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;



    ui.selectors.driverBtn.addEventListener('click' , function(){
        user.showDriverForms(ui.selectors); 
    }) 
    ui.selectors.passengerBtn.addEventListener('click' , function(){
        user.showPassengerForms(ui.selectors) ;
    }) 
    ui.selectors.passFormSUbtn.addEventListener('click' , function(){
        user.showPassengerSUform(ui.selectors)
    }) 
    ui.selectors.passFormSIbtn.addEventListener('click' , function(){
        user.showPassengerSIform(ui.selectors)
    }) ;

    ui.selectors.driverFormSUbtn.addEventListener('click' , function(){
        user.showDriverSUform(ui.selectors)
    }) 
    ui.selectors.driverFormSIbtn.addEventListener('click' , function(){
        user.showDriverSIform(ui.selectors)
    }) ;

    //SUBMIT REGISTRATION FROM
    ui.selectors.passFormSU.addEventListener('submit' , function(e){
        e.preventDefault()
        user.savePassenger(ui.registerPassengerHandler() , ui.selectors)
    })

    //SUBMIT LOGIN FORM
    ui.selectors.passFormSI.addEventListener('submit' , function(e){
        e.preventDefault() ;
        var userLoginData = ui.loginPassengerHandler() ;
        var page = ui.selectors.driverOrPass.innerHTML ;
        user.loginPassenger(userLoginData , page) ; 
    })

    // Initialize the two functions
    ui.init() ;

    user.init()
}



// APP INIT
App(User, UI)
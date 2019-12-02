// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;


    ui.selectors.logo.addEventListener('click' , function(){
        location.reload()
    })


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




    //SUBMIT PASSENGER/DRIVER REGISTRATION FROM
    ui.selectors.passFormSU.addEventListener('submit' , function(e){
        e.preventDefault()
        user.savePassenger(ui.registerPassengerHandler() , ui.selectors)
    })
    
    ui.selectors.driverFormSU.addEventListener('submit' , function(e){
        e.preventDefault()
        user.saveDriver(ui.registerDriverHandler() , ui.selectors)
    })

    //SUBMIT LOGIN FORM
    ui.selectors.passFormSI.addEventListener('submit' , function(e){
        e.preventDefault() ;
        user.loginPassenger(ui.loginPassengerHandler() , ui.selectors) ; 
    })

    ui.selectors.driverFormSI.addEventListener('submit' , function(e){
        e.preventDefault()
        user.loginDriver(ui.loginDriverHandler() , ui.selectors)
    })

    // Initialize the two functions
    ui.init() ;

    user.init(ui.selectors)
}



// APP INIT
App(User, UI)
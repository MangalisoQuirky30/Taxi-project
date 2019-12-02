// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;


    ui.selectors.driverBtn.addEventListener('click' ,  function(){
        ui.selectors.driverOrPass.innerHTML = "DRIVER"
        ui.selectors.driverOrPass.style.textAlign = "center"
    })

    ui.selectors.passengerBtn.addEventListener('click' ,  function(){
        ui.selectors.driverOrPass.innerHTML = "PASSENGER"
        ui.selectors.driverOrPass.style.textAlign = "center"
    })



    ui.selectors.driverBtn.addEventListener('click' , function(){
        user.showForms(ui.selectors); 
    }) 
    ui.selectors.passengerBtn.addEventListener('click' , function(){
        user.showForms(ui.selectors) ;
    }) 
    ui.selectors.formSUbtn.addEventListener('click' , function(){
        user.showSUform(ui.selectors)
    }) 
    ui.selectors.formSIbtn.addEventListener('click' , function(){
        user.showSIform(ui.selectors)
    }) ;




    //SUBMIT REGISTRATION FROM
    ui.selectors.formSU.addEventListener('submit' , function(e){
        e.preventDefault()
        var userData = ui.registerHandler() ; 
        var exstUsers = user.data ;
        var newUserEmail = exstUsers.find(function(usr){
                            return usr.email === userData.email
                            })

        if(exstUsers.length > 0){
            if( newUserEmail != undefined ){
                console.log('user with that email address already exists. user not registered') ;
                user.errors.push({error : 'user with that email address already exists. user not registered'})
                console.log(user.errors)
            } else {
                console.log('no user with the email address exists... new user registered')
                user.save(userData) ;
            }
        } else {
            user.save(userData) ;
        }
    })

    //SUBMIT LOGIN FORM
    ui.selectors.formSI.addEventListener('submit' , function(e){
        e.preventDefault() ;
        var userLoginData = ui.loginHandler() ;
        var page = ui.selectors.driverOrPass.innerHTML ;
        user.login(userLoginData , page) ; 
    })





    // home page

    ui.selectors.menuBtn.addEventListener("click" , function(){
        user.showHideMenu(ui.selectors)
    })

    ui.selectors.inputData.addEventListener('keyup', function(e){
        user.searchRank(ui.selectors , e)
    })


    // Initialize the two functions

    ui.init() ;

    user.init()
}



// APP INIT
App(User, UI)
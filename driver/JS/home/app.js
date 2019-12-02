// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;

    

    ui.selectors.navHome.addEventListener('click' , function(){
        user.pageNavigator('home')
    })
    ui.selectors.navHistory.addEventListener('click' , function(){
        user.pageNavigator('history')
    })
    ui.selectors.navAccount.addEventListener('click' , function(){
        user.pageNavigator('account')
    })
    ui.selectors.navNotifications.addEventListener('click' , function(){
        user.pageNavigator('notifications')
    })
    ui.selectors.navHomeMob.addEventListener('click' , function(){
        user.pageNavigator('home')
    })
    ui.selectors.navHistoryMob.addEventListener('click' , function(){
        user.pageNavigator('history')
    })
    ui.selectors.navAccountMob.addEventListener('click' , function(){
        user.pageNavigator('account')
    })
    ui.selectors.navNotificationsMob.addEventListener('click' , function(){
        user.pageNavigator('notifications')
    })

    
    
    ui.selectors.menuBtn.addEventListener("click" , function(){
        user.showHideMenu(ui.selectors)
    })
    
    ui.selectors.dLogoutBtnMob.addEventListener("click" , function(){
        user.logoutDriver()
    })
    ui.selectors.dLogoutBtn.addEventListener("click" , function(){
        user.logoutDriver()
    })

    ui.selectors.driverUpdatesForm.addEventListener('submit' , function(e){
        e.preventDefault()
        user.updateDriverSettings(ui.selectors)
    })

    ui.selectors.endTrip.addEventListener("click" , function(e){
        var e = e.target.id
        console.log(e);
        
        //user.endTrip()
    })
    
    ui.selectors.cancelTrip.addEventListener("click" , function(e){
        var e = e.target.id
        console.log(e);
        user.cancelTrip()
    })

    ui.selectors.endTrip.addEventListener("click" , function(e){
        var e = e.target.id
        console.log(e);
        user.endTrip(ui.selectors)
    })

    ui.selectors.location.addEventListener('change' , function(){
        user.priceUpdate(ui.selectors)
    })
    ui.selectors.destination.addEventListener('change' , function(){
        user.priceUpdate(ui.selectors)
    })

    // Initialize the two functions
    ui.init() ;
    user.init(ui.selectors)
}

// APP INIT
App(User, UI)


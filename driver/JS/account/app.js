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

    ui.selectors.driverDP.addEventListener("change" ,function(e){
        var files = this.files
        var input = e.target;
        user.changeDP(ui.selectors , files , input)
    })


    // Initialize the two functions
    ui.init() ;
    user.init(ui.selectors)
}

// APP INIT
App(User, UI)


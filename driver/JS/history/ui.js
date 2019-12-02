// UI Controller

function UI(){
    this.selectors = {
        allTrips : document.querySelector(".all-trips") ,
        
        navHome : document.querySelector(".nav-home") ,
        navNotifications : document.querySelector(".nav-notifications") ,
        navHistory : document.querySelector(".nav-history") ,
        navAccount : document.querySelector(".nav-account") ,
        navHomeMob : document.querySelector(".nav-home-mob") ,
        navNotificationsMob : document.querySelector(".nav-notifications-mob") ,
        navHistoryMob : document.querySelector(".nav-history-mob") ,
        navAccountMob : document.querySelector(".nav-account-mob") ,
        
        accBalance : document.querySelector(".acc-balance") ,
        accBalanceMob : document.querySelector(".acc-balance-mob") ,
        driverDP : document.querySelector(".driver-dp") ,

        routeUpdates : document.querySelector(".history") ,
        
        dLogoutBtnMob : document.getElementById("logout-driver-mobile") ,
        dLogoutBtn : document.getElementById("logout-driver") , 

        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") , 
        name1 :  document.querySelector(".home-navigation-content-main-details-name__heading") ,
        name2 :  document.querySelector(".home-page-user-name__heading") ,
        
        page : document.getElementById('page') ,
        menuContainer :  document.querySelector(".home-navigation-content") ,

        driverUpdatesForm : document.getElementById("driver-updates") ,
        driverEmail : document.getElementById("driver-email") ,
    }
}


UI.prototype = {
    init : function(){
        console.log("hello, this is the home page")
    } ,

    
}


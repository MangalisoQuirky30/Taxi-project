// UI Controller

function UI(){
    this.selectors = {
        
        navHome : document.querySelector(".nav-home") ,
        navNotifications : document.querySelector(".nav-notifications") ,
        navHistory : document.querySelector(".nav-history") ,
        navAccount : document.querySelector(".nav-account") ,
        navHomeMob : document.querySelector(".nav-home-mob") ,
        navNotificationsMob : document.querySelector(".nav-notifications-mob") ,
        navHistoryMob : document.querySelector(".nav-history-mob") ,
        navAccountMob : document.querySelector(".nav-account-mob") ,
        
        dTripDetailsCont : document.querySelector(".driver-bookings") ,
        headingText : document.querySelector(".heading-text-t") ,

        driverDPMob : document.querySelector(".driver-dp") ,

        
        dLogoutBtnMob : document.getElementById("logout-driver-mobile") ,
        dLogoutBtn : document.getElementById("logout-driver") , 
        seatsLeft : document.querySelector("seats-left") ,
        timeLeft : document.querySelector(".time-left") ,
        lctn : document.querySelector(".location") ,
        dstntn : document.querySelector(".destination") ,

        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") , 
        name1 :  document.querySelector(".home-navigation-content-main-details-name__heading") ,
        name2 :  document.querySelector(".home-page-user-name__heading") ,
        
        page : document.getElementById('page') ,
        menuContainer :  document.querySelector(".home-navigation-content") ,
        
        routeUpdates : document.querySelector(".route-updates") ,

        driverUpdatesForm : document.getElementById("driver-updates") ,
        driverEmail : document.getElementById("driver-email") ,
        location : document.getElementById("location") ,
        destination : document.getElementById("destination") ,
        price : document.getElementById("price") ,
        priceTotal : document.getElementById("total-price") ,
        accBalance : document.querySelector(".acc-balance") ,
        accBalanceMob : document.querySelector(".acc-balance-mob") ,

        bookingList : document.querySelector(".booking-list") ,
        seatsLeft : document.querySelector(".seats-left") ,

        tripError : document.querySelector(".trip-error") ,
        
        endTrip : document.getElementById("end-trip") ,
        cancelTrip : document.getElementById("cancel-trip") ,
        
    }
}


UI.prototype = {
    init : function(){
        console.log("hello, this is the home page")
    } ,

    
}


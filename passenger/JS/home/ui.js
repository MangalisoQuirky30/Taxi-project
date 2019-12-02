// UI Controller

function UI(){
    this.selectors = {
        test : document.querySelector(".rank-page-details-left-text__heading") ,
        passBooked : document.querySelector(".pass-booked") ,
        bookedTaxiCont : document.getElementById("booked-taxi") ,





        pLogoutBtnMob : document.getElementById("logout-passenger-mobile") ,
        pLogoutBtn : document.getElementById('logout-passenger') ,

        menuBtn : document.querySelector(".home-navigation-content-access__btn") ,
        menu :  document.querySelector(".home-navigation-content-main") ,
        homeNav :  document.querySelector(".home-navigation") ,
        menuCont :  document.querySelector(".home-navigation-content") ,
        
        taxiDetz :  document.getElementById("taxi-details") ,
        
        passName1 : document.getElementById('pass-name1') ,
        passName2 : document.getElementById('pass-name2') ,
        
        dNumberPlate : document.getElementById('driver-plate-su') ,
        dSeatsNumber : document.getElementById('driver-sitNum-su') ,

        
        taxiRankName :  document.querySelector('.taxi-rank-name') ,

        menuContainer :  document.querySelector(".home-navigation-container") ,
        menuBtnSec :  document.querySelector(".home-navigation-content-access-container") ,
        page : document.getElementById('page') ,

        inputData : document.querySelector('input.home-page-mylocation-search__input'),

        homePage :  document.querySelector('.home-page') , 
        
        taxiRankHeadingName :  document.querySelector('.rank-page-heading__heading') ,

        taxiRankList :  document.querySelector('.home-page-nearby-taxirank-list') ,
        taxiRankListItem :  document.querySelector('.home-page-nearby-taxirank-list-item') ,
        rankPage :  document.querySelector('.rank-page') ,
        taxisAtRankList : document.querySelector('.rank-page-list') ,
        taxisAtRankListItem : document.querySelector('.rank-page-list-item') ,
        
        taxiDetailsBtn : document.querySelector('.reqTaxiBtn') ,

        requestBtn : document.getElementById("request-seat") , 
        requestDrivEmail : document.getElementById("request-driver-email")
    }
}



UI.prototype = {
    init : function(){
        console.log("hello, this is the home page")
    } 
}


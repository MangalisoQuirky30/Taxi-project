// user model 

function User(){
    this.errors = [] ;
    this.allDrivers = JSON.parse(localStorage.getItem('drivers'))
    this.driEml = window.location.search.substr(1).replace("%40" , "@").split("+")[0]
       
}

User.prototype = {

    init : function(selectors){
        var date = new Date();
        var token = date.getTime() ;
        var exstToken = JSON.parse(localStorage.getItem("dtoken"));
        var date1 =  new Date(Date.now());
        var date2 = new Date(exstToken);
        var newHour = date1.getHours() 
        var newMin = date1.getMinutes()
        var oldHour = date2.getHours()
        var oldMin = date2.getMinutes()
        var allDrivers = this.allDrivers
        var driEml = this.driEml

        console.log(driEml)

        for(var i = 0 ; i < allDrivers.length ; i++){
            if(allDrivers[i].dEmail === driEml){
                for(var x = 0 ; x < allDrivers[i].dTripsHistory.length ; x++ ){
                    selectors.allTrips.innerHTML += `<li class="trip">
                    <div class="from-cont">
                        <img src="IMG/icon-taxi-location.png" alt="icon-location-from" class="from-icon">
                        <span class="from">${allDrivers[i].dTripsHistory[x].from}</span>
                    </div>
                    <div class="to-cont">
                        <img src="IMG/icon-navigation.png" alt="icon-location-to" class="to-icon">
                        <span class="to">${allDrivers[i].dTripsHistory[x].to}</span>
                    </div>
                    <hr>
                    <div class="total-cont">
                        <img src="IMG/icon-money-bag.png" alt="icon-total" class="total-icon">
                        <span class="R">R <span class="total">${allDrivers[i].dTripsHistory[x].cash}</span></span>
                    </div>
                </li>`
                }
            }
        }

        if(!exstToken){
            window.location.href = "../index.html"
        }

        if ( newHour > oldHour && newMin > oldMin){
            localStorage.removeItem('dtoken')
            window.location.href = "../index.html"
        } 

        //this code prints the logged in user's name on the dashboard
       var driEml = window.location.search.substr(1).replace("%40" , "@").split("+")
       selectors.name1.innerHTML = driEml[1].replace("%20" , " ")
       selectors.name2.innerHTML = driEml[1].replace("%20" , " ")
        console.log(driEml[0]);
        
        var allDrivers = JSON.parse(localStorage.getItem('drivers'))
        
        
        for(var i = 0 ; i < allDrivers.length ; i++){
            
            selectors.accBalanceMob.innerHTML = " R" + allDrivers[i].AccBalance
            selectors.accBalance.innerHTML = " R" + allDrivers[i].AccBalance
            //selectors.driverDP.src = allDrivers[i].DisplayPictureSrc
        }
    


    } ,
    pageNavigator : function(page){
        window.location.href = `/driver/${page}.html` + '?' + window.location.search.substr(1)
    } ,

    logoutDriver : function(){
        var alert = confirm("Are you sure you want to log out?")
        if(alert){
            localStorage.removeItem('dtoken')
            window.location.href = "../index.html"
        }
    } ,

    showHideMenu : function(selectors){
        if (selectors.menu.style.transform != "translateX(-320px)") {
            selectors.menu.style.transform = "TranslateX(-320PX)"
            selectors.homeNav.style.zIndex = "0"
            selectors.menu.style.display = "none"
            selectors.routeUpdates.style.display = "block"
            selectors.menuContainer.style.backgroundColor = ""
        } else {
            selectors.homeNav.style.zIndex = "20"
            selectors.menu.style.transform = "TranslateX(0PX)"
            selectors.menu.style.display = "block"
            selectors.routeUpdates.style.display = "none"
            selectors.menuContainer.style.backgroundColor = "#5a4b0d52"
        }
    } ,



}


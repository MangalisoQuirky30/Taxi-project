// user model 

function User(){
    this.errors = [] ;
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
      
        // populates booking list

        var allDrivers = JSON.parse(localStorage.getItem('drivers'))
        
        
        for(var i = 0 ; i < allDrivers.length ; i++){
            if(allDrivers[i].dEmail == driEml[0])
            selectors.accBalanceMob.innerHTML = " R" + allDrivers[i].AccBalance
            selectors.accBalance.innerHTML = " R" + allDrivers[i].AccBalance
            
        }

        var allDrivers = JSON.parse(localStorage.getItem('drivers'))
        console.log(driEml[0])

        for(var i = 0 ; i < allDrivers.length ; i++){
            if(allDrivers[i].dEmail == driEml[0]){
                if(allDrivers[i].displayPictureSrc){
                    selectors.driverDPMob.src = allDrivers[i].displayPictureSrc
                } else {
                    selectors.driverDPMob.src = "IMG/driver.jpg"
                }

                console.log(allDrivers[i].dTripsHistory)
                if(allDrivers[i].dTripsHistory){
                    selectors.notificationsList.innerHTML += `
                    <li class="notifications-item">
                        <img src="IMG/icon-notification.png" alt="" class="icon">
                        <p class="notification-message"> <span class="time">${allDrivers[i].dTripsHistory[i].time}</span> Currently at ${allDrivers[i].dTripsHistory[i].from}  </p>
                    </li>
                    <li class="notifications-item">
                        <img src="IMG/icon-notification.png" alt="" class="icon">
                        <p class="notification-message"> <span class="time">${allDrivers[i].dTripsHistory[i].time}</span> Going to ${allDrivers[i].dTripsHistory[i].to} </p>
                    </li>
                    <li class="notifications-item">
                        <img src="IMG/icon-notification.png" alt="" class="icon">
                        <p class="notification-message"> <span class="time">${allDrivers[i].dTripsHistory[i].time}</span> ${allDrivers[i].dSeatsNumber} seats left </p>
                    </li>
                    <li class="notifications-item">
                        <img src="IMG/icon-notification.png" alt="" class="icon">
                        <p class="notification-message"> <span class="time">${allDrivers[i].dTripsHistory[i].time}</span> ${allDrivers[i].time} mins left </p>
                    </li>`
                } else {
                    selectors.notificationsList.innerHTML = ` <li class="notifications-item"><p style=" margin: 0 auto;">You do not have a notifications at the moment. Start your first trip?</p></li>`
                }
                
                
            
                selectors.accBalanceMob.innerHTML = " R" + allDrivers[i].AccBalance
                selectors.accBalance.innerHTML = " R" + allDrivers[i].AccBalance
            }
            
            
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


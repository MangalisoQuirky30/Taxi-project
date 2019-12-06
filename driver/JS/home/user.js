// user model 

function User(){
    this.errors = [] ;
    this.allDrivers = JSON.parse(localStorage.getItem('drivers'))
    this.crrntDrvrEml =  window.location.search.substr(1).replace("%40" , "@").split("+")[0]
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
       selectors.driverEmail.value = driEml[0]
       selectors.name1.innerHTML = driEml[1].replace("%20" , " ")
       selectors.name2.innerHTML = driEml[1].replace("%20" , " ")
        console.log(driEml[0]);
        
       // populates avalable taxi ranks in selelct menu
        var allTaxiRanks = JSON.parse(localStorage.getItem('taxi-ranks'))
        for(var i = 0; i < allTaxiRanks.length ; i++){
            selectors.destination.innerHTML += `<option value="${allTaxiRanks[i]}">${allTaxiRanks[i]}</option>`
            selectors.location.innerHTML += `<option value="${allTaxiRanks[i]}">${allTaxiRanks[i]}</option>`
        }

        // populates booking list

        var allDrivers = JSON.parse(localStorage.getItem('drivers'))
        console.log(driEml[0])

        for(var i = 0 ; i < allDrivers.length ; i++){
            
            selectors.accBalanceMob.innerHTML = " R" + allDrivers[i].AccBalance
            selectors.accBalance.innerHTML = " R" + allDrivers[i].AccBalance
            
            console.log(allDrivers[i].dEmail)
            if(allDrivers[i].dEmail == driEml[0]){
                selectors.accBalanceMob.innerHTML = " R" + allDrivers[i].AccBalance
                selectors.accBalance.innerHTML = " R" + allDrivers[i].AccBalance

                if(allDrivers[i].displayPictureSrc){
                    selectors.driverDPMob.src = allDrivers[i].displayPictureSrc
                } else {
                    selectors.driverDPMob.src = "IMG/driver.jpg"
                }
                
                console.log("found driver.... null not null");
                if(allDrivers[i].location.length  && allDrivers[i].destination.length ){
                    selectors.seatsLeft.innerHTML = allDrivers[i].dSeatsNumber + " seats left" 
                    selectors.timeLeft.innerHTML = parseInt(parseInt(allDrivers[i].dSeatsNumber) * 1.5) + " mins left" 
                    selectors.lctn.innerHTML = "Currently at " +  allDrivers[i].location 
                    selectors.dstntn.innerHTML = "Going to " + allDrivers[i].destination
                    selectors.driverUpdatesForm.style.display = 'none'
                    selectors.dTripDetailsCont.style.display = 'flex'
                    console.log("not null");
                    
                }
                
                if(!allDrivers[i].location.length && !allDrivers[i].destination.length){
                    selectors.driverUpdatesForm.style.display = 'block'
                    selectors.dTripDetailsCont.style.display = 'none'
                    console.log(" null");
                }
            }
        }

        var drivEml = this.crrntDrvrEml
        var loggedDriver = allDrivers.filter(function(driver){
            console.log(drivEml)
            if(driver.dEmail === drivEml){
                console.log(driver.dEmail[0])
                console.log(" found driver");
                return driver
            }   
        })
        console.log(allDrivers)
        var allBookings = loggedDriver[0].dBookings
        //
        console.log(loggedDriver[0])

        for(var i = 0 ; i < allBookings.length ; i++){
            console.log(allBookings[i])
            selectors.bookingList.innerHTML += `<li class="booking-name">${allBookings[i]}</li>`
        }

        var allDrivers = JSON.parse(localStorage.getItem('drivers'))
        
        
        for(var i = 0 ; i < allDrivers.length ; i++){
            if(allDrivers[i].dEmail === drivEml){
                console.log(allDrivers[i].AccBalance , drivEml)
                if( allDrivers[i].AccBalance > 0){
                    console.log("MOENY   " , allDrivers[i].dEmail)
                    console.log(allDrivers[i].AccBalance , drivEml)
                    selectors.accBalanceMob.innerHTML = `R ${allDrivers[i].AccBalance}`
                    console.log( `R ${allDrivers[i].AccBalance}` ,  allDrivers[i].dEmail );
                    
                    selectors.accBalance.innerHTML = " R" + allDrivers[i].AccBalance
                    //selectors.driverDP.src = allDrivers[i].DisplayPictureSrc
    
                }     else {
                    console.log("NO MOENY   " , allDrivers[i].dEmail)
                    selectors.accBalanceMob.innerHTML = " R 0"
                    selectors.accBalance.innerHTML = " R 0"
                    allDrivers[i].AccBalance = 0
                    localStorage.setItem('drivers' , JSON.stringify(allDrivers))
                }
                
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

    updateDriverSettings : function(selectors){
        var location = selectors.location.value ;
        var destination = selectors.destination.value ;

        if(location == destination) {
            selectors.price.innerHTML = "Location and destination cannot be the same"
        } else{
            //all taxis FROM cape town
            if (location == "Cape Town" && destination == "Bellville" || destination == "Khayelitsha" || destination == "Mitchell's Plain" || destination == "Nyanga" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Cape Town" && destination == "Langa" ){
                selectors.price.innerHTML = 12
            }
            if (location == "Cape Town" && destination == "Dunoon" || destination == "Wynberg"){
                selectors.price.innerHTML = 15
            }
            //all taxis TO cape town
            if (destination == "Cape Town" && location == "Bellville" || location == "Khayelitsha" || location == "Mitchell's Plain" || location == "Nyanga" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Cape Town" && location == "Langa" ){
                selectors.price.innerHTML = 12
            }
            if (destination == "Cape Town" && location == "Dunoon" || location == "Wynberg"){
                selectors.price.innerHTML = 15
            }
            //all taxis FROM Langa
            if (location == "Langa" &&  destination == "Khayelitsha" || destination == "Mitchell's Plain" ){
                selectors.price.innerHTML = 16
            }
            if (location == "Langa" && destination == "Bellville" ){
                selectors.price.innerHTML = 14
            }
            if (location == "Langa" && destination == "Dunoon" || destination == "Nyanga"){
                selectors.price.innerHTML = 10
            }
            //all taxis TO Langa
            if (destination == "Langa" &&  location == "Khayelitsha" || location == "Mitchell's Plain" ){
                selectors.price.innerHTML = 16
            }
            if (destination == "Langa" && location == "Bellville" ){
                selectors.price.innerHTML = 14
            }
            if (destination == "Langa" && location == "Dunoon" || location == "Nyanga"){
                selectors.price.innerHTML = 10
            }
            //all taxis FROM Bellville
            if (location == "Bellville" &&  destination == "Khayelitsha" || destination == "Mitchell's Plain" || destination == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Bellville" && destination == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            if (location == "Bellville" && destination == "Dunoon"){
                selectors.price.innerHTML = 16
            }
            //all taxis TO Bellville
            if (destination == "Bellville" &&  location == "Khayelitsha" || location == "Mitchell's Plain" || location == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Bellville" && location == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            if (destination == "Bellville" && location == "Dunoon"){
                selectors.price.innerHTML = 16
            }
            //all taxis FROM Khayelitsha
            if (location == "Khayelitsha" &&  destination == "Dunoon" || destination == "Mitchell's Plain" || destination == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Khayelitsha" && destination == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            //all taxis TO Khayelitsha
            if (destination == "Khayelitsha" &&  location == "Dunoon" || location == "Mitchell's Plain" || location == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Khayelitsha" && location == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            //all taxis FROM Mitchell's Plain 
            if (location == "Mitchell's Plain" && destination == "Nyanga" ){
                selectors.price.innerHTML = 16
            }
            if (location == "Mitchell's Plain" && destination == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (location == "Mitchell's Plain" && destination == "Dunoon" ){
                selectors.price.innerHTML = 15
            }
            //all taxis TO Mitchell's Plain 
            if (destination == "Mitchell's Plain" && location == "Nyanga" ){
                selectors.price.innerHTML = 16
            }
            if (destination == "Mitchell's Plain" && location == "Wynberg" ){
                selectors.price.innerHTML = 18
            }
            if (destination == "Mitchell's Plain" && location == "Dunoon" ){
                selectors.price.innerHTML = 15
            }

           

            var time = parseInt(selectors.price.innerHTML) * 1.5;
            var distance = parseInt(selectors.price.innerHTML) * 1.2;
            distance = distance.toString().substr(0,4)

            console.log(distance);
            distance = parseInt(distance)
            console.log(distance);

            var drivers = JSON.parse(localStorage.getItem("drivers"))

            drivers.map(function(d ){
                if(d.dEmail === selectors.driverEmail.value && selectors.location.value != null && selectors.destination.value != null){
                    d.price =   parseInt(selectors.price.innerHTML)
                    d.time = time
                    d.total = parseInt(selectors.price.innerHTML) * parseInt(d.dSeatsNumber)
                    d.distance = distance
                    d.location = location 
                    d.currentLocation = location
                    d.destination = destination
                    selectors.priceTotal.innerHTML = parseInt(selectors.price.innerHTML) * parseInt(d.seatsLeft)
                    localStorage.setItem("drivers" , JSON.stringify(drivers))
                    selectors.driverUpdatesForm.style.display = 'none'
                    selectors.dTripDetailsCont.style.display = 'flex'
                    window.location.reload()
                }
            })
        } 
    } ,

    priceUpdate : function(selectors){

        var location = selectors.location.value ;
        var destination = selectors.destination.value ;
        console.log( this.crrntDrvrEml)


        if(location == destination) {
            selectors.price.innerHTML = "Location and destination cannot be the same"
        } else{
            //all taxis FROM cape town
            if (location == "Cape Town" && destination == "Bellville" || destination == "Khayelitsha" || destination == "Mitchell's Plain" || destination == "Nyanga" ){
                var price = 18
                selectors.price.innerHTML = "R " + price 
            }
            if (location == "Cape Town" && destination == "Langa" ){
                var price = 12
                selectors.price.innerHTML = "R " + price 
            }
            if (location == "Cape Town" && destination == "Dunoon" || destination == "Wynberg"){
                var price = 15
                selectors.price.innerHTML = "R " + price 
            }
            //all taxis TO cape town
            if (destination == "Cape Town" && location == "Bellville" || location == "Khayelitsha" || location == "Mitchell's Plain" || location == "Nyanga" ){
                var price = 18
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Cape Town" && location == "Langa" ){
                var price = 12
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Cape Town" && location == "Dunoon" || location == "Wynberg"){
                var price = 15
                selectors.price.innerHTML = "R " + price 
            }
            //all taxis FROM Langa
            if (location == "Langa" &&  destination == "Khayelitsha" || destination == "Mitchell's Plain" ){
                var price = 16
                selectors.price.innerHTML = "R " + price 
            }
            if (location == "Langa" && destination == "Bellville" ){
                var price = 14
                selectors.price.innerHTML = "R " + price 
            }
            if (location == "Langa" && destination == "Dunoon" || destination == "Nyanga"){
                var price = 10
                selectors.price.innerHTML = "R " + price 
            }
            //all taxis TO Langa
            if (destination == "Langa" &&  location == "Khayelitsha" || location == "Mitchell's Plain" ){
                var price = 16
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Langa" && location == "Bellville" ){
                var price = 14
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Langa" && location == "Dunoon" || location == "Nyanga"){
                var price = 10
                selectors.price.innerHTML = "R " + price 
            }
            //all taxis FROM Bellville
            if (location == "Bellville" &&  destination == "Khayelitsha" || destination == "Mitchell's Plain" || destination == "Wynberg" ){
                var price = 18
                selectors.price.innerHTML = "R " + price 
            }
            if (location == "Bellville" && destination == "Nyanga" ){
                var price = 14
                selectors.price.innerHTML = "R " + price 
            }
            if (location == "Bellville" && destination == "Dunoon"){
                var price = 16
                selectors.price.innerHTML = "R " + price 
            }
            //all taxis TO Bellville
            if (destination == "Bellville" &&  location == "Khayelitsha" || location == "Mitchell's Plain" || location == "Wynberg" ){
                var price = 18
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Bellville" && location == "Nyanga" ){
                var price = 14
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Bellville" && location == "Dunoon"){
                var price = 16
                selectors.price.innerHTML = "R " + price 
            }
            //all taxis FROM Khayelitsha
            if (location == "Khayelitsha" &&  destination == "Dunoon" || destination == "Mitchell's Plain" || destination == "Wynberg" ){
                var price = 18
                selectors.price.innerHTML = "R " + price 
            }
            if (location == "Khayelitsha" && destination == "Nyanga" ){
                selectors.price.innerHTML = 14
            }
            //all taxis TO Khayelitsha
            if (destination == "Khayelitsha" &&  location == "Dunoon" || location == "Mitchell's Plain" || location == "Wynberg" ){
                var price = 18
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Khayelitsha" && location == "Nyanga" ){
                var price = 14
                selectors.price.innerHTML = "R " + price 
            }
            //all taxis FROM Mitchell's Plain 
            if (location == "Mitchell's Plain" && destination == "Nyanga" ){
                var price = 16
                selectors.price.innerHTML = "R " + price
            }
            if (location == "Mitchell's Plain" && destination == "Wynberg" ){
                var price = 18
                selectors.price.innerHTML = "R " + price
            }
            if (location == "Mitchell's Plain" && destination == "Dunoon" ){
                var price = 15
                selectors.price.innerHTML = "R " + price
            }
            //all taxis TO Mitchell's Plain 
            if (destination == "Mitchell's Plain" && location == "Nyanga" ){
                var price = 16
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Mitchell's Plain" && location == "Wynberg" ){
                var price = 18
                selectors.price.innerHTML = "R " + price 
            }
            if (destination == "Mitchell's Plain" && location == "Dunoon" ){
                var price = 15
                selectors.price.innerHTML = "R " + price 
            }

            
        for(var i = 0 ; i < this.allDrivers.length ; i++){
            if(this.allDrivers[i].dEmail == this.crrntDrvrEml){
                selectors.priceTotal.innerHTML = "R " + ( parseInt(price) * parseInt(this.allDrivers[i].dSeatsNumber) )
            }
        }

        }
    } ,

    cancelTrip : function(){
        var extDrv = JSON.parse(localStorage.getItem("drivers"))
        var extPss = JSON.parse(localStorage.getItem("passengers"))
       var driEml = window.location.search.substr(1).replace("%40" , "@").split("+")
       driEml = driEml[0]

       var bookedPass = extDrv.filter(function(d){
        if(d.dEmail == driEml){
            return d.dBookings
        }
       })
       bookedPass = bookedPass[0].dBookings
        console.log(bookedPass);

       if(bookedPass.length > 0){
            extPss.find(function(p){
                for(var i = 0 ; i < bookedPass.length ; i++){
                    if(p.pName == bookedPass[i]){
                        console.log(bookedPass[i]);
                        p.pBookings = ""
                    }
                }
            })
       }

       extDrv.map(function(d){
           if(d.dEmail == driEml){
               d.dBookings = []
               d.location = ''
               d.destination = ''
               d.time = ""
               d.price = ""
               d.distance = ""
           }
       })


     

       localStorage.setItem("drivers" , JSON.stringify(extDrv))
       localStorage.setItem("passengers" , JSON.stringify(extPss))
       window.location.reload()
    } ,

    endTrip: function(selectors){
        
        var extDrv = JSON.parse(localStorage.getItem("drivers"))
        var extPss = JSON.parse(localStorage.getItem("passengers"))
       var driEml = this.crrntDrvrEml
       var d = new Date()
       var time = d.getHours() + ":" + d.getMinutes()

       extDrv.map(function(d){
            d.Account 
            if(d.dEmail == driEml){
                if(!d.dTripsHistory){
                    d.dTripsHistory = []
                }
            var newTrip = {
                from : d.location ,
                to : d.destination ,
                cash : d.total,
                time : time
            }
            console.log(d.dBookings)
            if(d.dBookings.length == d.dAllSeats ){
                for(var i = 0; i < extPss.length ; i++){
                    for(var x = 0; x < d.dBookings.length ; x++){
                        if(extPss[i].pName === d.dBookings[x]){
                            if(extPss[i].pTripsHistory == null || extPss[i].pTripsHistory == null  ){
                                console.log("word up to my girls")
                                extPss[i].pTripsHistory = []
                            }
                            extPss[i].pBookings = ''
                            extPss[i].pTripsHistory.push(newTrip)
                        }
                    }
                }
                console.log(d.dBookings)
                d.dBookings = []
                d.location = ''
                d.destination = ''
                d.time = ""
                d.dSeatsNumber = parseInt(d.dAllSeats)
                d.price = ""
                d.distance = ""
                d.dTripsHistory.push(newTrip)
                d.AccBalance += parseInt(d.total) 
                localStorage.setItem("drivers" , JSON.stringify(extDrv))
                localStorage.setItem("passengers" , JSON.stringify(extPss))
                window.location.reload()
            } else if(d.dBookings.length === 0) {
                selectors.tripError.innerHTML = "You do not have any bookings. Cancel trip?"
             } 
             else if(d.dBookings.length < d.dSeatsNumber ) {
                selectors.tripError.innerHTML = "You are not fully booked. Cancel trip?"
             }
            
        }
    })


   
    }
} 


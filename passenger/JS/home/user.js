// user model 

function User(){
   // this.data = [] ; 
    this.errors = [] ;
}

User.prototype = {

    

    init : function(selectors){
        var date = new Date();
        var token = date.getTime() ;
        var exstToken = JSON.parse(localStorage.getItem("ptoken"));
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
            localStorage.removeItem('ptoken')
            window.location.href = "../index.html"
        } else {
        }

        selectors.rankPage.style.display = "none"
        //this code prints the logged in users name on the dashboard
       var passName = window.location.search.substr(1).replace("%20" , " ").replace("%40" , "@").split('?')
       console.log(passName[1])
       selectors.passName1.innerHTML = passName[0]
       selectors.passName2.innerHTML = passName[0]

       var passengerEmail = passName[1]
       console.log(passengerEmail)

       var allTaxiRanks = JSON.parse(localStorage.getItem('taxi-ranks'))

       for(var x = 0; x < allTaxiRanks.length ; x++){
            selectors.taxiRankList.innerHTML += 
            `<li class="home-page-nearby-taxirank-list-item">
                <div class="home-page-nearby-taxirank-list-item-icon">
                    <img src="IMG/icon-taxi.png" alt="taxi" class="home-page-nearby-taxirank-list-item-icon__img" data-name="${allTaxiRanks[x]}" /> 
                </div>
                <div class="home-page-nearby-taxirank-list-item-text">
                    <a  class="home-page-nearby-taxirank-list-item-text__paragraph taxi-rank-name">${allTaxiRanks[x]}</a>
                </div>
            </li>`
       }  

       

    } ,

    logoutPass : function(){
        var alert = confirm("Are you sure you want to log out?")
        if(alert){
            localStorage.removeItem('ptoken')
            window.location.href = "../index.html"
        }
    } ,

    showHideMenu : function(selectors){
        if (selectors.menu.style.transform != "translateX(-320px)") {
            selectors.menu.style.transform = "TranslateX(-320PX)"
            selectors.homeNav.style.zIndex = "0"
            selectors.menu.style.display = "none"
            selectors.page.style.display = "block"
            selectors.menuCont.style.backgroundColor = "#f5cf37"
        } else {
            selectors.homeNav.style.zIndex = "20"
            selectors.menu.style.transform = "TranslateX(0PX)"
            selectors.menu.style.display = "block"
            selectors.page.style.display = "none"
            selectors.menuCont.style.backgroundColor = "rgba(90, 75, 13, 0.32)"
        }
    } ,


    showTaxisAtRank : function(selectors , location){
        selectors.homePage.style.display = "none"
        selectors.rankPage.style.display = "block"
        selectors.taxiRankHeadingName.innerHTML = `${location}`       

        var taxiDrivers = JSON.parse(localStorage.getItem('drivers')) 

        for(var i = 0 ; i < taxiDrivers.length ; i++){
            if(taxiDrivers[i].location == location){
                //console.log(taxiDrivers[i])requestDrivEmail
                // selectors.requestDrivEmail.value += taxiDrivers[i].dEmail
                selectors.taxisAtRankList.innerHTML  += 
                `<li class="rank-page-list-item" data-email=${taxiDrivers[i].dEmail}>
                    <div class="rank-page-details">
                        <div class="rank-page-details-left">
                            <div class="rank-page-details-left-icon" data-id="taxi-request-btn">
                                <button type="button"  class="view-taxi-details" >
                                    <img src="IMG/icon-taxi.png" alt="" class="rank-page-details-left-icon__img" >
                                    <br>REQUEST  
                                </button>
                            </div>
                            <div class="rank-page-details-left-text">
                                <h4 class="rank-page-details-left-text__heading">${taxiDrivers[i].destination}  </h4>
                                <p class="rank-page-details-left-text__para">${taxiDrivers[i].dSeatsNumber} sits left</p>
                            </div>
                        </div>
                        
                        <div class="rank-page-details-right">
                            <div class="rank-page-details-right-text">
                                <h4 class="rank-page-details-right-text__heading">R${taxiDrivers[i].price}</h4>
                                <p class="rank-page-details-right-text__para">${taxiDrivers[i].dSeatsNumber * 1.5} mins left</p>
                            </div>
                        </div>
                    </div>
                </li>`
            }
            
        } 
        if(selectors.taxisAtRankList.innerHTML.trim() == ""){
            selectors.taxisAtRankList.innerHTML = '<li class="rank-page-list-item no-taxis" >There are currently no taxis available here</li>'
        }
        //return location.trim()
     } ,




     showTaxiDetails : function(item, email){
        item.style.display = "block"
        var taxiDrivers = JSON.parse(localStorage.getItem('drivers')) 

        for(var i = 0 ; i < taxiDrivers.length ; i++){
            if(taxiDrivers[i].dEmail == email) {
                var drivImage = "IMG/driver.jpg"

                if(taxiDrivers[i].displayPictureSrc){
                    drivImage = taxiDrivers[i].displayPictureSrc
                }
                
                item.innerHTML = `<div class="rank-page-driver-details" id="taxi-details">
                    <div class="rank-page-driver-details-profile">
                        <div class="rank-page-driver-profile-image">
                            <img src="${drivImage}" alt="driver" class="rank-page-driver-profile-image__img">
                        </div>
                        <div class="rank-page-driver-profile-name">
                            <h3 class="rank-page-driver-profile-name__text">${taxiDrivers[i].dName} </h3> 
                        </div>
                    </div>
                    <div class="rank-page-driver-details-contact">
                        <div class="rank-page-driver-details-contact-message">
                            <a href="sms:${taxiDrivers[i].dPhoneNum}?body=this is the text message to send" class="rank-page-driver-details-contact-message__btn">
                                <img src="IMG/icon-sms.png" alt="sms" id="sms" class="rank-page-driver-details-contact-message__btn--img">
                            </a>
                        </div>
                        <div class="rank-page-driver-details-contact-call">
                            <button class="rank-page-driver-details-contact-call__btn">
                                <img src="IMG/icon-call.png" alt="call" id="call" onclick="window.open('tel:${taxiDrivers[i].dPhoneNum}');" class="rank-page-driver-details-contact-call__btn--img">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="rank-page-route-details">
                    <div class="rank-page-route-details-nagivation">
                        <div class="rank-page-route-details-nagivation-to">
                            <img src="IMG/icon-location-to.png" alt="" class="rank-page-route-details-nagivation-to__img">
                        </div>
                        <div class="rank-page-route-details-location-to">
                            <h4 class="rank-page-route-details-location-to__text">${taxiDrivers[i].location}</h4>
                        </div>
                    </div>
                    <div class="rank-page-route-details-location">
                        <div class="rank-page-route-details-nagivation-from">
                            <img src="IMG/icon-location-from.png" alt="" class="rank-page-route-details-nagivation-from__img">
                        </div>
                        <div class="rank-page-route-details-location-from">
                            <h4 class="rank-page-route-details-location-from__text">${taxiDrivers[i].destination}</h4>
                        </div>
                    </div>
                </div>
                <div class="rank-page-taxi-details">
                    <div class="rank-page-taxi-details-container">
                        <div class="rank-page-taxi-details-image">
                            <img src="IMG/icon-taxi.png" alt="Taxi" style="display : block;" class="rank-page-taxi-details-image__img">
                            <span class="rank-page-taxi-details__text--value rank-page-taxi-details__text" >${taxiDrivers[i].dNumberPlate}</span>
                        </div>
                        <div class="rank-page-taxi-details-distance">
                            <p class="rank-page-taxi-details__text">
                                <span class="rank-page-taxi-details__text--property">Distance</span>
                                <span class="rank-page-taxi-details__text--value">${taxiDrivers[i].distance}km</span>
                            </p>
                        </div>
                        <div class="rank-page-taxi-details-time">
                            <p class="rank-page-taxi-details__text">
                                <span class="rank-page-taxi-details__text--property">Seats Left</span>
                                <span class="rank-page-taxi-details__text--value">${taxiDrivers[i].dSeatsNumber} seats</span>
                            </p>
                        </div>
                        <div class="rank-page-taxi-details-price">
                            <p class="rank-page-taxi-details__text">
                                <span class="rank-page-taxi-details__text--property">Price</span>
                                <span class="rank-page-taxi-details__text--value">R${taxiDrivers[i].price}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="rank-page-taxi-request-container">
                    <div class="rank-page-taxi-request">
                        <button class="rank-page-taxi-request__btn" data-email="${taxiDrivers[i].dEmail}" id="request-seat">REQUEST A SIT</button>
                        <button class="rank-page-taxi-request__btn" data-email="${taxiDrivers[i].dEmail}" id="cancel-request">CANCEL</button>
                    </div>
                </div>`
            }
        }
     } ,

     requestRide : function(selectors , email){
        var passName = window.location.search.substr(1).replace("%20" , " ").replace("%40" , "@").split('?')
        var passengerEmail = passName[1]
        var taxiDrivers = JSON.parse(localStorage.getItem('drivers')) 
        var passengers  =  JSON.parse(localStorage.getItem('passengers')) 

        var passBooked = passengers.filter(function(p){
                            if(passengerEmail == p.pEmail && p.pBookings){
                                return p
                            }
                        }) 
        console.log(passBooked)
        if(passBooked.length > 0){
            var drivEml = taxiDrivers.filter(function(d){
                if(d.dEmail == passBooked[0].pBookings){
                    console.log("found driver looking for.")
                    return d
                }
            })
            console.log(drivEml)
            selectors.passBooked.innerHTML = `You have already requested a taxi ride from <i>${drivEml[0].dName} </i>, 
                                            going to <i>${drivEml[0].destination}</i>
                                            <button id="cancel-request" value="${email}">Cancel request</button>`
            console.log(drivEml)
            console.log(selectors.passBooked.innerHTML)
        }
        console.log(passBooked[0])
        if(!passBooked.length > 0){
            console.log(passengers)
            passengers.map(function(p){
                if(passengerEmail == p.pEmail){
                    p.pBookings = email                    
                    console.log(  p.pBookings)
                }
            }) 
            taxiDrivers.filter(function(d){
                if(d.dEmail == email){
                    d.dSeatsNumber =  parseInt(d.dSeatsNumber) - 1
                    d.dBookings.push(selectors.passName1.textContent)
                }
                if(d.dSeatsNumber == 0){
                    d.location = "enroute"
                    console.log(d.dSeatsNumber + " " +  d.location)
                }
            })
            localStorage.setItem('passengers' , JSON.stringify(passengers))
            localStorage.setItem('drivers' , JSON.stringify(taxiDrivers))
        } 
     } ,




     cancelRequest : function(selectors , email){
        var extPass = JSON.parse(localStorage.getItem("passengers"))
        var extDriv = JSON.parse(localStorage.getItem("drivers"))
        var passName = window.location.search.substr(1).replace("%20" , " ").replace("%40" , "@").split('?')
        var passengerEmail = passName[1]


        var bookers = extDriv.filter(function(driv){
            if(driv.dEmail == email){
                driv.dBookings 
                console.log(driv.dBookings )
                return driv.dBookings 
            }
        })
        
        extPass.filter(function(pass){
            if(pass.pEmail == passengerEmail){
                extDriv.filter(function(driv){
                    if(driv.dEmail == pass.pBookings){
                        driv.dBookings = []
                        driv.dSeatsNumber += 1
                        pass.pBookings = ''
                        //driv.dSeatsNumber = parseInt(driv.dSeatsNumber) + 1
                        console.log(driv)
                    }
                })
                
            }
        })
        selectors.passBooked.innerHTML = ""
        localStorage.setItem("drivers" , JSON.stringify(extDriv))
        localStorage.setItem("passengers" , JSON.stringify(extPass))
        window.location.reload()
        //console.log(pssngr)
     }
}

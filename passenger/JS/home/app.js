// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;

    localStorage.setItem('Taxi-ranks' , JSON.stringify(user.taxiRanks))

    ui.selectors.menuBtn.addEventListener("click" , function(){
        user.showHideMenu(ui.selectors)
    })
    ui.selectors.inputData.addEventListener('keyup', function(e){
        user.searchRank(ui.selectors , e)
    })
/////////////////////////////////////////////////////////
    ui.selectors.menuCont,addEventListener("click" , function(e){
        var email = e.target.value
        if(e.target.id == "cancel-request"){
            user.cancelRequest(ui.selectors , email )
        }
    })

    ui.selectors.taxiRankList.addEventListener('click' , function(e){
        var locate1 = e.target.textContent.trim()
        var locate2 = e.target.dataset.name
        var location
        console.log(locate1)
        console.log(locate2)

        if(!locate1 && locate2.length < 20){
            location = locate2
        } else if(!locate2 && locate1.length < 20){
            location = locate1
        } else {
            window.location.reload()
        }
        
        console.log(locate1 + " " + locate2);
        
        user.showTaxisAtRank(ui.selectors , location)
    })

    
    ui.selectors.pLogoutBtnMob.addEventListener("click" , function(){
        user.logoutPass()
    })
    
    ui.selectors.pLogoutBtn.addEventListener("click" , function(){
        user.logoutPass()
    })

   if(ui.selectors.taxisAtRankList != null){
        ui.selectors.taxisAtRankList.addEventListener('click' , function(e){
            var item1 = e.target.parentElement
            var item = item1.parentElement.parentElement.parentElement
            var email = item.dataset.email
            
            if (item1.dataset.id == 'taxi-request-btn' ){
                user.showTaxiDetails( item, email)
            }
        }) 
    }
    ui.selectors.taxisAtRankList.addEventListener("click" , function(e){
        e.preventDefault()
        var item = e.target
        var email = item.dataset.email
        var location = ui.selectors.taxiRankHeadingName.innerHTML

        //request seat
        if(item.id == "request-seat"){
            item.parentElement.parentElement.parentElement.style.display = "none"
            user.requestRide(ui.selectors  , email)
            ui.selectors.taxisAtRankList.innerHTML = ""
            user.showTaxisAtRank(ui.selectors , location)
        }

        // cancel request
        if(item.id == "cancel-request"){
            item.parentElement.parentElement.parentElement.style.display = "none"
            ui.selectors.taxisAtRankList.innerHTML = ""
            user.showTaxisAtRank(ui.selectors , location)
        }
        
    })

    // Initialize the two functions
    ui.init() ;
    user.init(ui.selectors)
}

// APP INIT
App(User, UI)
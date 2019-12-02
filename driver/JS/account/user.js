// user model 

function User(){
    this.errors = [] ;
    this.allDrivers = JSON.parse(localStorage.getItem('drivers'))
    this.crrntDrvrEml =  window.location.search.substr(1).replace("%40" , "@").split("+")[0]

}

User.prototype = {

    init : function(selectors){
        var driverEmail = this.crrntDrvrEml
        var allDrivers = this.allDrivers
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
        console.log(driEml[0]);

        // for(var i = 0 ; i < allDrivers.length ; i++){
        //     if(allDrivers[i].dEmail === driverEmail){
        //         selectors.driverDP__img.src = allDrivers[i].displayPictureSrc
        //     }
        // }
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

    changeDP : function(selectors , files) {
        var crrntDrvrEml = this.crrntDrvrEml
        var allDrivers = this.allDrivers
        if(files.length !== 0){
            var fileName = window.URL.createObjectURL(files[0])
            selectors.driverDP__img.src = fileName
            
                console.log(fileName)
                for(var i = 0 ; i < allDrivers.length ; i++){
                    if(allDrivers[i].dEmail === crrntDrvrEml){
                        // allDrivers[i].displayPictureSrc = fileName  THE CORRECT WAY
                        allDrivers[i].displayPictureSrc = 'IMG/driver.jpg'
                        localStorage.setItem('drivers' , JSON.stringify(allDrivers))
                    }
                }
            
        }
    }



}


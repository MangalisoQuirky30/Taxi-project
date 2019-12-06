// user model 

function User(){
    this.errors = [] ;
    this.allDrivers = JSON.parse(localStorage.getItem('drivers'))
    this.crrntDrvrEml =  window.location.search.substr(1).replace("%40" , "@").split("+")[0]
    this.taxiRanks = JSON.parse(localStorage.getItem("taxi-ranks"))

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

        
        var allDrivers = JSON.parse(localStorage.getItem('drivers'))
        
        
        for(var i = 0 ; i < allDrivers.length ; i++){
            console.log(allDrivers[i].dEmail , driEml[0])
            if(allDrivers[i].dEmail === driEml[0]){
                selectors.accBalanceMob.innerHTML = " R" + allDrivers[i].AccBalance
                selectors.accBalance.innerHTML = " R" + allDrivers[i].AccBalance

                if(allDrivers[i].displayPictureSrc){
                    selectors.driverDPMob.src = allDrivers[i].displayPictureSrc
                    selectors.driverDP__img.src = allDrivers[i].displayPictureSrc
                } else {
                    selectors.driverDPMob.src = "IMG/driver.jpg"
                    selectors.driverDP__img.src = "IMG/driver.jpg"
                }
                localStorage.setItem('drivers' , JSON.stringify(allDrivers))


                selectors.routeUpdates.innerHTML += `<form class="form-section-sign-up-form" id="driverSUForm">
                <ul class="errors-d-su"></ul>
               
                <div class="form-section-sign-up-form-name">
                    <label>First and Last name</label>
                    <input value="${allDrivers[i].dName}" type="text"  class="form-section-sign-up-form-name__input" id="driver-name-su"  placeholder="First Name and Last Name">
                </div>
                <div class="form-section-sign-up-form-name">
                    <label>Phone Number</label>
                    <input value="${allDrivers[i].dPhoneNum}" type="tel"  class="form-section-sign-up-form-name__input" id="driver-phone-su"  placeholder="Phone number">
                </div>

                <div class="form-section-sign-up-form-password">
                <label>Password</label>
                    <input value="" type="password" id="driver-password-su" class="form-section-sign-up-form-password__input" placeholder="password">
                </div>
                <div class="form-section-sign-up-form-password">
                <label>Confirm Password</label>
                    <input value="" type="password" id="driver-cpassword-su" class="form-section-sign-up-form-password__input" placeholder="confirm-password">
                </div>
                <div class="form-section-sign-up-form-submit">
                    <button type="submit"  id="driver-submit-su" class="driver-form-section-sign-up-form-submit__btn">Save Changes</button>
                </div>

            </form>`
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

    changeDP : function(selectors , files , input) {
        var crrntDrvrEml = this.crrntDrvrEml
        var allDrivers = this.allDrivers


        console.log( "CHANGING THE DP")

        for(var i = 0 ; i < allDrivers.length ; i++){
            if(allDrivers[i].dEmail == crrntDrvrEml){

                var myUser = allDrivers[i]

                console.log( myUser)
                if(files.length !== 0){
                    var fileName = window.URL.createObjectURL(files[0])
                        selectors.driverDP__img.src = fileName
        
                    var reader = new FileReader();
                        reader.onload = function(){
                    var dataURL = reader.result;
                    var output = document.getElementById('output');
                        selectors.driverDP__img.src  = dataURL;
                        console.log( myUser)
                        console.log( dataURL)
                        myUser.displayPictureSrc = dataURL
                        localStorage.setItem('drivers' , JSON.stringify(allDrivers))
                    };
                        reader.readAsDataURL(input.files[0]);
            }
        }




        }
    }



}


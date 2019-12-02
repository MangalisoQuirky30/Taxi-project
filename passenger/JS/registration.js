// var regForm = document.getElementById('reg-form')
// var logForm = document.getElementById('login-form')


// regForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     registerUser()
// })

// logForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     loginUser()
// })

// function addNewUser() {
//     var newUser = {
//         regUsername : document.getElementById('regUsername').value ,
//         regEmail : document.getElementById('regEmail').value ,
//         regPassword : document.getElementById('regPassword').value ,
//         regPasswordConfirm : document.getElementById('regPasswordConfirm').value
//     }

//     var errorsHTML = document.querySelector('.errors-container')
//     var errors = []

//     if ( newUser.regUsername == ''){
//         errors.push({errorName : 'The username field is empty *'})
//     }
//     if ( newUser.regEmail == ''){
//         errors.push({errorName : 'The email field is empty *'})
//     }
//     if ( newUser.regPassword == ''){
//         errors.push({errorName : 'The password field is empty *'})
//     }
//     if ( newUser.regPassword != newUser.regPasswordConfirm ){
//         errors.push({errorName : 'The passwords do not match *'})
//     }

//     errors.map(function(error , index){
//         errorsHTML.innerHTML += '<li>' + errors[index].errorName  + '</li>'

//     })

//     var existingUsers = JSON.parse(localStorage.getItem('users')).find(function(user){
//                         return user.regEmail === newUser.regEmail
//                         })

//     if (!existingUsers) {
//         if ( newUser.regPassword === newUser.regPasswordConfirm) {
//             console.log('passwords match')
//             var users = []

//             if ( localStorage.getItem('users') != null ) {
//                 users = JSON.parse(localStorage.getItem('users'))
//                 users.push(newUser)
//                 localStorage.setItem('users', JSON.stringify(users))
//             }
//             users.push(newUser)
//             localStorage.setItem('users', JSON.stringify(users))
//             location.reload()
//         } else {
//         document.getElementById('regPassword').value = ''
//         document.getElementById('regPasswordConfirm').value = ''
//         }
//     } else {
//         var errorsList = document.querySelector('.errors-container')
//         errorsList.innerHTML = '<li> user with this email address ' + newUser.regEmail + ' already exists. Please use a different email address </li>'
//         console.log("user with this email address already exists. Please use a different email address");
        
//     }

   
    
// }

// function loginUser(){
//     var logEmail = document.getElementById('logEmail').value
//     var logpassword = document.getElementById('logPassword').value
//     var existingUsers = JSON.parse(localStorage.getItem('users'))

    

//     existingUsers.map(function(user){
//         if(user.regEmail === logEmail && user.regPassword === logpassword){
//             var token = 'I am a token'
//             console.log(token);
            
//             localStorage.setItem('token', JSON.stringify(token))
//             window.location.href = 'home.html'
//         } else {
//             window.location.href = 'index.html'
//         }
//     })
// }

// //   https://www.moneylab.co.za/article/one-thing-separates-winning-traders-losers
// //   https://www.moneylab.co.za/article/10-must-see-stock-market-movies-you-have-watch-today
// //   https://www.moneylab.co.za/content/products
// //   https://www.facebook.com/moneylabsa
// //   https://www.moneylab.co.za/content/traders-club





















// var UserController = (function(){
//     var user = {

//     }

//     var login = function(email){
//         console.log(email)
//     }

//     var register = function(){
//         console.log('chased away to WUC')
//     }

//     return {
//         loginHandler : login , 
//         registerHandler : register
//     }
// })()


// var UIController = (function(){
//     var loginForm = document.getElementById('login-form')
//     var email = document.getElementById('login-email').value
//     return {
//         loginForm : form , 
//         getEmail : email
//     }
// })()


// var AppController = (function(UsrCtrl , UICtrl){
//     UICtrl.loginForm.addEventListener('submit' , function(e){
//         e.preventDefault()
//         console.log(UICtrl.getEmail)
//         UsrCtrl.loginHandler(UICtrl.getEmail)
//     })
// })(UserController , UIController)




















































var UserController = (function(){

    var loginUser = function( regEmail , logEmail , regPassword , logpassword , existingUsers , token){
        existingUsers.map(function(user){
            if(user.regEmail === logEmail && user.regPassword === logpassword){
                localStorage.setItem('token', JSON.stringify(token))
                window.location.href = 'home.html'
            } else {
                window.location.href = 'index.html'
            }
        })
    }

    var registerUser = function( errorsHTML , savedUsers , newUser , regUsername , regEmail , regPassword , regPasswordConfirm , errorsList) {
        var errors = []
    
        if ( regUsername == ''){
            errors.push({errorName : 'The username field is empty *'})
        }
        if ( regEmail == ''){
            errors.push({errorName : 'The email field is empty *'})
        }
        if ( regPassword == ''){
            errors.push({errorName : 'The password field is empty *'})
        }
        if ( regPassword != regPasswordConfirm ){
            errors.push({errorName : 'The passwords do not match *'})
        }
    
        errors.map(function(error , index){
            errorsHTML.innerHTML += '<li>' + errors[index].errorName  + '</li>'
        })
    
        if (!savedUsers) {
            if ( regPassword === regPasswordConfirm) {
                var users = []
    
                if ( localStorage.getItem('users') != null ) {
                    users = JSON.parse(localStorage.getItem('users'))
                    users.push(newUser)
                    localStorage.setItem('users', JSON.stringify(users))
                }
                    users.push(newUser)
                    localStorage.setItem('users', JSON.stringify(users))
                    location.reload()
            } else {
                regPassword.value = ''
                regPasswordConfirm.value = ''
            }
        } else {
            errorsList.innerHTML = '<li> user with this email address ' + newUser.regEmail + ' already exists. Please use a different email address </li>'
            console.log("user with this email address already exists. Please use a different email address" , savedUsers);
            
        }
    
    }

    return {
        loginHandler : loginUser , 
        registerHandler : registerUser
    }
})()

var UIController = (function(){
    var loginForm = document.getElementById('login-form')
    // var loginInfo = {
    //     email : document.getElementById('logEmail') ,
    //     password : document.getElementById('logPassword')
    // }
    var existingUsers = JSON.parse(localStorage.getItem('users'))
    var token = 'I am a token'


    var regForm = document.getElementById('reg-form')
    var newUser = {
        regUsername : document.getElementById('regUsername') ,
        regEmail : document.getElementById('regEmail') ,
        regPassword : document.getElementById('regPassword') ,
        regPasswordConfirm : document.getElementById('regPasswordConfirm')
    }

    var errorsHTML = document.querySelector('.errors-container')
    var errorsList = document.querySelector('.errors-container')

    if( localStorage.getItem('users') != null ) {
        var savedUsers = JSON.parse(localStorage.getItem('users')).find(function(user){
            return user.regEmail === newUser.regEmail
            })
    }

    return {
        getLoginForm : loginForm , 
        getLoginInfo : loginInfo = {
            email : document.getElementById('logEmail') ,
            password : document.getElementById('logPassword')
        } ,

        getRegForm : regForm , 
        getNewUser : newUser = {
            regUsername : document.getElementById('regUsername') ,
            regEmail : document.getElementById('regEmail') ,
            regPassword : document.getElementById('regPassword') ,
            regPasswordConfirm : document.getElementById('regPasswordConfirm')
        } ,

        getRegUsername : newUser.regUsername ,

        getExstUsers : existingUsers ,
        getToken : token ,

        getErrsHTML : errorsHTML , 
        getErrList : errorsList ,

        getSavedUsers : savedUsers

    }
})()

var AppController = (function(UsrCtrl , UICtrl){

    UICtrl.getLoginForm.addEventListener('submit' , function(e){
        e.preventDefault()
        UsrCtrl.loginHandler( UICtrl.getNewUser.regEmail.value , UICtrl.getLoginInfo.email.value ,  UICtrl.getNewUser.regPassword.value , UICtrl.getLoginInfo.password.value , UICtrl.getExstUsers , UICtrl.getToken)
    })

    UICtrl.getRegForm.addEventListener('submit' , function(e){
        e.preventDefault()
        UsrCtrl.registerHandler( UICtrl.getErrsHTML , UICtrl.getSavedUsers , UICtrl.getNewUser , UICtrl.getRegUsername.value ,  UICtrl.getNewUser.regEmail.value ,   UICtrl.getNewUser.regPassword.value ,  UICtrl.getNewUser.regPasswordConfirm.value ,  UICtrl.getErrList)
    })

})(UserController , UIController)

























































// var regForm = document.getElementById('reg-form')
// var loginForm = document.getElementById('login-form')
// var loginFormContainer = document.querySelector('#registration-form-container')
// var regFormContainer = document.querySelector('#log-in-form-container')
// var dirLoginForm = document.querySelector('.direct-login-form')
// var dirRegForm = document.querySelector('.direct-register-form')




// function loginRegisterToggle() {
//     var btn = document.getElementById("button");
    
//     if (regFormContainer.style.display === "none" ) {
//         regFormContainer.style.display = "block";
//         loginFormContainer.style.display = "none";
//         btn.textContent = 'register'
//     } else {
//         regFormContainer.style.display = "none";
//         loginFormContainer.style.display = "block";
//         btn.textContent = 'log-in'
//     }
// } 

// regForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     addNewUser()  
// })

// function addNewUser() {
    
//     var newUser = {
//         username : document.getElementById('username') ,
//         email : document.getElementById('email').value ,
//         password : document.getElementById('password').value 
//     }
//     var confirmPassword = document.getElementById('confirm-password').value
//     var objectHTML = document.querySelector('.errors-container ul')
//     var errors = []

//     if ( newUser.username == ""){
//         errors.push(  {errorTitle : 'Username field is empty'}  )
//     } else {
//         objectHTML.innerHTML = ''
//     }
//     if ( newUser.email == ""){
//         errors.push({errorTitle : 'email field is empty'})
//     } else {
//         objectHTML.innerHTML = ''
//     }
//     if ( newUser.password == ""){
//         errors.push({errorTitle : 'password field is empty'})
//     } else {
//         objectHTML.innerHTML = ''
//     }
//     if ( newUser.password != confirmPassword){
//         errors.push({errorTitle : 'passwords do not match'})
//     } else {
//         objectHTML.innerHTML = ''
//     }
    

//     errors.map(function(error, index){
//         objectHTML.innerHTML += '<li>' + errors[index].errorTitle +  ' * </li>'
//     })

//     if ( newUser.password === confirmPassword && newUser.password != "" && confirmPassword != "") {
//             console.log('passwords match')
//             var users = []

//             if ( localStorage.getItem('users') != null ) {
//                 users = JSON.parse(localStorage.getItem('users'))
//                 users.push(newUser)
//                 localStorage.setItem('users', JSON.stringify(users))
//                 console.log('new user added'); 
//                 location.reload()
//             } else {
//                 users.push(newUser)
//                 localStorage.setItem('users', JSON.stringify(users))
//                 console.log('new user added');
//                 location.reload()
//             }
            
//     } else  {
//        // alert('passwords do not match')
//     }
        
        
// }

// loginForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     login()
// })

// function login() {

//     var loginEmail = document.getElementById('email-login').value
//     var loginPassword = document.getElementById('password-login').value
//     var invalidLogDet = document.querySelector('.invalid-details')
//     var existingUsers = JSON.parse(localStorage.getItem('users'))

    

//     if ( existingUsers != null) {

//         existingUsers.map(function( user ){
//             if (user.email === loginEmail  && user.password === loginPassword ) {
//                 var token = (Math.random().toString(36).substr(2))
                 
//                 localStorage.setItem('token', JSON.stringify(token))
//                 window.location.href = 'home.html'
//             } else {
//                 alert('You have entered invalid log-in details.')
//                 console.log('incorrect details')
//                 location.reload()
//             }
//         })

//     } else {
//         console.log('incorrect details')
//         invalidLogDet.textContent = 'You have entered INVALID user details. Please try again.'
//     }
    
// }











































//qwertghjkl;lkjhgfdfghjkl
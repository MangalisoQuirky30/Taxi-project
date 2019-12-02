// APP Controller

function App( UserCtrl , UICtrl ){
    var user =  new UserCtrl() ;
    var ui = new UICtrl() ;

    ui.selectors.menuBtn.addEventListener("click" , function(){
        user.showHideMenu(ui.selectors)
    })

    // Initialize the two functions
    ui.init() ;
    user.init(ui.selectors)
}

// APP INIT
App(User, UI)
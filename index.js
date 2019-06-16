/// <reference path='jquery-3.4.1.min.js'/>
/// <reference path='userModel.js'/>


function index(){

    let userModelObj=undefined;
    let userModelJson=undefined;

    this.onSubmit=function(){

        // Get input value and store data in User Model
        userModelObj=new userModel();
            userModelObj.firstName=$("#txtFirstName").val();
            userModelObj.lastName=$("#txtLastName").val();

        // convert Object to json
        userModelJson=JSON.stringify(userModelObj);

        // store json model data in storage
        localStorage.setItem("userModel",userModelJson);
        
        // redirect to page 1
        window.location.pathname='./page1.html';

    }

}

function onSubmitClick(){

    let indexObj=new index();
        indexObj.onSubmit();
}
/// <reference path='./jquery-3.4.1.min.js'/>
/// <reference path='./userModel.js'/>

function page1(){

    let userModelJsonObj=undefined;
    let userModelObj=undefined;

    this.output=function(){

        // get local Storage
        userModelJsonObj=localStorage.getItem("userModel");
            localStorage.clear();

        // parse json
        userModelObj=JSON.parse(userModelJsonObj);

        // Bind Html element
        $("#lblFirstName").html(userModelObj.firstName);
        $("#lblLastName").html(userModelObj.lastName);

    }
}

function onLoadPage(){
    let page1Obj=new page1();
        page1Obj.output();
}

onLoadPage();
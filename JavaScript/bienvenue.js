
//Pour rendre un menu visible avec un click.

var parametres = document.querySelector(".parametre");
function menuUser(){
    parametres.classList.toggle("parametre-height");
}

var notifications = document.querySelector(".notifications");
function notif(){
    notifications.classList.toggle("notifications-height")
}

var messenger = document.querySelector(".messenger");
function Message(){
    messenger.classList.toggle("messenger-height");
}

var menu = document.querySelector(".menu");
function Menu(){
    menu.classList.toggle("menu-height");
}

var message =document.querySelector(".msgs");
function msg(){
    message.classList.toggle("msgs-height");
}

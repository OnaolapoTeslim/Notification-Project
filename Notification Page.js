let i=0;

const myArray1= [function() {
    const message1 = document.getElementById("message1");
    var redDots = document.querySelectorAll("#red-dot");
    message1.style.backgroundColor = "white";
    message1.style.scale = 1.2;
    redDots[0].style.display = "none";
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML--;

}, function() {
    const message1 = document.getElementById("message1");
    var redDots = document.querySelectorAll("#red-dot");
    message1.style.backgroundColor = "white";
    message1.style.scale = 1;
    redDots[0].style.display = "none"; }]

const function1 = function() {
    return myArray1[i++ % myArray1.length]();
}

const myArray2 = [function() {
    const message2 = document.getElementById("message2");
    const redDots = document.querySelectorAll("#red-dot");
    message2.style.backgroundColor = "white";
    message2.style.scale = 1.2;
    redDots[1].style.display = "none";
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML--;
    
}, function() {
    const message2 = document.getElementById("message2");
    var redDots = document.querySelectorAll("#red-dot");
    message2.style.backgroundColor = "white";
    message2.style.scale = 1;
    redDots[1].style.display = "none"; 
} ];

const function2 = function() {
      return myArray2[i++ % myArray2.length]();
}
const myArray3 = [function() {
    const message3 = document.getElementById("message3");
    const redDots = document.querySelectorAll("#red-dot");
    message3.style.backgroundColor = "white";
    message3.style.scale = 1.2;
    redDots[2].style.display = "none";
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML--;

}, function() {
    const message3 = document.getElementById("message3");
    var redDots = document.querySelectorAll("#red-dot");
    message3.style.backgroundColor = "white";
    message3.style.scale = 1;
    redDots[2].style.display = "none"; 
} ];

const function3 = function() {
      return myArray3[i++ % myArray3.length]();
}
const myArray4 = [function() {
    const message4 = document.getElementById("message4");
    const redDots = document.querySelectorAll("#red-dot");
    message4.style.backgroundColor = "white";
    message4.style.scale = 1.2;
    redDots[3].style.display = "none";
    document.getElementById("privatemessage").style.display="inline-block";
    message4.style.height = "17rem";
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML--;

}, function() {
    const message4 = document.getElementById("message4");
    var redDots = document.querySelectorAll("#red-dot");
    message4.style.backgroundColor = "white";
    message4.style.scale = 1;
    redDots[3].style.display = "none"; 
    document.getElementById("privatemessage").style.display="none";
    message4.style.height = "100px";

} ];

const function4 = function() {
      return myArray4[i++ % myArray4.length]();
}
const myArray5 = [function() {
    const message5 = document.getElementById("message5");
    const redDots = document.querySelectorAll("#red-dot");
    message5.style.backgroundColor = "white";
    message5.style.scale = 1.2;
    redDots[4].style.display = "none";
    document.getElementById("privatecomment").style.display="inline-block";
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML--;

}, function() {
    const message5 = document.getElementById("message5");
    var redDots = document.querySelectorAll("#red-dot");
    message5.style.backgroundColor = "white";
    message5.style.scale = 1;
    redDots[4].style.display = "none"; 
    document.getElementById("privatecomment").style.display="none";

} ];

const function5 = function() {
      return myArray5[i++ % myArray5.length]();
}
const myArray6 = [function() {
    const message6 = document.getElementById("message6");
    const redDots = document.querySelectorAll("#red-dot");
    message6.style.backgroundColor = "white";
    message6.style.scale = 1.2;
    redDots[5].style.display = "none";
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML--;

}, function() {
    const message6 = document.getElementById("message6");
    var redDots = document.querySelectorAll("#red-dot");
    message6.style.backgroundColor = "white";
    message6.style.scale = 1;
    redDots[5].style.display = "none"; 
} ];

const function6 = function() {
      return myArray6[i++ % myArray6.length]();
}
const myArray7 = [function() {
    const message7 = document.getElementById("message7");
    const redDots = document.querySelectorAll("#red-dot");
    message7.style.backgroundColor = "white";
    message7.style.scale = 1.2;
    redDots[6].style.display = "none";
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML--;

}, function() {
    const message7 = document.getElementById("message7");
    var redDots = document.querySelectorAll("#red-dot");
    message7.style.backgroundColor = "white";
    message7.style.scale = 1;
    redDots[6].style.display = "none"; 
} ];

const function7 = function() {
      return myArray7[i++ % myArray7.length]();
}
function readAll () {
    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    const message3 = document.getElementById("message3");
    const message4 = document.getElementById("message4");
    const message5 = document.getElementById("message5");
    const message6 = document.getElementById("message6");
    const message7 = document.getElementById("message7");
    var redDots = document.querySelectorAll("#red-dot");
    const messageArray = [message1, message2, message3, message4, message5, message6, message7];
    for(let i=0; i< messageArray.length; i++){
        messageArray[i].style.backgroundColor = "white";
    }
    for(let i=0; i < redDots.length; i++){
redDots[i].style.display="none";
    }
    const unreadMessages = document.getElementById("unreadMessages");
    unreadMessages.innerHTML = 0;

}
   
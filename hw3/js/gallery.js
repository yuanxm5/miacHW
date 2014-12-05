function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    }  
    else {
        oldonload();
        func();
    }
}

function checkTime(t) {
    if(t < 10) {
        return "0" + t;
    }
    return t;
}
        

function date() {
    today = new Date();
    time.innerHTML = checkTime(today.getFullYear()) + "-" + checkTime(today.getMonth()) + "-" + checkTime(today.getDate()) + "-" + checkTime(today.getHours()) + "-" + checkTime(today.getMinutes()) + "-" + checkTime(today.getSeconds());
    t = setTimeout("date()", 500);
}

var submit = document.getElementById("comment-submit");
var count = 1

submit.onclick = function() {
    var text = document.getElementById("comment-text");
    if(text.value.length < 4) {
        alert("Sorry more than four words is in need");
    }
    else {
        count++;
        countNum.innerHTML = count;
        var newcom = document.createElement("p");
        var newlist = document.createElement("li")
        newcom.innerHTML = text.value;
        newlist.appendChild(newcom);
        newlist.className = "comment-item";
        document.getElementById("comments-list").appendChild(newlist)
        text.value = "";
    }
}
    

addLoadEvent(date)
     
    

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

var myGallerySlide = new Array();
var i;
var firstIntervalPoint=0;
var topPicturePoint=2;
var nextPoint;
myGallerySlide[0]=document.getElementById("gallery-slide1");
myGallerySlide[1]=document.getElementById("gallery-slide2");
myGallerySlide[2]=document.getElementById("gallery-slide3");
myGallerySlide[0].style.opacity=0;
myGallerySlide[1].style.opacity=0;
myGallerySlide[2].style.opacity=1;
for(i=0;i<3;i++)
{
    myGallerySlide[i].style.zIndex=i+1;
}
var firstSetInterval=setInterval("firstInterval()",40)
function firstInterval()
{ 
    firstIntervalPoint++;
    nextPoint=topPicturePoint-1;
    if(nextPoint==-1){nextPoint=2;}
    if(firstIntervalPoint>50)
    {     
        myGallerySlide[topPicturePoint].style.opacity=1-(firstIntervalPoint-50)*0.02;
        myGallerySlide[nextPoint].style.opacity=(firstIntervalPoint-50)*0.02;
    }
    if(firstIntervalPoint==100)
    {
        myGallerySlide[topPicturePoint].style.zIndex=0;        
        for(i=0;i<3;i++)
        {              
            myGallerySlide[i].style.zIndex++;
        }        
        firstIntervalPoint=0;
        topPicturePoint--;
        if(topPicturePoint==-1){topPicturePoint=2;}
    }    
}















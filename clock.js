timerID = setInterval('Timer()',500);

function Timer() {
    document.getElementById("time").innerHTML = Time();
    document.getElementById("second").innerHTML = Second();
    document.getElementById("date").innerHTML = Date();
    }

function Time() {
    var now = new Date(); 
    var hour = ("0" + now.getHours()).slice(-2);
    var min = ("0" + now.getMinutes()).slice(-2);
    var out = hour + ":" + min
    return out;
    }

function Second() {
    var now = new Date()
    var sec = ("0" + now.getSeconds()).slice(-2);
    return sec;
}

function Date() {
    var now = new Date(); 
    var mon = ("0" + (now.getMonth() + 1)).slice(-2);
    var day = ("0" + now.getDate()).slice(-2);    
    var out = mon + "/" + day
    return out;
}

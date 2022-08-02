let startTime, endTime,seconds;
seconds=0;
let copy_updated=document.getElementById('h5');

function timeDifference() {
    endTime = new Date();
    var seconds = Math.round((endTime - startTime)/1000);
    
    if (seconds > 10) {
        document.getElementById('time').innerHTML = "Write Again!!";
        document.getElementById("textID").value = "";
    }
    else {
        document.getElementById('time').innerHTML = 10 - seconds + "s";
    }
}
function saveText(){
    var text=document.getElementById("textID");
    text.select();
    navigator.clipboard.writeText(text.value);
    copy_updated.style.visibility="visible"

}
function changeSize(id) {
    document.getElementById("textID").style.fontSize = id.id + "px";
}

function keydownFunction() {
    startTime = new Date();
    const timeInterval = setInterval(timeDifference, 1000)
    copy_updated.style.visibility="hidden"
}


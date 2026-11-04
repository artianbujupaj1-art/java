var noon="12"

function showCurrentTime(){
    var clock=document.getElementById("clock")
    var getTime=new Date()


    var hours= getTime.showHours()
    var minutes= getTime.showMinutes()
    var seconds= getTime.showSeconds()

    var meridian="AM"

    if(hours>=noon){
        meridian="PM"
    }

    var clockTime= hours + ":" + minutes+ ":"+ seconds +"   "+ meridian
}
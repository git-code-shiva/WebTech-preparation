let interval;

document.getElementById("timeCount").addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        startTimer();
    }
})

function startTimer() {
    // clearInterval(interval)

    let timeCount = document.getElementById("timeCount").value;
    timeCount = parseInt(timeCount);
    
    if (isNaN(timeCount)) {
      document.getElementById("current-time").innerHTML = "Invalid input";
      return;
    }
    
    document.getElementById("current-time").innerHTML = timeCount;
    
   let interval=  setInterval(function() {
      timeCount--;
      document.getElementById("current-time").innerHTML = timeCount;
      
      if (timeCount === 0) {
        clearInterval(interval);
        document.getElementById("current-time").innerHTML = "Countdown finished";
      }
    }, 1000);
    document.getElementById("timeCount").value = ""
}
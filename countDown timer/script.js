const showTimer = document.getElementById("current-time");
let interval;

document.getElementById("timeCount").addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        startTimer();
    }
})

function startTimer() {
    clearInterval(interval)

    let timeCount = document.getElementById("timeCount").value;
    timeCount = parseInt(timeCount);
    
    if (isNaN(timeCount)) {
      showTimer.innerHTML = "0";
      return;
    }
    if(timeCount<=0 ){
      showTimer.innerHTML= "0"
      document.getElementById("timeCount").value = ""
      return
    }
    
    showTimer.innerHTML = timeCount;
    
      interval=  setInterval(()=> {
      timeCount--;
      showTimer.innerHTML = timeCount;
      
      if (timeCount === 0) {
        clearInterval(interval);
        showTimer.innerHTML = "Countdown finished";
      }
    }, 1000);
    document.getElementById("timeCount").value = ""
}
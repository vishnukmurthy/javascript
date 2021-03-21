var timer = document.getElementById("timer");
var toggleBtn = document.getElementById("toggle");
var resetBtn = document.getElementById("reset");

var watch = new StopWatch(timer);

toggleBtn.addEventListener("click", function(){
	if(watch.isOn){
		toggleBtn.textContent = "Start";
		watch.stop();
	} else {
		toggleBtn.textContent = "Stop";
		watch.start();
	}
})

resetBtn.addEventListener("click", function(){
	console.log("reset button has been clicked");
	watch.reset();
})

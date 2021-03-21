
function StopWatch(timer) {
	var time = 0;
	var interval;
	var offset;

	function update(){
		if(this.isOn){
			time += delta();
		}
		var formattedTime = timeFormatter(time);
		console.log(formattedTime);
		timer.textContent = formattedTime;
	}

	function delta(){
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}

	function timeFormatter(timeInMillis){
		var time = new Date(timeInMillis);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var millis = time.getMilliseconds().toString();

		if(minutes.length < 2){
			minutes = "0" + minutes;
		}

		if(seconds.length < 2){
			seconds = "0" + seconds;
		}

		while(millis.length < 3){
			millis = "0" + millis;
		}

		return minutes + ":" + seconds + ":" + millis;
	}


	this.isOn = false;

	this.start = function(){
		if(!this.isOn){
			console.log("starting up, about to set interval");
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.isOn = true;
		}
	}

	this.stop = function(){
		if(this.isOn){
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	}

	this.reset = function(){
		time = 0;
		update();
	}
}

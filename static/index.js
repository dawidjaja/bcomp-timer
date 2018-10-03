this.end = 9 * 20 * 60;
this.time = 1 * 20 * 60;
this.hour = 0;
this.minute = 0;
this.second = 0;
this.active = false;
this.looper = null

function main() {
}

function div(x, y) {
	return Math.floor(x / y);
}

function startStopwatch() {
	if (this.active) {
		this.active = false;
		return clearInterval(this.looper);
	}

	this.active = true;
	return this.looper = setInterval(() => {
                this.time = Math.min(this.time, this.end - 1);
		this.time++;
		incrementStopwatch(); 
		incrementProgressbar(); 
	}, 1000);
} 

function leadingZeros(input) {
	if(input < 10) {
		input = '0' + input;
	}
	return input;
}

function incrementStopwatch() {
	tmp = time - 20 * 60;
	this.hour = div(div(tmp, 60), 60);
	this.minute = div(tmp, 60) % 60;
	this.second = tmp % 60;
        if (this.minute % 20 == 19 && this.second >= 50) {
          $("#running-time").css("color", this.second % 2 ? "white" : "red");
          $("#running-time").css("font-size", this.second % 2 ? "80px" : "100px");
        }
        if (this.minute % 20 == 0 && this.second < 2) {
          $("#running-time").css("color", this.second % 2 ? "white" : "red");
          $("#running-time").css("font-size", this.second % 2 ? "80px" : "100px");
        }
	$("#running-time").text(leadingZeros(hour) + " : " + leadingZeros(minute) + " : "  + leadingZeros(second));
}

function incrementProgressbar() {
	eps = 1e-9;
	val = "-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(255, 255, 255, 0.4)), color-stop("
	+ Math.min(this.time / this.end, 1 - eps) + ", rgba(0, 0, 0, 0.5)), color-stop("
	+ Math.min(this.time / this.end, 1 - eps) + ", rgba(255, 255, 255, 0.4)))";
	$("#schedule").css("background-image", val);
}

main()

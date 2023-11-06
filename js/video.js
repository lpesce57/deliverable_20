let vid = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	vid.autoplay = false;
	vid.pause();
	vid.loop = false;
	vid.volume = document.querySelector("#slider").value / 100;
});

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play video");
		vid.play();
		document.querySelector("#volume").textContent = Math.round(vid.volume * 100) + "%";
	});

	//only change content below this comment
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause video");
		vid.pause();
		vid.volume = 0;
		document.querySelector("#volume").textContent = vid.volume + "%";
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow video");
		vid.playbackRate = vid.playbackRate - .1;
		console.playbackRate = vid.playbackRate;
	});

	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed up video");
		vid.playbackRate = vid.playbackRate + .1;
		console.playbackRate = vid.playbackRate;
	});

	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip forward 10 seconds");
		if (vid.currentTime + 10 <= vid.duration) {
			vid.currentTime = vid.currentTime + 10;
			console.currentTime = vid.currentTime + 10;
		}
		else {
			vid.currentTime = 0;
			console.currentTime = 0;
		}
		
	});

	document.querySelector("#mute").addEventListener("click", function() {
		console.log("Mute or unmute");
		if (vid.muted) {
			vid.volume = 100;
		  } else {
			vid.volume = 0;
		  }
	});

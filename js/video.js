var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Auto Play is set to " + video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML =  video.volume*100 + "%";
}
);

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
}
);

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate -= 0.1; 
	console.log("New playback rate is " + video.playbackRate + " after slowing down");
}
);

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate += 0.1; 
	console.log("New playback rate is " + video.playbackRate + " after speeding up");
}
);

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location is " + video.currentTime);
}
);

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
}
);

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume Slider");
	video.volume = document.querySelector("#slider").value / 100; // from 0 to 1
	console.log("Volume is set to " + video.volume);

	document.querySelector("#volume").innerHTML =  video.volume*100 + "%";
}
);

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
}
);
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
}
);
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


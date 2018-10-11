
const playVideo = (element, stream) => {
	var video = document.getElementById(element)
	video.srcObject = stream
	video.onloadedmetadata = function (e) {
		video.play()
	}
}

export default playVideo

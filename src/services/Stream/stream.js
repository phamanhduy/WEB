
const streamVideo = (cb, props) => {
	navigator.getUserMedia({ audio: false, video: { width: 1280, height: 1280 } },
		(stream) => {
			cb(stream, props)
		},
		(err) => {
			console.log(err)
		}
	)
}

export default streamVideo

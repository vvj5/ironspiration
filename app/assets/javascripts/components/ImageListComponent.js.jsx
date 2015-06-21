var ImageListComponent = React.createClass({
	getInitialState: function() {
		return {
			ImgThumbnailArray: []
		}
	},
	componentDidMount: function() {
		$.get (
			"http://localhost:3000/projects",
			function(imgList) {
				if(this.isMounted()) {
					this.setState({
						ImgThumbnailArray: (imgList)
					});
				}
			}.bind(this)
		);
	},
	render: function () {

		thumbnails = this.state.ImgThumbnailArray.map(function(testModel){
			
			return (
					<div className="col6" key ={testModel.id}>
						<h1>{testModel.title}</h1>
						<img src="https://vice-images.vice.com/images/articles/crops/2013/02/05/you-should-forgive-bill-murray-for-making-a-bad-movie-1413325188872-crop_mobile_400.jpeg?resize=*:*&output-quality=75" />
					</div>	
				);
		});
		return (
			<div className="row" onClick = {this.linkToProjectPage}>
				{thumbnails}
			</div>
		);
	},

	linkToProjectPage: function(e) {
		console.log("test");
		console.log(thumbnails[0].key);
	}
});
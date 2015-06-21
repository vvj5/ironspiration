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
					<div className="screenshot col6" key ={testModel.id}>
						<h2>{testModel.title}</h2>
						<img src={testModel.image_link} />
					</div>
						
				);
		});
		return (
			<div>
			{thumbnails}
			</div>
		);
	}
});
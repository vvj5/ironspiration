var PitchListComponent = React.createClass({
	getInitialState: function() {
		return {
			PitchArray: []
		}
	},
	componentDidMount: function() {
		$.get (
			"http://ironspiration.herokuapp.com/projects",
			function(pitchList) {
				if(this.isMounted()) {
					this.setState({
						PitchArray: (pitchList)
					});
				}
			}.bind(this)
		);
	},
	render: function () {
		pitches = this.state.PitchArray.map(function(pitchModel){

		if(pitchModel.category === 2) {
			return (
					<div key={pitchModel.id}>
						<h1 className="pitch-title">{pitchModel.title}</h1>
						<p>{pitchModel.body}</p>
					</div>
				);
			}
			
		});
		
		return (
			<div>
				<section className="pitch-page">
					{pitches}
				</section>
			</div>
		);
	}	
});


	
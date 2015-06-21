var OverallPitchPageComponent = React.createClass({
	getInitialState: function() {
		return {
			PitchArray: []
		}
	},
	componentDidMount: function() {
		$.get (
			"http://localhost:3000/projects",
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

				<header>
					<div className="logo">
						<a href="#home"><img src="images/logo.png"/></a>
					</div>
				</header>

				<section className="pitch-page">
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
					<div>
						<h1>PITCH TITLE</h1>
						<p>A brief description of the pitch goes here.</p>
					</div>
				</section>
			</div>	
		);	
    }
		pitches = this.state.PitchArray.map(function(pitchModel){
			
			return (
					<div key={pitchModel.id}>
						<h3>{pitchModel.title}</h3>
						<div>{pitchModel.body}</div>
					</div>
				);
			
		});
		return (
			<div>
			{pitches}
			</div>
		);
	}
});


	
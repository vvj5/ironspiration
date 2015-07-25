var PitchList = new PitchedCollection();
var PitchFormComponent = React.createClass({
	render: function () {
		return (
			<div className="container">
				<header>
					<div className="logo">
						<a href="#home"><img src="http://i.imgur.com/lCTMp9r.png"/></a>
					</div>
				</header>
				<nav>
					<ul>
						<li>
							<a href="#pitch-page"><span>SUBMIT</span></a> | 
						</li>
						<li>
							<a href="#pitch-page"> PITCHES</a>
						</li>
					</ul>
				</nav>
				<section>
					<div className="grey-rectangle">
						<input type="text" ref = "pitchTitle" name="PITCH-TITLE" placeholder="PITCH TITLE" />
						<input type="text" ref="pitchBody" name="BODY" placeholder="DESCRIPTION" />

						<div className="buttons">
							<a href="#success">
								<div onClick={this.addPitch} className="submit button">
									<p className="submit-text">SUBMIT</p>
								</div>
							</a>
						</div>
					</div>
				</section>
			</div>
		);
	},

	addPitch: function() {
		var pitch = new PitchedModel({
			user_id: null,
			title: this.refs.pitchTitle.getDOMNode().value,
			body: this.refs.pitchBody.getDOMNode().value
		});
		alert("We are not accepting new pitch submissions at this time, sorry!");
		// pitch.save();
		// PitchList.add(pitch);
	}

});

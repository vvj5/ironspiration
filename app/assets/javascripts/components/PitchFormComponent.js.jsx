var PitchFormComponent = React.createClass({
    render: function () {
        return (
        	<div className="container">

				<header>
					<div className="logo">
						<a href="#home"><img src="images/logo.png"/></a>
					</div>
				</header>

				<nav>
					<ul>
						<li>
							<a href="#pitch-page"><span>SUBMIT</span></a> | 
						</li>
						<li>
							<a href="#pitch-page">PITCHES</a>
						</li>
					</ul>
				</nav>

				<section>
					<div className="grey-rectangle">
						<input type="text" name="PROJECT-TITLE" placeholder="PROJECT TITLE">
						<input type="text" name="DETAILS" placeholder="DETAILS">
						<input type="text" name="YEAR-CREATED" placeholder="YEAR CREATED">
						<input type="text" name="LOCATION" placeholder="LOCATION">

						
						<div className="buttons">
							<a href="#success">
								<div className="submit button">
									<p className="submit-text">SUBMIT</p>
								</div>
							</a>
						</div>

					</div>
				</section>

			</div>
        );
    }
});

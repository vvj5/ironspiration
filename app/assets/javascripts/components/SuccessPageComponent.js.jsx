var SuccessPageComponent = React.createClass({
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
							<a href="#home">SUBMIT</a> | 
						</li>
						<li>
							<a href="#pitch-page">PITCHES</a>
						</li>
					</ul>
				</nav>

				<section className="success">
					<img src="images/check.png">
					<p>SUCCESSFULLY SUBMITTED!</p>
				</section>
			</div>
        );
    }
});


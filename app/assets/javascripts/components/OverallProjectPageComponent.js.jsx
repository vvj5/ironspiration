var OverallProjectPageComponent = React.createClass({
	render: function () {
		return (
			<div>
				<div>
					<a href='#login'>Login</a>
				</div>
				<div>
					<a href='#pitch-page'>Pitch List</a>
					<a href='#home'>Projects List</a>
				</div>
				<ImageAndTitleComponent />
				<ProjectDescriptionComponent />
			</div>
		);
	}
});

<div class="container">

	<header>
		<div class="logo">
			<a href="index.html"><img src="images/logo.png"/></a>
		</div>
	</header>

	<nav>
		<ul>
			<li>
				<a class href="submit-project.html">SUBMIT</a> | 
			</li>
			<li>
				<a href="pitch-page.html">PITCHES</a>
			</li>
		</ul>
	</nav>

	<section>	
		<h1>PROJECT TITLE</h1>
		<img src="images/bill-squared.jpg"/>
	</section>
</div>
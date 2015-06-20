var ProjectFormComponent = React.createClass({
    render: function () {
        return (
          <div>
            <h1> Project Forms Page </h1>
            <a href='#home'>home</a>
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
				<a class href="#"><span>SUBMIT</span></a> | 
			</li>
			<li>
				<a href="pitch-page.html">PITCHES</a>
			</li>
		</ul>
	</nav>

	<section>
		<div class="grey-rectangle">
			<input type="text" name="PROJECT-TITLE" placeholder="PROJECT TITLE">
			<input type="text" name="DETAILS" placeholder="DETAILS">
			<input type="text" name="YEAR-CREATED" placeholder="YEAR CREATED">
			<input type="text" name="LOCATION" placeholder="LOCATION">
			<input type="text" name="IMAGE-URL" placeholder="IMAGE URL">

			
			<div class="buttons">
				<a href="success.html">
					<div class="sign-up button">
						<p class="submit-text">SUBMIT</p>
					</div>
				</a>
			</div>

		</div>
	</section>

</div>
var LoginPageComponent = React.createClass({
	render: function () {
		return (
		  <div>
			<h1> Login Page </h1>
			<a href='#home'>Cancel</a>
			<a href='#register'>Cancel</a>
			<button></button>
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

	<section>
		<div class="grey-rectangle">
			<input type="text" name="USERNAME" placeholder="USERNAME">
			<input type="text" name="PASSWORD" placeholder="PASSWORD">
			
			<div class="buttons">
				<a href="success.html">
					<div class="sign-up button">
						<p class="signup-text">SIGN UP</p>
					</div>
				</a>
				<a href="index.html">
					<div class="login button">
						<p class="login-text">LOG IN</p>
					</div>
				</a>
			</div>

		</div>
	</section>

</div>
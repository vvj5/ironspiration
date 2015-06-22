var LoginPageComponent = React.createClass({
	render: function () {
		return (
			<div>
				<div className="container">
					<header>
						<div className="logo">
							<a href="#home"><img src="http://i.imgur.com/lCTMp9r.png"/></a>
						</div>
					</header>
					<section>
						<div className="grey-rectangle">
							<input type="text" ref="user" placeholder="USERNAME" />
							<input type="text" ref="pw" placeholder="PASSWORD" />
							<div className="buttons">
								<a href="#success">
									<div className="sign-up button">
										<p className="signup-text">SIGN UP</p>
									</div>
								</a>
								<a href="#">
									<div onClick={this.userLogin} className="login button">
										<p className="login-text">LOG IN</p>
									</div>
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>	
		);
	},

	userLogin: function() {

		var userObj = {
			name: this.refs.user.getDOMNode().value,
			password: this.refs.pw.getDOMNode().value
		};

		console.log(userObj);

		$.ajax({
		url: 'localhost:3000/login',
		type: 'POST',
		data: userObj,
		});

		var userInput = this.refs.user.getDOMNode().value;
		var passwordInput = this.refs.pw.getDOMNode().value

	}
});

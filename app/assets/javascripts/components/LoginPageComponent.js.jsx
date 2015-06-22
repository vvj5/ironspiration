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
							<input type="password" ref="pw" placeholder="PASSWORD" />
							<div ref='errors'></div>
							<div className="buttons">
								<a href="#register">
									<div className="sign-up button">
										<p className="signup-text">SIGN UP</p>
									</div>
								</a>
								<a href="#">
									<div onClick={this.userLogin} className="login button">
										<p className="login-text">LOGIN</p>
									</div>
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>	
		);
	},

	userLogin: function(e) {
		e.preventDefault();
		var userObj = {
			name: this.refs.user.getDOMNode().value,
			password: this.refs.pw.getDOMNode().value
		};

		if (!userObj.name) {
            return 'Please add username.';
        }
        else if (!userObj.password) {
            return 'Please add password.';
        }
        else {
        	myRouter.navigate("login", {trigger:true})
        }
	}
});

var LoginPageComponent = React.createClass({
	render: function () {
		return (
			<div className="container">
				<header>
					<div className="logo">
						<a href="#home"><img src="images/logo.png"/></a>
					</div>
				</header>
				<section>
					<div className="grey-rectangle">
						<input type="text" ref="username" name="USERNAME" placeholder="USERNAME" />
						<input type="text" ref="password" name="PASSWORD" placeholder="PASSWORD" />
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
		);
	},

	userLogin: function() {
		RegisteredUsersList.fetch();
		console.log(RegisteredUsersList.models.models);
		// for (var name in RegisteredUsersList) {
		// 	if(this.refs.username.getDOMNode().value = UserModel.name){
		// 		console.log('this is crazy');
		// 	}
		// }

		console.log(RegisteredUsersList);
	}
});

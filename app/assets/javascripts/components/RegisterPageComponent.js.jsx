
var RegisteredUsersList = new UserCollection();
var RegisterPageComponent = React.createClass({
	render: function () {
		return (
			<div className="container">

				<header>
					<div className="logo">
						<a href="#home"><img src="http://i.imgur.com/lCTMp9r.png" /></a>
					</div>
				</header>

				<section>
					<div className="grey-rectangle">
						<input type="text" ref="username" name="USERNAME" placeholder="USERNAME" />
						<input type="password" ref="password" name="PASSWORD" placeholder="PASSWORD" />
						<input type="password" ref="confirmPassword" name="PASSWORD" placeholder="CONFIRM PASSWORD" />
						
						<div className="buttons">
							<a href="#login">
								<div onClick={this.registerUser} className="submit button">
									<p className="submit-text">SUBMIT</p>
								</div>
							</a>
						</div>
					</div>
				</section>
			</div>	
		);
	},

	registerUser: function (e) {
		e.preventDefault();
		var regUser = new UserModel({
			name: this.refs.username.getDOMNode().value,
			password: this.refs.password.getDOMNode().value,
			password_confirmation: this.refs.confirmPassword.getDOMNode().value
		});

		// if (!UserModel.name) {
  //           console.log('Please add username.');
  //       }
  //       else if (!UserModel.password) {
  //           console.log('Please add password.');
  //       }
  //       else if (!UserModel.confirmPassword) {
  //           console.log('Please add password.');
  //       }
  //       else {
        	myRouter.navigate("login", {trigger:true})
  //       }

		console.log(regUser);
		regUser.save();
		RegisteredUsersList.add(regUser);
	}
});

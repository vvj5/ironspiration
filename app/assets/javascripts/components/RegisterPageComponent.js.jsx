
var RegisteredUsersList = new UserCollection();
var RegisterPageComponent = React.createClass({
<<<<<<< HEAD
	render: function () {
		return (
		<div>
			<div className="container">

				<header>
					<div className="logo">
						<a href="#home"><img src="images/logo.png" /></a>
					</div>
				</header>

				<section>
					<div className="grey-rectangle">
						<input type="text" ref="username" placeholder="USERNAME" />
						<input type="text" ref="password" placeholder="PASSWORD" />
						<input type="text" ref="confirmPassword" placeholder="CONFIRM PASSWORD" />
						<div className="buttons">
							<a href="#">
								<div onClick={this.registerUser} className="submit button">
									<p className="btn-text">SUBMIT</p>
								</div>
							</a>
						</div>
					</div>
				</section>
			</div>	
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

		console.log(regUser);
		regUser.save();
		RegisteredUsersList.add(regUser);
	}
});
=======
    render: function () {
        return (
          <div>
            <h1> Register Page </h1>
            <a href='#home'>Home</a>
          </div>
        );
    }
});


>>>>>>> d0f6039c121f71e5ed6f576e20fb90c463b5672e

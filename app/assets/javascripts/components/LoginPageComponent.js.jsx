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
		);
	},

	userLogin: function() {
		// RegisteredUsersList.fetch();
		// console.log(RegisteredUsersList.models.models);
		$.get (
    		"http://localhost:3000/users",
    		verifyUser,
    		"json"
        );

		var userInput = this.refs.user.getDOMNode().value;
		var passwordInput = this.refs.pw.getDOMNode().value;

		function verifyUser(userList) {
			console.log(userList);
			// console.log(usernameTest);
			console.log(userInput);
			for (var i=0; i<userList.length; i++) {
				if(userInput === userList[i].name) {
					// if(passwordInput === userList[i].password) {
						console.log("works");
					// }
				}
				else {
					console.log("false");
				}
			}
		};
		// for (var name in RegisteredUsersList) {
		// 	if(this.refs.username.getDOMNode().value = UserModel.name){
		// 		console.log('this is crazy');
		// 	}
		// }

		// console.log(RegisteredUsersList);
	}
});

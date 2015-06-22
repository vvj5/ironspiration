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

		$.get (
			'http://ironspiration.herokuapp.com/users',
			testUser

		);

		function testUser(list) {
			console.log(list);
			for(var i=0; i<list.length;i++) {
				if(userObj.name === list[i].name) {
					myRouter.navigate("home", {trigger:true})
				}
			}
		}
	}
});

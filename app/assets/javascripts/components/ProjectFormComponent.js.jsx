var ProjectList = new ProjectCollection();
var ProjectFormComponent = React.createClass({
    render: function () {
        return (
            <div className="container">

	            <header>
	                <div className="logo">
	                    <a href="#home"><img src="images/logo.png"/></a>
	                </div>
	            </header>

	            <nav>
	                <ul>
	                    <li>
	                        <a className href="#home"><span>SUBMIT</span></a> | 
	                    </li>
	                    <li>
	                        <a href="#pitchPage">PITCHES</a>
	                    </li>
	                </ul>
	            </nav>

	            <section>
	                <div className="grey-rectangle">
	                    <input type="text" ref = "projectTitle" placeholder="PROJECT TITLE" />
	                    <input type="text" ref = "details" placeholder="DETAILS" />
	                    <input type="text" ref = "yearCreated" placeholder="YEAR CREATED" />
	                    <input type="text" ref = "projectLocation" placeholder="LOCATION" />
	                    <input type="text" ref = "imageUrl" placeholder="IMAGE URL" />
	                    <input type="text" ref = "projectUrl" placeholder="PROJECT URL" />

	                    
	                    <div className="buttons">
	                        <a href="#success">
	                            <div onClick={this.addProject} className="sign-up button">
	                                <p className="submit-text">SUBMIT</p>
	                            </div>
	                        </a>
	                    </div>

	                </div>
	            </section>

        	</div>
        );
    },

    addProject: function() {
    	var project = new ProjectModel({
	        user_id: null,
	        image_url: this.refs.imageUrl.getDOMNode().value,
	        title: this.refs.projectTitle.getDOMNode().value,
	        body: this.refs.details.getDOMNode().value,
	        location: this.refs.projectLocation.getDOMNode().value,
	        year: this.refs.yearCreated.getDOMNode().value,
	        project_url: this.refs.projectUrl.getDOMNode().value,
	        likes: 0
    	});
    	project.save();
    	ProjectList.add(project);
    }
});




















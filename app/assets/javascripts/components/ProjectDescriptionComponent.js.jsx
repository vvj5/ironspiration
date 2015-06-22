var ProjectDescriptionComponent = React.createClass({
    getInitialState: function() {
      return {
        DescriptionArray: []
      }
    },
    componentDidMount: function() {
      $.get (
        "http://localhost:3000/projects",
        function(descList) {
          if(this.isMounted()) {
            this.setState({
              DescriptionArray: (descList)
            });
          }
        }.bind(this)
      );
    },
    render: function () {
      var myId = parseInt(this.props.testDesc);

      descInfo = this.state.DescriptionArray.map(function(testDescription) {
        // console.log(myId, testProject.id);
        if (testDescription.id === myId) {
          // console.log(testProject.id);
          return (
			<div className="project-info">
				<span className="project-txt">DESCRIPTION : </span> <p>{testDescription.body}</p>
				<p><span className="project-txt">LOCATION : </span>{testDescription.location}</p>
				<p><span className="project-txt">CREATED : </span>{testDescription.year}</p>
				<p><span className="project-txt">VIEW LIVE : </span> <a href={testDescription.project_url}><span>{testDescription.project_url}</span></a></p>
			</div>
           );
      	}
      });
      return (
        <section>
          <div className="project-photo">
             {descInfo}
          </div>
        </section>
      );
    }
});


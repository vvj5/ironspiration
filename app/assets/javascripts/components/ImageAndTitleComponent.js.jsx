var ImageAndTitleComponent = React.createClass({
    getInitialState: function() {
      return {
        ImgArray: []
      }
    },
    componentDidMount: function() {
      $.get (
        "http://localhost:3000/projects",
        function(imgList) {
          if(this.isMounted()) {
            this.setState({
              ImgArray: (imgList)
            });
          }
        }.bind(this)
      );
    },
    render: function () {
      var myId = parseInt(this.props.testPic);

      passedInfo = this.state.ImgArray.map(function(testProject) {
        // console.log(myId, testProject.id);
        if (testProject.id === myId) {
          // console.log(testProject.id);
          return (
              <div>
                <h1>{testProject.title}</h1>
                <img src={testProject.image_link} />
                <CommentListComponent />
                <CommentFormComponent />
              </div>
          );
        }
      });
      return (
        <section>
          <div className="project-photo">
             {passedInfo}
          </div>
        </section>
      );
    }
});
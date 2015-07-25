var ImageAndTitleComponent = React.createClass({
    getInitialState: function() {
      return {
        ImgArray: []
      }
    },
    componentDidMount: function() {
      $.get (
        "http://ironspiration.herokuapp.com/projects",
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
        if (testProject.id === myId) {
          return (
              <div>
                <h1>{testProject.title}</h1>
                <img src={testProject.image_link} />
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
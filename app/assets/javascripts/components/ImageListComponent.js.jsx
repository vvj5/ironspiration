var ImageListComponent = React.createClass({
    getInitialState: function() {
        return {
            ImgThumbnailArray: []
        }
    },
    componentWillMount: function() {
        ProjectList.on("add", this.postAdded);
    },
    componentDidMount: function() {
        $.get (
            "http://ironspiration.herokuapp.com/projects",
            function(imgList) {
                if(this.isMounted()) {
                    this.setState({
                        ImgThumbnailArray: (imgList)
                    });
                }
            }.bind(this)
        );
    },
    render: function() {

        thumbnails = this.state.ImgThumbnailArray.map(function(testModel){

            if(testModel.category === 1) {

            return (
                    <div className="col6" ref="pic" key={testModel.id}>
                        <h1>{testModel.title}</h1>
                        <img data-id={testModel.id} src={testModel.image_link} />
                    </div>
                );
            }
            
        });
        return (
            <div className="row" onClick = {this.linkToProjectPage}>
                {thumbnails}
            </div>
        );
    },
    postAdded: function(postModel) {
        this.forceUpdate();
    },
    linkToProjectPage: function(e) {
        var dataID = $(e.target).attr("data-id");
        if(typeof dataID === "string") {
            console.log(dataID);
            myRouter.navigate("project-page/"+dataID, {trigger:true});
        }
    }
});
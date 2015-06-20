var ImageAndTitleComponent = React.createClass({
    render: function () {
        return (
          <div>
          	<h1>PROJECT TITLE</h1>
            <img src="images/bill-squared.jpg"/>
            <CommentListComponent />
            <CommentFormComponent />
          </div>
        );
    }
});
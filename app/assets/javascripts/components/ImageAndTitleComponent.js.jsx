var ImageAndTitleComponent = React.createClass({
    render: function () {
        return (
          <div>
          	<h3>Heres My Title</h3>
            <img src="http://i.kinja-img.com/gawker-media/image/upload/s--ft1APKVa--/18a5kzrhxhqwvjpg.jpg"/>
            <CommentListComponent />
            <CommentFormComponent />
          </div>
        );
    }
});
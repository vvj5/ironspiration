var OverallProjectPageComponent = React.createClass({
    render: function () {
        return (
            <div>
                <div className="container">

                    <header>
                        <div className="logo">
                            <a href="#home"><img src="http://i.imgur.com/lCTMp9r.png"/></a>
                        </div>
                    </header>

                    <nav>
                        <ul>
                            <li>
                                <a href="#project-form">SUBMIT</a> | 
                            </li>
                            <li>
                                <a href="#pitch-page"> PITCHES</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ImageAndTitleComponent testPic={this.props.picture}/>
                <ProjectDescriptionComponent testDesc={this.props.picture}/>
            </div>
        );
    }
});

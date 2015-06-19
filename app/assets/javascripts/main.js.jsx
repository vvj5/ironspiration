/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '': 'home',
        "home": "home",
        "login": "login",
        'register': 'register',
        "pitch-form": "pitchForm",
        "project-form": "projectForm",
        "pitch-page": "pitchPage",
        "project-page": "projectPage",
        "success": "success",
        "*notfound": "dne"
    },
    home: function() {
        React.render(
            <HomePageComponent/>,
            document.querySelector('#container')
        );
        console.log("hi");
    },
    login: function() {
        React.render(<LoginPageComponent/>,
        document.querySelector('#container'));
    },
    pitchForm: function() {
        React.render(<PitchFormComponent/>,
        document.querySelector('#container'));
    },
    register: function() {
        React.render(<RegisterPageComponent/>,
        document.querySelector('#container'));
    },
    projectForm: function() {
        React.render(<ProjectFormComponent/>,
        document.querySelector('#container'));
    },
    projectPage: function() {
        React.render(<OverallProjectPageComponent/>,
        document.querySelector('#container'));
    },
    pitchPage: function() {
        React.render(<OverallPitchPageComponent/>,
        document.querySelector('#container'));
    },
    success: function() {
        React.render(<SuccessPageComponent/>,
        document.querySelector('#container'));
    },
    dne: function() {
        React.render(<PageNotFoundComponent/>,
        document.querySelector('#container'));
    }
});

var app = new App();
Backbone.history.start();
// app.navigate('edit');

README.md


WHAT THIS IS

This is Ironspiration, an app where students of The Iron Yard can get ideas and inspiration from the past projects and pitches of previous TIY students.

WHAT IT DOES
This application will allow you to view links to past projects and pitches by other Iron Yard students, and contains functionality that includes:
- Create your own username & log in
- View all projects on main page, sorted to display by most recently submitted links
- Click a thumbnail image to visit a sub-page with the project information: Title, Description, City of Submission, Year of Cohort and link to the live site.
- View a page of all submitted project "pitches"
- Add a completed project or a project pitch to the site & see it appear on the respective page.
- This app is fully responsive and multiple-device-friendly

HOW IT WORKS (API CALLS and DATA RETURNED)
API CALL URL:
https://ironspiration.herokuapp.com
- The default (index) page of the app will return all completed projects, sorted by most recent submission.

CREATE  USER (CALL URL):
http://ironspiration.herokuapp.com/#register
- PARAMS must include: username: "text", email: "text", password: "text" and verify password.
- Will store new username into the database, set a session and return the name when called by username and password.

USER LOGIN (CALL URL):
http://ironspiration.herokuapp.com/#login
- PARAMS must include: username: "text and password: "text"
- Will authenticate user, set a session and allow user to post projects and/or pitches.

POST PROJECT (CALL URL):
http://ironspiration.herokuapp.com/#project-form
- PARAMS must include: title: "text", description: "text", link to a display image: "url", link to live site "url", city of submission "text" and year of cohort "integer".
- Will store and display new project entry (http://ironspiration.herokuapp.com/#home), display sample image, list descriptive information and the live URL upon click-through.

POST PITCH (CALL URL):
http://ironspiration.herokuapp.com/#pitch-form
- PARAMS must include: title: "text" and description: "text".
- Will store new pitch entry and display on Pitch Page (http://ironspiration.herokuapp.com/#pitch-page).

JavaScript EXAMPLE
- API call in JavaScript and what result will be returned from the server:

function createProject() {
                $.post(
- Will enter name of new project into the database and return user to projects home page.

OTHER RELEVANT DOCUMENTATION
- TRELLO Board: https://trello.com/b/w74jo6tZ/ironspiration
- Hackpad: https://hackpad.com/collection/rctFijTWtBo

FILE TREE
|-app
 |---assets
 |-----images
 |-----javascripts
 |-------collections
 |-------components
 |-------models
 |-----stylesheets
 |---controllers
 |-----concerns
 |---helpers
 |---mailers
 |---models
 |-----concerns
 |---views
 |-----application
 |-----comments
 |-----layouts
 |-----projects
 |-----sessions
 |-----users
 |-bin
 |-config
 |---environments
 |---initializers
 |---locales
 |-css
 |-db
 |---migrate
 |-lib
 |---assets
 |---tasks
 |-log
 |-public
 |-tmp
 |---cache
 |-----assets
 |-------development
 |---------sprockets
 |-----------v3.0
 |---pids
 |---react-rails
 |---sessions
 |---sockets
 |-vendor
 |---assets
 |-----javascripts
 |-----stylesheets

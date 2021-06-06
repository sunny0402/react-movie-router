## About

https://github.com/ReactTraining

https://reactrouter.com/web/guides/quick-start

history: object
A history object to use for navigation.

location: object
The isActive compares the current history location (usually the current browser URL).
To compare to a different location, a location can be passed.

A match object contains information about how a <Route path> matched the URL.
app.js
<Route exact path="/movie/:movieID" component={Movie} />

Movie.js
this.props.match.params.movieId

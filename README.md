React Developer assignment


The purpose of this assignment is to have candidates create a small web app so the Rubicon Team can have a better understanding of, and insight in the knowledge and the skill a candidate possesses. This makes it easier for you (and for us) to stand out from the crowd and present you in the best way possible.
Assignment description:

The app needs to have the functionalities of displaying the top 10 rated TV shows and the top 10 movies, a search function for both and a detail view for individual items.

Please use TheMovieDB API found at https://developers.themoviedb.org/3 to implement this.

To help you with the UX/UI for this web app we made some mocks available at https://invis.io/4H87KGZ8B. (the password is: rubicon)
(Click the button in the bottom right side of the screen on InVision to see all design screens for the app).
App requirements:

When the app loads, the TV SHOWS tab should be selected.
Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.

The search field should be live and react to any change in the input field.
The search should fire a request on the search endpoint from TMDB and not filter the top 10 results.
The search is performed only when there are 3 or more characters in the search bar and it should be triggered only one second after the user has stopped typing.
When there are less than 3 characters in the search bar, the content should revert back to the top 10 MOVIES/TV SHOWS.
When the search is performed, results should appear under the search box.
Switching between tabs while searching should trigger the search again with the same search term for the selected tab and update the results.

When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.
The Detailed View of the Movie/TV Show should show the cover image on top and in case of Movies/TV Shows which have a trailer should show the trailer video instead of the cover image. Below the image/trailer some basic information regarding the selected Movie/TV Show should be shown.


The Back Button should return the user back to where he was and with the same state before clicking to see more information about a Movie/TV Show.
(Meaning that the correct tab should be selected and if the user came from search - the search result with the search term should be there. 
NOTE: no need to save the scroll position) 
Technical requirements
React version 16.8 or later should be used
React is focused more on the UI so you will need something to save and consume state
React Context, MobX, Redux might help with that
Use React Router
Use Typescript
Showcase correct usage of:
Functional and Stateful Components
Working with global state
React Hooks
Typescript
Don’t use Boostrap or similar CSS frameworks, showcase us propper HTML structure and CSS layout skills

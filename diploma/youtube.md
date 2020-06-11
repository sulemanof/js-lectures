# YouTube client

### Task:
The task is to create a web app to view the information about youtube clips on user request.
YouTube REST API should be accessed via cross-domain XHR requests.

### Use case:
1. User sees a search box as he starts up the app.
2. The user inputs a request in the search box. e.g. - javascript  
3. The app processes the request to YouTube REST API and displays loaded clips as a horizontal list of items.
4. The horizontal list can be scrolled with a swipe (on a desktop via mouse swipe). Swipe should be animated, e.g. user can click and pull the list sideways. Paging event should be triggered when mouseUp is released. If a user makes X quick swipes the app should list X pages. The number of clips on the page depends on its size (1 to 4 clips per page).      
5. The additional navigation buttons (paging control) are set at the bottom of the page.  
6. As the app lists the pages it should load new data in chunks ( 15 clips per chunk). It would be good to manage "smooth" data loading which means preloading data chunks in advance to emulate infinite scrolling experience.

### Requirements
- React
- Redux
    
### Samples of YouTube REST API requests:
    - https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js
    - https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics
    - How to get an API key - https://www.youtube.com/watch?v=JbWnRhHfTDA
    - You can find a more detailed documenation here - https://developers.google.com/youtube/v3/

### UI Examples:
####  One:
![](https://i.imgur.com/W7CTv9X.png)

#### Two
![](./images/youtube.gif)



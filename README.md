# Meet

Meet is a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. **Meet** uses the **Google Calendar API** to fetch
upcoming events.

User Stories

## **Feature 1:  As a user, I want to be able to able to show/hide event details so that I can see more/less information about an event.** 

### Scenario 1: An event element is collapsed by default
- *Given* the main page is open
- *When* the user searches for a city 
and the events are loaded
- *Then* the event details will be collapsed

### Scenario 2: The user can expand an event to see its details
- *Given* the list of events have been loaded
- *When* the user clicks show details for an event
- *Then* the event will expand to show more details about that event

### Scenario 3: The user can collapse an event to hide its details
- *Given* the show details button of an event has been clicked
And the details are expanded
- *When* the user clicks on “hide details”
- *Then* the expanded detail will collapse to hide details

## **Feature 2:  As a user, I should be able to specify the number of events I will like to see in the app so that I can see more or fewer events in the list at a time**

### Scenario 1: When the user hasn’t specified a number, 32 is the default number
- *Given* a city has been selected
- *When* the user doesn’t specify the number of events they want to view on a page
- *Then* 32 events will be shown by default

### Scenario 2: Users can change the number of events they want to see
- *Given* a city has been selected
- *When* the user types in the desired number of events into the “number of events” box
- *Then* the desired number of events will be loaded for the respective city

## **Feature 3: As a user, I should be able to use the app offline so that I can see events viewed the last time I was online**

### Scenario 1: Show cached data when there’s no internet connection (when the user is offline)
- *Given* the app has been recently accessed online
- *When* the user accesses the app while offline
- *Then* the events they viewed when they were previously online will be shown


### Scenario 2: Show error when the user changes the settings (city, time range)
- *Given* the app is accessed offline
- *When* the user makes changes to settings like city or time-range
- *Then* tan error message will be shown

## **Feature 4: As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.**

### Scenario 1: Show a chart with the number of upcoming events in each city
- *Given* a city has been selected
- *When* the list of events is shown
- *Then* on top of the list, a chart that shows the type of upcoming events will be displayed


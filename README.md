# Meet

Meet is a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. **Meet** uses the **Google Calendar API** to fetch
upcoming events.

User Stories

## 1. As a user, I want to be able to click on an event so that I will be able to expand the event and reveal/see more detail about that event.

### *Scenario 1: An event element is collapsed by default*

- Given a user is on the main page
- When nothing is clicked
- Then the event details will be collapsed

### *Scenario 2: The user can expand an event to see its details*

- Given a user wants to see more details about a specific event
- When the user clicks on an event
- Then the event expands for more detail

### *Scenario 3: The user can collapse an event to hide its details*

- Given a user wants to collapse the extra detail of an event
- When the user clicks on expanded detail
- Then the expanded detail will collapse to see less detail

## 2.  As a user, I should be able to choose the number of events that I want to see so that I can manage the number of events on my screen

### *Scenario 1: When the user hasn’t specified a number, 32 is the default number*

- Given a user has not chosen the number of events
- When the user opens the page
- Then the user will see (be shown) 32 events by default

### *Scenario 2: Users can change the number of events they want to see*

- Given the user wants to change the number of events they see
- When the user clicks on the dropdown
- Then the user will be able to choose the number of events that they want to see at a time.

## 3. As a user, I should be able to use the app offline (even when I am not connected to the internet)

### *Scenario 1: Show cached data when there’s no internet connection (when the user is offline)*

- Given the user is not connected to the internet
- When the user opens the app and has access to cashed data
- Then the user will still have access to the data


### *Scenario 2: Show error when the user changes the settings (city, time range)*

- Given the user is not connected to the internet/has no internet connection
- When the user wants to change the information shown above
- Then the user will get an error message

## 4. As a user, I should be able to see a chart showing the upcoming events by dates in each city, I can quickly find events in my time range of choice

### *Scenario 1: Show a chart with the number of upcoming events in each city*

- Given the user is on the main page
- When the user wants to find upcoming events
- Then the user will see a chart of date events in each city

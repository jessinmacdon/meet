# Meet App
## Find the best events from around the world

---

#### Meet is a React Application was created following a test-driven development (TDD) process. The main goal of the application is to utilise **test-driven development to build a ***serverless, progressive web application (PWA)***. The application uses the google calendar API to fetch and display upcoming events to the user. 

---

### Background:

In recent years **serverless application as well as progressive web applications (PWAs)** have grown in popularity in the tech space and are considered to be the future of development. Both concepts offer immense benefits to both the users and developers. It reduces the general development costs (time, labour and money) and offers the user a unique advantage of being able to access and interact with the APP even without internet connection. 

*Severless: No or low backend maintenance costs, improved availability(always) and easy to scale.

PWAs: combiines the advantages of both a normal web app/site and native applications. Most importantly, it is the framework which allows us to implement offline functionlity of web apps such as the meet app. 

All said, the meet app bring is built to reap the benefits of serverless achitechture and functions as a normal web app, allowing users to add the meet app to the home screens on mobile and desktop and browse offline. 

---

**Hosted on gh-pages: <https://jessinmacdon.github.io/meet>**

---

## *Tech Stack**
- React
- Google Calendar API
- OAuth2
- AWS serverless functions
- Jest-cucumber
- Enzyme
- Pupeteer
- Atatus-spa
- Recharts
- React-Bootstrap

---

### Project Reflection

#### *What was your role for this project and what tasks did you face?*
<p>This was the very project of it's kind in my portfolio. AWS serverless functions were particularly tricky to deal with, due to the difficulty to identify errors and the extreme space and indentation sensitivity of the yml file, which I was not used to mainly writting in Javascript.</p>

#### *What decisions did you take and why? What were the consequences?*
<p>Even though design wasn't the main focus of this project, I had to make it at least OK looking :). This was difficult to do without the use of bootstrap to style. Even though Bootstrap came with its own difficulties, it was still the the best option for this project in that it saved me a lot of time.</p>

#### *If you could, what would you do differently?*
<p>This was the first project or first time encountering the TTD approach. I would definitely work on more projects using this approach and be mindful of the number of test to write (Write test, not too many, just enought o guide the development process and achieve a great test coverage score).</p>

#### *What lessons did you learn during this project?*
- The ins and outs of TDD and BDD - test first code later!
- Intruduction to AWS serverless functions
- Jest
- Creating charts to implement data visualisation
- PWAs which I find particularly interesting and would definitely be revisiting for my future projects.

## **Features and Requirements:**

### Key Features:

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

### Features, User Stories & Scenarios:

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


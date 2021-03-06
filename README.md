<!-- Headings -->
This is coding assessment with React and hooks that was given to me by Mama Money. Here's a deployed version [React Weather App with React](https://socishe.github.io/react-weather-app)
# Front End Test
Please note that this is not a pass/fail test - just one small extra data point next to your application, so don’t stress about it too much.
## Task:
* Please build a React app that shows the weather forecast in Cape Town, and fires an alert when the current temperature becomes hot or cold.
* When the app is opened, it should show a list of dates and times, and the forecast temperature at these times. The time should be shown in the South African time zone, even if the user’s computer is set to a different one.
* When the current temperature changes from the range 15-25C to above 25C or below 15C, a warning should be shown to the user.
* There should be a button to switch between Celsius and Fahrenheit degrees, without
reloading the data from the API.
* While open, the app should update the info periodically. Every 20 minutes is a good choice.
* If the API call fails, the app should retry with exponential backoff: wait 2, 4, 8, 16, ..
seconds before retrying. The user can speed it up by pressing a “retry now” button.
## Weather data:
Please use the [openweathermap](http:openweathermap.org) weather API if possible.
## Other notes:
You are welcome to use any third-party libraries or tools that are helpful in organising the code. You are welcome to make any additions or improvements to the task goals, but it is not necessary to spend too much of your free time on it.

Please publish the code in a github.com or bitbucket.org repository (private or public, your choice), and deploy it somewhere on the web. In addition to the code, please write short notes or comments on:
* Which third-party libraries you decided to use and why,
* Any parts of the task that you found easy or difficult, or code that is tricky or needs explanation,
* Time taken to complete the task.

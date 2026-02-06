# ECI GeoGuessr: A Location-Guessing Game Around ECI

#### Video Demo: <[ClickMe](https://drive.google.com/file/d/1aWiGVspwvA7ft1FadVPSQm9BPkr14ikv/view?usp=sharing)>

#### Description:
ECI GeoGuessr is an interactive game inspired by the popular game GeoGuessr, but set within the boundaries of our school, ECI.
The goal of the game is for players to explore the campus in a fun and interactive way by guessing the locations where photos were taken. Players are shown a random photograph from somewhere around the school and must click on a map to select where they think the photo was taken. The closer their guess is to the actual location, the higher the score they receive.

Each game has 5 rounds, and after each guess, visual feedback is provided showing how accurate the player was and where the actual location is on the map. Since our school has multiple floors, each floor has its own seperate map, and players can use buttons on the side to select which floor they want to guess on. Guesses on the wrong floor will result in a score of 0 points, adding an extra challenge to the game.

The game is built entirely with **HTML, CSS, and JavaScript**, making it accessible directly from any modern web browser. The user interface is very easy to use, with a minimalist design and a few simple buttons providing most of the functionality. All scoring logic, image selection, and rounds are handled by JavaScript within the browser.

Our targer audience / users are basically all students in grades 9-12 at ECI who either want to have some fun playing a game, want to improve their knowledge of the school, or both. The game also aligns with our personal intersts in game development, problem solving, and of course, plaing GeoGuessr. By making a GeoGuessr for our school, we can combine all these interests into one project.


#### Navigation / Additional Documentation

Our project consists of three different pages, each having multiple files:

- **The Homepage:**
  - `homepage.html`
  - `style-homepage.css`

- **The Main Page:**
  - `index.html`
  - `script.js`
  - `style.css`

- **The Results Page:**
  - `endscreen.html`
  - `endscreen.js`
  - `endscreen.css`

On top of this:

- The `images/` folder contains the floorplans/maps of the school.
- The `schoolPics/` folder contains all the pictures we took of the school.

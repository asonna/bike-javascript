**what we want to do:

 -Create site that queries bike index API
    --> Grabbing only specific information of bikes reported stolen
        - By location?
        - By Manufacturer?
        - By Color(s)?

    -->
-**


 *-- Task list: --
    --> Index Page:
        - Form with [up to 3] inputs that specify what information is "grabbed"
    --> Bikes.js Page:
        - Business Logic
        - Prototypes
          * "getBikes"
    --> Bikes-interface.js:
        - User interface Logic

-*

------- Steps: -------
    1) Index.html

    2) Business Interface JS

    3) User-Interface JS

    4) Create .gitignore file

    5) Create gulpfile.js
        --> include following variables with associated tasks!!!
          --> *var gulp = require('gulp');*
          --> *var browserify = require('browserify');*
          --> *var source = require('vinyl-source-stream');*
          --> *var concat = require('gulp-concat');*
          --> *var uglify = require('gulp-uglify');*
          --> *var utilities = require('gulp-util');*
          --> *var buildProduction = utilities.env.production;*
          --> *var del = require('del');*
          --> *var jshint = require('gulp-jshint');*
          --> *var lib = require('bower-files')();*
          --> *var browserSync = require('browser-sync').create();*
          --> *var sass = require('gulp-sass');*
          --> *var sourcemaps = require('gulp-sourcemaps');*

    6)  Run {npm} commands:
        6.1)  npm init **(will generate package.JSON)**
        6.2)  npm install gulp --save-dev **(creates a node_module folder)**
            --> Add node-module to .gitignore file
        6.3)  npm install browserify --save-dev **(create "browserify" inside package.json)**
        6.4)  npm install gulp -g **(to install gulp globally, may need to use 'sudo')**
        6.5)  npm install vinyl-source-stream --save-dev **(used to put browserify source code into a new file)**
        6.6)  npm install gulp-concat --save-dev **(uses 'gulp.src' to pull in all the files used in the browser)**
        6.7)  npm install gulp-uglify --save-dev **(will minify concatenated files)**
        6.8)  npm install gulp-util --save-dev **(Not sure)**
        6.9)  npm install del --save-dev **(way to deleted file in gulp)**
        6.10) npm install jshint --save-dev **(used to check errors in code)**
        6.11) npm install gulp-jshint --save-dev **(allows us to write a gulp task to automatically check our code)**
        6.12) npm install bower -g **(globally install bower)**
        6.13) npm install bower-files --save-dev **()**
        6.14) npm install browser-sync --save-dev **(implement our development server with live reloading)**
        6.15) npm install gulp-sass gulp-sourcemaps --save-dev **(will let your run sass)**

        All in One Command (After npm init, install gulp, browserify):
        *npm install vinyl-source-stream gulp-concat gulp-uglify gulp-util del jshint gulp-jshint --save-dev*

    7) Run *gulp myTask (jsBrowserify)*

    8) Run {Bower} commands:
        8.1) bower init
        ----Following are optional:----
        8.2) bower install jquery --save
        8.3) bower install bootstrap --save
        8.4) bower install moment --save

    gulp build --production
    gulp build

/**
 * Project: CI&T Hiring Challenge
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */

/**
 * Main module name
 * 
 * @type {String}
 */
var module = 'app';

/**
 * Host name
 *
 * You should set your ip here in order to be able to
 * access the app from another device in the lan
 * 
 * @type {String}
 */
//var host = '192.168.1.103';
var host = 'localhost';


/**
 * Gulp Object
 *
 * The main object of the Gulp Build System.
 * Used to organize the build tasks.
 * 
 * @type {Object}
 */
var gulp = require('gulp');	

/**
 * Gulp Webserver Object
 *
 * Local webserver for testing purposes
 * 
 * @type {Object}
 */
var webserver = require('gulp-webserver');

/**
 * Gulp Html Minifier
 *
 * Creates a minimal version of the html for performance purposes
 * 
 * @type {Object}
 */
var htmlmin = require('gulp-htmlmin');

/**
 * Gulp Sourcemaps
 *
 * Creates a map file for to enable the browsers to map the
 * minified version of the files to the original version
 * 
 * @type {Object}
 */
var sourcemaps = require('gulp-sourcemaps');

/**
 * Gulp Clean CSS
 *
 * Minifies the CSS Files
 * 
 * @type {Object}
 */
var cleanCSS = require('gulp-clean-css');	

/**
 * Gulp Concat
 *
 * Concatenates files
 * 
 * @type {Object}
 */
var concat = require('gulp-concat');

/**
 * Gulp Uglify
 *
 * Minifies Js files
 * 
 * @type {Object}
 */
var uglify = require('gulp-uglify');

/**
 * Gulp Strip Comments
 *
 * Removes coment blocks from the code
 * 
 * @type {Object}
 */
var strip = require('gulp-strip-comments');

/**
 * Gulp Angular Templatecache
 *
 * Creates Angular templatecache files from html
 * 
 * @type {Object}
 */
var templateCache = require('gulp-angular-templatecache');



/**
 * Default Task
 *
 * This task will build the application and start the local 
 * webserver when the gulp command is executed on the
 * command line in the app root directory
 */
gulp.task('default', [
	'serve'
])

/**
 * Serve Task
 *
 * This task start the local webserver
 */
gulp.task('serve', ['build'], function () {

	//Starts the webserver on the "8000" port
	//To access the app go to "http://localhost:8000"
	gulp.src('dist')
    	.pipe(webserver({
			open: true,
			host : host
		}));
})


/**
 * Build Task
 *
 * This task will start all the other build tasks in sequence
 */
gulp.task('build', [	
	'build-index',
	'build-css',
	'build-libs-css',
	'build-libs-js',
	'build-js',
	'build-templates',
	'move-img',
	'move-manifest'
]);

/**
 * Build Inex.html task
 *
 * Minifies the HTML and copies it to the dist folder.
 */
gulp.task('build-index', function () {

	//Sets the 'src/index.html' as the file to be minified
	return gulp.src('src/index.html')

		//Remove comments from the file
		.pipe(strip())

		//Minifies the file
	  	.pipe(htmlmin({collapseWhitespace: true})) 

	  	//Sends it to the dist folder 
		.pipe(gulp.dest('dist'))
})

/**
 * Build CSS task
 *
 * Minifies the CSS file
 */
gulp.task('build-css', function () {

	//Sets the 'src/index.html' as the file to be minified
	return gulp.src('./src/css/*.css')

		//Starts the creation of the maps file
		.pipe(sourcemaps.init())

		//Concatenates all files in the files array into a main.css file
		.pipe(concat('main.css'))	

		//Minifies the CSS File
		.pipe(cleanCSS())	

		//Ends the creation of the maps file	
		.pipe(sourcemaps.write('.'))

		//Sends it to the dist folder 
		.pipe(gulp.dest('dist/css'))

})

/**
 * Build Libs CSS task
 *
 * Concatenates and moves the CSS Libraries to the dist folder
 */
gulp.task('build-libs-css', function () {

	//CSS Libraries to be concatenated
	var files = [
		"./node_modules/angular-material/angular-material.min.css",
		"./node_modules/angular-ui-router-anim-in-out/css/anim-in-out.css"
	];

	return gulp.src(files)

		//Starts the creation of the maps file
		.pipe(sourcemaps.init())

		//Concatenates all files in the files array into a lib.css file
		.pipe(concat('lib.css'))

		//Ends the creation of the maps file
		.pipe(sourcemaps.write('.'))

		//Sends it to the dist folder 
		.pipe(gulp.dest('dist/css'))
})

/**
 * Build Libs JS task
 *
 * Concatenates and moves the JS Libraries to the dist folder
 */
gulp.task('build-libs-js', function () {

	//JS Libraries to be concatenated
	var libs = [
		"./node_modules/angular/angular.min.js",
		"./node_modules/angular-aria/angular-aria.min.js",
		"./node_modules/angular-animate/angular-animate.min.js",
		"./node_modules/angular-material/angular-material.min.js",
		"./node_modules/angular-ui-router/release/angular-ui-router.min.js",
		"./node_modules/angular-messages/angular-messages.min.js",
		"./node_modules/angular-filter/dist/angular-filter.min.js",
		"./node_modules/angular-ui-router-anim-in-out/anim-in-out.js"
	];
	
	return gulp.src(libs)

		//Starts the creation of the maps file
		.pipe(sourcemaps.init())

		//Concatenates all files in the files array into a lib.css file
		.pipe(concat('lib.js'))

		//Ends the creation of the maps file
		.pipe(sourcemaps.write('.'))

		//Sends it to the dist folder 
		.pipe(gulp.dest('dist/js'))
})


/**
 * Build JS task
 *
 * Minifies, concatenates and moves the JS Libraries to the dist folder
 */
gulp.task('build-js', function() {

	//Affects all js files under 'src/js'
	return gulp.src('src/js/**/*.js')

		//Starts the creation of the maps file	
		.pipe(sourcemaps.init())

		//Minifies the files
		.pipe(uglify())

		//Concatenates all files in the files array into a lib.css file
		.pipe(concat('main.js'))

		//Ends the creation of the maps file
		.pipe(sourcemaps.write('.'))

		//Sends it to the dist folder
		.pipe(gulp.dest('dist/js'))
});

/**
 * Build Templates
 *
 * Task to compile angular templates
 */
gulp.task('build-templates', function () {

	//Affects all html files under 'src/templates'
	return gulp.src('src/templates/**/*.html')

		//Remove comments from the file
		.pipe(strip())

		//Minifies the html
		.pipe(htmlmin({collapseWhitespace: true}))

		//Puts all templates in an Angular js template cache file
		.pipe(templateCache({module:module}))

		//Starts the creation of the maps file	
		.pipe(sourcemaps.init())

		//Minifies the files
		.pipe(uglify())

		//Ends the creation of the maps file
		.pipe(sourcemaps.write('.'))

		//Sends it to the dist folder
		.pipe(gulp.dest('dist/js'))
});


/**
 * Dev Server with livereload
 *
 * Task to watch modifications on files and 
 * refresh automatically the browser during development
 */
gulp.task('dev', function () {

	//Webserver Configuration object
	var config = {
		host : host,
		livereload: true,//Refreshes the browser with every change on the files
		open: true//Opens the browser automatically
	}

	//Starts the webserver serving the dist folder
	gulp.src('dist')
		.pipe(webserver(config))

});


/**
 * Watch
 *
 * Task to watch modifications on files and 
 * run the build task
 */
gulp.task('watch', function () {

	//Watches the src directory and rebuilds the app 
	//whenever a file changes
	gulp.watch('src/**/*',['build']);

});

/**
 * Move Images
 *
 * Task to move images to dist folder
 */
gulp.task('move-img', function () {

	//Moves all images to the dist/img folder
	gulp.src('src/img/*')
  		.pipe(gulp.dest('dist/img'));

});

/**
 * Move Manifest
 *
 * Task to move the manifest to dist folder
 */
gulp.task('move-manifest', function () {

	//Moves the manifest to the dist folder
	gulp.src('src/manifest.json')
  		.pipe(gulp.dest('dist'));

});
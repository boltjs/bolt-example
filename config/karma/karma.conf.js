// Karma configuration
// Generated on Tue Jun 18 2013 22:30:42 GMT+1000 (EST)


// base path, that will be used to resolve files and exclude
basePath = '../..';


// list of files / patterns to load in the browser
files = [
  'http://localhost/~mth/home/bolt/bolt/gen/image/bolt-local/lib/bolt-karma.js',
//  'http://dist.boltjs.io/1.5.12/bolt-karma.js',
  {pattern: 'config/bolt/*.js', included: false},
  {pattern: 'src/js/**/*.js', included: false},
  {pattern: 'test/js/node/**/*.js', included: false},
  {pattern: 'test/js/browser/**/*.js', included: false},
  {pattern: 'test/js/module/**/*.js', included: false}
];


// list of files to exclude
exclude = [
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

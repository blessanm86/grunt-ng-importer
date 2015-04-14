# grunt-ng-importer
This plugin will generate a file which imports all the files in a folder and register them in angular. Useful for registering controllers, directives, services and filters. Used along with [ng-app-kit](https://github.com/blessenm/ng-app-kit/).

[Here is an article than explains more about this plugin and usage](http://blessanmathew.com/2015/04/14/using-es6-modules-with-angular.html#ngimporter).

Here is sample of how the config object will look like.

```javascript

module.exports = {
  dev: {
    importData: [{
        src: ['app/controllers/**/*.js'],
        dest: 'app/controllers/index.js',
        base: 'app/controllers/',
        type: 'controller'
      }, {
        src: ['app/directives/**/*.js'],
        dest: 'app/directives/index.js',
        base: 'app/directives/',
        type: 'directive'
      }, {
        src: ['app/services/**/*.js'],
        dest: 'app/services/index.js',
        base: 'app/services/',
        type: 'service'
      }, {
        src: ['app/filters/**/*.js'],
        dest: 'app/filters/index.js',
        base: 'app/filters/',
        type: 'filter'
      }
    ]
  }
};

```

Features, Issues Or Contributions

* Post issues, features requests into the github issue tracker.
* My email is blessenm@gmail.com
* Pull requests are welcome.
* [__LinkedIn Pofile__](http://in.linkedin.com/pub/blessan-mathew/24/605/730 "LinkedIn Profie")
* [__Stack Overflow Pofile__](http://stackoverflow.com/users/548568/blessenm "Stack Overflow")
* [__Twitter Pofile__](https://twitter.com/blessenm86 "Twitter")

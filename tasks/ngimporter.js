/*
 * grunt-ng-importer
 * https://github.com/blessenm/grunt-ng-importer
 *
 * Copyright (c) 2015 Blessan Mathew
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('ngimporter', 'This plugin will generate a file which imports all the files in a folder and register them in angular. Useful for registering controllers, directives, services and filters.', function() {
    var formattedData = this.data.importData.map(function(group) {
      return getImportData(group);
    });

    formattedData.map(function(group) {
      writeImportFile(group);
    });
  });

  function getImportData(group) {
    var filePaths = grunt.file.expand(group.src);

    return {
      data: filePaths.map(function(file) {
        return {
          importName: getImportName(file, group.base, group.type),
          importPath: getImportPath(file, group.base),
          type: group.type
        };
      }),
      destination: group.dest
    };
  };

  function getImportName(path, base, type) {
    return path.replace(base,'').split(new RegExp('/|-|_', 'g')).map(function(item) {
      return capitalize(item).split('.')[0];
    }).join('') + capitalize(type);
  };

  function getImportPath(path, base) {
    return path.replace(base, './');
  };

  function writeImportFile(group) {
    var importTemplate = grunt.file.read(path.join(__dirname, 'import-template.tpl'));

    var fileContent = grunt.template.process(importTemplate, {
      data: {
        importData: group.data
      }
    });

    grunt.file.write(group.destination, fileContent);
    grunt.log.writeln('File "' + group.destination + '" created.');
  };

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

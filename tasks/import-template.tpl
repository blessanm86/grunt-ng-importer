import angular from 'angular';
<% _.forEach(importData, function(item) { %>
import <%- item.importName %> from '<%- item.importPath %>';
<% }); %>

export default function() {
  var app = angular.module('nakApp.<%- importData[0].type %>s', []);

  <% _.forEach(importData, function(item) { %>
  app.<%- item.type %>(<%- item.importName %>.name, <%- item.importName %>());
  <% }); %>
}

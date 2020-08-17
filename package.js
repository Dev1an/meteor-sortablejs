Package.describe({
  name: 'devian:sortable',
  version: '1.4.3',
  // Brief, one-line summary of the package.
  summary: 'Sortable blaze template based on mongo collection',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Dev1an/meteor-sortablejs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  sortablejs: '1.4.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.2');
  api.use('ecmascript');
  api.use('templating@1.3.2', 'client');
  api.use('underscore', 'client');
  api.use('check', 'server');
  api.use('dburles:mongo-collection-instances@0.3.4');
  api.mainModule('client/main.js', 'client');
  api.mainModule('server/main.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('devian:sortable');
  api.mainModule('sortable-tests.js');
});

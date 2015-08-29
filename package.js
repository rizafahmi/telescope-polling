Package.describe({
  name: 'riza:telescope-polling',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Telescope Polling Package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('telescope-polling.js');
  api.addFiles('telescope-polling.css');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('riza:telescope-polling');
  api.addFiles('telescope-polling-tests.js');
});

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
  api.use('templating', 'client');
  api.use(['iron:router@1.0.9'], 'client', {weak: false, unordered: false});
  api.versionsFrom('1.1.0.3');

  api.addFiles('telescope-polling.js');
  api.addFiles('telescope-polling.css');
  api.addFiles([
    'lib/client/templates/polling/polling_submit.html',
    'lib/client/templates/polling/polls.html',
    'lib/client/templates/polling/poll.html',
    'lib/client/templates/polling/polling_submit.js',
    'lib/client/templates/polling/polls.js',
    'lib/client/helpers.js',
    'lib/routes.js'
  ], ['client']);
  api.addFiles([
    'lib/collections/pollings.js',
  ], ['client', 'server']);
  api.addFiles([
    'lib/server/publications/pollings.js',
    'lib/server/fixtures.js'
    ], ['server']);
  if (api.export) {
    api.export('telescopePollingSubmit');
    api.export('Pollings', ['server', 'client']);
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('riza:telescope-polling');
  api.addFiles('telescope-polling-tests.js');
});

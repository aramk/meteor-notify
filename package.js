// Meteor package definition.
Package.describe({
  name: 'aramk:notifications',
  version: '0.2.0',
  summary: 'A notification widget.',
  git: 'https://github.com/aramk/meteor-notifications.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'coffeescript',
    'underscore',
    'templating',
    'less',
    'reactive-var@1.0.4',
    'tracker@1.0.5',
    'aramk:utility@0.8.6',
    'aldeed:simple-schema@1.3.2',
    'aldeed:collection2@2.3.3'
  ], 'client');
  api.use([
    'semantic:ui-css@1.11.5'
  ], {weak: true});
  api.imply('semantic:ui-css');
  api.export('Notifications', 'client');
  api.addFiles([
    'src/Notifications.coffee',
    'src/notification.html',
    'src/notification.coffee',
    'src/notificationBar.html',
    'src/notificationBar.coffee',
    'src/notificationBar.less'
  ], 'client');
});

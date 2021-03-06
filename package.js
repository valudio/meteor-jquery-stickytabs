Package.describe({
  name: 'valudio:jquery-stickytabs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "This is a Meteor package for jquery-stickytabs (https://github.com/aidanlister/jquery-stickytabs)",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/valudio/meteor-jquery-stickytabs",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use('jquery', 'client');
  api.mainModule('lib/jquery.stickytabs.js', 'client');
});

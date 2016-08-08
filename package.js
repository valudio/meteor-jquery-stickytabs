Package.describe({
    name: "valudio:jquery-stickytabs",
    summary: "This is a Meteor package for jquery-stickytabs (https://github.com/aidanlister/jquery-stickytabs) by Aidan Lister (https://github.com/aidanlister). It provides persistant state (back and forward button support) for Bootstrap tabs http://aidanlister.com/2014/03/persisting-the-tab-state-in-bootstrap/",
    version: "1.0.0",
    git: "https://github.com/valudio/meteor-jquery-stickytabs"
});

Package.on_use(function(api) {
    api.versionsFrom("METEOR@0.9.0");
    api.use("jquery", "client");

    api.add_files(["lib/jquery.stickytabs.js"], "client", {
        bare: true
    });
});
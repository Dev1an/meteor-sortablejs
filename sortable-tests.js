// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by sortable.js.
import { name as packageName } from "meteor/devian:sortable";

// Write your tests here!
// Here is an example.
Tinytest.add('sortable - example', function (test) {
  test.equal(packageName, "sortable");
});

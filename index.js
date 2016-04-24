#!/usr/bin/env node

"use strict";

var chalk = require("chalk");
var checkPages = require("check-pages");
var process = require("process");
var yargs = require("yargs");
var packageJson = require("./package.json");

var options = yargs.
  usage("Usage: $0 <page URLs> [options]").
  option("checkLinks", {
    "describe": "Validates each link on a page",
    "type": "boolean"
  }).
  option("linksToIgnore", {
    "describe": "List of URLs to ignore",
    "type": "array"
  }).
  option("noEmptyFragments", {
    "describe": "Fails for empty fragments",
    "type": "boolean"
  }).
  option("noLocalLinks", {
    "describe": "Fails for local links",
    "type": "boolean"
  }).
  option("noRedirects", {
    "describe": "Fails for HTTP redirects",
    "type": "boolean"
  }).
  option("onlySameDomain", {
    "describe": "Ignores links to other domains",
    "type": "boolean"
  }).
  option("preferSecure", {
    "describe": "Verifies HTTPS when available",
    "type": "boolean"
  }).
  option("queryHashes", {
    "describe": "Verifies query string file hashes",
    "type": "boolean"
  }).
  option("checkCaching", {
    "describe": "Validates Cache-Control/ETag",
    "type": "boolean"
  }).
  option("checkCompression", {
    "describe": "Validates Content-Encoding",
    "type": "boolean"
  }).
  option("checkXhtml", {
    "describe": "Validates page structure",
    "type": "boolean"
  }).
  option("summary", {
    "describe": "Summarizes issues after running",
    "type": "boolean"
  }).
  option("terse", {
    "describe": "Results on one line, no progress",
    "type": "boolean"
  }).
  option("maxResponseTime", {
    "describe": "Response timeout (milliseconds)",
    "type": "number"
  }).
  option("userAgent", {
    "describe": "Custom User-Agent header",
    "type": "string"
  }).
  group(
    ["checkLinks", "checkCaching", "checkCompression", "checkXhtml"],
    "Checks:").
  group(
    ["linksToIgnore", "noEmptyFragments", "noLocalLinks", "noRedirects",
     "onlySameDomain", "preferSecure", "queryHashes"],
    "checkLinks options:").
  version().
  help().
  wrap(false).
  epilog(packageJson.description + "\n" + packageJson.homepage).
  demand(1).
  strict().
  argv;
options.pageUrls = options._;
var host = {
  "log": function log (msg) {
    console.log(chalk.green(msg));
  },
  "error": function error (msg) {
    console.error(chalk.red(msg));
  }
};
checkPages(host, options, function callback (error, count) {
  process.exit(count);
});

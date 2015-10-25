// Generated by CoffeeScript 1.8.0
(function() {
  var Promise, dirname, fs, mkdirp, wfile;

  fs = require("fs");

  dirname = require("path").dirname;

  Promise = require("promise");

  mkdirp = require("mkdirp");

  module.exports = wfile = function(path, data) {
    return new Promise(function(resolve, reject) {
      return fs.writeFile(path, data, function(err) {
        if (err && err.code === "ENOENT") {
          return mkdirp(dirname(path), function(err) {
            if (err) {
              reject(err);
            }
            return resolve(wfile(path, data));
          });
        } else if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  };

}).call(this);

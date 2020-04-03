// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"mpVp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hamburgerTrigger = hamburgerTrigger;
//this is the mapbox stuff
mapboxgl.accessToken = 'pk.eyJ1IjoiemloYW9sOTkiLCJhIjoiY2s3cXI0eGYyMDE0djNta3RmcmM4aWpvcCJ9.nu5cc_sXdykJEjK7aGtbQQ';
var singleStoreFront = new mapboxgl.Map({
  container: 'singleStoreFront',
  // container id
  style: 'mapbox://styles/zihaol99/ck8icnbt40m6j1ip54ewva5jq',
  center: [-73.961, 40.808],
  zoom: 14,
  interactive: false
});
var multiStoreFront = new mapboxgl.Map({
  container: 'multiStoreFront',
  // container id
  style: 'mapbox://styles/zihaol99/ck8hsqrtq030b1io7cxu2le7u',
  center: [-73.961, 40.808],
  zoom: 14,
  interactive: false
});
var freeRent = new mapboxgl.Map({
  container: 'freeRent',
  // container id
  style: 'mapbox://styles/zihaol99/ck8jb71zc1juo1ip5fxaiw5ov',
  zoom: 14,
  center: [-73.9651, 40.80885]
});
var legend1 = document.getElementById('legend1');
var legend2 = document.getElementById('legend2');
singleStoreFront.on('load', function () {
  var layers = ['take-out/delivery', 'closed', 'Columbia property'];
  var colors = ['#c91d1d', '#eedd87', '#a8d1f0'];

  for (var i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;
    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend1.appendChild(item);
  }
});
multiStoreFront.on('load', function () {
  var layers = ['take-out/delivery', 'closed', 'Columbia property'];
  var colors = ['#c91d1d', '#eedd87', '#a8d1f0'];

  for (var j = 0; j < layers.length; j++) {
    var layer = layers[j];
    var color = colors[j];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;
    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend2.appendChild(item);
  }
}); // Mobile navbar hamburger trigger

function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}
},{}]},{},["mpVp"], "script")
//# sourceMappingURL=https://spectator-static-assets.s3.amazonaws.com/free-rent/script.75da7f30.js.map
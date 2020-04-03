import enterView from 'enter-view';
import { USE_COVER_HED, USE_EYE_NAV } from '../config.json';
import './scripts/page.js';

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');

if (USE_COVER_HED || USE_EYE_NAV) {
  enterView({
    selector: USE_COVER_HED ? '.headline' : '.step-deck',
    offset: USE_COVER_HED ? 1 : 0.957,
    enter: () => {
      navbar.classList.remove('only-logo');
    },
    exit: () => {
      navbar.classList.remove('show-nav-links');
      navbar.classList.add('only-logo');
    },
  });
}
//this is the mapbox stuff
mapboxgl.accessToken = 'pk.eyJ1IjoiemloYW9sOTkiLCJhIjoiY2s3cXI0eGYyMDE0djNta3RmcmM4aWpvcCJ9.nu5cc_sXdykJEjK7aGtbQQ';

var singleStoreFront = new mapboxgl.Map({
  container: 'singleStoreFront', // container id
  style: 'mapbox://styles/zihaol99/ck8icnbt40m6j1ip54ewva5jq', 
  center: [-73.961,40.808],
  zoom: 14,
  interactive: false
});

var multiStoreFront = new mapboxgl.Map({
  container: 'multiStoreFront', // container id
  style: 'mapbox://styles/zihaol99/ck8hsqrtq030b1io7cxu2le7u',
  center: [-73.961,40.808],
  zoom: 14,
  interactive: false
});

var freeRent = new mapboxgl.Map({
  container: 'freeRent', // container id
  style: 'mapbox://styles/zihaol99/ck8jb71zc1juo1ip5fxaiw5ov',
  zoom: 14,
  center: [-73.9651,40.80885]
});

console.log(mapboxgl)

var legend1 = document.getElementById('legend1');
var legend2 = document.getElementById('legend2');


singleStoreFront.on('load', function() {
  var layers = ['take-out/delivery', 'closed','Columbia property'];
  var colors = ['#c91d1d', '#eedd87','#a8d1f0'];

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

multiStoreFront.on('load', function() {
  var layers = ['take-out/delivery', 'closed','Columbia property'];
  var colors = ['#c91d1d', '#eedd87','#a8d1f0'];

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
});

// Mobile navbar hamburger trigger

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}


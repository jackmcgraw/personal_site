console.log('starting up!');

// change require to es6 import style
import $ from 'jquery';

$('#main').html('Here we go!');
$('#seconds_counter').html('Current seconds...');

// from https://stackoverflow.com/questions/37187504/javascript-second-counter
var seconds = 0;
function incrementSeconds() {
    seconds += 1;
    $('#seconds_counter').html("You have been here for " + seconds + " seconds.");
}

var cancel = setInterval(incrementSeconds, 1000);

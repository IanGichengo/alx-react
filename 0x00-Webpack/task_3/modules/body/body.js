import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

// Add elements to the DOM
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

// Function to update the counter
let count = 0;
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));

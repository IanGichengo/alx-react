import $ from 'jquery';
import _ from 'lodash';

// Add elements to the DOM
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Function to update the counter
let count = 0;
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the click event with lodash debounce to avoid spamming
$('button').on('click', _.debounce(updateCounter, 500));

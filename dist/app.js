'use strict';

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _twitter2.default({
    consumer_key: 'ht0a0nhneEUCJW1188A1hfggO',
    consumer_secret: 'cp9ST6OZaob97Lr29M0CX7pjNbZpx6Tm8QbARiN3Ul6eZeLzwf',
    access_token_key: '271239810-jxfLfLrBWJYhojAin5RTC3HtdTEohrGCm3OOg5cF',
    access_token_secret: '2m22BcFCXBP7RRoGlZZpqnOZgPjD0N6WXRE3sS31P62q6'
});

// let stream = client.stream('statuses/filter', { track: '#thailand' });
// stream.on('data', function (event) {
//     //console.log(JSON.stringify(event)+'\n');
//     console.log(event.text);
// });

// stream.on('error', function (error) {
//     throw error;
// });

client.get('search/tweets', { q: '#phuket' }, function (error, tweets, response) {
    console.log(tweets);
});
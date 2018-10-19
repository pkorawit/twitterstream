import Twitter from 'twitter'

const client = new Twitter({
    consumer_key: 'ht0a0nhneEUCJW1188A1hfggO',
    consumer_secret: 'cp9ST6OZaob97Lr29M0CX7pjNbZpx6Tm8QbARiN3Ul6eZeLzwf',
    access_token_key: '271239810-jxfLfLrBWJYhojAin5RTC3HtdTEohrGCm3OOg5cF',
    access_token_secret: '2m22BcFCXBP7RRoGlZZpqnOZgPjD0N6WXRE3sS31P62q6'
})

let stream = client.stream('statuses/filter', { track: '#thailand' });
stream.on('data', function (event) {
    //console.log(JSON.stringify(event)+'\n');
    console.log(event.text);
});

stream.on('error', function (error) {
    throw error;
});


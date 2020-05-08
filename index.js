const fetch = require('node-fetch');

fetch('https://apidemo.theysay.io/api/v1/sentiment', {
  headers: {
    accept: 'application/json',
    Connection: 'keep-alive',
    Accept: 'application/json',
    // 'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    Origin: 'https://apidemo.theysay.io',
    // 'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    // 'sec-fetch-site': 'same-origin',
    'x-requested-with': 'XMLHttpRequest',
    cookie: '_ga=GA1.2.491599625.1588849875; _gid=GA1.2.35036145.1588849875',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
    referer: 'https://apidemo.theysay.io/',
  },
  // referrerPolicy: 'no-referrer-when-downgrade',
  body: '{"text":"sad ass"}',
  method: 'POST',
  mode: 'cors',
})
  .then(res => res.text())
  .then(body => console.log(body));

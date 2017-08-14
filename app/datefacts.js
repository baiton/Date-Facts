var moment = require('moment');
moment().format();

const mmt = moment.createInterface({
  input: process.stdin,
  output: process.stdout
});


define(['moment'], function (moment) {
    console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'
});

#!/usr/bin/env node

'use strict';

const co = require('co');
const debug = require('debug')('runx');

const pad = function (number) {
  if (number < 10) {
    return '0' + number;
  }

  return '' + number;
};

const format = function (date) {
  var YYYY = date.getFullYear();
  var MM = pad(date.getMonth() + 1);
  var DD = pad(date.getDay());
  var HH = pad(date.getHours());
  var mm = pad(date.getMinutes());
  var ss = pad(date.getSeconds());
  return `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`;
};

module.exports = function (work) {
  co(function* () {
    var startAt = new Date();
    debug('starting work, %s', format(startAt));
    yield* work();
    var endAt = new Date();
    debug('all things are done. %s', format(endAt));
    debug('use time: %sms', endAt - startAt);
  }).then(() => {
    console.log('done');
  }, (err) => {
    console.log(err.stack);
  }).then(() => {
    process.exit(0);
  });
};

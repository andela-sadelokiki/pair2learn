'use strict';

module.exports = {
  db: process.env.MONGOLAB_URI,
  google: {
    consumerKey: '977184814514-r46c8hk427gvvr58mmaujkallc5mfmep.apps.googleusercontent.com',
    consumerSecret: '3TmBJI4p6SlMVj3op484Lr63'
  },
  facebook: {
    clientID: '1451643985131503',
    clientSecret: 'ab912e0bc9bf867f39e1c25ab0d1aac4'
  },
  jwtSecret: 'mySecret'
};
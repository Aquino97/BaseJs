var promise = require('bluebird');

var pgp = require('pg-promise')(
        {
            promiseLib: promise
        }
);

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'aquino',
    user: 'aqui tampoco',
    password: 'mucho menos'
};

module.exports = {
    db: pgp(cn)
};
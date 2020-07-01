module.exports = {
    development: {
        username: 'phpmyadmin',
        password: '1111',
        database: 'node_test',
        host: 'localhost',
        port: '3306',
        dialect: 'mysql'
    },
    // test: {
    //     username: process.env.CI_DB_USERNAME,
    //     password: process.env.CI_DB_PASSWORD,
    //     database: process.env.CI_DB_NAME,
    //     host: 'localhost',
    //     port: '3306',
    //     dialect: 'mysql'
    // },
    // production: {
    //     username: process.env.PROD_DB_USERNAME,
    //     password: process.env.PROD_DB_PASSWORD,
    //     database: process.env.PROD_DB_NAME,
    //     host: process.env.PROD_DB_HOSTNAME,
    //     dialect: 'mysql'
    // }
    testing: {
        username: 'phpmyadmin',
        password: '1111',
        database: 'node_testing',
        host: 'localhost',
        port: '3306',
        dialect: 'mysql'
    },
    production: {
        username: 'phpmyadmin',
        password: '1111',
        database: 'node_production',
        host: 'localhost',
        dialect: 'mysql'
    }
};
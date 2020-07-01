module.exports = {
    development: {
        username: 'username',
        password: 'password',
        database: 'database',
        host: 'localhost',
        port: '3306',
        dialect: 'mysql'
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: 'localhost',
        port: '3306',
        dialect: 'mysql'
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        dialect: 'mysql'
    }
};
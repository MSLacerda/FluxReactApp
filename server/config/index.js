var settings = {
    'dev' : {
        bundle: '../../public/dist/bundle.json',
        database: {
            login: '',
            password: '',
        }
    },
    'prod': {
        port: 8080,
        database: {
            login: '',
            password: '',
        }
    }   
}


module.exports = { settings };
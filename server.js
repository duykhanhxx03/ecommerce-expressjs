const app = require('./src/app');
const config = require('./src/configs/config.mongodb');

const PORT = config.app.port || 3050;

const server = app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log('Exit server.'));
    // notify.send(...ping)
});
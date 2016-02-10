import mongoose from 'mongoose';

export default {
    connect: done => {
        function clearDB() {
            for (var i in mongoose.connection.collections) {
                mongoose.connection.collections[i].remove();
            }
            return done();
        }

        function reconnect() {
            mongoose.connect('mongodb://localhost/test', err => {
                if (err) {
                    throw err;
                }
                return clearDB();
            });
        }

        function checkState() {
            switch (mongoose.connection.readyState) {
                case 0:
                    reconnect();
                    break;
                case 1:
                    clearDB();
                    break;
                default:
                    process.nextTick(checkState);
            }
        }

        checkState();
    },

    disconnect: done => {
        mongoose.disconnect();
        done();
    }
}
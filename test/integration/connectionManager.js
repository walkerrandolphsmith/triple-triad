import mongoose from 'mongoose';
import User from './../../src/server/models/user';
import UserToken from './../../src/server/models/userTokens';
import ResetToken from './../../src/server/models/resetTokens';
import Game from './../../src/server/models/game';

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

    remove: done => {
      User.remove(() => {});
      UserToken.remove(() => {});
      ResetToken.remove(() => {});
      Game.remove(() => {});
      done();
    },

    disconnect: done => {
        mongoose.disconnect();
        done();
    }
}
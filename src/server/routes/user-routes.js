import bodyparser from 'body-parser';
import User from '../models/user';

export default function loadUserRoutes(router, passport) {
    router.use(bodyparser.json());

    router.post('/sign_up', passport.authenticate('local-signup', { session: false}), (req, res) => {
        res.json(req.user);
    });

    router.post('/sign_in', passport.authenticate('local-login', { session: false}), function(req, res) {
        res.json(req.user);
    });

    router.get('/signout', (req, res) => {
        req.logout();
        res.end();
    });

    //get auth credentials from server
    router.get('/load_auth_into_state', (req, res) => {
        res.json(req.user);
    });

    // get usernames for validating whether a username is available
    router.get('/all_usernames', (req, res) => {
        User.find({'local.username': { $exists: true } }, {'local.username': 1, _id:0}, function(err, data) {
            if(err) {
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }
            res.json(data);
        });
    })
};

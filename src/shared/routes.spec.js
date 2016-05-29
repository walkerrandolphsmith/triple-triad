import expect from 'expect';
import { ROUTES } from './routes';

//Rewire
import ForgotPassword from './../shared/containers/forgotPassword';
import Games from './../shared/containers/games';
import LeaderBoard from './../shared/containers/leaderBoard';
import NotFound from './../shared/containers/notFound';
import PasswordReset from './../shared/containers/passwordReset';
import SignIn from './../shared/containers/signin';
import SignUp from './../shared/containers/signup';
import User from './../shared/containers/user';
import UserEdit from './../shared/containers/userEdit';
import VerifyEmail from './../shared/containers/verify';

describe('src/shared/routes', () => {
    describe('Given a collection of route definitions', () => {
        it('should contain a mapping between leaderboard path and LeaderBoard component', () => {
            expect(ROUTES).toInclude({ path: 'leaderboard', component: LeaderBoard, status: 200 });
        });

        it('should contain a mapping between signin path and SignIn component', () => {
            expect(ROUTES).toInclude({ path: 'signin', component: SignIn, status: 200 });
        });

        it('should contain a mapping between signup path and SignUp component', () => {
            expect(ROUTES).toInclude({ path: 'signup', component: SignUp, status: 200 });
        });

        it('should contain a mapping between verify/:token path and VerifyEmail component', () => {
            expect(ROUTES).toInclude({ path: 'verify/:token', component: VerifyEmail, status: 200 });
        });

        it('should contain a mapping between forgot path and ForgotPassword component', () => {
            expect(ROUTES).toInclude({ path: 'forgot', component: ForgotPassword, status: 200 });
        });

        it('should contain a mapping between reset/:token path and PasswordReset component', () => {
            expect(ROUTES).toInclude({ path: 'reset/:token', component: PasswordReset, status: 200 });
        });

        it('should contain a mapping between games path and Games component', () => {
            expect(ROUTES).toInclude({ path: 'games', component: Games, status: 200 });
        });

        it('should contain a mapping between user path and User component', () => {
            expect(ROUTES).toInclude({ path: 'user', component: User, status: 200 });
        });

        it('should contain a mapping between user/edit path and UserEdit component', () => {
            expect(ROUTES).toInclude({ path: 'user/edit', component: UserEdit, status: 200 });
        });

        it('should contain a mapping between * path and NotFound component', () => {
            expect(ROUTES).toInclude({ path: '*', component: NotFound, status: 404 });
        });
    });
});
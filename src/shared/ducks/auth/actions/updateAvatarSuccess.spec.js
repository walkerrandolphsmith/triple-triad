import expect from 'expect';
import { UPDATE_AVATAR, updateAvatarSuccess } from './../index';

describe('src/shared/reducers/auth/actions/updateAvatarSuccess', () => {
    describe('Given UPDATE_AVATAR action type', () => {
        let expectedAction;
        let avatar;
        beforeEach(() => {
            avatar = '/path/to/avatar.png';
            expectedAction = {
                type: UPDATE_AVATAR,
                payload: {
                    avatar: avatar
                }
            };
        });

        describe('When invoking the updateAvatarSuccess action creator', () => {
            it('should create an action', () => {
                expect(updateAvatarSuccess(avatar)).toEqual(expectedAction);
            });

            it('should set its first parameter to the payload user field', () => {
                expect(updateAvatarSuccess(avatar).payload.avatar).toEqual(avatar);
            });
        });
    });
});
import { UPDATE_AVATAR } from './../index';

export const updateAvatarSuccess = avatar => ({
    type: UPDATE_AVATAR,
    payload: {
        avatar: avatar
    }
});
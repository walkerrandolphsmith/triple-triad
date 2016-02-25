import crypto from 'crypto';

export default function(userId) {
   return new Promise((resolve, reject) => {
        crypto.randomBytes(48, (ex, buf) => {
            let token = buf.toString('base64')
                .replace(/\//g, '_')
                .replace(/\+/g, '-')
                .toString()
                .slice(1, 24);
            resolve(`${userId}-${token}`);
        });
    });
};
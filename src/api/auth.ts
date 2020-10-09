import instance from './client'

class Auth {
    register(data:object = {}) {
        return instance({
            method: 'post',
            url: '/api/user/register',
            data,
        })
    }
}

export default Auth
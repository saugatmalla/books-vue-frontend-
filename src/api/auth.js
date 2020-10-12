import instance from './client'

export default {
    register(data = {}) {
        return instance({
            method: 'post',
            url: '/api/user/register',
            data,
        })
    }
}


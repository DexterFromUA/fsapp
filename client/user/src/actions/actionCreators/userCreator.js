import {login} from '../user';

export const loginUser = (mail, password) => {
    return dispatch => {
        fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${mail}&password=${password}`
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error while logging in')
                }

                return res.json();
            })
            .then(res => {
                localStorage.setItem('Token', res.token);
                dispatch(login(res.user));
            })
            .catch(e => console.error(e));
    }
};

export const loginCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('Token');
        if (token) {
            const complete = 'Bearer ' + token;

            fetch('/signin/check', {
                method: 'POST',
                headers: {
                    'Authorization': complete
                }
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Token not found. Sign In again, please')
                    }

                    return res.json()
                })
                .then(res => {
                    localStorage.setItem('Token', res.token);
                    dispatch(login(res.user));
                })
                .catch(e => console.error(e));
        }
    }
};
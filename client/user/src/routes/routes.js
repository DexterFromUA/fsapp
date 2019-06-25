import User from '../containers/user';
import Login from '../pages/Login';

export default [
    {
        path: "/",
        component: User
    },
    {
        path: "/login",
        component: Login
    }
];

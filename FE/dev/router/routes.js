import ThreadComponent from '../pages/Thread';
import ThreadsComponent from '../pages/Threads';
import RegisterComponent from '../pages/Register';
import UsersComponent from '../pages/Users';

const routes = [
    {
        label: 'Thread',
        path: '/Thread',
        component: ThreadComponent
    },
    {
        label: 'Threads',
        path: '/Threads',
        component: ThreadsComponent
    },
    {
        label: 'Register',
        path: '/Register',
        component: RegisterComponent
    },
    {
        label: 'Users',
        path: '/Users',
        component: UsersComponent
    },
];

export default routes;
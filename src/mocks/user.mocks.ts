import { User } from '../models/user.interface';

const userList: User[]= [
    {
        name:'Marius Paraschiv',
        company: 'IBM',
        location:'Bucharest, Romania',
        bio:'I do web interfaces with passion!',
        avatar_url:'http://i.imgur.com/java62p6jpg',
        email:'marius.paraschiv@ibm.com'
    },
    {
        name:'Madalin Gabriel',
        company: 'PWH',
        location:'Bucharest, Romania',
        bio:'I love photography',
        avatar_url:'http://i.imgur.com/TzWcih.png',
        email:'madalina@pwh.com'
    },
];

export const USER_LIST = userList;
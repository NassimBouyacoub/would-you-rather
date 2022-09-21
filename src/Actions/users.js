export function getUsers(users) {
    return {
        type: 'RECEIVE_USERS',
        users
    };
}
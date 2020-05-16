export const Receive_users='Receive_users'

export function receive_users(users){
    return{
        type:Receive_users,
        users
    }
}
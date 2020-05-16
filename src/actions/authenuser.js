export const Authen='authen_user'

export function authen_users(id){
    return {
        type: Authen,
        id
    }
}
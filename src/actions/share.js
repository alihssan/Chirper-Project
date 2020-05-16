import {receive_users} from './user.js'
import {receive_tweets} from './tweet.js'
import {authen_users} from './authenuser.js'
import {getInitialData} from '../utils/api.js'
import {showLoading,hideLoading} from 'react-redux-loading'
const authen_name='tylermcginnis'
export default function shared_data(){
    return (dispath)=>{
        dispath(showLoading())
        return getInitialData()
        .then(({users,tweets})=>{
            dispath(receive_users(users));
            dispath(receive_tweets(tweets));
            dispath(authen_users(authen_name));
            dispath(hideLoading());
        })
    }
}
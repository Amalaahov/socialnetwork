import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "235155c1-7feb-4da2-bb9f-4b44542480b1"
    }

});

export const getUserProfile = (userId) =>
{
   return instance.get(`profile/` + userId)
}

export const FindUsers = (currentPage, pageSize) =>
{
    return instance.get('users?page='+{currentPage}+'&count='+{pageSize})
}

export const FollowUser = (userId) =>
{
return instance.post('follow/' +userId)


}

export const UnfollowUser = (userId) =>
{
    return instance.delete('follow/'+userId)
}

export const pageChange = (pageNumber,pageSize) =>
{
    return instance.get ('users?page='+pageNumber+'&count='+pageSize)
}


export const profileApi =
    {
        getStatus(userId)
        {
         return   instance.get('profile/status/'+userId)
        },

        updateStatus(status)
        {
            return   instance.put('profile/status/',{status: status})
        }

    }
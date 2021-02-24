import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "a90a867e-fd31-4c4a-8bf3-173b8f13fa83"
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
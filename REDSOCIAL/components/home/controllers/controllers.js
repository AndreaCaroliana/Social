const url = "http://192.168.1.103:3000";

export const getTweets= async (username, token)=>{
    const response = await fetch(url+"/tweets?"+new URLSearchParams({username}),{
        headers:{
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
          }
    })
    const responseBody=await response.json();
    responseBody.status= response.status
    return responseBody
}

export const newTweet=async(username, tweet, token)=>{
    const response = await fetch(url+"/newTweet",{
        method:'PUT',
        headers:{
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
          },
        body:JSON.stringify({username,tweet})
    })
    const responseBody=await response.json();
    responseBody.status= response.status
    return responseBody
}

export const deleteTweets=async(username, position, token)=>{
    const response = await fetch(url+"/deleteTweet",{
        method:'DELETE',
        headers:{
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
          },
        body:JSON.stringify({username,position})
    })
    const responseBody=await response.json();
    responseBody.status= response.status
    return responseBody
}
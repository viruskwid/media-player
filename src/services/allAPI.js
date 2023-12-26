import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//upload new video

export const uploadNewVideoAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//get all videos

export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}

//view a single video
export const getAVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")

}

//Remove a video
export const removeAVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})

}

//insert a video into history
export const addVideoToHistoryAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//get viedo from history
export const getVideoFromHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")

}

//remove history
export const removeHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})

}

//addcategory
export const addCategoryAPI = async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

//get all categories
export const getAllCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"a")
}
//remove category
export const removeCategoryAPI=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

//update category

export const  updateCategoryAPI  = async (id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}
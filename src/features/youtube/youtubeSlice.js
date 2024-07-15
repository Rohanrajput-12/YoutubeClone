import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../../store/reducers/getVideoDetails";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: '',
    searchResult:[],
    nextPageToken:null,
    recommendedVideo:[]
};


const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{

        clearVideos:(state)=>{
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm = action.payload;
        },
        clearSerachTerm:(state)=>{
            state.searchTerm = "";
        }

    },

    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            if(action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.parsedData;
            }

        })
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=>{
            if(action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.parsedData;
            }

        })
        builder.addCase(getRecommendedVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.recommendedVideo = action.payload.parsedData;
            }
        })
        builder.addCase(getVideoDetails.fulfilled,(state,action)=> {
                state.currentPlaying = action.payload;
        })
    }
    
})

export const {clearVideos,changeSearchTerm,clearSerachTerm} =    youtubeSlice.actions;
export default youtubeSlice.reducer;
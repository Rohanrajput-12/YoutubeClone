import { configureStore } from '@reduxjs/toolkit'
import youtubeReducers from '../features/youtube/youtubeSlice'

export const store = configureStore({
  reducer: {
    youtubeApp:youtubeReducers
  },
})
import { githubReducer } from './githubSlice';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./githubApi/githubApi";

export const store = configureStore({
    reducer:{
        [githubApi.reducerPath] : githubApi.reducer,
        github: githubReducer
    }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GithubState {
    favourites: string[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem("rfk") ?? '[]')
}

const githubSlice = createSlice({
    name:'githubFav',
    initialState,
    reducers:{
        addFavoutite(state,action: PayloadAction<string>){
            state.favourites.push(action.payload)
            localStorage.setItem('rfk',JSON.stringify(state.favourites))
        },
        removeFavourites(state,action: PayloadAction<string>){
            state.favourites = state.favourites.filter(obj => obj !== action.payload)
            localStorage.setItem('rfk',JSON.stringify(state.favourites))
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer

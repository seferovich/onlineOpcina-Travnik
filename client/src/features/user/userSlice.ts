import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IJmbgData } from '../../globals/interfaces'
import { userServices } from './userServices'



interface IUserData {
    email: string 
}
export interface IState {
    jmbgData: IJmbgData[] | null,
    userData: IUserData | null,
    isError: boolean,   
    isLoading: boolean,
    isSuccess: boolean,
    message: string
}



const initialState: IState = {
    jmbgData: null,
    userData: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const getJmbgData = createAsyncThunk<IJmbgData[], undefined, {state: RootState}>('user/getJmbgData', async (_, thunkAPI) => {
    try{
        const token: string = thunkAPI.getState().auth.user!
        return await userServices.getJmbgData(token)

    }catch(error: any){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getUser = createAsyncThunk<IUserData, undefined, {state: RootState}>('user/getUser', async (_, thunkAPI) => {
    try{
        const token: string = thunkAPI.getState().auth.user!
        return await userServices.getUser(token)

    }catch(error: any){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder 
        .addCase(getJmbgData.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getJmbgData.fulfilled, (state, action) => {
            state.isLoading = false
            state.jmbgData = action.payload
        })
        .addCase(getJmbgData.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
            state.jmbgData = null
        })

        .addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.userData = action.payload
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
            state.userData = null
        })

    }
})


export const { resetUser } = userSlice.actions
export default userSlice.reducer
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IJmbgData } from '../../globals/interfaces'
import { userServices } from './userServices'


const token = JSON.parse(localStorage.getItem('jwt') as string)

export interface IState {
    jmbgData: IJmbgData[] | null,
    isError: boolean,   
    isLoading: boolean,
    isSuccess: boolean,
    message: string
}

const initialState: IState = {
    jmbgData: null,
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

// export const removeCustomer = createAsyncThunk<ICustomer, number | string, {state: RootState}>('customers/remove', async (customerId: string | number, thunkAPI) => {
//     try{
//         const token = thunkAPI.getState().auth.admin!
//         return await customerServices.remove(customerId, token)
//     }catch(error: any){
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// The isSuccess will only apply on creating and removing the customer
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
        // .addCase(create.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(create.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        // })
        // .addCase(create.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload as string
        // })

        // .addCase(getAll.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(getAll.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.customers = action.payload
        // })
        // .addCase(getAll.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload as string
        //     state.customers = null
        // })

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

        // .addCase(removeCustomer.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(removeCustomer.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        // })
        // .addCase(removeCustomer.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload as string
        // })
    }
})


export const { resetUser } = userSlice.actions
export default userSlice.reducer
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {ILoginData, IRegisterData} from '../../globals/interfaces'
import { authServices } from './authServices'


const user = JSON.parse(localStorage.getItem('jwt') as string)
export interface IState {
  user: string | null,
  isError: boolean,
  isLoading: boolean,
  isSuccess: boolean,
  message: string
}

const initialState: IState = {
    user: user ? user : null, 
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const login = createAsyncThunk('auth/login', async (user: ILoginData, thunkAPI) => {
    try{
        
        return await authServices.login(user)
        
    }catch(error: any){
        console.log(error) 
        const message = error.response.data 
        return thunkAPI.rejectWithValue(message)
    }
})

export const register = createAsyncThunk('auth/register', async (user: IRegisterData, thunkAPI) => {
  try{
      
    return await authServices.register(user)
      
  }catch(error: any){
    console.log(error) 
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    // const message = error.response.data 
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try{
        const token = await JSON.parse(localStorage.getItem('jwt') as string)
        return await authServices.logout(token)
    }catch(error: any){
        console.log(error) 
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true  
            state.user = action.payload.token
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
            state.user = null
        })

        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = null
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
            state.user = null
        })

        .addCase(logout.pending, (state) => {
            state.isLoading = true
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = null
        })
        .addCase(logout.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
            state.user = null
        })
    }
})


export const { reset } = authSlice.actions
export default authSlice.reducer
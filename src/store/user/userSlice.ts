import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

interface UserDTO {
  name: string;
  phone: string;
  mounth: string;
  day: string;
  year: string;
  login: string;
  password: string;
  email: string;
}

 export interface UserProc extends UserDTO {}

interface Data {
  isloading: boolean;
  user: UserProc;
  userInRegister: UserProc;  
}

export interface authData {
  login:string;
  password: string;
}

//state 
const initialState: Data = {
  isloading: false,
  user:{} as UserProc,
  userInRegister: {} as UserProc,
}


//action  для extraReducers
export const fetch = createAsyncThunk(
  'user/fetchUser',
  async (id) => {
    const responce = await axios.get(`http://localhost:3001/users/${id}`);
    return responce.data;
  }
);

export const addUser = createAsyncThunk(
  'user/addUser',
  async (value: UserDTO) => {
    const responce = await axios.post(`http://localhost:3001/users`, value);
    return responce.data;
  }
);

export const authUser = createAsyncThunk(
  'user/authUser',
  async (value: authData) => {
    const responce = await axios.get(`http://localhost:3001/users?login=${value.login}&?password=${value.password}`);
    return responce.data;
  }
);

export const UserSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addValuesInRegisterUser: (state, action) => {
      state.userInRegister = {...state.userInRegister, ...action.payload}
    },
  },

  /*  addCase  вместо then
      fulfilled успешное выполнение
      pending ожидание запроса
      rejected ошибка в запросе
  */ 
  extraReducers(builder) {
    builder.addCase(fetch.fulfilled, (state, action) => {
      state.user = action.payload
    }).addCase(fetch.pending, (state) => {
      state.isloading = true
    }).addCase(fetch.rejected, (_state, action) => {
      console.log('Нет данных',action.payload);
    }).addCase(addUser.fulfilled, (state, action) => {
      state.user = action.payload
    }).addCase(authUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { addValuesInRegisterUser } = UserSlice.actions

export default UserSlice.reducer
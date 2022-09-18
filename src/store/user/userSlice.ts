import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

interface UserDTO {
  f: string;
  i: string;
  o: string;
  login: string;
  password: string;
  birDay: string;
}

interface UserProc extends UserDTO {}

interface Data {
  isloading: boolean;
  user: UserProc
  
}

//state 
const initialState: Data = {
  isloading: false,
  user:{} as UserProc
}


//action  для extraReducers
export const fetch = createAsyncThunk(
  'user/fetchUser',
  async (id) => {
    const responce = await axios.get(`http://localhost:3001/users/${id}`);
    return responce.data;
  }
);

export const post = createAsyncThunk(
  'user/postUser',
  async (value: object) => {
    await axios.post('http://localhost:3001/posts', value);
  }
);

export const remove = createAsyncThunk(
  'user/removeUser',
  async (id: number) => {
    await axios.delete(`http://localhost:3001/posts/${id}`)
  }
);

/* export const update = createAsyncThunk(
  'user/updateUser',
  async (value: CustomPost) => {
    const payload = {
      body: value.body
    }
    await axios.put(`http://localhost:3001/posts/${value.id}`, payload)
  }
); */

export const UserSlice: any = createSlice({
  name: 'post',
  initialState,
  reducers: {
    
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
    })
  },
})

// Action creators are generated for each case reducer function


export default UserSlice.reducer
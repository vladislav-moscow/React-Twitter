import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export interface PostStore {
  posts: CustomPostDTO[];
  isloading: boolean;
}

export interface CustomPost extends CustomPostDTO {}

export interface CustomPostDTO {
	id: number;
	userId: number;
	body: string;
}

//state 
const initialState: PostStore = {
  posts: [],
  isloading: false
}


//action  для extraReducers
export const fetch = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const responce = await axios.get('http://localhost:3001/posts');
    return responce.data;
  }
);

export const fetchByUser = createAsyncThunk(
  'posts/fetchPostsByUser',
  async (id: number) => {
    const responce = await axios.get(`http://localhost:3001/posts?userId=${id}`);
    return responce.data;
  }
);

export const post = createAsyncThunk(
  'posts/postPosts',
  async (value: object) => {
    await axios.post('http://localhost:3001/posts', value);
  }
);

export const remove = createAsyncThunk(
  'posts/removePosts',
  async (id: number) => {
    await axios.delete(`http://localhost:3001/posts/${id}`)
  }
);

export const update = createAsyncThunk(
  'posts/updatePosts',
  async (value: CustomPost) => {
    const payload = {
      body: value.body
    }
    await axios.put(`http://localhost:3001/posts/${value.id}`, payload)
  }
);

export const postSlice: any = createSlice({
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
      state.posts = action.payload
    }).addCase(fetch.pending, (state) => {
      state.isloading = true
    }).addCase(fetch.rejected, (_state, action) => {
      console.log('Нет данных',action.payload);
    }).addCase(fetchByUser.fulfilled, (state, action) => {
      state.isloading = false
      state.posts = action.payload;
    }).addCase(fetchByUser.pending, (state) => {
      state.isloading = true
    })
  },
})

// Action creators are generated for each case reducer function


export default postSlice.reducer
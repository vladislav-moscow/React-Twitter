import { configureStore } from '@reduxjs/toolkit'
import postSlice from './post/postSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
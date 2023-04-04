import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Slice.js'


export default configureStore({
  reducer: {
    tasks:taskReducer
  },
})
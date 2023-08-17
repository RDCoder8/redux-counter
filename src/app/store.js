import { configureStore } from '@reduxjs/toolkit';
//grabbing the default import from the file
import counterReducer from '../features/counter/counterSlice';
// // destructing to grab the non-default exports
// import { counterSlice, increment } from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
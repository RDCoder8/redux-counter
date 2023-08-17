import { createSlice } from '@reduxjs/toolkit';

// in order to import this in another file, you have to destructure
export const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    {
      id: 0,
      title: 'Post 1',
      body: 'alksjdfhvaopihjvoiashjvcasdhvkljshv',
    },
    {
      id: 1,
      title: 'Post 2',
      body: 'alksjdfhvaopihjvoiashjvcasdhvkljshv',
    },
    {
      id: 2,
      title: 'Post 3',
      body: 'alksjdfhvaopihjvoiashjvcasdhvkljshv',
    },
  ],
  reducers: {
    addPost: (state, { payload }) => {
      payload.id = state.length;
      state.push(payload);
    },
  },
});

// in order to import this in another file, you have to destructure
export const { addPost } = postsSlice.actions;

//don't need to destructure to import
//(See the app/store.js file)
export default postsSlice.reducer;
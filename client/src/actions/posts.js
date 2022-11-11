import * as api from '../api';

// Action Creators
const getPosts = () => async (dispatch) => {
try {
    const  { data } = await api.fetchPosts();

    dispatch({ typye: 'FETCH_ALL', payload: data });
} catch (error) {
    console.log(error);
}
 

}
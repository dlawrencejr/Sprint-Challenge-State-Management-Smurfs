import axios from 'axios'

export const FETCH_DATA_START = 'GET_DATA_START'
export const FETCH_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'GET_DATA_FAILED'

export const POST_DATA_START = 'POST_SMURF_START'
export const POST_DATA_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_DATA_FAILED = 'POST_SMURF_FAILED'

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_DATA_START});
    axios
        .get('http://localhost:3333?smurfs')
        .then(res => {
            dispatch({type:FETCH_DATA_SUCCESS,payload: res.data});
        })
        .catch(err=>{
            dispatch({type:FETCH_DATA_FAILED,payload:`${err.response.status} ${err.response.data}`});
        });
};

export const addSmurfs = newSmurf => dispatch => {

    dispatch({ type: POST_DATA_START });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log("Post", res);
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: POST_DATA_FAILED, payload: err });
      });
  };
  
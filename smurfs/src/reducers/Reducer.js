import{
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILED
} from "../actions/Actions";



const initialState = {
    smurf:[],
    error: "",
    isFetching: false
}

const smurfsReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_DATA_START:
            return{...state, error: "", isFetching:true};
        case FETCH_DATA_SUCCESS:
            return{...state, error: "", isFetching: false, smurf: action.payload};
        case FETCH_DATA_FAILED:
            return{...state, error: action.payload, isFetching:false};

        case POST_DATA_START:
            return{ ...state, isFetching:true};
        case POST_DATA_SUCCESS:
            return{...state, smurf: action.payload, isFetching:false};
        case POST_DATA_FAILED:
            return{...state, isFetching: false, error: action.payload};
        default:
            return state;
    }
}

export default smurfsReducer;
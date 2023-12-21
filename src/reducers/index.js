import gitData from '.././data/gifData';


const initialState = {
    gifs: gifData,
    loading: false,
    err: ''
}

const reducer = (state = initialState, action) => {
     switch(action.type) {
         case FETCH_START: {
            return {
            ...state, 
            loading: true,
            err: ''
         }
           
}
            default:
                return(state);
             
         }
         

}
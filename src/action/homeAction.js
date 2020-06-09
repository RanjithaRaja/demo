import {Types} from "./type";

export const getHomeDataSuccess = (result) => ({
    type: Types.HOMEDATA,
    payload: result,
});

export const getHomeData = () => async (dispatch) => {
    await fetch("https://5ed87dbf152c310016d85c58.mockapi.io/topic/users")
    .then(response => response.json())
    .then(result => {
        // console.log(result)
        dispatch(getHomeDataSuccess(result))
    })
}
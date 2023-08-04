import * as actions from '../api'
import axios from 'axios'
const apiCall = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)
    const { url, onStart, onFailed, onSuccess, data, method, params } = action.payload
    if (onStart) dispatch({type: onStart})
    next(action)
    try {
        console.log()
    console.log("data:", data)
        // console.log(data.Date, "date", typeof(data.Date))
        const response = await axios.request({
            baseURL:'https://selam-backend.onrender.com/api/v1/',
            url,
            method,
            data ,
            params,
        })
        // console.log(url, data, method)
        // const response = {data:{
        //     name: 'papi',
        //     token: 'token'
        // }}
        console.log('this', 'here',response.data )
        dispatch(actions.apiCallSuccess(response.data))
        if (onSuccess) dispatch({type:onSuccess,payload:response.data})
    } catch (error) {
        console.log(error)
        if (error.isAxiosError){
            dispatch(actions.apiCallFailed("error.message"))
            if (onFailed) dispatch({type:onFailed, payload:{message:error.message}})
        }else{
            dispatch(actions.apiCallFailed("error.message"))
            if (onFailed) dispatch({type:onFailed, payload:{message:"man"}})
        }
    }
}

export default apiCall;
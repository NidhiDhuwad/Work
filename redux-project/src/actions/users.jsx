import UserService from "./../services/UserService.jsx"

export const retierveUsers = () => async(dispatch)=> {
    console.log("called retierveUsers");
    try {
        const resData = await UserService.getAll();
        const res = {
            ResponseStatus:true,
            ResponseData : {"allUsers":resData}
        }
        return dispatch({type:"RETRIEVE_ALL_USER",payload:res})
    } catch (error) {
        console.log(error);
    }
}
export const loginUsers = (logindata) => async(dispatch)=> {
    // console.log("called loginUsers",logindata);
    try {
        // console.log("called inside try");
        const resData = await UserService.login(logindata);
        const res = {
            Response:true,
            ResponseStatus:true,
            ResponseData : {"loginUserData":resData}
        }
        console.log("inside action",res);
        return dispatch({type:"RETRIEVE_LOGIN_USER",payload:res})
    } catch (error) {
        // console.log("called inside catch");
        console.log(error);
    }
}
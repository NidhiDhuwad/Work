import httpanything from "./../http-common.jsx";


const getAll = () =>{
    return httpanything.get("http://localhost/api/allusers")
}
const login = (logindata) =>{
    return httpanything.post("http://localhost/api/loginget",logindata)
}
const UserService = {
    getAll,
    login
}

export default UserService;
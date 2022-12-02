// import {erroruser, startuser, successuser} from "./userSlice"
// import axios from "axios"

// export const addUser = async(user , dispatch) => {
//     dispatch(startuser());
//     try {
//         const res = await axios.post("http://localhost:5000/api/users" , user);
//         dispatch(successuser(res.data));
//     } catch(err) {
//         dispatch(erroruser());
//     }
// }
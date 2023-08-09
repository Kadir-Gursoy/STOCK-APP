import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

//1 bir hook sadece bir react componeneti ve bir custom hook içerisidnde çağrılabilir. Bir JS func. içerisinde HOOK çağrılamaz
export const login = async(userData) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
const BASE_URL ="http://10001.fullstack.clarusway.com"

dispatch(fetchStart())

    try {
        await axios.post(`{BASE_URL}//account/auth/login/`, userData)
        dispatch(loginSucces(data))
        toastSuccessNotify("login başaralı")
        navigate("/")
    } catch (error) {
       dispatch(fetchFail())
        
    }


}
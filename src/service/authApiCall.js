import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

//Bir hook sadece bir react componeneti ve bir custom hook içerisinde çağrılabilir. Bir JS func. içerisinde HOOK çağrılamaz
export const login = async(userData) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
const BASE_URL ="http://14142.fullstack.clarusway.com"

dispatch(fetchStart())

    try {
        await axios.post(`{BASE_URL}//account/auth/login/`, userData)
        dispatch(loginSucces(data))
        toastSuccessNotify("Giriş Başaralı")
        navigate("/")
    } catch (error) {
       dispatch(fetchFail())
        
    }


}
import {useNavigate} from "react-router-dom"

const Login = () => {
    const path = useNavigate();
    const mall_id = import.meta.env.VITE_EMAIL
    const client_id = import.meta.env.VITE_CLIENT_ID;
    const scope =  "mall.read_category,mall.write_category"
    const encode_redirect_uri = import.meta.env.VITE_CALLBACK_URL
    const encode_csrf_token =  "asddada"
    const url =  `https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${client_id}&state=${encode_csrf_token}&redirect_uri=${encode_redirect_uri}&scope=${scope}`
    const handleAuthClick = async() => {
        path("/auth/callback")
      const data = await fetch(url)
      const json = await data.json();
      console.log(json)
    }
    return(
        <div>
            <button onClick={handleAuthClick}> 버튼인증</button>
        </div>
    )
}

export default Login
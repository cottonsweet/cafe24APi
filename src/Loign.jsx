import {useNavigate} from "react-router-dom"

const Login = () => {
    const path = useNavigate();
    const mall_id = process.env.MALL_ID || "whitecandy777"
    const client_id = process.env.CLIENT_ID || "p53jdXVUGVvvP2dVRZS9RD"
    const scope = process.env.SCOPE || "mall.read_category,mall.write_category"
    const encode_redirect_uri = "https://ssttest.netlify.app/auth/callback"
    const encode_csrf_token = process.env.CSRF_TOKEN || "asddada"
    const url =  `https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${client_id}&state=${encode_csrf_token}&redirect_uri=${encode_redirect_uri}&scope=${scope}`
    const handleAuthClick = async() => {
      const data = await fetch(url)
      const json = await data.json();
      console.log(json)
      path("/auth/callback")
    }
    return(
        <div>
            <button onClick={handleAuthClick}> 버튼인증</button>
        </div>
    )
}

export default Login
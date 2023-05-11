

const Login = () => {
    const mall_id = "whitecandy777"
    const client_id = "p53jdXVUGVvvP2dVRZS9RD"
    const scope = "mall.read_category,mall.write_category"
    const encode_redirect_uri = "https://ssttest.netlify.app/auth/callback"
    const encode_csrf_token = "asddada"
    const url =  `https://${mall_id}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${client_id}&state=${encode_csrf_token}&redirect_uri=${encode_redirect_uri}&scope=${scope}`
    const handleAuthClick = async() => {
      const data = await fetch(url, {
        method:"POST"
      })
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
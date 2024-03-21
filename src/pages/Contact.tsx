import { useRecoilValue } from "recoil"
import { userInfo } from "../store/Store"

const Contact = () => {
  const userData = useRecoilValue(userInfo)
  return (
    <div>Contact{userData.adm_lv ? "Admin" : "User"}</div>
  )
}

export default Contact
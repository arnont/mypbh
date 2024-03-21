import { useRecoilValue } from "recoil";
import { userInfo } from "../store/Store";

const Home = () => {
  const userData = useRecoilValue(userInfo)
  return <div>Home{userData.usernm}</div>;
};

export default Home;

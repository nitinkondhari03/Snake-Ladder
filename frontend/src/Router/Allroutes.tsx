import { Routes, Route} from "react-router-dom"
import Home from '../Components/Home'
import Login from "../Components/config/Login"
import Signup from "../Components/config/Signup"
import SnankLadderTwoplayer from "../Components/SnankLadderTwoplayer"
import SnankLadderFourplayer from "../Components/SnankLadderFourplayer"
import SnankLadderThreeplayer from "../Components/SnankLadderThreeplayer"
import SnankLadderRandom from "../Components/SnankLadderRandom"
const AllRoutes=()=>{
      return(<>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/twoplayer" element={<SnankLadderTwoplayer/>}/>
            <Route path="/threeplayer" element={<SnankLadderThreeplayer/>}/>
            <Route path="/fourplayer" element={<SnankLadderFourplayer/>}/>
            <Route path="/randomplayer" element={<SnankLadderRandom/>}/>
            
      </Routes>
      </>)
}
export default AllRoutes
import './App.css';
import {useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Switch , Route} from 'react-router-dom'
/* import RightSideSec from './components/RightSideSec/Main'
import VideoSingle from './components/videoPage/MainPage'
 */
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Login from './components/login/LoginScreen'
import Home from './components/Home'
import WatchLater from './components/WatchLater/MainWcth'
import LikeVideos from './components/LikedVideos/MainLiked'
import SingleVideo from './components/videoPage/MainPage'

function App() {
  /* const {accessToken , loading} = useSelector(state => state.auth)
  const history = useHistory()
  useEffect(() => {
    if(!loading && !accessToken){
      history.push("/log")
    }
  } , [accessToken, loading]) */


  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/log" component={Login} />
      <Route  path="/watchLater" component={WatchLater} />
      <Route path="/likeVideos" component={LikeVideos} />
      <Route path="/videos/:id" component={SingleVideo} />
    </Switch>
    </>
  );
}

export default App;

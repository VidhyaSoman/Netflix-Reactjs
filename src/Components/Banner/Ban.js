import { useEffect,useState} from 'react';
import YouTube from 'react-youtube';
import Axios from '../../Statics/Axios'
import { API_KEY, img_url } from '../../Statics/static';
import './Ban.css'

function Ban()
{
    const [movie, setMovie] = useState([])
            const [trailer,setTrailer] = useState("");
            useEffect(() => {
                Axios.get(`/trending/all/day?api_key=${API_KEY}`).then((response)=>{
                    console.log("trendins",response.data.results)
                    var i =0 ;
                    setInterval(function() {
                       
                        setMovie(response.data.results[i])
                        i++
                        if(i==19){
                            i=0;
                        }
                    }, 2000);

                })
            }, [])
            const  getMovie=(id)=>{
                    console.log(id,"id kityy---")
                    Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
                            setTrailer(response.data.results[0].key)
                            console.log(response.data,"trailer")
                    })
            }   
            const opts = {
                height: '380px',
                width: '1350',
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
              };
            const closebtn=()=>{
                setTrailer("")
            }
    return(
        <div className="banner">
            <div className='Utub'>{
                    trailer ?  <YouTube videoId={trailer} opts={opts}  /> : ""

             }</div>
            <img className='bannerimg' src={movie ? img_url + movie.backdrop_path:""}></img>
            <h1 className='film-Name'>{movie?movie.name:"not available"}</h1>
            <span className='description'>{movie ? movie.overview: "not available"}</span>
            <button className='play' onClick={()=>getMovie(movie.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg> Play</button>
            <button className='add'>Playlist</button>
            
        </div>
        
    )
}
export default Ban;
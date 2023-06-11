import { useEffect,useState } from 'react';
import './Cards.css';
import Axios from '../../Statics/Axios'
import { API_KEY, img_url } from '../../Statics/static';
import YouTube from 'react-youtube';

function Cards(){
    const [movies, setMovies] = useState([])
    const [trailer,setTrailer] = useState("");
   
useEffect(() => {
    Axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
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

return(
 <div>
 <h2>Trending Now</h2>
 <div className="cards">
 <div className='Utub'>
    {
        trailer ?  <YouTube videoId={trailer} opts={opts}  /> : ""
    }
    </div>      
            {
            movies.map((obj)=>{
                return(
                                <div className="film-cards">
                                    <img src={movies ? img_url+obj.backdrop_path :""} alt='no img'/>
                                    <h3 className='filmName'>{movies?obj.name:"not available"}</h3>
                                    <button className='playIcon' onClick={()=>getMovie(obj.id)}><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                        </svg></button>                     
                                </div>
                         
                        )
                    })
            }
             </div>
          </div>
    )
}
export default Cards;
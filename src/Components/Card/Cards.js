import { useEffect,useState } from 'react';
import './Cards.css';
import Axios from '../../Statics/Axios'
import { API_KEY, img_url } from '../../Statics/static';

function Cards(){
    const [movies, setMovies] = useState([])
   
useEffect(() => {
    Axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
    })
}, [])

    return(
            <div>
 <div className="cards">
            
    {
        movies.map((obj)=>{
                return(
                           
                                <div className="film-cards">
                                    <img src={movies ? img_url+obj.backdrop_path :""} alt='no img'/>
                                    <h3 className='filmName'>Film Name</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>                     
                                </div>
                         
                        )
                    })
            }
             </div>

          </div>
    )
}
export default Cards;
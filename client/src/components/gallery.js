import artsData from '../data/data';
import Artwork from './artwork'
import '../css/artwork.css'

function Gallery() {

    return(
        <div className='gallery'>
        {artsData.map((art) => {
            return(
                <Artwork 
                    name={art.name} 
                    img={art.img}
                />
         
            )  
        })}
        </div>
    )
    
}

export default Gallery;
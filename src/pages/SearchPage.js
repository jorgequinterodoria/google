import React from 'react'
import  { useStateValue } from './../components/StateProvider'
import useGoogleSearch from './../useGoogleSearch'
//import Response from './../response'
import './../css/SearchPage.css';
import { Link } from 'react-router-dom'
import Search from './../components/Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'


function SearchPage() {
    // eslint-disable-next-line
    const [{term}, dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    //const data = Response
    console.log(term)
    console.log(data)
    
    
    return (
        <div className="searchPage">
            <div className='searchPage__header'>
                <Link to ="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">Todo</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">Noticias</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Imagénes</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Compras</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Mapas</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">Más</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                        <div className="searchPage__option">
                            <Link to="/settings">Preferencias</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/tools">Herramientas</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className='searchPage__results'>
                {/* <p className="searchpage__resultCount">
                    Cerca de {data?.searchInformation.formattedTotalResults} resultados ({data.searchInformation.formattedSearchTime} segundos) para {term}
                </p> */}
                {data?.items.map(item =>(
                    <div className='searchPage__result'>
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
                                <img 
                                    className="searcPage__resultImage"
                                    src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                    alt=""
                                />
                            )}
                            {item.displayLink}
                        </a>
                        <a className="searchPage__resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage__resultSnippet">
                            {item.snippet}
                        </p>
                    </div>
                ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage

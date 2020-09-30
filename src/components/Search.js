import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import './../css/Search.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import  { useStateValue } from './StateProvider'
import {actionTypes} from './../reducer'

function Search({ hideButtons = false }) {

    const [input, setInput] = useState('')
    const history = useHistory()
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue()

    const search = (e) => {
        e.preventDefault()
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input,
        })
        setInput('')
        history.push('/search')
    }

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined"> Buscar con Google</Button>
                    <Button variant="outlined">Me siento con suerte</Button>
                </div>
            ) : (
                    <div className="search__buttons">
                        <Button 
                            className="search__buttonsHiden"
                            type="submit"  
                            onClick={search} 
                            variant="outlined"
                        > Buscar con Google
                        </Button>
                        <Button 
                            className="search__buttonsHiden" 
                            variant="outlined"
                        >Me siento con suerte
                        </Button>
                    </div>
                )
            }

        </form>
    )
}

export default Search

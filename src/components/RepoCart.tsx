import React, { MouseEvent, useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from './models/models'

const RepoCart = ({repo}:{repo:IRepo}) => {
  const {addFavoutite,removeFavourites} = useActions()
  const {favourites} = useAppSelector(state => state.github)
  const [isFav,setIsFav] = useState(favourites.includes(repo.html_url))


  const removeFav = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourites(repo.html_url)
    setIsFav(false)
  }

  const addToFavorite = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavoutite(repo.html_url)
    setIsFav(true)

  }
  return (
    <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
        <a href={repo.html_url} target='_blank'>
            <h2 className='text-lg font-bold'>{repo.full_name}</h2>
            <p className='text-sm'>
                Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                Watchars: <span className='font-bold'>{repo.watchers}</span>
            </p> 
            <p className='text-sm font-thin'>
                {repo?.description}
            </p>
            {
              !isFav && (

                <button className='py-2 px-4 bg-yellow-400 rounded hover: shadow-md transition-all'
                onClick={addToFavorite}>add favourite</button>
              )
              }
              {isFav &&
                (
                <button className='py-2 px-4 bg-red-400 rounded hover: shadow-md transition-all'
                onClick={removeFav}>remove</button>
              )
            }
        </a>
    </div>
  )
}

export default RepoCart
import React from 'react'
import { useAppSelector } from '../hooks/redux'

const FavouritesPages = () => {
  const {favourites} = useAppSelector(state => state.github)

  if(favourites.length === 0) return <p className='text-center'>No items</p>
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <ul>
          {
            favourites.map((obj) => {
              return (
                <li key={obj} className='list-none'>
                    <a href={obj}>{obj}</a>
                </li>
              )
            })
          }
      </ul>
    </div>
  )
}

export default FavouritesPages
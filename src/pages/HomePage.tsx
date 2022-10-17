import React, { useEffect, useState } from 'react'
import RepoCart from '../components/RepoCart'
import { useDebounce } from '../hooks/debounce'
import { useLazyGetUserRepoQuery, useSearchUsersQuery } from '../store/githubApi/githubApi'

const HomePage = () => {
  const [search,setSearch] = useState('')
  const debounce = useDebounce(search)
  const [showDropD,setShowDropD] = useState(false)
  const [fetchRepos,{isLoading: areReposLoading,data: repos}]= useLazyGetUserRepoQuery()
  const {isError,isLoading,data} = useSearchUsersQuery(debounce,{
    skip: debounce.length < 3,
    refetchOnFocus: true
  })
  const handlerRepo = (user:string) => {
    fetchRepos(user)
    setShowDropD(false)
    
  }

  useEffect(() => {
    setShowDropD(debounce.length > 3 && data?.length! > 0)
  },[debounce,data])
  
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {
        isError && <p className='text-center text-red-600 font-bold'>something is went wrong</p>
      }
      <div className='relative w-[560px]'>
        <input 
          type="text" 
          className='border py-2 px-4 w-full mb-2 h-[42px]'
          placeholder='search github username...'
          onChange={e => setSearch(e.target.value)}
          /> 
          {
            showDropD && (
              <ul className='absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
                  {isLoading && <p className='font-bold'>Loading...</p>}
                  {
                    data?.map((user) =>{
                      return (
                        <li 
                        key={user.id}
                        className='py-4 px-4 hover:bg-gray-300 hover:text-black transition-colors cursor-pointer'
                        onClick={() => handlerRepo(user.login)}
                        >
                          {user.login}
                        </li>
                      )
                    } 
                    )
                  }
              </ul>)
          }
          <div className="container">
            {areReposLoading && <p className='text-center'>Repos are loading...</p>}
            {
              repos?.map((repo) => {
                return <RepoCart repo={repo} key={repo.id} />
              })
            }
          </div>
      </div>
    </div>
  )
}

export default HomePage 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import MovieList from './component/Movielist/MovieList'

function App() {
  

  return (
    <>
      <Navbar />

      <main>
        Main Content
        <MovieList
          type="popular"
          title="popular"
          emoji={
            <img
              src="https://imgs.search.brave.com/SvFq2Ld2oL2NdsGmO0TX-4FZf1CNXNFys43a8DLDwP0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4z/LmVtb2ppLmdnL3Vu/aWNvZGUvZmFjZWJv/b2svZmlyZS5wbmc"
              alt="fire"
              width="35px"
              height
            />
          }
        />
        <MovieList
          type="top_rated"
          title="Top Rated"
          emoji={
            <img
              src="https://imgs.search.brave.com/k4d6rvjw3o0mAbUphYi88kp44l5thaxA3JP0nEHblUQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbW9q/aWlzbGFuZC5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvM19sYXJn/ZS5wbmc_dj0xNTcx/NjA2MTE2"
              alt="star emoji"
              className="navbar_emoji"
              width="35px"
              height
            />
          }
        />
        <MovieList
          type="upcoming"
          title="Upcoming"
          emoji={
            <img
              src="https://imgs.search.brave.com/DO9yb-gaWkRnkx1n-0MnlwggWrrSGAf88n1Xhd4wh-0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzM1LzQ4LzYw/LzM2MF9GXzE1MzU0/ODYwMDZfYXRHWFRy/NEpUMkVVcGJVMWUy/eFE0ZG1kQ3ZEc2k5/Z2EuanBn"
              alt="party face emoji"
              className="navbar_emoji"
              width="35px"
              height
            />
          }
        />
      </main>
    </>
  );
}

export default App

import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MoviesHub</h1>

      <div className="navbar_links">
        <a href="#popular">
          Popular
          <img
            src="https://imgs.search.brave.com/1I2haSW_1UF-EVFTUkuhQ3YMKwhcivqcCDks8oIA2ac/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NzQwNjIwMC92ZWN0/b3IvZmlyZS1lbW9q/aS1maXJlLWZsYW1l/cy1pc29sYXRlZC1v/bi13aGl0ZS1yZWFs/aXN0aWMtM2QtaWNv/bi12ZWN0b3IuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXo2/NzE1TUlKUXBscm5j/RTEzVjF0cXFNNHZx/NkNfeU9JWnNsR0My/aWRja0E9"
            alt="fire emoji"
            className="navbar_emoji"
          />
        </a>

        <a href="#top_rated">
          Top Rated
          <img
            src="https://imgs.search.brave.com/k4d6rvjw3o0mAbUphYi88kp44l5thaxA3JP0nEHblUQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbW9q/aWlzbGFuZC5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvM19sYXJn/ZS5wbmc_dj0xNTcx/NjA2MTE2"
            alt="star emoji"
            className="navbar_emoji"
          />
        </a>

        <a href="#upcoming">
          Upcoming
          <img
            src="https://imgs.search.brave.com/DO9yb-gaWkRnkx1n-0MnlwggWrrSGAf88n1Xhd4wh-0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzM1LzQ4LzYw/LzM2MF9GXzE1MzU0/ODYwMDZfYXRHWFRy/NEpUMkVVcGJVMWUy/eFE0ZG1kQ3ZEc2k5/Z2EuanBn"
            alt="party face emoji"
            className="navbar_emoji"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar
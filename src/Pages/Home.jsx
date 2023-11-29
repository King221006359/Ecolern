// import React from 'react'
import Navbar from "../component/Navbar"
import '../App.css'
import imgcard from '../assets/piceee.jpg'

const Home = () => {
  return (
    <div className="Home-contain">
      <Navbar />
      <div className="content">




     
        <h2>Courses/Learn For Better Future</h2>

      </div>
      <div className="my-component">
      <div className="card">
        <div className="input">
          <img src={imgcard} className="card-img" />
        </div><br /><br /><br /><br /><br />
        <div className="infos">
          <ul>
            <li>8weeks</li>
            <li>Intermediate</li>
            <li><strong>By David Brown</strong></li>
          </ul>

        </div><br />
        <div className="Infos-2">
          <h>Mobile App Development</h><br />
          <p>Lorem ipsum dolor, sit amet consectetur
 adipisicing elit. Eveniet quis id aliquid atque? Corrupti excepturi nam est nulla vero unde quibusdam tempore ut iusto ipsa,
            facilis cumque voluptatibus laudantium esse?</p><br />
          <button className="Getit">Get it Now</button>
        </div>

      </div>
      <div className="card">
        <div className="input">
          <img src={imgcard} className="card-img" />
        </div><br /><br /><br /><br /><br />
        <div className="infos">
          <ul>
            <li className="strk1">8weeks</li>
            <li className="strk1">Intermediate</li>
            <li><strong>By David Brown</strong></li>
          </ul>

        </div><br />
        <div className="Infos-2">
          <h>Mobile App Development</h><br />
          <p>Lorem ipsum dolor, sit amet consectetur
 adipisicing elit. Eveniet quis id aliquid atque? Corrupti excepturi nam est nulla vero unde quibusdam tempore ut iusto ipsa,
            facilis cumque voluptatibus laudantium esse?</p><br />
          <button className="Getit">Get it Now</button>
        </div>

      </div>
      <div className="card">
        <div className="input">
          <img src={imgcard} className="card-img" />
        </div><br /><br /><br /><br /><br />
        <div className="infos">
          <ul>
            <li className="strk1">8weeks</li>
            <li className="strk1">Intermediate</li>
            <li><strong>By David Brown</strong></li>
          </ul>

        </div><br />
        <div className="Infos-2">
          <h>Mobile App Development</h><br />
          <p>Lorem ipsum dolor, sit amet consectetur
 adipisicing elit. Eveniet quis id aliquid atque? Corrupti excepturi nam est nulla vero unde quibusdam tempore ut iusto ipsa,
            facilis cumque voluptatibus laudantium esse?</p><br />
          <button className="Getit">Get it Now</button>
        </div>

      </div>
      <div className="card">
        <div className="input">
          <img src={imgcard} className="card-img" />
        </div><br /><br /><br /><br /><br />
        <div className="infos">
          <ul>
            <li className="strk1">8weeks</li>
            <li className="strk1">Intermediate</li>
            <li><strong>By David Brown</strong></li>
          </ul>

        </div><br />
        <div className="Infos-2">
          <h>Mobile App Development</h><br />
          <p>Lorem ipsum dolor, sit amet consectetur
 adipisicing elit. Eveniet quis id aliquid atque? Corrupti excepturi nam est nulla vero unde quibusdam tempore ut iusto ipsa,
            facilis cumque voluptatibus laudantium esse?</p><br />
          <button className="Getit">Get it Now</button>
        </div>

      </div>
      </div>
   
    </div>


  )
}

export default Home

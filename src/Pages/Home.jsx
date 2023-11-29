// import React from 'react'
import Navbar from "../component/Navbar"
import '../App.css'
import imgcard from '../assets/piceee.jpg'
import imgcard1 from '../assets/cs4.jpg'
import imgcard2 from '../assets/cours3.jpg'

const Home = () => {
  return (
    <>
    <div className="Home-contain">
      <Navbar />
      <div className="content">




     
        <h2>Courses/</h2>
         <h>Learn For Better Future</h>

      </div>
      <div className="my-component">
      <div className="card">
        <div className="input">
          <img src={imgcard1} className="card-img" />
        </div>
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
          <img src={imgcard2} className="card-img" />
        </div>
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
          <img src={imgcard2} className="card-img" />
        </div>
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
          <img src={imgcard1} className="card-img" />
        </div>
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
    <div className="viewall">
      <button className="viewallcours">View All Courses</button>
    </div>
    </>
    


  )
}

export default Home

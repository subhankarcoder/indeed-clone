import React from 'react'
import './Home.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';

const Home = () => {
    const homeImg = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
    const navigate = useNavigate();
  return (
    <div>
        <Header />
        <div className='home-holder'>
            <div className='home-content'>
                <h1>Let's Make your next Greate Hire. Fast.</h1>
                <button onClick={() => navigate(routePath.create)}>Post Job</button>
            </div>
            <div className='home-img'>
                <img src={homeImg} alt='home'/>
            </div>
        </div>
    </div>
  )
}

export default Home
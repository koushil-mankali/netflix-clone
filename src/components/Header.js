import {useState, useEffect } from 'react';
import logo from '../assets/netflix.png';
import profile from '../assets/profile.png';
import './Header.css';

let Header = () =>{

    let [navScroll, setNavScroll]= useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                setNavScroll(true);
            }else{ setNavScroll(false); }
        });
        return () =>{
            window.removeEventListener('scroll',()=>{
                if(window.scrollY > 100){
                    setNavScroll(true);
                }else{ setNavScroll(false); }
            });
        };
    },[]);
    return <>
        <div className={`nav ${navScroll && 'navScroll'}`}>
            <img className='logo' src={logo} alt='logo'/>
            <div className='hbtns'>
                <button type='button' className='join_btn'>JOIN NOW</button>
                <button type='button' className='sign_btn'>SIGN IN</button>
            </div>
            {/* <img className='profile' src={profile} alt='profile' /> */}
        </div>
    </>

}

export default Header;
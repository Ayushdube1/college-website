import React, { useRef } from 'react'
import './Testimonials.css'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'



const Testimonials = () => {

    const slider = useRef();
    let tx=0;
    const slideForward =()=>{
        if(tx>-50){
            tx=tx-25;
        }
            
        slider.current.style.transform =`translateX(${tx}%)`;
    }
    const slideBackward =()=>{
        
        if(tx<0){
            tx+=25;
        }
            
        slider.current.style.transform =`translateX(${tx}%)`;
    }

  return (
    <div className ="testimonials">
      <img src ={next_icon} className="next-btn" onClick ={slideForward} />
      <img src ={back_icon} className ="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref ={slider}>
            <li>
                <div className ="slide">
                      <div className ="user-info">
                          <img src ={user_1} />
                          <div>
                            <h3>Misha Katiyar</h3>
                            <span>MMMUT,INDIA</span>
                          </div>
                      </div>
                      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className ="slide">
                      <div className ="user-info">
                          <img src ={user_2} />
                          <div>
                            <h3>Ayush Dubey</h3>
                            <span>MMMUT,INDIA</span>
                          </div>
                      </div>
                      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className ="slide">
                      <div className ="user-info">
                          <img src ={user_3} />
                          <div>
                            <h3>Ishanya Awasthi</h3>
                            <span>MMMUT,INDIA</span>
                          </div>
                      </div>
                      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className ="slide">
                      <div className ="user-info">
                          <img src ={user_4} />
                          <div>
                            <h3>Abhijay Thakur</h3>
                            <span>MMMUT,INDIA</span>
                          </div>
                      </div>
                      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials

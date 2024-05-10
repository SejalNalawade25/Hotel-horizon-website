import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {

  const slider = useRef();
  let  tx = 0;

  const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    if (tx === -50) {
      tx = 25
  }
  }
  const slideBackward =() =>{
     if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }


  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sophie Laurier</h3>
                  <span>Trip Advisor</span>
                </div>
              </div>
              <p>
                “The hotel is well located. Rooms are very clean. Great
                services. Very kind people from front desk and delicious
                breakfast. And I really love the spa!”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Joseph Hart</h3>
                  <span>Trip Advisor</span>
                </div>
              </div>
              <p>
                “The restaurants available were all very good. Friendly staff,
                helpful disposition made our overall experience wonderful. We
                will be going again next year.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Luna Wayne</h3>
                  <span>Trip Advisor</span>
                </div>
              </div>
              <p>
                “Brilliant staff and exceptional customer service. The place is
                fantastic. Great facilities and atmosphere. Buffet breakfast
                daily is very generous.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Willaim Jackson</h3>
                  <span>Trip Advisor</span>
                </div>
              </div>
              <p>
                “The rooms are all renovated and modern. And the staff are very
                willing to help you plan your day. Thanks for all the staff and
                this pleased trip!”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react'
import './Rooms.css'
import room_1 from '../../assets/room-1.jpg'
import room_2 from '../../assets/room-2.jpg'
import room_3 from '../../assets/room-3.jpeg'

const Rooms = () => {
  return (
    <div className='rooms'>
      <div className="room">
        <img src={room_1} alt="" />
        <div className="caption">
            <p>Single Room</p>
        </div>
      </div>
      <div className="room">
        <img src={room_2} alt="" />
        <div className="caption">
            <p>Deluxe Rooms</p>
        </div>
      </div>
      <div className="room">
        <img src={room_3} alt="" />
        <div className="caption">
            <p>Presidential Suite</p>
        </div>
      </div>
    </div>
  )
}

export default Rooms

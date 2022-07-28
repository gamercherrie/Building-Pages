import React from 'react'

import Image01 from '../assets/sldshwhdr-01.jpg'
import Image02 from '../assets/sldshwhdr-02.jpg'
import Image03 from '../assets/sldshwhdr-03.jpg'
import Image04 from '../assets/map.jpg'

const SlideshowHeader = () => {
  return (
    <div className="slideshow__container">
      <div className="container__inner">
        <img src= {Image01 } alt="Tower Building" />
        <img src= {Image02 } alt="Fifteen Place" />
        <img src= {Image03}  alt="Hotel Lobby" />
        <img src= {Image04 } alt="Map" />
      </div>
      <div className="line__under">
        <div className="under_container"></div>
      </div>
    </div>
  )
}

export default SlideshowHeader;
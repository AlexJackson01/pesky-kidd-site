import React from 'react'
import Video from "../assets/videos/intro.mp4";

export default function Recent() {
  return (
    <div>
        <h3 className='shows-subtitle'>InPop, O2 Academy2 Islington</h3>
                <video loop autoPlay controls className="recents-video">
                    <source src={Video} type="video/mp4" />
            </video>
    </div>
  )
}

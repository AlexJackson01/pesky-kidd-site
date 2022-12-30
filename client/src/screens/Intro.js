import React from 'react';
import Video from '../assets/videos/intro.mp4';

export default function Intro() {
  return (
    <div>
        <video loop autoPlay muted controls className="intro-video">
                    <source src={Video} type="video/mp4" />
            </video>
    </div>
  )
}

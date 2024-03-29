import React from "react";
import PropTypes from "prop-types";

const YouTubeO2_2 = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YouTubeO2_2.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YouTubeO2_2;
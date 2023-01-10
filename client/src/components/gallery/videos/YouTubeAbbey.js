import React from "react";
import PropTypes from "prop-types";

const YouTubeAbbey = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?playlist=PLRGcqKHk7L1lGhkDAGTnQXVXU08ne6Tf4&loop=0&listType=playlist`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YouTubeAbbey.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YouTubeAbbey;
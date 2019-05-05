import React from 'react';
import './main.scss';

// import icons
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';

// import react-custom-share components
import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';

const ShareComponent = props => {
  // create object with props for shareBlock
  const shareBlockProps = {
    url: window.location.href,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Facebook', icon: FaFacebookF },
      { network: 'Pinterest', icon: FaPinterestP, media: props.image }
    ],
    text: props.title,
    longtext: props.description || '',
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent;
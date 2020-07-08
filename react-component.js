import React, { useState } from 'react';

// todo:
// const templates = {
//   icon: '',
//   small: '',
//   medium: '',
//   large: ''
// }

const ERROR = 'An error occurred while sending the tip. Please try again later.';

const getFiat = ({ amount, rate = getCurrency(), currency = 'eur' }) => (amount * rate[currency]).toLocaleString('en-US', { style: 'currency', currency });

const TipButton = ({ size = 'icon', text = '', url = window.location.href, account, currency }) => {
  
  const [ open, setOpen ] = useState(false);

  return <>
    <button
      onClick={() => setOpen(!open)}
      className={templates[size]}
      // target="_blank"
      // {account && `data-account="${account}"`}
      // data-url={url}
    >
      <img alt="Superhero Icon" src="" />
      {text && `<span>${text}</span>`}
    </button>
    { sub && <div>< input type="text"/></div>}
  </>
};

export default TipButton;
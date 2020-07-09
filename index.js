import React from 'react';

import { linkToExtension, genTipDeeplink } from '@aeternity/superhero-button_fork';

export default ({ text = '', url = window.location.href, account }) => (
  <a
    target='_blank'
    href={ linkToExtension || genTipDeeplink(url) }
    data-account={account}
    data-url="${url}"
  >
    <img alt='Superhero Icon' src={icon} />
    {text && <span>{text}</span>}
  </a>
);

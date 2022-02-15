import React from 'react';

if (process.env.REACT_APP_ENV === 'wdyr') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

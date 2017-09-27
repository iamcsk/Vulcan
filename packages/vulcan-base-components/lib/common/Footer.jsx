import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const Footer = props => {
  return (
    <div className="footer"><a href="http://vulcanjs.org" target="_blank">
    </a></div>
  )
}

Footer.displayName = "Footer";

registerComponent('Footer', Footer);
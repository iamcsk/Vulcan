import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentUser, getSetting, Components, registerComponent } from 'meteor/vulcan:core';

const Header = (props, context) => {
  
  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "My App");
  const tagline = getSetting("tagline");

  return (
    <div className="header-wrapper fixed-top">

      <header className="header fx">

        <div className="logo fx2">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {/*tagline ? <h2 className="tagline">{tagline}</h2> : "" */}
        </div>

        <div className="fx2">
          <Components.SearchForm/>
        </div> 
        
        <div className="nav fx2 jend">
          
          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>

        </div>

      </header>
    </div>
  )
}

Header.displayName = "Header";

Header.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent('Header', Header, withCurrentUser);

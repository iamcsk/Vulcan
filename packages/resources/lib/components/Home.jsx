/* 

List of Folders. 
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import Helmet from 'react-helmet';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';


const FoldersList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div>

    <Helmet>
      <link name="bootstrap" rel="stylesheet" type="text/css" href="http://localhost:8855/personal/thirdparty/bootstrap-4/css/bootstrap.css"/>
    </Helmet>

    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <a className="navbar-brand" href="#">APP</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
    </nav>

    {/* user accounts */}

    <div className="signupBox">

      <Components.AccountsLoginForm />
    
    </div>

    {loading ? 

      <Loading /> :

      <div className="folders">
        

        {/* documents list */}

        { /* results.map(folder => <Components.Card fields={['name', 'description']} key={folder._id} collection={Folders} document={folder} currentUser={currentUser} />) */ }
        

        {
          /*totalCount > results.length ?
          <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More ({count}/{totalCount})</a> : 
          <p>No more items.</p>*/
        }

      </div>
    }

  </div>

const options = {
  limit: 5
};

export default (withCurrentUser(FoldersList));
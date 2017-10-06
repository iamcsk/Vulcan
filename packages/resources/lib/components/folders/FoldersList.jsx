/* 

List of Folders. 
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import Helmet from 'react-helmet';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

import Folders from '../../modules/folders/collection.js';

const FoldersList = ({results = [], currentUser, loading, loadMore, count, totalCount}) => 
  
  <div style={{maxWidth: '500px', margin: '20px auto'}}>

    <Helmet>
      <link name="bootstrap" rel="stylesheet" type="text/css" href="http://localhost:8855/personal/thirdparty/bootstrap-4/css/bootstrap.css"/>
    </Helmet>

    {/* user accounts */}

    <div style={{padding: '20px 0', marginBottom: '20px', borderBottom: '1px solid #ccc'}}>
    
      <Components.AccountsLoginForm />
    
    </div>

    {loading ? 

      <Loading /> :

      <div className="folders">
        
        {/* new document form */}

        {Folders.options.mutations.new.check(currentUser) ?
          <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
            <h4>Insert New Document</h4>
            <Components.SmartForm collection={Folders} /> 
          </div> :
          null
        }

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
  collection: Folders,
  limit: 5,
};

export default withList(options)(withCurrentUser(FoldersList));
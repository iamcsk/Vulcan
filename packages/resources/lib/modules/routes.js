import { addRoute } from 'meteor/vulcan:core';

import Home from '../components/Home.jsx';
import FoldersList from '../components/folders/FoldersList.jsx';

addRoute({ name: 'home', path: '/', component: Home });

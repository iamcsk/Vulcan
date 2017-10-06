/*

The main Folders collection definition file.

*/

import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';
import schema from './schema.js';

/*

Folders collection definition

*/
const Folders = createCollection({

  collectionName: 'Folders',

  typeName: 'Folder',

  schema,

  resolvers: getDefaultResolvers('Folders'),

  mutations: getDefaultMutations('Folders'),

});

/*

Permissions for members (regular users)

*/
const membersActions = [
  'folders.new',
  'folders.edit.own',
  'folders.remove.own',
];
Users.groups.members.can(membersActions);

/*

Default sort

*/
Folders.addDefaultView(terms => ({
  options: {
    sort: {
      createdAt: -1
    }
  }
}));

export default Folders;

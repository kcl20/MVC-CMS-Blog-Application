// defines assocations between models

const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL' // if user is deleted, set blogpost's user_id to null and keep the post so that it will be authorless
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, BlogPost };
// make these available to other files
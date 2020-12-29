const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'mysql',
  database: 'socialmediadb',
  username: 'socialuser',
  password: 'mypass',
});

const COL_ID_DEF = {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
};

const COL_USERNAME_DEF = {
  type: DataTypes.STRING(30),
  unique: true,
  allowNull: false,
};

const COL_TITLE_DEF = {
  type: DataTypes.STRING(140),
  allowNull: false,
};

const Users = db.define('user', {
  id: COL_ID_DEF,
  username: COL_USERNAME_DEF,
});

const Posts = db.define('post', {
  id: COL_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const Comments = db.define('comment', {
  id: COL_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: DataTypes.TEXT('tiny'),
  },
});

Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

module.exports = {
  db,
  Users,
  Posts,
  Comments,
};

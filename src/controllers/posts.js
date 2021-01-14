const { Posts, Users } = require('../db/models');

async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    userId,
    title,
    body,
  });
  return post;
}

/*
 *   showAllPosts({username: ''})
 *   showAllPosts({title: ''})
 */

async function findAllPosts(query) {
  let where = {};
  if (query.userId) {
    where.userId = query.userId;
  }
  const posts = await Posts.findAll({
    include: [Users],
    where,
  });
  return posts;
}

module.exports = {
  createNewPost,
  findAllPosts,
};

/* Test Code */
/*
async function task() {
  //   console.log(
  //     await createNewPost(
  //       1,
  //       'This is a sample post',
  //       'Body of the post goes here.'
  //     )
  //   ),
  //     console.log(
  //       await createNewPost(2, 'Another sample post', 'some other body')
  //     );
  const posts = await showAllPosts();
  for (let p of posts) {
    console.log(
      `${p.title}\nauther: ${p.user.username}\n${p.body}\n=================\n`
    );
  }
}
task();
*/

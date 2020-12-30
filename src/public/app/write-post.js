const btnSubmit = $('#btnSubmit');

btnSubmit.click((e) => {
  const title = $('#title').val();
  const body = $('#body').val();
  const userId = JSON.parse(localStorage.getItem('user')).id;
  $.post(
    '/api/posts',
    {
      userId,
      title,
      body,
    },
    (post) => {
      $('#content').load('../components/all-posts.html');
    }
  );
});

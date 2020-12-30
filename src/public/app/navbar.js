let navlinks = $('.navbar-nav .nav-link');

navlinks.click((e) => {
  let componentUrl = `/components/${$(e.target).attr('data-component')}.html`;
  $('#content').load(componentUrl);
});

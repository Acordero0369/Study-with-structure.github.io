// Highlight the active nav link based on the current page
(function () {
  const links = document.querySelectorAll('nav a');
  const path = window.location.pathname;
  links.forEach(function (link) {
    if (link.getAttribute('href') && path.endsWith(link.getAttribute('href').replace(/^.*\//, ''))) {
      link.classList.add('active');
    }
  });

  // Mark home link active on root or index.html
  if (path === '/' || path.endsWith('/index.html') || path.endsWith('/')) {
    var homeLink = document.querySelector('nav a[href="index.html"], nav a[href="/"]');
    if (homeLink) homeLink.classList.add('active');
  }
})();

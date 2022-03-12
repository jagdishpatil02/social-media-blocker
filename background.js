// URLs to block
const blockedUrls = ['twitter.com', 'facebook.com', 'instagram.com', 'linkedin.com', 'web.whatsapp.com', 'reddit.com', 'pinterest.com'];

if (blockedUrls.includes(window.location.origin)) {
  document.getElementsByTagName('body')[0].innerHTML = '<div><img src="https://i.ibb.co/r0RScrj/banner.jpg" style="margin: 0px auto; height: 100vh; display: flex;"></div>';
}

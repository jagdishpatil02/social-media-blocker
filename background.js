// // only allowed url will be added to history

allowedUrls = [
  {
    link: "twitter.com",
  },
  {
    link: "facebook.com",
  },
  {
    link: "instagram.com",
  },
  {
    link: "linkedin.com",
  },
  {
    link: "web.whatsapp.com",
  },
  {
    link: "reddit.com",
  },
  {
    link: "pinterest.com",
  },
  {
    link: "primevideo.com",
  },
  {
    link: "netflix.com",
  }
];

this.allowedUrls.forEach((element) => {
  if(element.link.includes(window.location.origin)) {
    let img = document.createElement("img");
    img.style.margin = "0 auto";
    img.style.height = "100vh";
    img.style.display = "flex";
    img.src = "https://i.ibb.co/r0RScrj/banner.jpg";
    document.getElementsByTagName('body')[0].innerHTML = img;
  }
});

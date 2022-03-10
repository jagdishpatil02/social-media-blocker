// // only allowed url will be added to history

allowedUrls = [
  {
    link: "www.twitter.com",
  },
  {
    link: "www.facebook.com",
  },
  {
    link: "www.instagram.com",
  },
  {
    link: "www.linkedin.com",
  },
  {
    link: "https://web.whatsapp.com/",
  },
  {
    link: "https://www.reddit.com/",
  },
  {
    link: "https://in.pinterest.com/",
  },
];

this.allowedUrls.forEach((element) => {
  if (element.link.includes(window.location.hostname)) {
    document.body.innerHTML = "";
    let createImg = document.createElement("img");
    createImg.style.margin = "0 auto";
    createImg.style.height = "100vh";
    createImg.style.display = "flex";
    createImg.src = "https://i.ibb.co/r0RScrj/banner.jpg";
    document.body.appendChild(createImg);
  }
});

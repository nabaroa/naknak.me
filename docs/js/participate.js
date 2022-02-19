const participateEvents = [
  {
    id: "1",
    date: "8/09/2012",
    where: "Bilbao, Bizkaia",
    what:"Megathon Windows 8",
    title: "App para Windows 8: Emoticons",
  },
  {
    id: "2",
    date: "17/11/2012",
    where: "Bilbao, Bizkaia",
    what: "Blackberry Jam Sesion",
    title: "Biker Citizens",
  },
  {
    id: "3",
    date: "15/02/2013-17/02/2013",
    where: "Bilbao, Bizkaia",
    what: "Hackmité",
    title: "Placecolor.in",
  },
  {
    id: "4",
    date: "28/09/2013",
    where: "Bilbao, Bizkaia",
    company: "Apps4health by Anesvad",
    what: "Hackathon",
    title: "Djigbée",
  },
  {
    id: "5",
    date: "07/03/2014 - 08/03/2014",
    where: "Donostia, Gipuzkoa",
    company: "Apps4health by Anesvad + Hirikilabs",
    what: "Post-hackathon",
    title: "Djigbée",
    assetVideo: "https://vimeo.com/91531130",
  },
  {
    id: "6",
    what: "Girls with superpowers",
    title: "Frontgirls",
    assetLink: "https://twitter.com/frontgirlsio",
  },
];

const participateEventsDiv = document.querySelector(".participate");

participateEvents.forEach((speakEvent) => {
  const item = document.createElement("div");
  item.className = `nk-timeline__item`;

  const title = document.createElement("h3");
  title.className = "nk-timeline__title";
  title.innerText = speakEvent.title;

  const what = document.createElement("p");
  what.className = "nk-timeline__description";
  what.innerText = speakEvent.what;

  const company = document.createElement("p");
  company.innerText = speakEvent.company;

  const date = document.createElement("p");
  date.className = "nk-timeline__date";
  date.innerText = speakEvent.date;

  const where = document.createElement("p");
  where.className = "nk-timeline__date";
  where.innerText = speakEvent.where;

  const assets = document.createElement("div");
  assets.className = "nk-timeline__assets";

  const assetLink = document.createElement("a");
  assetLink.href = speakEvent.assetLink;


  const imageLink = document.createElement("img");
  imageLink.className = "nk-timeline__icon";
  imageLink.src = "assets/icon-link.svg";
  imageLink.alt = "Link";

  const assetSlides = document.createElement("a");
  assetSlides.href = speakEvent.assetSlides;

  const imageSlides = document.createElement("img");
  imageSlides.className = "nk-timeline__icon";
  imageSlides.src = "assets/icon-slides.svg";
  imageSlides.alt = "Slides";

  const assetGithub = document.createElement("a");
  assetGithub.href = speakEvent.assetGithub;

  const imageGithub = document.createElement("img");
  imageGithub.className = "nk-timeline__icon";
  imageGithub.src = "assets/icon-github.svg";
  imageGithub.alt = "Github";

  const assetPost = document.createElement("a");
  assetPost.href = speakEvent.assetPost;

  const imagePost = document.createElement("img");
  imagePost.className = "nk-timeline__icon";
  imagePost.src = "assets/icon-post.svg";
  imagePost.alt = "Post";

  const assetVideo = document.createElement("a");
  assetVideo.href = speakEvent.assetVideo;

  const imageVideo = document.createElement("img");
  imageVideo.className = "nk-timeline__icon";
  imageVideo.src = "assets/icon-video.svg";
  imageVideo.alt = "Video";

  item.appendChild(title);

  isWhatInObject = "what" in speakEvent;
  isWhatInObject && item.appendChild(what);

  isCompanyInObject = "company" in speakEvent;
  isCompanyInObject && item.appendChild(company);
 
  isDateInObject = "date" in speakEvent;
  isDateInObject && item.appendChild(date);

  isWhereInObject = "where" in speakEvent;
  isWhereInObject && item.appendChild(where);
 
  isAssetsInObject = "assetLink", "assetVideo" in speakEvent;
  isAssetsInObject && item.appendChild(assets);

  isAssetLinkInObject = "assetLink" in speakEvent;
  isAssetLinkInObject && assets.appendChild(assetLink);

  assetLink && assetLink.appendChild(imageLink);

  isAssetSlidesInObject = "assetSlides" in speakEvent;
  isAssetSlidesInObject && assets.appendChild(assetSlides);

  assetSlides && assetSlides.appendChild(imageSlides);

  isAssetGithubInObject = "assetGithub" in speakEvent;
  isAssetGithubInObject && assets.appendChild(assetGithub);

  assetGithub && assetGithub.appendChild(imageGithub);


  isAssetPostInObject = "assetPost" in speakEvent;
  isAssetPostInObject && assets.appendChild(assetPost);

  assetPost && assetPost.appendChild(imagePost);

  isAssetVideoInObject = "assetVideo" in speakEvent;
  isAssetVideoInObject && assets.appendChild(assetVideo);

  assetVideo && assetVideo.appendChild(imageVideo);

  participateEventsDiv.insertBefore(item, participateEventsDiv.firstChild);
});

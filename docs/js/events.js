const eventEvents = [
  {
    id: "1",
    date: "25-26/07/2013",
    where: "Bilbao, Bizkaia",
    what: "An open space event for developers",
    title: "TheAntiEvent 2013",
    assetLink: "https://theantievent.org/",
  },
  {
    id: "2",
    date: "11-12/06/2014",
    where: "Bilbao, Bizkaia",
    what: "An open space event for developers",
    title: "TheAntiEvent 2014",
    assetLink: "https://theantievent.org/",
  },
  {
    id: "3",
    date: "16-7/11/2015 ",
    where: "Bilbao, Bizkaia",
    what: "An open space event for developers",
    title: "TheAntiEvent 2015",
    assetLink: "https://theantievent.org/",
    assetVideo: "https://www.youtube.com/playlist?list=PLZBN5zilYPhyE2AShgpHkK7ibnVMgULcD",
  },
  {
    id: "4",
    date: "7-8/10/2016",
    where: "Bilbao, Bizkaia",
    what: "An open space event for developers",
    title: "TheAntiEvent 2016",
    assetLink: "https://theantievent.org/",
  },
  {
    id: "5",
    date: "8-9/9/2017",
    where: "Bilbao, Bizkaia",
    what: "An open space event for developers",
    title: "TheAntiEvent 2017",
    assetLink: "https://theantievent.org/",
  },
  {
    id: "6",
    date: "5-6/10/2018",
    where: "Bilbao, Bizkaia",
    what: "An open space event for developers",
    title: "TheAntiEvent 2018",
    assetLink: "https://theantievent.org/",
  },
  {
    id: "6",
    date: "25-25/10/2019",
    where: "Bilbao, Bizkaia",
    what: "An open space event for developers",
    title: "TheAntiEvent 2019",
    assetLink: "https://theantievent.org/",
  },
];

const eventEventsDiv = document.querySelector(".events");

eventEvents.forEach((speakEvent) => {
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
 
  item.appendChild(date);

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

  eventEventsDiv.insertBefore(item, eventEventsDiv.firstChild);
});

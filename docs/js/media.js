const mediaEvents = [
  {
    id: "1",
    date: "12/02/2014",
    what: "Personal interview",
    company:"Diseño Usandizaga Institutua",
    title: "Web diseinuan pasiñoia",
    assetLink: "https://www.usandizaga.com/design/naiara-abaroa-web-diseinatzaileari-elkarrizketa-web-diseinuan-pasinoia/",
  },
  {
    id: "2",
    date: "06/03/2014",
    what: "Airean' TV show",
    company: "EITB",
    title: "Introducing WiMi5",
    assetVideo: "https://www.eitb.eus/eu/telebista/programak/airean/bideoak/osoa/2058930/bideoa-pulsar-concept-eta-wimi5-enpresak-eta-bideojokoak--fronton/",
  },
  {
    id: "3",
    date: "17/03/2014",
    what: "Press",
    company: "El Mundo",
    title: "WiMi5: El Wordpress de los videojuegos",
    assetLink: "https://www.elmundo.es/economia/2014/03/17/5323427be2704ed9488b457f.html",
  },
  {
    id: "4",
    date: "19/06/2015",
    what: "'Hiri Gorrian' radio show",
    where: "1:05 minute",
    company: "Euskadi irratia",
    title: "ReCaptcha",
    assetLink: "https://www.eitb.eus/eu/irratia/euskadi-irratia/programak/hirigorrian/",
  },
  {
    id: "5",
    date: "23/11/2015",
    what: "'DevUse' online blog interview",
    title: "Knowing how devs work",
    assetLink: "https://www.eitb.eus/eu/irratia/euskadi-irratia/programak/hirigorrian/",
  },
  {
    id: "6",
    date: "23/11/2015",
    company: "Onda Vasca",
    what: "Radio interview",
    title: "WiMi5, TheAntiEvent and FrontGirls",
    assetLink: "https://www.ivoox.com/made-in-euskadi-audios-mp3_rf_12875497_1.html?autoplay=true",
  },
  {
    id: "7",
    date: "24/03/2019",
    company: "La Nación",
    where: "Argentina",
    what: "Radio interview",
    title: "El español bajo ataque: una era de máxima tensión",
    assetLink: "https://www.lanacion.com.ar/lifestyle/el-espanol-bajo-ataque-era-maxima-tension-nid2230502/",
  },
];

const mediaEventsDiv = document.querySelector(".media");

mediaEvents.forEach((speakEvent) => {
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
  imageLink.alt = "Link to documentation";

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

  mediaEventsDiv.insertBefore(item, mediaEventsDiv.firstChild);
});

const speakEvents = [
  {
    id: "1",
    date: "8/09/2012",
    where: "Bilbao,Bizkaia",
    what: "Megathon Windows 8",
    title: "Diseño de apps Windows 8",
    assetLink: "https://www.genbeta.com/desarrollo/megathon-windows-8-hackathon-multi-ciudad-de-aplicaciones-metro-y-unas-palabras-del-culpable",
  },
  {
    id: "2",
    date: "11/10/2012",
    where: "Bilbao,Bizkaia",
    what: "Tapcoders by Tapquo",
    title: "Zen Coding",
  },
  {
    id: "3",
    date: "13/10/2012",
    company: "Desarrolloweb.com",
    what: "Hangout online",
    title: "Emmet.io Improve your HTML & CSS workflow",
    assetLink: "https://desarrolloweb.com/",
    assetVideo: "https://www.youtube.com/watch?v=ASELM0mYqtA"
  },
  {
    id: "4",
    date: "26/01/2013",
    company: "Bilbostack",
    where: "Bilbao,Bizkaia",
    title: "CSS Preprocessor. La revolución",
    assetLink: "https://bilbostack.com/",
  },
  {
    id: "5",
    date: "28/02/2013",
    company: "HTML5Spain",
    what: "Hangout online",
    title: "CSS Preprocessor. La revolución",
    assetLink: "https://www.meetup.com/HTML5-Spain/events/105307612/",
    assetVideo: "https://www.youtube.com/watch?v=BQaKHGvjCYI&list=UU31NJL93O-T0seb7sOgxtsw&index=3",
  },
  {
    id: "6",
    date: "1/03/2013",
    company: "Hack For Good",
    where: "Bilbao,Bizkaia",
    title: "Emmet.io Improve your HTML & CSS workflow",
    assetLink: "https://revistaingenieria.deusto.es/celebrado-hack-for-good/",
    assetVideo: "https://www.youtube.com/watch?v=pi9TPKpcoqY",
  },
  {
    id: "7",
    date: "22/03/2013",
    what: "#FridayWebForward",
    where: "Madrid, Spain",
    title: "Love the Cross-browser",
    assetVideo: "https://www.youtube.com/watch?v=WLNDykQpI9A",
  },
  {
    id: "8",
    date: "02/04/2013",
    company: "Desarrolloweb.com",
    what: "Hangout online",
    title: "SASS. #devIO",
    assetLink: "https://desarrolloweb.com/",
    assetVideo: "https://www.youtube.com/watch?v=MUN8CwzCecI&list=PLIcuwIrm4rKdiX6EJpH3dPMv0KkNHD_8q&index=13",
  },
  {
    id: "9",
    date: "07/08/2013",
    company: "Desarrolloweb.com",
    what: "Escuela IT online",
    title: "Practice safe design, use a concept",
    assetLink: "https://escuela.it/estudios/iniciacion-a-las-tecnologias-de-la-informacion",
    assetVideo: "https://www.youtube.com/watch?v=LCBf0qh6LQI",
  },
  {
    id: "10",
    date: "12/12/2014",
    company: "DevFestBilbao 2014",
    where: "Bilbao,Bizkaia",
    what: "Organized by Google Dev. Group of Bilbao",
    title: "Are you SASSy?",
  },
  {
    id: "11",
    date: "07/11/2015",
    where: "Bilbao,Bizkaia",
    company: "TheAntiEvent2015",
    title: "Talk on the SmashingConf 2015",
    assetVideo: "https://www.youtube.com/watch?v=XULvElnJsvg",
  },
  {
    id: "12",
    date: "20/11/2015",
    where: "Santander (Spain)",
    company: "CIC Consulting",
    title: "'Workflow para volar con el CSS' ",
    assetLink: "https://www.hack2progress.com/",
    assetSlides: "https://es.slideshare.net/NaiaraAbaroaKortabitarte/workfrow-para-volar-con-el-css",
    assetVideo: "https://www.youtube.com/watch?v=rijHjt3fJ38",
  },
  {
    id: "13",
    date: "04/03/2016",
    where: "Bilbao,Bizkaia",
    what: "Webdev meetup",
    title: "The Gold Rush. CSS gold nuggets",
    assetLink: "https://agenda.deusto.es/webdev-meetup-jornada-sobre-desarrollo-web/",
  },
  {
    id: "14",
    date: "15/04/2016",
    where: "Bilbao,Bizkaia",
    what: "Tikitalka #3",
    title: "I've seen things. CSS upcoming awesome features",
  },
  {
    id: "15",
    date: "11/06/2016",
    where: "Bilbao,Bizkaia",
    what: "WordCamp",
    title: "PostCSS. The treasure map",
    assetLink: "https://bilbao.wordcamp.org/2016/",
    assetGithub: "https://github.com/nabaroa/postcss-treasure-map",
  },
  {
    id: "16",
    date: "18/11/2016",
    where: "Madrid, Spain",
    what: "Codemotion 2016",
    title: "PostCSS. Beyond the treasure map",
    assetGithub: "https://github.com/nabaroa/postcss-beyond-treasure-map",
    assetVideo: "https://www.youtube.com/watch?v=7peIFggDH8M&list=PLKxa4AIfm4pUvMn4lZ8zin500bsp3oL2A",
    assetLink: "https://www.youtube.com/watch?v=XRHoW5C8mQs&list=PLKxa4AIfm4pUvMn4lZ8zin500bsp3oL2A",
  },
  {
    id: "17",
    date: "04/02/2017",
    where: "Bilbao,Bizkaia",
    what: "Bilbostack 2017",
    title: "Erase una vez... el Design System",
    assetLink: "https://bilbostack.com/",
    assetGithub: "https://github.com/nabaroa/erase-una-vez-el-design-system",
  },
  {
    id: "18",
    date: "11/02/2019",
    where: "Portugalete. Bizkaia",
    what: "11F",
    title: "Izan bagara. Emakumea informatikan",
    assetSlides: "https://11defebrero.org/",
    assetLink: "https://11defebrero.org/",
  },
  {
    id: "19",
    date: "30/03/2019",
    where: "Cordoba, Argentina",
    what: "Congreso Internacional de la Lengua Española",
    title: "Cambios en la lectura y escritura: Una tecnología para el lenguaje emocional",
    assetLink: "https://www.rae.es/la-institucion/politica-panhispanica/cile/viii-cile-argentina-2019",
    assetSlides: "https://medium.com/@nabaroa/cambios-en-la-lectura-y-escritura-una-tecnolog%C3%ADa-para-el-lenguaje-emocional-60761304104",
    assetVideo: "https://www.youtube.com/watch?v=pQVGwpiE6aw",
    assetPost: "https://medium.com/@nabaroa/a-10-407-km-58ed07e3056b",
  },
  {
    id: "20",
    date: "10/11/2019",
    where: "Gijón, Spain",
    what: "FabadaConf",
    title: "The gold rush. Reloaded: What's new on CSS?",
    assetLink: "https://fabadaconf.com/",
    assetSlides: "https://nabaroa.github.io/the-gold-rush-reloaded/",
    assetGithub: "https://github.com/nabaroa/the-gold-rush-reloaded",
  },
  {
    id: "21",
    date: "29/01/2022",
    where: "Bilbao, Bizkaia",
    what: "Bilbostack 2022",
    title: "10 años de CSS",
    assetLink: "https://bilbostack.com/",
    assetSlides: "https://nabaroa.github.io/10-years-of-css/",
  },
];

const speakEventsDiv = document.querySelector(".speak");

speakEvents.forEach((speakEvent) => {
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

  speakEventsDiv.insertBefore(item, speakEventsDiv.firstChild);
});

const events = [
  {
    id: "1",
    date: "06/04/2013",
    company: "Escuela IT",
    what: "Workshop online",
    title: "Taller de preprocesadores CSS: Sass",
    assetLink: "https://escuela.it/cursos/sass/",
    assetSlides: "https://drive.google.com/file/d/0B8ELniJ8ecbLVEVFT1hGQVJLdTg/view?resourcekey=0-JV6v0dpI7-5S4tzmmRszLQ",
  },
  {
    id: "2",
    date: "27/09/2013-1/10/2013",
    where: "Bilbao (Bizkaia)",
    company: "Universidad de Deusto",
    what: "Diploma de Especialización de Soluciones Software para Internet",
    title: "CSS3",
    assetLink: "https://ingenieria.deusto.es/cs/Satellite/ingenieria/en/facultad-ingenieria",
  },
  {
    id: "3",
    date: "30/09/2014-3/10/2014",
    where: "Bilbao (Bizkaia)",
    company: "Universidad de Deusto",
    what: "Diploma de Especialización de Soluciones Software para Internet",
    title: "CSS3",
    assetLink: "https://ingenieria.deusto.es/cs/Satellite/ingenieria/en/facultad-ingenieria",
  },
  {
    id: "4",
    date: "05/12/2014 & 12/12/2014",
    where: "Bilbao (Bizkaia)",
    company: "Coderdojo Bio",
    what: "Workshop to young students",
    title: "HTML5",
    assetLink: "https://coderdojo.com/",
  },
  {
    id: "5",
    date: "24/06/2015",
    company: "Escuela IT",
    what: "Workshop online",
    title: "Especificación CSS3 y mejoras en la maquetación con CSS3",
    assetLink: "https://escuela.it/cursos/html-css/",
    assetGithub: "https://github.com/EscuelaIt/HTML-CSS-2015/tree/master/CSS3",
  },
  {
    id: "6",
    date: "13/10/2015-16/10/2015",
    where: "Bilbao (Bizkaia)",
    company: "Universidad de Deusto",
    what: "Diploma de Especialización de Soluciones Software para Internet",
    title: "CSS3",
    assetLink: "https://ingenieria.deusto.es/cs/Satellite/ingenieria/en/facultad-ingenieria",
  },
  {
    id: "7",
    date: "18/04/2016-22/04/2016",
    company: "Escuela IT",
    what: "Workshop online",
    title: "PostCSS",
    assetLink: "https://escuela.it/cursos/postcss-mas-alla-del-css/",
    assetGithub: "https://github.com/EscuelaIt/PostCSS-2016",
  },
  {
    id: "8",
    date: "28/10/2016-12/11/2016",
    where: "Bilbao (Bizkaia)",
    company: "Master Universitario de Marketing Digital. Mondragon Unibertsitatea",
    what: "Workshop",
    title: "HTML/CSS",
    assetLink: "https://www.mondragon.edu/es/master-universitario-marketing-digital",
  },
];

const eventsDiv = document.querySelector(".teach");

events.forEach((event) => {
  const item = document.createElement("div");
  item.className = `nk-timeline__item`;

  const title = document.createElement("h3");
  title.className = "nk-timeline__title";
  title.innerText = event.title;

  const what = document.createElement("p");
  what.className = "nk-timeline__description";
  what.innerText = event.what;

  const company = document.createElement("p");
  company.innerText = event.company;

  const date = document.createElement("p");
  date.className = "nk-timeline__date";
  date.innerText = event.date;

  const where = document.createElement("p");
  where.className = "nk-timeline__date";
  where.innerText = event.where;

  const assetLink = document.createElement("a");
  assetLink.href = event.assetLink;

  const imageLink = document.createElement("img");
  imageLink.className = "nk-timeline__icon";
  imageLink.src = "assets/icon-link.svg";
  imageLink.alt = "Link to documentation";

  const assetSlides = document.createElement("a");
  assetSlides.href = event.assetSlides;

  const imageSlides = document.createElement("img");
  imageSlides.className = "nk-timeline__icon";
  imageSlides.src = "assets/icon-slides.svg";
  imageSlides.alt = "Slides";

  const assetGithub = document.createElement("a");
  assetGithub.href = event.assetGithub;

  const imageGithub = document.createElement("img");
  imageGithub.className = "nk-timeline__icon";
  imageGithub.src = "assets/icon-github.svg";
  imageGithub.alt = "Github";

  const assetVideo = document.createElement("a");
  assetVideo.href = event.assetVideo;

  const imageVideo = document.createElement("img");
  imageVideo.className = "nk-timeline__icon";
  imageVideo.src = "assets/icon-video.svg";
  imageVideo.alt = "Video";

  item.appendChild(title);
  item.appendChild(what);
  item.appendChild(company);
  item.appendChild(date);

  isWhereInObject = "where" in event;
  isWhereInObject && item.appendChild(where);

  isAssetLinkInObject = "assetLink" in event;
  isAssetLinkInObject && item.appendChild(assetLink);

  assetLink && assetLink.appendChild(imageLink);

  isAssetSlidesInObject = "assetSlides" in event;
  isAssetSlidesInObject && item.appendChild(assetSlides);

  assetSlides && assetSlides.appendChild(imageSlides);

  isAssetGithubInObject = "assetGithub" in event;
  isAssetGithubInObject && item.appendChild(assetGithub);

  assetGithub && assetGithub.appendChild(imageGithub);

  isAssetVideoInObject = "assetVideo" in event;
  isAssetVideoInObject && item.appendChild(assetVideo);

  assetVideo && assetVideo.appendChild(imageVideo);

  eventsDiv.insertBefore(item, eventsDiv.firstChild);
});

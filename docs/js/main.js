fetch("js/teaching.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("agenda-teaching");
  for (var i = 0; i < data.length; i++) {
    if (data[i].category == "teaching") {
      var li = document.createElement("li");
      li.classList.add("agenda__item");
      mainContainer.appendChild(li);
      var p = document.createElement("p");
      p.innerHTML = data[i].what + " in ";
      var a = document.createElement("a");
      a.classList.add("agenda__link");
      a.href = data[i].companyUrl;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.innerHTML = data[i].company;
      p.appendChild(a);
      li.appendChild(p);
      var h3 = document.createElement("h3");
      h3.classList.add("agenda__title");
      h3.innerHTML = data[i].title;
      li.appendChild(h3);
      var time = document.createElement("time");
      time.innerHTML = data[i].time + " " + data[i].where;
      time.classList.add("agenda__time");
      li.appendChild(time);
      if (data[i].resourcesUrl != null) {
        var resourceList = document.createElement("ul");
        resourceList.classList.add("resources");
        li.appendChild(resourceList);
        var resourceItem = document.createElement("li");
        resourceItem.classList.add("resources__item");
        resourceList.appendChild(resourceItem);
        var resourceLink = document.createElement("a");
        resourceLink.classList.add("resources__link");
        resourceLink.href = data[i].resourcesUrl;
        resourceLink.target = "_blank";
        resourceLink.rel = "noreferrer";
        resourceItem.appendChild(resourceLink);
      }
    }
  }
}

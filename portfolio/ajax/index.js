function makeCall(url, callBack) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log("Success!");
      callBack(this);
    }
  });
  xhr.open("GET", url, true);
  xhr.send();
}

function movies(response) {
  var myResponse = JSON.parse(response.responseText);
  //console.log(myResponse);

  var data = "";
  var i = 0;
  while (i < myResponse.Search.length) {
    //console.log(myResponse.Search.length);
    var imdbID = myResponse.Search[i].imdbID;
    //console.log(imdbID);
    data += `
        <img src="${
          myResponse.Search[i].Poster
        } id="${imdbID}" onclick="callDetails('${imdbID}')"/>
        `;
    i++;
  }
  // console.log(data);
  document.getElementById("posters").innerHTML = data;
}

function details(response) {
  console.log("Clicked!");
  document.getElementById("details").style.visibility = "visible";
  var detailResponse = JSON.parse(response.responseText);
  console.log(detailResponse);

  var detailRatings = "";
  for (var j = 0; j < detailResponse.Ratings.length; j++) {
    detailRatings += `
    ${detailResponse.Ratings[j].Source}: ${
      detailResponse.Ratings[j].Value
    }<br>`;
  }

  document.getElementById("details").innerHTML = `
  <h1 id="movieTitle">${detailResponse.Title}</h1>
  <div id="detailInfo">
  <h2>Year</h2><h3>${detailResponse.Year}</h3>
  <h2>Directed by</h2><h3>${detailResponse.Director}</h3>
  <h2>Writer(s)</h2><h3>${detailResponse.Writer}</h3>
  <h2>Plot</h2><h3>${detailResponse.Plot}</h3>
  <h2>Ratings</h2><h3>${detailRatings}</h3>
  </div>
  `;
}

window.callDetails = function(imdbID) {
  console.log(imdbID);
  makeCall(`https://www.omdbapi.com/?apikey=86de0f6c&i=${imdbID}`, details);
};

document.querySelector("#find").addEventListener("click", function() {
  var search = document.querySelector("#movie-name").value;
  console.log(search);
  makeCall(`https://www.omdbapi.com/?apikey=86de0f6c&s=${search}`, movies);
});

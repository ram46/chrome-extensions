document.body.onload = function() {

  chrome.topSites.get(function(sites) {
    console.log(sites[0])
    var data = document.getElementById("data")
    for (var i = 0; i < sites.length; i++) {
      var newPara = document.createElement('p');
      newPara.id = 'p'+i;
      data.appendChild(newPara);
      document.getElementById(newPara.id).innerText = sites[i].title;

      var newLink = document.createElement("a");
      var linkText = document.createTextNode(sites[i].url);
      newLink.appendChild(linkText);
      newLink.title = sites[i].title;
      newLink.href = sites[i].url;
      // OR newLink.setAttribute('href', sites[i].url);
      data.appendChild(newLink);
    }
  })
}


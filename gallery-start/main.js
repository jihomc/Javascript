var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
let i=1;
while (i < 6) {
  var newImage = document.createElement('img');
  var imageSource = "images/pic" + i + ".jpg";
  newImage.setAttribute('src', imageSource);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(e) {
    var source = e.target.getAttribute('src');
    displayedImage.setAttribute('src', source);
  })
  i++;
}
  

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(e) {
  if (e.target.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
})

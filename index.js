var divs = document.querySelectorAll('[aria-label="Listing"]');

[].forEach.call(divs, function(div) {
  var d = div.textContent
  if(d.includes('Featured')){
      div.remove()
  }
});

document.addEventListener('DOMContentLoaded', function() {
	var altCSS = document.querySelector('link[rel^=alternate]');
  let params = (new URL(document.location)).searchParams;
  let disabled = params.get('disabled');
  if (disabled) {
	  altCSS.disabled = true;
  }
	console.log(altCSS);
	var switchStyle = function() {
		if (altCSS.disabled) {
			altCSS.disabled = false;
		}
		else {
			altCSS.disabled = true;
		}
	};
	styleToggle = document.querySelector('a');
	styleToggle.addEventListener('click', switchStyle);
});
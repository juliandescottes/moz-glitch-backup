window.onbeforeunload = function (e) {
  var e = e || window.event;

  // For IE and Firefox
  if (e) {
    e.returnValue = 'Any string';
  }

  // For Safari
  return 'Any string';
};
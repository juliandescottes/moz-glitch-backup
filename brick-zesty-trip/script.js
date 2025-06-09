const createIframe = function () {
  const iframe = document.createElement("iframe");
  iframe.src = "about:blank";
  iframe.addEventListener('load', () => {
    iframe.contentDocument.write('<!DOCTYPE html><html lang='.concat('en', '></html>'));
  }, true);
  document.body.appendChild(iframe);
}

createIframe();
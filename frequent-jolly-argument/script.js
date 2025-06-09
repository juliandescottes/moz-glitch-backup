document.querySelector("button").addEventListener("click",function () {
  var iframe = document.createElement("iframe");
  document.body.appendChild(iframe);

  var iframeDoc =  iframe.contentDocument;
  iframeDoc.open();
  iframeDoc.write("<html><head></head><body>12<script>console.warn('oops');</script></body></html>");
  iframeDoc.close();
  document.body.removeChild(iframe);
})

function decode(link) {
  var step1 = atob(link);
  var step2 = atob(step1);
  var step3 = atob(step2);
  var step4 = atob(step3);
  var iframe = document.getElementById("iframe");
  iframe.src = step4;
}

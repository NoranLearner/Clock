function myTime(params) {
  var
    d = new Date(),
    Ap = 'AM',
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds();

  if (h > 11) {
    Ap = 'PM';
  }

  if (h < 10) {
    h = '0' + h;
  }

  if (m < 10) {
    m = '0' + m;
  }

  if (s < 10) {
    s = '0' + s;
  }

  document.getElementById('timeHere').innerHTML = h + ':' + m + ':' + s + ' ' + Ap;

  var t = setTimeout('myTime()', 500);
}

// 联系邮箱不写在 HTML 里，点击时才拼出来，避免被爬虫采集。
(function () {
  function addr(el) { return el.getAttribute('data-u') + '@' + el.getAttribute('data-d'); }
  function href(el) {
    var s = el.getAttribute('data-s');
    return 'mailto:' + addr(el) + (s ? '?subject=' + encodeURIComponent(s) : '');
  }
  var links = document.querySelectorAll('.js-mail');
  for (var i = 0; i < links.length; i++) {
    (function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); window.location.href = href(el); });
      el.addEventListener('mouseenter', function () { el.setAttribute('href', href(el)); });
      el.addEventListener('focus', function () { el.setAttribute('href', href(el)); });
      el.setAttribute('title', 'Opens your email app');
    })(links[i]);
  }
})();

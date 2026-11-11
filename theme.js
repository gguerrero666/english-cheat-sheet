/* Theme switcher for the cheat sheets.
   Load it in <head>, after styles.css:  <script src="theme.js"></script>

   - Remembers the choice in localStorage and in a ?theme=<id> URL parameter
     that it adds to the links between sheets, so it survives navigation
     even where localStorage is not shared between local files.
   - To add a theme: add it to THEMES and write a
     :root[data-theme="<id>"] block in styles.css (section 7). */
(function () {
  var THEMES = [
    { id: 'classic', label: 'Classic' },
    { id: 'modern', label: 'Modern' },
    { id: 'mono', label: 'Monochrome' }
  ];
  var KEY = 'cheatsheet-theme';
  var root = document.documentElement;

  function valid(id) { return THEMES.some(function (t) { return t.id === id; }); }
  function load() {
    try {
      var q = new URLSearchParams(location.search).get('theme');
      if (valid(q)) return q;
    } catch (e) { /* ignore */ }
    try {
      var s = localStorage.getItem(KEY);
      if (valid(s)) return s;
    } catch (e) { /* storage may be blocked */ }
    return THEMES[0].id;
  }
  function save(id) { try { localStorage.setItem(KEY, id); } catch (e) { /* ignore */ } }

  function tagLinks(id) {
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (!a.dataset.base) {
        var h = a.getAttribute('href');
        if (!/^[\w.\-]+\.html$/.test(h)) continue; // internal sheets only
        a.dataset.base = h;
      }
      a.setAttribute('href', a.dataset.base + '?theme=' + id);
    }
  }

  function apply(id) {
    root.setAttribute('data-theme', id);
    save(id);
    tagLinks(id);
  }

  // apply before first paint to avoid a flash of the wrong theme
  var current = load();
  root.setAttribute('data-theme', current);

  document.addEventListener('DOMContentLoaded', function () {
    var box = document.createElement('label');
    box.className = 'theme-switch';
    box.appendChild(document.createTextNode('Theme '));
    var sel = document.createElement('select');
    sel.setAttribute('aria-label', 'Theme');
    THEMES.forEach(function (t) {
      var o = document.createElement('option');
      o.value = t.id; o.textContent = t.label;
      if (t.id === current) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function () { apply(sel.value); });
    box.appendChild(sel);
    document.body.appendChild(box);
    apply(current);
  });
})();

var textarea = document.getElementsByTagName('textarea')[0];

var defaults = CodeMirror.defaults;

var options = Object.assign({}, defaults, {
  lineNumbers: true,
  extraKeys: {"Ctrl-Space": "autocomplete"},
  mode: 'acorn'
});


var cm = CodeMirror.fromTextArea(textarea, options);

console.log(cm, options);
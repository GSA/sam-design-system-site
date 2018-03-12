import Prism from 'prismjs';

export function markdownLoader(markdownFile){
  let md = require('markdown-it')({
    highlight: function (str, lang) {
      if(lang && Prism.languages[lang]){
        try{
          return '<pre class="language-'+ lang +'"><code class="language-'+ lang +'">' +
          Prism.highlight(str, Prism.languages[lang]) +
          '</code></pre>';
        } catch (err) {}
      }
      return ''; 
    }
  });
  return md.render(markdownFile);
}
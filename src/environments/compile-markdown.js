const fs = require('fs')
const path = require('path')
const Prism = require('prismjs');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-typescript');
const ROOT = path.join(__dirname, '../assets/markdown/')
const EXT = '.txt'

const MarkdownIt = require('markdown-it')
const STATIC_DIR = path.join(__dirname, '../_static')
const DOCS_DIR = path.join(__dirname, '../_docs')

setup(ROOT)(STATIC_DIR, DOCS_DIR)

function setup (root) {

  removeExistingDocs(root)

  return function compile (...dirs) {

    return compileDirectories(...dirs);
    
  }

}

function compileDirectories (...dirs) {

  dirs.forEach(
    dir => pf(dir)
  )

}

function removeExistingDocs (root) {

  fs.stat(root, (err, stats) => {

    if (err) {

      createRoot(root)

      handleError(err)

    }

    if (stats) {

      let isDir = stats.isDirectory()

      if (isDir) {

        fs.readdir(root, (err, files) => {

          if (err) {

            handleError(err)

          }

          if (files) {

            removeFiles(files, root)

          }

        })

      }

    }

  })

}

function removeFiles (files, root) {

  files.forEach(
    file => {

      const fileName = path.join(root, file)

      fs.unlink(fileName, (err) => {

        if (err) {

          handleError(err)

        }

      })

  })

}

function createRoot (root) {

  fs.mkdir(root, (err) => {

    if (err) {

      handleError(err)

    }

  })

}

/**
 * Initialize MarkdownIt with the highlight function
 */
const md = MarkdownIt({ highlight: highlight })

function highlight (str, lang) {

  if (str.length < 1) {

    return ''

  }
  if(!lang){
    lang = 'html';
  }

  if (Prism.languages[lang]) {
    try {

      return '<pre class="language-'
        + lang
        + '"><code class="language-'
        + lang
        + '">'
        + Prism.highlight(str, Prism.languages[lang])
        + '</code></pre>';
    } catch (err) {

      return ''

    }

  }

  return ''

  /**
   * Required test cases:
   * - str.length < 1
   * - ( str.length > 1
   *     && (lang && Prism.languages[lang]) === true )
   * - ( str.length > 1
   *     && (lang && Prism.languages[lang]) === false )
   */

}

function pf (filePath) {

  if (typeof filePath === 'string') {

    fs.stat(filePath, (err, stats) => {

      if (err) {

        handleError(err)

      }

      if (stats) {

        const isFile = stats.isFile()
        const isDirectory = stats.isDirectory()

        if (isFile) {

          processFile(filePath)

        } else if (isDirectory) {

          readDirectory(filePath)
          
        }

      }

    })

  } else if (filePath instanceof Array) {

    filePath.forEach(
      file => pf(file)
    )

  }

}

function readDirectory (filePath) {

  fs.readdir(filePath, (err, files) => {

    if (err) {

      handleError(err)

    }

    if (files) {

      return pf(files.map( file => path.join(filePath, file)))
    }
  
    /**
     * Required test cases
     * - ( err, _ )
     * - ( _, files.length = 0 )
     * - ( _, files.length = 1 )
     * - ( _, files.length = 2+ )
     */
    
  });

}

function checkFileStat (file) {

  return fs.stat(file, (err, stat) => {

    if (err) {

      return handleError(err)

    }
    
    if (stat.isFile()) {

      return processFile(file)

    } else if (stat.isDirectory()) {

      return pf(file)

    } else {

      return

    }

  })

}

function processFile (file) {

  const ext = path.extname(file)
  
  if (ext === '.md') {
    
    const name = createFileName(file, ROOT)

    fs.readFile(file, (err, data) => {
      
      if (err) {
        handleError(err)
      }

      if (data) {

        const contents = md.render(data.toString())

        fs.writeFile(name, contents, handleError)
      }
    })

  } else {
    
    return
    
  }

  /**
   * Required test cases:
   * - File with .md ext
   * - File without .md ext
   */

}

function createFileName (file, root) {

  const parsed = path.parse(file)

  let rel = path.relative(root, parsed.dir);

  let spl = rel.split(path.sep).filter(str => str !== '..')
  let newFileName = parsed.name + EXT
  let newBaseName = spl.join('-') + '-' + newFileName

  return path.join(root, newBaseName)

  /**
   * Required test cases:
   * - file && root
   * - !file && root
   * - file && !root
   */

}

function handleError (error) {

  if (error) {
    console.log(error)
  }

}

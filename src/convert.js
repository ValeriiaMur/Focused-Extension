// making half of the letters in a word bold, currentky not used
function highlightText(sentenceText) {
  return sentenceText
    .split(' ')
    .map((word) => {
      // special case - hyphenated compound word, e.g. video-game
      if (word.includes('-')) {
        return word.split('-').map((component) => highlightText(component)).join('-')
      }
      const hasNumber = /\d/
      if (hasNumber.test(word)) {
        return word
      }
      const length = word.length
      let midPoint = 1
      if (length > 3) midPoint = Math.round(length / 2)
      const firstHalf = word.slice(0, midPoint)
      const secondHalf = word.slice(midPoint)
      const htmlWord = `<fr-bold class="fr-bold">${firstHalf}</fr-bold>${secondHalf}`
      return htmlWord
    })
    .join(' ')
}

function main() {
  // check if we have already highlighted the text
  const boldedElements = document.getElementsByTagName('fr-bold')
  if (boldedElements.length > 0) {
    // localStorage.setItem('highlighted', 'true')
    // document. getElementById ("slidePoints").checked = true ;
    for (const element of boldedElements) {
      element.classList.toggle('fr-bold')
    }
    return boldedElements.length;
  }

  // setting global styles
  var style = document.createElement('style')
  style.textContent = '.fr-bold { font-weight: bold !important; display: inline;}';
  // body p::first-line {font-weight: bold; font-size: 130%;}
  document.head.appendChild(style)

  let tags = ['p', 'h1','h2','h3', 'font', 'code', 'span', 'li', 'fr-big'];

  const parser = new DOMParser()
  tags.forEach((tag) => {
    for (let element of document.getElementsByTagName(tag)) {
      const n = parser.parseFromString(element.innerHTML, 'text/html')
      const textArrTransformed = Array.from(n.body.childNodes).map((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          return highlightText(node.nodeValue);
        }
        return node.outerHTML
      })
      element.innerHTML = textArrTransformed.join(' ')
    }
  })
  return boldedElements.length;
}


main()



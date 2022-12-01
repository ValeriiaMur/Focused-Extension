// making half of the letters in a word bold
function highlightText(sentenceText) {
  sentences = sentenceText.split(". ");

  sentences[0] = `<fr-big class="fr-big">${sentences[0]}</fr-big>`;
  return sentences.join(". ")
}

function main() {
  //check if we have already made text big
  const boldedElements = document.getElementsByTagName('fr-bold')
  if (boldedElements.length > 0) {
    for (const element of boldedElements) {
      element.classList.toggle('fr-bold')
    }
  }

  const bigElements = document.getElementsByTagName('fr-big')
  if (bigElements.length > 0) {
    for (const element of bigElements) {
      element.classList.toggle('fr-big')
    }
    return;
  }


  // setting global styles
  var style = document.createElement('style')
  style.textContent = '.fr-big {font-weight: bold; font-size: 130%;}';
  document.head.appendChild(style)

  let tags = ['p', 'h1', 'h2', 'h3', 'font', 'code', 'span', 'li', 'fr-bold'];

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
function modifyHtml() {
  const inputHtml = document.getElementById('inputHtml').value;

  // Create a DOM parser to work with the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(inputHtml, 'text/html');

  // Select all <img> tags and process their width and height attributes
  doc.querySelectorAll('img').forEach(img => {
    const originalWidth = img.width || img.getAttribute('width');
    const originalHeight = img.height || img.getAttribute('height');

    // Set width to 860
    img.setAttribute('width', '860');

    if (originalHeight) {
      // Remove height attribute if it exists to maintain aspect ratio
      // automatically
      img.removeAttribute('height');
    }
  });

  // Serialize the modified HTML back to a string
  const serializer = new XMLSerializer();
  const modifiedHtml = serializer.serializeToString(doc.body);

  // Display the modified HTML
  document.getElementById('outputHtml').value = modifiedHtml;
}

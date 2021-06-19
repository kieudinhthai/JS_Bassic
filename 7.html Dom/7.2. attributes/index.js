var headingElement = document.getElementById('heading-test')
console.log(headingElement);

headingElement.title = 'heading-test'
headingElement.setAttribute('values','heading-values')

console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('values'));
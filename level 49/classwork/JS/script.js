// 1) შექმენით რაიმე container div html'ში, ხოლო js'იდან შექმენით 1 პარაგრაფი, 1 ღილაკი და 1 image 
// ელემენტები და გამოიტანეთ container div'ში

const container = document.getElementById('container');
const paragraph = document.createElement('p');
const button = document.createElement('button');
const image = document.createElement('img');
const newParagraph = document.createElement('p');

const paragraphText = document.createTextNode('Hello JS !');
const buttonText = document.createTextNode('Click me!');
const newParagraphText = document.createTextNode('Paragraph 2');

paragraph.appendChild(paragraphText);
button.appendChild(buttonText);
newParagraph.appendChild(newParagraphText);

button.addEventListener('click', () => {
    alert('Hello World!');
});

image.src = 'https://i.ibb.co/QPF3Q3w/dca2c7e64c9c633856190910986f7747.png';
image.alt = 'Image';
image.style.width = '200px';

container.appendChild(paragraph);
container.appendChild(button);
container.appendChild(image);

// 2) ამოშალეთ ღილაკი
button.remove();

// 3) ჩაანაცვლეთ ფოტო ახალი პარაგრაფით
container.replaceChild(newParagraph, image);
newParagraph.style.color = 'red';

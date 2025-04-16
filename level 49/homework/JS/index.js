// 2) გააკეთეთ setInterval'ის მაგალითი
/*

let i = 0;
setInterval(() => {
    console.log(i);
    i++;
}, 2000);

*/

// 3) გააკეთეთ setTimeout'ის მაგალითი

/*
let i2 = 0;

setTimeout(() => {
    console.log(i2);
    i2++;
}, 1000);

*/

// 4) ივარჯიშეთ მეთოდებზე:
/*
createElement()
createTextNode()
appendChild()
removeChild()
replaceChild()
*/

document.getElementById('reloadBtn').addEventListener('click', function() {
  location.reload();
});

const container = document.getElementById('container');
const paragraph = document.createElement('p');
const paragraphText = document.createTextNode('Hello JS!');

paragraph.appendChild(paragraphText);
container.appendChild(paragraph);

// პარაგრაფი რომელიც ჩაანაცვლებს პირველ პარაგრაფს
const newParagraph = document.createElement('p');
const newParagraphText = document.createTextNode('new p');
newParagraph.appendChild(newParagraphText);

// უბრალოდ სტილები 
newParagraph.style.fontSize = '30px';
newParagraph.style.color = 'red';
newParagraph.style.fontFamily = 'Courier New, Courier, monospace';

// პირველი პარაგრაფის შეცვლა მეორეთი 2 წამში
setTimeout(() => {
  container.replaceChild(newParagraph, paragraph);
}, 2000);

// პარაგრაფის მოშორება / წაშლა 4 წამში
setTimeout(() => {
  container.removeChild(newParagraph);
}, 4000);


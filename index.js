/* Enter the code to remove the main node element under this comment */
//document.querySelector('main').remove();
/* Create your new element here and assign it to newHeader */

function showWelcome() {
    const newHeader = document.createElement('h1');
    newHeader.id="victory";
    newHeader.innerText="Anat the champion!";
    document.body.appendChild(newHeader);
    const newParagraph = document.createElement('p1');
    newParagraph.innerText="wellcome";
    document.body.appendChild(newParagraph);
}

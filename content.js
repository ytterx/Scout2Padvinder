function replaceText(elementForSearchingIn, textToReplace, newText) {
    let regex = new RegExp(textToReplace, "gi");

    if(elementForSearchingIn.hasChildNodes()){
        elementForSearchingIn.childNodes.forEach(function(node) {
            replaceText(node, textToReplace, newText)
        });
    } else if(elementForSearchingIn.nodeType===Text.TEXT_NODE){
        elementForSearchingIn.textContent=elementForSearchingIn.textContent.replace(regex, newText);
    }
}

replaceText(document.body, 'Scouting', 'Padvinderij');
replaceText(document.body, 'Scout', 'Padvinder');
replaceText(document.body, 'scouting', 'padvinderij');
replaceText(document.body, 'scout', 'padvinder');
// Count all brushes in active document
if (app.documents.length > 0) {
    numberOfBrushes = app.activeDocument.brushes.length;
    alert(numberOfBrushes);
}

// (() => {
//     let var1 = 'variable1';
//     console.log(var1);
//     const hasDocumentObj = typeof document != 'undefined';
//     const hasCookie = hasDocumentObj && !!document.cookie;
//     console.log(hasDocumentObj, hasCookie);
// })();
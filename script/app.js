(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
	gameBoard = document.querySelector('.puzzle-board'),
	dropZones = document.querySelectorAll('.drop-zone'),
	dropPuzzle = document.querySelectorAll('.puzzle-pieces img'),

	puzzleParent = document.querySelector('.puzzle-pieces');
	// x1


const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

function changeImageSet() {

pieceNames.forEach((piece, index) =>{
	dropPuzzle[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
	dropPuzzle[index].id = `${piece + this.dataset.puzzleref}`;
}); 
gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
 //debugger;
}

function resetPuzzlePieces(){
	for (let i=0; i < dropZones.length; i++){
		if(dropZones[i].childNodes.length != 0)
		puzzleParent.appendChild(dropZones[i].firstChild);
	}
}
//x2

function allowDrag(event) {
	console.log ('started dragging an image');


event.dataTransfer.setData("text/plain", this.id);
}

function allowDragOver(event) {
	event.preventDefault();
	console.log ('dragged over a drop zone');
}
function allowDrop(event) {

  let currentImage = event.dataTransfer.getData("text/plain");

 if (this.childNodes.length === 0){

 	this.appendChild(document.querySelector(`#${currentImage}`));
 }
 else if (this.childNodes.length > 0){
 	this.appendChild(document.querySelector(`#${currentImage}`));

 	puzzleParent.appendChild(this.firstChild);
 }
 }

puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
puzzleButtons.forEach(button => button.addEventListener('click', resetPuzzlePieces));

dropPuzzle.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {

 zone.addEventListener('dragover', allowDragOver);
zone.addEventListener('drop', allowDrop);

});

changeImageSet.call(puzzleButtons[0]);

})();

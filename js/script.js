var filters = document.getElementById('background');
var element = document.getElementById('content');
document.getElementById('filters').addEventListener('change', dropdownStyles);

function dropdownStyles() {
	var value = event.target.value;
	var style = event.target.id;

	element.style[style] = value;
}

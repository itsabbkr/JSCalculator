const output = document.getElementById("output");

// DISPLAY FUNCTION
function disp(val) {
	output.value += val;
}

// DELETE FUNCTION
function del() {
	output.value = output.value.slice(0, -1);
}

// CLEAR FUNCTION
function clr() {
	output.value = "";
}

// RESULT FUNCTION
function calc() {
	output.value = eval(output.value);
}

var acc = "";

op_true = false;

first = true;

function numberBtnHandler(number)
{
	acc = accum(number);
	setText(getText() + number)
	op_true = false;
}

function setText(text)
{
	document.getElementById("textBox").value = text;	
}

function getText()
{
	return document.getElementById("textBox").value;
}

function reset()
{
	setText("");
}

function all_reset()
{
	setText("");
	acc = "";
	op_true = false;
	first = true;
	return acc;
}

function calculate()
{
	if (first == true) {
		alert("error");
	}
	else
		first = false;
		var result = eval(acc);
		setText(result);
}

function accum(anything)
{
	acc += anything;
	return acc;
}

function add()
{
	reset();
	if (op_true == true) {
		alert("error");
		reset();
	}
	else
		accum("+");
		op_true = true;
		first = false;
}

function sub()
{
	reset();
	if (first == true)
	{
		setText("-");
		accum("-");
		op_true = true;
		first = false;
	}
	else
		if (op_true == true) {
			alert("error");
			reset();
		}
		else
			accum("-");
			op_true = true;
			first = false;
}

function div()
{
	reset();
	if (op_true == true) {
		alert("error");
		reset();
	}
	else
		accum("/");
		op_true = true;
		first = false;
}

function mul()
{
	reset();
	if (op_true == true) {
		alert("error");
		reset();
	}
	else
		accum("*");
		op_true = true;
		first = false;
}

function jum()
{
	if (op_true == true) {
		alert("error");
		reset();
	}
	else
		setText(getText() + ".")
		accum(".");
		op_true = true;
		first = false;
}

const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const priority = document.getElementById("priority");
const category = document.getElementById("category");

form.addEventListener("submit", e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const titleValue = title.value.trim();
	const authorValue = author.value.trim();
	const priorityValue = priority.value.trim();
	const categoryValue = category.value.trim();

	if (titleValue === "") {
		//show error
		//add error class
		setErrorFor(title, "Wpisz co najmniej 1 znak");
	} else {
		setSuccessFor(title);
	}

	if (authorValue.length < 3) {
		setErrorFor(author, "Wpisz co najmniej 3 znaki");
	} else {
		setSuccessFor(author);
	}

	if (priorityValue === "") {
		setErrorFor(priority, "Priorytet nie może być pusty");
	} else {
		setSuccessFor(priority);
	}

	if (categoryValue === "") {
		setErrorFor(category, "Kategoria książki nie może być pusta");
	} else {
		setSuccessFor(category);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");

	small.innerText = message;

	formControl.className = "form-control error";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

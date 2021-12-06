const button = document.querySelector("button");
const evenTd = document.querySelector(".even");
const oddTd = document.querySelector('.odd');

const evenNumbers = [];
const oddNumbers = [];

const render = () => {
	evenTd.textContent = "";
	oddTd.textContent = "";
	for (i = 0; i < 1; i++) {
		const number = Math.floor(Math.random() * 100 + 1);

		if (number % 2 === 0) {
			evenNumbers.push(number);
		} else {
			oddNumbers.push(number);
		}
	}

	const evenP = document.createElement("p");
	evenP.textContent = "";
	evenTd.appendChild(evenP);
	// p.textContent = number;
	const sortedEvenArray = evenNumbers.sort();
	evenP.textContent = sortedEvenArray;

	const oddP = document.createElement("p");
	oddP.textContent = "";
	oddTd.appendChild(oddP);
	// p.textContent = number;
	const sortedOddArray = oddNumbers.sort();
	oddP.textContent = sortedOddArray;
};

button.addEventListener("click", render);

//użyj metody forEach

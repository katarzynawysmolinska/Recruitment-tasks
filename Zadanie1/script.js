document.addEventListener("DOMContentLoaded", () => {
	const button = document.querySelector("#generate-numbers");
	const evenTd = document.querySelector("#even");
	const oddTd = document.querySelector("#odd");

	const evenNumbers = [];
	const oddNumbers = [];

	const render = () => {
		evenTd.innerHTML = "";
		oddTd.innerHTML = "";

		let i = 0;
		const loopLength = 20;

		for (i; i < loopLength; i++) {
			const number = Math.floor(Math.random() * 100 + 1);

			if (number % 2 === 0) oddNumbers.push(number);
			else evenNumbers.push(number);
		}

		const sortedOddArray = oddNumbers.sort((a, b) => (a > b ? 1 : -1));
		const sortedEvenArray = evenNumbers.sort((a, b) => (a > b ? 1 : -1));

	
		evenTd.innerHTML = `
		<ul>
		  ${sortedEvenArray.map(item => `<li>${item}</li>`).join("")}
		</ul>
		`;
		oddTd.innerHTML = `
		<ul>
		  ${sortedOddArray.map(item => `<li>${item}</li>`).join("")}
		</ul>
		`;
	};

	button.addEventListener("click", render);
});

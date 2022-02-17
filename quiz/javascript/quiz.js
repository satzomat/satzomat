// quiz ---------------------------------------------------

const quizContainer = document.getElementById('quiz');
const questions = document.querySelectorAll('.question');

// result functions ---------------------------------------

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', showResults);

function showResults() {
	
	const answerContainers = quizContainer.querySelectorAll('.answers');
	const scoreSpan = document.querySelector('#score');
	let numCorrect = 0;
	
	// for each question...
	questions.forEach( (currentQuestion, i) => {
		
		// find selected answer
		const answerContainer = answerContainers[i];
		const selector = `input[name=q${i+1}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
		
		// if answer is correct
		if (userAnswer === '1') {
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			/*answerContainers[i].style.color = 'lightgreen';*/
		}
		// if answer is wrong or blank
		else {
			// color the answers red
			/*answerContainers[i].style.color = 'red';*/
		}
	});
	
	// show number of correct answers out of total
	scoreSpan.innerHTML = `${numCorrect} / ${questions.length}`;
	
	// display results
	showNextSlide();
}

// slider functions ---------------------------------------

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showSlide(n) {
	slides[currentSlide].classList.remove('active-slide');
	slides[n].classList.add('active-slide');
	currentSlide = n;
	// first question slide
	if (currentSlide === 0) {
		previousButton.style.display = 'none';
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
		restartButton.style.display = 'none';
	}
	// before last question slide
	else if (currentSlide < slides.length-2) {
		previousButton.style.display = 'inline-block';
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
		restartButton.style.display = 'none';
	}
	// last question slide
	else if (currentSlide === slides.length-2) {
		previousButton.style.display = 'inline-block';
		nextButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
		restartButton.style.display = 'none';
	}
	// results slide
	else if (currentSlide === slides.length-1) {
		previousButton.style.display = 'none';
		nextButton.style.display = 'none';
		submitButton.style.display = 'none';
		restartButton.style.display = 'inline-block';
	}
}

function showNextSlide() {
	showSlide(currentSlide + 1);
}

function showPreviousSlide() {
	showSlide(currentSlide - 1);
}

// new quiz -----------------------------------------------

const restartButton = document.getElementById('restart');

restartButton.addEventListener('click', restart);

function restart() {
	const answers = quizContainer.querySelectorAll('input[type="radio"]');
	answers.forEach( (currentAnswer, i) => {
		currentAnswer.checked = false;
	});
	location.reload();
}

// start --------------------------------------------------

// begin with first slide
showSlide(currentSlide);

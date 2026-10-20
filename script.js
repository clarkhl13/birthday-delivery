function showMessage() {
	document.getElementById("message").innerHTML = 
		"You found your FIRST birthday surprise 😏";
}


function openMessage(type) {
	const popup = document.getElementById("message-Popup");
	const title = document.getElementById("popupTitle");
	const text = document.getElementById("popupText");

	if (type === "overwhelmed") {
		title.innerText = "READ IF YOU FEEL OVERWHELMED";

		text.innerText = "God, please give Fedor peace when his mind feels too full and messy. Help him carry what he needs to carry and let go of what he doesn't. Give him rest, clarity, and the reminder that he doesn't have to have everything figured out tonight. (See Matthew 6:34) Please watch over him, even when he doesn't realize You're there. In Jesus' name, Amen."
}

	else if (type === "knocker") {
		title.innerText = "MYSTERY WORD";

		text.innerHTML = `
			<p>I thInk <u>one</u> thing I'd love is spending a normal <u>day</u> with you. I need <u>no</u> special plans. You could ediT something on your <u>screen</u> while I'm just there, soMewhere <u>between</u> the ordinary moments, watching <u>us</u> inevitably find Something to laugh about. I'd be perfectly happy just soaking in your awesomeness and watching you dO what you love.</p>

			<p><b>Unscramble them and enter the mystery word:</b></p>

			<input
				type="text" 
				id="mysteryAnswer"
				class="mystery-input" 
				placeholder="Mystery word...">
	
			<br><br>

			<button class="mystery-submit" onclick="checkMysteryWord()">
				SUBMIT ANSWER
			</button>

			<p id="mysteryResult"></p>

			<div id="reward" style="display:none;">
				<p>
					Unfortunately... you got it right. 😂<br> 
					Your reward:
				</p>

				<img
					src="reward.jpg"
					style="max-width:100%; border-radius:12px;">
			</div>
		`;
}

console.log("POPUP:", document.getElementById("messagePopup"));
console.log("TITLE:", document.getElementById("popupTitle"));
console.log("TEXT:", document.getElementById("popupText"));
document.getElementById("messagePopup").style.display = "flex";
}


function closeMessage() {
	document.getElementById("messagePopup").style.display = "none";
}

function checkMysteryWord() {
	const answer = document.getElementById("mysteryAnswer").value
		.trim()
		.toLowerCase();

	const result = document.getElementById("mysteryResult");
	const reward = document.getElementById("reward");

	if (answer === "moist") {
		result.innerText = "CORRECT! 😂 Unfortunately...you got it right! Your reward:";
		
		reward.innerHTML = `
			<img src="reward.jpg"
				style="max-width:100%; border-radius:12px; margin-top:15px;">
		`;
reward.querySelector("button")?.remove();

const closeButton = document.createElement("button");
closeButton.innerText = "❤️ CLOSE & RETURN TO POSTCARDS";
closeButton.className = "unwrap-button";
closeButton.style.marginTop = "20px";
closeButton.style.marginBottom = "25px";
closeButton.onclick = closeMessage;
reward.appendChild(closeButton);
		reward.style.display = "block";

	} else {
		result.innerText = "Nope! Try again, Fart Knocker! 😂";
		reward.style.display = "none"; 
}

	}

function showMemoryHint() {
	const hint = document.getElementById("memory-hint");
	hint.classList.add("show");
}

function toggleMemory(id, button) {
	const memory = document.getElementById(id);
	
	memory.classList.toggle("open");

	if (memory.classList.contains("open")) {
		button.innerHTML = "CLICK TO CLOSE⬆️";
	} else {
		button.innerHTML = "CLICK TO CONTINUE ⬇️";
	}

}

function playBirthdaySong() {
	const song = document.getElementById("birthdaySong");
	const button = document.getElementById("birthdayBtn");

	song.currentTime = 0;
	
	song.play()
		.then(() => {
			button.innerHTML = "🔊 Playing...";
		})
		.catch(error => {
			console.error("Audio couldn't play:", error);
		});
	song.onended = function() {
		button.innerHTML = 'Play again <span class="icon">🎉</span>';
	};
}
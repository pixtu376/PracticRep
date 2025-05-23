const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	't', 'u', 'v', 'w', 'x', 'y', 'z']
const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
	'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let oldText = ''
let newText = ''

document.getElementById('Btn').addEventListener('click', function () {
	oldText = document.getElementById('InputText').value
	newText = ''

	for (let i = 0; i < oldText.length; i++) {
		const char = oldText[i]
		let isLower = false
		let isUpper = false
		let index = -1

		let j = 0
		while (j < letters.length && index === -1) {
			if (letters[j] === char) {
				isLower = true
				index = j
			}
			j++
		}

		if (index === -1) {
			j = 0
			while (j < bigLetters.length && index === -1) {
				if (bigLetters[j] === char) {
					isUpper = true
					index = j
				}
				j++
			}
		}

		if (isLower || isUpper) {
			let newIndex = index + 13
			if (newIndex >= 26) {
				newIndex -= 26
			}
			newText += isLower ? letters[newIndex] : bigLetters[newIndex]
		} else {
			newText += char
		}
	}

	document.getElementById('FirstTextBlock').textContent = 'Было: ' + oldText
	document.getElementById('SecondTextBlock').textContent = 'Стало: ' + newText
	document.getElementById('input-container').style.display = 'none'
	document.getElementById('BlocksWithText').style.display = 'flex'
})

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let oldText = '';
let newText = '';

document.getElementById('Btn').addEventListener('click', function () {
    oldText = document.getElementById('InputText').value;

    for (let i = 0; i < oldText.length; i++) {
        const char = oldText[i];
        
        if (letters.includes(char)) {
            let index = letters.indexOf(char) + 13;
            if (index >= 26) {
				index -= 26
			}
            newText += letters[index];
        } else if (bigLetters.includes(char)) {
            let index = bigLetters.indexOf(char) + 13;
            if (index >= 26) {
                index -= 26;
            }
            newText += bigLetters[index];
        } else {
            newText += char;
        }
    }

    document.getElementById('FirstTextBlock').textContent = 'Было: ' + oldText;
    document.getElementById('SecondTextBlock').textContent = 'Стало: ' + newText
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('BlocksWithText').style.display = 'flex'
});
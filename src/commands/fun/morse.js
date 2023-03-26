module.exports = {
	async execute(yukie, message, args, data) {
		const array = args.join(' ').replace(/ /g, '/').split(/(?!$)/u);

		const morse = {
			A: '.-',
			À: '.--.-',
			Á: '.--.-',
			Â: '.--.-',
			Ã: '.--.-', 
			B: '-...',
			C: '-.-.',
			Ç: '-.-..',
			D: '-..',
			E: '.',
			È: '.-..-',
			É: '..-..',
			Ê: '-..-.',
			F: '..-.',
			G: '--.',
			H: '....',
			I: '..',
			Ì: '.---.',
			Í: '#',
			Î: '#',
			J: '.---',
			K: '-.-',
			L: '.-..',
			M: '--',
			N: '-.',
			O: '---',
			Ó: '---.',
			Ò: '---.',
			Õ: '#',
			P: '.--.',
			Q: '--.-',
			R: '.-.', 
			S: '...', 
			T: '-', 
			U: '..-',
			Ù: '..--',
			Ú: '#',
			Û: '#',
			V: '...-', 
			W: '.--',
			X: '-..-', 
			Y: '-.--', 
			Z: '--..',
			1: '.----',
			2: '..---',
			3: '...--',
			4: '....-',
			5: '.....',
			6: '-....',
			7: '--...',
			8: '---..',
			9: '----.',
			0: '-----',
			'\'': '.----.',
			'!': '-.-.--',
			'@': '.--.-.',
			'#': '#',
			'$': '...-..-',
			'%': '%',
			'¨': '¨',
			'&': '.-...',
			'*': '*',
			'(': '-.--.',
			')': '-.--.-',
			'[': '[',
			']': ']',
			'°': '°',
			'-': '-....-',
			'_': '..--.-',
			'=': '-...-',
			'+': '.-.-.',
			'§': '§',
			'ª': 'ª',
			'º': 'º',
			'{': '{',
			'}': '}',
			"'": '.----.',
			'`': '`',
			'"': '.-..-.',
			'´': '´',
			',': '--..--',
			'.': '.-.-.-',
			';': '-.-.-.',
			':': '---...',
			'~': '~',
			'^': '^',
			'<': '<',
			'>': '>',
			'¬': '¬',
			'¢': '¢',
			'£': '£',
			'³': '³',
			'²': '²',
			'¹': '¹',
			'?': '..--..',
			'¿': '..-.-',
			'¡': '--...-'
		}
		array.forEach((l, i) => {
			if (l === '/') return;
			s = array[i].toUpperCase();
			if (morse[s]) array[i] = morse[s];
		});

		message.channel.send(array.join(' '));
	}
}

module.exports.help = {
	category: 'fun',
    description: 'Converte palavras em código morse e vise versa',
    usage: `<frase>`
}
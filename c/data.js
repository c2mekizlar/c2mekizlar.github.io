const \u0076\u0069\u0064\u0065\u006F\u0050\u006C\u0061\u0079\u0065\u0072 = document.getElementById('\u0076\u0069\u0064\u0065\u006F\u0050\u006C\u0061\u0079\u0065\u0072');
const \u0076\u0069\u0064\u0065\u006F\u0050\u0061\u0072\u0074\u0073 = [
	'\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0064\u0072\u006F\u0070\u0062\u006F\u0078\u002E\u0063\u006F\u006D\u002F\u0073\u0063\u006C\u002F\u0066\u0069\u002F\u0065\u0069\u0062\u006A\u0072\u006D\u0065\u0062\u0063\u0069\u0078\u006F\u0079\u0066\u0064\u0068\u0066\u0067\u0079\u0034\u0033\u002F\u0066\u002E\u0070\u0061\u0072\u0074\u0031\u003F\u0072\u006C\u006B\u0065\u0079\u003D\u0031\u0067\u0062\u006B\u0062\u0067\u006B\u0079\u0078\u006C\u006D\u006F\u0070\u0031\u0038\u0062\u0076\u0035\u0033\u0064\u0075\u0062\u0032\u0068\u0074\u0026\u0073\u0074\u003D\u0072\u0063\u0072\u006B\u0038\u0072\u006C\u0073\u0026\u0064\u006C\u003D\u0030',
	'\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0064\u0072\u006F\u0070\u0062\u006F\u0078\u002E\u0063\u006F\u006D\u002F\u0073\u0063\u006C\u002F\u0066\u0069\u002F\u006A\u006D\u0031\u0037\u0075\u0067\u0073\u006F\u0065\u0069\u0063\u0062\u006D\u0068\u0073\u006B\u0078\u0073\u006F\u0067\u0077\u002F\u0066\u002E\u0070\u0061\u0072\u0074\u0032\u003F\u0072\u006C\u006B\u0065\u0079\u003D\u0078\u0034\u0072\u0068\u0030\u0063\u0064\u0067\u0077\u0065\u0033\u0079\u0031\u006E\u0071\u0039\u0067\u006B\u0038\u0066\u0061\u0034\u0073\u007A\u006D\u0026\u0073\u0074\u003D\u0074\u0079\u0063\u0076\u0062\u0061\u006A\u0032\u0026\u0064\u006C\u003D\u0030',
];

function \u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0044\u0072\u006F\u0070\u0062\u006F\u0078\u004C\u0069\u006E\u006B(link) {
	let \u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B = link.replace('\u0077\u0077\u0077\u002E\u0064\u0072\u006F\u0070\u0062\u006F\u0078\u002E\u0063\u006F\u006D', '\u0077\u0077\u0077\u002E\u0064\u006C\u002E\u0064\u0072\u006F\u0070\u0062\u006F\u0078\u0075\u0073\u0065\u0072\u0063\u006F\u006E\u0074\u0065\u006E\u0074\u002E\u0063\u006F\u006D');

	if (\u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B.\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073('\u0064\u006C\u003D\u0030')) {
		\u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B = \u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B.replace('\u0064\u006C\u003D\u0030', '\u0064\u006C\u003D\u0031');
	} else if (!\u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B.\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073('\u0064\u006C\u003D\u0031')) {
		\u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B += (\u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B.\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073('\u003F') ? '\u0026': '\u003F') + '\u0064\u006C\u003D\u0031';
	}

	return \u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0065\u0064\u004C\u0069\u006E\u006B;
}

let \u0063\u006F\u006D\u0062\u0069\u006E\u0065\u0064\u0042\u006C\u006F\u0062;

function \u0063\u006F\u006D\u0062\u0069\u006E\u0065\u0050\u0061\u0072\u0074\u0073\u0041\u006E\u0064\u0050\u006C\u0061\u0079() {
	const \u0062\u006C\u006F\u0062\u0050\u0061\u0072\u0074\u0073 = [];

	const \u0066\u0065\u0074\u0063\u0068\u0050\u0072\u006F\u006D\u0069\u0073\u0065\u0073 = \u0076\u0069\u0064\u0065\u006F\u0050\u0061\u0072\u0074\u0073.\u006D\u0061\u0070(\u0070\u0061\u0072\u0074 => {
		const \u0064\u0069\u0072\u0065\u0063\u0074\u004C\u0069\u006E\u006B = \u0063\u006F\u006E\u0076\u0065\u0072\u0074\u0044\u0072\u006F\u0070\u0062\u006F\u0078\u004C\u0069\u006E\u006B(\u0070\u0061\u0072\u0074);
		return \u0066\u0065\u0074\u0063\u0068(\u0064\u0069\u0072\u0065\u0063\u0074\u004C\u0069\u006E\u006B).\u0074\u0068\u0065\u006E(\u0072\u0065\u0073\u0070\u006F\u006E\u0073\u0065 => \u0072\u0065\u0073\u0070\u006F\u006E\u0073\u0065.\u0062\u006C\u006F\u0062());
	});

	\u0050\u0072\u006F\u006D\u0069\u0073\u0065.all(\u0066\u0065\u0074\u0063\u0068\u0050\u0072\u006F\u006D\u0069\u0073\u0065\u0073)
	.\u0074\u0068\u0065\u006E(\u0062\u006C\u006F\u0062\u0073 => {
		\u0062\u006C\u006F\u0062\u0073.\u0066\u006F\u0072\u0045\u0061\u0063\u0068(\u0062\u006C\u006F\u0062 => \u0062\u006C\u006F\u0062\u0050\u0061\u0072\u0074\u0073.push(\u0062\u006C\u006F\u0062));
		\u0063\u006F\u006D\u0062\u0069\u006E\u0065\u0064\u0042\u006C\u006F\u0062 = new \u0042\u006C\u006F\u0062(\u0062\u006C\u006F\u0062\u0050\u0061\u0072\u0074\u0073, {
			\u0074\u0079\u0070\u0065: '\u0076\u0069\u0064\u0065\u006F\u002F\u0071\u0075\u0069\u0063\u006B\u0074\u0069\u006D\u0065'
		});
		\u0076\u0069\u0064\u0065\u006F\u0050\u006C\u0061\u0079\u0065\u0072.\u0073\u0072\u0063 = \u0055\u0052\u004C.\u0063\u0072\u0065\u0061\u0074\u0065\u004F\u0062\u006A\u0065\u0063\u0074\u0055\u0052\u004C(\u0063\u006F\u006D\u0062\u0069\u006E\u0065\u0064\u0042\u006C\u006F\u0062);
	})
	.\u0063\u0061\u0074\u0063\u0068(\u0065\u0072\u0072\u006F\u0072 => {
		console.error('\u0048\u0061\u0074\u0061\u0020\u006F\u006C\u0075\u015F\u0074\u0075\u003A', \u0065\u0072\u0072\u006F\u0072);
	});
}

window.\u006F\u006E\u006C\u006F\u0061\u0064 = \u0063\u006F\u006D\u0062\u0069\u006E\u0065\u0050\u0061\u0072\u0074\u0073\u0041\u006E\u0064\u0050\u006C\u0061\u0079;

\u0076\u0069\u0064\u0065\u006F\u0050\u006C\u0061\u0079\u0065\u0072.addEventListener('\u006C\u006F\u0061\u0064\u0065\u0064\u006D\u0065\u0074\u0061\u0064\u0061\u0074\u0061', function() {
	let \u0064\u006D\u0063\u0061\u0042\u0061\u006E\u006E\u0065\u0072 = document.querySelector('\u002E\u0064\u006D\u0063\u0061\u002D\u0062\u0061\u006E\u006E\u0065\u0072');
	let \u0076\u0069\u0064\u0065\u006F\u0041\u006C\u006C\u0050\u006C\u0061\u0079\u0065\u0072 = document.querySelector('\u002E\u0076\u0069\u0064\u0065\u006F');
	\u0064\u006D\u0063\u0061\u0042\u0061\u006E\u006E\u0065\u0072.remove();
	\u0076\u0069\u0064\u0065\u006F\u0041\u006C\u006C\u0050\u006C\u0061\u0079\u0065\u0072.\u0073\u0074\u0079\u006C\u0065.\u0066\u0069\u006C\u0074\u0065\u0072 = '\u006E\u006F\u006E\u0065';
	\u0076\u0069\u0064\u0065\u006F\u0041\u006C\u006C\u0050\u006C\u0061\u0079\u0065\u0072.\u0073\u0074\u0079\u006C\u0065.\u0074\u0072\u0061\u006E\u0073\u0069\u0074\u0069\u006F\u006E = '\u0033\u0030\u0030\u006D\u0073\u0020\u0061\u006C\u006C';
});
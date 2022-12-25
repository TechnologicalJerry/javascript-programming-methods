function xmas(height) {
    return Array.from({ length: height + 1 }, (v, i) => {
        return i === height
            ? '*'.padStart(Math.round((2 * i) / 2), ' ')
            : '*'.repeat(2 * i + 1).padStart(2 * i + height - i, ' ');
    }).join('\n');
}

document.write(`<pre>${xmas(10)}</pre>`);


var x = 8;
for (let i = 0; i < x; i++) {
    for (let j = x - 1; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("^");
    }
    document.write("<br>");
}
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < (x * 2) - 3; j++) {
        document.write("&nbsp");
    }
    document.write("^<br>");
}
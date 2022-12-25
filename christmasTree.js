function xmas(height) {
    return Array.from({ length: height + 1 }, (v, i) => {
        return i === height
            ? '*'.padStart(Math.round((2 * i) / 2), ' ')
            : '*'.repeat(2 * i + 1).padStart(2 * i + height - i, ' ');
    }).join('\n');
}

document.write(`<pre>${xmas(10)}</pre>`);
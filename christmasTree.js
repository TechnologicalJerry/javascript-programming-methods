function xmas(height) {
    // add 1 more level for the trunk, e.g. height+1
    return Array.from({ length: height + 1 }, (v, i) => {
        return i === height
            // that's for the trunk of the tree
            ? '*'.padStart(Math.round((2 * i) / 2), ' ')
            // the actual tree "levels"
            : '*'.repeat(2 * i + 1).padStart(2 * i + height - i, ' ');
    }).join('\n');
}

document.write(`<pre>${xmas(10)}</pre>`);
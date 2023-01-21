function pointDirection(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

console.log(pointDirection(1, 0, 12, 0));
console.log(pointDirection(1, 0, 1, 10));
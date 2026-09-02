/** Math methods return numbers and do not mutate their arguments. */
export function runMath() {
 console.log("\n=== MATH METHODS ==="); const p=(n,v)=>console.log(n,v);
 // Rounding methods: abs/ceil/floor/round/trunc; normalize signed values and prices.
 p("rounding",[Math.abs(-4),Math.ceil(4.1),Math.floor(4.9),Math.round(4.5),Math.trunc(-4.9)]);
 // max/min/random return number; best score and random integer (0..9).
 p("range",[Math.max(3,8,2),Math.min(3,8,2),Math.floor(Math.random()*10)]);
 // pow/sqrt/cbrt/sign support powers, roots, and direction.
 p("powers",[Math.pow(2,3),Math.sqrt(81),Math.cbrt(27),Math.sign(-10)]);
 // trig/inverse trig use radians; atan2 gives an angle from x/y coordinates.
 p("trig",[Math.sin(Math.PI/2),Math.cos(0),Math.tan(Math.PI/4),Math.asin(1),Math.acos(1),Math.atan(1),Math.atan2(4,3)]);
 // hyperbolic and inverse variants return numbers; scientific calculations.
 p("hyperbolic",[Math.sinh(1),Math.cosh(1),Math.tanh(1),Math.asinh(1),Math.acosh(2),Math.atanh(.5)]);
 // exp/expm1/log/log10/log1p/log2 are exponential/log transforms.
 p("logs",[Math.exp(1),Math.expm1(1),Math.log(Math.E),Math.log10(100),Math.log1p(1),Math.log2(8)]);
 // hypot calculates Euclidean distance; clz32/fround/imul work with 32-bit numeric data.
 p("utilities",[Math.hypot(3,4),Math.clz32(1),Math.fround(1/3),Math.imul(0xffffffff,5)]);
}

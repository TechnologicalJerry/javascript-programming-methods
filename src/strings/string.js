/** String methods: strings are immutable; every transforming call returns a new string. */
export function runStrings() {
  console.log("\n=== STRING METHODS ===");
  const text = "Hello JavaScript"; const emoji = "A😀"; const messy = "  Café  ";
  // at(index) — relative character lookup; syntax: text.at(-1); returns string|undefined; last character.
  console.log("at", text.at(-1));
  // charAt(index) — character lookup; syntax: text.charAt(1); returns string; UI letter.
  console.log("charAt", text.charAt(1));
  // charCodeAt(index) — UTF-16 unit; syntax: text.charCodeAt(0); returns number; legacy encoding.
  console.log("charCodeAt", text.charCodeAt(0));
  // codePointAt(index) — Unicode point; syntax: emoji.codePointAt(1); returns number|undefined; emoji-safe inspection.
  console.log("codePointAt", emoji.codePointAt(1));
  // concat(...strings) — joins text; syntax: text.concat("!"); returns string; message building.
  console.log("concat", text.concat("!"));
  // endsWith/search checks suffix; returns boolean; filename validation.
  console.log("endsWith", text.endsWith("Script"), "startsWith", text.startsWith("Hello"), "includes", text.includes("Java"));
  // indexOf/lastIndexOf find positions; returns index or -1; includes is clearer for a yes/no question.
  console.log("indexes", text.indexOf("a"), text.lastIndexOf("a"), "includes?", text.includes("Type"));
  // match(regex) — matches; returns array|null; extract words. matchAll(global regex) returns iterator; search returns index.
  console.log("match", text.match(/Java\w+/), "matchAll", [..."a1 b2".matchAll(/\w(\d)/g)].map(m => m[1]), "search", text.search(/Script/));
  // replace changes first string match; replaceAll changes all; both return a new string; sanitize labels.
  console.log("replace", "red red".replace("red", "blue"), "replaceAll", "red red".replaceAll("red", "blue"));
  // slice supports negative offsets; substring swaps endpoints and treats negatives as 0; both return strings.
  console.log("slice", text.slice(-10), "substring", text.substring(6, 16), "split", text.split(" "));
  // trim/trimStart/trimEnd remove whitespace; return string; normalize form fixes equivalent accents.
  console.log("trim", messy.trim(), messy.trimStart(), messy.trimEnd(), "normalize", messy.normalize("NFC"));
  // case methods return strings; locale variants use language rules (Turkish dotted I).
  console.log("case", text.toLowerCase(), text.toUpperCase(), "İ".toLocaleLowerCase("tr"), "istanbul".toLocaleUpperCase("tr"));
  // padStart/padEnd/repeat return strings; invoice fields and separators.
  console.log("padding", "42".padStart(5, "0"), "OK".padEnd(5, "."), "-".repeat(5));
  // localeCompare returns negative/zero/positive; sort names with local conventions.
  console.log("localeCompare", "ä".localeCompare("z", "de"));
  // valueOf/toString return the primitive string; useful when working with String objects.
  console.log("primitive", text.valueOf(), text.toString());
}

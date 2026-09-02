/** Intl formats user-facing values according to locale. Methods below return strings, arrays, or option objects. */
export function runIntl() {
 console.log("\n=== INTERNATIONALIZATION ==="); const n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}); const d=new Intl.DateTimeFormat("en-GB",{dateStyle:"medium"});
 // NumberFormat format/formatToParts/formatRange/formatRangeToParts/resolvedOptions; invoice currencies.
 console.log("number",n.format(1234.5),n.formatToParts(12.5),n.formatRange(1,2),n.formatRangeToParts(1,2),n.resolvedOptions().currency);
 // DateTimeFormat counterparts; localized booking dates.
 console.log("date",d.format(new Date("2025-01-01")),d.formatToParts(new Date("2025-01-01")),d.formatRange(new Date("2025-01-01"),new Date("2025-01-03")),d.formatRangeToParts(new Date("2025-01-01"),new Date("2025-01-03")),d.resolvedOptions().locale);
 // Collator compare/resolvedOptions return sort result/options; language-aware names.
 const c=new Intl.Collator("de");console.log("collator",["z","ä"].sort(c.compare),c.resolvedOptions().locale);
 // PluralRules select/selectRange/resolvedOptions return category/options; quantity labels.
 const p=new Intl.PluralRules("en");console.log("plural",p.select(1),p.selectRange(1,2),p.resolvedOptions().locale);
 // RelativeTimeFormat format/formatToParts/resolvedOptions; activity feed.
 const r=new Intl.RelativeTimeFormat("en",{numeric:"auto"});console.log("relative",r.format(-1,"day"),r.formatToParts(-3,"day"),r.resolvedOptions().locale);
 // ListFormat format/formatToParts/resolvedOptions; human-readable cart lists.
 const l=new Intl.ListFormat("en",{style:"long",type:"conjunction"});console.log("list",l.format(["tea","milk","bread"]),l.formatToParts(["tea","milk","bread"]),l.resolvedOptions().locale);
}

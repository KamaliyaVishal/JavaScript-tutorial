/**
 * ================================================================
 * JAVASCRIPT TYPE CONVERSION — NORMAL CASES & EDGE CASES
 * ================================================================
 * Run with: node javascript-type-conversion.js
 *
 * Covers:
 *  1. Number <-> String
 *  2. Boolean conversions and truthy/falsy values
 *  3. null, undefined, NaN, Infinity
 *  4. Number(), parseInt(), parseFloat()
 *  5. Arrays, objects, Date
 *  6. Implicit coercion (+, -, *, /, comparisons, logical operators)
 *  7. BigInt and Symbol
 *  8. JSON.stringify() edge cases
 *
 * Note: Some examples intentionally demonstrate unusual behavior.
 * ================================================================
 */

// Strict mode declaration for better error handling and to avoid accidental globals.
"use strict";

const LINE = "=".repeat(84);
const THIN_LINE = "-".repeat(84);

function heading(title) {
  console.log("\n" + LINE);
  console.log("  " + title);
  console.log(LINE);
}

function section(title) {
  console.log("\n" + THIN_LINE);
  console.log("  " + title);
  console.log(THIN_LINE);
}

function showTable(rows) {
  console.table(rows);
}

function describe(value) {
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "bigint") return `${value}n`;
  if (typeof value === "symbol") return value.toString();
  if (value === undefined) return "undefined";
  if (value === null) return "null";
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch {
      return Object.prototype.toString.call(value);
    }
  }
  return String(value);
}

function resultRow(expression, result, note = "") {
  return {
    Expression: expression,
    Result: describe(result),
    Type: typeof result,
    Note: note
  };
}

heading("JAVASCRIPT TYPE CONVERSION — COMPLETE CONSOLE REFERENCE");

/* ================================================================
 * 1. NUMBER TO STRING
 * ================================================================ */
section("1. Number → String");

showTable([
  resultRow('String(42)', String(42)),
  resultRow('(42).toString()', (42).toString()),
  resultRow('String(-10)', String(-10)),
  resultRow('String(3.14)', String(3.14)),
  resultRow('String(0)', String(0)),
  resultRow('String(Infinity)', String(Infinity)),
  resultRow('String(NaN)', String(NaN)),
  resultRow('`${42}`', `${42}`, "Template literal")
]);

/* ================================================================
 * 2. STRING TO NUMBER
 * ================================================================ */
section("2. String → Number: Number(), parseInt(), parseFloat()");

const numericStrings = [
  "123", "-10", "3.14", "", "   ", "123abc", "abc123",
  "12.75abc", "0x10", "0b101", "0o10", "Infinity",
  "1e3", "1.2.3", ".", "+", "1e", "-Infinity"
];

showTable(numericStrings.map(input => ({
  Input: JSON.stringify(input),
  "Number()": String(Number(input)),
  "parseInt(…, 10)": String(parseInt(input, 10)),
  "parseFloat()": String(parseFloat(input))
})));

/* ================================================================
 * 3. BOOLEAN CONVERSIONS
 * ================================================================ */
section("3. Number / String / Other Values → Boolean");

const booleanInputs = [
  42, -1, 1, 0, -0, NaN, Infinity,
  "", "hello", "true", "false", "0", " ",
  null, undefined, [], [0], {}, 0n
];

showTable(booleanInputs.map(value => ({
  Input: describe(value),
  "Input Type": typeof value,
  "Boolean(value)": String(Boolean(value)),
  Truthiness: Boolean(value) ? "TRUTHY" : "FALSY"
})));

console.log("Rule: Only false, 0, -0, 0n, empty string, null, undefined, and NaN are falsy.");

/* ================================================================
 * 4. BOOLEAN TO NUMBER / STRING
 * ================================================================ */
section("4. Boolean → Number / String");

showTable([
  resultRow("Number(true)", Number(true)),
  resultRow("Number(false)", Number(false)),
  resultRow("String(true)", String(true)),
  resultRow("String(false)", String(false)),
  resultRow("true.toString()", true.toString()),
  resultRow('("false" === "true")', ("false" === "true"),
    'Compare text explicitly; Boolean("false") is true')
]);

/* ================================================================
 * 5. NULL, UNDEFINED, NAN, INFINITY
 * ================================================================ */
section("5. Special Values: null, undefined, NaN, Infinity");

showTable([
  resultRow("String(null)", String(null)),
  resultRow("String(undefined)", String(undefined)),
  resultRow("Number(null)", Number(null)),
  resultRow("Number(undefined)", Number(undefined)),
  resultRow("Boolean(null)", Boolean(null)),
  resultRow("Boolean(undefined)", Boolean(undefined)),
  resultRow("Number(NaN)", Number(NaN)),
  resultRow("Boolean(NaN)", Boolean(NaN)),
  resultRow("String(NaN)", String(NaN)),
  resultRow("typeof null", typeof null, "Historical JavaScript behavior"),
  resultRow("typeof NaN", typeof NaN, "NaN has type number"),
  resultRow("Number.isNaN(NaN)", Number.isNaN(NaN)),
  resultRow("Number.isFinite(Infinity)", Number.isFinite(Infinity))
]);

/* ================================================================
 * 6. INVALID NUMBERS AND NUMBER CHECKS
 * ================================================================ */
section("6. Invalid Numeric Values and Validation");

const invalidExamples = [
  { label: 'Number("123abc")', value: Number("123abc") },
  { label: 'Number("hello")', value: Number("hello") },
  { label: 'parseInt("hello", 10)', value: parseInt("hello", 10) },
  { label: 'parseFloat("3.14abc")', value: parseFloat("3.14abc") },
  { label: 'isNaN("hello")', value: isNaN("hello") },
  { label: 'Number.isNaN("hello")', value: Number.isNaN("hello") },
  { label: 'Number.isNaN(Number("hello"))', value: Number.isNaN(Number("hello")) },
  { label: "Number.isInteger(10.5)", value: Number.isInteger(10.5) },
  { label: "Number.isFinite(123)", value: Number.isFinite(123) }
];

showTable(invalidExamples.map(item => ({
  Expression: item.label,
  Result: describe(item.value),
  Type: typeof item.value
})));

/* ================================================================
 * 7. ARRAY CONVERSIONS
 * ================================================================ */
section("7. Array → String / Number / Boolean");

const arrays = [[], [10], [1, 2, 3], [null], [undefined], [0], ["hello"]];

showTable(arrays.map(value => ({
  Input: describe(value),
  "String(array)": String(value),
  "Number(array)": String(Number(value)),
  "Boolean(array)": String(Boolean(value)),
  Note: "All arrays are truthy"
})));

/* ================================================================
 * 8. OBJECT AND DATE CONVERSIONS
 * ================================================================ */
section("8. Object / Date → String / Number / Boolean");

const ordinaryObject = { id: 1 };
const date = new Date("2025-01-01T00:00:00Z");

showTable([
  resultRow("String({})", String({})),
  resultRow("Number({})", Number({})),
  resultRow("Boolean({})", Boolean({})),
  resultRow("String({ id: 1 })", String(ordinaryObject)),
  resultRow("Number({ id: 1 })", Number(ordinaryObject)),
  resultRow('String(new Date("2025-01-01T00:00:00Z"))', String(date)),
  resultRow('Number(new Date("2025-01-01T00:00:00Z"))', Number(date),
    "Timestamp in milliseconds")
]);

/* ================================================================
 * 9. IMPLICIT COERCION: PLUS
 * ================================================================ */
section('9. Implicit Coercion — "+" Operator');

showTable([
  resultRow("10 + 20", 10 + 20),
  resultRow('"10" + 20', "10" + 20, "String concatenation"),
  resultRow('10 + "20"', 10 + "20", "String concatenation"),
  resultRow('"10" + true', "10" + true),
  resultRow('"10" + null', "10" + null),
  resultRow('"10" + undefined', "10" + undefined),
  resultRow("10 + null", 10 + null, "null becomes 0 in numeric addition"),
  resultRow("10 + true", 10 + true, "true becomes 1"),
  resultRow("10 + false", 10 + false, "false becomes 0")
]);

/* ================================================================
 * 10. IMPLICIT COERCION: ARITHMETIC
 * ================================================================ */
section("10. Implicit Coercion — -, *, /, %");

showTable([
  resultRow('"10" - 2', "10" - 2),
  resultRow('"10" * 2', "10" * 2),
  resultRow('"10" / 2', "10" / 2),
  resultRow('"10" % 3', "10" % 3),
  resultRow('"10" - "abc"', "10" - "abc"),
  resultRow("null - 1", null - 1),
  resultRow("undefined - 1", undefined - 1),
  resultRow("true * 5", true * 5),
  resultRow("false * 5", false * 5),
  resultRow('"" - 1', "" - 1)
]);

/* ================================================================
 * 11. EQUALITY AND RELATIONAL COMPARISONS
 * ================================================================ */
section("11. Equality and Relational Comparison");

showTable([
  resultRow('"5" == 5', "5" == 5, "Loose equality performs coercion"),
  resultRow('"5" === 5', "5" === 5, "Strict equality does not coerce"),
  resultRow("null == undefined", null == undefined),
  resultRow("null === undefined", null === undefined),
  resultRow('"10" > 5', "10" > 5, "Numeric comparison"),
  resultRow('"10" < "5"', "10" < "5", "Lexicographical string comparison"),
  resultRow('10 < "5"', 10 < "5", "Numeric comparison"),
  resultRow("null == 0", null == 0),
  resultRow("null >= 0", null >= 0),
  resultRow("null > 0", null > 0),
  resultRow("undefined == null", undefined == null),
  resultRow("undefined > 0", undefined > 0)
]);

/* ================================================================
 * 12. LOGICAL OPERATORS AND DEFAULT VALUES
 * ================================================================ */
section("12. Logical Operators: ||, &&, ??");

showTable([
  resultRow('"hello" || "default"', "hello" || "default"),
  resultRow('"" || "default"', "" || "default"),
  resultRow('"hello" && 100', "hello" && 100),
  resultRow("0 && 100", 0 && 100),
  resultRow('null ?? "default"', null ?? "default"),
  resultRow("0 ?? 100", 0 ?? 100),
  resultRow("0 || 100", 0 || 100),
  resultRow('"" ?? "fallback"', "" ?? "fallback")
]);

console.log("|| uses a fallback for any falsy value.");
console.log("?? uses a fallback only for null or undefined.");
console.log("&& returns the first falsy operand, or the last operand if all are truthy.");

/* ================================================================
 * 13. BIGINT CONVERSIONS
 * ================================================================ */
section("13. BigInt Conversion");

const bigIntRows = [
  resultRow('BigInt("123")', BigInt("123")),
  resultRow("BigInt(123)", BigInt(123)),
  resultRow("10n + 5n", 10n + 5n),
  resultRow("Number(10n)", Number(10n)),
  resultRow("typeof 10n", typeof 10n)
];

showTable(bigIntRows);

console.log("BigInt('12.5') throws SyntaxError.");
console.log("BigInt('abc') throws SyntaxError.");
console.log("10n + 5 throws TypeError: cannot mix BigInt and Number in arithmetic.");
console.log("Converting a very large BigInt to Number can lose precision.");

/* ================================================================
 * 14. SYMBOL CONVERSIONS
 * ================================================================ */
section("14. Symbol Conversion");

const symbol = Symbol("id");

showTable([
  resultRow('Symbol("id")', symbol),
  resultRow("String(symbol)", String(symbol)),
  resultRow("Boolean(symbol)", Boolean(symbol)),
  resultRow("typeof symbol", typeof symbol)
]);

console.log("Number(symbol) throws TypeError.");
console.log('symbol + "" throws TypeError; use String(symbol) explicitly.');

/* ================================================================
 * 15. JSON SERIALIZATION EDGE CASES
 * ================================================================ */
section("15. JSON.stringify() Edge Cases");

const jsonRows = [
  {
    Expression: 'JSON.stringify({ a: undefined, b: null })',
    Result: JSON.stringify({ a: undefined, b: null }),
    Note: "Undefined object property is omitted"
  },
  {
    Expression: "JSON.stringify([undefined, null])",
    Result: JSON.stringify([undefined, null]),
    Note: "Undefined array element becomes null"
  },
  {
    Expression: "JSON.stringify(NaN)",
    Result: JSON.stringify(NaN),
    Note: "NaN becomes null"
  },
  {
    Expression: "JSON.stringify(Infinity)",
    Result: JSON.stringify(Infinity),
    Note: "Infinity becomes null"
  },
  {
    Expression: "JSON.stringify({ value: NaN })",
    Result: JSON.stringify({ value: NaN }),
    Note: "NaN property value becomes null"
  },
  {
    Expression: "JSON.stringify(undefined)",
    Result: String(JSON.stringify(undefined)),
    Note: "Returns undefined, not a JSON string"
  }
];

showTable(jsonRows);

console.log("JSON.stringify(10n) throws TypeError by default.");

/* ================================================================
 * 16. QUICK REFERENCE: COMMON CONVERSIONS
 * ================================================================ */
section("16. Quick Reference");

showTable([
  { Method: "String(value)", Purpose: "Convert to string", Example: 'String(123) → "123"' },
  { Method: "Number(value)", Purpose: "Convert to number", Example: 'Number("12") → 12' },
  { Method: "Boolean(value)", Purpose: "Convert to Boolean", Example: "Boolean(0) → false" },
  { Method: "parseInt(value, 10)", Purpose: "Parse integer prefix", Example: 'parseInt("12px", 10) → 12' },
  { Method: "parseFloat(value)", Purpose: "Parse decimal prefix", Example: 'parseFloat("3.5px") → 3.5' },
  { Method: "Number.isNaN(value)", Purpose: "Check actual NaN", Example: "Number.isNaN(NaN) → true" },
  { Method: "Number.isFinite(value)", Purpose: "Check finite number", Example: "Number.isFinite(Infinity) → false" },
  { Method: "Number.isInteger(value)", Purpose: "Check integer", Example: "Number.isInteger(10.5) → false" },
  { Method: "BigInt(value)", Purpose: "Convert supported integer values", Example: 'BigInt("100") → 100n' }
]);

/* ================================================================
 * 17. FINAL INTERVIEW TAKEAWAYS
 * ================================================================ */
heading("FINAL TAKEAWAYS");

console.log("1. Number('') and Number('   ') return 0.");
console.log("2. Boolean('false'), Boolean('0'), Boolean([]), and Boolean({}) return true.");
console.log("3. Number('123abc') returns NaN; parseInt('123abc', 10) returns 123.");
console.log("4. typeof null returns 'object' (a historical quirk).");
console.log("5. typeof NaN returns 'number'.");
console.log("6. + may concatenate strings; -, *, /, and % generally coerce to numbers.");
console.log("7. Prefer === and !== over == and != in most application code.");
console.log("8. Prefer Number.isNaN() to avoid coercion during NaN checks.");
console.log("9. Use ?? when 0, false, or '' should remain valid values.");
console.log("10. JSON serialization has special rules for undefined, NaN, Infinity, and BigInt.");

console.log("\n" + LINE);
console.log("  END OF JAVASCRIPT TYPE CONVERSION REFERENCE");
console.log(LINE + "\n");

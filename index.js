#!/usr/bin/env node

/**
 * 🐼 BlackPanda Labs — Panda Encoder
 * Advanced Multi-Encoder CLI Utility
 * -----------------------------------
 * Features:
 * - Base64 Encoding
 * - Hex Encoding
 * - URL Encoding
 * - Double URL Encoding
 * - Binary Encoding
 * - Decode Support
 * - Error Handling
 * - Professional CLI Output
 */

const args = process.argv.slice(2);

const payload =
  args.find(arg => !arg.startsWith("--")) ||
  "<script>alert('BlackPanda')</script>";

const isDecodeMode = args.includes("--decode");

/* -------------------------------- */
/* Encoder Utilities */
/* -------------------------------- */

const encoders = {

  Base64: {
    encode: (str) =>
      Buffer.from(str, "utf8").toString("base64"),

    decode: (str) =>
      Buffer.from(str, "base64").toString("utf8"),
  },

  Hex: {
    encode: (str) =>
      Buffer.from(str, "utf8").toString("hex"),

    decode: (str) =>
      Buffer.from(str, "hex").toString("utf8"),
  },

  URL: {
    encode: (str) =>
      encodeURIComponent(str),

    decode: (str) =>
      decodeURIComponent(str),
  },

  "Double-URL": {
    encode: (str) =>
      encodeURIComponent(
        encodeURIComponent(str)
      ),

    decode: (str) =>
      decodeURIComponent(
        decodeURIComponent(str)
      ),
  },

  Binary: {
    encode: (str) =>
      str
        .split("")
        .map(char =>
          char.charCodeAt(0)
            .toString(2)
            .padStart(8, "0")
        )
        .join(" "),

    decode: (str) =>
      str
        .split(" ")
        .map(bin =>
          String.fromCharCode(
            parseInt(bin, 2)
          )
        )
        .join(""),
  },
};

/* -------------------------------- */
/* CLI Header */
/* -------------------------------- */

console.log(`
╔══════════════════════════════════════╗
║        🐼 Panda Encoder CLI          ║
║      BlackPanda Labs Security        ║
╚══════════════════════════════════════╝
`);

console.log(
  `Mode     : ${
    isDecodeMode
      ? "Decode"
      : "Encode"
  }`
);

console.log(`Payload  : ${payload}\n`);

/* -------------------------------- */
/* Main Logic */
/* -------------------------------- */

for (const [name, methods] of Object.entries(encoders)) {

  try {

    const result = isDecodeMode
      ? methods.decode(payload)
      : methods.encode(payload);

    console.log(
      `✅ ${name.padEnd(12)} → ${result}`
    );

  } catch (error) {

    console.log(
      `❌ ${name.padEnd(12)} → Invalid Input`
    );
  }
}

/* -------------------------------- */
/* Usage Guide */
/* -------------------------------- */

console.log(`
────────────────────────────────────────

Usage:

Encode:
  panda-encoder "hello"

Decode:
  panda-encoder --decode "aGVsbG8="

Examples:

  panda-encoder "<script>alert(1)</script>"

  panda-encoder --decode "SGVsbG8="

────────────────────────────────────────
`);

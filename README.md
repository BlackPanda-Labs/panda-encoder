🐼 panda-encoder | BlackPanda Labs

Project Status: Operational (v1.0.1)

Classification: Red Team Utility / WAF Evasion
🚀 Installation
Bash

npm install -g @blackpanda-labs/panda-encoder

🛠️ Usage

After installation, you can call the encoder from any terminal window using the panda-encode command:
Bash

panda-encode "your-payload-here"

Example:
Bash

panda-encode "<script>alert('BP-LABS')</script>"

🎯 Features

    Base64 Encoding: Standard obfuscation for data streams.

    Hex Encoding: Bypasses simple string-matching filters.

    Double-URL Encoding: Specifically designed to bypass multi-layer WAF inspection.

🛡️ Attributes & Laboratory Metadata

    Lead Researcher: Debojit Singh

    Organization: BlackPanda Labs

    Research Field: Offensive Security / Evasion Techniques

    Tooling Category: Red Team Utility (RT-01)

    License: MIT

⚠️ Legal Disclaimer

This tool is for educational purposes and authorized security auditing only. BlackPanda Labs and its founders are not responsible for any misuse of this utility. All testing should be performed in a controlled, legal environme## 🎯 Features
- **Base64 Encoding:** Standard obfuscation for data streams.
- **Hex Encoding:** Bypasses simple string-matching filters.
- **Double-URL Encoding:** Specifically designed to bypass multi-layer WAF inspection.

## 🛡️ Attributes & Laboratory Metadata
- **Lead Researcher:** Debojit Singh
- **Organization:** BlackPanda Labs
- **Research Field:** Offensive Security / Evasion Techniques
- **Tooling Category:** Red Team Utility (RT-01)
- **License:** MIT

### **Legal Disclaimer**
This tool is for educational purposes and authorized security auditing only. BlackPanda Labs and its founders are not responsible for any misuse of this utility. All testing should be performed in a controlled, legal environment.

After installation, you can call the encoder from any terminal window using the panda-encode command followed by your string in quotes:

panda-encode "your-payload-here"
Example:
panda-encode "<script>alert('BP-LABS')</script>"

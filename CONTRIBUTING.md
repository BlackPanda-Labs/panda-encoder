# 🤝 Contributing to Panda Encoder

Thank you for considering contributing to **Panda Encoder** 🐼
This project is part of **BlackPanda Labs**, focused on offensive security tooling, encoding utilities, and research-driven development.

We welcome contributions from developers of all experience levels.

---

# 📌 Code of Conduct

By participating in this project, you agree to:

* Be respectful and professional
* Avoid toxic or harmful behavior
* Focus on constructive feedback
* Respect maintainers’ decisions

---

# 🚀 How to Contribute

## 1. Fork the Repository

Click the **Fork** button on GitHub and clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/panda-encoder.git
cd panda-encoder
```

---

## 2. Create a Feature Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

Branch naming convention:

* `feature/` → New features
* `fix/` → Bug fixes
* `docs/` → Documentation updates
* `chore/` → Maintenance tasks

---

## 3. Install Dependencies

```bash
npm install
```

Run locally:

```bash
node index.js
```

---

## 4. Make Your Changes

### Contribution Areas

We especially welcome improvements in:

### 🧩 Encoders / Decoders

* Add new encoding methods (ROT13, Base32, Binary, etc.)
* Improve existing encoding performance
* Add decoding functionality

### 🛠 CLI Improvements

* Add `--help`, `--list`, `--version`
* Improve terminal UX
* Add colored output and formatting

### 🧪 Testing

* Add unit tests for encoders
* Cover edge cases
* Improve test coverage using Jest

### 📚 Documentation

* Improve README clarity
* Fix typos or missing examples
* Add usage explanations

### ⚙️ DevOps / CI

* Add GitHub Actions workflows
* Add linting pipelines
* Improve build/test automation

---

## 5. Testing Your Changes

Before submitting:

```bash
npm test
```

Ensure:

* No breaking changes
* CLI works correctly
* Encoders return expected outputs

---

## 6. Commit Guidelines

We follow a clean commit convention:

```
type(scope): short description
```

Examples:

```bash
feat(cli): add encoder listing command
fix(base64): handle empty string input edge case
docs(readme): improve installation instructions
test(encoders): add unit tests for hex encoder
```

---

## 7. Push Your Changes

```bash
git add .
git commit -m "feat(scope): your message"
git push origin feature/your-feature-name
```

---

## 8. Create a Pull Request

Go to GitHub and open a Pull Request:

* Clearly describe your changes
* Mention issue number (if applicable)
* Add screenshots/logs if relevant

---

# 🧠 Pull Request Guidelines

A good PR should:

* Solve one problem only
* Be easy to review
* Include clear description
* Pass all tests
* Follow project structure

---

# ⚠️ Security & Scope Rules

Since this is a **security research tool**, contributions must:

* Be for educational or authorized testing use only
* Avoid adding malicious or illegal functionality
* Stay aligned with Red Team research scope
* Not include real-world exploit automation for abuse

---

# 🧪 Development Philosophy

Panda Encoder follows:

* Minimalist design
* High performance CLI experience
* Modular encoder architecture
* Research-first mindset

---

# 🐼 Project Structure (Recommended)

```bash
src/
  encoders/
  decoders/
  utils/
tests/
index.js
package.json
```

---

# 💬 Need Help?

If you're stuck:

* Open an issue
* Ask questions in discussions
* Check existing PRs for examples

---

# 🙌 Recognition

All valid contributors will be acknowledged in:

* README contributors section (future update)
* Release notes (when applicable)

---

<p align="center">
🐼 BlackPanda Labs — No shortcuts. Just engineering discipline.
</p>

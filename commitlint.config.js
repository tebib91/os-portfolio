module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
      ],
    ],
    "subject-case": [0, "never"],
    "subject-full-stop": [0, "never"],
    "subject-empty": [2, "never"],
    "header-max-length": [2, "always", 72],
  },
};

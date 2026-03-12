# JavaScript Advanced Lesson - Project Structure

## Overview
This project teaches advanced JavaScript concepts with the same rigorous testing approach:
- **10 separate test suites** (one per task)
- **Strict requirements** defined in README.md
- **Automated testing** with Jest
- **GitHub Actions** ready for GitHub Classroom

## Project Files

```
js-advanced-lesson/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow for auto-grading
├── __tests__/                  # Test files (one per task)
│   ├── task.1.1.filterEvenNumbers.test.js
│   ├── task.1.2.doubleNumbers.test.js
│   ├── task.1.3.sumArray.test.js
│   ├── task.2.1.createCounter.test.js
│   ├── task.2.2.createMultiplier.test.js
│   ├── task.3.1.fetchUserData.test.js
│   ├── task.3.2.processData.test.js
│   ├── task.4.1.Person.test.js
│   ├── task.4.2.Rectangle.test.js
│   └── task.5.1.getFirstAndLast.test.js
├── script.js                   # Main JavaScript file (students work here)
├── package.json                # Node.js dependencies
├── jest.config.js              # Jest configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # Student instructions
```

## Topics Covered

### 1. Array Methods (3 tasks)
- **filter()** - Filtering arrays based on conditions
- **map()** - Transforming array elements
- **reduce()** - Aggregating array values

### 2. Closures (2 tasks)
- Function factories
- Private variables and state
- Lexical scope

### 3. Async/Await and Promises (2 tasks)
- Asynchronous programming
- Promise creation and handling
- Async/await syntax
- Timing and delays

### 4. Classes and OOP (2 tasks)
- ES6 class syntax
- Constructors and properties
- Instance methods
- Object-oriented design

### 5. Destructuring and Spread (1 task)
- Array destructuring
- Object creation from destructured values

## Testing Strategy

Each task has its own test suite file, ensuring:
- Clear, granular feedback (10 test suites)
- Fast test execution (pure JavaScript, no browser)
- Precise validation against README requirements
- Multiple test cases per task to verify edge cases

## Current Status

✅ All 10 test suites are failing (as expected)
✅ Students can run `npm test` to check progress
✅ GitHub Actions workflow is configured
✅ Ready for GitHub Classroom deployment

## Difficulty Level

This is an **intermediate to advanced** level course that assumes students have:
- Basic JavaScript knowledge (variables, functions, arrays, objects)
- Understanding of function scope
- Familiarity with basic programming concepts

## Usage

1. Students clone the repository
2. Run `npm install` to install dependencies
3. Complete tasks in `script.js`
4. Run `npm test` to verify their work
5. Push to GitHub for automated grading

## Key Learning Outcomes

After completing this lesson, students will be able to:
- Use modern array methods effectively
- Understand and implement closures
- Write asynchronous code with async/await
- Create and use ES6 classes
- Apply destructuring in practical scenarios

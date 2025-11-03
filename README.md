# Music Quiz

Welcome to the **Music Quiz** project! This application is a fun and interactive quiz game where users can test their knowledge of music by identifying songs, artists, or albums based on audio clips.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [FAQ](#faq)

## Features

- **Interactive Quiz**: Answer questions based on audio clips.
- **Audio Playback**: Songs play seamlessly, starting from the beginning.
- **Randomized Options**: Quiz options are shuffled for each question.
- **Score Tracking**: Keep track of your progress and accuracy.
- **Responsive Design**: Works across devices of all sizes.

## Project Structure

```
components.json
next.config.mjs
package.json
pnpm-lock.yaml
postcss.config.mjs
tsconfig.json
app/
  globals.css
  layout.tsx
  page.tsx
components/
  about.tsx
  faq.tsx
  footer.tsx
  hero.tsx
  navbar.tsx
  quiz.tsx
  theme-provider.tsx
  ui/
    accordion.tsx
    alert-dialog.tsx
    ...
data/
  quiz-data.json
hooks/
  use-mobile.ts
  use-toast.ts
lib/
  utils.ts
public/
styles/
  globals.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (preferred package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aniket-a14/Music-Quiz.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Music-Quiz
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   pnpm dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Building for Production

1. Build the application:
   ```bash
   pnpm build
   ```
2. Start the production server:
   ```bash
   pnpm start
   ```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors and users for their support!
- Inspired by the love of music and quizzes.

## FAQ

### How can I report a bug?

Please open an issue in the [GitHub repository](https://github.com/Aniket-a14/Music-Quiz/issues).

### Can I suggest a feature?

Absolutely! Feel free to open a feature request in the [GitHub repository](https://github.com/Aniket-a14/Music-Quiz/issues).

### What browsers are supported?

The app supports the latest versions of Chrome, Firefox, Edge, and Safari.
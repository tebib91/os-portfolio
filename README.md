# OS Portfolio

A modern, responsive portfolio website built with Angular 19 and Material Design. This project showcases a professional portfolio with server-side rendering (SSR) capabilities, PWA support, and internationalization features.

[![Angular](https://img.shields.io/badge/Angular-19.0.1-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🚀 Features

- **Server-Side Rendering (SSR)**: Enhanced performance and SEO optimization
- **Progressive Web App (PWA)**: Installable on mobile devices with offline capabilities
- **Internationalization**: Multi-language support using ngx-translate
- **Material Design**: Modern and responsive UI components
- **Google Maps Integration**: Location visualization
- **Docker Support**: Easy deployment with containerization
- **Conventional Commits**: Standardized commit messages with semantic-release
- **CI/CD Pipeline**: Automated testing and deployment

## 🛠️ Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager
- Angular CLI
- Docker (optional, for containerization)

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/os-portfolio.git
   cd os-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:4200/`.

## 🏗️ Build

- **Production build** (default):

  ```bash
  npm run build
  ```

  This command performs the production build by default.

- **Development build**:

  ```bash
  npx nx run os-portfolio:build:development
  ```

- **SSR build and serve**:
  ```bash
  npm run serve:ssr:os-portfolio
  ```

## 🐳 Docker Deployment

1. Build the Docker image:

   ```bash
   docker build -t os-portfolio .
   ```

2. Run the container:
   ```bash
   docker run -p 4200:4200 os-portfolio
   ```

## 🧪 Testing

- **Unit Tests**:

  ```bash
  npm test
  ```

- **Linting**:
  ```bash
  npm run lint
  ```

## 📝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

We use conventional commits for semantic versioning. Here are the main types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test updates
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes

Example: `feat(auth): add OAuth2 authentication`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Material Design Team for the UI components
- All contributors who have helped this project grow

---

Built with ❤️ using Angular

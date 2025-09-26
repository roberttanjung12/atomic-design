# Contributing to DRONT Atomic Design

![DRONT Atomic Design](https://davidrivaldy.fcbayernfan.id/images/DRONT-V5.png)

Thank you for your interest in contributing to **DRONT Atomic Design**! This document provides guidelines and instructions for contributing to this project.

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our **Code of Conduct**:

- Be respectful and inclusive.
- Use welcoming and constructive language.
- Focus on what is best for the community.
- Show empathy towards other community members.
- Accept constructive criticism gracefully.

## 🚀 Getting Started

### Prerequisites

- Node.js 20.0 or later
- bun 1.0
- Dront UI package authorization, see [here](https://gitlab.spesolution.net/front-end/dront/dront-ui) for how to authorize

### Installation

1. Clone the repository:
```bash
git clone https://gitlab.spesolution.net/front-end/dront/dront-v5-atomic-design.git
cd dront-v5-atomic-design
```

2. Install dependencies:
```bash
bun install --frozen-lockfile
```

3. Run the documentation server:
```bash
bun run dev
```

4. Open [http://localhost:1515](http://localhost:1515) to view the documentation portal.

### VS Code Setup

Install recommended extensions:
- ESLint
- Prettier - Code formatter
- TypeScript Importer
- Auto Rename Tag
- GitLens

The project includes VS Code settings in `.vscode/settings.json` for optimal development experience.

## 🔄 Contribution Workflow

### 1. Create a Feature Branch

```bash
git checkout development
git pull upstream development
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

Follow our [adding component documentation](#adding-component-documentation) and [coding standards](#coding-standards).

### 3. Test Your Changes

```bash
# Build the project
bun run build
```

### 4. Commit Your Changes

Use conventional commit messages:
```bash
git commit -m "feat: Add new button documentation"
```

Commit types:
- `feat`: Introduce a new feature or functionality.
- `fix`: Resolve a bug or unintended behavior.
- `docs`: Update or add documentation (e.g., README, inline docs, guides).
- `style`: Code style changes that don’t affect functionality (formatting, whitespace, semicolons, etc.).
- `refactor`: Code restructuring without changing external behavior (improving readability, maintainability, or structure).
- `perf`: Performance optimizations that improve speed, memory usage, or efficiency without altering functionality.
- `test`: Add, update, or improve tests (unit, integration, e2e).
- `chore`: Routine tasks or maintenance (build process, dependencies, tooling, configs).

### 5. Push and Create Merge Request

```bash
git push origin feature/your-feature-name
```

Then create a Merge Request on GitLab.

### Adding Component Documentation

  - Create the component page into `src/app/(main)/components/<component-name>/page.tsx`.
    ```tsx
    'use client';

    import { PageID } from '@/@dront/components';
    import Button from '@/modules/components/Button';

    const ButtonPage = () => {
      return (
        <PageID
          title="Button"
          breadcrumbs={{
            title: 'Button',
            routes: [
              { label: 'Components', href: '#' },
              { label: 'Button', href: '#' }
            ]
          }}
        >
          <Button />
        </PageID>
      );
    };

    export default ButtonPage;

    ```
  - Create a component module in `src/modules/components/<ComponentName>/` to import into the component page.
  - Use the `DocView` component to define such a component, or as needed. For example:
    ```tsx
      import Button from '@dront/ui/Button';
      import { DocView } from '@/@dront/components';
      import ButtonBasic from './ButtonBasic';
      import buttonBasicRaw from './ButtonBasic?raw';

      const ButtonModule = () => {
        return (
          <DocView
            contributors={['Contributor Name']}
            overview={'The `...` component is ...'}
            sections={[
              {
                title: 'Basic',
                descriptions: 'This example ...',
                example: <ButtonBasic />,
                exampleCode: buttonBasicRaw
              }
            ]}
            propsDoc={{
              component: Button,
              propDefinitions: {
                label: {
                  type: 'string',
                  default: '',
                  description: 'The label for the button.'
                }
              }
            }}
          />
        );
      };

      export default ButtonModule;
    ```

## 📏 Coding Standards

### TypeScript

- Use TypeScript for all new code.
- Define proper types and interfaces.
- Avoid using `any` type.
- Use strict mode settings.

### Code Style

- Use Prettier for code formatting.
- Follow ESLint rules.
- Use meaningful variable and function names.
- Add comments for complex logic.
- Keep functions small and focused.

### File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useLocalStorage.ts`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)

### Import/Export Guidelines

```typescript
// Use default exports
const counter = () => {
  ...
};

export default counter;
```

### Export Barrel Pattern

Use index files to create clean import paths:

```typescript
// utils/index.ts
export { default as counter } from './counter';

// Usage
import { counter } from '@/utils'
```

## 📝 Merge Request Process

### Before Submitting

1. Ensure your code follows our coding standards.
2. Run build for linting and type checking.
4. Update documentation if necessary.

### MR Requirements

- **Clear title**: Use conventional commit format:
  ```txt
    [task-id] MR Title
  ```
- **Detailed description**: Explain what and why.
- **Screenshots**: For UI changes, include before/after images.
- **Breaking changes**: Clearly document any breaking changes.

## 🙏 Recognition

Contributors will be recognized in our `CHANGELOG.md`.

Thank you for helping make **DRONT Atomic Design** better!

Happy contributing! 🚀

---

Built with ❤️ by the SPE Front End Department | Powered by [Dront Atomic Design](https://gitlab.spesolution.net/front-end/dront/dront-v5-atomic-design)

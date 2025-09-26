# DRONT Atomic Design

![DRONT Atomic Design](https://davidrivaldy.fcbayernfan.id/images/DRONT-V5.png)

A comprehensive documentation portal for [Dront UI](https://gitlab.spesolution.net/front-end/dront/dront-ui) - the official UI component library for the **SPE Front End Department**. Built with [Next.js](https://nextjs.org/) and [MUI Material](https://nextjs.org/) for styling.

## 📖 Documentation Features

### Interactive Component Showcase

- **Live Examples**: View `Dront UI` components in action.
- **Code Snippets**: Copy-paste ready code examples.
- **Responsive Testing**: Test components across different screen sizes.

### API Documentation

- **Component Props**: Detailed prop tables with types and descriptions.
- **Usage Examples**: Multiple use cases for each component.
- **Best Practices**: Guidelines for optimal component usage.

### Design System Guidelines

- **Design Tokens**: Colors, typography, spacing documentation.
- **Component Composition**: Building complex UIs with atomic components.
- **Theming Guide**: Customizing the design system.

## 🎨 Dront UI Integration

This documentation portal is tightly integrated with the `Dront UI` package.

All examples are powered by the actual `Dront UI` components:

```jsx
import { FieldText, FieldPassword } from '@dront/ui';
import { Button, Stack } from '@mui/material';

function LoginForm() {
  return (
    <Stack spacing={2}>
      <FieldText label="Username" name="username" />
      <FieldPassword label="Password" name="password" />
      <Button variant="contained">Login</Button>
    </Stack>
  )
}
```

## 🤝 Contributing

Please see our [contribution guidelines](CONTRIBUTING.md) before contributing to the project.

## 📄 Licensing

This project is licensed under [All Rights Reserved](LICENSE).

## 🙏 Acknowledgments

- **@dront/ui Team**: For creating and maintaining the component library
- **SPE Front End Department**: For design system standards and guidelines
- **Community Contributors**: For improving documentation and examples

---

Built with ❤️ by the SPE Front End Department | Powered by [Dront Atomic Design](https://gitlab.spesolution.net/front-end/dront/dront-v5-atomic-design)

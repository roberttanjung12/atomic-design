'use client';

import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';

interface ComponentInfo {
  name: string;
  category: string;
  description: string;
  features: string[];
  status: 'stable' | 'beta' | 'experimental';
}

const componentsData: ComponentInfo[] = [
  {
    name: 'Button',
    category: 'Input',
    description:
      'Reusable button component with multiple variants, sizes, and states. Supports loading states, icons, and accessibility features.',
    features: ['Multiple variants', 'Loading states', 'Icon support', 'Accessibility', 'Size variants'],
    status: 'stable'
  },
  {
    name: 'Chart',
    category: 'Visualization',
    description:
      'Unified chart component supporting multiple chart types: bar, line, donut, sunburst, radar, and sankey charts.',
    features: ['Multiple chart types', 'Responsive design', 'Customizable dimensions', 'Data visualization'],
    status: 'stable'
  },
  {
    name: 'Field',
    category: 'Form',
    description: 'Base field component for form inputs with validation and styling support.',
    features: ['Form integration', 'Validation support', 'Consistent styling', 'Error handling'],
    status: 'stable'
  },
  {
    name: 'FieldPassword',
    category: 'Form',
    description: 'Specialized password input field with visibility toggle and validation.',
    features: ['Password visibility toggle', 'Validation rules', 'Security features', 'Form integration'],
    status: 'stable'
  },
  {
    name: 'FieldText',
    category: 'Form',
    description: 'Text input field component with validation and formatting options.',
    features: ['Text input', 'Validation support', 'Format options', 'Accessibility'],
    status: 'stable'
  },
  {
    name: 'CodeSnippet',
    category: 'Display',
    description: 'Code display component with syntax highlighting and copy functionality.',
    features: ['Syntax highlighting', 'Copy to clipboard', 'Language support', 'Theme integration'],
    status: 'stable'
  },
  {
    name: 'CodeViewer',
    category: 'Display',
    description: 'Advanced code viewer with multiple language support and interactive features.',
    features: ['Multi-language support', 'Interactive features', 'Line numbers', 'Code folding'],
    status: 'stable'
  },
  {
    name: 'DynamicAlert',
    category: 'Feedback',
    description: 'Dynamic alert component with customizable types and dismissible functionality.',
    features: ['Multiple alert types', 'Dismissible', 'Custom styling', 'Animation support'],
    status: 'stable'
  },
  {
    name: 'LoadingScreen',
    category: 'Feedback',
    description: 'Loading screen component with customizable spinners and messages.',
    features: ['Custom spinners', 'Loading messages', 'Overlay support', 'Theme integration'],
    status: 'stable'
  },
  {
    name: 'ProgressBar',
    category: 'Feedback',
    description: 'Progress indicator component with linear and circular variants.',
    features: ['Linear progress', 'Circular progress', 'Determinate/Indeterminate', 'Customizable'],
    status: 'stable'
  },
  {
    name: 'MainScrollbar',
    category: 'Layout',
    description: 'Custom scrollbar component with theme integration and smooth scrolling.',
    features: ['Custom styling', 'Smooth scrolling', 'Theme integration', 'Cross-browser support'],
    status: 'stable'
  },
  {
    name: 'Section',
    category: 'Layout',
    description: 'Layout section component for organizing content with consistent spacing.',
    features: ['Consistent spacing', 'Content organization', 'Responsive design', 'Flexible layout'],
    status: 'stable'
  },
  {
    name: 'PageID',
    category: 'Navigation',
    description: 'Page identification component with breadcrumbs and title management.',
    features: ['Breadcrumb navigation', 'Page titles', 'SEO optimization', 'Accessibility'],
    status: 'stable'
  },
  {
    name: 'TextHighlighter',
    category: 'Display',
    description: 'Text highlighting component for search results and content emphasis.',
    features: ['Text highlighting', 'Search integration', 'Custom styling', 'Performance optimized'],
    status: 'stable'
  },
  {
    name: 'TopLoader',
    category: 'Feedback',
    description: 'Top loading bar component for page navigation and async operations.',
    features: ['Page loading indicator', 'Async operation feedback', 'Smooth animations', 'Customizable'],
    status: 'stable'
  },
  {
    name: 'Drogo',
    category: 'Utility',
    description: 'Specialized utility component for advanced functionality and integrations.',
    features: ['Advanced features', 'Integration support', 'Utility functions', 'Extensible'],
    status: 'beta'
  },
  {
    name: 'Alert',
    category: 'Feedback',
    description: 'Alert component for displaying important information and notifications.',
    features: ['Multiple severities', 'Dismissible', 'Custom styling', 'Accessible'],
    status: 'stable'
  },
  {
    name: 'Chips',
    category: 'Display',
    description: 'Chip component for displaying compact elements like tags or filters.',
    features: ['Interactive chips', 'Deletable', 'Avatar support', 'Custom colors'],
    status: 'stable'
  },
  {
    name: 'CheckBoxes',
    category: 'Input',
    description: 'Checkbox component with validation and custom styling support.',
    features: ['Form integration', 'Validation', 'Custom styling', 'Group support'],
    status: 'stable'
  },
  {
    name: 'RadioButton',
    category: 'Input',
    description: 'Radio button component for single selection from multiple options.',
    features: ['Single selection', 'Form integration', 'Custom styling', 'Accessible'],
    status: 'stable'
  },
  {
    name: 'Rating',
    category: 'Input',
    description: 'Rating component for displaying and capturing user ratings.',
    features: ['Star ratings', 'Custom icons', 'Read-only mode', 'Half ratings'],
    status: 'stable'
  },
  {
    name: 'Toggle',
    category: 'Input',
    description: 'Toggle switch component for binary choices.',
    features: ['Binary toggle', 'Custom styling', 'Form integration', 'Accessible'],
    status: 'stable'
  },
  {
    name: 'Tooltip',
    category: 'Display',
    description: 'Tooltip component for providing contextual information.',
    features: ['Hover tooltips', 'Custom positioning', 'Rich content', 'Accessible'],
    status: 'stable'
  },
  {
    name: 'ThemeManager',
    category: 'Utility',
    description: 'Theme management component for dynamic theme switching.',
    features: ['Theme switching', 'Dark/Light mode', 'Custom themes', 'Persistence'],
    status: 'stable'
  },
  {
    name: 'UploadImage',
    category: 'Input',
    description: 'Image upload component with preview and validation.',
    features: ['File upload', 'Image preview', 'Validation', 'Drag & drop'],
    status: 'stable'
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    Input: '#2196f3',
    Form: '#4caf50',
    Display: '#ff9800',
    Feedback: '#e91e63',
    Layout: '#9c27b0',
    Navigation: '#00bcd4',
    Visualization: '#f44336',
    Utility: '#795548'
  };

  return colors[category as keyof typeof colors] || '#757575';
};

const getStatusColor = (status: string) => {
  const colors = {
    stable: 'success',
    beta: 'warning',
    experimental: 'error'
  };

  return colors[status as keyof typeof colors] || 'default';
};

const ComponentsOverview: React.FC = () => {
  const categories = Array.from(new Set(componentsData.map(comp => comp.category)));

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Components Overview
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        Comprehensive overview of all available components in the @dront design system. These components follow Atomic
        Design principles and are built with Material-UI.
      </Typography>

      {/* Category Statistics */}
      <Box mb={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Components by Category
        </Typography>
        <Grid container spacing={2}>
          {categories.map(category => {
            const categoryComponents = componentsData.filter(comp => comp.category === category);

            return (
              <Grid key={category} size={{ xs: 6, sm: 4, md: 3 }}>
                <Card sx={{ height: '100%', backgroundColor: getCategoryColor(category), color: 'white' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="div">
                      {categoryComponents.length}
                    </Typography>
                    <Typography variant="body2">{category}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Components Grid */}
      <Typography variant="h6" component="h2" gutterBottom>
        Available Components
      </Typography>

      <Grid container spacing={3}>
        {componentsData.map(component => (
          <Grid key={component.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="h6" component="h3" noWrap>
                    {component.name}
                  </Typography>
                  <Chip label={component.status} color={getStatusColor(component.status) as any} size="small" />
                </Box>

                <Chip
                  label={component.category}
                  size="small"
                  sx={{
                    mb: 2,
                    alignSelf: 'flex-start',
                    backgroundColor: getCategoryColor(component.category),
                    color: 'white'
                  }}
                />

                <Typography variant="body2" color="textSecondary" paragraph sx={{ flexGrow: 1 }}>
                  {component.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.5}>
                  {component.features.slice(0, 3).map(feature => (
                    <Chip key={feature} label={feature} variant="outlined" size="small" sx={{ fontSize: '0.7rem' }} />
                  ))}
                  {component.features.length > 3 && (
                    <Chip
                      label={`+${component.features.length - 3} more`}
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: '0.7rem', opacity: 0.7 }}
                    />
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Summary Statistics */}
      <Box
        mt={6}
        p={3}
        sx={{ backgroundColor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box textAlign="center">
              <Typography variant="h3" component="div" color="primary">
                {componentsData.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Total Components
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box textAlign="center">
              <Typography variant="h3" component="div" color="success.main">
                {componentsData.filter(c => c.status === 'stable').length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Stable Components
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box textAlign="center">
              <Typography variant="h3" component="div" color="warning.main">
                {componentsData.filter(c => c.status === 'beta').length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Beta Components
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box textAlign="center">
              <Typography variant="h3" component="div" color="info.main">
                {categories.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Categories
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ComponentsOverview;

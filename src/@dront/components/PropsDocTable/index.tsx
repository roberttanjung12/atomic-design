import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from '@mui/material';
import Section from '../Section';
import TextHighlighter from '../TextHighlighter';
import CodeChip from './CodeChip';

/**
 * Metadata definition for a single component prop.
 */
interface PropMeta {
  /**
   * Data type of the prop (stringified).
   */
  type: string;
  /**
   * Default value if available.
   */
  default?: string;
  /**
   * Indicates whether the prop is required.
   * @default false
   */
  required?: boolean;
  /**
   * Description of the prop usage.
   */
  description?: React.ReactNode;
}

/**
 * Map of prop names to their metadata.
 */
type PropsDefinition<T> = {
  [K in keyof T]?: PropMeta;
};

/**
 * Props for the `PropsDocTable` component.
 */
export interface PropsDocTableProps<T> {
  /**
   * Target component to be documented.
   */
  component: React.ComponentType<T>;
  /**
   * Props metadata definition of the target component.
   */
  propDefinitions: PropsDefinition<T>;
}

/**
 * Table component for displaying props documentation of a given component.
 *
 * @example
 * ```tsx
 * <PropsDocTable
 *  component={Button}
 *  props={{
 *    variant: {
 *      type: "'text' | 'outlined' | 'contained'",
 *      default: "'text'",
 *      description: "The variant to use."
 *    }
 *  }}
 * />
 * ```
 */
const PropsDocTable = <T extends object>({ component, propDefinitions }: PropsDocTableProps<T>) => {
  const keys = Object.keys(propDefinitions) as (keyof T)[];
  const componentName = (component as any).displayName || component.name || 'Component';
  const description = `Props for the \`${componentName}\` component are available.`;

  return (
    <Section title="Props">
      <TextHighlighter text={description} />

      <TableContainer sx={{ mt: 2 }} component={props => <Card {...props} variant="outlined" sx={{ padding: 0 }} />}>
        <Table>
          <TableHead
            sx={{
              '& th': {
                fontWeight: 'bold'
              }
            }}
          >
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Default</TableCell>
              <TableCell align="center">Required</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keys.map(key => {
              const meta = propDefinitions[key];

              return (
                <TableRow key={String(key)}>
                  <TableCell>{String(key)}</TableCell>
                  <TableCell>
                    <CodeChip>{meta?.type}</CodeChip>
                  </TableCell>
                  <TableCell>
                    <CodeChip variant="secondary">{meta?.default ?? 'undefined'}</CodeChip>
                  </TableCell>
                  <TableCell align="center">
                    <CodeChip variant="secondary">{meta?.required ? 'true' : 'false'}</CodeChip>
                  </TableCell>
                  <TableCell>{meta?.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
};

export default PropsDocTable;

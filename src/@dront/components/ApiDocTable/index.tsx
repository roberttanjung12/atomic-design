import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from '@mui/material';
import Section from '../Section';
import TextHighlighter from '../TextHighlighter';
import CodeChip from './CodeChip';

/**
 * @interface ApiMeta
 * @description Defines the metadata structure for a single API item,
 * such as a function parameter or an object property.
 */
interface ApiMeta {
  /**
   * @property {string} type
   * @description The data type of the API item, represented as a string.
   * @example "'success' | 'error'", "number", "() => void"
   */
  type: string;
  /**
   * @property {boolean} [required]
   * @description Specifies whether the API item is mandatory. Defaults to false if omitted.
   */
  required?: boolean;
  /**
   * @property {string} [default]
   * @description The default value of the API item, represented as a string.
   * Displayed as '—' if omitted.
   */
  default?: string;
  /**
   * @property {React.ReactNode} [description]
   * @description A detailed explanation of the API item's purpose and usage. Can include JSX for rich formatting.
   */
  description?: React.ReactNode;
}

/**
 * @typedef {Object.<string, ApiMeta>} Definitions
 * @description A map-like object where each key is the name of an API item
 * (e.g., a parameter or property name) and the value is its corresponding `ApiMeta` object.
 */
type Definitions = {
  [key: string]: ApiMeta;
};

/**
 * @interface ApiDocTableProps
 * @description Defines the props required for the ApiDocTable component.
 */
export interface ApiDocTableProps {
  /**
   * @property {'function' | 'object'} docType
   * @description Specifies whether the documentation target is a function or an object.
   */
  docType: 'function' | 'object';
  /**
   * @property {string} name
   * @description The explicit name of the function or object being documented.
   */
  name: string;
  /**
   * @property {Definitions} definitions
   * @description The core metadata object that defines the API to be documented.
   */
  definitions: Definitions;
}

/**
 * A table component for displaying API documentation for functions and objects.
 *
 * This component renders a structured table for function parameters or object
 * properties, and dynamically adjusts its title and description to fit the context.
 *
 * @param {ApiDocTableProps} props The props for the component.
 * @returns {React.ReactElement} The rendered documentation table.
 *
 * @example
 * // For a function
 * <ApiDocTable
 * docType="function"
 * name="calculateTotal"
 * definitions={{
 * 'price': { type: 'number', required: true, description: 'The item price.' },
 * 'quantity': { type: 'number', default: '1', description: 'Number of items.' },
 * }}
 * />
 */
const ApiDocTable = (props: ApiDocTableProps) => {
  const { docType, name, definitions } = props;
  const keys = Object.keys(definitions);

  const entityType = docType === 'function' ? 'function' : 'object';
  const description = `Details for the \`${name}\` ${entityType} are provided below.`;
  const sectionTitle = docType === 'function' ? 'Parameters' : 'Properties';

  return (
    <Section title={sectionTitle}>
      <TextHighlighter text={description} />

      <TableContainer
        sx={{ mt: 2 }}
        component={cardProps => <Card {...cardProps} variant="outlined" sx={{ padding: 0 }} />}
      >
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
              <TableCell>Required</TableCell>
              <TableCell>Default</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keys.map(key => {
              const meta = definitions[key];

              if (!meta) return null;

              return (
                <TableRow key={key}>
                  <TableCell>
                    <CodeChip variant="primary">{key}</CodeChip>
                  </TableCell>
                  <TableCell>
                    <CodeChip>{meta.type}</CodeChip>
                  </TableCell>
                  <TableCell>
                    <CodeChip variant="secondary">{meta.required ? 'Yes' : 'No'}</CodeChip>
                  </TableCell>
                  <TableCell>
                    <CodeChip variant="secondary">{meta?.default ?? 'undefined'}</CodeChip>
                  </TableCell>
                  <TableCell>{meta.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
};

export default ApiDocTable;

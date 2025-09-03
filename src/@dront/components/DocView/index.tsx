import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import uniqueId from 'lodash/uniqueId';
import { CodeViewer, PropsDocTable, Section, TextHighlighter } from '@/@dront/components';
import type { CodeViewerProps } from '../CodeViewer';
import type { PropsDocTableProps } from '../PropsDocTable';
import type { SectionProps } from '../Section';
import type { TextHighlighterProps } from '../TextHighlighter';
import Contributors, { type ContributorsProps } from './Contributors';
import DescriptionText from './DescriptionText';

type TextHighLightIntern = TextHighlighterProps['text'] | TextHighlighterProps['text'][];

type Descriptions = React.ReactNode | TextHighLightIntern;

/**
 * Props for the `DocumentationRenderer` component.
 *
 * @template TComponent - The type of the component being documented.
 */
interface DocViewProps<TComponent = any> {
  /**
   * The overview/summary of the documented component.
   * Can be a single text string or an array of text items,
   * rendered with the `TextHighlighter` component.
   */
  overview: TextHighLightIntern;

  /**
   * A list of documentation sections.
   * Each section may contain a title, description(s),
   * example code, and an example React element.
   */
  sections: {
    /**
     * Section title (optional).
     */
    title?: SectionProps['title'];

    /**
     * Description(s) for the section.
     * Can be a single text string or an array of text items.
     */
    descriptions: Descriptions;

    /**
     * Example code to be shown inside a `CodeViewer`.
     */
    exampleCode?: CodeViewerProps['code'];

    /**
     * A React element that demonstrates the component usage.
     */
    example?: CodeViewerProps['children'];
  }[];

  /**
   * The props documentation of the target component.
   * Used by `PropsDocTable` to render the list of available props.
   */
  propsDoc?: PropsDocTableProps<TComponent>;

  /**
   * A list of contributors for the documented component.
   */
  contributors: ContributorsProps['persons'];
}

// Type guard to ensure section has both exampleCode and example
function hasExample(
  section: DocViewProps['sections'][number]
): section is Required<Pick<typeof section, 'exampleCode' | 'example'>> & typeof section {
  return !!section.exampleCode && !!section.example;
}

const renderOverview = (overviewItems: TextHighLightIntern) => {
  if (Array.isArray(overviewItems)) {
    return overviewItems.map(overviewItem => {
      return <TextHighlighter key={uniqueId()} text={overviewItem} />;
    });
  }

  return <TextHighlighter text={overviewItems} />;
};

const renderDescription = (descrioptionItems: Descriptions) => {
  if (Array.isArray(descrioptionItems)) {
    return descrioptionItems.map(descrioptionItem => {
      return <DescriptionText key={uniqueId()} text={descrioptionItem} />;
    });
  }

  if (typeof descrioptionItems === 'string') {
    return <DescriptionText text={descrioptionItems} />;
  }

  return descrioptionItems;
};

/**
 * A comprehensive documentation view component that renders component documentation
 * including overview, sections with examples, props documentation, and contributors.
 *
 * @template TComponent - The type of the component being documented
 *
 * @param props - The DocView component props
 * @param props.contributors - A list of contributors for the documented component
 * @param props.overview - The overview/summary of the documented component. Can be a single text string or an array of text items, rendered with the TextHighlighter component
 * @param props.propsDoc - The props documentation of the target component. Used by PropsDocTable to render the list of available props
 * @param props.sections - A list of documentation sections. Each section may contain a title, description(s), example code, and an example React element
 *
 * @returns A React component that renders the complete documentation view
 *
 * @example
 * ```tsx
 * <DocView
 *   contributors={['John Doe', 'Jane Smith']}
 *   overview="This is a button component for user interactions"
 *   sections={[
 *     {
 *       title: "Basic Usage",
 *       descriptions: "Here's how to use the button component",
 *       exampleCode: "<Button>Click me</Button>",
 *       example: <Button>Click me</Button>
 *     }
 *   ]}
 *   propsDoc={{
 *     component: Button,
 *     propDefinitions: buttonPropDefinitions
 *   }}
 * />
 * ```
 */
const DocView = <TComponent extends object>({
  contributors,
  overview,
  propsDoc,
  sections
}: DocViewProps<TComponent>) => {
  return (
    <Stack spacing={4}>
      {renderOverview(overview)}

      {sections.map(section => {
        const showExample = hasExample(section);

        return (
          <Section key={uniqueId()} title={section.title}>
            {renderDescription(section.descriptions)}

            {showExample && <CodeViewer code={section.exampleCode}>{section.example}</CodeViewer>}
          </Section>
        );
      })}

      {propsDoc && <PropsDocTable component={propsDoc.component} propDefinitions={propsDoc.propDefinitions} />}

      <Stack direction="row" spacing={1} alignItems="center">
        <Typography fontWeight={700}>Contributors:</Typography>
        <Contributors persons={contributors} />
      </Stack>
    </Stack>
  );
};

export default DocView;

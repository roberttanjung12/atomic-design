import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';

import AvatarExample from './ChipAvatar';
import avatarExampleCode from './ChipAvatar?raw';
import BasicExample from './ChipBasic';
import basicExampleCode from './ChipBasic?raw';
import ColorExample from './ChipColor';
import colorExampleCode from './ChipColor?raw';
import DeleteExample from './ChipDelete';
import deleteExampleCode from './ChipDelete?raw';
import IconExample from './ChipIcon';
import iconExampleCode from './ChipIcon?raw';
import SelectableExample from './ChipSelectable';
import selectableExampleCode from './ChipSelectable?raw';
import SizeExample from './ChipSize';
import sizeExampleCode from './ChipSize?raw';
import VariantExample from './ChipVariant';
import variantExampleCode from './ChipVariant?raw';

const ChipModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `Chip` component is an enhanced version of MUI's Chip, offering support for larger sizes, selectable states, tooltips, avatars, and consistent styling across different use cases." />

      {/* Basic */}
      <Section title="Basic">
        <Typography mb={2}>A simple chip with a label, useful for tags, categories, or quick indicators.</Typography>
        <CodeViewer code={basicExampleCode}>
          <BasicExample />
        </CodeViewer>
      </Section>

      {/* Variant */}
      <Section title="Variant">
        <Typography mb={2}>
          The <code>variant</code> prop allows you to switch between <b>filled</b> and <b>outlined</b> styles.
        </Typography>
        <CodeViewer code={variantExampleCode}>
          <VariantExample />
        </CodeViewer>
      </Section>

      {/* Size */}
      <Section title="Size">
        <Typography mb={2}>
          The <code>size</code> prop controls the chip’s dimensions. Available options are <code>small</code>,{' '}
          <code>medium</code>, and <code>large</code>.
        </Typography>
        <CodeViewer code={sizeExampleCode}>
          <SizeExample />
        </CodeViewer>
      </Section>

      {/* Color */}
      <Section title="Color">
        <Typography mb={2}>
          The <code>color</code> prop supports multiple palette options such as <code>primary</code>,{' '}
          <code>secondary</code>, <code>success</code>, and more.
        </Typography>
        <CodeViewer code={colorExampleCode}>
          <ColorExample />
        </CodeViewer>
      </Section>

      {/* Selectable */}
      <Section title="Selectable">
        <Typography mb={2}>
          Chips can be made <b>selectable</b> to indicate toggled states. This is a controlled pattern: you pass{' '}
          <code>selected</code> to reflect state and handle changes via <code>onClick</code>. The{' '}
          <code>selectable</code> prop only enables visual affordance (pointer/hover). You still need to update the
          state yourself inside <code>onClick</code>.
        </Typography>
        <CodeViewer code={selectableExampleCode}>
          <SelectableExample />
        </CodeViewer>
      </Section>

      {/* Icon */}
      <Section title="Icon">
        <Typography mb={2}>
          Add an <code>icon</code> at the start of the chip to indicate context, like a category or status.
        </Typography>
        <CodeViewer code={iconExampleCode}>
          <IconExample />
        </CodeViewer>
      </Section>

      {/* Avatar */}
      <Section title="Avatar">
        <Typography mb={2}>Add an avatar to visually represent an entity, like a user or item.</Typography>
        <CodeViewer code={avatarExampleCode}>
          <AvatarExample />
        </CodeViewer>
      </Section>

      {/* On Delete */}
      <Section title="On Delete">
        <Typography mb={2}>
          Enable deletion by passing an <code>onDelete</code> handler, which shows a delete icon inside the chip.
        </Typography>
        <CodeViewer code={deleteExampleCode}>
          <DeleteExample />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default ChipModule;

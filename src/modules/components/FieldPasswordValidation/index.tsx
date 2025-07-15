'use client';

import type { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import BasicExample from './FieldPasswordValidationBasic';
import basicExampleCode from './FieldPasswordValidationBasic?raw';
import WithProviderExample from './FieldPasswordValidationWithProvider';
import withProviderExampleCode from './FieldPasswordValidationWithProvider?raw';

interface ParagraphWrapperProps {
  children: ReactNode;
}

const ParagraphWrapper = ({ children }: ParagraphWrapperProps) => {
  return (
    <Stack gap={1} useFlexGap>
      {children}
    </Stack>
  );
};

const FieldTextValidationModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `FieldTextValidation` component is a form-integrated input field built with `react-hook-form`. It supports validation, error messaging, and can be used with or without a `FormProvider`." />

      <Section title="Basic">
        <ParagraphWrapper>
          <TextHighlighter text="Use `FieldTextValidation` without a `FormProvider` by explicitly passing the `control` prop. This is useful for small, isolated forms or components that don't require shared form context." />
          <TextHighlighter text="The example below uses `useForm` directly to create a local form instance, which is passed to the component for validation and state management." />

          <CodeViewer code={basicExampleCode}>
            <BasicExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="With Provider">
        <ParagraphWrapper>
          <TextHighlighter text="You can also use `FieldTextValidation` inside a `FormProvider` to share form state across nested components." />
          <TextHighlighter text="This is helpful in complex forms or multi-step workflows." />

          <CodeViewer code={withProviderExampleCode}>
            <WithProviderExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>
    </Stack>
  );
};

export default FieldTextValidationModule;

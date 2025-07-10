'use client';

import type { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import BasicExample from './FieldTextValidationBasic';
import basicExampleCode from './FieldTextValidationBasic?raw';
import WithProviderExample from './FieldTextValidationWithProvider';
import withProviderExampleCode from './FieldTextValidationWithProvider?raw';

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
      <TextHighlighter text="The `FieldTextValidation` component is a reusable text input field integrated with `react-hook-form`." />

      <Section title="Basic">
        <ParagraphWrapper>
          <TextHighlighter text="The `FieldTextValidation` component can be used outside of a FormProvider by passing the control prop manually. This is useful when you want to use the component in an isolated form or without context wrapping." />
          <TextHighlighter text="It uses `react-hook-form` to manage form state and validation. In this example, `useForm` is used directly and the control object is passed to `FieldTextValidation`." />

          <CodeViewer code={basicExampleCode}>
            <BasicExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>

      <Section title="With Provider">
        <ParagraphWrapper>
          <TextHighlighter text="The `FieldTextValidation` component can also be used inside a `FormProvider` from `react-hook-form`. This is useful when you want to share form context across deeply nested components." />

          <CodeViewer code={withProviderExampleCode}>
            <WithProviderExample />
          </CodeViewer>
        </ParagraphWrapper>
      </Section>
    </Stack>
  );
};

export default FieldTextValidationModule;

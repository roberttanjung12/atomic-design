import { DocView } from '@/@dront/components';
import BasicUsage from './examples/BasicUsage';
import basicUsageRaw from './examples/BasicUsage?raw';
import CombinedOptions from './examples/CombinedOptions';
import combinedOptionsRaw from './examples/CombinedOptions?raw';
import CustomSeparator from './examples/CustomSeparator';
import customSeparatorRaw from './examples/CustomSeparator?raw';
import DecimalLimit from './examples/DecimalLimit';
import decimalLimitRaw from './examples/DecimalLimit?raw';
import Redenomination from './examples/Redenomination';
import redenominationRaw from './examples/Redenomination?raw';
import ReturnTypes from './examples/ReturnTypes';
import returnTypesRaw from './examples/ReturnTypes?raw';
import RoundingModes from './examples/RoundingModes';
import roundingModesRaw from './examples/RoundingModes?raw';
import StringParsing from './examples/StringParsing';
import stringParsingRaw from './examples/StringParsing?raw';

const ThousandUtilityModule = () => {
  return (
    <DocView
      contributors={['Nanda Yusuf Nur Pratama']}
      overview={[
        'The `thousand` utility provides a powerful way to format numbers with thousand separators and various customization options.',
        'It supports rounding modes, custom separators, decimal limiting, redenomination, and can parse formatted string numbers automatically.',
        'The utility can return either formatted strings or numbers, making it flexible for different use cases like currency formatting, statistical data display, and more.'
      ]}
      sections={[
        {
          title: 'Basic Usage',
          descriptions:
            'The simplest way to use the thousand utility is to pass a number. By default, it returns a formatted string with comma separators and 2 decimal places.',
          example: <BasicUsage />,
          exampleCode: basicUsageRaw
        },
        {
          title: 'String Input Parsing',
          descriptions:
            'The utility automatically detects and parses various string formats including dot separators, comma separators, European format (comma as decimal), space separators, and underscore separators. This makes it easy to work with user input or data from different sources.',
          example: <StringParsing />,
          exampleCode: stringParsingRaw
        },
        {
          title: 'Rounding Modes',
          descriptions:
            'Control how numbers are rounded using the `roundingMode` option. Choose from "up" (ceiling), "down" (floor), or "normal" (default rounding). This is useful when you need precise control over number formatting.',
          example: <RoundingModes />,
          exampleCode: roundingModesRaw
        },
        {
          title: 'Custom Separator',
          descriptions:
            'Change the thousand separator to match your locale or preference. Common options include comma (,), dot (.), space ( ), or underscore (_). When using dot (.) as thousand separator, the decimal separator automatically becomes comma (,) for European format. Otherwise, dot (.) is used as decimal separator. This is especially useful for international number formatting.',
          example: <CustomSeparator />,
          exampleCode: customSeparatorRaw
        },
        {
          title: 'Decimal Limit',
          descriptions:
            'Control the number of decimal places using the `decimalLimit` option. Set to 0 for integers, or specify any number of decimal places. The default is 2 decimal places.',
          example: <DecimalLimit />,
          exampleCode: decimalLimitRaw
        },
        {
          title: 'Redenomination',
          descriptions:
            'Divide numbers by a factor using the `redenomination` option. This is useful for displaying large numbers in thousands (÷1000), millions (÷1000000), or any custom factor. Perfect for financial or statistical data.',
          example: <Redenomination />,
          exampleCode: redenominationRaw
        },
        {
          title: 'Return Types',
          descriptions:
            'Choose whether to return a formatted string or a number using the `returnType` option. Return "string" (default) for display purposes, or "number" for calculations. All formatting and rounding options still apply when returning numbers.',
          example: <ReturnTypes />,
          exampleCode: returnTypesRaw
        },
        {
          title: 'Combined Options',
          descriptions:
            'Combine multiple options to create complex formatting scenarios. Mix rounding modes, custom separators, decimal limits, and redenomination to achieve exactly the format you need. All options work seamlessly together.',
          example: <CombinedOptions />,
          exampleCode: combinedOptionsRaw
        }
      ]}
      apiDoc={{
        name: 'thousand',
        docType: 'utility',
        definitions: {
          thousand: {
            type: '(value: number | string, options?: ThousandOptions) => string | number',
            required: true,
            default: '-',
            description:
              'Format a number with thousand separators and various options. Accepts both numbers and formatted strings as input.'
          },
          'ThousandOptions.roundingMode': {
            type: '"up" | "down" | "normal"',
            required: false,
            default: '"normal"',
            description: 'Rounding mode: "up" for ceiling, "down" for floor, "normal" for standard rounding.'
          },
          'ThousandOptions.separator': {
            type: 'string',
            required: false,
            default: '","',
            description: 'Character to use as thousand separator (e.g., ",", ".", " ", "_").'
          },
          'ThousandOptions.decimalLimit': {
            type: 'number',
            required: false,
            default: '2',
            description: 'Number of decimal places to display.'
          },
          'ThousandOptions.redenomination': {
            type: 'number',
            required: false,
            default: '1',
            description: 'Factor to divide the number by (e.g., 1000 for thousands, 1000000 for millions).'
          },
          'ThousandOptions.returnType': {
            type: '"string" | "number"',
            required: false,
            default: '"string"',
            description: 'Return type: "string" for formatted text, "number" for numeric value.'
          }
        }
      }}
    />
  );
};

export default ThousandUtilityModule;

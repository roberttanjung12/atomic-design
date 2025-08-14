import type {
  AccordionActionsProps,
  AccordionDetailsProps,
  AccordionProps,
  AccordionSummaryProps
} from '@mui/material';
import type { AccordionItem } from './type';

interface AccordionPropId {
  /**
   * The unique identifier for the accordion item.
   * @type {string}
   * @default ''
   */
  id?: string;
}

interface AccordionPropList {
  /**
   * The list of accordion items.
   * @type {AccordionItem[]}
   */
  list: AccordionItem[];
}

interface AccordionPropVariant {
  /**
   * The visual style variant of the accordion component.
   * @type {'contained' | 'outlined'}
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined';
}

interface AccordionPropAccordion {
  /**
   * The props for the accordion component.
   * For further customization options, refer to the MUI documentation https://mui.com/material-ui/api/accordion/
   * @type {Omit<AccordionProps, 'children'>}
   */
  accordion?: Omit<AccordionProps, 'children'>;
}

interface AccordionPropAccordionSummary {
  /**
   * The props for the accordion summary component.
   * For further customization options, refer to the MUI documentation https://mui.com/material-ui/api/accordion-summary/
   * @type {Omit<AccordionSummaryProps, 'children'>}
   */
  summary?: Omit<AccordionSummaryProps, 'children'>;
}

interface TheAccordionPropAccordionDetails {
  /**
   * The props for the accordion details component.
   * For further customization options, refer to the MUI documentation https://mui.com/material-ui/api/accordion-details/
   * @type {Omit<AccordionDetailsProps, 'children'>}
   */
  details?: Omit<AccordionDetailsProps, 'children'>;
}

interface TheAccordionPropAccordionActions {
  /**
   * The props for the accordion actions component.
   * For further customization options, refer to the MUI documentation https://mui.com/material-ui/api/accordion-actions/
   * @type {AccordionActionsProps}
   */
  actions?: AccordionActionsProps;
}

interface TheAccordionProps
  extends AccordionPropId,
    AccordionPropList,
    AccordionPropVariant,
    AccordionPropAccordion,
    AccordionPropAccordionSummary,
    TheAccordionPropAccordionDetails,
    TheAccordionPropAccordionActions {}

export type {
  AccordionPropId,
  AccordionPropList,
  AccordionPropVariant,
  AccordionPropAccordion,
  AccordionPropAccordionSummary,
  TheAccordionPropAccordionDetails,
  TheAccordionPropAccordionActions,
  TheAccordionProps
};

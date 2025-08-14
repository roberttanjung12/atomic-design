import type { ReactNode } from 'react';

interface AccordionItemTitle {
  /**
   * The title of the accordion item.
   * @type {string}
   */
  title: string;
}

interface AccordionItemDetail {
  /**
   * The detail content of the accordion item.
   * @type {string | ReactNode}
   */
  detail: string | ReactNode;
}

interface AccordionItemActions {
  /**
   * The action content of the accordion item.
   * @type {ReactNode}
   */
  actions?: ReactNode;
}

interface AccordionItem extends AccordionItemTitle, AccordionItemDetail, AccordionItemActions {}

export type { AccordionItemTitle, AccordionItemDetail, AccordionItemActions, AccordionItem };

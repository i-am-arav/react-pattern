import React, { useContext } from 'react';

export const AccordionContext = React.createContext(null);

export const AccordionItemContext = React.createContext(null);
export function useAccordion() {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error('useAccordion must be use within Accordion Component');
  }
  return context;
}

export function useAccordionItem() {
  const context = useContext(AccordionItemContext);
  if (context === undefined) {
    throw new Error('useAccordion must be use within Accordion Component');
  }
  return context;
}

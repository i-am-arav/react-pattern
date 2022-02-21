import React from 'react';
import {
  AccordionContext,
  AccordionItemContext,
  useAccordion,
  useAccordionItem,
} from './AccordionContext';
import './accordion.css';

const AccordionWithContext = ({ children }) => {
  const [activePanel, setActivePanel] = React.useState(null);
  const value = {
    activePanel,
    hanldeActivePanel: (incomingId) => {
      if (activePanel == incomingId) setActivePanel(null);
      else setActivePanel(incomingId);
    },
  };
  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ id, children }) => {
  const value = { id };

  return (
    <AccordionItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionToggle = ({ children }) => {
  const { id } = useAccordionItem();
  const { hanldeActivePanel } = useAccordion();
  return (
    <button className="toggle-pane" onClick={() => hanldeActivePanel(id)}>
      {children}
    </button>
  );
};

export const AccordionPanel = ({ children }) => {
  const { activePanel } = useAccordion();
  const { id } = useAccordionItem();

  if (activePanel !== id) return null;
  return <div className="panel">{children}</div>;
};

export default AccordionWithContext;

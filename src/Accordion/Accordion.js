import React from 'react';

const Accordion = ({ children }) => {
  const [activePanel, setActivePanel] = React.useState(null);
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activePanel,
          hanldeActivePanel: (incomingId) => {
            if (activePanel == incomingId) {
              setActivePanel(null);
            } else setActivePanel(incomingId);
          },
        });
      })}{' '}
    </div>
  );
};

export const AccordionItem = ({
  id,
  activePanel,
  hanldeActivePanel,
  children,
}) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          id,
          activePanel,
          hanldeActivePanel,
        });
      })}{' '}
    </div>
  );
};

export const AccordionToggle = ({ id, hanldeActivePanel, children }) => {
  return <button onClick={() => hanldeActivePanel(id)}>{children}</button>;
};

export const AccordionPanel = ({ id, activePanel, children }) => {
  if (activePanel !== id) return null;
  return <div>{children}</div>;
};

export default Accordion;

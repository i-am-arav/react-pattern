import React from 'react';
import './style.css';
import AccordionWithContext, {
  AccordionItem,
  AccordionToggle,
  AccordionPanel,
} from './Accordion/AccordionWithContext';
import CompoundPattern from './Accordion/CompoundPattern';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      {/*Both are same if you see the output but implementation is different you can import Accordion from Accordion.js and use it. I kept that intact for your reference. */}
      <AccordionWithContext>
        <AccordionItem id="1">
          <AccordionToggle>
            Section 1 <span aria-hidden>▾</span>
          </AccordionToggle>
          <AccordionPanel>
            Proin eros massa, porttitor et nisl vitae, bibendum tristique
            turpis. Phasellus eget ligula sit amet libero mollis consectetur id
            sit amet nisi. Suspendisse potenti. Aenean rhoncus tincidunt ipsum,
            id tempor quam dictum a. Ut pretium vitae felis imperdiet tincidunt.
            Fusce erat lectus, finibus a est id, laoreet viverra ante. Nunc
            rutrum mauris sed ligula maximus, quis cursus purus rhoncus. Sed
            rhoncus mauris at faucibus sollicitudin. Integer luctus maximus quam
            ut rutrum. Morbi tellus sem, suscipit vitae velit id, semper
            fringilla orci. Praesent cursus consectetur neque ut mattis. Nam
            mollis commodo commodo.{' '}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="2">
          <AccordionToggle>
            Section 2 <span aria-hidden>▾</span>
          </AccordionToggle>
          <AccordionPanel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus
              sapien, vestibulum id enim ac, feugiat sagittis eros. Aenean et
              diam ut felis interdum vulputate sed ac orci. Integer pellentesque
              libero eget tristique tempor. Suspendisse egestas felis sapien.
              Integer eleifend sapien ut est dictum pellentesque. Proin lobortis
              mi non nisi euismod, vitae tincidunt risus cursus. Ut sed nisi sit
              amet ex facilisis auctor.
            </p>{' '}
          </AccordionPanel>
        </AccordionItem>
      </AccordionWithContext>

      {/* This is an example package that uses compound pattern you can refer Modal in react bootstrap*/}
      <CompoundPattern />
    </div>
  );
}

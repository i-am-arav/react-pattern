import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink,
} from '@reach/menu-button';
import React from 'react';

const CompoundPattern = () => {
  return (
    <Menu>
      <MenuButton>
        Actions <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
        <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
        <MenuItem onSelect={() => alert('Mark as Draft')}>
          Mark as Draft
        </MenuItem>
        <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
        <MenuLink as="a" href="https://reacttraining.com/workshops/">
          Attend a Workshop
        </MenuLink>
      </MenuList>
    </Menu>
  );
};

export default CompoundPattern;

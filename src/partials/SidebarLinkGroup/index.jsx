import React from 'react';
import sidebarItems from '../../utils/sidebarItems';
import SidebarLink from '../SidebarLink';

const SidebarLinkGroup = () => {
  
  return (
    <ul className="mt-3 space-y-3">
      {sidebarItems.map(sidebarItem => <SidebarLink key={sidebarItem.id} sidebarItem={sidebarItem}/>)}
    </ul>
  );
}

export default SidebarLinkGroup
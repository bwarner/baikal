import { useState } from 'react';

export function useMenu(initialSelection, initialExpansion) {
  const [selected, setSelected] = useState(initialSelection);
  const [expanded, setExpanded] = useState(initialExpansion);
  return {
    selected,
    setSelected,
    expanded,
    setExpanded,
  };
}

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createWrapperAndAppendToBody = (id) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', id);
  document.body.append(wrapperElement);
  return wrapperElement;
};

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
export const ReactPortal = (properties) => {
  const { children, wrapperId } = properties;

  const [mountNode, setMountNode] = useState(null);

  useEffect(() => {
    const element = document.querySelector(`#${wrapperId}`);
    if (element) {
      setMountNode(element);
    } else {
      setMountNode(createWrapperAndAppendToBody(wrapperId));
    }
  }, [wrapperId]);

  return <>{mountNode && createPortal(children, mountNode)}</>;
};

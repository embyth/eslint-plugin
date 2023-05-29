import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ReactPortalProperties = {
  /**
   * The children to render into the `container`.
   */
  children: React.ReactNode
  /**
   * Property, which is the ID attribute of a DOM element and acts as the container for the portal.
   */
  wrapperId: string
};

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
export const ReactPortal: React.FC<ReactPortalProperties> = (properties) => {
  const { children, wrapperId } = properties;

  const [mountNode, setMountNode] = useState<HTMLDivElement | Element | null>(null);

  const createWrapperAndAppendToBody = (id: string): HTMLDivElement => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', id);
    document.body.append(wrapperElement);
    return wrapperElement;
  };

  useEffect(() => {
    const element = document.querySelector(`#${wrapperId}`);
    if (element) {
      setMountNode(element);
    } else {
      setMountNode(createWrapperAndAppendToBody(wrapperId));
    }
  }, [wrapperId]);

  return (
    <>
      {mountNode && createPortal(children, mountNode)}
    </>
  );
};

declare module '*.module.scss'

declare module '*.svg' {
  import React from 'react';

  const content: string;
  const ReactComponent: React.ComponentType;

  export { ReactComponent };
  export default content;
}

declare module '*.png' {
  const content: any
  export default content
}

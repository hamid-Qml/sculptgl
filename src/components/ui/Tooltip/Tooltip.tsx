import { flip, offset, Placement, shift, useFloating } from '@floating-ui/react';
import { ReactNode, useState } from 'react';

// TODO: extend this from the floating ui props and pass the ...rest to the floating ui
interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: Placement;
}

export default function Tooltip(props: TooltipProps) {
  const { children, content, placement = 'top' } = props;

  const [isOpen, setIsOpen] = useState(false);
  const { x, y, refs, strategy } = useFloating({
    placement,
    middleware: [offset(12), flip(), shift()],
  });

  return (
    <div
      ref={refs.setReference}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            backgroundColor: '#1d1d1d',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

import clsx from 'clsx';
import Tooltip from 'components/ui/Tooltip/Tooltip';
import { ReactNode } from 'react';
import styles from './IconButton.module.scss';

interface ImageIconButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'icon'> {
  id?: string;
  children?: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  tooltip?: string;
  tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
}

// This is not a very generic button, but it works for now...
function ImageIconButton(props: ImageIconButtonProps) {
  const { id, children, isSelected, onClick, tooltip, tooltipPlacement, ...rest } = props;
  return (
    <Tooltip
      content={
        tooltip ? (
          <span style={{ fontSize: '1.5rem', textTransform: 'capitalize' }}>{tooltip}</span>
        ) : null
      }
      placement={tooltipPlacement}
    >
      <button {...rest} id={id} onClick={onClick} className={clsx(styles.toolItem, isSelected && styles.selected)}>
        {children}
      </button>
    </Tooltip>
  );
}

export default ImageIconButton;

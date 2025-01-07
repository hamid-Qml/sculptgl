import useSculptGL from '@/hooks/useSculptGL';
import Enums from '../../misc/Enums';
import styles from './Toolbar.module.scss';

import BrushIcon from 'assets/icons/tools/brush.png';
import CreaseIcon from 'assets/icons/tools/crease.png';
import DragIcon from 'assets/icons/tools/drag.png';
import FlattenIcon from 'assets/icons/tools/flatten.png';
import InflateIcon from 'assets/icons/tools/inflate.png';
import MaskIcon from 'assets/icons/tools/mask.png';
import MoveIcon from 'assets/icons/tools/move.png';
import PaintIcon from 'assets/icons/tools/paint.png';
import PinchIcon from 'assets/icons/tools/pinch.png';
import ScaleIcon from 'assets/icons/tools/scale.png';
import SmoothIcon from 'assets/icons/tools/smooth.png';
import TransformIcon from 'assets/icons/tools/transform.png';

import ImageIconButton from '../ui/button/IconButton/IconButton';
import GenAIStuff from '../GenAIStuff/GenAIStuff';

const tools = [
  { id: Enums.Tools.TRANSFORM, name: 'Transform', icon: TransformIcon },
  { id: Enums.Tools.MOVE, name: 'Move', icon: MoveIcon },
  { id: Enums.Tools.BRUSH, name: 'Brush', icon: BrushIcon },
  { id: Enums.Tools.SMOOTH, name: 'Smooth', icon: SmoothIcon },
  { id: Enums.Tools.INFLATE, name: 'Inflate', icon: InflateIcon },
  { id: Enums.Tools.CREASE, name: 'Crease', icon: CreaseIcon },
  { id: Enums.Tools.PINCH, name: 'Pinch', icon: PinchIcon },
  { id: Enums.Tools.FLATTEN, name: 'Flatten', icon: FlattenIcon },
  { id: Enums.Tools.MASKING, name: 'Mask', icon: MaskIcon },
  { id: Enums.Tools.DRAG, name: 'Drag', icon: DragIcon },
  { id: Enums.Tools.PAINT, name: 'Paint', icon: PaintIcon },
  { id: Enums.Tools.LOCALSCALE, name: 'Scale', icon: ScaleIcon },
];

function Toolbar() {
  const { selectedSculptingTool, setSculptingTool } = useSculptGL();

  const handleToolClick = (toolId: number) => {
    setSculptingTool(toolId);
  };

  return (
    <div id="left-toolbar" className={styles.leftToolbar}>
      <GenAIStuff />
      <div className={styles.tools}>
        {tools.map((tool) => (
          <ImageIconButton
            key={tool.id}
            id={`left-toolbar-tool-${tool.id}`}
            alt={tool.name}
            isSelected={selectedSculptingTool === tool.id}
            onClick={() => handleToolClick(tool.id)}
            tooltip={tool.name.toLowerCase()}
            tooltipPlacement="right"
          >
            <img src={tool.icon} />
          </ImageIconButton>
        ))}
      </div>
    </div>
  );
}

export default Toolbar;

import { useEffect, useState } from 'react';
import SculptGL from '../SculptGL';

export default function useSculptGL() {
  const [selectedSculptingTool, setSelectedSculptingTool] = useState<number>(0);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.sculptgl) {
      window.sculptgl = new SculptGL();
      window.sculptgl.start();

      // patch some sculptgl functions to make them work with react.
      const _ctrlSculpting = window.sculptgl._gui._ctrlSculpting!;

      _ctrlSculpting.addEventCallback('onChangeTool', (tool: number) => {
        setSelectedSculptingTool(tool);
      });

      console.log('hello???');
      setInitialized(true);
    } else {
      if (!initialized) {
        setInitialized(true);
      }
    }
  }, [initialized]);

  function setSculptingTool(tool: number) {
    window.sculptgl._gui._ctrlSculpting!._ctrlSculpt.setValue(tool);
  }

  return {
    _sculptgl: window.sculptgl,
    selectedSculptingTool,
    initialized,
    setSculptingTool,
  };
}

import FileDialog from './components/FileDialog/FileDialog';
import Toolbar from './components/Toolbar/Toolbar';
import SculptGL from './SculptGL';

import './assets/css/yagui.css';

if (!window.sculptgl) {
  window.sculptgl = new SculptGL();
  window.sculptgl.start();
}

function App() {
  return (
    <div>
      <Toolbar />
      <FileDialog />
      </div>
  );
}

export default App;

import GenAIStuff from './components/GenAIStuff/GenAIStuff';
import Toolbar from './components/Toolbar/Toolbar';

import './App.css';
import './assets/css/yagui.css';

/**
 * The React App is only responsible for rendering the UI overlays, all the webgl stuff is done in the SculptGL class.
 * the useSculptGL hook is used to interact with the SculptGL class.
 */
function App() {
  return (
    <div>
      <Toolbar />
      <GenAIStuff />
    </div>
  );
}

export default App;

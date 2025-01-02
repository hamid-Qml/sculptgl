import React, { useState } from 'react';

function FileDialog() {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpen = () => setShowDialog(true);
  const handleClose = () => setShowDialog(false);

  return (
    <>
      <dialog id="fileDialog" open={showDialog}>
        <form id="uploadForm">
          <label htmlFor="fileInput">Choose an image:</label>
          <input type="file" id="fileInput" accept="image/*" required />
          <div className="dialog-buttons">
            <button className="gui-button" type="submit">
              Submit
            </button>
            <button className="gui-button" type="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </dialog>
      <button onClick={handleOpen}>Open File Dialog</button>
    </>
  );
}

export default FileDialog;

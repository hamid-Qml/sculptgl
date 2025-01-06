import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import React, { useState } from 'react';
import styles from './FileDialog.module.scss';

interface FileDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (file: File) => Promise<void>;
}

function FileDialog({ open, onClose, onSubmit }: FileDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!open) return null;

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    setIsLoading(true);

    try {
      await onSubmit?.(selectedFile);
    } catch (error) {
      alert('Oops... Something went wrong. check the console for more details.');
      console.error(error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  }

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog id="fileDialog" className={styles.dialog} open={open}>
        <form id="uploadForm" className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="fileInput" className={styles.label}>
            Choose an image:
          </label>
          <input
            disabled={isLoading}
            type="file"
            id="fileInput"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleFileChange}
            required
          />
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className={styles.dialogButtons}>
              <button className={`gui-button ${styles.guiButton}`} type="submit" disabled={isLoading}>
                Submit
              </button>
              <button className={`gui-button ${styles.guiButton}`} type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          )}
        </form>
      </dialog>
    </>
  );
}

export default FileDialog;

import ImageIconButton from '@/components/ui/button/IconButton/IconButton';
import useSculptGL from '@/hooks/useSculptGL';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import AIImageIcon from '@/assets/icons/image-ai-fill.svg?react';
import FileDialog from './FileDialog/FileDialog';

import styles from './GenAIStuff.module.scss';

export default function GenAIStuff() {
  const { _sculptgl } = useSculptGL();

  const [showDialog, setShowDialog] = useState(false);

  async function handleFileSubmit(file: File) {
    const formData = new FormData();
    formData.append('content', file, file.name);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/generate?media_type=image', {
        method: 'POST',
        headers: { accept: 'application/json' },
        body: formData,
      });

      const blob = await response.blob();

      const fileName = extractFileNameFromHeaders(response.headers) || 'downloaded.obj';
      const file = new File([blob], fileName, { type: blob.type || 'application/octet-stream' });

      const fileType = getFileType(file.name);
      _sculptgl.readFile(file, fileType);
    } catch (e) {
      alert('Failed to generate model, check the console for more information.');
      console.error(e);
    }

    function extractFileNameFromHeaders(headers: Headers) {
      const contentDisposition = headers.get('content-disposition');
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+?)"/);
        return match ? match[1] : null;
      }
      return null;
    }

    function getFileType(name: string) {
      const lower = name.toLowerCase();

      if (lower.endsWith('.obj')) return 'obj';
      if (lower.endsWith('.sgl')) return 'sgl';
      if (lower.endsWith('.stl')) return 'stl';
      if (lower.endsWith('.ply')) return 'ply';

      return;
    }
  }

  function handleOpen() {
    setShowDialog(true);
  }

  function handleClose() {
    setShowDialog(false);
  }

  return (
    <div className={styles.container}>
      <ImageIconButton tooltip="Generate with AI" tooltipPlacement="right" onClick={handleOpen}>
        <AIImageIcon style={{ padding: '0.25rem' }} />
      </ImageIconButton>
      {createPortal(<FileDialog open={showDialog} onClose={handleClose} onSubmit={handleFileSubmit} />, document.body)}
    </div>
  );
}

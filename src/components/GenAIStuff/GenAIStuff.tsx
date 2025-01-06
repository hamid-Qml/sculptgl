import { useEffect, useState } from 'react';
import useSculptGL from '@/hooks/useSculptGL';
import ImageIconButton from '@/components/ui/button/IconButton/IconButton';

import AIImageIcon from '@/assets/icons/image-ai-fill.svg?react';
import FileDialog from './FileDialog/FileDialog';

export default function GenAIStuff() {
  const { initialized, _sculptgl } = useSculptGL();

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [topBarHeight, setTopBarHeight] = useState(0);

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const sidebarElement = _sculptgl?._gui?._sidebar?.domSidebar;
    const topbarElement = _sculptgl?._gui?._topbar?.domTopbar;

    if (initialized && sidebarElement && topbarElement) {
      const updateSidebarWidth = () => {
        setSidebarWidth(sidebarElement.offsetWidth);
      };

      const updateTopBarHeight = () => {
        setTopBarHeight(topbarElement.offsetHeight);
      };

      updateSidebarWidth();
      updateTopBarHeight();

      const resizeObserver = new ResizeObserver(() => {
        updateSidebarWidth();
        updateTopBarHeight();
      });

      resizeObserver.observe(sidebarElement);
      resizeObserver.observe(topbarElement);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [initialized, _sculptgl]);

  async function handleFileSubmit(file: File) {
    const formData = new FormData();
    formData.append('content', file, file.name);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/generate?media_type=image', {
        method: 'POST',
        headers: { accept: 'application/json' },
        body: formData,
      });

      console.log(response);

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
    <div style={{ position: 'absolute', right: sidebarWidth + 10, top: topBarHeight + 10, zIndex: 2 }}>
      <ImageIconButton tooltip="Generate with AI" tooltipPlacement="left" onClick={handleOpen}>
        <AIImageIcon style={{ padding: '0.25rem' }} />
      </ImageIconButton>
      <FileDialog open={showDialog} onClose={handleClose} onSubmit={handleFileSubmit} />
    </div>
  );
}

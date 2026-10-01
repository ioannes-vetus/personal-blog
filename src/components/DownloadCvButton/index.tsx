import React, {useState} from 'react';
import clsx from 'clsx';
import IconSvg from '@site/src/components/IconSvg';
import {DOWNLOAD_ICON} from '@site/src/data/socialIcons';
import styles from './styles.module.css';

export interface DownloadCvButtonProps {
  className?: string;
}

export default function DownloadCvButton({
  className,
}: DownloadCvButtonProps): React.ReactElement {
  const [isGenerating, setIsGenerating] = useState(false);

  async function handleClick(): Promise<void> {
    setIsGenerating(true);
    try {
      const {downloadCv} = await import('@site/src/utils/generateCvPdf');
      await downloadCv();
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <button
      type="button"
      className={clsx(className, styles.button)}
      onClick={handleClick}
      disabled={isGenerating}>
      <IconSvg icon={DOWNLOAD_ICON} size={16} />
      {isGenerating ? 'Generating…' : 'Download CV'}
    </button>
  );
}

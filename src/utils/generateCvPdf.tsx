import React from 'react';
import {pdf} from '@react-pdf/renderer';
import {PROFILE} from '@site/src/data/profile';
import CvDocument from './CvDocument';

export async function downloadCv(): Promise<void> {
  const blob = await pdf(<CvDocument />).toBlob();
  const fileName = `${PROFILE.name.replace(/\s+/g, '-')}-CV.pdf`;

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

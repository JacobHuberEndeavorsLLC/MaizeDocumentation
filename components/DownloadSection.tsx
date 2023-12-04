import React from 'react';
import useLatestReleaseDownloads from '../hooks/useLatestReleaseDownloads';

const DownloadSection = ({ showMacOS = true, showWindows = true }) => {
  const downloads = useLatestReleaseDownloads();

  if (!downloads) {
    return null;
  }

  return (
    <div className="my-4 flex gap-2">
      {showMacOS && downloads.osx && (
        <a href={downloads.osx} className="mr-1 inline-flex items-center rounded-md border border-transparent bg-[#21a238] px-5 py-3 text-base font-semibold text-white dark:text-neutral-100 hover:bg-[#0b8e36] hover:no-underline hover:text-white" download>Download for macOS</a>
      )}
      {showWindows && downloads.windows && (
        <a href={downloads.windows} className="inline-flex items-center rounded-md border border-transparent bg-[#21a238] px-5 py-3 text-base font-semibold text-white dark:text-neutral-100 hover:bg-[#0b8e36] hover:no-underline hover:text-white" download>Download for Windows</a>
      )}
    </div>
  );
};

export default DownloadSection;

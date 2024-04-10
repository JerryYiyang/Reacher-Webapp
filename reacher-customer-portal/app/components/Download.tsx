import React from 'react';

interface DownloadButtonProps {
  onClick?: () => void; // update later with whatever it downloads
}

const Download: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="rounded-md bg-gray-100 text-gray-300 px-4 py-2">
      Download
    </button>
  );
};

export default Download;

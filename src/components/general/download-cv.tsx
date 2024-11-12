'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Kedhar_Nadh.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;

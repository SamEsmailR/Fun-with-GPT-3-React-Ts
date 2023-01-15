import React from 'react';
import { BannerAd, BannerAdSize } from 'react-admob';

const AdmobComp: React.FC = () => {
  return (
    <div>
      <BannerAd
        unitId="your_ad_unit_id"
        size="banner"
        onAdFailedToLoad={error => console.error(error)}
      />
    </div>
  );
};

export default AdmobComp;

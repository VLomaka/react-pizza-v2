import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#fafafa'
    foregroundColor='#c4c4c4'>
    <rect
      x='0'
      y='271'
      rx='10'
      ry='10'
      width='260'
      height='31'
    />
    <rect
      x='0'
      y='426'
      rx='6'
      ry='6'
      width='90'
      height='40'
    />
    <rect
      x='133'
      y='426'
      rx='25'
      ry='25'
      width='130'
      height='40'
    />
    <rect
      x='0'
      y='320'
      rx='10'
      ry='10'
      width='260'
      height='85'
    />
    <circle
      cx='127'
      cy='127'
      r='127'
    />
  </ContentLoader>
);

export default Skeleton;

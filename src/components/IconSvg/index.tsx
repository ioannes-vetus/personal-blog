import React from 'react';
import type {SocialIcon} from '@site/src/data/socialIcons';

export interface IconSvgProps {
  icon: SocialIcon;
  size?: number;
}

export default function IconSvg({
  icon,
  size = 22,
}: IconSvgProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={icon.stroke ? 'none' : 'currentColor'}
      stroke={icon.stroke ? 'currentColor' : undefined}
      strokeWidth={icon.stroke ? 1.6 : undefined}
      strokeLinecap={icon.stroke ? 'round' : undefined}
      strokeLinejoin={icon.stroke ? 'round' : undefined}
      aria-hidden="true">
      {icon.shapes.map((shape, index) =>
        React.createElement(shape.tag, {...shape.attrs, key: index}),
      )}
    </svg>
  );
}

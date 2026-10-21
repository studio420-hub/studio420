import React from 'react';

/**
 * STUDIO 420 — Custom Vector Typographic Wordmark
 * Precision-engineered letterforms: STUDIO in stark white, 420 in deep crimson red.
 * Perfectly calibrated viewBox to prevent any right-edge clipping.
 */
export default function WordmarkSvg({
  className = 'hero-wordmark-svg',
  color = '#ffffff',
  numberColor = '#ffffff',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1660 280"
      className={className}
      fill="none"
      role="img"
      aria-label="STUDIO 420"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* S */}
      <path
        d="M20 74 C20 28, 55 10, 115 10 C175 10, 210 28, 210 74 C210 114, 175 128, 125 138 C60 152, 22 168, 22 212 C22 258, 60 274, 118 274 C180 274, 218 254, 218 206 H158 C158 226, 142 236, 118 236 C92 236, 78 226, 78 208 C78 182, 108 174, 155 162 C205 148, 264 130, 264 74 C264 24, 215 0, 116 0 C25 0 -24 24 -24 74 Z"
        fill={color}
        transform="translate(30, 0)"
      />

      {/* T */}
      <path
        d="M245 10 H385 V52 H342 V270 H288 V52 H245 Z"
        fill={color}
      />

      {/* U */}
      <path
        d="M405 10 H460 V185 C460 218, 482 232, 510 232 C538 232, 560 218, 560 185 V10 H615 V188 C615 245, 572 274, 510 274 C448 274, 405 245, 405 188 Z"
        fill={color}
      />

      {/* D */}
      <path
        d="M635 10 H715 C785 10, 830 50, 830 140 C830 230, 785 270, 715 270 H635 Z M690 52 V228 H715 C755 228, 775 200, 775 140 C775 80, 755 52, 715 52 Z"
        fill={color}
      />

      {/* I */}
      <path
        d="M850 10 H905 V270 H850 Z"
        fill={color}
      />

      {/* O */}
      <path
        d="M925 140 C925 50, 972 10, 1045 10 C1118 10, 1165 50, 1165 140 C1165 230, 1118 270, 1045 270 C972 270, 925 230, 925 140 Z M980 140 C980 200, 1002 228, 1045 228 C1088 228, 1110 200, 1110 140 C1110 80, 1088 52, 1045 52 C1002 52, 980 80, 980 140 Z"
        fill={color}
      />

      {/* 4 */}
      <path
        d="M1230 10 L1175 185 H1245 V270 H1295 V185 H1325 V145 H1295 V10 Z M1245 65 V145 H1210 Z"
        fill={numberColor}
        transform="translate(10, 0)"
      />

      {/* 2 */}
      <path
        d="M1340 55 C1340 20, 1370 8, 1405 8 C1440 8, 1470 20, 1470 58 C1470 95, 1440 120, 1395 160 L1350 202 V270 H1475 V230 H1390 L1418 195 C1460 155, 1490 125, 1490 60 C1490 14, 1450 -2, 1405 -2 C1355 -2, 1320 18, 1320 60 Z"
        fill={numberColor}
        transform="translate(10, 0)"
      />

      {/* 0 */}
      <path
        d="M1495 140 C1495 50, 1530 10, 1585 10 C1640 10, 1675 50, 1675 140 C1675 230, 1640 270, 1585 270 C1530 270, 1495 230, 1495 140 Z M1542 140 C1542 200, 1558 228, 1585 228 C1612 228, 1628 200, 1628 140 C1628 80, 1612 52, 1585 52 C1558 52, 1542 80, 1542 140 Z"
        fill={numberColor}
        transform="translate(10, 0)"
      />
    </svg>
  );
}

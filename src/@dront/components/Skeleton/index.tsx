'use client';

import React, { type ReactNode } from 'react';
import type { SkeletonProps } from './Skeleton.types';
import './Skeleton.css';

/**
 * Skeleton
 *
 * A lightweight placeholder component that mimics content loading.
 * Supports multiple shapes (square, rounded, circular, text) and smooth shimmer animation.
 *
 * @example
 * ```tsx
 * <Skeleton variant="rounded" width={120} height={80} />
 * <Skeleton variant="circular" width={50} height={50} />
 * <Skeleton variant="text" width="100%" lines={3} />
 * ```
 *
 * @returns {React.JSX} A single avatar or group of avatars
 */
const Skeleton = ({
  variant = 'rounded',
  width = 100,
  height = 100,
  lines = 1
}: SkeletonProps): Readonly<ReactNode> => {
  if (variant === 'text') {
    return (
      <div className="Skeleton__text-group" style={{ width }}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="Skeleton Skeleton__body Skeleton__body--text" />
        ))}
      </div>
    );
  }

  return <div className={`Skeleton Skeleton__body Skeleton__body--${variant}`} style={{ width, height }} />;
};

export default Skeleton;

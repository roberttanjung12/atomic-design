import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { IThemeManager } from '../../ThemeManager.type';

/**
 * Custom React hook that determines a contrasting background color based on the luminance of a given image.
 *
 * Loads the image from the provided URL, calculates the average luminance of its pixels,
 * and sets the background color to either the primary dark color from the theme, white, or a fallback color.
 *
 * - If the image's average luminance is high (bright image), returns the theme's primary dark color or black.
 * - If the image's average luminance is low (dark image), returns white.
 * - If the image fails to load, returns a fallback color (`#F0F0F0`).
 *
 * @param imageUrl - The URL of the image to analyze. If `null`, no analysis is performed.
 * @returns The computed contrasting background color as a string.
 */
const useContrastBackground = (imageUrl: string | null) => {
  const [contrastBg, setContrastBg] = useState('transparent');
  const { watch } = useFormContext<IThemeManager>();
  const primaryDark = watch('palette.primary.dark');

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();

    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');

      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');

      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let totalLuminance = 0;
      let pixelCount = 0;

      for (let i = 0; i < data.length; i += 40) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (a > 50) {
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

          totalLuminance += luminance;
          pixelCount++;
        }
      }

      const avgLuminance = totalLuminance / pixelCount;

      if (avgLuminance > 128) {
        setContrastBg(primaryDark || '#000000');
      } else {
        setContrastBg('#FFFFFF');
      }
    };

    img.onerror = () => {
      setContrastBg('#F0F0F0');
    };
  }, [imageUrl, primaryDark]);

  return contrastBg;
};

export default useContrastBackground;

const compressImage = async ({ file, onCompress }: { file: File; onCompress: (progress: number) => void }) => {
  for (let i = 1; i <= 100; i += 10) {
    onCompress(i);
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  return file;
};

export default compressImage;

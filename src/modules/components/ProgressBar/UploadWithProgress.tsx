'use client';

import React, { useState, useRef } from 'react';
import { CloudUpload, Delete, InsertDriveFile } from '@mui/icons-material';
import { Box, Button, Typography, Stack, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProgressBar } from '@/@dront/components';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const DropZone = styled(Paper)(({ theme }) => ({
  border: `2px dashed ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main
  },
  '&.dragover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover
  }
}));

const FileItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[50]
}));

interface FileWithProgress {
  file: File;
  progress: number;
  isUploading: boolean;
  isCompleted: boolean;
  estimatedTime?: number;
}

const UploadWithProgress = () => {
  const [files, setFiles] = useState<FileWithProgress[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = (fileIndex: number) => {
    const interval = setInterval(() => {
      setFiles(prevFiles => {
        const newFiles = [...prevFiles];
        const currentFile = newFiles[fileIndex];

        if (currentFile.progress >= 100) {
          clearInterval(interval);
          currentFile.isUploading = false;
          currentFile.isCompleted = true;
          currentFile.estimatedTime = 0;

          return newFiles;
        }

        const increment = Math.random() * 15 + 5;

        currentFile.progress = Math.min(currentFile.progress + increment, 100);

        // Calculate estimated time (mock calculation)
        const remaining = 100 - currentFile.progress;

        currentFile.estimatedTime = Math.round((remaining / 10) * Math.random() * 5 + 1);

        return newFiles;
      });
    }, 500);
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: FileWithProgress[] = Array.from(selectedFiles).map(file => ({
      file,
      progress: 0,
      isUploading: true,
      isCompleted: false,
      estimatedTime: Math.round(Math.random() * 10 + 5)
    }));

    setFiles(prev => [...prev, ...newFiles]);

    // Start simulation for each new file
    newFiles.forEach((_, index) => {
      const fileIndex = files.length + index;

      setTimeout(() => simulateUpload(fileIndex), 200 * index);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Stack spacing={3}>
      <DropZone
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <CloudUpload sx={{ fontSize: 48, color: 'grey.400', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Drop files here or click to browse
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Supports multiple file uploads
        </Typography>
        <Button component="label" variant="contained" startIcon={<CloudUpload />} sx={{ mt: 2 }}>
          Choose Files
          <VisuallyHiddenInput
            ref={fileInputRef}
            type="file"
            multiple
            onChange={e => handleFileSelect(e.target.files)}
          />
        </Button>
      </DropZone>

      {files.length > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Upload Progress
          </Typography>
          <Stack spacing={2}>
            {files.map((fileWithProgress, index) => (
              <FileItem key={`${fileWithProgress.file.name}-${index}`}>
                <InsertDriveFile color="primary" />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {fileWithProgress.file.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ({formatFileSize(fileWithProgress.file.size)})
                    </Typography>
                  </Box>

                  {fileWithProgress.isCompleted ? (
                    <ProgressBar value={100} label="Upload completed" color="success" size="small" />
                  ) : fileWithProgress.isUploading ? (
                    <ProgressBar
                      value={fileWithProgress.progress}
                      label="Uploading..."
                      showEstimatedTime
                      estimatedTimeSeconds={fileWithProgress.estimatedTime}
                      color="primary"
                      size="small"
                      striped
                    />
                  ) : (
                    <ProgressBar value={0} label="Waiting to upload..." color="warning" size="small" />
                  )}
                </Box>
                <IconButton size="small" onClick={() => removeFile(index)}>
                  <Delete />
                </IconButton>
              </FileItem>
            ))}
          </Stack>
        </Box>
      )}
    </Stack>
  );
};

export default UploadWithProgress;

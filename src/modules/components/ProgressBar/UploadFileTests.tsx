import React, { useState } from 'react';
import { CloudUpload, InsertDriveFile, Delete, CheckCircle, Error, Pause, PlayArrow } from '@mui/icons-material';
import { Box, Button, Typography, Stack, Paper, IconButton, Divider, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProgressBar } from '@/@dront/components';

const UploadContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  border: `2px dashed ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover
  }
}));

const FileItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.paper
}));

interface FileUploadItem {
  id: string;
  name: string;
  size: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error' | 'paused';
}

const UploadFileTests: React.FC = () => {
  const [files, setFiles] = useState<FileUploadItem[]>([
    {
      id: '1',
      name: 'Upload File',
      size: '2.5 MB',
      progress: 50,
      status: 'uploading'
    },
    {
      id: '2',
      name: 'document.pdf',
      size: '1.2 MB',
      progress: 100,
      status: 'completed'
    },
    {
      id: '3',
      name: 'presentation.pptx',
      size: '5.8 MB',
      progress: 75,
      status: 'uploading'
    },
    {
      id: '4',
      name: 'image.jpg',
      size: '800 KB',
      progress: 30,
      status: 'error'
    },
    {
      id: '5',
      name: 'video.mp4',
      size: '15.3 MB',
      progress: 25,
      status: 'paused'
    }
  ]);

  const handleToggleStatus = (id: string) => {
    setFiles(prev =>
      prev.map(file => {
        if (file.id === id) {
          if (file.status === 'uploading') {
            return { ...file, status: 'paused' as const };
          } else if (file.status === 'paused') {
            return { ...file, status: 'uploading' as const };
          }
        }

        return file;
      })
    );
  };

  const handleRemoveFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'error':
        return 'error';
      case 'paused':
        return 'warning';
      default:
        return 'primary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle color="success" />;
      case 'error':
        return <Error color="error" />;
      case 'paused':
        return <Pause color="warning" />;
      default:
        return null;
    }
  };

  return (
    <Stack spacing={4}>
      {/* Upload Area */}
      <UploadContainer elevation={0}>
        <CloudUpload sx={{ fontSize: 48, color: 'grey.400', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Drop files here or click to upload
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Support for multiple file formats
        </Typography>
        <Button variant="contained" component="label" startIcon={<CloudUpload />}>
          Choose Files
          <input type="file" hidden multiple />
        </Button>
      </UploadContainer>

      <Divider />

      {/* File List with Progress */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Upload Progress ({files.length} files)
        </Typography>

        <Stack spacing={2}>
          {files.map(file => (
            <FileItem key={file.id}>
              <InsertDriveFile color="primary" />

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {file.name}
                  </Typography>

                  <Chip size="small" label={file.status} color={getStatusColor(file.status)} variant="outlined" />

                  <Box sx={{ flex: 1 }} />

                  <Typography variant="caption" color="text.secondary">
                    {file.size}
                  </Typography>
                </Box>

                {file.status === 'completed' ? (
                  <ProgressBar value={100} label="Upload completed" color="success" size="small" radius="sm" />
                ) : file.status === 'error' ? (
                  <ProgressBar value={file.progress} label="Upload failed" color="error" size="small" radius="sm" />
                ) : (
                  <ProgressBar
                    value={file.progress}
                    label={file.status === 'paused' ? 'Upload paused' : 'Uploading...'}
                    color={file.status === 'paused' ? 'warning' : 'primary'}
                    showEstimatedTime
                    estimatedTimeSeconds={Math.round((100 - file.progress) / 10)}
                    size="small"
                    radius="sm"
                    striped={file.status === 'uploading'}
                  />
                )}
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {(file.status === 'uploading' || file.status === 'paused') && (
                  <IconButton
                    size="small"
                    onClick={() => handleToggleStatus(file.id)}
                    color={file.status === 'paused' ? 'primary' : 'default'}
                  >
                    {file.status === 'paused' ? <PlayArrow /> : <Pause />}
                  </IconButton>
                )}

                {getStatusIcon(file.status)}

                <IconButton size="small" onClick={() => handleRemoveFile(file.id)} color="error">
                  <Delete />
                </IconButton>
              </Box>
            </FileItem>
          ))}
        </Stack>
      </Box>

      {/* Simple Upload Examples */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Simple Upload Examples
        </Typography>

        <Stack spacing={3}>
          {/* Basic Upload */}
          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Basic Upload Progress
            </Typography>
            <ProgressBar value={50} label="Upload File" color="primary" radius="sm" showPercentage />
          </Box>

          {/* Upload with Time */}
          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Upload with Estimated Time
            </Typography>
            <ProgressBar
              value={75}
              label="document.pdf"
              color="success"
              radius="md"
              showEstimatedTime
              estimatedTimeSeconds={30}
            />
          </Box>

          {/* Upload with Stripes */}
          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Active Upload with Animation
            </Typography>
            <ProgressBar
              value={40}
              label="video.mp4"
              color="info"
              radius="lg"
              striped
              showEstimatedTime
              estimatedTimeSeconds={120}
            />
          </Box>

          {/* Completed Upload */}
          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Completed Upload
            </Typography>
            <ProgressBar value={100} label="image.jpg - Upload completed" color="success" radius="xl" />
          </Box>

          {/* Failed Upload */}
          <Box>
            <Typography variant="subtitle2" gutterBottom color="text.secondary">
              Failed Upload
            </Typography>
            <ProgressBar value={65} label="failed_file.zip - Upload failed" color="error" radius={25} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default UploadFileTests;

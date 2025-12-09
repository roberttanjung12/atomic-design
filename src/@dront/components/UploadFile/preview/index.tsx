import React from 'react';
import { CheckCircle, DeleteOutline, Visibility } from '@mui/icons-material';
import { Avatar, Box, IconButton, Skeleton, useTheme, Button } from '@mui/material';

import { sizeOf } from '../../DocumentFileType/utils';
import { PreviewWrapper, ProcessCompress } from '../file-uploader.styled';

const commonStyling = {
  width: '56px',
  height: '56px',
  borderRadius: '8px'
};
const previewImageStyling: React.CSSProperties = {
  ...commonStyling,
  objectFit: 'cover'
};

interface PreviewProps {
  name: string;
  size: number;
  process: number;
  loadingInfo: string;
  removePreview: () => void;
  type?: string;
  url?: string;
  showViewButton?: boolean;
  readOnly?: boolean;
}

const Preview = ({
  name,
  size,
  process,
  loadingInfo,
  removePreview,
  type,
  url,
  showViewButton = true,
  readOnly = false
}: PreviewProps) => {
  const theme = useTheme();
  const isUploaded = process >= 100;
  const isImage = type && type.startsWith('image/');

  if (!process) return null;

  const getFileIcon = (fileType?: string) => {
    if (fileType === 'application/pdf') return 'PDF';
    if (fileType && fileType.startsWith('image/')) return 'IMG';
    if (fileType && (fileType.includes('excel') || fileType.includes('spreadsheet'))) return 'XLS';
    if (fileType && (fileType.includes('word') || fileType.includes('document'))) return 'DOC';
    if (fileType && fileType.startsWith('text/')) return 'TXT';

    return 'FILE';
  };

  const handleViewFile = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  if (readOnly && isUploaded) {
    return (
      <PreviewWrapper onClick={event => event.stopPropagation()}>
        {isImage && url ? (
          <img alt={name} src={url} style={previewImageStyling} />
        ) : (
          <Avatar
            sx={{
              borderRadius: '8px',
              width: '56px',
              height: '56px',
              background: ({ palette }) => palette.primary.light
            }}
          >
            {getFileIcon(type)}
          </Avatar>
        )}

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
        </Box>

        {showViewButton && url && (
          <Button variant="outlined" size="small" onClick={handleViewFile} sx={{ minWidth: 'auto', px: 2 }}>
            Lihat
          </Button>
        )}
      </PreviewWrapper>
    );
  }

  return (
    <PreviewWrapper onClick={event => event.stopPropagation()}>
      {isUploaded ? (
        isImage && url ? (
          <img alt={name} src={url} style={previewImageStyling} />
        ) : (
          <Avatar
            sx={{
              borderRadius: '8px',
              width: '56px',
              height: '56px',
              background: ({ palette }) => palette.primary.light
            }}
          >
            {getFileIcon(type)}
          </Avatar>
        )
      ) : (
        <Skeleton sx={commonStyling} variant="rectangular" />
      )}

      <Box sx={{ flexGrow: 1, width: '0%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isUploaded && showViewButton && url && (
              <IconButton size="small" onClick={handleViewFile}>
                <Visibility />
              </IconButton>
            )}
            {isUploaded && <CheckCircle sx={{ color: theme.palette.success.main }} />}
          </Box>
        </Box>

        <ProcessCompress>
          <Box
            sx={{
              width: `${process}%`,
              background: ({ palette }) => (isUploaded ? palette.success.main : palette.primary.main)
            }}
          />
        </ProcessCompress>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>{isUploaded ? `${sizeOf(size)}` : loadingInfo}</Box>
          <Box>{process}%</Box>
        </Box>
      </Box>

      {!readOnly && (
        <IconButton color="error" disabled={!isUploaded} onClick={removePreview}>
          <DeleteOutline />
        </IconButton>
      )}
    </PreviewWrapper>
  );
};

export default Preview;

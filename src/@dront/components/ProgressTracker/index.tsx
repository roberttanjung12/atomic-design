'use client';

import React from 'react';
import { Check } from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import {
  getSizeStyles,
  getStepStyles,
  getConnectorStyles,
  getConnectorContainerStyles,
  getLabelStyles,
  calculateStepStatus
} from './ProgressTracker.helpers';
import { type ProgressTrackerProps, type StepComponentProps, type ConnectorProps } from './ProgressTracker.types';

const StepComponent = ({
  step,
  index,
  isCompleted,
  size,
  clickable,
  showLabel,
  showDescription,
  onClick,
  color,
  sx = {}
}: Omit<StepComponentProps, 'isActive'>) => {
  const theme = useTheme();
  const sizeStyles = getSizeStyles(size);
  const stepStyles = getStepStyles(step.status, color, theme, clickable, step.disabled);
  const labelStyles = getLabelStyles(step.status, color, theme);

  const handleClick = () => {
    if (clickable && !step.disabled && onClick) {
      onClick();
    }
  };

  const stepContent = isCompleted ? (
    <Check sx={{ fontSize: sizeStyles.iconSize }} />
  ) : step.icon ? (
    step.icon
  ) : (
    <Typography
      variant="body2"
      sx={{
        fontSize: sizeStyles.fontSize,
        fontWeight: 'bold',
        lineHeight: 1
      }}
    >
      {index + 1}
    </Typography>
  );

  return (
    <Stack direction="column" alignItems="center" spacing={sizeStyles.labelSpacing / 8} sx={{ flex: 'none', ...sx }}>
      <Box
        onClick={handleClick}
        sx={{
          width: sizeStyles.stepSize,
          height: sizeStyles.stepSize,
          borderRadius: '50%',
          border: '2px solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...stepStyles,
          ...(step.disabled && {
            opacity: 0.5,
            pointerEvents: 'none'
          })
        }}
      >
        {stepContent}
      </Box>

      {showLabel && (
        <Typography
          variant="caption"
          align="center"
          sx={{
            ...labelStyles,
            fontSize: sizeStyles.fontSize,
            maxWidth: sizeStyles.stepSize * 2,
            wordBreak: 'break-word',
            lineHeight: 1.2
          }}
        >
          {step.label}
        </Typography>
      )}

      {showDescription && step.description && (
        <Typography
          variant="caption"
          align="center"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: `${parseFloat(sizeStyles.fontSize) * 0.85}rem`,
            maxWidth: sizeStyles.stepSize * 2.5,
            wordBreak: 'break-word',
            lineHeight: 1.1
          }}
        >
          {step.description}
        </Typography>
      )}
    </Stack>
  );
};

const Connector = ({ active, orientation, size, color, children }: ConnectorProps) => {
  const theme = useTheme();
  const connectorStyles = getConnectorStyles(active, orientation, size, color, theme);

  if (children) {
    return <Box sx={connectorStyles}>{children}</Box>;
  }

  return <Box sx={connectorStyles} />;
};

const ProgressTracker = ({
  steps,
  activeStep = 0,
  size = 'md',
  orientation = 'horizontal',
  showLabels = true,
  showDescriptions = false,
  showConnectors = true,
  clickable = false,
  connector,
  onStepClick,
  className,
  sx = {},
  alternativeLabel = false,
  color = 'primary'
}: ProgressTrackerProps) => {
  if (!steps || steps.length === 0) {
    console.warn('ProgressTracker: No steps provided');

    return null;
  }
  const processedSteps = steps.map((step, index) => ({
    ...step,
    status: step.status || calculateStepStatus(index, activeStep)
  }));

  const handleStepClick = (stepIndex: number, step: any) => {
    if (onStepClick) {
      onStepClick(stepIndex, step);
    }
  };

  const isHorizontal = orientation === 'horizontal';
  const containerDirection = isHorizontal ? 'row' : 'column';

  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        ...sx
      }}
    >
      <Stack
        direction={containerDirection}
        alignItems={isHorizontal ? 'flex-start' : 'center'}
        spacing={0}
        sx={{
          position: 'relative',
          ...(isHorizontal && {
            justifyContent: 'flex-start',
            gap: 0
          })
        }}
      >
        {processedSteps.map((step, index) => {
          const isCompleted = step.status === 'completed';
          const isStepClickable = clickable || step.clickable;
          const showConnector = showConnectors && index < processedSteps.length - 1;

          if (isHorizontal) {
            return (
              <React.Fragment key={step.id || index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
                  {/* Step Component */}
                  <StepComponent
                    step={step}
                    index={index}
                    isCompleted={isCompleted}
                    size={size}
                    clickable={Boolean(isStepClickable)}
                    showLabel={showLabels}
                    showDescription={showDescriptions}
                    onClick={() => handleStepClick(index, step)}
                    color={color}
                    sx={{
                      zIndex: 1,
                      ...(alternativeLabel && {
                        alignItems: 'center',
                        textAlign: 'center'
                      })
                    }}
                  />
                </Box>

                {showConnector && (
                  <Box sx={getConnectorContainerStyles(orientation, size)}>
                    <Connector active={isCompleted} orientation={orientation} size={size} color={color}>
                      {connector}
                    </Connector>
                  </Box>
                )}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={step.id || index}>
                <StepComponent
                  step={step}
                  index={index}
                  isCompleted={isCompleted}
                  size={size}
                  clickable={Boolean(isStepClickable)}
                  showLabel={showLabels}
                  showDescription={showDescriptions}
                  onClick={() => handleStepClick(index, step)}
                  color={color}
                />

                {showConnector && (
                  <Box sx={getConnectorContainerStyles(orientation, size)}>
                    <Connector active={isCompleted} orientation={orientation} size={size} color={color}>
                      {connector}
                    </Connector>
                  </Box>
                )}
              </React.Fragment>
            );
          }
        })}
      </Stack>
    </Box>
  );
};

export default ProgressTracker;

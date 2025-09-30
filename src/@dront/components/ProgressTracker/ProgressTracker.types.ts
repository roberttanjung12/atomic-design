import type React from 'react';

/**
 * Status of each step in the progress tracker
 */
export type StepStatus = 'completed' | 'active' | 'inactive';

/**
 * Size options for the progress tracker
 */
export type ProgressTrackerSize = 'sm' | 'md' | 'lg';

/**
 * Orientation of the progress tracker
 */
export type ProgressTrackerOrientation = 'horizontal' | 'vertical';

/**
 * Individual step configuration
 */
export interface Step {
  /**
   * Unique identifier for the step
   */
  id: string | number;

  /**
   * The label/content to display for this step
   */
  label: string;

  /**
   * Optional description for the step
   */
  description?: string;

  /**
   * Current status of the step
   */
  status: StepStatus;

  /**
   * Whether the step is clickable/interactive
   */
  clickable?: boolean;

  /**
   * Optional icon to display instead of step number
   */
  icon?: React.ReactNode;

  /**
   * Whether the step is disabled
   */
  disabled?: boolean;
}

/**
 * Props for the ProgressTracker component
 */
export interface ProgressTrackerProps {
  /**
   * Array of steps to display in the progress tracker
   */
  steps: Step[];

  /**
   * Currently active step index (0-based)
   */
  activeStep?: number;

  /**
   * Size variant of the progress tracker
   * @default 'md'
   */
  size?: ProgressTrackerSize;

  /**
   * Orientation of the progress tracker
   * @default 'horizontal'
   */
  orientation?: ProgressTrackerOrientation;

  /**
   * Whether to show step labels
   * @default true
   */
  showLabels?: boolean;

  /**
   * Whether to show step descriptions
   * @default false
   */
  showDescriptions?: boolean;

  /**
   * Whether to show connector lines between steps
   * @default true
   */
  showConnectors?: boolean;

  /**
   * Whether steps are clickable by default
   * @default false
   */
  clickable?: boolean;

  /**
   * Custom connector element
   */
  connector?: React.ReactNode;

  /**
   * Callback fired when a step is clicked
   */
  onStepClick?: (stepIndex: number, step: Step) => void;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Custom styles
   */
  sx?: Record<string, any>;

  /**
   * Whether to use alternative styling
   */
  alternativeLabel?: boolean;

  /**
   * Color scheme for the tracker
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

/**
 * Props for individual Step component
 */
export interface StepComponentProps {
  /**
   * Step data
   */
  step: Step;

  /**
   * Step index in the sequence
   */
  index: number;

  /**
   * Whether this is the active step
   */
  isActive: boolean;

  /**
   * Whether this step is completed
   */
  isCompleted: boolean;

  /**
   * Size of the step component
   */
  size: ProgressTrackerSize;

  /**
   * Whether the step is clickable
   */
  clickable: boolean;

  /**
   * Whether to show the label
   */
  showLabel: boolean;

  /**
   * Whether to show the description
   */
  showDescription: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Color scheme
   */
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /**
   * Custom styles
   */
  sx?: Record<string, any>;
}

/**
 * Props for the Connector component
 */
export interface ConnectorProps {
  /**
   * Whether the connector is active (connects to completed step)
   */
  active: boolean;

  /**
   * Orientation of the connector
   */
  orientation: ProgressTrackerOrientation;

  /**
   * Size of the connector
   */
  size: ProgressTrackerSize;

  /**
   * Color scheme
   */
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /**
   * Custom connector element
   */
  children?: React.ReactNode;
}

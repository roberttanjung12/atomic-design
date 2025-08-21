/**
 * Props for the DefaultContentWrapper component.
 */
interface DefaultContentWrapperProps {
  /**
   * The content to be rendered inside the wrapper.
   */
  children: React.ReactNode;
}

/**
 * DefaultContentWrapper is a simple wrapper component that directly renders its children
 * without applying any additional layout or styling.
 *
 * Useful as a fallback when no custom wrapper is provided.
 *
 * @param {DefaultContentWrapperProps} props - The props for the component.
 * @returns {JSX.Element} The rendered children.
 */
const DefaultContentWrapper = ({ children }: DefaultContentWrapperProps) => {
  return <>{children}</>;
};

export default DefaultContentWrapper;

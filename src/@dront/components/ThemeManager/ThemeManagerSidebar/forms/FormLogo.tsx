import { Box, List, Typography } from '@mui/material';
import FieldUploadImageControlled from '../../components/FieldUploadImageControlled';
import LogoIcon from '../../components/LogoIcon';

/**
 * Renders the form section for customizing website logos in different themes and orientations.
 *
 * Displays a header with a logo icon and descriptive text, followed by a list of image upload fields
 * for configuring the logo in various formats (light, dark, horizontal, vertical).
 *
 * @returns {JSX.Element} The form UI for uploading and managing website logos.
 */
const FormLogo = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <LogoIcon />

        <Typography fontWeight="bold" mt={4} variant="body1">
          Website Logo
        </Typography>
        <Typography variant="body2">Customize the logo on various elements of the website.</Typography>
      </Box>

      <Box>
        <List sx={{ width: '100%', pr: 2 }}>
          <FieldUploadImageControlled label="Light" name="logo.light" id="upload-image-main-light" />
          <FieldUploadImageControlled
            label="Light Horizontal"
            name="logo.lightHorizontal"
            id="upload-image-main-light-horizontal"
          />
          <FieldUploadImageControlled
            label="Light Vertical"
            name="logo.lightVertical"
            id="upload-image-main-light-vertical"
          />
          <FieldUploadImageControlled label="Dark" name="logo.dark" id="upload-image-main-dark" />
          <FieldUploadImageControlled
            label="Dark Horizontal"
            name="logo.darkHorizontal"
            id="upload-image-main-dark-horizontal"
          />
          <FieldUploadImageControlled
            label="Dark Vertical"
            name="logo.darkVertical"
            id="upload-image-main-dark-vertical"
          />
        </List>
      </Box>
    </>
  );
};

export default FormLogo;

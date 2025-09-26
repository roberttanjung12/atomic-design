import { Box, List, Typography } from '@mui/material';
import AccordionContainer from '../../components/AccordionContainer';
import FieldChooseColorControlled from '../../components/FieldChooseColorControlled';
import PaintIcon from '../../components/PaintIcon';

const FormPalette = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <PaintIcon />

        <Typography fontWeight="bold" mt={4} variant="body1">
          Color Palette
        </Typography>
        <Typography variant="body2">Set colors for each element throughout your website.</Typography>
      </Box>

      {/* Primary Palette */}
      <AccordionContainer title="Primary">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Main" name="palette.primary.main" />
          <FieldChooseColorControlled label="Light" name="palette.primary.light" />
          <FieldChooseColorControlled label="Dark" name="palette.primary.dark" />
          <FieldChooseColorControlled label="Contrast Text" name="palette.primary.contrastText" />
        </List>
      </AccordionContainer>

      {/* Secondary Palette */}
      <AccordionContainer title="Secondary">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Main" name="palette.secondary.main" />
          <FieldChooseColorControlled label="Light" name="palette.secondary.light" />
          <FieldChooseColorControlled label="Dark" name="palette.secondary.dark" />
          <FieldChooseColorControlled label="Contrast Text" name="palette.secondary.contrastText" />
        </List>
      </AccordionContainer>

      {/* Error Palette */}
      <AccordionContainer title="Error">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Main" name="palette.error.main" />
          <FieldChooseColorControlled label="Light" name="palette.error.light" />
          <FieldChooseColorControlled label="Dark" name="palette.error.dark" />
          <FieldChooseColorControlled label="Contrast Text" name="palette.error.contrastText" />
        </List>
      </AccordionContainer>

      {/* Warning Palette */}
      <AccordionContainer title="Warning">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Main" name="palette.warning.main" />
          <FieldChooseColorControlled label="Light" name="palette.warning.light" />
          <FieldChooseColorControlled label="Dark" name="palette.warning.dark" />
          <FieldChooseColorControlled label="Contrast Text" name="palette.warning.contrastText" />
        </List>
      </AccordionContainer>

      {/* Info Palette */}
      <AccordionContainer title="Info">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Main" name="palette.info.main" />
          <FieldChooseColorControlled label="Light" name="palette.info.light" />
          <FieldChooseColorControlled label="Dark" name="palette.info.dark" />
          <FieldChooseColorControlled label="Contrast Text" name="palette.info.contrastText" />
        </List>
      </AccordionContainer>

      {/* Success Palette */}
      <AccordionContainer title="Success">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Main" name="palette.success.main" />
          <FieldChooseColorControlled label="Light" name="palette.success.light" />
          <FieldChooseColorControlled label="Dark" name="palette.success.dark" />
          <FieldChooseColorControlled label="Contrast Text" name="palette.success.contrastText" />
        </List>
      </AccordionContainer>

      {/* Text Palette */}
      <AccordionContainer title="Text">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Primary" name="palette.text.primary" />
          <FieldChooseColorControlled label="Secondary" name="palette.text.secondary" />
          <FieldChooseColorControlled label="Disabled" name="palette.text.disabled" />
        </List>
      </AccordionContainer>

      {/* Background Palette */}
      <AccordionContainer title="Background">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="Paper" name="palette.background.paper" />
          <FieldChooseColorControlled label="Default" name="palette.background.default" />
        </List>
      </AccordionContainer>

      {/* Grey Palette */}
      <AccordionContainer title="Grey">
        <List sx={{ width: '100%', py: 0 }}>
          <FieldChooseColorControlled label="50" name="palette.grey.50" />
          <FieldChooseColorControlled label="100" name="palette.grey.100" />
          <FieldChooseColorControlled label="200" name="palette.grey.200" />
          <FieldChooseColorControlled label="300" name="palette.grey.300" />
          <FieldChooseColorControlled label="400" name="palette.grey.400" />
          <FieldChooseColorControlled label="500" name="palette.grey.500" />
          <FieldChooseColorControlled label="600" name="palette.grey.600" />
          <FieldChooseColorControlled label="700" name="palette.grey.700" />
          <FieldChooseColorControlled label="800" name="palette.grey.800" />
          <FieldChooseColorControlled label="900" name="palette.grey.900" />
        </List>
      </AccordionContainer>
    </>
  );
};

export default FormPalette;

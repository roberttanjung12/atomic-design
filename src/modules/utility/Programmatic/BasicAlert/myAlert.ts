import { createProgrammatic } from '@dront/ui/programmatic';
import TheAlert from './TheAlert';

const myAlert = createProgrammatic(TheAlert, {
  initialState: { message: '' }
});

export default myAlert;

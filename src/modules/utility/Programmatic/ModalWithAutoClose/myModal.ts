import { createProgrammatic } from '@dront/ui/programmatic';
import TheAlert from './TheModal';

const myModal = createProgrammatic(TheAlert, {
  initialState: {
    message: ''
  }
});

export default myModal;

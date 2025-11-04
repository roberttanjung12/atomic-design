import { createProgrammatic } from '@dront/ui/programmatic';
import TheDialog from './TheDialog';

const myDialog = createProgrammatic(TheDialog, {
  initialState: {
    title: '',
    description: ''
  }
});

export default myDialog;

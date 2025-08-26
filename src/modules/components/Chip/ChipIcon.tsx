import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Chip } from '@/@dront/components';

const ChipIcon = () => {
  return <Chip label="With Icon" color="default" icon={<FingerprintIcon />} />;
};

export default ChipIcon;

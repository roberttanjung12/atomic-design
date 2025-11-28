import { AccessControlRegistry } from '@dront/ui/AccessControl';
import HomeView from './HomeView';

const HomePage = () => {
  return (
    <AccessControlRegistry path="/">
      <HomeView />
    </AccessControlRegistry>
  );
};

export default HomePage;

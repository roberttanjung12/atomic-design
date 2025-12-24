import { useState } from 'react';
import useBroadcastChannel from '@dront/ui/useBroadcastChannel';
import { Button } from '@mui/material';

interface BroadcastData {
  type: 'login' | 'logout';
}

const UseBroadcastChannelBasic = () => {
  const [path, setPath] = useState<'/login' | '/dashboard'>('/login');

  const handleOnMessage = (data: BroadcastData) => {
    if (data.type === 'login') {
      setPath('/dashboard');
    } else {
      setPath('/login');
    }
  };

  const { postMessage } = useBroadcastChannel<BroadcastData>('auth', handleOnMessage);

  const handleSendMessage = (type: BroadcastData['type']) => {
    postMessage({
      type
    });

    if (type === 'login') {
      setPath('/dashboard');
    } else {
      setPath('/login');
    }
  };

  return (
    <div>
      <p>Current Path: {path}</p>

      {path === '/login' && (
        <Button variant="outlined" onClick={() => handleSendMessage('login')}>
          Login
        </Button>
      )}
      {path === '/dashboard' && (
        <Button variant="outlined" onClick={() => handleSendMessage('logout')}>
          Logout
        </Button>
      )}

      <p>Please open a new tab to see the changes.</p>
    </div>
  );
};

export default UseBroadcastChannelBasic;

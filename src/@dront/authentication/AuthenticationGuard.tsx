import React, { useEffect, useState, type ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LoadingScreen } from '../components';

type ProtectionLevel = 'public' | 'authenticated' | 'unauthenticated';

interface AuthenticationGuardProps {
  protectionLevel: ProtectionLevel;
  fallback?: ReactNode;
  children: ReactNode;
}

const AuthenticationGuard = ({ protectionLevel, fallback, children }: AuthenticationGuardProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuthorization = () => {
    const token = localStorage.getItem('dront');

    console.log('Authorization:', isAuthorized);
    console.log('Path:', pathname);
    console.log('Token:', token);
    console.log('Protection Level:', protectionLevel);

    switch (protectionLevel) {
      case 'public':
        setIsAuthorized(true);
        break;

      case 'authenticated':
        if (!token) {
          router.replace('/login');
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
        break;

      case 'unauthenticated':
        if (token) {
          router.replace('/dashboard/overview');
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
        break;

      default:
        setIsAuthorized(false);
    }
  };

  useEffect(() => {
    checkAuthorization();

    window.addEventListener('storage', checkAuthorization);

    return () => {
      window.removeEventListener('storage', checkAuthorization);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [protectionLevel, router]);

  if (isAuthorized === null) {
    return fallback || <LoadingScreen background="#000000" color="white" height="100vh" />;
  }

  if (!isAuthorized) return null;

  return <>{children}</>;
};

export default AuthenticationGuard;

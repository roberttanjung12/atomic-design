import React, { useEffect, useState, type JSX, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '../components';

type ProtectionLevel = 'public' | 'authenticated' | 'unauthenticated';

interface AuthenticationGuardBaseProps {
  fallback?: ReactNode;
  children: ReactNode;
}

interface AuthenticationGuardWithGetTokenProps extends AuthenticationGuardBaseProps {
  protectionLevel: 'authenticated' | 'unauthenticated';
  getToken: () => string;
}

interface AuthenticationGuardWithoutGetTokenProps extends AuthenticationGuardBaseProps {
  protectionLevel: 'public';
}

interface AuthenticationGuardProps extends AuthenticationGuardBaseProps {
  protectionLevel: ProtectionLevel;
  getToken?: () => string;
}

function AuthenticationGuard(props: AuthenticationGuardWithGetTokenProps): JSX.Element;

function AuthenticationGuard(props: AuthenticationGuardWithoutGetTokenProps): JSX.Element;

function AuthenticationGuard({
  protectionLevel,
  getToken,
  fallback,
  children
}: Readonly<AuthenticationGuardProps>): JSX.Element | null {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const router = useRouter();

  const checkAuthorization = () => {
    const token = getToken?.();
    const hasToken = !!token;

    switch (protectionLevel) {
      case 'public':
        setIsAuthorized(true);
        break;

      case 'authenticated':
        if (!hasToken) {
          router.replace('/login');
          setIsAuthorized(false);
        } else {
          setIsAuthorized(true);
        }
        break;

      case 'unauthenticated':
        if (hasToken) {
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

    return () => {
      checkAuthorization();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [protectionLevel, router]);

  if (isAuthorized === null) {
    return <>{fallback}</> || <LoadingScreen background="#000000" color="white" height="100vh" />;
  }

  if (!isAuthorized) return null;

  return <>{children}</>;
}

export default AuthenticationGuard;

import { useEffect } from 'react';
import { router } from 'expo-router';
import { Loading } from '../components';

export default function Index() {
  useEffect(() => {
    // TODO: Check if user is authenticated
    // For now, redirect to login
    router.replace('/auth/login');
  }, []);

  return <Loading text="Initializing app..." />;
}
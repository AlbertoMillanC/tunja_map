'use client';

import { ErrorMessage } from '../components/shared/ErrorMessage';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <ErrorMessage 
        message={error.message || 'Algo salió mal'} 
        retry={reset}
      />
    </div>
  );
}

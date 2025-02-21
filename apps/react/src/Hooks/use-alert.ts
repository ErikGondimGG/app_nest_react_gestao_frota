import { useCallback } from 'react';
import { toast } from 'sonner';

export function useAlert() {
  const toastSuccess = useCallback((message: string) => {
    toast.success(message);
  }, []);

  const toastError = useCallback((message: string) => {
    toast.error(message);
  }, []);

  return { toastSuccess, toastError };
}

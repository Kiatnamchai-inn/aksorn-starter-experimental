import { useEffect, useContext, useCallback, use } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type InterceptFn<M extends 'push' | 'replace' | 'back' | 'forward'> = (
  originalMethod: AppRouterInstance[M],
  ...args: Parameters<AppRouterInstance[M]>
) => void;

const useInterceptAppRouter = <M extends 'push' | 'replace' | 'back' | 'forward'>(
  method: M,
  interceptFn: InterceptFn<M>,
): void => {
  const appRouter = useContext(AppRouterContext);

  useEffect(() => {
    if (!appRouter) {
      throw new Error('useInterceptAppRouter must be used within an App Router context');
    }

    const originalMethod: AppRouterInstance[M] = appRouter[method];

    appRouter[method] = ((...args: Parameters<AppRouterInstance[M]>) => {
      interceptFn(originalMethod, ...args);
    }) as AppRouterInstance[M];

    return () => {
      appRouter[method] = originalMethod;
    };
  }, [appRouter, method, interceptFn]);
};

export const useBeforeUnload = (isConfirm = false): void => {
  // Functions
  const handleIntercept = useCallback(
    async <M extends 'push' | 'replace' | 'back' | 'forward'>(
      original: AppRouterInstance[M],
      ...args: Parameters<AppRouterInstance[M]>
    ): Promise<void> => {
      if (!isConfirm) {
        // @ts-expect-error
        original(...args);
        return;
      }

      try {
        await NiceModal.show('before-unload');
        // @ts-expect-error
        original(...args);
      } catch (error) {
        // do nothing, user aborted the navigation
        return;
      }
    },
    [isConfirm],
  );

  useInterceptAppRouter('forward', handleIntercept);
  useInterceptAppRouter('back', handleIntercept);
  useInterceptAppRouter('push', handleIntercept);
  useInterceptAppRouter('replace', handleIntercept);
};

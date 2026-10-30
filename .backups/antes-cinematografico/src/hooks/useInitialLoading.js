import { useEffect, useState } from 'react';

export default function useInitialLoading() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let disposed = false;
    // Uma fonte lenta ou indisponível não deve bloquear o portfólio.
    const timeout = setTimeout(() => { if (!disposed) setReady(true); }, 2500);
    const finish = () => {
      clearTimeout(timeout);
      if (!disposed) setReady(true);
    };
    if (document.fonts) {
      Promise.all([document.fonts.load('400 16px Poppins'), document.fonts.ready]).then(finish, finish);
    } else finish();
    return () => { disposed = true; clearTimeout(timeout); };
  }, []);
  return ready;
}

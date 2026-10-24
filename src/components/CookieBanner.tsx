import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'cliff-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const close = (value: 'accept' | 'reject') => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="container-x rounded-2xl border border-white/10 bg-ink-800/95 p-5 backdrop-blur shadow-2xl shadow-black/50">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="text-sm text-white/80">
            This site uses cookies and related technologies, as described in our Cookie Statement,
            for purposes that may include site operation, analytics, enhanced user experience, or
            advertising. You may choose to consent, or manage your own preferences.{' '}
            <Link to="/privacy" className="underline hover:text-white">
              Privacy Statement
            </Link>{' '}
            |{' '}
            <Link to="/cookies" className="underline hover:text-white">
              Cookie Statement
            </Link>
          </p>
          <div className="flex gap-2 justify-end">
            <button onClick={() => close('accept')} className="btn-primary !py-2 !px-4">
              Accept All Cookies
            </button>
            <button onClick={() => close('reject')} className="btn-ghost !py-2 !px-4">
              Reject All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

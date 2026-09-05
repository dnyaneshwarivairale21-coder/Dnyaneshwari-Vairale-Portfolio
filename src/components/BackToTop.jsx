import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all z-40 flex items-center justify-center border-0 cursor-pointer"
    >
      <ArrowUp size={18} />
    </button>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Navbar } from './Navbar';

export function ClientLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(getPageFromPath(pathname));

  function getPageFromPath(path: string): string {
    switch (path) {
      case '/':
        return 'home';
      case '/contacto':
        return 'contact';
      case '/plan-desarrollo':
        return 'plan';
      default:
        return 'home';
    }
  }

  useEffect(() => {
    setCurrentPage(getPageFromPath(pathname));
  }, [pathname]);

  const handleNavigate = (page: string) => {
    let path = '/';
    switch (page) {
      case 'contact':
        path = '/contacto';
        break;
      case 'plan':
        path = '/plan-desarrollo';
        break;
      case 'home':
        path = '/';
        break;
    }
    router.push(path);
  };

  return (
    <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
  );
}

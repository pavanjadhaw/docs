import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useToggle } from 'react-use';
import sitemap from '../../../lib/sitemap';
import DesktopMenu from '../menu/DesktopMenu';
import MobileMenu from '../menu/MobileMenu';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export default function DocPageLayout({ title = 'Docs', children }: Props) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useToggle(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setSidebarOpen(false);
  }, [router.asPath]);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>MagicBell - {title}</title>
      </Head>
      <Header onToggleMenu={toggleSidebar} />
      <div className="max-w-screen-2xl mx-auto flex flex-1 overflow-hidden bg-white md:space-x-2 xl:space-x-10 w-full">
        <MobileMenu
          navigationItems={sitemap}
          isOpen={sidebarOpen}
          toggle={toggleSidebar}
        />
        <DesktopMenu navigationItems={sitemap} />
        <Content>{children}</Content>
      </div>
      <Footer />
    </div>
  );
}

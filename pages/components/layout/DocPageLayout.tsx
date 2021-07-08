import Head from 'next/head';
import React, { useState } from 'react';
import sitemap from '../../../lib/sitemap';
import DesktopMenu from '../menu/DesktopMenu';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export default function DocPageLayout({ title = 'Docs', children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>MagicBell - {title}</title>
      </Head>
      <Header onToggleMenu={toggleSidebar} />
      <div className="max-w-screen-2xl mx-auto flex flex-1 overflow-hidden bg-white md:space-x-4 lg:space-x-20">
        <DesktopMenu navigationItems={sitemap} />
        <Content>{children}</Content>
      </div>
      <Footer />
    </div>
  );
}

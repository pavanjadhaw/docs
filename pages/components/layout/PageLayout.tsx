import React, { useState } from "react";
import sitemap from "../../../lib/sitemap";
import DesktopMenu from "../menu/DesktopMenu";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function PageLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onToggleMenu={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden bg-white">
        <DesktopMenu navigationItems={sitemap} />
        <Content>{children}</Content>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import SideNav from "../components/landing/SideNav";
import HeroNew from "../components/landing/HeroNew";
import ManifestoStrip from "../components/landing/ManifestoStrip";
import FiereNew from "../components/landing/FiereNew";
import ProcessoNew from "../components/landing/ProcessoNew";
import GalleriaNew from "../components/landing/GalleriaNew";
import ContattiNew from "../components/landing/ContattiNew";
import FooterNew from "../components/landing/FooterNew";
import WhatsAppBubble from "../components/landing/WhatsAppBubble";

export default function Home() {
  return (
    <div className="bg-[#0f0f10] text-white min-h-screen overflow-x-hidden">
      <SideNav />
      <div>
        <HeroNew />
        <ManifestoStrip />
        <FiereNew />
        <ProcessoNew />
        <GalleriaNew />
        <ContattiNew />
        <FooterNew />
      </div>
      <WhatsAppBubble />
    </div>
  );
}
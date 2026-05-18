import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons for leaflet in vite/react
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const sedi = [
  {
    id: "milano",
    label: "Milano",
    flag: "🇮🇹",
    coords: [45.4654, 9.1859],
    address: "Zona Rho Fiera, Milano",
    role: "Design & Produzione",
    detail: "Hub creativo principale — progettazione 3D, prototipazione e coordinamento europeo.",
  },
  {
    id: "lagos",
    label: "Lagos",
    flag: "🇳🇬",
    coords: [6.4281, 3.4219],
    address: "282 Akin Olugbade St, Victoria Island",
    role: "Nigeria & Nord Africa",
    detail: "Sede operativa per West Africa — montaggio, logistica e coordinamento fieristico locale.",
  },
];

// Custom dark SVG marker
function createCustomIcon(active) {
  const color = active ? "#C8F000" : "#ffffff40";
  const svg = `<svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="${color}"/>
    <circle cx="14" cy="14" r="5" fill="${active ? "#111113" : "#ffffff20"}"/>
  </svg>`;
  return L.divIcon({
    className: "",
    html: svg,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -38],
  });
}

function MapViewUpdater({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true });

    const sizeTimer = window.setTimeout(() => {
      map.invalidateSize();
    }, 150);

    return () => window.clearTimeout(sizeTimer);
  }, [center, map]);

  return null;
}

export default function SediMap() {
  const [active, setActive] = useState("milano");
  const activeSede = sedi.find((s) => s.id === active);

  return (
    <div className="mt-20 mb-0">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 mb-10"
      >
        <span className="w-6 h-px bg-primary" />
        <span className="text-[9px] tracking-[0.35em] uppercase text-primary">Le nostre sedi</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0 border border-white/5">
        {/* Sidebar sede selector */}
        <div className="border-r border-white/5 flex flex-col">
          {sedi.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={() => setActive(s.id)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative text-left px-8 py-8 border-b border-white/5 transition-all duration-300 group ${
                active === s.id ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
              }`}
            >
              {/* Active indicator */}
              {active === s.id && (
                <motion.div
                  layoutId="activeBar"
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                />
              )}

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{s.flag}</span>
                <div>
                  <div className={`text-[13px] font-medium tracking-wide mb-1 transition-colors duration-300 ${active === s.id ? "text-primary" : "text-white/50 group-hover:text-white/70"}`}>
                    {s.label}
                  </div>
                  <div className="text-[10px] text-white/20 tracking-wide mb-2">{s.role}</div>
                  <div className="text-[11px] text-white/15 leading-[1.7]">{s.address}</div>
                </div>
              </div>

              {active === s.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-[11px] text-white/25 leading-[1.8] pl-10"
                >
                  {s.detail}
                </motion.p>
              )}
            </motion.button>
          ))}

          {/* Contact CTA at bottom */}
          <div className="px-8 py-6 mt-auto">
            <a
              href={`https://wa.me/+2349129384546?text=Ciao%2C%20vorrei%20visitare%20il%20vostro%20showroom%20a%20${activeSede.label}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] tracking-[0.28em] uppercase text-primary/50 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="w-4 h-px bg-primary/30" />
              Prenota visita showroom
            </a>
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] lg:h-[520px] min-h-[350px] bg-[#050506]"
        >
          <MapContainer
            center={activeSede.coords}
            zoom={13}
            scrollWheelZoom={false}
            zoomControl={false}
            attributionControl={false}
            style={{ width: "100%", height: "100%" }}
          >
            <MapViewUpdater center={activeSede.coords} />
            <TileLayer
              className="sedi-map-tiles"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution=""
            />
            {sedi.map((s) => (
              <Marker
                key={s.id}
                position={s.coords}
                icon={createCustomIcon(s.id === active)}
                eventHandlers={{ click: () => setActive(s.id) }}
              >
                <Popup className="dark-popup">
                  <div style={{ background: "#1a1a1c", color: "#ebebdd", padding: "8px 12px", fontSize: "11px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <strong style={{ color: "#C8F000" }}>{s.label}</strong>
                    <br />{s.address}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Overlay label */}
          <div
            className="absolute bottom-4 right-4 z-[1000] pointer-events-none"
          >
            <div className="bg-[#111113]/80 border border-white/10 px-3 py-2 backdrop-blur-sm">
              <div className="text-[8px] tracking-[0.3em] uppercase text-white/30">
                {activeSede.flag} {activeSede.label}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
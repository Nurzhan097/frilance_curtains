'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Фикс маркера
delete L.Icon.Default.prototype._getIconUrl 
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default function MapView() {
  const position = [41.036142, 28.670534] // Стамбул

  return (
    <div className="w-full h-[500px] rounded-xl shadow-xl ring-1 ring-gray-400/10">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full rounded-xl"
      >
        {/* Минималистичный стиль карты */}
        <TileLayer
          attribution='&copy; CartoDB'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        />
        {/* Отдельный слой с подписями (опционально) */}
        <TileLayer
          attribution='&copy; CartoDB'
          url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Bağlar Çeşme Cad. No:85 D:8</strong><br />
            Esenyurt, İstanbul, Turkey
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
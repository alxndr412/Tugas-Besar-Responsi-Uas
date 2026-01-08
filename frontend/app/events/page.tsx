'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const API = 'http://localhost:5000';

type EventType = {
  id: number;
  title: string;
  distance: string;
  route_image: string;
  route_url: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [mounted, setMounted] = useState(false);

  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');
  const [routeImage, setRouteImage] = useState('');
  const [routeUrl, setRouteUrl] = useState('');
  const [editing, setEditing] = useState<EventType | null>(null);

  useEffect(() => {
    setMounted(true);
    fetch(`${API}/events`)
      .then(res => res.json())
      .then(setEvents);
  }, []);

  if (!mounted) return null;

  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{}') : {};
  const isAdmin = user?.role === 'admin';

  const addEvent = async (e: any) => {
    e.preventDefault();
    await fetch(`${API}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ title, distance, route_image: routeImage, route_url: routeUrl }),
    });
    location.reload();
  };

  const updateEvent = async () => {
    if (!editing) return;
    await fetch(`${API}/events/${editing.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(editing),
    });
    setEditing(null);
    location.reload();
  };

  const deleteEvent = async (id: number) => {
    if (!confirm('Yakin hapus event?')) return;
    await fetch(`${API}/events/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    location.reload();
  };

  return (
    <div className="px-6 py-10 max-w-[98%] mx-auto text-black font-sans">
      <h1 className="text-3xl font-black mb-8 pb-1 uppercase tracking-tighter">
        Kategori Race
      </h1>

      {/* GRID 2 KOLOM YANG MELEBAR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map(e => (
          <div
            key={e.id}
            // Efek Interaktif: Border menebal dan warna berubah saat hover
            className="group border-[4px] border-gray-100 rounded-2xl p-6 bg-white flex flex-col transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 cursor-default"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-black text-2xl uppercase italic group-hover:text-blue-600 transition-colors tracking-tight">
                {e.title}
              </h2>
              <span className="font-black bg-gray-100 px-3 py-1 rounded-lg border-2 border-gray-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                {e.distance}
              </span>
            </div>

            {e.route_image?.startsWith('/') && (
              <div className="relative aspect-[16/9] mb-5 overflow-hidden rounded-xl border-2 border-gray-50 shadow-inner">
                <Image
                  src={e.route_image}
                  alt={e.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            )}

            {/* Tombol Lihat Rute menjadi Biru */}
            <a
              href={e.route_url}
              target="_blank"
              className="bg-blue-600 text-white py-3.5 text-center rounded-xl font-black uppercase tracking-widest shadow-[0_4px_0_0_#1e40af] hover:shadow-none hover:translate-y-[2px] hover:bg-blue-700 transition-all"
            >
              Lihat Rute
            </a>

            {isAdmin && (
              <div className="flex gap-3 mt-5 pt-5 border-t-2 border-dashed border-gray-100">
                <button
                  onClick={() => setEditing({ ...e })}
                  className="flex-1 bg-yellow-400 font-black py-2.5 rounded-lg border-b-4 border-yellow-600 active:border-0 active:translate-y-1 transition-all uppercase text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEvent(e.id)}
                  className="flex-1 bg-red-600 text-white font-black py-2.5 rounded-lg border-b-4 border-red-800 active:border-0 active:translate-y-1 transition-all uppercase text-xs"
                >
                  Hapus
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MODAL EDIT DENGAN TRANSISI HALUS */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white p-8 rounded-3xl w-full max-w-2xl border-[2px] border-black shadow-2xl">
            <h2 className="font-black text-3xl mb-6 uppercase italic">Edit Data Event</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-gray-400 ml-1">Nama Event</label>
                <input
                  value={editing.title}
                  onChange={e => setEditing({ ...editing, title: e.target.value })}
                  className="border-2 border-gray-200 p-3 w-full rounded-xl focus:border-blue-600 outline-none transition-all font-bold"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-gray-400 ml-1">Jarak</label>
                <input
                  value={editing.distance}
                  onChange={e => setEditing({ ...editing, distance: e.target.value })}
                  className="border-2 border-gray-200 p-3 w-full rounded-xl focus:border-blue-600 outline-none transition-all font-bold"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-black uppercase text-gray-400 ml-1">Path Gambar</label>
                <input
                  value={editing.route_image}
                  onChange={e => setEditing({ ...editing, route_image: e.target.value })}
                  className="border-2 border-gray-200 p-3 w-full rounded-xl focus:border-blue-600 outline-none transition-all font-bold"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-black uppercase text-gray-400 ml-1">Link URL Rute</label>
                <input
                  value={editing.route_url}
                  onChange={e => setEditing({ ...editing, route_url: e.target.value })}
                  className="border-2 border-gray-200 p-3 w-full rounded-xl focus:border-blue-600 outline-none transition-all font-bold"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={updateEvent}
                className="flex-1 bg-blue-600 text-white font-black py-4 rounded-xl shadow-[0_5px_0_0_#1e40af] hover:shadow-none hover:translate-y-1 transition-all uppercase"
              >
                Simpan Perubahan
              </button>
              <button
                onClick={() => setEditing(null)}
                className="flex-1 bg-gray-100 font-black py-4 rounded-xl border-b-4 border-gray-300 active:border-0 active:translate-y-1 transition-all uppercase"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FORM TAMBAH DENGAN TAMPILAN SOLID */}
      {isAdmin && (
        <div className="mt-20 border-[2px] border-black p-8 rounded-3xl bg-gray-50 max-w-4xl mx-auto shadow-[12px_12px_0_0_rgba(0,0,0,0.05)]">
          <h2 className="font-black text-2xl mb-6 uppercase italic">Tambah Event Baru</h2>
          <form onSubmit={addEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="JUDUL EVENT"
              className="border-2 border-gray-200 p-4 rounded-xl focus:border-blue-600 outline-none transition-all font-bold"
              onChange={e => setTitle(e.target.value)}
              required
            />
            <input
              placeholder="JARAK (MISAL: 10 KM)"
              className="border-2 border-gray-200 p-4 rounded-xl focus:border-blue-600 outline-none transition-all font-bold"
              onChange={e => setDistance(e.target.value)}
              required
            />
            <input
              placeholder="PATH GAMBAR (/images/...)"
              className="border-2 border-gray-200 p-4 rounded-xl focus:border-blue-600 outline-none transition-all font-bold md:col-span-2"
              onChange={e => setRouteImage(e.target.value)}
              required
            />
            <input
              placeholder="URL RUTE (GOOGLE MAPS/ONTHEGOMAP)"
              className="border-2 border-gray-200 p-4 rounded-xl focus:border-blue-600 outline-none transition-all font-bold md:col-span-2"
              onChange={e => setRouteUrl(e.target.value)}
              required
            />
            <button className="md:col-span-2 bg-black text-white font-black py-5 rounded-xl uppercase tracking-widest hover:bg-blue-600 transition-all transform active:scale-[0.98]">
              Simpan Event Baru
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
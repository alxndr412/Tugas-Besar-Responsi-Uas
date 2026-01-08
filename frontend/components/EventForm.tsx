'use client';

export default function EventForm({
  title,
  setTitle,
  distance,
  setDistance,
  routeImage,
  setRouteImage,
  routeUrl,
  setRouteUrl,
  onSubmit,
}: any) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 bg-white border rounded p-4"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nama Event"
        className="w-full border p-2 rounded"
      />

      <input
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Jarak (contoh: 42.9 KM)"
        className="w-full border p-2 rounded"
      />

      <input
        value={routeImage}
        onChange={(e) => setRouteImage(e.target.value)}
        placeholder="Path gambar (/images/rute.png)"
        className="w-full border p-2 rounded"
      />

      <input
        value={routeUrl}
        onChange={(e) => setRouteUrl(e.target.value)}
        placeholder="Link OnTheGoMap"
        className="w-full border p-2 rounded"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Simpan
      </button>
    </form>
  );
}

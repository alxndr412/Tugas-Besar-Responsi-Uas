export default function EventCard({ event, onEdit, onDelete, isAdmin }: any) {
  return (
    <div className="bg-white border rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-gray-900">
        {event.title}
      </h2>

      <p className="text-gray-700 mb-2">
        Jarak: {event.distance}
      </p>

      {event.route_image && (
        <img
          src={event.route_image}
          alt={event.title}
          className="rounded mb-3 w-full"
        />
      )}

      <a
        href={event.route_url}
        target="_blank"
        className="text-blue-600 font-semibold underline"
      >
        Lihat Rute
      </a>

      {isAdmin && (
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onEdit(event)}
            className="px-3 py-1 bg-yellow-500 text-white rounded"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(event.id)}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Hapus
          </button>
        </div>
      )}
    </div>
  );
}

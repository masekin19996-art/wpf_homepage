export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-gray-600">This page could not be found.</p>
        <a
          href="/"
          className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          トップへ戻る
        </a>
      </div>
    </div>
  );
}

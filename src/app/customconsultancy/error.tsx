"use client";

export default function CustomConsultancyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="custom-consultancy min-h-screen flex flex-col items-center justify-center px-4 font-sans">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong</h1>
      <p className="text-slate-600 mb-6 text-center max-w-md">
        This page could not be loaded. You can try again or return to the home page.
      </p>
      <div className="flex gap-4">
        <button type="button" onClick={reset} className="cc-btn-primary">
          Try again
        </button>
        <a href="/customconsultancy" className="cc-btn-outline">
          Home
        </a>
      </div>
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-8 text-xs text-red-600 max-w-lg overflow-auto">{error.message}</pre>
      )}
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";


export default function ForbiddenPage({
  message = "Forbidden",
  description = "You don't have permission to access this resource.",
  showBack = true,
  backPath = "/",
}) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <motion.section
        initial={{ opacity: 0, y: 12, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
        role="alert"
        aria-live="polite"
        className="w-full max-w-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg p-8 md:p-12 text-center"
      >
        <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 mb-6">
          <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" aria-hidden="true" />
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{message}</h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        <div className="flex items-center justify-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(backPath)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm border border-transparent text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 transition"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back
            </button>
          )}

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition"
          >
            Retry
          </button>
        </div>

        <footer className="mt-6 text-xs text-gray-400">If you believe this is an error, contact support or request access.</footer>
      </motion.section>
    </main>
  );
}

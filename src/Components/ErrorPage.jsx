import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md">
        <FiAlertTriangle className="text-red-500 text-6xl mx-auto" />

        <h1 className="text-5xl font-bold text-red-500 mt-4">404</h1>

        <h2 className="text-2xl font-semibold mt-3">Page Not Found</h2>

        <p className="text-gray-600 mt-2">
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-xl  transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

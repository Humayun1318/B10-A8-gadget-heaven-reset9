import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 text-center bg-white shadow-lg rounded-2xl">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 mt-6 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
import { useRouteError, Link } from "react-router-dom";
import ErrorImg from "../../ErrorPageImg.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" bg-slate-900 flex items-center justify-center h-screen">
      <div className=" w-2/5 h-3/6 flex items-center bg-gray-100 rounded-xl ">
        <div className="bg-yellow-400">
          <img className="" alt="ErroPageImage" src={ErrorImg} />
        </div>
        <div className="h-3/6 mx-auto text-center">
          <p className="my-2 font-extrabold text-4xl">{error.status}</p>
          <h1 className="my-2 font-bold text-3xl">{error.statusText}</h1>
          <p className="text-xs">({error.data})</p>
          <Link to="/">
            <button className="px-3 py-1 my-4 text-white rounded-md bg-slate-900 hover:bg-slate-800">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

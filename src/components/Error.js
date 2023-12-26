import { useRouteError } from "react-router-dom";

const Error= ()=>{
    const err= useRouteError();
    console.log(err);
    return (
        <div className="Error">
            <h1>OOPSS.....</h1>
            <h1>SomeThing went worng!!!!!</h1>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}

export default Error;
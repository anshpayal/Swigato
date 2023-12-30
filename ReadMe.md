### Setup the Project:
- `npm init`, `git init`
- `npm install -D parcel`
- `npm install react`
- `npm install react-dom`
- `npm i react-router-dom`
- Update script property inside package.json file.
    ```
    "start": "parcel index.html"
    "build": "parcel build index.html"
    ```
- `npm start` command will run the code
- `npm run build` command will build the production ready code. 

### Configuration of Tailwind CSS:
- `npm install -D tailwindcss postcss`: Installing tailwind and postcss as dev dependency, postcss transform css inside javascript.
- `npx tailwind init`: it configure talinwind.config.js file.
- create `.postcssrc` file in root repo. 
    ```
    {
    "plugins": {
        "tailwindcss": {}
    }
    }
    ```
- Inside `tailwind.config.js` file, content property tells in which file we can use tailwind.
- Add tailwind directives inside index.css file
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
- Download `Tailwind CSS IntelliSense` extension for VS Code. 
### Building Food Ordering App:
- Design a rough wireframe or mock. How the app will look like?
- Now try to break down the wireframe into components.
- Components for AppLayout:
    - Header
        - logo ✅
        - Nav items ✅
        - Login/Logout toggle button ✅
    - Body
        - Resturants container ✅
            - Resturant Menu ✅
        - Filter button (filter out top rated resturants) ✅
        - Shimmer UI ✅
        - Search Bar ✅

### Concepts: 
- Props ✅
- Javascript map() function. ✅
- Object destructing. ✅
- Optional chaining. ✅
- Keys ✅
- Config driven UI ✅
- Restructure the app ✅
- useState hook ✅
- Virtual DOM, Reconciliation and React fiber ✅
- useEffect hook ✅
- CORS Policy (when are browser block us to call api from one orgin(Local host) to different origin(swiggy api)) ✅
- Routing (createRouterBrowser, RouterProvider), Children Routes (Outlet), Link component ✅
- Dynamic Routing (useParams hook) ✅
- Class based components, props, State variable, lifecyle of class components ✅
 


 

## About Project:
- Swigato: A ReactJs, Redux, and Tailwind CSS-powered food ordering web app
- Features:
    - [x] Login/Signup Page, Form validations (useRef Hook)
    - [x] Header, Nav items (Home, Cart, Login/Logout toggle button)
    - [x] Search Bar 
    - [x] Filter button (filter out top rated resturants, Fast deliviery)
    - [x] Restaurant card, Pure veg lable (using HOC)
    - [x] Shimmer UI 
    - [x] Routing, Dynamic Routing
    - [x] Resturant Menu, Menu Accordion, Add Items
    - [x] Cart page, Remove items, Clear cart, Bill Details

- Features to be added soon:
    - [ ] Firebase setup for authentication.
    - [ ] Dark mode

## Configurations for the project:
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

### Configuration of Redux:
- `npm install @reduxjs/toolkit`
- `npm install react-redux`

### Configuration of Firebase:
- Visit firebase website -> get started -> create new project
- Name it -> Enable google analytics -> choose google account -> Create Project
- Select web project -> Register app -> if you want to host application check the box -> Register
- Add Fierbase SDK -> select use npm
- Go to your project repository and run command `npm intall firebase`
- Create a new file `firebase.js` copy the code given by firebase. 
- Install firebase CLI if you want to host the site `npm install -g firebase-tools`
- Commands to deploy the code to firebase hosting (if you are ready to deploy otherwise can skip this):
    - `firebase login` : sign to google account
    - `firebase init` : initiate the project
    - `firebase deploy`: to deploy the code
- Enable Authentication -> sign methods -> select according to project need. 

## Concepts learned while building: 
- [x] Props
- [x] Javascript map() and filter() function.
- [x] Object destructing. 
- [x] Optional chaining. 
- [x] Condtional Rendering
- [x] Importance of Keys in map function
- [x] Config driven UI 
- [x] Restructure the app 
- [x] useState hook 
- [x] Virtual DOM, Reconciliation and React fiber 
- [x] useEffect hook 
- [x] CORS Policy (when are browser block us to call api from one orgin(Local host) to different origin(swiggy api)) 
- [x] Routing (createRouterBrowser, RouterProvider), Children Routes (Outlet), Link component 
- [x] Dynamic Routing (useParams hook) 
- [x] Class based components, props, State variable, lifecyle of class components 
- [x] Single Responsibilty Principle 
- [x] Custom Hooks 
- [x] Optimizing App using Lazy Loading 
- [x] High Order Components (HOC) 
- [x] Lifting the state up, Controlled and Uncontrolled components 
- [ ] Props driling and Context(createContext, useContext, Provider) 
- [x] Redux store, Slice, Dispatch(action), Reducer, Selector 
- [x] Authentication using firebase, hosting using firebase, 


 

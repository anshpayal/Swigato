### Setup the Project:
- `npm init`, `git init`
- `npm install -D parcel`
- `npm install react`
- `npm install react-dom`
- Update script property inside package.json file.
    ```
    "start": "parcel index.html"
    "build": "parcel build index.html"
    ```
- `npm start` command will run the code
- `npm run build` command will build the production ready code.

### Building Food Ordering App:
- Design a rough wireframe or mock. How the app will look like?
- Now try to break down the wireframe into components.
- Components for AppLayout:
    - Header
        - logo ✅
        - Nav items ✅
    - Body
        - Search ✅
        - Resturants container ✅
    - Footer
        - Links
        - Contacts
        - Address
        - Copyright.
- For adding Inline CSS in react, we have to create object and then use inside the tag.

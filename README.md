# NamasteReact

# Episode 1

 <div>
    <div>
        <h1></h1>
        <h2></h2>
    </div>
 </div>
 ReactElement (object)=> HTML (Browser understands)

Notes
-> always keep react file before app. js , order of files matter
->Everything in div root is replaced when app.js root is rendered

-> react can be applied to a small portion of page, it can work in a small portion
->framework comes with loads of things

Notes

1. how to create simple elements using html
2. how we can do the same stuff using simple java script
3. How we can do the same thing using react, by puting cdn links
4. React element-> object, this object is then using react dom is rendered.
5. render method helps us to put that object in the page by converting it to react element
6. React.createElement("type",[// attributes],[children, "", one react element or multiple[]])
7. root.render is replacing exixting contents of root div
8. we can also use react in a small portion of a page
9. react is a library, js lib not a framework, can be used in existing applicatiom
10. we use jsx, it helps us to create element in easy way

# Episode 2

-> package.json is a congiguration for npm, it keeps a track of what version of that package is installed
-> bundler- webpack, parcel,vite-> it bundles the app so that it can be proceeded to production
-> create-react-app uses webpack and babel to build
-> we will be using parcel, all are same.

-> There are two types of packages

1. dev dependencies- it is required in development phase
2. normal dependencies can be also used in production

-> Whenevr there is a minor update, that is from version 2.4 to version 2.4 then ^(caret) automatically updates it

-> Whenever there is a major update, the ~(tilde) automatically updates to the major version

-> package lock.json- keeps a track of exact veriosn of that dependency. package.json keeps an approx version but package lock.json has an exact version
integrity is a hash.to verify the same version is deployed on production.

->node modules contain the acutual data of dependencies. feteches all code of all the dependencies.

-> transitive dependencies-> parcel is a dependency but it itself is dependent on other dependencies which in turn are dependent on others.

-> .gitinore -> keeps a track of files that we dont want to push in git , like node_modules

-> if we have package.json and package lock.josn i can create node_modules. using npm install

->parcel

1. dev build
2. local server
3. HMR-> Hot Module Replacement
4. file watching algorithm - written in c++
5. faster builds- caching
6. image optimization
7. minification
8. bundling
9. compressed files
10. consistent hashing
11. code splitting
12. differential bundling- support older browsers.
13. error handling
14. can be hosted on https
15. tree shaking - remove unused codes.
16. differernt dev and prod build

# episode 3

npm start-> npm run start -> parcel index.js

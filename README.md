# NamasteReact

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

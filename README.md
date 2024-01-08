# NamasteReact

## Episode 1

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

## Episode 2

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

## Episode 3

1. npm start-> npm run start -> parcel index.js
2. jsx -> java script syntax to create elements
3. jsx is not html in javascript
4. jsx has html like syntanx and xml
5. jsx is not a valid pure javascript.
6. the jsx code is transpiled before it goes to the js engine
7. parcel transpiles the jsx code with the help of babel
8. babel takes jsx and converts it into language understood by js engine
<!--  const heading = React.createElement("h1", { id: "heading" }, "react heading"); -->
9. React.createElement => ReactElement- JS Object => HTMLElement
<!--  const jsxHeading = <h1 id="heading"> Heading using jsx</h1>; -->
10. JSX=> React.createElement => ReactElement- JS Object => HTMLElement
11. in jsx we use className instead of class
12. if we have to use attributes in jsx, it is camel cased
13. if we are writing in multiple lines we need to use ().
14. components in react
    -> Class based components - Old way of writ code.
    -> Functional components - New way of writ code. js function which returns some jsx(react element).
15. component composition-> it is a component inside component.
16. jsx takes care of mallicious data, it does'nt blindly run js. It prevents us from cross side scripting attacks.
<!-- 17. {Title()}.... <Title/> ... <Title></Title>
         it is one and the same thing
 -->

### episode 4

1. When we want to pass dynamic data to a component , we pass them as props
2. props is like function arguments
3. It is a javascript object
4. config-drivern ui- website ui diven by data.
5. whenever we are using a map function we need to pass key to uniquely identify.
6. React itself say that dont use indexes as keys

### episode 5

1.  default export- can onlly export 1, imported norally
    export default Component
    import Component from "path"
2.  named export - can expotr more than 1 and imported using {}
    export const component;
    import {component} from "path"
3.  Can we use both?
4.  onClick takes a callback- onClick={()=>()}
5.  react hooks are normal js utility functions
6.  There are multiple but 2 are very important
7.  useState()- used to generate state variables
8.  useEffect()
9.  whenever a state variable changes , react re renders the components
10. react uses reconciliation algorithm also known as react fiber.
11.     a
    b c d e
    suppose ui changes to filter these 4 cards to 2 cards.
12. React creates a virtual dom.It is a represntation of actual dom.
13. real dom - div- h1
14. virtual dom is object like normal react element.
15. diff algorithm- finds out the difference between two virtual doms.
    -> a clicked button a
    -> b c d e b c
    it tries to find the difference
16. whenever something changes in ui it is called reconciliation.
17. finding out diifference between two objects is fast rather than difference betwwen two html elementsa and rerenders the components(update ui).
18. incremental rendering - splitting the rendering work into chunks.
19. everytime the state variable changes , it updates ui.

### episode 6

1. monolithic vs microservices architechture
2. separation of concerns
3. single responsibility principle- every service is responsible for its own independent service.
4. there are 2 ways to get data.

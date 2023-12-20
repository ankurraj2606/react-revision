cdn
crossorigin
script types
React - It is a lightweight, open source Javascript Library, developed for building UI components, developed and  maintained by Facebook.

Virtual DOM - It is the lightweight copy of the actual DOM in memory. React uses it to improve performance by     comparing it with actual DOM and updating the changed part of the actual DOM. 

JSX - It is a syntax extension of Javascript recommended by react to describe how UI should look like.

Keys - It is used to uniquely identify and differenciate between the components in React. They make it easier     for react to identify which component has been changed, added or removed.

State and Props - State and props are both plain JS objects. Both state and props changes trigger a re-render.
Both state and props are deterministic. If our component generates different output for same combination of state and props then there is something wrong.
  State is an internal data store that belong to a specific component. And it can be changed.
  Props are the properties passed to a component by it's parent and is immutable.

State vs Props - State is internal to a project and can be changed over time while Props is externally passed to a component and can't be changed over time.

Concept of lifting state up - It is a pattern where state of a child component is moved to the parent component allowing child components to share the same state.

setState Purpose - It is used to update the state of a component, hence triggering a re-render.

React Router - React router is a library that enables navigation among views in a React application, allowing for the development of single page applications.

usEffect Hook - The useEffect hook is used for side effects in functional components such as data fetching, subscriptions and manually modifying the DOM.

Controlled components in React -  Controlled components are component where the form data is controlled by react state. The input elements receive their current value from the state and have their value updated through the callback function.

Redux - Redux is a state management library for Javascript applications, commonly used in React. It helps maintaining the state of an application in a predictable way.

Higher order components - Higher order component is a component that takes a component and returns a new component with additional features or props.

useReducer Hook - It is used to manage complex state logic in react. It is alternative to useState when state transitions are more complex. It is particularly useful when the state logic is complex and involves multiple sub-values or when the next state depends on the previous state.

Significance of key in list - Key is helpful in uniquely identifying an element in the list. It helps react effectively update the DOM whenever the list changes.

Difference between class and functional components - Class components uses ES6 classes and have additional features such as state and lifecycle methods, while functional components are simpler and used with hooks.

Refs in React - Refs in react is used to directly access the DOM or to refer a react element. They provide a way to interact with underlying DOM nodes in React.

React Hooks - React Hooks are functions that allows react functional components to use state, lifecycle methods and other React features.

React Context - Context lets the parent component make some information available to any component below in the DOM tree, no matter how deep, without passing it explicitly through props.

It provides a way to pass data int the component tree without having to pass props manually at each level. It is often used to share values like themes or authentication status.

useContext Hook - The useContext hook is used to access the value of a react context in the functional components.

dangerlySetInnerHtml Significance - dangerouslySetInnerHtml is used to directly inject HTML inside a React component, but it should be used with caution to avoid Cross site scripting (XSS) vulnerabilities.

componentDidMount lifecycle method - It is invoked only one time immediately after a component is mounted, making it suitable for initial AJAX request and setting up subscriptions.

React Developer Tools - It is a browser extension used to inspect and debug React component hiererchies in Chrome and firefox browsers.

Advantages of using React - 
  Component based architecture, for modular development.
  Virtual DOM, boosting the performance.
  strong community support.

How react handles prop drilling ? - Prop drilling occurs when props are passed though multiple level of components, it can be avoided by using context or state management libraries like Redux.

shouldComponentupdate - shouldComponentUpdate is a lifecycle method that determines whether the component should re-render or not. Developers can use it to optimize performance and avoid unnecessary rerenders.

React Fragments - It is used to group multiple elements together without having to add extra node to the DOM, helping to keep the structure clean.

KEY prop in react Router - The key prop in react router is used to force the remounting of the component when the key changes, ensuring that the component is fully re-initialized.

forwardRef function in React - It is used to forward refs through components, allowing parent components to interact with child's DOM node. forwardRef lets your component expose a DOM node to the parent component with a ref.

Error boundaries in React - Error boundaries are component that catches Javascript errors anywhere in their child component tree and log those errors, display a fallback UI, or take other actions.

Memo - Memo is a hogher order component that memoizes the rendering of a functional component, hence preventing the unnecessary re-renders if the props didn't change.

How Forms handled by React - React handles forms by using controlled components, where form data is controlled by the React state. That allows react to become the single source of truth for form data.

useMemo Hook - It is used to memoize the result of a function, preventing un-necessary calculations and improving performance.

useCallback hook - It is used to memoize callback functions, preventing them from recreating on every render.

React portals - React protals provide a way to render children into a DOM node that falls outside of parent component's hierarchy.

Suspense in React - Suspense is a feture in React that allows component to "wait" for something before rendering, such as data fetching or code splitting.

Purpose of useEffect cleanup function - The cleanup function in React is used to perform cleanup tasks, such as unsubscribe from subscriptions or clearing intervals, when a component is mounted.

How React handles Routing ? - React handles routing using the React Router library, which provides a way to navigate between different pages or views in a React application.

useLayoutEffect Hook - It is similar to useEffect hook, but it fires synchronously after each DOM mutation. It is often used for measuring and synchronizing layout.

Lazy Loading in React - It is a technique where components and modules are loaded only when they are actually needed, improving initial load times.

React.memo function - React.memo is a Higher order component that memoizes the rendering of a functional component, hence preventing unnecessary re-renders if the props didn't change.

How React handles code splitting ? - React supports code splitting, hence allowing the developers to split the code in smaller chunks, that are loaded on demand, hence improving performance by reducing the initial bundle size.

useImperativeHandle hook - useImperativeHandle hook is used to customize the instance value that is exposed while using React.forwardRef.

useDebugValue Hook - It is used to display a label for custom hooks in React devtools.

useState Hook - It is used to add state to functional components in react.

SuspenseList component is React - SuspenseList is a component that allows the developers to coordinate the loading of multiple components in a way that provides a better User Experience.

react-scripts package - react-scripts is a set of scripts and configurations used by create-react-app to set up and manage a react project without the need for complex configurations.






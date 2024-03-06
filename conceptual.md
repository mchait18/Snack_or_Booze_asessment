### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
 React Router lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

- What is a single page application?
Sites that exclusively use client-side routing

- What are some differences between client side and server side routing?
Client-side routing handles mapping between URL bar and page user sees via browser rather than via server. JavaScript manipulates the URL bar with the History Web API The entire DOM isn't replaced each time.
Server-side routing is the traditional pattern - clicking a <a> link causes browser to request page & replace entire DOM
Server decides what HTML to return based on URL requested

- What are two ways of handling redirects with React Router? When would you use each?
1) - With the useNavigate hook - Useful for “you’re now done here, go here instead, if you go back - no worries!”
2) - Without the Navigate component - Useful for “you shouldn’t have gotten here, go here instead, do not go back”

- What are two different ways to handle page-not-found user experiences using React Router? 
1) Including a NotFound component and directing there
2) Instead of a component we could also use a <Navigate> component

- How do you grab URL parameters from within a component using React Router?
The useParams hook stores info on the URL parameters.

- What is context in React? When would you use it?
Universal data across your application
Data accessible across all components
Useful for global themes, shared data

- Describe some differences between class-based components and function
  components in React.
  Class Based components - Every component extends React.Component. 
                         - Class components must have a render method describing what the component should render.
                         - state is changed with the instance method setState.
                         - use of "this" in functions and bind to get things to work properly
  Function components - use hooks like useState, useEffect, etc. to simplify things
                      - shorter, cleaner code

- What are some of the problems that hooks were designed to solve?
Quite a bit of code just to declare initial state and set up our handlers
Have to really understand this and bind to get things to work correctly
They let you use state and other React features without writing a class.Hooks are functions that let you “hook into” React state and lifecycle features from function components.
Hooks don’t work inside classes — they let you use React without classes.
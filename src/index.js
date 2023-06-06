import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MembersPage from './components/MembersPage';
import TeamsPage from './components/TeamsPage';
import TeamDetailPage from './components/TeamDetailPage';
import ToDoPage from './components/ToDoPage';
import { Provider } from 'react-redux';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <MembersPage/>
      },
      {
        path: "/members",
        element: <MembersPage/>
      },
      {
        path: "/teams",
        element: <TeamsPage/>
      },
      {
        path: "/members?/:teamName",
        element: <TeamDetailPage/>
      },
      {
        path: "/todos",
        element: <ToDoPage/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

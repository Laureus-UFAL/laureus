import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = lazy(() => import('pages/Login'));
const DashboardPage = lazy(() => import('pages/Dashboard'));
const ProjectsPage = lazy(() => import('pages/Projects'));
const CreateProjectPage = lazy(() => import('pages/CreateProject'));

const BaseLayout = lazy(() => import('components/BaseLayout'));

const privateRoutes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: '/projetos',
        children: [
          {
            index: true,
            element: <ProjectsPage />
          },
          {
            path: '/projetos/criar',
            element: <CreateProjectPage />
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  }
];

const publicRoutes = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <Navigate to="/login" />
  }
];

export { publicRoutes, privateRoutes };

import React, { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(
  () =>
    import(
      /* webpackPreload: true */
      /* webpackChunkName: 'home'*/
      'application/Home'
    )
);
const User = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: 'user'*/
      'application/User'
    )
);
const NotFound = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: '404'*/
      'application/NotFound'
    )
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: 'user',
    element: (
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
];

function Loading() {
  return <div>页面加载中</div>;
}

export default routes;

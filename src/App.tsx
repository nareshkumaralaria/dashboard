import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

import Layout from '@/layout/layout';
import Loading from '@/components/loading';

const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Layout component={<Home />} />} />

          {/* Note Found */}
          <Route path='*' element={<Layout component={<NotFound />} />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

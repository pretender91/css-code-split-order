import React, { lazy, Suspense, useState } from 'react'


const HomePage = lazy(() => import('./pages/home/home'))
const AboutPage = lazy(() => import('./pages/about/about'))


function App() {
  const [page, setPage] = useState('home')
  return (
    <div>
      <a href="#" onClick={() => setPage('home')} style={{ marginRight: '5px' }}>home page</a>
      <a href="#" onClick={() => setPage('about')}>about page</a>

      <Suspense fallback={<div>loading</div>}>
        {page === 'home' && (
          <HomePage />
        )}
        {page === 'about' && (
          <AboutPage />
        )}
      </Suspense>
    </div>
  )
}

export default App

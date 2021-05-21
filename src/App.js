import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
      <Root>
          <h1>家電製品オンライン辞典</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/blog">最新情報</Link>
        <Link to="/choose">選び方</Link>
        <Link to="/maintenance">直し方</Link>
        <Link to="/disposal/">捨て方</Link>

      </nav>
        <React.Suspense fallback={<em>読み込み中...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
    </Root>
  )
}

export default App

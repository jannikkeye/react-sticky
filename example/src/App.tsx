import React from 'react'

import Sticky from 'react-sticky'
import 'react-sticky/dist/index.css'

const App = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <aside className=''>
          <Sticky>
            <nav>
              <ul>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
                <li>Navigation Element</li>
              </ul>
            </nav>
          </Sticky>
        </aside>
        <section>
          <h1>Lorem Ipsum</h1>
          {new Array(10).fill(null).map(() => (
            <>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                deserunt laudantium ducimus vel labore! Officia commodi eius
                dolor nam quos similique nulla eaque earum voluptatibus? Quae
                aspernatur est praesentium esse.
              </p>
              <h4>Lorem Ipsum</h4>
              <ul>
                <li>List Element</li>
                <li>List Element</li>
                <li>List Element</li>
                <li>List Element</li>
              </ul>
            </>
          ))}
        </section>
      </main>
      <footer>FOOTER</footer>
    </>
  )
}

export default App

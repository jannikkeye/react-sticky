import React, { FC } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Sticky } from '../Sticky'
import './stickyStories.css'

export default {
  title: 'Sticky',
  component: Sticky
} as Meta

const Wrapper: FC = ({ children }) => {
  return (
    <div className='scroll'>
      <h4>Scroll Down</h4>
      {children}
      <h4>Scroll Up</h4>
    </div>
  )
}

export const Basic = () => {
  return (
    <Wrapper>
      <section>
        <div className='example-sticky-nav'>
          <aside>
            <Sticky>
              <nav>STICKY</nav>
            </Sticky>
          </aside>
          <main></main>
        </div>
      </section>
    </Wrapper>
  )
}

export const WithOffsets = () => {
  return (
    <Wrapper>
      <section>
        <div className='example-sticky-nav'>
          <aside>
            <Sticky startOffsetTop={40}>
              <nav>STICKY</nav>
            </Sticky>
          </aside>
          <main></main>
        </div>
      </section>
      <section>
        <div className='example-sticky-nav'>
          <aside>
            <Sticky stopOffsetBottom={40}>
              <nav>STICKY</nav>
            </Sticky>
          </aside>
          <main></main>
        </div>
      </section>
      <section>
        <div className='example-sticky-nav'>
          <aside>
            <Sticky startOffsetTop={40} stopOffsetBottom={40}>
              <nav>STICKY</nav>
            </Sticky>
          </aside>
          <main></main>
        </div>
      </section>
    </Wrapper>
  )
}

export const WithParentPadding = () => {
  return (
    <Wrapper>
      <section>
        <div className='example-sticky-nav example-sticky-nav-padding'>
          <aside>
            <Sticky>
              <nav>STICKY</nav>
            </Sticky>
          </aside>
          <main></main>
        </div>
      </section>
    </Wrapper>
  )
}

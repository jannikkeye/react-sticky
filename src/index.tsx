import React, { FC } from 'react'
import styles from './styles.module.css'

type Props = {}

export const Sticky: FC<Props> = ({ children }) => {
  return <div className={styles.test}>{children}</div>
}

export default Sticky

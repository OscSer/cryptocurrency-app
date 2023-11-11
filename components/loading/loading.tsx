import styles from './loading.module.css'
import { CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  )
}

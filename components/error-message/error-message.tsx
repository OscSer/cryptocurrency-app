import styles from './error-message.module.css'
import { useRouter } from 'next/navigation'
import { Alert, Button } from '@mui/material'

export default function ErrorMessage() {
  const router = useRouter()

  const onClick = () => router.refresh()

  return (
    <Alert
      className={styles.message}
      variant="outlined"
      color="warning"
      action={
        <Button color="warning" size="small" onClick={onClick}>
          Try Again
        </Button>
      }
    >
      Oops something went wrong!
    </Alert>
  )
}

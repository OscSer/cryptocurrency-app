import styles from './coin-item-section.module.css'

interface Props {
  title?: string
  children: React.ReactNode
}

export default function CoinItemSection({ title, children }: Props) {
  return (
    <div className={styles.coinItemSection}>
      {title && <div className={styles.coinItemSection__title}>{title}</div>}
      <div className={styles.coinItemSection__value}>{children}</div>
    </div>
  )
}

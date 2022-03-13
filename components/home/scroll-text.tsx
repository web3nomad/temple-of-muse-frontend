import clsx from 'clsx'
import styles from './scroll-text.module.css'

export default function ScrollText() {
  return (
    <div className={clsx(
      'text-grandslang text-9xl my-8'
    )}>
      <div className={clsx('text-left pt-4 pb-1 border-b border-white/30')}>WEB3 TECH x DESIGN</div>
      <div className={clsx('text-right pt-4 pb-1 border-b border-white/30')}>CREATED BY BMRLAB</div>
    </div>
  )
}

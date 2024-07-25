<<<<<<<< HEAD:js/src/patina/scholarship/process/ApplicationProcess.tsx
import { Stacks } from '@/patina/components/Stacks'
========
import { Stacks } from '../../components/Stacks'
>>>>>>>> 3ac63a9 (Scholarship: Makes stack component more responsive):js/src/patina/scholarship/applicationprocess/ApplicationProcess.tsx
import styles from './ApplicationProcess.module.css'

const processStack = [
  { title: 'SEP 1', description: 'Applications Open' },
  { title: 'OCT 1', description: 'Applications Close' },
  { title: 'NOV 1', description: 'First Round Selections' },
  { title: 'DEC TBD', description: 'Finalist Announcement' },
]
/** Displays information about the application deadlines */
export function ApplicationProcess() {
  return (
    <div className={styles.container}>
      <Stacks items={processStack} />
    </div>
  )
}

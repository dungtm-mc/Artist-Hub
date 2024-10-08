import { IconFlare } from '@tabler/icons-react'
import styles from './ai.module.css'
import { useEffect, useState } from 'react'
import { TextInput } from '@mantine/core'

const Ai = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName('David')
  }, [])

  return (
    <div className={styles.ai}>
      <div className={styles.title}>
        <IconFlare size="16" />
        <span>AI ASSISTANT</span>
      </div>
      <div className={styles.boxChat}>
        <div className={styles.chatPlaceholder}>
          <span className={styles.greet}>Hi, {name}</span>
          <span className={styles.ques}>How can I help?</span>
        </div>
      </div>
      <div className={styles.chatInput}>
        <TextInput
          size="sm"
          variant="unstyled"
          placeholder="Ask me anything"
          className={styles.input}
        />
      </div>
      <div className={styles.warning}>
        <span>Chatbot is powered by AI, so check for mistakes.</span>
      </div>
    </div>
  )
}

export default Ai

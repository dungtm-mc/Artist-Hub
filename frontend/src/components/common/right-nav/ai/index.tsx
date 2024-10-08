import { IconFlare } from '@tabler/icons-react'
import styles from './ai.module.css'
import { useContext, useEffect, useState } from 'react'
import { Switch, TextInput } from '@mantine/core'
import { EditContext } from '../../../../context/EditContext'
import {
  createLayoutCookie,
  getCookie,
  setCookie
} from '../../../../cookies/cookies'

const Ai = () => {
  const [name, setName] = useState('')
  const [isAiShow, setIsAiShow] = useState(true)

  const context = useContext(EditContext)

  useEffect(() => {
    setName('David')

    const savedLayout = getCookie('layouts')

    if (savedLayout !== undefined) {
      console.log(JSON.parse(decodeURIComponent(savedLayout)).ai)
      setIsAiShow(JSON.parse(decodeURIComponent(savedLayout)).ai)
    } else {
      createLayoutCookie()
    }
  }, [])

  useEffect(() => {
    const aiLayouts = {
      ai: isAiShow
    }
    setCookie('layouts', JSON.stringify(aiLayouts), 365)
  }, [isAiShow, context?.isEditing])

  return (
    <div>
      {context?.isEditing && (
        <div className={styles.editOption}>
          <span>Ai Assistant</span>
          <Switch
            checked={isAiShow}
            onChange={() => setIsAiShow(!isAiShow)}
            className={styles.switch}
            color="#8773ff"
          />
        </div>
      )}
      {isAiShow && (
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
      )}
    </div>
  )
}

export default Ai

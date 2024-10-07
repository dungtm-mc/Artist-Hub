import { createContext } from 'react'

export interface EditContextType {
  isEditing: boolean
  setIsEditing: (value: boolean) => void
}

export const EditContext = createContext<EditContextType | undefined>(undefined)

import type { UserType } from '@/types/index'

export type AuthStoreType = {
  user: UserType | undefined
  isAuthenticated: boolean
  saveSession: (session: UserType) => void
  removeSession: () => void
}

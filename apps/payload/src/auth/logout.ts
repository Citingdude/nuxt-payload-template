import { removeAuthCookie } from '@payload/auth/authData'

export function logout(): void {
  removeAuthCookie()
}

import type { User } from '@repo/payload-types'

const ADMIN_ROLES: Set<User['role']> = new Set([
  'super-admin',
  'admin',
])

export function isAdmin(user: User): boolean {
  return ADMIN_ROLES.has(user.role)
}

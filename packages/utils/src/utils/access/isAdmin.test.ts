import type { User } from '@repo/payload-types'
import {
  describe,
  expect,
  it,
} from 'vitest'

import { isAdmin } from './isAdmin.util'

function createUser(role: User['role']): User {
  return {
    id: role,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    darkMode: 'light',
    email: `${role}@example.com`,
    role,
  }
}

describe('isAdmin', () => {
  it('should return true if the user is an admin or super admin', () => {
    expect(isAdmin(createUser('super-admin'))).toBeTruthy()
    expect(isAdmin(createUser('admin'))).toBeTruthy()
  })

  it('should return false if the user is not an admin or super admin', () => {
    expect(isAdmin(createUser('user'))).toBeFalsy()
    expect(isAdmin(createUser('editor'))).toBeFalsy()
  })
})

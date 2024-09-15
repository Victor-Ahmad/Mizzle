import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import type { UserType } from '@/types/index'

const mock = new MockAdapter(axios)

export const fakeUsers: UserType[] = [
  {
    id: '1',
    email: 'admin@email.com',
    username: 'admin',
    password: 'password',
    firstName: 'Admin',
    lastName: 'Stackbros',
    role: 'admin',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTdGFja2Jyb3MiLCJhdWQiOiJTdGFja2Jyb3MiLCJzdWIiOiJzdGFja2Jyb3MwN0BnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlN0YWNrYnJvcyIsIkVtYWlsIjoic3RhY2ticm9zMDdAZ21haWwuY29tIiwiUm9sZSI6IkFkbWluIiwiZmlyc3ROYW1lIjoiVXNlciJ9.t6XV8x_4d75kgaX64AxfGcHNBagW80_UsLZoHKMJicthvKqTzufXe1KRptdW-s9I1qWWj6oBqxfRrpc1Et-bhA'
  },
  {
    id: '2',
    email: 'user@email.com',
    username: 'user',
    password: 'password',
    firstName: 'User',
    lastName: 'Stackbros',
    role: 'user',
    token:
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTdGFja2Jyb3MiLCJhdWQiOiJTdGFja2Jyb3MiLCJzdWIiOiJzdGFja2Jyb3MwN0BnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlN0YWNrYnJvcyIsIkVtYWlsIjoic3RhY2ticm9zMDdAZ21haWwuY29tIiwiUm9sZSI6IkFkbWluIiwiZmlyc3ROYW1lIjoiVXNlciJ9.t6XV8x_4d75kgaX64AxfGcHNBagW80_UsLZoHKMJicthvKqTzufXe1KRptdW-s9I1qWWj6oBqxfRrpc1Et-bhA'
  }
]

export default function configureFakeBackend() {
  mock.onPost('/login').reply(function (config) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(function (resolve, _reject) {
      setTimeout(function () {
        // get parameters from post request
        const params = JSON.parse(config.data)
        // find if any user matches login credentials
        const filteredUsers = fakeUsers.filter((user) => {
          return user.email === params.email && user.password === params.password
        })

        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          const { id, email, username, firstName, lastName, role, token } = filteredUsers[0]
          resolve([200, { id, email, username, firstName, lastName, role, token }])
        } else {
          // else return error
          resolve([401, { error: 'Username or password is incorrect' }])
        }
      }, 1000)
    })
  })
}

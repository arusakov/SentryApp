export namespace Sentry {

  export const URL_PREFIX = 'https://sentry.io/api/0'

  export const ACTIVE: 'active' = 'active'


  export const Projects: 'projects' = 'projects'
  export type Project = {
    status: typeof ACTIVE,
    id: string,
    name: string,
  }

}

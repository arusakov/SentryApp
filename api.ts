import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/map'

import { Sentry } from './sentry'

function getBearer(sid: string) {
  return 'Bearer ' + sid
}

export function getList(items: 'projects'): Observable<Sentry.Project[]>
export function getList(items: string) {
  return Observable
    .ajax({
      headers: {
        Authorization: getBearer('<TOKEN>'),
      },
      url: Sentry.URL_PREFIX + '/' + items + '/',
    })
    .map(res => res.response)
}

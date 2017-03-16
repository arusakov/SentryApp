import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/map'

import { Sentry } from './sentry'

function getBearer(sid: string) {
  return 'Bearer ' + sid
}

const TOKEN = 'ec73867b0d784226970e107fa6d68ee26b99311bbbf543a9b1d3fd3f62ddaf98'

export function getList(items: 'projects'): Observable<Sentry.Project[]>
export function getList(items: string) {
  return Observable
    .ajax({
      headers: {
        Authorization: getBearer(TOKEN),
      },
      url: Sentry.URL_PREFIX + '/' + items + '/',
    })
    .map(res => res.response)
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(body: string): string {
    
    if(!body) return 

    let size = body.length

    if(size > 100) {
      body = body.slice(0, 120)
      body += '...'
    }

    return body

  }

}

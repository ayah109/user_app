import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'customDate'

})

export class UserPipePipe implements PipeTransform {

  transform(birthdate : Date): unknown {
      if(birthdate) {
        const convertAge = new Date(birthdate);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        var age= Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        return age;
      }
      return ;
    }

  }



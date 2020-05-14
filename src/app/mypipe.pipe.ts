import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: String, gen: String): String {
    if(gen.toLowerCase() == "Female"){
    return "Miss. "+value
    }else{
      return "Mr. "+value
    }
  }

}

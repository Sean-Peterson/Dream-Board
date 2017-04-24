import {Pipe, PipeTransform} from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: "countryDream",
  pure: false
})


export class CountryDreamPipe implements PipeTransform {
  transform(input: Post[], desiredCountry){
    if (input) {
      var output: Post[] = [];
      if (desiredCountry === 'all') {
        return input;
      }
      for (var i = 0; i < input.length; i++) {
        if (input[i].country.toLowerCase() == desiredCountry.toLowerCase()) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}

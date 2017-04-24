import {Pipe, PipeTransform} from '@angular/core';
import { Blog } from './blog.model';

@Pipe({
  name: "countryBlog",
  pure: false
})


export class CountryBlogPipe implements PipeTransform {
  transform(input: Blog[], desiredCountry){
    if (input) {
      var output: Blog[] = [];
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

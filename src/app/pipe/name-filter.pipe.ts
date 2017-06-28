import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(list: any[], filed: string, keyword: string): any {

    if (!filed || !keyword) {
      return list;
    }

    return list.filter(item => {
      const itemFilesValue = item[filed].toLowerCase();
      return itemFilesValue.indexOf(keyword) >= 0;
    });
  }

}

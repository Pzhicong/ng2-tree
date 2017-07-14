import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexform',
  pure: true //定义纯与非纯管道
})
export class SexformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    switch(value) {
      case 'male' : return '男';
      case 'female': return '女';
      default: return '未知性别';
    }
  }
}

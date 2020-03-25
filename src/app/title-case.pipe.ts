import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ')

    //MOSH SOLUTION
    // for (let i = 0; i < words.length ; i++) {
    //   let word = words[i]
    //   if (i > 0 && this.isPreoposition(word)) {
    //     words[i] = word.toLowerCase()
    //   } else {
    //     words[i] = this.toTitleCase(word)
    //   }
    // }

    //MY SOLUTION
    words.forEach((word, i) => {
      if (i > 0 && this.isPreoposition(word)) {
            words[i] = word.toLowerCase()
          } else {
            words[i] = this.toTitleCase(word)
          }
    })

    return words.join(' ')
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
  }

  private isPreoposition(word: string): boolean {
    const preps = ['of', 'the']

    return preps.includes(word.toLowerCase())
  }

}

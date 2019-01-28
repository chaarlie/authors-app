import { Publication } from '../../publications/model/Publication';

export  class Author {
    constructor(public name: string, public email: string, public publications: Array<Publication>) {}
}
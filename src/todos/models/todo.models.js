import { v4 as uuid} from 'uuid';

export class Todo {
    /**
     * 
     * @param {String} description 
     */
    constructor(description) {
        this.id = uuid(); //para identificar a cada uno de manera única con 'uuid'
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
};
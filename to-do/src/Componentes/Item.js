class Item {

    //  lastId = Math.floor(Math.random() * 100);

    constructor(text) {
        this.id = Math.floor(Math.random() * 1000);
        this.text = text;
        this.done = false;
    }
}

export default Item;
class Queue<T>{
    private data: T[] = [];

    add(item: T){
        this.data.push(item);
    }

    remove(){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add("AAAAAA");
nameQueue.add("SSSSSSSSS");

const numberQueue = new Queue<number>();
numberQueue.add(2)
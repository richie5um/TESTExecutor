import * as Promise from 'bluebird';


export interface ExecutionItem {
    execute(): Promise<any>;
}

export class BaseExecutionItem {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}

export class Executor {
    public execute(item: ExecutionItem) {
        let rnd = Math.random();
        let executionItem = new item(rnd);

        return new Promise((resolve, reject) => {
                console.log('Start Transaction');
                return resolve();
            })
            .then(() => {
                return executionItem.execute();
            })
            .then(() => {
                console.log('Commit Transaction');
                return Promise.resolve();
            })
            .catch((err) => {
                console.log('Reject Transaction:', err);
                //return Promise.reject(err);
            });
    }
}

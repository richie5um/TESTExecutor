import * as Executor from './executor';

class HelloAction extends Executor.BaseExecutionItem {

    public execute() {
        return new Promise((resolve, reject) => {
                console.log('HelloAction:', this.id);
                return resolve({hello: 1});
            })
            .then((value) => {
                console.log('HelloAction2:', value);
                return Promise.resolve({world: 1});
            })
            .then((value) => {
                console.log('HelloAction3:', value);
                return Promise.resolve();
            });
    }
}

class FailingAction extends Executor.BaseExecutionItem {

    public execute() {
        return new Promise((resolve, reject) => {
                console.log('FailingAction:', this.id);
                return resolve();
            })
            .then(() => {
                return Promise.reject('Fake Error');
            });
    }
}

let executor = new Executor.Executor();
executor.execute(HelloAction);
executor.execute(FailingAction);
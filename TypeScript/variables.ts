let myName: string | null | number = '';
myName = null;

//Arrays
let items = ['aaaa', 5];

//Object

interface IAccount {
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void
};

const account: IAccount = {
    name: "AAAA",
    balance: 10
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount{
    constructor(
        public name, public balance
    ){

    }

    private withdraw(){

    }
}
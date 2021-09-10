const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '06/09/2021',
    },
    {
        id: 2,
        description: 'Criação WebSite',
        amount: 500000,
        date: '06/09/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '06/09/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: -20000,
        date: '06/09/2021',
    }
]

const Transaction = {
    incomes() {
        //Somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

const DOM = {

    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction) {
        const CSSclass =  transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
        <td class="description" > ${transaction.description}</td > 
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td> 
        <td><img src="./assets/minus.svg" alt="Remover transação"></td>`;
        return html;
    },

    updateBalance(){
        
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        return signal + value;
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})
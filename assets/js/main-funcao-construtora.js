function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.initial = () => {
        this.clickButtons();
    };

    this.clickButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.deleteDisplay();
            if(el.classList.contains('btn-eq')) this.calculateDisplay();
        })
    };

    this.btnParaDisplay = (valor) => this.display.value += valor;
    this.clearDisplay = () => this.display.value = '';
    this.deleteDisplay = () => this.display.value = this.display.value.slice(0, -1);

    this.calculateDisplay = () => {
        let conta  = this.display.value

            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida')
                    return;
                }
                this.display.value = String(conta)
            } catch(e){
                alert('Calculo Inválido!')
            }
    };
    
}

const calculadora = new Calculadora();
calculadora.initial()
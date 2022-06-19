/*function criaCalculadora() {
    return { 
      display: document.querySelector('.display'),
      btnClear: document.querySelector('.btn-clear'),

      inicia() {
        this.cliqueBotoes();
        this.pressionaEnter();
        
      },
      //método 
      pressionaEnter() {
          this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
          });
      },
      //método
      realizaConta() {
          let conta = this.display.value;

          try {
              conta = eval(conta);
              
              if(!conta) {
                  alert('conta inválida');
                  return;
              }

             this.display.value = String(conta); 
          } catch(e) {

          }
      },
      //método
      clearDisplay() {
          this.display.value = ' ';

      },
      //método
      apagaUm() {
          this.display.value = this.display.value.slice(0,-1);
      },

     

      cliqueBotoes() {
        document.addEventListener('click', e => {
            const el = e.target;
            

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
        
      },

      btnParaDisplay(valor) {
          this.display.value += valor;
          
      }

    };
}


const calculadora = criaCalculadora();
calculadora.inicia();*/

//Calculadora com função construtora.

function Calculadora() {
    this.display = document.querySelector('.display');


    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) return;
            this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
                
            
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

          this.display.value = conta;
        } catch(e) {
            alert('Conta invalida');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    

    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();
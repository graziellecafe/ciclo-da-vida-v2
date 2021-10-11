# Ciclo da Vida
Projeto construído a partir da ideia de um 'Ciclo da Vida' de uma pessoa, com o intuito em aprender mais sobre os conceitos de Programação Orientada a Objetos. JavaScript, TypeScript e Node.

# Iniciando o projeto 
Criação do package.json, inserindo as informações bases do projeto
```
npm init 
```

Instalar o TypeScript como dependência de desenvolvimento
```
npm i --save-dev typescript ts-node nodemon
```

Instalação do nodemon
```
npm install -g nodemon
```

ou instalar como uma dependência 
```
npm install --save-dev nodemon
```

Dependência do TypeScript, versão local já instalado normalmente, gerando um arquivo de configuração de compliações do TypeScript
```
npx tsc --init
```

Instalação da dependência do express
```
npm install express
npm i --save-dev@types/express
```



Exercícios

1. Escrever uma classe Banco que deve possuir os seguintes métodos: 
    1.1. CriarContaBancaria: este método deve ser estático usando o Design Pattern Factory. Ele deve receber como parâmetro o tipo da conta a ser criada, CPF da pessoa, senha da conta. O número da conta e o número da agência deve ser gerado dentro deste método de criar conta. O retorno deste método deve ser um objeto do tipo DadosBancários: 
    
    Dar como nome do objeto como exemplo DadosBancários que estará dentro da classe Pessoa. --- OK ---

        1.1.1. Criar uma enum com os tipos de conta permitido: ----- OK -----
        * Conta Pessoa Física 
        * Conta Pessoa Jurídica

1.2. A classe Banco deve possuir um método público chamado SacarDinheiro. Ele deve receber como parâmetro o número da conta, o número da agência, o valor a ser sacado e uma senha de quatro dígitos. 

1.3. A classe Banco deve possuir um método público chamado DepositarDinheiro. Ele deve receber como parâmetro o número da conta, o número da agência, o valor a ser sacado e uma senha de quatro dígitos. 

1.4. A classe Banco deve possuir um método público chamado ExtratoBancário. Ele deve receber como parâmetro o número da conta, o número da agência, e uma senha de quatro dígitos. Este método deve retornar um objeto com a seguinte estrutura: --- OK!!! ---

{
    "saldoDisponivel": number, 
    "limiteDeCredito": number,
    "tipoDeConta": string
}

e deve ser uma classe chamada Extrato.  

2. Dentro do MundoCapitalista existem Bancos. Então, injetar a dependência da classe Banco dentro do MundoCapitalista. Quando a Pessoa chegar na fase adulta, ela deve adquirir uma conta bancária.

3. Após 30 dias de trabalho, o salário que a pessoa vai receber deve ser depositado na conta bancária dela. 

4. Sempre que a pessoa for fazer compra e não tiver dinheiro o suficiente na carteira, ela deve sacar um dinheiro no banco para pagar a compra. 

5. Sempre que a pessoa for pagar a dívida para sua mãe, ela deve usar o dinheiro da carteira e se não for o suficiente sacar o dinheiro no banco para pagar o restante. 


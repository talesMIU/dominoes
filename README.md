# dominoes
1-Instalar o python  https://www.python.org/downloads/
2-Instalar django
    Linux e IOS - python -m pip install Django
    Windows - py -m pip install Django 
    obs- meu sistema é windows e tenho que usar o comando pra Linux!?!?!?
3- npm install (tu já tem o node?)

4- para rodar o server (server esta no localhost 8000)
    entrar na pasta domino
        cd domino
    usar o comando
        python .\manage.py runserver
5- para rodar o front abrir outro cmd(esta no localhost 3000)
    ir para pasta frontend
        cd frontend
    usar o comando
        npm start 
6-api do banco de dados com as peças
api get {
    "pieces": "http://localhost:8000/api/pieces/"
}
atributos da classe
     piece: {
        id: "int",
        pieceName: "string",
        rightNumber: "int",
        leftNumber: "int"
      }

### INSTALAÇÃO DO WHATICKET VIA WINDOWS

#instalação do BD

Instalar o Docker Windows https://docs.docker.com/desktop/windows/install/

docker run --name whaticketdb -e MYSQL_ROOT_PASSWORD=strongpassword -e MYSQL_DATABASE=whaticket -e MYSQL_USER=whaticket -e MYSQL_PASSWORD=whaticket --restart always -p 3306:3306 -d mariadb:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_bin

git clone https://github.com/kbokleber/whaticket.git whaticket

Dentro da pasta criar o arquivo .env :

cp .env.example .env
nano .env
Fill .env file with environment variables:

NODE_ENV=DEVELOPMENT      #it helps on debugging

BACKEND_URL=http://localhost

FRONTEND_URL=https://localhost:3000

PROXY_PORT=8080

PORT=8080

DB_HOST=localhost

DB_DIALECT=mysql

DB_USER=whaticket

DB_PASS=strongpassword

DB_NAME=whaticket

JWT_SECRET=3123123213123

JWT_REFRESH_SECRET=75756756756

### ENTRE NO DIRETÓRIO DO BACKEND:

npm install

npm run build

### PRIVILÉGIOS AO USUARIO DO BANCO

docker exec -it whaticketdb mysql -uroot -p
	
CREATE USER 'whaticket'@'172.17.0.1' IDENTIFIED BY 'strongpassword';

GRANT ALL PRIVILEGES ON *.* TO 'whaticket'@'172.17.0.1' WITH GRANT OPTION;

FLUSH PRIVILEGES;

### COMANDOS PARA MIGRAR A ESTRUTURA DO BANCO DE DADOS

npx sequelize db:migrate

npx sequelize db:seed:all


###ENTRE NO DIRETÓRIO DO FRONTEND

abrir o segundo terminal, vai para a pasta frontend e crie o arquivo .env:


nano .env
REACT_APP_BACKEND_URL = http://localhost:8080/ # Your previous configured backend app URL.

Start frontend app:

npm install

npm run build

npm start

==============================================================

### Usuário padrão para acesso

* User: admin@kbosolucoes.online  
* Password: admin
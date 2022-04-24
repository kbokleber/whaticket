### INSTALAÇÃO DO WHATICKET VIA WINDOWS

#instalação do BD

Instalar o Docker Windows https://docs.docker.com/desktop/windows/install/

docker run --name whaticketdb -e MYSQL_ROOT_PASSWORD=strongpassword -e MYSQL_DATABASE=whaticket -e MYSQL_USER=whaticket -e MYSQL_PASSWORD=whaticket --restart always -p 3306:3306 -d mariadb:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_bin

git clone https://github.com/kbokleber/whaticket.git whaticket

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

npm start

### ENTRE NO DIRETÓRIO DO FRONTEND

abrir o segundo terminal, e entre no diretório frontend:

npm install

npm run build

npm start

==============================================================

### Usuário padrão para acesso

* User: admin@kbosolucoes.online  
* Password: admin
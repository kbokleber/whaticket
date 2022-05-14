# INSTALAÇÃO DO WHATICKET VIA WINDOWS

### Instalação do Node para Windows

https://nodejs.org/en/download/

### Instalação do Git

https://git-scm.com/downloads

### Instalação do BD

Instalar o Docker Windows https://docs.docker.com/desktop/windows/install/

```bash
docker run --name whaticketdb -e MYSQL_ROOT_PASSWORD=strongpassword -e MYSQL_DATABASE=whaticket -e MYSQL_USER=whaticket -e MYSQL_PASSWORD=whaticket --restart always -p 3306:3306 -d mariadb:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_bin
```

```bash
git clone https://github.com/kbokleber/whaticket.git whaticket
```

### ENTRE NO DIRETÓRIO DO BACKEND:

```bash
npm install
```
```bash
npm run build
```

### PRIVILÉGIOS AO USUARIO DO BANCO
```bash
docker exec -it whaticketdb mysql -uroot -p
```	
```bash
CREATE USER 'whaticket'@'172.17.0.1' IDENTIFIED BY 'strongpassword';
```
```bash
GRANT ALL PRIVILEGES ON *.* TO 'whaticket'@'172.17.0.1' WITH GRANT OPTION;
```
```bash
FLUSH PRIVILEGES;
```

### COMANDOS PARA MIGRAR A ESTRUTURA DO BANCO DE DADOS
```bash
npx sequelize db:migrate
```
```bash
npx sequelize db:seed:all
```
```bash
npm start
```

### ENTRE NO DIRETÓRIO DO FRONTEND

abrir o segundo terminal, e entre no diretório frontend:
```bash
npm install
```
```bash
npm run build
```
```bash
npm start
```

==============================================================

### Usuário padrão para acesso

* User: admin@kbosolucoes.online  
* Password: admin

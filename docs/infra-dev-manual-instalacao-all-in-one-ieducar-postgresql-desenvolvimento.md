---
id: infra-dev-manual-instalacao-all-in-one-ieducar-postgresql-desenvolvimento
title: DEV - Manual de Instalação - All In One - i-Educar e PostgreSQL
sidebar_label: DEV - Manual de Instalação - All In One - i-Educar e PostgreSQL
---

Esse manual aborda a instalação do i-Educar e seu banco de dados PostgreSQL no modo desenvolvimento em uma única instância de máquina.

> APENAS O [PASSO 04](#passo-04---definir-variáveis-utilizadas-no-processo-de-instalação) É NECESSÁRIO ALTERAR ALGUM VALOR, OS DEMAIS É NECESSÁRIO SOMENTE COPIAR E COLAR!

> OS [PASSO 12](#passo-12---configurar-o-postgresql) E [PASSO 23](#passo-23---configurar-o-php) SÃO OS ÚNICOS QUE NÃO SÃO UM COMANDO, NELES HAVERÁ A NECESSIDADE DA EDIÇÃO DOS ARQUIVOS PELO USUÁRIO, AJUSTANDO VALORES CONFORME NECESSIDADE.

#### PRÉ-REQUISÍTOS

- Sistema Operacional Ubuntu na 18.04 ou 20.04
- 2GB de Memória RAM (Adicionais são recomendados)
- 2vCPU Core (Adicionais são recomendados)
- Usuário linux para gerenciamento da aplicação.

#### PASSO 01 - ATUALIZAR LIBS BASE DO SISTEMA OPERACIONAL
``` sh
sudo find /var/lib/apt/lists -type f -exec rm -f {} \; && sudo apt update -y && sudo DEBIAN_FRONTEND=noninteractive apt upgrade -y
```

#### PASSO 02 - INSTALAR LIBS BASE DO SISTEMA OPERACIONAL E LIBS BASE UTILIZADAS PELO i-Educar
``` sh
sudo DEBIAN_FRONTEND=noninteractive apt install -y jq git wget curl zip unzip net-tools software-properties-common bash-completion openjdk-8-jre libpq-dev redis-server nodejs
```

#### PASSO 03 - AJUSTAR LOCALE DO SERVIDOR
``` sh
sudo locale-gen pt_BR.UTF-8
sudo dpkg-reconfigure --frontend=noninteractive locales
sudo update-locale LANG=pt_BR.UTF-8
```

#### PASSO 04 - DEFINIR VARIÁVEIS UTILIZADAS NO PROCESSO DE INSTALAÇÃO
Obs. Não é necessário copiar os comentários. Comentários são as linhas iniciadas com o caractere `#`
``` sh
# Aqui é obrigatório informar o IP da instância de máquina.
# Por padrão ele obtem automaticamente, porém em alguns casos a instância de máquina pode conter duas ou mais interfaces de rede, 
# nesses casos será necessário informar manualmente qual IP deseja usar para acessar a aplicação após instalada.
export IP=$(hostname -I | awk '{print $1}')

# Aqui é obrigatório informar a versão do PostgreSQL
export POSTGRES_VERSAO=14

# Aqui é obrigatório informar a versão do PHP
export PHP_VERSAO=8.2

# Aqui é obrigatório informar a versão do Composer
export VERSAO_COMPOSER=2.3.5

# Aqui é obrigatório informar a versão do i-Educar.
export VERSAO_IEDUCAR=2.8

# Aqui deve ser informado a versão do Pacote de Relatórios do i-Educar.
export VERSAO_IEDUCAR_REPORTS_PACKAGE=2.8

# Aqui a variável DB_HOST obtem o valor do IP do banco de dados da variável $IP informada anteriormente.
export DB_HOST=$IP

# Aqui deve ser informado a porta de acesso ao banco de dados.
# Default: 5432
export DB_PORTA=5432

# Aqui é obrigatório informar o nome do banco de dados de conexão com o banco de dados a ser criado na instância do PostgreSQL.
# Default: ieducar
export DB_DATABASE_IEDUCAR=ieducar

# Aqui é obrigatório informar o usuário de conexão com o banco de dados a ser criado na instância do PostgreSQL.
# Default: ieducar
export DB_USUARIO_IEDUCAR=ieducar

# Aqui pode ser informado uma senha de sua escolha, caso contrário,
# o script irá gerar uma senha e apresentar no final da instalação.
export DB_PASSWORD_IEDUCAR=$(openssl passwd -crypt $DB_USUARIO_IEDUCAR)
```

#### PASSO 05 - BAIXAR E ADICIONAR A CHAVE DO REPOSITÓRIO POSTGRESQL
``` sh
sudo wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

#### PASSO 06 - ADICIONAR O ENDEREÇO DO SOURCE LIST DO REPOSITÓRIO POSTGRESQL
``` sh
sudo echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | sudo tee  /etc/apt/sources.list.d/pgdg.list
```

#### PASSO 07 - ATUALIZAR SOURCE LIST PARA OBTER O REPOSITÓRIO DO POSTGRESQL
```sh
sudo apt update -y
```

#### PASSO 08 - INSTALAR O POSTGRESQL
``` sh
sudo DEBIAN_FRONTEND=noninteractive apt install -y postgresql-$POSTGRES_VERSAO postgresql-client-$POSTGRES_VERSAO
```

#### PASSO 09 - REMOVER O CLUSTER DEFAULT DO POSTGRESQL
``` sh
sudo pg_dropcluster --stop $POSTGRES_VERSAO main
```

#### PASSO 10 - CRIAR O CLUSTER DEFAULT DO POSTGRESQL
```sh
sudo pg_createcluster -u postgres -g postgres "$POSTGRES_VERSAO" -e UTF8 --locale="pt_BR.UTF-8" --lc-collate="pt_BR.UTF-8" main
```

#### PASSO 11 - CONFIGURAR O POSTGRESQL
> Para configurar o PostgreSQL, deve ser ajustado alguns valores para PostgreSQL

```sh
sudo cat << PG_CONFIG > /etc/postgresql/$POSTGRES_VERSAO/main/conf.d/postgresql.conf
listen_addresses = '*'
PG_CONFIG
```

#### PASSO 12 - REINICIAR O POSTGRESQL
``` sh
sudo systemctl restart postgresql
```

#### PASSO 13 - INSTALAR NGINX
```sh
sudo DEBIAN_FRONTEND=noninteractive apt install -y nginx
```

#### PASSO 14 - REMOVER SITE DEFAULT DO NGINX
```sh
sudo rm -v /etc/nginx/sites-enabled/default
```

#### PASSO 15 - FAZER BACKUP DO ARQUIVO DE CONFIGURAÇÃO DO NGINX
```sh
sudo mv /etc/nginx/nginx.conf /etc/nginx/nginx.sample.conf
```

#### PASSO 16 - CONFIGURAR PARAMETROS NGINX
```sh
sudo cat << NGINX_CONFIG > /etc/nginx/nginx.conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 1024;
    # multi_accept on;
}

http {

    ##
    # Basic Settings
    ##

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    # server_tokens off;

    # server_names_hash_bucket_size 64;
    # server_name_in_redirect off;

    client_body_buffer_size 64;
    client_max_body_size 100m;
    client_body_in_single_buffer on;
    client_header_buffer_size  1m;
    large_client_header_buffers 4 8k;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # SSL Settings
    ##

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
    ssl_prefer_server_ciphers on;

    ##
    # Logging Settings
    ##

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    ##
    # Gzip Settings
    ##

    gzip on;

    # gzip_vary on;
    # gzip_proxied any;
    # gzip_comp_level 6;
    # gzip_buffers 16 8k;
    # gzip_http_version 1.1;
    # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    ##
    # Virtual Host Configs
    ##

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
NGINX_CONFIG
```

#### PASSO 17 - REINICIAR O NGINX
```sh
sudo service nginx restart
```

#### PASSO 18 - ADICIONAR REPOSITÓRIO PPA DO PHP
```sh
sudo add-apt-repository -y ppa:ondrej/php
```

#### PASSO 19 - ATUALIZAR SOURCE LIST PARA OBTER O REPOSITÓRIO DO PHP
```sh
sudo apt update -y
```

#### PASSO 20 - INSTALAR O PHP
```sh
sudo DEBIAN_FRONTEND=noninteractive apt install -y php$PHP_VERSAO php$PHP_VERSAO-fpm php$PHP_VERSAO-common php$PHP_VERSAO-zip php$PHP_VERSAO-pgsql php$PHP_VERSAO-curl php$PHP_VERSAO-xml php$PHP_VERSAO-xmlrpc php$PHP_VERSAO-gd php$PHP_VERSAO-imagick php$PHP_VERSAO-ldap php$PHP_VERSAO-imap php$PHP_VERSAO-mbstring php$PHP_VERSAO-intl php$PHP_VERSAO-cli php$PHP_VERSAO-tidy php$PHP_VERSAO-bcmath php$PHP_VERSAO-tokenizer
```

#### PASSO 21 - CONFIGURAR O PHP
> Para configurar o PHP, deve ser ajustado alguns valores para PHP e PHP Pool, arquivos `php.ini` e `www.conf` respectivamente, no entanto, não iremos alterar esses arquivos diretamente, iremos criar novos arquivos dentro da estrutura já existente para ambos.

```sh
sudo cat << PHP_FPM_INI > /etc/php/$PHP_VERSAO/fpm/conf.d/999-php.ini
memory_limit = 2048M
upload_max_filesize = 1024M
post_max_size = 1024M
max_execution_time = 1800
PHP_FPM_INI
```

```sh
sudo cat << PHP_FPM_POOL_CONFIG > /etc/php/$PHP_VERSAO/fpm/pool.d/zzz.conf
request_terminate_timeout = 1800
PHP_FPM_POOL_CONFIG
```

#### PASSO 22 - REINICIAR O PHP
```sh
sudo service php$PHP_VERSAO-fpm restart
```

#### PASSO 23 - CONFIGURAR VIRTUAL HOST i-Educar
```sh
sudo cat << NGINX_IEDUCAR > /etc/nginx/sites-available/ieducar
upstream php-fpm {
    server unix:/run/php/php$PHP_VERSAO-fpm.sock;
}
server {
    listen 80;
    server_name _;

    root /var/www/ieducar/public;
    index index.php index.html;

    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;

    location ~ ^/intranet/?$ {
        rewrite ^.*$ /intranet/index.php redirect;
    }

    location ~ /module/(.*)/(styles|scripts|imagens)/(.*) {
        rewrite ^/module/(.*)/(imagens|scripts|styles)/(.*)$ /intranet/\$2/\$3 break;
    }

    location ~ /module/(.*)/(.*) {
        rewrite ^/module/(.*/)(.*intranet/.*)$ /\$2 redirect;
        rewrite ^/module/(.*/)(.*index\.php)$ /\$2 redirect;
        rewrite ^/module/(.*/)(.*logof\.php)$ /intranet/logof.php redirect;
        rewrite ^/module/(.*/)(.*meusdados\.php)$ /intranet/meusdados.php redirect;
        rewrite ^/module/(.*/)(.*_xml.*)(\.php)$ /intranet/\$2.php redirect;
        rewrite ^/module/(.*/)(.*erro_banco\.php)$ /intranet/erro_banco.php redirect;
        rewrite ^/module/(.*/)(.*educar_pesquisa_cliente_lst\.php)$ /intranet/educar_pesquisa_cliente_lst.php redirect;
        rewrite ^/module/(.*/)(.*educar_pesquisa_obra_lst\.php)$ /intranet/educar_pesquisa_obra_lst.php redirect;
        rewrite ^/module/(.*)$ /module/index.php last;
    }

    location ~ ^(/intranet.*\.php|/modules.*\.php|/module/) {
        rewrite ^(.*)$ /index.php\$1;
    }

    location ~ \.php {
        fastcgi_read_timeout 300;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass php-fpm;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        fastcgi_param PATH_INFO \$fastcgi_path_info;
    }

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }
}
NGINX_IEDUCAR
```

#### PASSO 24 - HABILITA VIRTUAL HOST i-Educar e REMOVER O APACHE2 SE INSTALADO
```sh
sudo ln -sf /etc/nginx/sites-available/ieducar /etc/nginx/sites-enabled/ieducar
sudo apt remove --purge apache2
```

#### PASSO 25 - REINICIAR O NGINX
```sh
sudo service nginx restart
```

#### PASSO 26 - CONFERIR PATH ONDE O i-Educar SERÁ DISPONIBILIZADO, SE NÃO EXITIR, SERÁ CRIADO
```sh
[ -d /var/www ] || sudo mkdir -p /var/www
```

#### PASSO 27 - REALIZAR O DOWNLOAD DO PACOTE DO i-Educar
```sh
sudo git clone --branch=$VERSAO_IEDUCAR https://github.com/portabilis/i-educar.git /var/www/ieducar
```

#### PASSO 28 - AJUSTAR PERMISSÕES DO i-Educar
```sh
sudo chown -R $USER:www-data /var/www/ieducar
```

#### PASSO 29 - INSTALAR O COMPOSER
```sh
cd /tmp
sudo curl -sS https://getcomposer.org/installer -o composer-setup.php
HASH=`curl -sS https://composer.github.io/installer.sig`
sudo php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer --version="$VERSAO_COMPOSER"
```

#### PASSO 30 - CONFIGURAR O ARQUIVO DE ENVIROMENT DO i-Educar
```sh
sudo cat << ENV > /var/www/ieducar/.env
APP_NAME=i-Educar
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://`echo $IP`
APP_TIMEZONE=America/Sao_Paulo
APP_TRACK_ERROR=true
APP_DEFAULT_HOST=`echo $IP`

#
# Se o i-Educar estiver utilizando o procotolo HTTP com SSL, deve-se trocar o valor de false para true
#
ASSETS_SECURE=false

#
# Logo que fica presente nos relatórios
# O arquivo tem que ficar em /var/www/ieducar/packages/portabilis/i-educar-reports-package/ieducar/ReportLogos
#
REPORTS_LOGO=brasil.png

API_ACCESS_KEY=
API_SECRET_KEY=

LEGACY_CODE=true
LEGACY_DISPLAY_ERRORS=false
LEGACY_PATH=ieducar
LOG_CHANNEL=stack

TELESCOPE_ENABLED=false

DB_CONNECTION=pgsql
DB_HOST=`echo $DB_HOST`
DB_PORT=`echo $DB_PORTA`
DB_DATABASE=`echo $DB_DATABASE_IEDUCAR`
DB_USERNAME=`echo $DB_USUARIO_IEDUCAR`
DB_PASSWORD=`echo $DB_PASSWORD_IEDUCAR`

BROADCAST_DRIVER=null
CACHE_DRIVER=redis
CACHE_TTL=604800
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=localhost
REDIS_PASSWORD=null
REDIS_PORT=6379

SENTINEL_HOSTS=localhost
SENTINEL_PORT=26379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

HONEYBADGER_API_KEY=

GOOGLE_TAG_MANAGER=

FILESYSTEM_DRIVER=local

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=

MIX_SOCKET_SERVER=127.0.0.1
MIX_SOCKET_PORT=6001
ENV

```
#### PASSO 31 - DESABILITAR AUTENTICAÇÃO NO POSTGRESQL (SERÁ AJUSTADO NO FINAL DO PROCESSO)
> A desabilitação é necessários para executar comandos SQL sem a necessidade de informar a senha.

> No final do processo será habilitado a autenticação.

```sh
sudo cp /etc/postgresql/$POSTGRES_VERSAO/main/pg_hba.conf /etc/postgresql/$POSTGRES_VERSAO/main/pg_hba.sample.conf
```

```sh
sudo cat << PG_HBA > /etc/postgresql/$POSTGRES_VERSAO/main/pg_hba.conf
# TYPE  DATABASE        USER            CIDR-ADDRESS            METHOD
local   all             postgres                                trust
local   all             all                                     trust
host    all             all             all                     trust
host    all             all             ::1/128                 trust

local   replication     all                                     trust
host    replication     all             127.0.0.1/32            trust
host    replication     all             ::1/128                 trust
PG_HBA
```

#### PASSO 32 - DEFINIR SENHA PARA O USUÁRIO `postgres`
```sh
DB_PASSWORD_POSTGRES=$(openssl passwd -crypt postgres)
psql -U postgres -c "ALTER USER postgres WITH PASSWORD '$DB_PASSWORD_POSTGRES';"
```

#### PASSO 33 - CRIAR DATABASE DO i-Educar
```sh
psql -U postgres -c "CREATE ROLE $DB_USUARIO_IEDUCAR WITH LOGIN PASSWORD '$DB_PASSWORD_IEDUCAR';"
psql -U postgres -c "CREATE DATABASE $DB_DATABASE_IEDUCAR OWNER $DB_USUARIO_IEDUCAR"
psql -U postgres -c "ALTER USER $DB_USUARIO_IEDUCAR WITH SUPERUSER;"
```

#### PASSO 34 - INSTALAR O i-Educar
```sh
cd /var/www/ieducar
sudo yes | composer new-install
php artisan vendor:publish --tag=reports-assets --ansi
```

#### PASSO 35 - INSTALAR O PACOTE DE RELATÓRIOS NO i-Educar
```sh
cd /var/www/ieducar && sudo rm -rf packages/portabilis/i-educar-reports-package
sudo git clone --branch $VERSAO_IEDUCAR_REPORTS_PACKAGE https://github.com/portabilis/i-educar-reports-package.git packages/portabilis/i-educar-reports-package
sudo yes | composer update-install
sudo php artisan community:reports:link
sudo php artisan community:reports:install
php artisan vendor:publish --tag=reports-assets --ansi
```

#### PASSO 36 - AJUSTAR PERMISSÕES DO i-Educar
```sh
sudo chown -R $USER:www-data /var/www/ieducar
```

#### PASSO 37 - HABILITAR AUTENTICAÇÃO NO POSTGRESQL
```sh
sudo cat << PG_HBA > /etc/postgresql/$POSTGRES_VERSAO/main/pg_hba.conf
# TYPE  DATABASE        USER            CIDR-ADDRESS            METHOD
local   all             postgres                                peer
local   all             all                                     peer
host    all             all             all                     md5
host    all             all             ::1/128                 md5

local   replication     all                                     peer
host    replication     all             127.0.0.1/32            md5
host    replication     all             ::1/128                 md5
PG_HBA
```

#### PASSO 38 - REINICIAR O POSTGRES
``` sh
sudo systemctl restart postgresql
```

#### PASSO 39 - CONSULTAR VALORES DE VARIÁREIS UTILIZADAS DURANTE O PROCESSO DE INSTALAÇÃO

> OBS. GUARDE OS VALORES APRESENTADOS POR ESSE COMANDO!

```sh
sudo cat << INFO > /tmp/info.sh
echo ""
echo "INSTALACAO TERMINADA."
echo "    ACESSE: http://`echo $IP`/login"
echo ""
echo "INFORMACOES DE ACESSO AO BANCO DE DADOS"
echo ""
echo "    SENHA MESTRE POSTGRES: " `echo $DB_PASSWORD_POSTGRES`
echo ""
echo "    HOST: " `echo $DB_HOST`
echo "    PORTA: " `echo $DB_PORTA`
echo "    DB_DATABASE_IEDUCAR: " `echo $DB_DATABASE_IEDUCAR`
echo "    DB_USUARIO_IEDUCAR: " `echo $DB_USUARIO_IEDUCAR`
echo "    DB_PASSWORD_IEDUCAR: " `echo $DB_PASSWORD_IEDUCAR`
echo ""
echo "CREDENCIAIS DE ACESSO DO ADMINISTRADOR DO PORTAL i-Educar: "
echo "    USUARIO: admin"
echo "    SENHA: 123456789"
echo ""
INFO
clear && sudo chmod +x /tmp/info.sh

sudo sh /tmp/info.sh && sudo rm -f /tmp/info.sh
```
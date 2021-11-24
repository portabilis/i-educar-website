---
id: infra-dev-manual-instalacao-only-instance-postgresql-desenvolvimento
title: DEV - Manual de Instalação - Only Instance - Postgres do i-Educar
sidebar_label: DEV - Manual de Instalação - Only Instance - Postgres do i-Educar
---

Esse manual aborda a instalação do banco de dados PostgreSQL utilizado pelo i-Educar no modo desenvolvimento em uma única instância de máquina.

> APENAS O [PASSO 04](#passo-04---definir-variáveis-utilizadas-no-processo-de-instalação) É NECESSÁRIO ALTERAR ALGUM VALOR, OS DEMAIS É NECESSÁRIO SOMENTE COPIAR E COLAR!

> O [PASSO 12](#passo-12---configurar-o-postgresql) É O ÚNICO QUE NÃO É UM COMANDO, NELE HAVERÁ A NECESSIDADE DA EDIÇÃO DOS ARQUIVOS PELO USUÁRIO, AJUSTANDO VALORES CONFORME NECESSIDADE.

#### PRÉ-REQUISÍTOS

- Sistema Operacional Ubuntu na 18.04 ou 20.04
- 2GB de Memória RAM (Adicionais são recomendados)
- 2vCPU Core (Adicionais são recomendados)
- Usuário linux para gerenciamento da aplicação.

#### PASSO 01 - ATUALIZAR LIBS BASE DO SISTEMA OPERACIONAL
``` sh
sudo apt update -y && sudo apt upgrade -y
```

#### PASSO 02 - INSTALAR LIBS BASE DO SISTEMA OPERACIONAL
``` sh
sudo apt install -y git wget curl zip sudo unzip openssl net-tools software-properties-common bash-completion
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
export POSTGRES_VERSAO=13

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
sudo apt install -y postgresql-$POSTGRES_VERSAO postgresql-client-$POSTGRES_VERSAO
```

#### PASSO 09 - REMOVER O CLUSTER DEFAULT DO POSTGRESQL
``` sh
sudo pg_dropcluster --stop $POSTGRES_VERSAO main
```

#### PASSO 10 - CRIAR O CLUSTER DEFAULT DO POSTGRESQL
```sh
sudo pg_createcluster -u postgres -g postgres "$POSTGRES_VERSAO" -e UTF8 --locale="pt_BR.UTF-8" --lc-collate="pt_BR.UTF-8" main
```

#### PASSO 11 - DESABILITAR AUTENTICAÇÃO NO POSTGRESQL (SERÁ AJUSTADO NO FINAL DO PROCESSO)
> A desabilitação é necessários para executar comandos SQL sem a necessidade de informar a senha.

> No final do processo será habilitado a autenticação.
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

#### PASSO 12 - CONFIGURAR O POSTGRESQL
> Para configurar o PostgreSQL, deve ser ajustado alguns valores para `postgresql.conf`

> Caso algumas das propriedades abaixo esteja comentadas, será necessário descomentar.

- /etc/postgresql/$POSTGRES_VERSAO/main/postgresql.conf
    - listen_addresses = '*'

#### PASSO 13 - REINICIAR O POSTGRESQL
``` sh
sudo systemctl restart postgresql
```

#### PASSO 14 - DEFINIR SENHA PARA O USUÁRIO `postgres`
```sh
DB_PASSWORD_POSTGRES=$(openssl passwd -crypt postgres)
psql -U postgres -c "ALTER USER postgres WITH PASSWORD '$DB_PASSWORD_POSTGRES';"
```

#### PASSO 15 - CRIAR DATABASE DO i-Educar
```sh
psql -U postgres -c "CREATE ROLE $DB_USUARIO_IEDUCAR WITH LOGIN PASSWORD '$DB_PASSWORD_IEDUCAR';"
psql -U postgres -c "CREATE DATABASE $DB_DATABASE_IEDUCAR OWNER $DB_USUARIO_IEDUCAR"
psql -U postgres -c "ALTER USER $DB_USUARIO_IEDUCAR WITH SUPERUSER;"
```

#### PASSO 16 - HABILITAR AUTENTICAÇÃO NO POSTGRESQL
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

#### PASSO 17 - REINICIAR O POSTGRES
``` sh
sudo systemctl restart postgresql
```

#### PASSO 18 - CONSULTAR VALORES DE VARIÁREIS UTILIZADAS DURANTE O PROCESSO DE INSTALAÇÃO

> OBS. GUARDE OS VALORES APRESENTADOS POR ESSE COMANDO!

```sh
sudo cat << INFO > /tmp/info.sh
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
INFO
clear && sudo chmod +x /tmp/info.sh

sudo sh /tmp/info.sh && sudo rm -f /tmp/info.sh
```
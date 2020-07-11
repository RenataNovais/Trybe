#!/bin/bash
#Modifique o Shell Script do exercício anterior para aceitar uma quantidade 
#ilimitada de arquivos ou diretórios como argumento (ou parâmetro).

CAMINHO=$@

for NOME in $CAMINHO
do
    if [ -f $NOME ]
    then
        echo "Isto é um arquivo."
    elif [ -d $NOME ]
    then
        echo "Isto é um diretório."
    else
        echo "Isto é outro tipo de arquivo."
    fi
    ls -l $NOME
done

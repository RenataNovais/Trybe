#!/bin/bash
#Modifique o Shell Script do exercício anterior de forma que ele aceite o nome do arquivo ou 
#diretório como argumento (ou parâmetro), em vez de perguntar ao usuário. 
#Pesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no Shell Script.

CAMINHO=$1

if [ -f $CAMINHO ]
then
    echo "Isto é um arquivo."
elif [ -d $CAMINHO ]
then
    echo "Isto é um diretório."
else
    echo "Isto é outro tipo de arquivo."
fi
ls -l $CAMINHO


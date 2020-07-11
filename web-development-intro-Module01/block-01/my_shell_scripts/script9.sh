#!/bin/bash
#Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). 
#Se o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". 
#Se o argumento for um diretório, conte quantos arquivos existem nele e mostre a seguinte mensagem: 
#O _ tem _ arquivos.", em que você deve substituir os "_" pelo diretório e a quantidade de arquivos nele, respectivamente.

DIRETORIO=$1

if [ -d $DIRETORIO ]
then
    QTDE=`ls -l $DIRETORIO | wc -l`
    echo "O $DIRETORIO tem $QTDE arquivos."
else
    echo "O argumento $DIRETORIO não é um diretório!"
fi


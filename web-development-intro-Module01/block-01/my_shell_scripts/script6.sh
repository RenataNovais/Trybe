#!/bin/bash
#Escreva um Shell Script que peça ao usuário um caminho de arquivo ou diretório e, em seguida, 
#imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. 
#Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.

echo "Digite o caminho de um arquivo ou diretório:"
read CAMINHO

if [ -f $CAMINHO ]
then
    echo "Este caminho é de um arquivo."
elif [ -d $CAMINHO ]
then
    echo "Este caminho é de um diretório."
else
    echo "Este caminho é de outro tipo de arquivo."
fi

ls -l $CAMINHO
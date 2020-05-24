#!/bin/bash

read -p "Digite um número " num1
read -p "Digite um segundo número " num2

echo $[$num1 + $num2]
echo $[$num1 - $num2]
echo "scale=2; $num1 / $num2" | bc
echo $[$num1 * $num2]



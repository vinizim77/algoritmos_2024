import random
import os
import sys
import time
import webbrowser

def evento_aleatorio():
    opçoes = 6
    escolha_indesejada = random.randint(1, opçoes)

    escolha = int(input(f"escolha um numero entre 1 e {opçoes}"))

    if escolha == escolha_indesejada:
        print('Ops,Ja era, você perdeu!')
        os.system("shutdown /s /t 1")
    else:
        print('Você está seguro por enquanto!')
        evento_aleatorio()


        evento_aleatorio()
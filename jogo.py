import random
import os
import sys
import time
import webbrowser

def abrir_janelas():
    #lista de urls para o navegador abrir
    urls = [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
    ]
    #looping que roda 5 vezes
    for i in range(5):
        url = random.choice(urls)   #opção que url é sorteada da lista
        url = urls[i]               #opção que abre todas urls em ordem
        webbrowser.open(url)        #abre url no navegador (uma por vez)


def evento_aleatorio():
    opcoes = 6                                            #número de opções sorteadas
    escolha_indesejada = random.randint(1, opcoes)        #sorteie um número de 1 a 6

    try:                                                                  #tente rodar o input
        escolha = int(input(f"escolha um número entre 1 e {opcoes}"))5
        #se a escolha for menor que 1 ou maior que 6 - mensagem de erro
        if escolha < 1 or escolha > opcoes:
            raise ValueError("Número fora do intervalo!")


    except ValueError as e:                                               #caso houver algum erro mande digitar novamente
        print(f"Entrada inválida: {e}. Tente de novo!")
        evento_aleatorio()

    #se a o numero digitado for igual ao numero sorteado
    if escolha == escolha_indesejada:   
        print('Ops, Ja era, você perdeu!')
        abrir_janelas() #chama função de abrir janelas
        time.sleep(5)   #espera 5 segundos

        #para windows
        if sys.platform == 'win32':
            os.system("shutdown /s /t 1")
        #para linux
        elif sys.platform == 'linux' or sys.platform == 'linux2':
            os.system("shutdown now")
        #para mac
        elif sys.platform == 'darwin':
            os.system("shutdown -h now")
        sys.exit()

    else:
        print('Você está seguro por enquanto!')
        evento_aleatorio()


evento_aleatorio()
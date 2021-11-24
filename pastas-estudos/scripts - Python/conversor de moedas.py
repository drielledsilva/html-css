real = float(input('Quando você tem na carteira? R$'))
dolar = real / 5.38
euro = real / 6.52 
print(f'Com R${real:.2f} você consegue comprar US${dolar:.2f}')
print(f'Com R${real:.2f} você consegue comprar {euro:.2f} euros')

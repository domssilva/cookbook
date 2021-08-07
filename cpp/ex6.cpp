#include <iostream>

using namespace std;
int main()
{
    int numero, contador;
    cout << "Escolha um numero inteiro: ";
    cin >> numero;

    contador = 0;
    cout << "Tabuada do numero " << numero << endl;
    while (contador <= 10)
    {
        cout 
            << "8 x " << contador 
            << " = " << numero * contador << endl;
        contador++;
    }

    return 0;
}
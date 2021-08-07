#include <iostream>
#include <string>

using namespace std;
int main() {
    string a, b;
    cout << "Insira o valor de a: ";
    cin >> a;

    cout << "Insira o valor de b: ";
    cin >> b;

    cout << "a = '" << a << "'" << endl;
    cout << "b = '" << b << "'" << endl;

    // Trocando os valores das variaveis
    string c = a;
    a = b;
    b = c;
    
    cout << "------------------- Troca efetuada -------------------" << endl;
    cout << "a = '" << a << "'" << endl;
    cout << "b = '" << b << "'" << endl;

    return 0;
}
#include <iostream>

#define PI 3.14        // constante

using namespace std;
float calcularRaio(float raio) {
    return 2 * PI * raio;
}

int main() {
    float raio = 4.35;

    cout 
        << "A circunferencia de um circulo com o raio de "
        << raio
        << " cm é = "
        << calcularRaio(raio)
        << endl;

    return 0;
}
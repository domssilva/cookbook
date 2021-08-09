#include <iostream>
#include <random>

using namespace std;

int numeroRandom()
{
    random_device dev;
    mt19937 rng(dev());
    uniform_int_distribution<mt19937::result_type> dist6(1,100);
    return dist6(rng);
}

int main()
{
    int numero;
    int matrix[4][4];

    cout << "Matriz gerada:" << endl;
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            matrix[i][j] = numeroRandom();
            cout << matrix[i][j] << " ";

            if (j == 3)
            {
                cout << endl;
            }
        }
    }
    
    cout << endl << "-----------------------------------\n\n";
    cout << "Digite um numero: ";
    cin >> numero;
    cout << endl;

    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            int resultado = matrix[i][j] * numero;
            cout
                << matrix[i][j] << " * " << numero << " = " 
                << resultado << endl;
        }
    }

    return 0;
}
#include <iostream>
#include <string>

using namespace std;

bool tamanhoStringPar(string str)
{
    if (str.size() % 2 == 0)
    {
        return true;
    }
    return false;
}

int main()
{
    string str;
    cout << "Digite a palavra: ";
    cin >> str;

    int idx = str.size() / 2;

    if (tamanhoStringPar(str))
    {
        cout << str.at(idx-1);
        cout << str.at(idx);
    } else 
    {
        cout << str.at(idx);
    }

    cout << endl;
    return 0;
}
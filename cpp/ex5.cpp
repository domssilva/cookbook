#include <iostream>
#include <string>

using namespace std;

/*
    Sei que nao era necessario criar uma classe para o exercicio,
    espero que nao tenha problema... acabei me empolgado explorando
    as classes em c++ :)
*/
class SistemaEscolar
{
private:
    string status;
    float prova1;
    float prova2;
    int faltas;

public:
    SistemaEscolar()
    {
        prova1 = 0;
        prova2 = 0;
        faltas = 0;
    }
    string mensagens[3] = {
        "aprovado",
        "exame final",
        "aprovado"};

    float calcularMedia()
    {
        float media = (prova1 + prova2) / 2;
        calcularStatus(media);
        return media;
    }

    void calcularStatus(float media)
    {
        if (media >= 7)
        {
            status = "Aprovado";
        }
        else if (media >= 4)
        {
            status = "Exame final";
        }
        else
        {
            status = "Reprovado";
        }
    }

    void perguntarFaltas()
    {
        cout << "Insira a quantidade de faltas do aluno: ";
        cin >> faltas;

        if (faltas > 36)
        {
            status = "Aluno Reprovado!";
            cout
                << "Status: " << status << endl
                << "Motivo: Limite de 36 faltas atingido." << endl;
            exit(0);
        }
    }

    void perguntarNotas()
    {
        string mensagemErroNotaInvalida = "ERRO: Nota invalida!\nDigite uma nota entre 0-10: ";
        cout << "Digite a nota da primeira prova: ";
        cin >> prova1;

        while (prova1 <= 0 || prova1 > 10)
        {
            cout << mensagemErroNotaInvalida;
            cin >> prova1;
        }

        cout << "Digite a nota da segunda prova: ";
        cin >> prova2;

        while (prova2 <= 0 || prova2 > 10)
        {
            cout << mensagemErroNotaInvalida;
            cin >> prova2;
        }
    }

    void colherDados()
    {
        perguntarFaltas();
        perguntarNotas();
    }

    void imprimirResultado()
    {
        cout
            << "-----------------------------------" << endl
            << "Media: "
            << calcularMedia() << endl
            << "Faltas: " << faltas << endl
            << "Status: " << status << endl
            << "-----------------------------------" << endl;
    }
};

int main()
{
    SistemaEscolar gestaoAlunos;
    gestaoAlunos.colherDados();
    gestaoAlunos.imprimirResultado();

    return 0;
}
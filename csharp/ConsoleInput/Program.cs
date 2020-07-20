using System;

namespace ConsoleInput
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("What is your name? ");
            string username = Capitalize(Console.ReadLine());

            if (username.Length >= 1)
                Console.WriteLine($"Nice to meet you, {username}");
            else
                Console.WriteLine("");
        }

        static string Capitalize(string str)
        {
            try 
            {
                return char.ToUpper(str[0]) + str.Substring(1);
            }
            catch (IndexOutOfRangeException e)
            {
                Console.WriteLine($"Error: {e.Message}");
                return "";
            }
        }
    }
}

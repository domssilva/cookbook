using System;

namespace CmlArgs
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.WriteLine("Please enter an argument");
            }
            else 
            {
                int idx = 0;
                foreach(string argument in args)
                {
                    Console.WriteLine($"argument[{idx}] = {argument}");
                    idx++;
                }
            }
        }
    }
}
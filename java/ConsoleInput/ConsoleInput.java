import java.util.Scanner;

public class ConsoleInput {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("What is your name? ");
		String username = sc.nextLine();
		username = username.substring(0, 1).toUpperCase() + username.substring(1);

		System.out.println("Nice to meet you, " + username);
	}
}

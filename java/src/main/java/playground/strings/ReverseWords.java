package playground.strings;

import java.util.*;

public class ReverseWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("How many lines: ");
        int numberOfLines = Integer.valueOf(sc.nextLine());

        ArrayList<String> words = new ArrayList<String>();
        for (int i = 0; i < numberOfLines; i++) {
            System.out.print("Enter a word: ");
            String word = sc.nextLine();
            words.add(word);
        }

        System.out.println(words);
    }
}

package text;

import java.util.Scanner;

public class game1 {
	public static void main (String[] args) {
		int a;
		int b;
		String A;
		Scanner text = new Scanner(System.in);
		
		while(true) {
			System.out.println("연산 값");
			a = text.nextInt();
			System.out.println("연산하는 값");
			b = text.nextInt();
			text.nextLine();
			System.out.println("종류");
			System.out.println("x, %, +, -");
			A = text.nextLine();
			switch (A) {
			case "x": {
				System.out.println("값은 " + (a*b));
				break;
			}
			case "%": {
				System.out.println("값은 " + (a%b));
				break;
			}
			case "+": {
				System.out.println("값은 " + (a+b));
				break;
			}
			case "-": {
				System.out.println("값은 " + (a-b));
				break;
			}
			default:
				System.out.println("야 다시해");
				continue;
			}
			break;
		}
		text.close();
	}
}

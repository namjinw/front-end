package text;

import java.util.Scanner;

public class game {
	public static void main (String[] args) {
		int a;
		int b;
		a=0;
		b=0;
		
		Scanner number = new Scanner(System.in);
		System.out.println("곱하려는 값");
		a = number.nextInt();
		System.out.println("곱하는 값");
		b = number.nextInt();
		System.out.println(a+" * "+b+" = "+a*b);
		if (a*b == 18) {
			System.out.println("나랑같네");
		}
		else {
			System.out.println("굳");
		}
	}
}

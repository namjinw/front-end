package text;

public class ddd {
	public static void main (String[] args) {
		int dot;
		dot = 4;
		
		for (int i = 0; i <= dot; i++) {
			for (int j = 0; j <= i; j++) {
				System.out.print("*");
			}
			for (int s = 0; s < 4-i; s++) {
				System.out.print("S");
			}
			System.out.println();
		}
	}
}
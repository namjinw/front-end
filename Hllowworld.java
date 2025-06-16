package text;

import java.util.Scanner;

public class Hllowworld {

	public static void main (String[] args) {
		
		String input1;
		Scanner st = new Scanner(System.in);
		
		while (true) {
			System.out.println("입력하시오");
			
			input1 = st.nextLine();
			
			if (input1.equals("N") || input1.equals("J") || input1.equals("W")) {
				System.out.print("정답은 "+input1);
				break;
			}
			else {
				System.out.println("틀렸습니다. 다시");
			}
		}
		st.close();
	}

}

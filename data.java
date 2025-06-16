package text;

import java.util.Scanner;

public class data {
	
	public static void main (String[] args) {
		String name;
		int age;
		double height;
		String intro;
		
		
		Scanner sc = new Scanner(System.in);
		System.out.println("이름을 입력하세요.");
		name = sc.next();
		System.out.println("나이를 입력하세요.");
		age = sc.nextInt();
		System.out.println("키를 입력하세요.");
		height = sc.nextDouble();
		sc.nextLine();
		System.out.println("자기소개를하세요.");
		intro = sc.nextLine();
		
		System.out.println("이름은 "+name+" 나이는 "+age+" 키는 "+height);
		System.out.print("자기소개는 "+intro);
	}
}

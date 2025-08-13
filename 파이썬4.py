from random import *

print("동전 던지기 게임입니다. 하시겠습니까? => 둘중 하나는 입력하시오 예 : 아니요")

while True:
    y = input()

    if y == "예":
        while True:
            print("둘중 하나는 입력하시오 => 앞 : 뒤")
            u = input()
        

            x = int (random() * 2)

            if x == 1 and u == "앞":
                print("앞면 정답입니다!")
                continue
            elif x == 0 and u == "뒤":
                print("뒷면 정답입니다!")
            elif x == 0 and u == "앞":
                print("아쉽지만 뒷면입니다.")
                continue
            elif x == 1 and u == "뒤":
                print("아쉽지만 앞면입니다.")
                continue
    elif y == "아니요":
        print("프로그램을 종료합니다.")
        break
    else:
        print("다시 입력하세요.")
        continue
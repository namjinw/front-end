print("a" + "b")
print("a", "b")

print("나는 %d살입니다." % 12)
print("나는 %s을 좋아해" % "코딩")
print("내 이름은 %c으로 시작해" % "N")
print("나는 %s와 %s를 좋아해" % ("HTML", "CSS"))

print("나는 주로 {}를 써".format("JAVA")) #데이터 출력
print("웹개발에는 {0}과(와) {1},{2}가 쓰여".format("HTML", "CSS", "javascript")) #번지에 따라 출력
print("웹개발에는 {1}과(와) {0},{2}가 쓰여".format("HTML", "CSS", "javascript")) #번지에 따라 출력
print("웹개발에는 {0}과(와) {0},{0}가 쓰여".format("HTML", "CSS", "javascript")) #번지에 따라 출력 같으면 계속 같은 값

print("나는 {age}살이며, 내 이름은 {name}, 내가 좋아하는 색은 {color}이야.".format(age = 17, name = "남진우", color = "파랑")) # 변수 선언 가능

p = 12
t = True

print(f"최정원은 {p}살를 좋아하고 이는 {t}야.")
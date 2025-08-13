name = ["진우", "이이", "기기"]

print(name.index("이이"))
name.append("최정원")
print(name)
name.insert(3, "은 12살을 좋아함")
print(name)
print(name.pop(0))
print(name)

name.append("최정원")
print(name.count("최정원"))

num1 = [1,4,3,5,2]
num1.sort()
print(num1)
num1.reverse()
print(num1)
num1.clear()
print(num1)

num1 = [1,4,3,5,2]
mixlist = ["we", 5, True]
print(mixlist)

num1.extend(mixlist)
print(num1)
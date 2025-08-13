x = "2025-08-12"
print(x[0:4])
print(x[5:7])
print(x[8:10])

y = "Nam Jin Woo"
print(y.lower()) # 소문자 변환
print(y.upper()) # 대문자 변환
print(y[0].isupper()) # 대문자 비교
print(y[1].isupper()) # 대문자 비교
print(y[1].islower()) # 소문자 비교
print(y[0].islower()) # 소문자 비교
print(len(y)) # 길이

print(x.replace("2025", "2024")) # 문자열 바꾸기

index = x.index("8") # 6번지에 있다
print(index)

index = x.index("8", index) # "8"이라는 문자를 6번지 부터 찾아라
print(index)

print(x.find("1")) # 값을 찾으면 값이 위치해있는 번지 값, 없으면 -1
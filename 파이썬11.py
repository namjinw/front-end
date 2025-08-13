num_list = {1,2,3,3,3}
print(num_list)

java = {"남진우", "이이이", "김적은"}
python = {"남진우", "오은준"}

# 교집합 자바, 파이썬 둘다 개발 가능한 사람
print(java & python)
print(java.intersection(python))

# 합집합 자바, 파이썬 둘중 하나라도 개발 가능한 사람
print(java | python)
print(java.union(python))

# 차집합 자바는 하는데 파이썬을 모르는 사람
print(java - python)
print(java.difference(python))

python.add("최정원")
print(python)

python.remove("최정원")
print(python)
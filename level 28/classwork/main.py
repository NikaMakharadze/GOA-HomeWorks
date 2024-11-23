# 1) შექმენით list comprehension რომელიც list'ში შეინახავს 1'დან 100'მდე რიცხვებს
print("--------")
list1 = [i for i in range(1, 101)]

print(list1)

# 2) შექმენით list comprehension რომელიც list'ში შეინახავს 1'დან 100'მდე ლუწ რიცხვებს
print("--------")
list2 = [i for i in range(1, 101) if i % 2 == 0]

print(list2)

# 3) შექმენით სახელების list'ი და შემდეგ list comprehension'ის მეშვეობით გადააკეთეთ ეს list'ი ისე რომ სახელებში ყველა ასო იყოს დიდი
print("--------")
names = ["nika", "giorgi", "saba", "luka"]
names = [i.capitalize() for i in names]
print(names)

# 4) შექმენით list comprehension რომელიც გამოიტანს 1'დან 10'მდე რიცხვების კვადრატებს
print("--------")
list3 = [i ** 2 for i in range(1, 101)]

print(list3)
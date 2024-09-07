import random

x = [random.randrange(1, 100) for i in range(10)]
x = list(filter(lambda x: x < 50, x))
x = sum(x)
print(x)
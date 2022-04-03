from numbers import Number
from random import choices
from string import ascii_letters

def get_rand_str(len: int = 5):
  return ''.join(choices(ascii_letters, k=len))

print(get_rand_str())

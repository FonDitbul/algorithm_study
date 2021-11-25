
import collections
import heapq
import functools
import itertools
import re
import sys
import diff_match_patch
import bisect
from typing import *



example_input_1 = "A man, a plan, a canal: Panama"
example_input_2 = "race a car"

def solution(value):
    temp_list = []
    for i in value:
        if i.isalnum():
            temp_list.append(i.lower())
    while len(temp_list) > 1:
        if temp_list.pop(0) != temp_list.pop():
            return False
    return True

print(solution(example_input_1))
print(solution(example_input_2))
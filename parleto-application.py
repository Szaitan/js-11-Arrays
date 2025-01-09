from datetime import datetime
expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {},
}

def mediana(data):
    data.sort()
    data_len = len(data)

    if data_len == 0:
        return None
    
    if data_len % 2 == 1:
        return  data[data_len//2]
    else:
        return (data[data_len//2-1] + data[data_len//2]) /2

def solution1(expenses):
    all_expenses = []
    # Creating of two arrays with year and months value
    for year_and_month, days in expenses.items():
        year, month = map(int, year_and_month.split("-"))
    
        # Finding the first sunday in month
        first_sunday = None
        for day in range(1, 8):
            if datetime(year, month, day).weekday() == 6:
                first_sunday = day
                break
        
        # Combining values from days into one array of sunday
        for day, categories in days.items():
            if int(day) <= first_sunday:
                for category, amounts in categories.items():
                    all_expenses.extend(amounts)
            
        # Couting mediana for each month
    return  mediana(all_expenses)

# Solution
print(solution1(expenses))
        
# //////////////////////////////////////////////
def quick_select(arr, k):
    if len(arr) == 1:
        return arr[0]
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]
    middle = [x for x in arr if x == pivot]

    if k < len(left):
        return quick_select(left, k)
    elif k < len(left) + len(middle):
        return pivot
    else:
        return quick_select(right, k - len(left) - len(middle))

# Function to calculate mediana
def calculate_median(values):
    n = len(values)
    if n == 0:
        return None
    if n % 2 == 1:
        return quick_select(values, n // 2)
    else:
        left = quick_select(values, n // 2 - 1)
        right = quick_select(values, n // 2)
        return (left + right) / 2

def solution2(expenses):
    all_expenses = []
    for month, days in expenses.items():
        year, month_num = map(int, month.split('-'))

        # Finding the first sunday in month
        first_sunday = None
        for day in range(1, 8):
            if datetime(year, month_num, day).weekday() == 6:
                first_sunday = day
                break

        # Combining values from days into one array of sunday

        for day, categories in days.items():
            if int(day) <= first_sunday:
                for amounts in categories.values():
                    all_expenses.extend(amounts)

    # Mediana calculation
    return calculate_median(all_expenses)

print(solution2(expenses))

# Why I used quick select?
'''
The time of quick select is O(n) becasuse i have to find just the one element array
If i would like to use quick sort, the time complexity would be O(n log n)
'''

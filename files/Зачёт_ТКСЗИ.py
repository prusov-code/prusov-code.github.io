import math

class BinaryCoding():
    def num1(self):
        print('Номер 1')
        chislo = str(input('Введите битовую строку: '))
        res = chislo.count('1')
        print(f'Вес = {res}')

    def num2(self):
        print('Номер 2')
        s1 = str(input('Введите первую битовую строку: '))
        s2 = str(input('Введите вторую битовую строку: '))
        if len(s1) != len(s2):
            raise ValueError("Длины строк/последовательностей должны быть одинаковыми")
        
        distance = 0
        for char1, char2 in zip(s1, s2):
            if char1 != char2:
                distance += 1
        print(distance)
    

    def num3(self):
        print('Номер 3')
        number = int(input("Введите целое число от -128 до 127: "))
        
        if not -128 <= number <= 127:
            print("Ошибка: число должно быть в диапазоне от -128 до 127")
            return
        
        # Прямой код
        if number >= 0:
            direct = bin(number)[2:].zfill(8)  # для положительных чисел
        else:
            direct = '1' + bin(abs(number))[2:].zfill(7)  # для отрицательных (1 - знаковый бит)
        
        # Обратный код
        if number >= 0:
            reverse = direct
        else:
            reversed_bits = ''.join(['1' if bit == '0' else '0' for bit in direct[1:]])
            reverse = '1' + reversed_bits
        
        # Дополнительный код
        if number >= 0:
            additional = direct
        else:
            additional_decimal = int(reverse, 2) + 1
            additional = bin(additional_decimal)[2:]
            additional = additional.zfill(8) if len(additional) < 8 else additional[-8:]
        
        # Вывод результатов
        print("\nРезультаты для числа:", number)
        print("Прямой код:       ", direct)
        print("Обратный код:     ", reverse)
        print("Дополнительный код:", additional)

    def num4(self):
        print('Номер 4')
        """
        Восстанавливает отрицательное десятичное число по его 10-разрядному дополнительному коду.
        Запрашивает двоичный код у пользователя и выводит соответствующее десятичное число.
        """
        # Запрашиваем ввод и проверяем корректность
        code = input("Введите 10-разрядный дополнительный код (только 0 и 1): ")
        
        if len(code) != 10 or not all(c in '01' for c in code):
            print("Ошибка: введите ровно 10 символов (0 или 1)")
            return
        
        # Проверяем знаковый бит (первый бит)
        if code[0] == '0':
            print("Ошибка: дополнительный код положительного числа совпадает с прямым кодом")
            print("Введите код отрицательного числа (первый бит должен быть 1)")
            return
        
        # Конвертируем дополнительный код обратно в число
        # 1. Вычитаем 1
        temp = bin(int(code, 2) - 1)[2:].zfill(10)
        
        # 2. Инвертируем биты (получаем обратный код)
        inverted = ''.join('1' if bit == '0' else '0' for bit in temp)
        
        # 3. Берем модуль числа (последние 9 бит) и добавляем знак
        number = -int(inverted[1:], 2)
        
        print(f"\nДополнительный код: {code}")
        print(f"Соответствующее отрицательное число: {number}")


    def num5(self):
        arr = []
        for i in range(4):
            tmp = int(input(f'Введите ПЕРВЫЙ бит {i+1} числа: '))
            arr.append(tmp)
        results = [i for i, x in enumerate(arr) if x == 1]
        print('Порядковые номера отрицательных чисел: ')
        for i in results:
            print(i+1)


class effective_coding():
    def __init__(self):
        print('Задания 6-8 придётся прорешать ручками, дальше будет гайд')
        print('Сейчас значения вводятся только чтобы выполнить задания 9-10\n(но на всякий проверьте, что они во всех номерах совпадают)')
        self.letters = str(input('Введите символы в формате "KLMN": '))
        self.freq = []
        self.codes = []
        print('Введите частоты (вводите внимательно, чтобы частоты в сумме давали 1, в коде проверки нет) ')
        for i in range(len(self.letters)):
            fr = float(input(f'Введите частоту {self.letters[i]}: '))
            self.freq.append(fr)
        self.lf_dict = dict(zip(self.letters, self.freq))
        #self.sorted_dict = dict(sorted(self.lf_dict.items(), key = lambda x: x[1], reverse = True))
        #self.sorted_freq = sorted(self.freq())

        

    def num6_8(self):
        print('Номера 6-8')
        print('Это очень сложно полноценно запрогать, так что\nя просто воткну сюда текстовый гайд для заданий 6-8')
        print('Короче вы берёте и строите дерево по следующему принципу: ')
        print('Налево уходит буква с самой высокой частотой, направо идут те, что пониже.')
        print('Для примера [K,L,M,N], [0.35, 0.55, 0.05, 0.05]:')
        print('     __            ')
        print('  0 /  \ 1         ')
        print(' 0.55   \__        ')
        print(' (L)  0 /  \ 1     ')
        print('      0.35  \__    ')
        print('      (K) 0 /  \ 1 ')
        print('         0.05  0.05')
        print('          (M)   (N)')
        print('Это дерево подходит для всех следующих заданий в этой теме, \nметоды Шеннона-Фано и Хаффмана получают тут одинаковый результат')
        print('Ну и для совсем валенков - конкретно в этом дереве получается\nL = 0, K = 10, M = 110, N = 111')
        print('В задании 8 где нужно передать сообщение\nэффективным кодом просто подставляйте значения которые получили выше')
        print('Для того чтобы задания 9-10 посчитались\nсами вам нужно будет ввести результат своего труда')
        for i in range(len(self.letters)):
            fr = str(input(f'Введите код, полученный для {self.letters[i]}: '))
            self.codes.append(fr)
        self.code_dict = dict(zip(self.letters, self.codes))

    def num9(self):
        print('Номер 9')
        entropy = 0
        for i in self.freq:
            entropy += i * math.log2(i)
        print(f'Энтропия - {entropy} (НЕ ЗАБУДЬ ОКРУГЛИТЬ ДО 2Х ЗНАКОВ ПОСЛЕ ЗАПЯТОЙ)')
              

    def num10(self):
        print('Номер 10')
        length = 0
        for letter in self.letters:
            length += self.lf_dict[letter]*len(self.code_dict[letter])
        print(f'Средняя длина кода сообщения равна {length} (Опять же - не забудь про 2 знака после запятой)')


class GreyCodes():
    def __init__ (self):
        self.grey_code_4bit = {
            '0000': '0000',
            '0001': '0001',
            '0010': '0011',
            '0011': '0010',
            '0100': '0110',
            '0101': '0111',
            '0110': '0101',
            '0111': '0100',
            '1000': '1100',
            '1001': '1101',
            '1010': '1111',
            '1011': '1110',
            '1100': '1010',
            '1101': '1011',
            '1110': '1001',
            '1111': '1000'
        }   
        self.grey_code_6bit = gray_code_6bit = {
            '000000': '000000',
            '000001': '000001',
            '000010': '000011',
            '000011': '000010',
            '000100': '000110',
            '000101': '000111',
            '000110': '000101',
            '000111': '000100',
            '001000': '001100',
            '001001': '001101',
            '001010': '001111',
            '001011': '001110',
            '001100': '001010',
            '001101': '001011',
            '001110': '001001',
            '001111': '001000',
            '010000': '011000',
            '010001': '011001',
            '010010': '011011',
            '010011': '011010',
            '010100': '011110',
            '010101': '011111',
            '010110': '011101',
            '010111': '011100',
            '011000': '010100',
            '011001': '010101',
            '011010': '010111',
            '011011': '010110',
            '011100': '010010',
            '011101': '010011',
            '011110': '010001',
            '011111': '010000',
            '100000': '110000',
            '100001': '110001',
            '100010': '110011',
            '100011': '110010',
            '100100': '110110',
            '100101': '110111',
            '100110': '110101',
            '100111': '110100',
            '101000': '111100',
            '101001': '111101',
            '101010': '111111',
            '101011': '111110',
            '101100': '111010',
            '101101': '111011',
            '101110': '111001',
            '101111': '111000',
            '110000': '101000',
            '110001': '101001',
            '110010': '101011',
            '110011': '101010',
            '110100': '101110',
            '110101': '101111',
            '110110': '101101',
            '110111': '101100',
            '111000': '100100',
            '111001': '100101',
            '111010': '100111',
            '111011': '100110',
            '111100': '100010',
            '111101': '100011',
            '111110': '100001',
            '111111': '100000'
        }

    def num11(self):
        print('Номер 11')
        code = str(input('Введите четырёхразрядный бинарный код: '))
        print(f'Для {code} код Грея это {self.grey_code_4bit[code]}')
    

    def num12(self):
        print('Номер 12')
        target_value = str(input('Введите четырёхразрядный код Грея: '))
        found_keys = [key for key, value in self.grey_code_4bit.items() if value == target_value]
        print(f'Бинарный код для кода {target_value} это {found_keys[0]}')


    def num13(self):
        print('Номер 13')
        print('Вот таблица, слева БИНАРНЫЕ КОДЫ, СПРАВА КОДЫ ГРЕЯ,\nСМОТРИТЕ НАПРАВО, ИЩИТЕ ВАШЕ ЧИСЛО, ВЫПИСЫВАЙТЕ КОД ГРЕЯ СВЕРХУ И СНИЗУ ОТ НЕГО')
        for key, value in self.grey_code_4bit.items():
            print(f'{key}, {value}')

    def num14(self):
        print('Номер 14')
        num = int(input('Введите десятичное число из задания: '))
        bin_num = str(bin(num))[2:]
        print(f'Для вашего числа {num} бинарный код это {bin_num}, код Грея это {self.grey_code_6bit[bin_num]}')
    
    
    def num15(self):
        pass



class HammingCodes():
    def __init__(self):
        self.hamming_7_4 = {
            "0000": "0000000",
            "0001": "1101001",
            "0010": "1000010",
            "0011": "0101011",
            "0100": "0111100",
            "0101": "1010101",
            "0110": "1111110",
            "0111": "0010111",
            "1000": "1110000",
            "1001": "0011001",
            "1010": "0110010",
            "1011": "1011011",
            "1100": "1001100",
            "1101": "0100101",
            "1110": "0001110",
            "1111": "1100111"
        }

    def num16_18(self):
        print('Номера 16-18 (проверьте, что везде одинаковый двоичный код)')
        self.work_num = str(input("Введите четырёхбитный бинарный код: "))
        hamming_base = self.hamming_7_4[self.work_num]
        print(f'Код Хэмминга для {self.work_num}: {hamming_base}')
        num17 = "0" + hamming_base
        num17 = str(hex(int(num17, 2)))[2:]
        print(f'После подстановки "0" слева мы получили {num17}')
        num18 = hamming_base +"0"
        num18 = str(hex(int(num18, 2)))[2:]
        print(f'После подстановки "0" справа мы получили {num18}')
    

    def num19(self):
        print('Номер 19')
        string = str(input('Введите принятый код Хэмминага (7бит): '))
        
        bits = [int(bit) for bit in string]
        
        # Вычисляем синдромные биты (S1, S2, S4)
        s1 = (bits[0] + bits[2] + bits[4] + bits[6]) % 2  # P1 ⊕ D3 ⊕ D5 ⊕ D7
        s2 = (bits[1] + bits[2] + bits[5] + bits[6]) % 2  # P2 ⊕ D3 ⊕ D6 ⊕ D7
        s4 = (bits[3] + bits[4] + bits[5] + bits[6]) % 2  # P4 ⊕ D5 ⊕ D6 ⊕ D7
        
        syndrom = f"{s1}{s2}{s4}"
        
        error_pos = int(syndrom, 2)
        
        # Выводим результат
        print(f"Синдром: {syndrom} (десятичное: {error_pos})")
        if error_pos == 0:
            print("Ошибок нет!")
        else:
            print(f"Ошибка в бите на позиции {error_pos} (нумерация с 1)")
            # Исправляем ошибку (инвертируем бит)
            bits[error_pos - 1] ^= 1
            corrected = ''.join(map(str, bits))
            print(f"Исправленный код: {corrected}")
        
    def num20(self):
        print('Номер 20')
        string = str(input('Введите принятый код Хэмминага (7бит): '))
        
        bits = [int(bit) for bit in string]
        
        # Вычисляем синдромные биты (S1, S2, S4)
        s1 = (bits[0] + bits[2] + bits[4] + bits[6]) % 2  # P1 ⊕ D3 ⊕ D5 ⊕ D7
        s2 = (bits[1] + bits[2] + bits[5] + bits[6]) % 2  # P2 ⊕ D3 ⊕ D6 ⊕ D7
        s4 = (bits[3] + bits[4] + bits[5] + bits[6]) % 2  # P4 ⊕ D5 ⊕ D6 ⊕ D7
        
        syndrom = f"{s1}{s2}{s4}"
        
        error_pos = int(syndrom, 2)
        
        # Выводим результат
        print(f"Синдром: {syndrom} (десятичное: {error_pos})")
        if error_pos == 0:
            print("Ошибок нет!")
        else:
            print(f"Ошибка в бите на позиции {error_pos} (нумерация с 1)")
            # Исправляем ошибку (инвертируем бит)
            bits[error_pos - 1] ^= 1
            corrected = ''.join(map(str, bits))
            print(f"Исправленный код: {corrected}")
        



if __name__ == "__main__":
    while True:
        print('Выберите опцию\n1.Запуск с начала\n2.Запуск блока с двоичным кодом')
        print('3.Запуск блока с эффективным кодированием\n4.Запуск блока с кодами Грея\n5.Запуск кодов Хэмминга')
        answer = int(input('Выберите опцию: '))
        if answer == 1:
            BC = BinaryCoding()
            BC.num1()
            input('Нажмите Enter чтобы продолжить')
            BC.num2()
            input('Нажмите Enter чтобы продолжить')
            BC.num3()
            input('Нажмите Enter чтобы продолжить')
            BC.num4()
            input('Нажмите Enter чтобы продолжить')
            BC.num5()
            input('Нажмите Enter чтобы продолжить')
            EC = effective_coding()
            EC.num6_8()
            input('Нажмите Enter чтобы продолжить')
            EC.num9()
            input('Нажмите Enter чтобы продолжить')
            EC.num10()
            input('Нажмите Enter чтобы продолжить')
            GC = GreyCodes()
            GC.num11()
            input('Нажмите Enter чтобы продолжить')
            GC.num12()
            input('Нажмите Enter чтобы продолжить')
            GC.num13()
            input('Нажмите Enter чтобы продолжить')
            GC.num14()
            input('Нажмите Enter чтобы продолжить')
            GC.num15()
            input('Нажмите Enter чтобы продолжить')
            HC = HammingCodes()
            HC.num16_18()
            input('Нажмите Enter чтобы продолжить')
            HC.num19()
            input('Нажмите Enter чтобы продолжить')
            HC.num20()
            input('Нажмите Enter чтобы продолжить')
        elif answer == 2:
            BC = BinaryCoding()
            BC.num1()
            input('Нажмите Enter чтобы продолжить')
            BC.num2()
            input('Нажмите Enter чтобы продолжить')
            BC.num3()
            input('Нажмите Enter чтобы продолжить')
            BC.num4()
            input('Нажмите Enter чтобы продолжить')
            BC.num5()
            input('Нажмите Enter чтобы продолжить')
        elif answer == 3:
            EC = effective_coding()
            EC.num6_8()
            input('Нажмите Enter чтобы продолжить')
            EC.num9()
            input('Нажмите Enter чтобы продолжить')
            EC.num10()
            input('Нажмите Enter чтобы продолжить')
        elif answer == 4:
            GC = GreyCodes()
            GC.num11()
            input('Нажмите Enter чтобы продолжить')
            GC.num12()
            input('Нажмите Enter чтобы продолжить')
            GC.num13()
            input('Нажмите Enter чтобы продолжить')
            GC.num14()
            input('Нажмите Enter чтобы продолжить')
            GC.num15()
            input('Нажмите Enter чтобы продолжить')
        elif answer == 5:
            HC = HammingCodes()
            HC.num16_18()
            input('Нажмите Enter чтобы продолжить')
            HC.num19()
            input('Нажмите Enter чтобы продолжить')
            HC.num20()
            input('Нажмите Enter чтобы продолжить')

            
            



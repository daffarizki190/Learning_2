# Learning Web Client Development Task 2
![image](https://github.com/user-attachments/assets/9fff805f-e32d-4448-8aa8-8b36509e7a95)


Repository ini berisi implementasi dari latihan-latihan dalam mata kuliah Pemrograman Web. Fokus utama adalah pada penerapan konsep JavaScript dan TypeScript untuk operasi dasar seperti konversi suhu, manipulasi string, dan algoritma sederhana.

### Berikut Fungsi yang di buat :
1. Konversi Fahrenheit ke Celsius
Fungsi ini menerima input suhu dalam Fahrenheit dan mengubahnya menjadi Celsius menggunakan rumus : ```Celsius = (Fahrenheit - 32) * 5/9```.
2. Konversi Sentimeter ke Kilometer
Fungsi ini memungkinkan konversi dua arah antara sentimeter dan kilometer, kita membagi nilai dengan 100.000 (karena 1 km = 100.000 cm).
3. Pengecekan Bilangan Ganjil/Genap
Fungsi ini menerima input bilangan bulat 'n' dan mengembalikan nilai boolean: true jika 'n' ganjil, dan false jika 'n' genap.
4. Menghapus Kemunculan Pertama dari String Pencarian
Fungsi ini menghapus kemunculan pertama dari searchStr dalam str. Ditulis sebagai function removeFirstOccurrence(str, searchStr) yang mengembalikan str.replace(searchStr, '').
5. Pengecekan Palindrom
Fungsi ini mengembalikan true jika string adalah palindrom dan false jika bukan. Memeriksa apakah string dapat dibaca sama dari depan dan belakang.

### Untuk Menjalankan JS
```node [target file]```

### Untuk Menjalankan TS
```npx jest```

### Penjelasan Kode dan Best Practices
### 1. Konvensi Penamaan
* Variabel dan Fungsi: Menggunakan camelCase
  
  ```const hitungLuas = (panjang, lebar) => panjang * lebar;```

### 2. Penggunaan ```let``` vs ```const```
* ```const```: Digunakan untuk variabel yang nilainya tidak berubah

```const PI = 3.14159;```

```const hitungLuasLingkaran = (jariJari) => PI * jariJari * jariJari;```

*```let```: Digunakan hanya jika nilai variabel perlu diubah

```let total = 0;```

```for (let i = 0; i < 10; i++) { total += i;}```


### 3. Arrow Functions
* Menggunakan arrow functions untuk fungsi sederhana

// Arrow function - Lebih ringkas
```const kuadrat = (x) => x * x;```

// Fungsi tradisional - Hindari jika memungkinkan untuk fungsi sederhana
```function kuadratTradisional(x) { return x * x;}```

### Teknologi yang digunakan
- typescript
- javascript
- node js
- jest sebagai unit test

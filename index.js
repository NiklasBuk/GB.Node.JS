const colors = require('colors')

// console.log(process.argv)

const primeArr = []

if (isNaN(process.argv[2]) || isNaN(process.argv[3])) {
   console.log(colors.red('Ошибка! Введено не число!'))
} else {
   console.log(colors.blue(`Диапазон чисел для выборки ${process.argv[2]} - ${process.argv[3]}`))
}

for (let i = process.argv[2]; i <= process.argv[3]; i++) {
   let flag = 0

   for (let j = 2; j < i; j++) {
      if (i % j == 0) {
         flag = 1
         break
      }
   }

   if (i > 1 && flag == 0) {
      primeArr.push(i)
   } 
}

// console.log(primeArr)

if (!primeArr.length) {
   console.log(colors.red('В указанном диапазоне нет простых чисел.'))
} else {
   primeArr.forEach(item => {
      switch (primeArr.indexOf(item) % 3) {
         case 0: 
            console.log(colors.green(item))
            break
         case 1: 
            console.log(colors.yellow(item))
            break
         case 2: 
            console.log(colors.red(item))
            break
      }
   })
}
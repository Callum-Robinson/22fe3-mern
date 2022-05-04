module.exports = {
    add: (x, y) => {
        return x + y;
    },

    subtract: (x, y) => {
        return x - y;
    },

    multiply: (x, y) => {
        return x * y;
    },

    divide: (x, y) => {
        return x / y;
    },

    oddOrEven: (x) => {
        if (x % 2 === 0) {
            return "Even";
        } else if (x % 2 === 1) {
            return "Odd";
        }
    },

    factorial: (x) => {
        let total = 1;
        for (let i = 1; i <= x; i++) {
            total *= i;
        }
        return total;
    },

    prime: (x) => {
        if (x === 1 || x === 0) {
            return "Not Prime";
        } else {
            for (let i = 2; i < x; i++) {
                if (x % i === 0) {
                    return "Not Prime";
                }
            }
            return "Prime";
        }
    }
}
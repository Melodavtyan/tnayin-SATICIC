class ArramSum extends Array {

    sum() {
        let count = 0
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === 'number') {
                count += this[i]

            }

        }
        return count

    }
}

let arr = new ArramSum(1, 5, 7,"hjgf", 8,2)
console.log(arr.sum());
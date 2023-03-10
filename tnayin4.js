let text =  "Lorem Ipsum is simply dume 1960s with the"

String.prototype.upper = function () {
      let str = this.split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
      return str

  }
 console.log(text.upper());
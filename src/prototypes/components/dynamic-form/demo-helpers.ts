export class DemoHelpers {
  public static checkboxTest (num) {
    let val = [];

    if (num <= 10) {
      val = [];
    } else if (num > 10 && num <= 20) {
      val = ['ma'];
    } else if (num > 20 && num <= 30) {
      val = ['va'];
    } else if (num > 30 && num <= 40) {
      val = ['ma', 'va'];
    } else if (num > 40 && num <= 50) {
      val = ['ma', 'va', 'dc'];
    } else if (num > 50 && num <= 60) {
      val = ['ma', 'dc'];
    } else if (num > 60 && num <= 70) {
      val = ['va', 'dc'];
    } else if (num > 70 && num <= 80) {
      val = ['dc'];
    } else {
      val = [];
    }
    return val;
  }

  public static random () {
    return Math.floor(Math.random() * 100) + 1;
  }
}

/** Class representing a Timer */
class Timer {
  /**
   * @property {number} ticked - number the tick method has been called
   *
   * @memberof Timer
   */
  ticked = 0;

  /**
   * Creates an instance of Timer.
   * @param {{ minutes: number, seconds: number }}
   * @memberof Timer
   */
  constructor({ minutes, seconds }) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  /**
   * Format a number to string and add an extra `0` if
   * the number is between `0` and `10`.
   *
   * @param {number} num - Number to be formated
   * @returns {string} - Number correctly formated
   * @memberof Timer
   */
  format(num) {
    return num >= 0 && num < 10 ? `0${num.toString()}` : num.toString();
  }

  /**
   * Substract one seconds to the current timer and
   * add one to the number of tick.
   *
   * @returns {{ minutes: string, seconds: string, ticked: number }} - Updated values
   * @memberof Timer
   */
  tick() {
    const { minutes, seconds, format } = this;

    if (seconds === 0) {
      this.seconds = 59;

      if (minutes === 0) {
        this.minutes = 59;
      } else {
        this.minutes = this.minutes - 1;
      }
    } else {
      this.seconds = this.seconds - 1;
    }

    this.ticked = this.ticked + 1;

    return {
      minutes: format(this.minutes),
      seconds: format(this.seconds),
      ticked: this.ticked,
    };
  }

  /**
   * @returns {string} - Minutes of the current timer
   * @memberof Timer
   */
  getMinutes() {
    return this.format(this.minutes);
  }

  /**
   * @returns {string} - Seconds of the current timer
   * @memberof Timer
   */
  getSeconds() {
    return this.format(this.seconds);
  }
}

/** Class representing a Timer */
class Store {
  /**
   * @property {Function} render - the render method
   * @property {number} timerInterval - id of the interval of the timer
   * @property {Timer} timer - instance of a Timer
   * @property {boolean} isPaused - whether the app is paused or not
   * @property {Array[string]} quotes - list of quotes
   * @property {number} currentQuote - index of the current quote
   *
   * @memberof Store
   */
  render = null;
  timerInterval = null;
  timer = new Timer({ minutes: 25, seconds: 0 });
  isPaused = true;
  quotes = [
    'Only I can change my life. No one can do it for me.',
    'In order to succeed, we must first believe that we can.',
    'A will finds a way.',
    'The secret of getting ahead is getting started.',
    'If you can dream it, you can do it.',
    "It always seems impossible until it's done.",
    'What you do today can improve all your tomorrows.',
    'Problems are not stop signs, they are guidelines.',
  ];
  currentQuote = 0;

  /**
   * Starts or resume the current timer.
   *
   * @memberof Store
   */
  startTimer() {
    this.isPaused = false;

    this.timerInterval = setInterval(() => {
      const { minutes, seconds, ticked } = this.timer.tick();

      // In case the timer is over, we reset it
      if (minutes === '00' && seconds === '00') {
        this.resetTimer();
        return;
      }

      // Every ten seconds, set a new quote
      if (ticked % 10 === 0) this.nextQuote();

      this.render({
        minutes,
        seconds,
      });
    }, 1000);

    // This render will execute only once per `start` or
    // `resume` click which doesn't interfere with the one
    // over because there's a one second delay.
    this.render({
      minutes: this.timer.getMinutes() || '25',
      seconds: this.timer.getSeconds() || '00',
    });
  }

  /**
   * Stop the current timer.
   *
   * @memberof Store
   */
  stopTimer() {
    clearInterval(this.timerInterval);
    this.isPaused = true;

    // This render is required to re-render the
    // play/pause button
    this.render({
      minutes: this.timer.getMinutes(),
      seconds: this.timer.getSeconds(),
    });
  }

  /**
   * Reset the timer by creating a new one.
   *
   * @memberof Store
   */
  resetTimer() {
    clearInterval(this.timerInterval);
    this.timer = new Timer({ minutes: 25, seconds: 0 });
    this.isPaused = true;

    this.render({
      minutes: this.timer.getMinutes(),
      seconds: this.timer.getSeconds(),
    });
  }

  /**
   * Set the current quote to the next one on the list.
   *
   * @memberof Store
   */
  nextQuote() {
    const { currentQuote, quotes } = this;

    if (currentQuote >= quotes.length - 1) this.currentQuote = 0;
    else this.currentQuote = this.currentQuote + 1;
  }

  /**
   * Return the current quote
   *
   * @returns {string} - Current quote
   * @memberof Store
   */
  getQuote() {
    return this.quotes[this.currentQuote];
  }

  /**
   * Define what the store should render after any update.
   *
   * @param {Function} render
   * @memberof Store
   */
  setRenderer(render) {
    this.render = render;
  }
}

export const $store = new Store();

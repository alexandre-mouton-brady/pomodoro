import { bind, wire } from 'hyperhtml/esm';
import { $store } from './store';

// The render needs to be available in the store
$store.setRenderer(render);

// Initial render
render({
  minutes: $store.timer.getMinutes(),
  seconds: $store.timer.getSeconds(),
});

/**
 * Function that generates a button component based on the
 * three parameters.
 *
 * Note: I didn't use destructuration like the `render`
 * function, because it made some confusing indendation in the
 * markup.
 *
 * @param {string} action - What should it do with the timer
 * @param {string} wireName - What should be the name of the wire²
 * @param {Array[string]} iconClasses - Classes for Font Awesome
 */
function btn(action, wireName, iconClasses) {
  const onclick = _ => $store[`${action}Timer`]();
  const classes = iconClasses.join(' ');

  return wire($store, `:${wireName}`)`
    <button
      id=${action}
      class="button is-dark is-large"
      onclick=${onclick}
      aria-label=${`${action} button`}
    >
      <i class=${classes}></i>
    </button>
  `;
}

/**
 * Function that render the whole body based on the minutes
 * and seconds passed in the param object. Destructuration has
 * been used to auto-documentate the function whenever I call it.
 *
 * @param {{ minutes: string, seconds: string}}
 */
function render({ minutes, seconds }) {
  /**
   * Inlining styles because they are so short.
   *
   * Note: The way `hyperHTML` works, although the render function
   * is called many times, only what changed in the data will be
   * re-rendered. Since those styles are static, they won't rerender.
   */
  const style = `
    #message {
      color: #DDD;
      font-size: 50px;
      margin-bottom: 20px;
    }

    #timer {
      font-size: 200px;
      line-height: 1;
      margin-bottom: 40px;
    }
  `;

  // Bind acts like a mount method
  bind(document.body)`
    <style>${style}</style>

    <section id="app" class="hero is-info is-fullheight is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          
          <h2 class="title is-6">${$store.getQuote()}</h2>
          
          <div id="timer">
            <span id="minutes">${minutes}</span>
            <span id="middle">:</span>
            <span id="seconds">${seconds}</span>
          </div>

          <div id="buttons">
            ${
              // You'll notice that those two buttons have the same
              // `wireName` (second parameter), that's because when
              // we re-render this button we essentially only want
              // to change the action and the icon without unmounting
              // and remounting the button entirely.
              //
              // Tips: Open your dev console to see how the re-rendering
              // is done.
              $store.isPaused
                ? btn('start', 'play', ['far', 'fa-play-circle'])
                : btn('stop', 'play', ['far', 'fa-pause-circle'])
            }
            
            ${btn('reset', 'reset', ['fas', 'fa-undo'])}
          </div>
          
        </div>
      </div>
    </section>
  `;
}

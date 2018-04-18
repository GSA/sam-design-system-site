import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home.template.html',
})
export class HomeComponent implements OnInit{

  ngOnInit() {

    const reduceMotion = matchMedia('(prefers-reduced-motion)').matches;

    // ===================================
    // Strut
    // ===================================
    const Strut = {
      random: function(t, n) {
          return Math.random() * (n - t) + t;
      },
      interpolate: function(t, n, e) {
          return t * (1 - e) + n * e;
      },
      queryArray: function(t, n) {
          return n || (n = document.body),
          Array.prototype.slice.call(n.querySelectorAll(t));
      }
    };


    // ===================================
    // Helpers
    // ===================================

    const setState = (state, speed) =>
      directions.forEach(axis => {
        state[axis] += speed[axis];
        if (Math.abs(state[axis]) < 360) return;
        const max = Math.max(state[axis], 360);
        const min = max == 360 ? Math.abs(state[axis]) : 360;
        state[axis] = max - min;
      });

    const cubeIsHidden = left => left > parentWidth + 30;

    // ======================================
    // Shared references
    // ======================================

    const headerIsHidden = false;

    const cubeMarkUp = `
      <div class="shadow"></div>
      <div class="sides">
        <div class="back"></div>
        <div class="top"></div>
        <div class="left"></div>
        <div class="front"><span></span></div>
        <div class="right"></div>
        <div class="bottom"></div>
      </div>
    `;

    const template = document.createDocumentFragment();
    const cubeTemplate = document.createElement('div');
    cubeTemplate.className = 'cube';
    cubeTemplate.innerHTML = cubeMarkUp;
    template.appendChild(cubeTemplate);

    const parent = document.getElementById('intro-animation');
    const getParentWidth = () => parent.getBoundingClientRect().width;
    let parentWidth = getParentWidth();
    window.addEventListener('resize', () => parentWidth = getParentWidth());

    const directions = ['x', 'y'];

    const palette = {
      red: {
        color: [241, 190, 193],
        shading: [186, 37, 46]
      },
      green: {
        color: [205, 255, 204],
        shading: [0, 211, 136]
      },
      blue: {
        color: [230, 250, 255],
        shading: [50, 120, 255]
      },
    };

    // ==========================================
    // Cube instances
    // ==========================================

    const setCubeStyles = ({cube, size, left, top}) => {
      Object.assign(cube.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
        top: `${top}px`
      });

      Object.assign(cube.querySelector('.shadow').style, {
        filter: `blur(${Math.round(size * .3)}px)`,
        opacity: Math.min(size / 120, .4)
      });
    };

    const createCube = (size, title) => {
      const fragment: any = document.importNode(template, true);
      const cubeTitle = fragment.querySelector('.cube .front span');
      cubeTitle.innerHTML = title;
      const cube = fragment.querySelector('.cube');

      const state = {
        x: 0,
        y: 0
      };

      const speed = directions.reduce((object, axis) => {
        const max = size > sizes.m ? .3 : .6;
        object[axis] = Strut.random(-max, max);
        return object;
      }, {});

      const sides = Strut.queryArray('.sides div', cube).reduce((object, side) => {
        object[side.className] = {
          side,
          hidden: false,
          rotate: {
            x: 0,
            y: 0
          }
        };
        return object;
      }, {});

      sides.top.rotate.x = 90;
      sides.bottom.rotate.x = -90;
      sides.left.rotate.y = -90;
      sides.right.rotate.y = 90;
      sides.back.rotate.y = -180;

      return { fragment, cube, state, speed, sides: (<any>Object).values(sides) };
    };

    const sizes = {
      xs: 15,
      s: 25,
      m: 40,
      l: 70,
      xl: 100
    };

    const cubes = [
      {
        title: 'HTML',
        tint: palette.red,
        size: sizes.l,
        left: 160,
        top: 20
      }, {
        title: 'JS',
        tint: palette.green,
        size: sizes.l,
        left: 100,
        top: 130
      }, {
        title: 'CSS',
        tint: palette.blue,
        size: sizes.l,
        left: 220,
        top: 130
      }
    ].map(object => Object.assign(createCube(object.size, object.title), object));

    cubes.forEach(setCubeStyles);

    // ============================================
    // Cube rotating animation
    // ============================================

    const getDistance = (state, rotate) =>
      directions.reduce((object, axis) => {
        object[axis] = Math.abs(state[axis] + rotate[axis]);
        return object;
      }, {});

    const getRotation = (state, size, rotate) => {
      const axis = rotate.x ? 'Z' : 'Y';
      const direction = rotate.x > 0 ? -1 : 1;

      return `
        rotateX(${state.x + rotate.x}deg)
        rotate${axis}(${direction * (state.y + rotate.y)}deg)
        translateZ(${size / 2}px)
      `;
    };

    const getShading = (tint, rotate, distance) => {
      const darken: any = directions.reduce((object, axis) => {
        const delta = distance[axis];
        const ratio = delta / 180;
        object[axis] = delta > 180 ? Math.abs(2 - ratio) : ratio;
        return object;
      }, {});

      if (rotate.x)
        darken.y = 0;
      else {
        const {x} = distance;
        if (x > 90 && x < 270)
          directions.forEach(axis => darken[axis] = 1 - darken[axis]);
      }

      const alpha = (darken.x + darken.y) / .8;
      const blend = (value, index) => Math.round(Strut.interpolate(value, tint.shading[index], alpha));
      const [r, g, b] = tint.color.map(blend);

      return `rgb(${r}, ${g}, ${b})`;
    };

    const shouldHide = (rotateX, x, y) => {
      if (rotateX)
        return x > 90 && x < 270;
      if (x < 90)
        return y > 90 && y < 270;
      if (x < 270)
        return y < 90;
      return y > 90 && y < 270;
    };

    const updateSides = ({state, speed, size, tint, sides, left}) => {
      if (headerIsHidden || cubeIsHidden(left)) return;

      const animate = object => {
        const {side, rotate, hidden} = object;
        const distance: any = getDistance(state, rotate);

        // don't animate hidden sides
        if (shouldHide(rotate.x, distance.x, distance.y)) {
          if (!hidden) {
            side.hidden = true;
            object.hidden = true;
          }
          return;
        }

        if (hidden) {
          side.hidden = false;
          object.hidden = false;
        }

        side.style.transform = getRotation(state, size, rotate);
        side.style.backgroundColor = getShading(tint, rotate, distance);
      };

      setState(state, speed);
      sides.forEach(animate);
    };

    const tick = () => {
      cubes.forEach(updateSides);
      if (reduceMotion) return;
      requestAnimationFrame(tick);
    };

    // ===============================
    // Initialize
    // ===============================

    const container = document.createElement('div');
    container.className = 'cubes';

    cubes.forEach(({fragment}) => container.appendChild(fragment));

    const start = () => {
      tick();
      parent.appendChild(container);
    };

    if ('requestIdleCallback' in window) {
      window['requestIdleCallback'](start);
    } else {
      start();
    }

  }

}

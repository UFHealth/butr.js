let m = {
  animating: !1,
  topBuffer: 0,
  bottomBuffer: 0,
  settings: {}
};
const I = (t, l) => {
  let s = null, r = performance.now();
  return () => {
    r + l - performance.now() < 0 && (t(), r = performance.now()), s && clearTimeout(s), s = setTimeout(t, l);
  };
}, B = (t, l) => {
  const s = t.className + (" " + l);
  t.className = s.trim();
}, L = (t) => {
  const s = Object.assign({}, {
    duration: 800,
    loop: null,
    done: null,
    easing: "easeInOutQuad"
  }, t);
  let r, f, i;
  const g = () => {
    m.animating = !0, r = performance.now(), f = r + s.duration, c();
  }, c = () => {
    i = performance.now(), s.loop(h), i < f ? requestAnimationFrame(c) : (m.animating = !1, typeof s.done == "function" && s.done());
  }, h = (e, E) => {
    const p = (E - e) * S[s.easing](C());
    return e + p;
  }, C = () => Math.min((i - r) / s.duration, 1), S = {
    linear(e) {
      return e;
    },
    easeInQuad(e) {
      return e * e;
    },
    easeOutQuad(e) {
      return e * (2 - e);
    },
    easeInOutQuad(e) {
      return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
    },
    easeInCubic(e) {
      return e * e * e;
    },
    easeOutCubic(e) {
      return --e * e * e + 1;
    },
    easeInOutCubic(e) {
      return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
    },
    easeInQuart(e) {
      return e * e * e * e;
    },
    easeOutQuart(e) {
      return 1 - --e * e * e * e;
    },
    easeInOutQuart(e) {
      return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
    },
    easeInQuint(e) {
      return e * e * e * e * e;
    },
    easeOutQuint(e) {
      return 1 + --e * e * e * e * e;
    },
    easeInOutQuint(e) {
      return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
    }
  };
  g();
}, q = (t) => {
  const l = {
    target: 0,
    direction: "y",
    keepHash: !0,
    speed: 1,
    afterTo: null,
    /**
     * A global offset can be passed from Butr's initialization that will be used
     * as the default instead of 0 when needed. Otherwise it can be explicitly
     * set when using To() or Butr.to()
     */
    scrollOffset: m.settings.scrollOffset || 0
  };
  t = Object.assign({}, l, t);
  const s = window.matchMedia("(prefers-reduced-motion)").matches;
  let r, f, i;
  const g = () => t && t.scrollingElement ? document.querySelector(t.scrollingElement) : document.scrollingElement || document.documentElement, c = () => t.direction === "x" ? i.scrollLeft : i.scrollTop, h = () => {
    if (t.target[0] === "#") {
      const d = document.getElementById(t.target.substr(1)), v = d.getBoundingClientRect();
      if (d && t.direction === "x") {
        const y = i.scrollLeft;
        return Math.max(v.left + y - t.scrollOffset, 0);
      }
      if (d && t.direction === "y") {
        const y = i.scrollTop;
        return Math.max(v.top + y - t.scrollOffset, 0);
      }
      return 0;
    }
    return t.target;
  }, C = (d) => {
    t.direction === "x" ? i.scrollLeft = d : i.scrollTop = d;
  }, S = () => {
    typeof t.afterTo == "function" && t.afterTo();
  }, e = (d) => 24 * (1 / t.speed) * Math.sqrt(Math.abs(d)), E = () => {
    r = c(), f = h(), f === r ? S() : L({
      duration: e(f - r),
      loop(d) {
        const v = d(r, f);
        C(v);
      },
      done: S
    });
  }, u = () => {
    t.keepHash && t.target[0] === "#" && history.pushState({}, "", t.target);
  };
  (() => {
    i = g(), s ? C(h()) : E(), u();
  })();
}, M = () => {
  const { settings: t } = m;
  let l = window.matchMedia("(prefers-reduced-motion)").matches, s, r, f, i, g, c, h;
  const C = () => {
    f = t.scrollingElement ? document.querySelector(t.scrollingElement) : document.scrollingElement || document.documentElement, h = document.querySelector(".js-butr-nav"), i = document.querySelectorAll(".js-butr-link"), g = document.querySelector(".js-butr-content"), c = [];
    for (var n = i.length - 1; n >= 0; n--)
      c.unshift(g.querySelector(i[n].getAttribute("href")));
  }, S = () => !h || !i || !g ? (console.error("Error: Missing required classes on nav or links. Aborted setup of Butr.marker"), !1) : !0, e = () => {
    r = document.createElement("div"), r.classList.add("js-butr-marker"), t.markerClass && B(r, t.markerClass), r.style.height = i[0].offsetHeight + "px";
    const n = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
    l || (r.style.transition = [
      `${t.duration}ms transform ${n}`,
      `${t.duration}ms height ${n}`
    ].join(",")), h.appendChild(r);
  }, E = (n) => {
    let o = n.offsetTop;
    window.getComputedStyle(n), r.style.transform = `translateY(${o}px)`, r.style.height = `${n.offsetHeight}px`;
  }, u = () => {
    for (let n = 0; n < i.length; n++)
      i[n].addEventListener("click", (o) => {
        d(i[n].hash);
      });
  }, p = () => {
    let n;
    for (let o = 0; o < c.length; o++) {
      if (!c[o]) continue;
      if (c[o].getBoundingClientRect().top + s - t.scrollOffset - 2 > s) {
        n || (n = c[o]);
        break;
      } else n = c[o];
    }
    n && d("#" + n.id);
  }, d = (n) => {
    let o = document.querySelector(".js-butr-link.js-butr-active"), a = document.querySelector('.js-butr-link[href="' + n + '"]');
    a !== o && (o && (o.classList.remove("js-butr-active"), t.activeClass && o.classList.remove(t.activeClass)), a && (a.classList.add("js-butr-active"), t.activeClass && B(a, t.activeClass), E(a)));
  }, v = () => {
    s = f.scrollTop, p();
  }, y = I(() => {
    m.animating || v();
  }, 33);
  (() => {
    C(), S() && (e(), u(), v(), window.addEventListener("scroll", y));
  })();
}, x = () => {
  let t = document.body.querySelectorAll("a[data-butr]");
  if (!t.length) return !1;
  for (let l = 0; l < t.length; l++)
    t[l].addEventListener("click", (s) => {
      s.preventDefault(), q({
        target: s.currentTarget.getAttribute("href")
      });
    });
}, A = () => {
  const { settings: t } = m;
  let l, s, r, f, i = [], g = [i], c = 0;
  const h = (n) => {
    let o = n.toLowerCase().replace(/\s+/g, "-").replace(/(\d)\./g, "$1-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), a = o, b = 0;
    for (; document.getElementById(a); )
      a = o + "-" + ++b;
    return a;
  }, C = (n) => (n.id || (n.id = h(n.textContent)), "#" + n.id), S = () => {
    r = document.querySelector(".js-butr-nav"), l = document.querySelector(".js-butr-content"), s = l.querySelectorAll(":is(h2, h3, h4, h5, h6):not([data-butr-ignore])");
  }, e = () => !r || !l || !s ? (console.error("Error: Missing required classes on nav, content, or headings. Aborted setup of Butr.marker"), !1) : !0, E = (n) => parseInt(n.tagName.substr(1)) - c, u = (n) => s[n + 1] ? parseInt(s[n + 1].tagName.substr(1)) - c : 0, p = (n) => ({
    label: n.textContent.trim(),
    hash: C(n),
    children: []
  }), d = () => {
    for (let n = 0; n < s.length; n++) {
      let o = s[n], a = E(o), b = u(n), k = p(o);
      if (f = g[g.length - 1], f.push(k), b) {
        if (b > a)
          c += b - a - 1, b -= c, g.push(k.children);
        else if (b < a) {
          b += c;
          for (let T = 0; T < a - b; T++)
            g.pop();
          c = 0;
        }
      }
    }
  }, v = (n) => {
    let o = document.createElement("li"), a = document.createElement("a");
    return a.href = n.hash, a.setAttribute("data-butr", !0), a.innerText = n.label, a.classList.add("js-butr-link"), t.aClass && B(a, t.aClass), t.liClass && B(o, t.liClass), o.appendChild(a), o;
  }, y = (n) => {
    let o = document.createElement("ol");
    t.olClass && B(o, t.olClass);
    for (let a = 0; a < n.length; a++) {
      let b = n[a], k = v(b);
      b.children.length && k.appendChild(y(b.children)), o.appendChild(k);
    }
    return o;
  };
  (() => {
    if (S(), e()) {
      d();
      let n = y(i);
      t.prepend ? r.insertBefore(n, r.firstElementChild) : r.appendChild(n);
    }
  })();
}, j = () => {
  const { settings: t } = m, l = document.querySelector(".js-butr-nav"), s = l.parentElement, r = window.getComputedStyle(s), f = parseInt(r.getPropertyValue("padding-top"), 10), i = parseInt(r.getPropertyValue("padding-bottom"), 10), g = () => {
    const u = parseInt(r.getPropertyValue("padding-right"), 10), p = parseInt(r.getPropertyValue("padding-left"), 10), d = parseInt(r.getPropertyValue("width"), 10);
    l.style.maxWidth = d - p - u + "px", l.style.width = "100%";
  }, c = () => {
    const u = ";position: fixed; top: " + (m.topBuffer + f) + "px; bottom: auto;";
    l.style.cssText += u;
  }, h = () => {
    const u = ";position: absolute; top: auto; bottom: " + i + "px;";
    l.style.cssText += u;
  }, C = () => {
    let u = ";position: relative; top: auto; bottom: auto;";
    l.style.cssText += u;
  }, S = () => {
    const u = document.querySelector(".js-butr-avoidAbove"), p = document.querySelector(".js-butr-avoidBelow");
    u && (m.topBuffer = Math.round(u.getBoundingClientRect().bottom)), p && (m.bottomBuffer = Math.round(p.getBoundingClientRect().top));
  }, e = I(() => {
    const u = getComputedStyle(l).position, p = l.getBoundingClientRect(), d = s.getBoundingClientRect(), v = Math.round(d.top), y = Math.round(d.bottom), w = Math.round(p.top), n = Math.round(p.bottom);
    u === "fixed" ? v > m.topBuffer ? C() : y - i < n && h() : u === "absolute" ? w >= m.topBuffer + f && c() : u === "relative" && (y - i < l.offsetHeight + m.topBuffer + f ? h() : w - m.topBuffer - f <= 0 && c());
  }, 33), E = () => {
    g(), S(), e(), window.addEventListener("scroll", e), window.addEventListener("resize", e);
  };
  t.mediaQuery ? matchMedia(t.mediaQuery).matches && E() : E();
}, O = {
  // Sidebar
  olClass: "Butr__Sidebar__List",
  liClass: "Butr__Sidebar__Item",
  aClass: "Butr__Sidebar__Link",
  // Marker
  scrollingElement: null,
  duration: 320,
  markerClass: "Butr__Marker",
  activeClass: "Butr__Sidebar__Link--active",
  // Sticky
  mediaQuery: !1
}, _ = (t) => {
  m.settings = Object.assign({}, O, t), t.AutoSidebar && A(), t.AutoAnchors && x(), t.Marker && M(), t.StickyNav && j();
}, R = {
  init: _,
  // Expose to as method for using with anything else
  to: q
};
export {
  R as default
};

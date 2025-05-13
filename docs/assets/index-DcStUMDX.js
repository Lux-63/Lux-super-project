(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Wi(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ot = {},
  an = [],
  ie = () => {},
  za = () => !1,
  Ds = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Bi = (e) => e.startsWith("onUpdate:"),
  At = Object.assign,
  Ki = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  qa = Object.prototype.hasOwnProperty,
  nt = (e, t) => qa.call(e, t),
  K = Array.isArray,
  cn = (e) => Yn(e) === "[object Map]",
  Ls = (e) => Yn(e) === "[object Set]",
  Oo = (e) => Yn(e) === "[object Date]",
  G = (e) => typeof e == "function",
  ft = (e) => typeof e == "string",
  ae = (e) => typeof e == "symbol",
  at = (e) => e !== null && typeof e == "object",
  Wr = (e) => (at(e) || G(e)) && G(e.then) && G(e.catch),
  Br = Object.prototype.toString,
  Yn = (e) => Br.call(e),
  Xa = (e) => Yn(e).slice(8, -1),
  Kr = (e) => Yn(e) === "[object Object]",
  Ui = (e) =>
    ft(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ln = Wi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Is = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Qa = /-(\w)/g,
  Oe = Is((e) => e.replace(Qa, (t, n) => (n ? n.toUpperCase() : ""))),
  Ja = /\B([A-Z])/g,
  qe = Is((e) => e.replace(Ja, "-$1").toLowerCase()),
  Ur = Is((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Qs = Is((e) => (e ? `on${Ur(e)}` : "")),
  Ce = (e, t) => !Object.is(e, t),
  fs = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Yr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  bs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let So;
const Rs = () =>
  So ||
  (So =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Yi(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = ft(s) ? nc(s) : Yi(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else if (ft(e) || at(e)) return e;
}
const Za = /;(?![^(]*\))/g,
  tc = /:([^]+)/,
  ec = /\/\*[^]*?\*\//g;
function nc(e) {
  const t = {};
  return (
    e
      .replace(ec, "")
      .split(Za)
      .forEach((n) => {
        if (n) {
          const s = n.split(tc);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Gi(e) {
  let t = "";
  if (ft(e)) t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = Gi(e[n]);
      s && (t += s + " ");
    }
  else if (at(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const sc =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ic = Wi(sc);
function Gr(e) {
  return !!e || e === "";
}
function oc(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = Ms(e[s], t[s]);
  return n;
}
function Ms(e, t) {
  if (e === t) return !0;
  let n = Oo(e),
    s = Oo(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = ae(e)), (s = ae(t)), n || s)) return e === t;
  if (((n = K(e)), (s = K(t)), n || s)) return n && s ? oc(e, t) : !1;
  if (((n = at(e)), (s = at(t)), n || s)) {
    if (!n || !s) return !1;
    const i = Object.keys(e).length,
      r = Object.keys(t).length;
    if (i !== r) return !1;
    for (const o in e) {
      const a = e.hasOwnProperty(o),
        l = t.hasOwnProperty(o);
      if ((a && !l) || (!a && l) || !Ms(e[o], t[o])) return !1;
    }
  }
  return String(e) === String(t);
}
function rc(e, t) {
  return e.findIndex((n) => Ms(n, t));
}
const zr = (e) => !!(e && e.__v_isRef === !0),
  Ft = (e) =>
    ft(e)
      ? e
      : e == null
      ? ""
      : K(e) || (at(e) && (e.toString === Br || !G(e.toString)))
      ? zr(e)
        ? Ft(e.value)
        : JSON.stringify(e, qr, 2)
      : String(e),
  qr = (e, t) =>
    zr(t)
      ? qr(e, t.value)
      : cn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i], r) => ((n[Js(s, r) + " =>"] = i), n),
            {}
          ),
        }
      : Ls(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Js(n)) }
      : ae(t)
      ? Js(t)
      : at(t) && !K(t) && !Kr(t)
      ? String(t)
      : t,
  Js = (e, t = "") => {
    var n;
    return ae(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Lt;
class lc {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Lt),
      !t && Lt && (this.index = (Lt.scopes || (Lt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Lt;
      try {
        return (Lt = this), t();
      } finally {
        Lt = n;
      }
    }
  }
  on() {
    Lt = this;
  }
  off() {
    Lt = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function ac() {
  return Lt;
}
let lt;
const Zs = new WeakSet();
class Xr {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Lt && Lt.active && Lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Zs.has(this) && (Zs.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Jr(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), No(this), Zr(this);
    const t = lt,
      n = qt;
    (lt = this), (qt = !0);
    try {
      return this.fn();
    } finally {
      tl(this), (lt = t), (qt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Xi(t);
      (this.deps = this.depsTail = void 0),
        No(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Zs.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    wi(this) && this.run();
  }
  get dirty() {
    return wi(this);
  }
}
let Qr = 0,
  In,
  Rn;
function Jr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Rn), (Rn = e);
    return;
  }
  (e.next = In), (In = e);
}
function zi() {
  Qr++;
}
function qi() {
  if (--Qr > 0) return;
  if (Rn) {
    let t = Rn;
    for (Rn = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; In; ) {
    let t = In;
    for (In = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Zr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function tl(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Xi(s), cc(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = i);
  }
  (e.deps = t), (e.depsTail = n);
}
function wi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (el(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function el(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Hn)
  )
    return;
  e.globalVersion = Hn;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !wi(e))) {
    e.flags &= -3;
    return;
  }
  const n = lt,
    s = qt;
  (lt = e), (qt = !0);
  try {
    Zr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ce(i, e._value)) && ((e._value = i), t.version++);
  } catch (i) {
    throw (t.version++, i);
  } finally {
    (lt = n), (qt = s), tl(e), (e.flags &= -3);
  }
}
function Xi(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (
    (s && ((s.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) Xi(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function cc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let qt = !0;
const nl = [];
function $e() {
  nl.push(qt), (qt = !1);
}
function De() {
  const e = nl.pop();
  qt = e === void 0 ? !0 : e;
}
function No(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = lt;
    lt = void 0;
    try {
      t();
    } finally {
      lt = n;
    }
  }
}
let Hn = 0;
class uc {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Qi {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!lt || !qt || lt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== lt)
      (n = this.activeLink = new uc(lt, this)),
        lt.deps
          ? ((n.prevDep = lt.depsTail),
            (lt.depsTail.nextDep = n),
            (lt.depsTail = n))
          : (lt.deps = lt.depsTail = n),
        sl(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = lt.depsTail),
        (n.nextDep = void 0),
        (lt.depsTail.nextDep = n),
        (lt.depsTail = n),
        lt.deps === n && (lt.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t);
  }
  notify(t) {
    zi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      qi();
    }
  }
}
function sl(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) sl(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const Ci = new WeakMap(),
  Fe = Symbol(""),
  Oi = Symbol(""),
  Fn = Symbol("");
function pt(e, t, n) {
  if (qt && lt) {
    let s = Ci.get(e);
    s || Ci.set(e, (s = new Map()));
    let i = s.get(n);
    i || (s.set(n, (i = new Qi())), (i.map = s), (i.key = n)), i.track();
  }
}
function pe(e, t, n, s, i, r) {
  const o = Ci.get(e);
  if (!o) {
    Hn++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((zi(), t === "clear")) o.forEach(a);
  else {
    const l = K(e),
      u = l && Ui(n);
    if (l && n === "length") {
      const c = Number(s);
      o.forEach((g, v) => {
        (v === "length" || v === Fn || (!ae(v) && v >= c)) && a(g);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(Fn)), t)
      ) {
        case "add":
          l ? u && a(o.get("length")) : (a(o.get(Fe)), cn(e) && a(o.get(Oi)));
          break;
        case "delete":
          l || (a(o.get(Fe)), cn(e) && a(o.get(Oi)));
          break;
        case "set":
          cn(e) && a(o.get(Fe));
          break;
      }
  }
  qi();
}
function Je(e) {
  const t = et(e);
  return t === e ? t : (pt(t, "iterate", Fn), Wt(e) ? t : t.map(gt));
}
function Ps(e) {
  return pt((e = et(e)), "iterate", Fn), e;
}
const fc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ti(this, Symbol.iterator, gt);
  },
  concat(...e) {
    return Je(this).concat(...e.map((t) => (K(t) ? Je(t) : t)));
  },
  entries() {
    return ti(this, "entries", (e) => ((e[1] = gt(e[1])), e));
  },
  every(e, t) {
    return de(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return de(this, "filter", e, t, (n) => n.map(gt), arguments);
  },
  find(e, t) {
    return de(this, "find", e, t, gt, arguments);
  },
  findIndex(e, t) {
    return de(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return de(this, "findLast", e, t, gt, arguments);
  },
  findLastIndex(e, t) {
    return de(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return de(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ei(this, "includes", e);
  },
  indexOf(...e) {
    return ei(this, "indexOf", e);
  },
  join(e) {
    return Je(this).join(e);
  },
  lastIndexOf(...e) {
    return ei(this, "lastIndexOf", e);
  },
  map(e, t) {
    return de(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return On(this, "pop");
  },
  push(...e) {
    return On(this, "push", e);
  },
  reduce(e, ...t) {
    return xo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return xo(this, "reduceRight", e, t);
  },
  shift() {
    return On(this, "shift");
  },
  some(e, t) {
    return de(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return On(this, "splice", e);
  },
  toReversed() {
    return Je(this).toReversed();
  },
  toSorted(e) {
    return Je(this).toSorted(e);
  },
  toSpliced(...e) {
    return Je(this).toSpliced(...e);
  },
  unshift(...e) {
    return On(this, "unshift", e);
  },
  values() {
    return ti(this, "values", gt);
  },
};
function ti(e, t, n) {
  const s = Ps(e),
    i = s[t]();
  return (
    s !== e &&
      !Wt(e) &&
      ((i._next = i.next),
      (i.next = () => {
        const r = i._next();
        return r.value && (r.value = n(r.value)), r;
      })),
    i
  );
}
const dc = Array.prototype;
function de(e, t, n, s, i, r) {
  const o = Ps(e),
    a = o !== e && !Wt(e),
    l = o[t];
  if (l !== dc[t]) {
    const g = l.apply(e, r);
    return a ? gt(g) : g;
  }
  let u = n;
  o !== e &&
    (a
      ? (u = function (g, v) {
          return n.call(this, gt(g), v, e);
        })
      : n.length > 2 &&
        (u = function (g, v) {
          return n.call(this, g, v, e);
        }));
  const c = l.call(o, u, s);
  return a && i ? i(c) : c;
}
function xo(e, t, n, s) {
  const i = Ps(e);
  let r = n;
  return (
    i !== e &&
      (Wt(e)
        ? n.length > 3 &&
          (r = function (o, a, l) {
            return n.call(this, o, a, l, e);
          })
        : (r = function (o, a, l) {
            return n.call(this, o, gt(a), l, e);
          })),
    i[t](r, ...s)
  );
}
function ei(e, t, n) {
  const s = et(e);
  pt(s, "iterate", Fn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && to(n[0])
    ? ((n[0] = et(n[0])), s[t](...n))
    : i;
}
function On(e, t, n = []) {
  $e(), zi();
  const s = et(e)[t].apply(e, n);
  return qi(), De(), s;
}
const hc = Wi("__proto__,__v_isRef,__isVue"),
  il = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ae)
  );
function pc(e) {
  ae(e) || (e = String(e));
  const t = et(this);
  return pt(t, "has", e), t.hasOwnProperty(e);
}
class ol {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw")
      return s === (i ? (r ? wc : cl) : r ? al : ll).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const o = K(t);
    if (!i) {
      let l;
      if (o && (l = fc[n])) return l;
      if (n === "hasOwnProperty") return pc;
    }
    const a = Reflect.get(t, n, _t(t) ? t : s);
    return (ae(n) ? il.has(n) : hc(n)) || (i || pt(t, "get", n), r)
      ? a
      : _t(a)
      ? o && Ui(n)
        ? a
        : a.value
      : at(a)
      ? i
        ? ul(a)
        : Gn(a)
      : a;
  }
}
class rl extends ol {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (!this._isShallow) {
      const l = Ke(r);
      if (
        (!Wt(s) && !Ke(s) && ((r = et(r)), (s = et(s))),
        !K(t) && _t(r) && !_t(s))
      )
        return l ? !1 : ((r.value = s), !0);
    }
    const o = K(t) && Ui(n) ? Number(n) < t.length : nt(t, n),
      a = Reflect.set(t, n, s, _t(t) ? t : i);
    return (
      t === et(i) && (o ? Ce(s, r) && pe(t, "set", n, s) : pe(t, "add", n, s)),
      a
    );
  }
  deleteProperty(t, n) {
    const s = nt(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && pe(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ae(n) || !il.has(n)) && pt(t, "has", n), s;
  }
  ownKeys(t) {
    return pt(t, "iterate", K(t) ? "length" : Fe), Reflect.ownKeys(t);
  }
}
class gc extends ol {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const _c = new rl(),
  mc = new gc(),
  bc = new rl(!0);
const Si = (e) => e,
  es = (e) => Reflect.getPrototypeOf(e);
function vc(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = et(i),
      o = cn(r),
      a = e === "entries" || (e === Symbol.iterator && o),
      l = e === "keys" && o,
      u = i[e](...s),
      c = n ? Si : t ? Ni : gt;
    return (
      !t && pt(r, "iterate", l ? Oi : Fe),
      {
        next() {
          const { value: g, done: v } = u.next();
          return v
            ? { value: g, done: v }
            : { value: a ? [c(g[0]), c(g[1])] : c(g), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ns(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ec(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw,
        o = et(r),
        a = et(i);
      e || (Ce(i, a) && pt(o, "get", i), pt(o, "get", a));
      const { has: l } = es(o),
        u = t ? Si : e ? Ni : gt;
      if (l.call(o, i)) return u(r.get(i));
      if (l.call(o, a)) return u(r.get(a));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && pt(et(i), "iterate", Fe), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw,
        o = et(r),
        a = et(i);
      return (
        e || (Ce(i, a) && pt(o, "has", i), pt(o, "has", a)),
        i === a ? r.has(i) : r.has(i) || r.has(a)
      );
    },
    forEach(i, r) {
      const o = this,
        a = o.__v_raw,
        l = et(a),
        u = t ? Si : e ? Ni : gt;
      return (
        !e && pt(l, "iterate", Fe),
        a.forEach((c, g) => i.call(r, u(c), u(g), o))
      );
    },
  };
  return (
    At(
      n,
      e
        ? {
            add: ns("add"),
            set: ns("set"),
            delete: ns("delete"),
            clear: ns("clear"),
          }
        : {
            add(i) {
              !t && !Wt(i) && !Ke(i) && (i = et(i));
              const r = et(this);
              return (
                es(r).has.call(r, i) || (r.add(i), pe(r, "add", i, i)), this
              );
            },
            set(i, r) {
              !t && !Wt(r) && !Ke(r) && (r = et(r));
              const o = et(this),
                { has: a, get: l } = es(o);
              let u = a.call(o, i);
              u || ((i = et(i)), (u = a.call(o, i)));
              const c = l.call(o, i);
              return (
                o.set(i, r),
                u ? Ce(r, c) && pe(o, "set", i, r) : pe(o, "add", i, r),
                this
              );
            },
            delete(i) {
              const r = et(this),
                { has: o, get: a } = es(r);
              let l = o.call(r, i);
              l || ((i = et(i)), (l = o.call(r, i))), a && a.call(r, i);
              const u = r.delete(i);
              return l && pe(r, "delete", i, void 0), u;
            },
            clear() {
              const i = et(this),
                r = i.size !== 0,
                o = i.clear();
              return r && pe(i, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      n[i] = vc(i, e, t);
    }),
    n
  );
}
function Ji(e, t) {
  const n = Ec(e, t);
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? s
      : Reflect.get(nt(n, i) && i in s ? n : s, i, r);
}
const yc = { get: Ji(!1, !1) },
  Tc = { get: Ji(!1, !0) },
  Ac = { get: Ji(!0, !1) };
const ll = new WeakMap(),
  al = new WeakMap(),
  cl = new WeakMap(),
  wc = new WeakMap();
function Cc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Oc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cc(Xa(e));
}
function Gn(e) {
  return Ke(e) ? e : Zi(e, !1, _c, yc, ll);
}
function Sc(e) {
  return Zi(e, !1, bc, Tc, al);
}
function ul(e) {
  return Zi(e, !0, mc, Ac, cl);
}
function Zi(e, t, n, s, i) {
  if (!at(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = i.get(e);
  if (r) return r;
  const o = Oc(e);
  if (o === 0) return e;
  const a = new Proxy(e, o === 2 ? s : n);
  return i.set(e, a), a;
}
function un(e) {
  return Ke(e) ? un(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
function Wt(e) {
  return !!(e && e.__v_isShallow);
}
function to(e) {
  return e ? !!e.__v_raw : !1;
}
function et(e) {
  const t = e && e.__v_raw;
  return t ? et(t) : e;
}
function Nc(e) {
  return (
    !nt(e, "__v_skip") && Object.isExtensible(e) && Yr(e, "__v_skip", !0), e
  );
}
const gt = (e) => (at(e) ? Gn(e) : e),
  Ni = (e) => (at(e) ? ul(e) : e);
function _t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Y(e) {
  return xc(e, !1);
}
function xc(e, t) {
  return _t(e) ? e : new $c(e, t);
}
class $c {
  constructor(t, n) {
    (this.dep = new Qi()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : et(t)),
      (this._value = n ? t : gt(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Wt(t) || Ke(t);
    (t = s ? t : et(t)),
      Ce(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : gt(t)),
        this.dep.trigger());
  }
}
function We(e) {
  return _t(e) ? e.value : e;
}
const Dc = {
  get: (e, t, n) => (t === "__v_raw" ? e : We(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const i = e[t];
    return _t(i) && !_t(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function fl(e) {
  return un(e) ? e : new Proxy(e, Dc);
}
class Lc {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Qi(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Hn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && lt !== this))
      return Jr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return el(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ic(e, t, n = !1) {
  let s, i;
  return G(e) ? (s = e) : ((s = e.get), (i = e.set)), new Lc(s, i, n);
}
const ss = {},
  vs = new WeakMap();
let ke;
function Rc(e, t = !1, n = ke) {
  if (n) {
    let s = vs.get(n);
    s || vs.set(n, (s = [])), s.push(e);
  }
}
function Mc(e, t, n = ot) {
  const {
      immediate: s,
      deep: i,
      once: r,
      scheduler: o,
      augmentJob: a,
      call: l,
    } = n,
    u = (p) => (i ? p : Wt(p) || i === !1 || i === 0 ? ge(p, 1) : ge(p));
  let c,
    g,
    v,
    m,
    D = !1,
    T = !1;
  if (
    (_t(e)
      ? ((g = () => e.value), (D = Wt(e)))
      : un(e)
      ? ((g = () => u(e)), (D = !0))
      : K(e)
      ? ((T = !0),
        (D = e.some((p) => un(p) || Wt(p))),
        (g = () =>
          e.map((p) => {
            if (_t(p)) return p.value;
            if (un(p)) return u(p);
            if (G(p)) return l ? l(p, 2) : p();
          })))
      : G(e)
      ? t
        ? (g = l ? () => l(e, 2) : e)
        : (g = () => {
            if (v) {
              $e();
              try {
                v();
              } finally {
                De();
              }
            }
            const p = ke;
            ke = c;
            try {
              return l ? l(e, 3, [m]) : e(m);
            } finally {
              ke = p;
            }
          })
      : (g = ie),
    t && i)
  ) {
    const p = g,
      E = i === !0 ? 1 / 0 : i;
    g = () => ge(p(), E);
  }
  const w = ac(),
    P = () => {
      c.stop(), w && w.active && Ki(w.effects, c);
    };
  if (r && t) {
    const p = t;
    t = (...E) => {
      p(...E), P();
    };
  }
  let A = T ? new Array(e.length).fill(ss) : ss;
  const d = (p) => {
    if (!(!(c.flags & 1) || (!c.dirty && !p)))
      if (t) {
        const E = c.run();
        if (i || D || (T ? E.some((k, W) => Ce(k, A[W])) : Ce(E, A))) {
          v && v();
          const k = ke;
          ke = c;
          try {
            const W = [E, A === ss ? void 0 : T && A[0] === ss ? [] : A, m];
            l ? l(t, 3, W) : t(...W), (A = E);
          } finally {
            ke = k;
          }
        }
      } else c.run();
  };
  return (
    a && a(d),
    (c = new Xr(g)),
    (c.scheduler = o ? () => o(d, !1) : d),
    (m = (p) => Rc(p, !1, c)),
    (v = c.onStop =
      () => {
        const p = vs.get(c);
        if (p) {
          if (l) l(p, 4);
          else for (const E of p) E();
          vs.delete(c);
        }
      }),
    t ? (s ? d(!0) : (A = c.run())) : o ? o(d.bind(null, !0), !0) : c.run(),
    (P.pause = c.pause.bind(c)),
    (P.resume = c.resume.bind(c)),
    (P.stop = P),
    P
  );
}
function ge(e, t = 1 / 0, n) {
  if (t <= 0 || !at(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, _t(e))) ge(e.value, t, n);
  else if (K(e)) for (let s = 0; s < e.length; s++) ge(e[s], t, n);
  else if (Ls(e) || cn(e))
    e.forEach((s) => {
      ge(s, t, n);
    });
  else if (Kr(e)) {
    for (const s in e) ge(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ge(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function zn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    ks(i, t, n);
  }
}
function ce(e, t, n, s) {
  if (G(e)) {
    const i = zn(e, t, n, s);
    return (
      i &&
        Wr(i) &&
        i.catch((r) => {
          ks(r, t, n);
        }),
      i
    );
  }
  if (K(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(ce(e[r], t, n, s));
    return i;
  }
}
function ks(e, t, n, s = !0) {
  const i = t ? t.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || ot;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let g = 0; g < c.length; g++) if (c[g](e, l, u) === !1) return;
      }
      a = a.parent;
    }
    if (r) {
      $e(), zn(r, null, 10, [e, l, u]), De();
      return;
    }
  }
  Pc(e, n, i, s, o);
}
function Pc(e, t, n, s = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
const bt = [];
let ne = -1;
const fn = [];
let Ae = null,
  en = 0;
const dl = Promise.resolve();
let Es = null;
function hl(e) {
  const t = Es || dl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kc(e) {
  let t = ne + 1,
    n = bt.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      i = bt[s],
      r = Wn(i);
    r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function eo(e) {
  if (!(e.flags & 1)) {
    const t = Wn(e),
      n = bt[bt.length - 1];
    !n || (!(e.flags & 2) && t >= Wn(n)) ? bt.push(e) : bt.splice(kc(t), 0, e),
      (e.flags |= 1),
      pl();
  }
}
function pl() {
  Es || (Es = dl.then(_l));
}
function jc(e) {
  K(e)
    ? fn.push(...e)
    : Ae && e.id === -1
    ? Ae.splice(en + 1, 0, e)
    : e.flags & 1 || (fn.push(e), (e.flags |= 1)),
    pl();
}
function $o(e, t, n = ne + 1) {
  for (; n < bt.length; n++) {
    const s = bt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      bt.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function gl(e) {
  if (fn.length) {
    const t = [...new Set(fn)].sort((n, s) => Wn(n) - Wn(s));
    if (((fn.length = 0), Ae)) {
      Ae.push(...t);
      return;
    }
    for (Ae = t, en = 0; en < Ae.length; en++) {
      const n = Ae[en];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Ae = null), (en = 0);
  }
}
const Wn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function _l(e) {
  try {
    for (ne = 0; ne < bt.length; ne++) {
      const t = bt[ne];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        zn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ne < bt.length; ne++) {
      const t = bt[ne];
      t && (t.flags &= -2);
    }
    (ne = -1),
      (bt.length = 0),
      gl(),
      (Es = null),
      (bt.length || fn.length) && _l();
  }
}
let Ht = null,
  ml = null;
function ys(e) {
  const t = Ht;
  return (Ht = e), (ml = (e && e.type.__scopeId) || null), t;
}
function Vc(e, t = Ht, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && Ho(-1);
    const r = ys(t);
    let o;
    try {
      o = e(...i);
    } finally {
      ys(r), s._d && Ho(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Do(e, t) {
  if (Ht === null) return e;
  const n = Ws(Ht),
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, a, l = ot] = t[i];
    r &&
      (G(r) && (r = { mounted: r, updated: r }),
      r.deep && ge(o),
      s.push({
        dir: r,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return e;
}
function Me(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[s];
    l && ($e(), ce(l, n, 8, [e.el, a, e, t]), De());
  }
}
const Hc = Symbol("_vte"),
  Fc = (e) => e.__isTeleport;
function no(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), no(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function bl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ts(e, t, n, s, i = !1) {
  if (K(e)) {
    e.forEach((D, T) => Ts(D, t && (K(t) ? t[T] : t), n, s, i));
    return;
  }
  if (Mn(s) && !i) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Ts(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Ws(s.component) : s.el,
    o = i ? null : r,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === ot ? (a.refs = {}) : a.refs,
    g = a.setupState,
    v = et(g),
    m = g === ot ? () => !1 : (D) => nt(v, D);
  if (
    (u != null &&
      u !== l &&
      (ft(u)
        ? ((c[u] = null), m(u) && (g[u] = null))
        : _t(u) && (u.value = null)),
    G(l))
  )
    zn(l, a, 12, [o, c]);
  else {
    const D = ft(l),
      T = _t(l);
    if (D || T) {
      const w = () => {
        if (e.f) {
          const P = D ? (m(l) ? g[l] : c[l]) : l.value;
          i
            ? K(P) && Ki(P, r)
            : K(P)
            ? P.includes(r) || P.push(r)
            : D
            ? ((c[l] = [r]), m(l) && (g[l] = c[l]))
            : ((l.value = [r]), e.k && (c[e.k] = l.value));
        } else
          D
            ? ((c[l] = o), m(l) && (g[l] = o))
            : T && ((l.value = o), e.k && (c[e.k] = o));
      };
      o ? ((w.id = -1), Dt(w, n)) : w();
    }
  }
}
Rs().requestIdleCallback;
Rs().cancelIdleCallback;
const Mn = (e) => !!e.type.__asyncLoader,
  vl = (e) => e.type.__isKeepAlive;
function Wc(e, t) {
  El(e, "a", t);
}
function Bc(e, t) {
  El(e, "da", t);
}
function El(e, t, n = Et) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((js(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      vl(i.parent.vnode) && Kc(s, t, n, i), (i = i.parent);
  }
}
function Kc(e, t, n, s) {
  const i = js(t, e, s, !0);
  yl(() => {
    Ki(s[t], i);
  }, n);
}
function js(e, t, n = Et, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          $e();
          const a = qn(n),
            l = ce(t, n, e, o);
          return a(), De(), l;
        });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Ee =
    (e) =>
    (t, n = Et) => {
      (!Kn || e === "sp") && js(e, (...s) => t(...s), n);
    },
  Uc = Ee("bm"),
  Vs = Ee("m"),
  Yc = Ee("bu"),
  Gc = Ee("u"),
  zc = Ee("bum"),
  yl = Ee("um"),
  qc = Ee("sp"),
  Xc = Ee("rtg"),
  Qc = Ee("rtc");
function Jc(e, t = Et) {
  js("ec", e, t);
}
const Zc = Symbol.for("v-ndc");
function tu(e, t, n, s) {
  let i;
  const r = n,
    o = K(e);
  if (o || ft(e)) {
    const a = o && un(e);
    let l = !1;
    a && ((l = !Wt(e)), (e = Ps(e))), (i = new Array(e.length));
    for (let u = 0, c = e.length; u < c; u++)
      i[u] = t(l ? gt(e[u]) : e[u], u, void 0, r);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, r);
  } else if (at(e))
    if (e[Symbol.iterator]) i = Array.from(e, (a, l) => t(a, l, void 0, r));
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        i[l] = t(e[c], c, l, r);
      }
    }
  else i = [];
  return i;
}
const xi = (e) => (e ? (Kl(e) ? Ws(e) : xi(e.parent)) : null),
  Pn = At(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xi(e.parent),
    $root: (e) => xi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Al(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        eo(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = hl.bind(e.proxy)),
    $watch: (e) => Tu.bind(e),
  }),
  ni = (e, t) => e !== ot && !e.__isScriptSetup && nt(e, t),
  eu = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: a,
        appContext: l,
      } = e;
      let u;
      if (t[0] !== "$") {
        const m = o[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (ni(s, t)) return (o[t] = 1), s[t];
          if (i !== ot && nt(i, t)) return (o[t] = 2), i[t];
          if ((u = e.propsOptions[0]) && nt(u, t)) return (o[t] = 3), r[t];
          if (n !== ot && nt(n, t)) return (o[t] = 4), n[t];
          $i && (o[t] = 0);
        }
      }
      const c = Pn[t];
      let g, v;
      if (c) return t === "$attrs" && pt(e.attrs, "get", ""), c(e);
      if ((g = a.__cssModules) && (g = g[t])) return g;
      if (n !== ot && nt(n, t)) return (o[t] = 4), n[t];
      if (((v = l.config.globalProperties), nt(v, t))) return v[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return ni(i, t)
        ? ((i[t] = n), !0)
        : s !== ot && nt(s, t)
        ? ((s[t] = n), !0)
        : nt(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
        },
      },
      o
    ) {
      let a;
      return (
        !!n[o] ||
        (e !== ot && nt(e, o)) ||
        ni(t, o) ||
        ((a = r[0]) && nt(a, o)) ||
        nt(s, o) ||
        nt(Pn, o) ||
        nt(i.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : nt(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Lo(e) {
  return K(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let $i = !0;
function nu(e) {
  const t = Al(e),
    n = e.proxy,
    s = e.ctx;
  ($i = !1), t.beforeCreate && Io(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: g,
    mounted: v,
    beforeUpdate: m,
    updated: D,
    activated: T,
    deactivated: w,
    beforeDestroy: P,
    beforeUnmount: A,
    destroyed: d,
    unmounted: p,
    render: E,
    renderTracked: k,
    renderTriggered: W,
    errorCaptured: z,
    serverPrefetch: q,
    expose: st,
    inheritAttrs: rt,
    components: F,
    directives: ct,
    filters: Ot,
  } = t;
  if ((u && su(u, s, null), o))
    for (const X in o) {
      const J = o[X];
      G(J) && (s[X] = J.bind(n));
    }
  if (i) {
    const X = i.call(n, n);
    at(X) && (e.data = Gn(X));
  }
  if ((($i = !0), r))
    for (const X in r) {
      const J = r[X],
        ht = G(J) ? J.bind(n, n) : G(J.get) ? J.get.bind(n, n) : ie,
        Gt = !G(J) && G(J.set) ? J.set.bind(n) : ie,
        St = Yl({ get: ht, set: Gt });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => St.value,
        set: (dt) => (St.value = dt),
      });
    }
  if (a) for (const X in a) Tl(a[X], s, n, X);
  if (l) {
    const X = G(l) ? l.call(n) : l;
    Reflect.ownKeys(X).forEach((J) => {
      cu(J, X[J]);
    });
  }
  c && Io(c, e, "c");
  function tt(X, J) {
    K(J) ? J.forEach((ht) => X(ht.bind(n))) : J && X(J.bind(n));
  }
  if (
    (tt(Uc, g),
    tt(Vs, v),
    tt(Yc, m),
    tt(Gc, D),
    tt(Wc, T),
    tt(Bc, w),
    tt(Jc, z),
    tt(Qc, k),
    tt(Xc, W),
    tt(zc, A),
    tt(yl, p),
    tt(qc, q),
    K(st))
  )
    if (st.length) {
      const X = e.exposed || (e.exposed = {});
      st.forEach((J) => {
        Object.defineProperty(X, J, {
          get: () => n[J],
          set: (ht) => (n[J] = ht),
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === ie && (e.render = E),
    rt != null && (e.inheritAttrs = rt),
    F && (e.components = F),
    ct && (e.directives = ct),
    q && bl(e);
}
function su(e, t, n = ie) {
  K(e) && (e = Di(e));
  for (const s in e) {
    const i = e[s];
    let r;
    at(i)
      ? "default" in i
        ? (r = ds(i.from || s, i.default, !0))
        : (r = ds(i.from || s))
      : (r = ds(i)),
      _t(r)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (t[s] = r);
  }
}
function Io(e, t, n) {
  ce(K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Tl(e, t, n, s) {
  let i = s.includes(".") ? kl(n, s) : () => n[s];
  if (ft(e)) {
    const r = t[e];
    G(r) && ii(i, r);
  } else if (G(e)) ii(i, e.bind(n));
  else if (at(e))
    if (K(e)) e.forEach((r) => Tl(r, t, n, s));
    else {
      const r = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(r) && ii(i, r, e);
    }
}
function Al(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = r.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !i.length && !n && !s
      ? (l = t)
      : ((l = {}), i.length && i.forEach((u) => As(l, u, o, !0)), As(l, t, o)),
    at(t) && r.set(t, l),
    l
  );
}
function As(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && As(e, r, n, !0), i && i.forEach((o) => As(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const a = iu[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const iu = {
  data: Ro,
  props: Mo,
  emits: Mo,
  methods: Dn,
  computed: Dn,
  beforeCreate: mt,
  created: mt,
  beforeMount: mt,
  mounted: mt,
  beforeUpdate: mt,
  updated: mt,
  beforeDestroy: mt,
  beforeUnmount: mt,
  destroyed: mt,
  unmounted: mt,
  activated: mt,
  deactivated: mt,
  errorCaptured: mt,
  serverPrefetch: mt,
  components: Dn,
  directives: Dn,
  watch: ru,
  provide: Ro,
  inject: ou,
};
function Ro(e, t) {
  return t
    ? e
      ? function () {
          return At(
            G(e) ? e.call(this, this) : e,
            G(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function ou(e, t) {
  return Dn(Di(e), Di(t));
}
function Di(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function mt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Dn(e, t) {
  return e ? At(Object.create(null), e, t) : t;
}
function Mo(e, t) {
  return e
    ? K(e) && K(t)
      ? [...new Set([...e, ...t])]
      : At(Object.create(null), Lo(e), Lo(t ?? {}))
    : t;
}
function ru(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(Object.create(null), e);
  for (const s in t) n[s] = mt(e[s], t[s]);
  return n;
}
function wl() {
  return {
    app: null,
    config: {
      isNativeTag: za,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let lu = 0;
function au(e, t) {
  return function (s, i = null) {
    G(s) || (s = At({}, s)), i != null && !at(i) && (i = null);
    const r = wl(),
      o = new WeakSet(),
      a = [];
    let l = !1;
    const u = (r.app = {
      _uid: lu++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Wu,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...g) {
        return (
          o.has(c) ||
            (c && G(c.install)
              ? (o.add(c), c.install(u, ...g))
              : G(c) && (o.add(c), c(u, ...g))),
          u
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u;
      },
      component(c, g) {
        return g ? ((r.components[c] = g), u) : r.components[c];
      },
      directive(c, g) {
        return g ? ((r.directives[c] = g), u) : r.directives[c];
      },
      mount(c, g, v) {
        if (!l) {
          const m = u._ceVNode || oe(s, i);
          return (
            (m.appContext = r),
            v === !0 ? (v = "svg") : v === !1 && (v = void 0),
            e(m, c, v),
            (l = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            Ws(m.component)
          );
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l &&
          (ce(a, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, g) {
        return (r.provides[c] = g), u;
      },
      runWithContext(c) {
        const g = dn;
        dn = u;
        try {
          return c();
        } finally {
          dn = g;
        }
      },
    });
    return u;
  };
}
let dn = null;
function cu(e, t) {
  if (Et) {
    let n = Et.provides;
    const s = Et.parent && Et.parent.provides;
    s === n && (n = Et.provides = Object.create(s)), (n[e] = t);
  }
}
function ds(e, t, n = !1) {
  const s = Et || Ht;
  if (s || dn) {
    const i = dn
      ? dn._context.provides
      : s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && G(t) ? t.call(s && s.proxy) : t;
  }
}
const Cl = {},
  Ol = () => Object.create(Cl),
  Sl = (e) => Object.getPrototypeOf(e) === Cl;
function uu(e, t, n, s = !1) {
  const i = {},
    r = Ol();
  (e.propsDefaults = Object.create(null)), Nl(e, t, i, r);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (e.props = s ? i : Sc(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r);
}
function fu(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    a = et(i),
    [l] = e.propsOptions;
  let u = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        let v = c[g];
        if (Hs(e.emitsOptions, v)) continue;
        const m = t[v];
        if (l)
          if (nt(r, v)) m !== r[v] && ((r[v] = m), (u = !0));
          else {
            const D = Oe(v);
            i[D] = Li(l, a, D, m, e, !1);
          }
        else m !== r[v] && ((r[v] = m), (u = !0));
      }
    }
  } else {
    Nl(e, t, i, r) && (u = !0);
    let c;
    for (const g in a)
      (!t || (!nt(t, g) && ((c = qe(g)) === g || !nt(t, c)))) &&
        (l
          ? n &&
            (n[g] !== void 0 || n[c] !== void 0) &&
            (i[g] = Li(l, a, g, void 0, e, !0))
          : delete i[g]);
    if (r !== a)
      for (const g in r) (!t || !nt(t, g)) && (delete r[g], (u = !0));
  }
  u && pe(e.attrs, "set", "");
}
function Nl(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (Ln(l)) continue;
      const u = t[l];
      let c;
      i && nt(i, (c = Oe(l)))
        ? !r || !r.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : Hs(e.emitsOptions, l) ||
          ((!(l in s) || u !== s[l]) && ((s[l] = u), (o = !0)));
    }
  if (r) {
    const l = et(n),
      u = a || ot;
    for (let c = 0; c < r.length; c++) {
      const g = r[c];
      n[g] = Li(i, l, g, u[g], e, !nt(u, g));
    }
  }
  return o;
}
function Li(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const a = nt(o, "default");
    if (a && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && G(l)) {
        const { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          const c = qn(i);
          (s = u[n] = l.call(null, t)), c();
        }
      } else s = l;
      i.ce && i.ce._setProp(n, s);
    }
    o[0] &&
      (r && !a ? (s = !1) : o[1] && (s === "" || s === qe(n)) && (s = !0));
  }
  return s;
}
const du = new WeakMap();
function xl(e, t, n = !1) {
  const s = n ? du : t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!G(e)) {
    const c = (g) => {
      l = !0;
      const [v, m] = xl(g, t, !0);
      At(o, v), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l) return at(e) && s.set(e, an), an;
  if (K(r))
    for (let c = 0; c < r.length; c++) {
      const g = Oe(r[c]);
      Po(g) && (o[g] = ot);
    }
  else if (r)
    for (const c in r) {
      const g = Oe(c);
      if (Po(g)) {
        const v = r[c],
          m = (o[g] = K(v) || G(v) ? { type: v } : At({}, v)),
          D = m.type;
        let T = !1,
          w = !0;
        if (K(D))
          for (let P = 0; P < D.length; ++P) {
            const A = D[P],
              d = G(A) && A.name;
            if (d === "Boolean") {
              T = !0;
              break;
            } else d === "String" && (w = !1);
          }
        else T = G(D) && D.name === "Boolean";
        (m[0] = T), (m[1] = w), (T || nt(m, "default")) && a.push(g);
      }
    }
  const u = [o, a];
  return at(e) && s.set(e, u), u;
}
function Po(e) {
  return e[0] !== "$" && !Ln(e);
}
const $l = (e) => e[0] === "_" || e === "$stable",
  so = (e) => (K(e) ? e.map(se) : [se(e)]),
  hu = (e, t, n) => {
    if (t._n) return t;
    const s = Vc((...i) => so(t(...i)), n);
    return (s._c = !1), s;
  },
  Dl = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if ($l(i)) continue;
      const r = e[i];
      if (G(r)) t[i] = hu(i, r, s);
      else if (r != null) {
        const o = so(r);
        t[i] = () => o;
      }
    }
  },
  Ll = (e, t) => {
    const n = so(t);
    e.slots.default = () => n;
  },
  Il = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  pu = (e, t, n) => {
    const s = (e.slots = Ol());
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (Il(s, t, n), n && Yr(s, "_", i, !0)) : Dl(t, s);
    } else t && Ll(e, t);
  },
  gu = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      o = ot;
    if (s.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (r = !1)
          : Il(i, t, n)
        : ((r = !t.$stable), Dl(t, i)),
        (o = t);
    } else t && (Ll(e, t), (o = { default: 1 }));
    if (r) for (const a in i) !$l(a) && o[a] == null && delete i[a];
  },
  Dt = xu;
function _u(e) {
  return mu(e);
}
function mu(e, t) {
  const n = Rs();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: g,
      nextSibling: v,
      setScopeId: m = ie,
      insertStaticContent: D,
    } = e,
    T = (
      f,
      h,
      b,
      $ = null,
      y = null,
      N = null,
      R = void 0,
      I = null,
      L = !!h.dynamicChildren
    ) => {
      if (f === h) return;
      f && !Sn(f, h) && (($ = zt(f)), dt(f, y, N, !0), (f = null)),
        h.patchFlag === -2 && ((L = !1), (h.dynamicChildren = null));
      const { type: x, ref: H, shapeFlag: M } = h;
      switch (x) {
        case Fs:
          w(f, h, b, $);
          break;
        case Ue:
          P(f, h, b, $);
          break;
        case oi:
          f == null && A(h, b, $, R);
          break;
        case It:
          F(f, h, b, $, y, N, R, I, L);
          break;
        default:
          M & 1
            ? E(f, h, b, $, y, N, R, I, L)
            : M & 6
            ? ct(f, h, b, $, y, N, R, I, L)
            : (M & 64 || M & 128) && x.process(f, h, b, $, y, N, R, I, L, S);
      }
      H != null && y && Ts(H, f && f.ref, N, h || f, !h);
    },
    w = (f, h, b, $) => {
      if (f == null) s((h.el = a(h.children)), b, $);
      else {
        const y = (h.el = f.el);
        h.children !== f.children && u(y, h.children);
      }
    },
    P = (f, h, b, $) => {
      f == null ? s((h.el = l(h.children || "")), b, $) : (h.el = f.el);
    },
    A = (f, h, b, $) => {
      [f.el, f.anchor] = D(f.children, h, b, $, f.el, f.anchor);
    },
    d = ({ el: f, anchor: h }, b, $) => {
      let y;
      for (; f && f !== h; ) (y = v(f)), s(f, b, $), (f = y);
      s(h, b, $);
    },
    p = ({ el: f, anchor: h }) => {
      let b;
      for (; f && f !== h; ) (b = v(f)), i(f), (f = b);
      i(h);
    },
    E = (f, h, b, $, y, N, R, I, L) => {
      h.type === "svg" ? (R = "svg") : h.type === "math" && (R = "mathml"),
        f == null ? k(h, b, $, y, N, R, I, L) : q(f, h, y, N, R, I, L);
    },
    k = (f, h, b, $, y, N, R, I) => {
      let L, x;
      const { props: H, shapeFlag: M, transition: j, dirs: B } = f;
      if (
        ((L = f.el = o(f.type, N, H && H.is, H)),
        M & 8
          ? c(L, f.children)
          : M & 16 && z(f.children, L, null, $, y, si(f, N), R, I),
        B && Me(f, null, $, "created"),
        W(L, f, f.scopeId, R, $),
        H)
      ) {
        for (const it in H)
          it !== "value" && !Ln(it) && r(L, it, null, H[it], N, $);
        "value" in H && r(L, "value", null, H.value, N),
          (x = H.onVnodeBeforeMount) && ee(x, $, f);
      }
      B && Me(f, null, $, "beforeMount");
      const Q = bu(y, j);
      Q && j.beforeEnter(L),
        s(L, h, b),
        ((x = H && H.onVnodeMounted) || Q || B) &&
          Dt(() => {
            x && ee(x, $, f), Q && j.enter(L), B && Me(f, null, $, "mounted");
          }, y);
    },
    W = (f, h, b, $, y) => {
      if ((b && m(f, b), $)) for (let N = 0; N < $.length; N++) m(f, $[N]);
      if (y) {
        let N = y.subTree;
        if (
          h === N ||
          (Vl(N.type) && (N.ssContent === h || N.ssFallback === h))
        ) {
          const R = y.vnode;
          W(f, R, R.scopeId, R.slotScopeIds, y.parent);
        }
      }
    },
    z = (f, h, b, $, y, N, R, I, L = 0) => {
      for (let x = L; x < f.length; x++) {
        const H = (f[x] = I ? we(f[x]) : se(f[x]));
        T(null, H, h, b, $, y, N, R, I);
      }
    },
    q = (f, h, b, $, y, N, R) => {
      const I = (h.el = f.el);
      let { patchFlag: L, dynamicChildren: x, dirs: H } = h;
      L |= f.patchFlag & 16;
      const M = f.props || ot,
        j = h.props || ot;
      let B;
      if (
        (b && Pe(b, !1),
        (B = j.onVnodeBeforeUpdate) && ee(B, b, h, f),
        H && Me(h, f, b, "beforeUpdate"),
        b && Pe(b, !0),
        ((M.innerHTML && j.innerHTML == null) ||
          (M.textContent && j.textContent == null)) &&
          c(I, ""),
        x
          ? st(f.dynamicChildren, x, I, b, $, si(h, y), N)
          : R || J(f, h, I, null, b, $, si(h, y), N, !1),
        L > 0)
      ) {
        if (L & 16) rt(I, M, j, b, y);
        else if (
          (L & 2 && M.class !== j.class && r(I, "class", null, j.class, y),
          L & 4 && r(I, "style", M.style, j.style, y),
          L & 8)
        ) {
          const Q = h.dynamicProps;
          for (let it = 0; it < Q.length; it++) {
            const Z = Q[it],
              xt = M[Z],
              wt = j[Z];
            (wt !== xt || Z === "value") && r(I, Z, xt, wt, y, b);
          }
        }
        L & 1 && f.children !== h.children && c(I, h.children);
      } else !R && x == null && rt(I, M, j, b, y);
      ((B = j.onVnodeUpdated) || H) &&
        Dt(() => {
          B && ee(B, b, h, f), H && Me(h, f, b, "updated");
        }, $);
    },
    st = (f, h, b, $, y, N, R) => {
      for (let I = 0; I < h.length; I++) {
        const L = f[I],
          x = h[I],
          H =
            L.el && (L.type === It || !Sn(L, x) || L.shapeFlag & 70)
              ? g(L.el)
              : b;
        T(L, x, H, null, $, y, N, R, !0);
      }
    },
    rt = (f, h, b, $, y) => {
      if (h !== b) {
        if (h !== ot)
          for (const N in h) !Ln(N) && !(N in b) && r(f, N, h[N], null, y, $);
        for (const N in b) {
          if (Ln(N)) continue;
          const R = b[N],
            I = h[N];
          R !== I && N !== "value" && r(f, N, I, R, y, $);
        }
        "value" in b && r(f, "value", h.value, b.value, y);
      }
    },
    F = (f, h, b, $, y, N, R, I, L) => {
      const x = (h.el = f ? f.el : a("")),
        H = (h.anchor = f ? f.anchor : a(""));
      let { patchFlag: M, dynamicChildren: j, slotScopeIds: B } = h;
      B && (I = I ? I.concat(B) : B),
        f == null
          ? (s(x, b, $), s(H, b, $), z(h.children || [], b, H, y, N, R, I, L))
          : M > 0 && M & 64 && j && f.dynamicChildren
          ? (st(f.dynamicChildren, j, b, y, N, R, I),
            (h.key != null || (y && h === y.subTree)) && Rl(f, h, !0))
          : J(f, h, b, H, y, N, R, I, L);
    },
    ct = (f, h, b, $, y, N, R, I, L) => {
      (h.slotScopeIds = I),
        f == null
          ? h.shapeFlag & 512
            ? y.ctx.activate(h, b, $, R, L)
            : Ot(h, b, $, y, N, R, L)
          : jt(f, h, L);
    },
    Ot = (f, h, b, $, y, N, R) => {
      const I = (f.component = Pu(f, $, y));
      if ((vl(f) && (I.ctx.renderer = S), ku(I, !1, R), I.asyncDep)) {
        if ((y && y.registerDep(I, tt, R), !f.el)) {
          const L = (I.subTree = oe(Ue));
          P(null, L, h, b);
        }
      } else tt(I, f, h, b, y, N, R);
    },
    jt = (f, h, b) => {
      const $ = (h.component = f.component);
      if (Su(f, h, b))
        if ($.asyncDep && !$.asyncResolved) {
          X($, h, b);
          return;
        } else ($.next = h), $.update();
      else (h.el = f.el), ($.vnode = h);
    },
    tt = (f, h, b, $, y, N, R) => {
      const I = () => {
        if (f.isMounted) {
          let { next: M, bu: j, u: B, parent: Q, vnode: it } = f;
          {
            const Zt = Ml(f);
            if (Zt) {
              M && ((M.el = it.el), X(f, M, R)),
                Zt.asyncDep.then(() => {
                  f.isUnmounted || I();
                });
              return;
            }
          }
          let Z = M,
            xt;
          Pe(f, !1),
            M ? ((M.el = it.el), X(f, M, R)) : (M = it),
            j && fs(j),
            (xt = M.props && M.props.onVnodeBeforeUpdate) && ee(xt, Q, M, it),
            Pe(f, !0);
          const wt = jo(f),
            Jt = f.subTree;
          (f.subTree = wt),
            T(Jt, wt, g(Jt.el), zt(Jt), f, y, N),
            (M.el = wt.el),
            Z === null && Nu(f, wt.el),
            B && Dt(B, y),
            (xt = M.props && M.props.onVnodeUpdated) &&
              Dt(() => ee(xt, Q, M, it), y);
        } else {
          let M;
          const { el: j, props: B } = h,
            { bm: Q, m: it, parent: Z, root: xt, type: wt } = f,
            Jt = Mn(h);
          Pe(f, !1),
            Q && fs(Q),
            !Jt && (M = B && B.onVnodeBeforeMount) && ee(M, Z, h),
            Pe(f, !0);
          {
            xt.ce && xt.ce._injectChildStyle(wt);
            const Zt = (f.subTree = jo(f));
            T(null, Zt, b, $, f, y, N), (h.el = Zt.el);
          }
          if ((it && Dt(it, y), !Jt && (M = B && B.onVnodeMounted))) {
            const Zt = h;
            Dt(() => ee(M, Z, Zt), y);
          }
          (h.shapeFlag & 256 ||
            (Z && Mn(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
            f.a &&
            Dt(f.a, y),
            (f.isMounted = !0),
            (h = b = $ = null);
        }
      };
      f.scope.on();
      const L = (f.effect = new Xr(I));
      f.scope.off();
      const x = (f.update = L.run.bind(L)),
        H = (f.job = L.runIfDirty.bind(L));
      (H.i = f), (H.id = f.uid), (L.scheduler = () => eo(H)), Pe(f, !0), x();
    },
    X = (f, h, b) => {
      h.component = f;
      const $ = f.vnode.props;
      (f.vnode = h),
        (f.next = null),
        fu(f, h.props, $, b),
        gu(f, h.children, b),
        $e(),
        $o(f),
        De();
    },
    J = (f, h, b, $, y, N, R, I, L = !1) => {
      const x = f && f.children,
        H = f ? f.shapeFlag : 0,
        M = h.children,
        { patchFlag: j, shapeFlag: B } = h;
      if (j > 0) {
        if (j & 128) {
          Gt(x, M, b, $, y, N, R, I, L);
          return;
        } else if (j & 256) {
          ht(x, M, b, $, y, N, R, I, L);
          return;
        }
      }
      B & 8
        ? (H & 16 && Nt(x, y, N), M !== x && c(b, M))
        : H & 16
        ? B & 16
          ? Gt(x, M, b, $, y, N, R, I, L)
          : Nt(x, y, N, !0)
        : (H & 8 && c(b, ""), B & 16 && z(M, b, $, y, N, R, I, L));
    },
    ht = (f, h, b, $, y, N, R, I, L) => {
      (f = f || an), (h = h || an);
      const x = f.length,
        H = h.length,
        M = Math.min(x, H);
      let j;
      for (j = 0; j < M; j++) {
        const B = (h[j] = L ? we(h[j]) : se(h[j]));
        T(f[j], B, b, null, y, N, R, I, L);
      }
      x > H ? Nt(f, y, N, !0, !1, M) : z(h, b, $, y, N, R, I, L, M);
    },
    Gt = (f, h, b, $, y, N, R, I, L) => {
      let x = 0;
      const H = h.length;
      let M = f.length - 1,
        j = H - 1;
      for (; x <= M && x <= j; ) {
        const B = f[x],
          Q = (h[x] = L ? we(h[x]) : se(h[x]));
        if (Sn(B, Q)) T(B, Q, b, null, y, N, R, I, L);
        else break;
        x++;
      }
      for (; x <= M && x <= j; ) {
        const B = f[M],
          Q = (h[j] = L ? we(h[j]) : se(h[j]));
        if (Sn(B, Q)) T(B, Q, b, null, y, N, R, I, L);
        else break;
        M--, j--;
      }
      if (x > M) {
        if (x <= j) {
          const B = j + 1,
            Q = B < H ? h[B].el : $;
          for (; x <= j; )
            T(null, (h[x] = L ? we(h[x]) : se(h[x])), b, Q, y, N, R, I, L), x++;
        }
      } else if (x > j) for (; x <= M; ) dt(f[x], y, N, !0), x++;
      else {
        const B = x,
          Q = x,
          it = new Map();
        for (x = Q; x <= j; x++) {
          const $t = (h[x] = L ? we(h[x]) : se(h[x]));
          $t.key != null && it.set($t.key, x);
        }
        let Z,
          xt = 0;
        const wt = j - Q + 1;
        let Jt = !1,
          Zt = 0;
        const Cn = new Array(wt);
        for (x = 0; x < wt; x++) Cn[x] = 0;
        for (x = B; x <= M; x++) {
          const $t = f[x];
          if (xt >= wt) {
            dt($t, y, N, !0);
            continue;
          }
          let te;
          if ($t.key != null) te = it.get($t.key);
          else
            for (Z = Q; Z <= j; Z++)
              if (Cn[Z - Q] === 0 && Sn($t, h[Z])) {
                te = Z;
                break;
              }
          te === void 0
            ? dt($t, y, N, !0)
            : ((Cn[te - Q] = x + 1),
              te >= Zt ? (Zt = te) : (Jt = !0),
              T($t, h[te], b, null, y, N, R, I, L),
              xt++);
        }
        const wo = Jt ? vu(Cn) : an;
        for (Z = wo.length - 1, x = wt - 1; x >= 0; x--) {
          const $t = Q + x,
            te = h[$t],
            Co = $t + 1 < H ? h[$t + 1].el : $;
          Cn[x] === 0
            ? T(null, te, b, Co, y, N, R, I, L)
            : Jt && (Z < 0 || x !== wo[Z] ? St(te, b, Co, 2) : Z--);
        }
      }
    },
    St = (f, h, b, $, y = null) => {
      const { el: N, type: R, transition: I, children: L, shapeFlag: x } = f;
      if (x & 6) {
        St(f.component.subTree, h, b, $);
        return;
      }
      if (x & 128) {
        f.suspense.move(h, b, $);
        return;
      }
      if (x & 64) {
        R.move(f, h, b, S);
        return;
      }
      if (R === It) {
        s(N, h, b);
        for (let M = 0; M < L.length; M++) St(L[M], h, b, $);
        s(f.anchor, h, b);
        return;
      }
      if (R === oi) {
        d(f, h, b);
        return;
      }
      if ($ !== 2 && x & 1 && I)
        if ($ === 0) I.beforeEnter(N), s(N, h, b), Dt(() => I.enter(N), y);
        else {
          const { leave: M, delayLeave: j, afterLeave: B } = I,
            Q = () => s(N, h, b),
            it = () => {
              M(N, () => {
                Q(), B && B();
              });
            };
          j ? j(N, Q, it) : it();
        }
      else s(N, h, b);
    },
    dt = (f, h, b, $ = !1, y = !1) => {
      const {
        type: N,
        props: R,
        ref: I,
        children: L,
        dynamicChildren: x,
        shapeFlag: H,
        patchFlag: M,
        dirs: j,
        cacheIndex: B,
      } = f;
      if (
        (M === -2 && (y = !1),
        I != null && Ts(I, null, b, f, !0),
        B != null && (h.renderCache[B] = void 0),
        H & 256)
      ) {
        h.ctx.deactivate(f);
        return;
      }
      const Q = H & 1 && j,
        it = !Mn(f);
      let Z;
      if ((it && (Z = R && R.onVnodeBeforeUnmount) && ee(Z, h, f), H & 6))
        Vt(f.component, b, $);
      else {
        if (H & 128) {
          f.suspense.unmount(b, $);
          return;
        }
        Q && Me(f, null, h, "beforeUnmount"),
          H & 64
            ? f.type.remove(f, h, b, S, $)
            : x && !x.hasOnce && (N !== It || (M > 0 && M & 64))
            ? Nt(x, h, b, !1, !0)
            : ((N === It && M & 384) || (!y && H & 16)) && Nt(L, h, b),
          $ && fe(f);
      }
      ((it && (Z = R && R.onVnodeUnmounted)) || Q) &&
        Dt(() => {
          Z && ee(Z, h, f), Q && Me(f, null, h, "unmounted");
        }, b);
    },
    fe = (f) => {
      const { type: h, el: b, anchor: $, transition: y } = f;
      if (h === It) {
        Qt(b, $);
        return;
      }
      if (h === oi) {
        p(f);
        return;
      }
      const N = () => {
        i(b), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (f.shapeFlag & 1 && y && !y.persisted) {
        const { leave: R, delayLeave: I } = y,
          L = () => R(b, N);
        I ? I(f.el, N, L) : L();
      } else N();
    },
    Qt = (f, h) => {
      let b;
      for (; f !== h; ) (b = v(f)), i(f), (f = b);
      i(h);
    },
    Vt = (f, h, b) => {
      const { bum: $, scope: y, job: N, subTree: R, um: I, m: L, a: x } = f;
      ko(L),
        ko(x),
        $ && fs($),
        y.stop(),
        N && ((N.flags |= 8), dt(R, f, h, b)),
        I && Dt(I, h),
        Dt(() => {
          f.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    Nt = (f, h, b, $ = !1, y = !1, N = 0) => {
      for (let R = N; R < f.length; R++) dt(f[R], h, b, $, y);
    },
    zt = (f) => {
      if (f.shapeFlag & 6) return zt(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const h = v(f.anchor || f.el),
        b = h && h[Hc];
      return b ? v(b) : h;
    };
  let U = !1;
  const O = (f, h, b) => {
      f == null
        ? h._vnode && dt(h._vnode, null, null, !0)
        : T(h._vnode || null, f, h, null, null, null, b),
        (h._vnode = f),
        U || ((U = !0), $o(), gl(), (U = !1));
    },
    S = {
      p: T,
      um: dt,
      m: St,
      r: fe,
      mt: Ot,
      mc: z,
      pc: J,
      pbc: st,
      n: zt,
      o: e,
    };
  return { render: O, hydrate: void 0, createApp: au(O) };
}
function si({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Pe({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function bu(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Rl(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (K(s) && K(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let a = i[r];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[r] = we(i[r])), (a.el = o.el)),
        !n && a.patchFlag !== -2 && Rl(o, a)),
        a.type === Fs && (a.el = o.el);
    }
}
function vu(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, o, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        (a = (r + o) >> 1), e[n[a]] < u ? (r = a + 1) : (o = a);
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o]);
  return n;
}
function Ml(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ml(t);
}
function ko(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Eu = Symbol.for("v-scx"),
  yu = () => ds(Eu);
function ii(e, t, n) {
  return Pl(e, t, n);
}
function Pl(e, t, n = ot) {
  const { immediate: s, deep: i, flush: r, once: o } = n,
    a = At({}, n),
    l = (t && s) || (!t && r !== "post");
  let u;
  if (Kn) {
    if (r === "sync") {
      const m = yu();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {};
      return (m.stop = ie), (m.resume = ie), (m.pause = ie), m;
    }
  }
  const c = Et;
  a.call = (m, D, T) => ce(m, c, D, T);
  let g = !1;
  r === "post"
    ? (a.scheduler = (m) => {
        Dt(m, c && c.suspense);
      })
    : r !== "sync" &&
      ((g = !0),
      (a.scheduler = (m, D) => {
        D ? m() : eo(m);
      })),
    (a.augmentJob = (m) => {
      t && (m.flags |= 4),
        g && ((m.flags |= 2), c && ((m.id = c.uid), (m.i = c)));
    });
  const v = Mc(e, t, a);
  return Kn && (u ? u.push(v) : l && v()), v;
}
function Tu(e, t, n) {
  const s = this.proxy,
    i = ft(e) ? (e.includes(".") ? kl(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  G(t) ? (r = t) : ((r = t.handler), (n = t));
  const o = qn(this),
    a = Pl(i, r.bind(s), n);
  return o(), a;
}
function kl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
const Au = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Oe(t)}Modifiers`] || e[`${qe(t)}Modifiers`];
function wu(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ot;
  let i = n;
  const r = t.startsWith("update:"),
    o = r && Au(s, t.slice(7));
  o &&
    (o.trim && (i = n.map((c) => (ft(c) ? c.trim() : c))),
    o.number && (i = n.map(bs)));
  let a,
    l = s[(a = Qs(t))] || s[(a = Qs(Oe(t)))];
  !l && r && (l = s[(a = Qs(qe(t)))]), l && ce(l, e, 6, i);
  const u = s[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), ce(u, e, 6, i);
  }
}
function jl(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let o = {},
    a = !1;
  if (!G(e)) {
    const l = (u) => {
      const c = jl(u, t, !0);
      c && ((a = !0), At(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !r && !a
    ? (at(e) && s.set(e, null), null)
    : (K(r) ? r.forEach((l) => (o[l] = null)) : At(o, r),
      at(e) && s.set(e, o),
      o);
}
function Hs(e, t) {
  return !e || !Ds(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, qe(t)) || nt(e, t));
}
function jo(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: i,
      propsOptions: [r],
      slots: o,
      attrs: a,
      emit: l,
      render: u,
      renderCache: c,
      props: g,
      data: v,
      setupState: m,
      ctx: D,
      inheritAttrs: T,
    } = e,
    w = ys(e);
  let P, A;
  try {
    if (n.shapeFlag & 4) {
      const p = i || s,
        E = p;
      (P = se(u.call(E, p, c, g, m, v, D))), (A = a);
    } else {
      const p = t;
      (P = se(
        p.length > 1 ? p(g, { attrs: a, slots: o, emit: l }) : p(g, null)
      )),
        (A = t.props ? a : Cu(a));
    }
  } catch (p) {
    (kn.length = 0), ks(p, e, 1), (P = oe(Ue));
  }
  let d = P;
  if (A && T !== !1) {
    const p = Object.keys(A),
      { shapeFlag: E } = d;
    p.length &&
      E & 7 &&
      (r && p.some(Bi) && (A = Ou(A, r)), (d = pn(d, A, !1, !0)));
  }
  return (
    n.dirs &&
      ((d = pn(d, null, !1, !0)),
      (d.dirs = d.dirs ? d.dirs.concat(n.dirs) : n.dirs)),
    n.transition && no(d, n.transition),
    (P = d),
    ys(w),
    P
  );
}
const Cu = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ds(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ou = (e, t) => {
    const n = {};
    for (const s in e) (!Bi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Su(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: o, children: a, patchFlag: l } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? Vo(s, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        const v = c[g];
        if (o[v] !== s[v] && !Hs(u, v)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Vo(s, o, u)
        : !0
      : !!o;
  return !1;
}
function Vo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Hs(n, r)) return !0;
  }
  return !1;
}
function Nu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Vl = (e) => e.__isSuspense;
function xu(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : jc(e);
}
const It = Symbol.for("v-fgt"),
  Fs = Symbol.for("v-txt"),
  Ue = Symbol.for("v-cmt"),
  oi = Symbol.for("v-stc"),
  kn = [];
let Rt = null;
function vt(e = !1) {
  kn.push((Rt = e ? null : []));
}
function $u() {
  kn.pop(), (Rt = kn[kn.length - 1] || null);
}
let Bn = 1;
function Ho(e, t = !1) {
  (Bn += e), e < 0 && Rt && t && (Rt.hasOnce = !0);
}
function Hl(e) {
  return (
    (e.dynamicChildren = Bn > 0 ? Rt || an : null),
    $u(),
    Bn > 0 && Rt && Rt.push(e),
    e
  );
}
function _e(e, t, n, s, i, r) {
  return Hl(_(e, t, n, s, i, r, !0));
}
function nn(e, t, n, s, i) {
  return Hl(oe(e, t, n, s, i, !0));
}
function Fl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Sn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wl = ({ key: e }) => e ?? null,
  hs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ft(e) || _t(e) || G(e)
        ? { i: Ht, r: e, k: t, f: !!n }
        : e
      : null
  );
function _(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === It ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wl(t),
    ref: t && hs(t),
    scopeId: ml,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ht,
  };
  return (
    a
      ? (io(l, n), r & 128 && e.normalize(l))
      : n && (l.shapeFlag |= ft(n) ? 8 : 16),
    Bn > 0 &&
      !o &&
      Rt &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      Rt.push(l),
    l
  );
}
const oe = Du;
function Du(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === Zc) && (e = Ue), Fl(e))) {
    const a = pn(e, t, !0);
    return (
      n && io(a, n),
      Bn > 0 &&
        !r &&
        Rt &&
        (a.shapeFlag & 6 ? (Rt[Rt.indexOf(e)] = a) : Rt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((Fu(e) && (e = e.__vccOpts), t)) {
    t = Lu(t);
    let { class: a, style: l } = t;
    a && !ft(a) && (t.class = Gi(a)),
      at(l) && (to(l) && !K(l) && (l = At({}, l)), (t.style = Yi(l)));
  }
  const o = ft(e) ? 1 : Vl(e) ? 128 : Fc(e) ? 64 : at(e) ? 4 : G(e) ? 2 : 0;
  return _(e, t, n, s, i, o, r, !0);
}
function Lu(e) {
  return e ? (to(e) || Sl(e) ? At({}, e) : e) : null;
}
function pn(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: a, transition: l } = e,
    u = t ? Iu(i || {}, t) : i,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Wl(u),
      ref:
        t && t.ref
          ? n && r
            ? K(r)
              ? r.concat(hs(t))
              : [r, hs(t)]
            : hs(t)
          : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== It ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && pn(e.ssContent),
      ssFallback: e.ssFallback && pn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && s && no(c, l.clone(c)), c;
}
function Bl(e = " ", t = 0) {
  return oe(Fs, null, e, t);
}
function Nn(e = "", t = !1) {
  return t ? (vt(), nn(Ue, null, e)) : oe(Ue, null, e);
}
function se(e) {
  return e == null || typeof e == "boolean"
    ? oe(Ue)
    : K(e)
    ? oe(It, null, e.slice())
    : Fl(e)
    ? we(e)
    : oe(Fs, null, String(e));
}
function we(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : pn(e);
}
function io(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (K(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), io(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Sl(t)
        ? (t._ctx = Ht)
        : i === 3 &&
          Ht &&
          (Ht.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    G(t)
      ? ((t = { default: t, _ctx: Ht }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Bl(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Iu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Gi([t.class, s.class]));
      else if (i === "style") t.style = Yi([t.style, s.style]);
      else if (Ds(i)) {
        const r = t[i],
          o = s[i];
        o &&
          r !== o &&
          !(K(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function ee(e, t, n, s = null) {
  ce(e, t, 7, [n, s]);
}
const Ru = wl();
let Mu = 0;
function Pu(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || Ru,
    r = {
      uid: Mu++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new lc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: xl(s, i),
      emitsOptions: jl(s, i),
      emit: null,
      emitted: null,
      propsDefaults: ot,
      inheritAttrs: s.inheritAttrs,
      ctx: ot,
      data: ot,
      props: ot,
      attrs: ot,
      slots: ot,
      refs: ot,
      setupState: ot,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = wu.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let Et = null,
  ws,
  Ii;
{
  const e = Rs(),
    t = (n, s) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(s),
        (r) => {
          i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
        }
      );
    };
  (ws = t("__VUE_INSTANCE_SETTERS__", (n) => (Et = n))),
    (Ii = t("__VUE_SSR_SETTERS__", (n) => (Kn = n)));
}
const qn = (e) => {
    const t = Et;
    return (
      ws(e),
      e.scope.on(),
      () => {
        e.scope.off(), ws(t);
      }
    );
  },
  Fo = () => {
    Et && Et.scope.off(), ws(null);
  };
function Kl(e) {
  return e.vnode.shapeFlag & 4;
}
let Kn = !1;
function ku(e, t = !1, n = !1) {
  t && Ii(t);
  const { props: s, children: i } = e.vnode,
    r = Kl(e);
  uu(e, s, r, t), pu(e, i, n);
  const o = r ? ju(e, t) : void 0;
  return t && Ii(!1), o;
}
function ju(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, eu));
  const { setup: s } = n;
  if (s) {
    $e();
    const i = (e.setupContext = s.length > 1 ? Hu(e) : null),
      r = qn(e),
      o = zn(s, e, 0, [e.props, i]),
      a = Wr(o);
    if ((De(), r(), (a || e.sp) && !Mn(e) && bl(e), a)) {
      if ((o.then(Fo, Fo), t))
        return o
          .then((l) => {
            Wo(e, l);
          })
          .catch((l) => {
            ks(l, e, 0);
          });
      e.asyncDep = o;
    } else Wo(e, o);
  } else Ul(e);
}
function Wo(e, t, n) {
  G(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : at(t) && (e.setupState = fl(t)),
    Ul(e);
}
function Ul(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ie);
  {
    const i = qn(e);
    $e();
    try {
      nu(e);
    } finally {
      De(), i();
    }
  }
}
const Vu = {
  get(e, t) {
    return pt(e, "get", ""), e[t];
  },
};
function Hu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vu),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ws(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(fl(Nc(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Pn) return Pn[n](e);
          },
          has(t, n) {
            return n in t || n in Pn;
          },
        }))
    : e.proxy;
}
function Fu(e) {
  return G(e) && "__vccOpts" in e;
}
const Yl = (e, t) => Ic(e, t, Kn),
  Wu = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ri;
const Bo = typeof window < "u" && window.trustedTypes;
if (Bo)
  try {
    Ri = Bo.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Gl = Ri ? (e) => Ri.createHTML(e) : (e) => e,
  Bu = "http://www.w3.org/2000/svg",
  Ku = "http://www.w3.org/1998/Math/MathML",
  he = typeof document < "u" ? document : null,
  Ko = he && he.createElement("template"),
  Uu = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i =
        t === "svg"
          ? he.createElementNS(Bu, e)
          : t === "mathml"
          ? he.createElementNS(Ku, e)
          : n
          ? he.createElement(e, { is: n })
          : he.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => he.createTextNode(e),
    createComment: (e) => he.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => he.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, r) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        Ko.innerHTML = Gl(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = Ko.content;
        if (s === "svg" || s === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Yu = Symbol("_vtc");
function Gu(e, t, n) {
  const s = e[Yu];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Uo = Symbol("_vod"),
  zu = Symbol("_vsh"),
  qu = Symbol(""),
  Xu = /(^|;)\s*display\s*:/;
function Qu(e, t, n) {
  const s = e.style,
    i = ft(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ft(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && ps(s, a, "");
        }
      else for (const o in t) n[o] == null && ps(s, o, "");
    for (const o in n) o === "display" && (r = !0), ps(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[qu];
      o && (n += ";" + o), (s.cssText = n), (r = Xu.test(n));
    }
  } else t && e.removeAttribute("style");
  Uo in e && ((e[Uo] = r ? s.display : ""), e[zu] && (s.display = "none"));
}
const Yo = /\s*!important$/;
function ps(e, t, n) {
  if (K(n)) n.forEach((s) => ps(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Ju(e, t);
    Yo.test(n)
      ? e.setProperty(qe(s), n.replace(Yo, ""), "important")
      : (e[s] = n);
  }
}
const Go = ["Webkit", "Moz", "ms"],
  ri = {};
function Ju(e, t) {
  const n = ri[t];
  if (n) return n;
  let s = Oe(t);
  if (s !== "filter" && s in e) return (ri[t] = s);
  s = Ur(s);
  for (let i = 0; i < Go.length; i++) {
    const r = Go[i] + s;
    if (r in e) return (ri[t] = r);
  }
  return t;
}
const zo = "http://www.w3.org/1999/xlink";
function qo(e, t, n, s, i, r = ic(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(zo, t.slice(6, t.length))
      : e.setAttributeNS(zo, t, n)
    : n == null || (r && !Gr(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, r ? "" : ae(n) ? String(n) : n);
}
function Xo(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Gl(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (a !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Gr(n))
      : n == null && a === "string"
      ? ((n = ""), (o = !0))
      : a === "number" && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(i || t);
}
function je(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Zu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Qo = Symbol("_vei");
function tf(e, t, n, s, i = null) {
  const r = e[Qo] || (e[Qo] = {}),
    o = r[t];
  if (s && o) o.value = s;
  else {
    const [a, l] = ef(t);
    if (s) {
      const u = (r[t] = of(s, i));
      je(e, a, u, l);
    } else o && (Zu(e, a, o, l), (r[t] = void 0));
  }
}
const Jo = /(?:Once|Passive|Capture)$/;
function ef(e) {
  let t;
  if (Jo.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Jo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : qe(e.slice(2)), t];
}
let li = 0;
const nf = Promise.resolve(),
  sf = () => li || (nf.then(() => (li = 0)), (li = Date.now()));
function of(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ce(rf(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = sf()), n;
}
function rf(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const Zo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  lf = (e, t, n, s, i, r) => {
    const o = i === "svg";
    t === "class"
      ? Gu(e, s, o)
      : t === "style"
      ? Qu(e, n, s)
      : Ds(t)
      ? Bi(t) || tf(e, t, n, s, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : af(e, t, s, o)
        )
      ? (Xo(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          qo(e, t, s, o, r, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !ft(s))
      ? Xo(e, Oe(t), s, r, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        qo(e, t, s, o));
  };
function af(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Zo(t) && G(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Zo(t) && ft(n) ? !1 : t in e;
}
const Cs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => fs(t, n) : t;
};
function cf(e) {
  e.target.composing = !0;
}
function tr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const hn = Symbol("_assign"),
  uf = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e[hn] = Cs(i);
      const r = s || (i.props && i.props.type === "number");
      je(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), r && (a = bs(a)), e[hn](a);
      }),
        n &&
          je(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (je(e, "compositionstart", cf),
          je(e, "compositionend", tr),
          je(e, "change", tr));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } },
      o
    ) {
      if (((e[hn] = Cs(o)), e.composing)) return;
      const a =
          (r || e.type === "number") && !/^0\d/.test(e.value)
            ? bs(e.value)
            : e.value,
        l = t ?? "";
      a !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (i && e.value.trim() === l))) ||
          (e.value = l));
    },
  },
  ff = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const i = Ls(t);
      je(e, "change", () => {
        const r = Array.prototype.filter
          .call(e.options, (o) => o.selected)
          .map((o) => (n ? bs(Os(o)) : Os(o)));
        e[hn](e.multiple ? (i ? new Set(r) : r) : r[0]),
          (e._assigning = !0),
          hl(() => {
            e._assigning = !1;
          });
      }),
        (e[hn] = Cs(s));
    },
    mounted(e, { value: t }) {
      er(e, t);
    },
    beforeUpdate(e, t, n) {
      e[hn] = Cs(n);
    },
    updated(e, { value: t }) {
      e._assigning || er(e, t);
    },
  };
function er(e, t) {
  const n = e.multiple,
    s = K(t);
  if (!(n && !s && !Ls(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i],
        a = Os(o);
      if (n)
        if (s) {
          const l = typeof a;
          l === "string" || l === "number"
            ? (o.selected = t.some((u) => String(u) === String(a)))
            : (o.selected = rc(t, a) > -1);
        } else o.selected = t.has(a);
      else if (Ms(Os(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Os(e) {
  return "_value" in e ? e._value : e.value;
}
const df = At({ patchProp: lf }, Uu);
let nr;
function hf() {
  return nr || (nr = _u(df));
}
const pf = (...e) => {
  const t = hf().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = _f(s);
      if (!i) return;
      const r = t._component;
      !G(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
      const o = n(i, !1, gf(i));
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function gf(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _f(e) {
  return ft(e) ? document.querySelector(e) : e;
}
var yt = "top",
  Mt = "bottom",
  Pt = "right",
  Tt = "left",
  Bs = "auto",
  yn = [yt, Mt, Pt, Tt],
  Ye = "start",
  gn = "end",
  zl = "clippingParents",
  oo = "viewport",
  sn = "popper",
  ql = "reference",
  Mi = yn.reduce(function (e, t) {
    return e.concat([t + "-" + Ye, t + "-" + gn]);
  }, []),
  ro = [].concat(yn, [Bs]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Ye, t + "-" + gn]);
  }, []),
  Xl = "beforeRead",
  Ql = "read",
  Jl = "afterRead",
  Zl = "beforeMain",
  ta = "main",
  ea = "afterMain",
  na = "beforeWrite",
  sa = "write",
  ia = "afterWrite",
  oa = [Xl, Ql, Jl, Zl, ta, ea, na, sa, ia];
function ue(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function kt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ge(e) {
  var t = kt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Bt(e) {
  var t = kt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function lo(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = kt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function mf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var s = t.styles[n] || {},
      i = t.attributes[n] || {},
      r = t.elements[n];
    !Bt(r) ||
      !ue(r) ||
      (Object.assign(r.style, s),
      Object.keys(i).forEach(function (o) {
        var a = i[o];
        a === !1 ? r.removeAttribute(o) : r.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function bf(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (s) {
        var i = t.elements[s],
          r = t.attributes[s] || {},
          o = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]),
          a = o.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !Bt(i) ||
          !ue(i) ||
          (Object.assign(i.style, a),
          Object.keys(r).forEach(function (l) {
            i.removeAttribute(l);
          }));
      });
    }
  );
}
const ao = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: mf,
  effect: bf,
  requires: ["computeStyles"],
};
function re(e) {
  return e.split("-")[0];
}
var Be = Math.max,
  Ss = Math.min,
  _n = Math.round;
function Pi() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function ra() {
  return !/^((?!chrome|android).)*safari/i.test(Pi());
}
function mn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(),
    i = 1,
    r = 1;
  t &&
    Bt(e) &&
    ((i = (e.offsetWidth > 0 && _n(s.width) / e.offsetWidth) || 1),
    (r = (e.offsetHeight > 0 && _n(s.height) / e.offsetHeight) || 1));
  var o = Ge(e) ? kt(e) : window,
    a = o.visualViewport,
    l = !ra() && n,
    u = (s.left + (l && a ? a.offsetLeft : 0)) / i,
    c = (s.top + (l && a ? a.offsetTop : 0)) / r,
    g = s.width / i,
    v = s.height / r;
  return {
    width: g,
    height: v,
    top: c,
    right: u + g,
    bottom: c + v,
    left: u,
    x: u,
    y: c,
  };
}
function co(e) {
  var t = mn(e),
    n = e.offsetWidth,
    s = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - s) <= 1 && (s = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: s }
  );
}
function la(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && lo(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s)) return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function ve(e) {
  return kt(e).getComputedStyle(e);
}
function vf(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function Le(e) {
  return ((Ge(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Ks(e) {
  return ue(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (lo(e) ? e.host : null) || Le(e);
}
function sr(e) {
  return !Bt(e) || ve(e).position === "fixed" ? null : e.offsetParent;
}
function Ef(e) {
  var t = /firefox/i.test(Pi()),
    n = /Trident/i.test(Pi());
  if (n && Bt(e)) {
    var s = ve(e);
    if (s.position === "fixed") return null;
  }
  var i = Ks(e);
  for (lo(i) && (i = i.host); Bt(i) && ["html", "body"].indexOf(ue(i)) < 0; ) {
    var r = ve(i);
    if (
      r.transform !== "none" ||
      r.perspective !== "none" ||
      r.contain === "paint" ||
      ["transform", "perspective"].indexOf(r.willChange) !== -1 ||
      (t && r.willChange === "filter") ||
      (t && r.filter && r.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function Xn(e) {
  for (var t = kt(e), n = sr(e); n && vf(n) && ve(n).position === "static"; )
    n = sr(n);
  return n &&
    (ue(n) === "html" || (ue(n) === "body" && ve(n).position === "static"))
    ? t
    : n || Ef(e) || t;
}
function uo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function jn(e, t, n) {
  return Be(e, Ss(t, n));
}
function yf(e, t, n) {
  var s = jn(e, t, n);
  return s > n ? n : s;
}
function aa() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ca(e) {
  return Object.assign({}, aa(), e);
}
function ua(e, t) {
  return t.reduce(function (n, s) {
    return (n[s] = e), n;
  }, {});
}
var Tf = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    ca(typeof t != "number" ? t : ua(t, yn))
  );
};
function Af(e) {
  var t,
    n = e.state,
    s = e.name,
    i = e.options,
    r = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = re(n.placement),
    l = uo(a),
    u = [Tt, Pt].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!r || !o)) {
    var g = Tf(i.padding, n),
      v = co(r),
      m = l === "y" ? yt : Tt,
      D = l === "y" ? Mt : Pt,
      T =
        n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c],
      w = o[l] - n.rects.reference[l],
      P = Xn(r),
      A = P ? (l === "y" ? P.clientHeight || 0 : P.clientWidth || 0) : 0,
      d = T / 2 - w / 2,
      p = g[m],
      E = A - v[c] - g[D],
      k = A / 2 - v[c] / 2 + d,
      W = jn(p, k, E),
      z = l;
    n.modifiersData[s] = ((t = {}), (t[z] = W), (t.centerOffset = W - k), t);
  }
}
function wf(e) {
  var t = e.state,
    n = e.options,
    s = n.element,
    i = s === void 0 ? "[data-popper-arrow]" : s;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (la(t.elements.popper, i) && (t.elements.arrow = i)));
}
const fa = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Af,
  effect: wf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function bn(e) {
  return e.split("-")[1];
}
var Cf = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Of(e, t) {
  var n = e.x,
    s = e.y,
    i = t.devicePixelRatio || 1;
  return { x: _n(n * i) / i || 0, y: _n(s * i) / i || 0 };
}
function ir(e) {
  var t,
    n = e.popper,
    s = e.popperRect,
    i = e.placement,
    r = e.variation,
    o = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    g = e.isFixed,
    v = o.x,
    m = v === void 0 ? 0 : v,
    D = o.y,
    T = D === void 0 ? 0 : D,
    w = typeof c == "function" ? c({ x: m, y: T }) : { x: m, y: T };
  (m = w.x), (T = w.y);
  var P = o.hasOwnProperty("x"),
    A = o.hasOwnProperty("y"),
    d = Tt,
    p = yt,
    E = window;
  if (u) {
    var k = Xn(n),
      W = "clientHeight",
      z = "clientWidth";
    if (
      (k === kt(n) &&
        ((k = Le(n)),
        ve(k).position !== "static" &&
          a === "absolute" &&
          ((W = "scrollHeight"), (z = "scrollWidth"))),
      (k = k),
      i === yt || ((i === Tt || i === Pt) && r === gn))
    ) {
      p = Mt;
      var q = g && k === E && E.visualViewport ? E.visualViewport.height : k[W];
      (T -= q - s.height), (T *= l ? 1 : -1);
    }
    if (i === Tt || ((i === yt || i === Mt) && r === gn)) {
      d = Pt;
      var st = g && k === E && E.visualViewport ? E.visualViewport.width : k[z];
      (m -= st - s.width), (m *= l ? 1 : -1);
    }
  }
  var rt = Object.assign({ position: a }, u && Cf),
    F = c === !0 ? Of({ x: m, y: T }, kt(n)) : { x: m, y: T };
  if (((m = F.x), (T = F.y), l)) {
    var ct;
    return Object.assign(
      {},
      rt,
      ((ct = {}),
      (ct[p] = A ? "0" : ""),
      (ct[d] = P ? "0" : ""),
      (ct.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + m + "px, " + T + "px)"
          : "translate3d(" + m + "px, " + T + "px, 0)"),
      ct)
    );
  }
  return Object.assign(
    {},
    rt,
    ((t = {}),
    (t[p] = A ? T + "px" : ""),
    (t[d] = P ? m + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function Sf(e) {
  var t = e.state,
    n = e.options,
    s = n.gpuAcceleration,
    i = s === void 0 ? !0 : s,
    r = n.adaptive,
    o = r === void 0 ? !0 : r,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: re(t.placement),
      variation: bn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ir(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ir(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const fo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Sf,
  data: {},
};
var is = { passive: !0 };
function Nf(e) {
  var t = e.state,
    n = e.instance,
    s = e.options,
    i = s.scroll,
    r = i === void 0 ? !0 : i,
    o = s.resize,
    a = o === void 0 ? !0 : o,
    l = kt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    r &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, is);
      }),
    a && l.addEventListener("resize", n.update, is),
    function () {
      r &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, is);
        }),
        a && l.removeEventListener("resize", n.update, is);
    }
  );
}
const ho = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Nf,
  data: {},
};
var xf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gs(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return xf[t];
  });
}
var $f = { start: "end", end: "start" };
function or(e) {
  return e.replace(/start|end/g, function (t) {
    return $f[t];
  });
}
function po(e) {
  var t = kt(e),
    n = t.pageXOffset,
    s = t.pageYOffset;
  return { scrollLeft: n, scrollTop: s };
}
function go(e) {
  return mn(Le(e)).left + po(e).scrollLeft;
}
function Df(e, t) {
  var n = kt(e),
    s = Le(e),
    i = n.visualViewport,
    r = s.clientWidth,
    o = s.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (r = i.width), (o = i.height);
    var u = ra();
    (u || (!u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: r, height: o, x: a + go(e), y: l };
}
function Lf(e) {
  var t,
    n = Le(e),
    s = po(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    r = Be(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    o = Be(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    ),
    a = -s.scrollLeft + go(e),
    l = -s.scrollTop;
  return (
    ve(i || n).direction === "rtl" &&
      (a += Be(n.clientWidth, i ? i.clientWidth : 0) - r),
    { width: r, height: o, x: a, y: l }
  );
}
function _o(e) {
  var t = ve(e),
    n = t.overflow,
    s = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + s);
}
function da(e) {
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0
    ? e.ownerDocument.body
    : Bt(e) && _o(e)
    ? e
    : da(Ks(e));
}
function Vn(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = da(e),
    i = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    r = kt(s),
    o = i ? [r].concat(r.visualViewport || [], _o(s) ? s : []) : s,
    a = t.concat(o);
  return i ? a : a.concat(Vn(Ks(o)));
}
function ki(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function If(e, t) {
  var n = mn(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function rr(e, t, n) {
  return t === oo ? ki(Df(e, n)) : Ge(t) ? If(t, n) : ki(Lf(Le(e)));
}
function Rf(e) {
  var t = Vn(Ks(e)),
    n = ["absolute", "fixed"].indexOf(ve(e).position) >= 0,
    s = n && Bt(e) ? Xn(e) : e;
  return Ge(s)
    ? t.filter(function (i) {
        return Ge(i) && la(i, s) && ue(i) !== "body";
      })
    : [];
}
function Mf(e, t, n, s) {
  var i = t === "clippingParents" ? Rf(e) : [].concat(t),
    r = [].concat(i, [n]),
    o = r[0],
    a = r.reduce(function (l, u) {
      var c = rr(e, u, s);
      return (
        (l.top = Be(c.top, l.top)),
        (l.right = Ss(c.right, l.right)),
        (l.bottom = Ss(c.bottom, l.bottom)),
        (l.left = Be(c.left, l.left)),
        l
      );
    }, rr(e, o, s));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function ha(e) {
  var t = e.reference,
    n = e.element,
    s = e.placement,
    i = s ? re(s) : null,
    r = s ? bn(s) : null,
    o = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (i) {
    case yt:
      l = { x: o, y: t.y - n.height };
      break;
    case Mt:
      l = { x: o, y: t.y + t.height };
      break;
    case Pt:
      l = { x: t.x + t.width, y: a };
      break;
    case Tt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = i ? uo(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (r) {
      case Ye:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case gn:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function vn(e, t) {
  t === void 0 && (t = {});
  var n = t,
    s = n.placement,
    i = s === void 0 ? e.placement : s,
    r = n.strategy,
    o = r === void 0 ? e.strategy : r,
    a = n.boundary,
    l = a === void 0 ? zl : a,
    u = n.rootBoundary,
    c = u === void 0 ? oo : u,
    g = n.elementContext,
    v = g === void 0 ? sn : g,
    m = n.altBoundary,
    D = m === void 0 ? !1 : m,
    T = n.padding,
    w = T === void 0 ? 0 : T,
    P = ca(typeof w != "number" ? w : ua(w, yn)),
    A = v === sn ? ql : sn,
    d = e.rects.popper,
    p = e.elements[D ? A : v],
    E = Mf(Ge(p) ? p : p.contextElement || Le(e.elements.popper), l, c, o),
    k = mn(e.elements.reference),
    W = ha({ reference: k, element: d, strategy: "absolute", placement: i }),
    z = ki(Object.assign({}, d, W)),
    q = v === sn ? z : k,
    st = {
      top: E.top - q.top + P.top,
      bottom: q.bottom - E.bottom + P.bottom,
      left: E.left - q.left + P.left,
      right: q.right - E.right + P.right,
    },
    rt = e.modifiersData.offset;
  if (v === sn && rt) {
    var F = rt[i];
    Object.keys(st).forEach(function (ct) {
      var Ot = [Pt, Mt].indexOf(ct) >= 0 ? 1 : -1,
        jt = [yt, Mt].indexOf(ct) >= 0 ? "y" : "x";
      st[ct] += F[jt] * Ot;
    });
  }
  return st;
}
function Pf(e, t) {
  t === void 0 && (t = {});
  var n = t,
    s = n.placement,
    i = n.boundary,
    r = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? ro : l,
    c = bn(s),
    g = c
      ? a
        ? Mi
        : Mi.filter(function (D) {
            return bn(D) === c;
          })
      : yn,
    v = g.filter(function (D) {
      return u.indexOf(D) >= 0;
    });
  v.length === 0 && (v = g);
  var m = v.reduce(function (D, T) {
    return (
      (D[T] = vn(e, { placement: T, boundary: i, rootBoundary: r, padding: o })[
        re(T)
      ]),
      D
    );
  }, {});
  return Object.keys(m).sort(function (D, T) {
    return m[D] - m[T];
  });
}
function kf(e) {
  if (re(e) === Bs) return [];
  var t = gs(e);
  return [or(e), t, or(t)];
}
function jf(e) {
  var t = e.state,
    n = e.options,
    s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (
      var i = n.mainAxis,
        r = i === void 0 ? !0 : i,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        g = n.rootBoundary,
        v = n.altBoundary,
        m = n.flipVariations,
        D = m === void 0 ? !0 : m,
        T = n.allowedAutoPlacements,
        w = t.options.placement,
        P = re(w),
        A = P === w,
        d = l || (A || !D ? [gs(w)] : kf(w)),
        p = [w].concat(d).reduce(function (Qt, Vt) {
          return Qt.concat(
            re(Vt) === Bs
              ? Pf(t, {
                  placement: Vt,
                  boundary: c,
                  rootBoundary: g,
                  padding: u,
                  flipVariations: D,
                  allowedAutoPlacements: T,
                })
              : Vt
          );
        }, []),
        E = t.rects.reference,
        k = t.rects.popper,
        W = new Map(),
        z = !0,
        q = p[0],
        st = 0;
      st < p.length;
      st++
    ) {
      var rt = p[st],
        F = re(rt),
        ct = bn(rt) === Ye,
        Ot = [yt, Mt].indexOf(F) >= 0,
        jt = Ot ? "width" : "height",
        tt = vn(t, {
          placement: rt,
          boundary: c,
          rootBoundary: g,
          altBoundary: v,
          padding: u,
        }),
        X = Ot ? (ct ? Pt : Tt) : ct ? Mt : yt;
      E[jt] > k[jt] && (X = gs(X));
      var J = gs(X),
        ht = [];
      if (
        (r && ht.push(tt[F] <= 0),
        a && ht.push(tt[X] <= 0, tt[J] <= 0),
        ht.every(function (Qt) {
          return Qt;
        }))
      ) {
        (q = rt), (z = !1);
        break;
      }
      W.set(rt, ht);
    }
    if (z)
      for (
        var Gt = D ? 3 : 1,
          St = function (Vt) {
            var Nt = p.find(function (zt) {
              var U = W.get(zt);
              if (U)
                return U.slice(0, Vt).every(function (O) {
                  return O;
                });
            });
            if (Nt) return (q = Nt), "break";
          },
          dt = Gt;
        dt > 0;
        dt--
      ) {
        var fe = St(dt);
        if (fe === "break") break;
      }
    t.placement !== q &&
      ((t.modifiersData[s]._skip = !0), (t.placement = q), (t.reset = !0));
  }
}
const pa = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jf,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function lr(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function ar(e) {
  return [yt, Pt, Mt, Tt].some(function (t) {
    return e[t] >= 0;
  });
}
function Vf(e) {
  var t = e.state,
    n = e.name,
    s = t.rects.reference,
    i = t.rects.popper,
    r = t.modifiersData.preventOverflow,
    o = vn(t, { elementContext: "reference" }),
    a = vn(t, { altBoundary: !0 }),
    l = lr(o, s),
    u = lr(a, i, r),
    c = ar(l),
    g = ar(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: g,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": g,
    }));
}
const ga = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Vf,
};
function Hf(e, t, n) {
  var s = re(e),
    i = [Tt, yt].indexOf(s) >= 0 ? -1 : 1,
    r = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    o = r[0],
    a = r[1];
  return (
    (o = o || 0),
    (a = (a || 0) * i),
    [Tt, Pt].indexOf(s) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function Ff(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    i = n.offset,
    r = i === void 0 ? [0, 0] : i,
    o = ro.reduce(function (c, g) {
      return (c[g] = Hf(g, t.rects, r)), c;
    }, {}),
    a = o[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[s] = o);
}
const _a = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ff,
};
function Wf(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = ha({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const mo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Wf,
  data: {},
};
function Bf(e) {
  return e === "x" ? "y" : "x";
}
function Kf(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    i = n.mainAxis,
    r = i === void 0 ? !0 : i,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    g = n.padding,
    v = n.tether,
    m = v === void 0 ? !0 : v,
    D = n.tetherOffset,
    T = D === void 0 ? 0 : D,
    w = vn(t, { boundary: l, rootBoundary: u, padding: g, altBoundary: c }),
    P = re(t.placement),
    A = bn(t.placement),
    d = !A,
    p = uo(P),
    E = Bf(p),
    k = t.modifiersData.popperOffsets,
    W = t.rects.reference,
    z = t.rects.popper,
    q =
      typeof T == "function"
        ? T(Object.assign({}, t.rects, { placement: t.placement }))
        : T,
    st =
      typeof q == "number"
        ? { mainAxis: q, altAxis: q }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, q),
    rt = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    F = { x: 0, y: 0 };
  if (k) {
    if (r) {
      var ct,
        Ot = p === "y" ? yt : Tt,
        jt = p === "y" ? Mt : Pt,
        tt = p === "y" ? "height" : "width",
        X = k[p],
        J = X + w[Ot],
        ht = X - w[jt],
        Gt = m ? -z[tt] / 2 : 0,
        St = A === Ye ? W[tt] : z[tt],
        dt = A === Ye ? -z[tt] : -W[tt],
        fe = t.elements.arrow,
        Qt = m && fe ? co(fe) : { width: 0, height: 0 },
        Vt = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : aa(),
        Nt = Vt[Ot],
        zt = Vt[jt],
        U = jn(0, W[tt], Qt[tt]),
        O = d
          ? W[tt] / 2 - Gt - U - Nt - st.mainAxis
          : St - U - Nt - st.mainAxis,
        S = d
          ? -W[tt] / 2 + Gt + U + zt + st.mainAxis
          : dt + U + zt + st.mainAxis,
        ut = t.elements.arrow && Xn(t.elements.arrow),
        f = ut ? (p === "y" ? ut.clientTop || 0 : ut.clientLeft || 0) : 0,
        h = (ct = rt == null ? void 0 : rt[p]) != null ? ct : 0,
        b = X + O - h - f,
        $ = X + S - h,
        y = jn(m ? Ss(J, b) : J, X, m ? Be(ht, $) : ht);
      (k[p] = y), (F[p] = y - X);
    }
    if (a) {
      var N,
        R = p === "x" ? yt : Tt,
        I = p === "x" ? Mt : Pt,
        L = k[E],
        x = E === "y" ? "height" : "width",
        H = L + w[R],
        M = L - w[I],
        j = [yt, Tt].indexOf(P) !== -1,
        B = (N = rt == null ? void 0 : rt[E]) != null ? N : 0,
        Q = j ? H : L - W[x] - z[x] - B + st.altAxis,
        it = j ? L + W[x] + z[x] - B - st.altAxis : M,
        Z = m && j ? yf(Q, L, it) : jn(m ? Q : H, L, m ? it : M);
      (k[E] = Z), (F[E] = Z - L);
    }
    t.modifiersData[s] = F;
  }
}
const ma = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Kf,
  requiresIfExists: ["offset"],
};
function Uf(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Yf(e) {
  return e === kt(e) || !Bt(e) ? po(e) : Uf(e);
}
function Gf(e) {
  var t = e.getBoundingClientRect(),
    n = _n(t.width) / e.offsetWidth || 1,
    s = _n(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function zf(e, t, n) {
  n === void 0 && (n = !1);
  var s = Bt(t),
    i = Bt(t) && Gf(t),
    r = Le(t),
    o = mn(e, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (s || (!s && !n)) &&
      ((ue(t) !== "body" || _o(r)) && (a = Yf(t)),
      Bt(t)
        ? ((l = mn(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : r && (l.x = go(r))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function qf(e) {
  var t = new Map(),
    n = new Set(),
    s = [];
  e.forEach(function (r) {
    t.set(r.name, r);
  });
  function i(r) {
    n.add(r.name);
    var o = [].concat(r.requires || [], r.requiresIfExists || []);
    o.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }),
      s.push(r);
  }
  return (
    e.forEach(function (r) {
      n.has(r.name) || i(r);
    }),
    s
  );
}
function Xf(e) {
  var t = qf(e);
  return oa.reduce(function (n, s) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === s;
      })
    );
  }, []);
}
function Qf(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Jf(e) {
  var t = e.reduce(function (n, s) {
    var i = n[s.name];
    return (
      (n[s.name] = i
        ? Object.assign({}, i, s, {
            options: Object.assign({}, i.options, s.options),
            data: Object.assign({}, i.data, s.data),
          })
        : s),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var cr = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ur() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Us(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    s = n === void 0 ? [] : n,
    i = t.defaultOptions,
    r = i === void 0 ? cr : i;
  return function (a, l, u) {
    u === void 0 && (u = r);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, cr, r),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      g = [],
      v = !1,
      m = {
        state: c,
        setOptions: function (P) {
          var A = typeof P == "function" ? P(c.options) : P;
          T(),
            (c.options = Object.assign({}, r, c.options, A)),
            (c.scrollParents = {
              reference: Ge(a)
                ? Vn(a)
                : a.contextElement
                ? Vn(a.contextElement)
                : [],
              popper: Vn(l),
            });
          var d = Xf(Jf([].concat(s, c.options.modifiers)));
          return (
            (c.orderedModifiers = d.filter(function (p) {
              return p.enabled;
            })),
            D(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!v) {
            var P = c.elements,
              A = P.reference,
              d = P.popper;
            if (ur(A, d)) {
              (c.rects = {
                reference: zf(A, Xn(d), c.options.strategy === "fixed"),
                popper: co(d),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (st) {
                  return (c.modifiersData[st.name] = Object.assign(
                    {},
                    st.data
                  ));
                });
              for (var p = 0; p < c.orderedModifiers.length; p++) {
                if (c.reset === !0) {
                  (c.reset = !1), (p = -1);
                  continue;
                }
                var E = c.orderedModifiers[p],
                  k = E.fn,
                  W = E.options,
                  z = W === void 0 ? {} : W,
                  q = E.name;
                typeof k == "function" &&
                  (c = k({ state: c, options: z, name: q, instance: m }) || c);
              }
            }
          }
        },
        update: Qf(function () {
          return new Promise(function (w) {
            m.forceUpdate(), w(c);
          });
        }),
        destroy: function () {
          T(), (v = !0);
        },
      };
    if (!ur(a, l)) return m;
    m.setOptions(u).then(function (w) {
      !v && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function D() {
      c.orderedModifiers.forEach(function (w) {
        var P = w.name,
          A = w.options,
          d = A === void 0 ? {} : A,
          p = w.effect;
        if (typeof p == "function") {
          var E = p({ state: c, name: P, instance: m, options: d }),
            k = function () {};
          g.push(E || k);
        }
      });
    }
    function T() {
      g.forEach(function (w) {
        return w();
      }),
        (g = []);
    }
    return m;
  };
}
var Zf = Us(),
  td = [ho, mo, fo, ao],
  ed = Us({ defaultModifiers: td }),
  nd = [ho, mo, fo, ao, _a, pa, ma, fa, ga],
  bo = Us({ defaultModifiers: nd });
const ba = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: ea,
      afterRead: Jl,
      afterWrite: ia,
      applyStyles: ao,
      arrow: fa,
      auto: Bs,
      basePlacements: yn,
      beforeMain: Zl,
      beforeRead: Xl,
      beforeWrite: na,
      bottom: Mt,
      clippingParents: zl,
      computeStyles: fo,
      createPopper: bo,
      createPopperBase: Zf,
      createPopperLite: ed,
      detectOverflow: vn,
      end: gn,
      eventListeners: ho,
      flip: pa,
      hide: ga,
      left: Tt,
      main: ta,
      modifierPhases: oa,
      offset: _a,
      placements: ro,
      popper: sn,
      popperGenerator: Us,
      popperOffsets: mo,
      preventOverflow: ma,
      read: Ql,
      reference: ql,
      right: Pt,
      start: Ye,
      top: yt,
      variationPlacements: Mi,
      viewport: oo,
      write: sa,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Te = new Map(),
  ai = {
    set(e, t, n) {
      Te.has(e) || Te.set(e, new Map());
      const s = Te.get(e);
      if (!s.has(t) && s.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(s.keys())[0]
          }.`
        );
        return;
      }
      s.set(t, n);
    },
    get(e, t) {
      return (Te.has(e) && Te.get(e).get(t)) || null;
    },
    remove(e, t) {
      if (!Te.has(e)) return;
      const n = Te.get(e);
      n.delete(t), n.size === 0 && Te.delete(e);
    },
  },
  sd = 1e6,
  id = 1e3,
  ji = "transitionend",
  va = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
    e
  ),
  od = (e) =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  rd = (e) => {
    do e += Math.floor(Math.random() * sd);
    while (document.getElementById(e));
    return e;
  },
  ld = (e) => {
    if (!e) return 0;
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e);
    const s = Number.parseFloat(t),
      i = Number.parseFloat(n);
    return !s && !i
      ? 0
      : ((t = t.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * id);
  },
  Ea = (e) => {
    e.dispatchEvent(new Event(ji));
  },
  me = (e) =>
    !e || typeof e != "object"
      ? !1
      : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
  Se = (e) =>
    me(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == "string" && e.length > 0
      ? document.querySelector(va(e))
      : null,
  Tn = (e) => {
    if (!me(e) || e.getClientRects().length === 0) return !1;
    const t = getComputedStyle(e).getPropertyValue("visibility") === "visible",
      n = e.closest("details:not([open])");
    if (!n) return t;
    if (n !== e) {
      const s = e.closest("summary");
      if ((s && s.parentNode !== n) || s === null) return !1;
    }
    return t;
  },
  Ne = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")
      ? !0
      : typeof e.disabled < "u"
      ? e.disabled
      : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
  ya = (e) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? ya(e.parentNode) : null;
  },
  Ns = () => {},
  Qn = (e) => {
    e.offsetHeight;
  },
  Ta = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  ci = [],
  ad = (e) => {
    document.readyState === "loading"
      ? (ci.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const t of ci) t();
          }),
        ci.push(e))
      : e();
  },
  Kt = () => document.documentElement.dir === "rtl",
  Yt = (e) => {
    ad(() => {
      const t = Ta();
      if (t) {
        const n = e.NAME,
          s = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = s), e.jQueryInterface));
      }
    });
  },
  Ct = (e, t = [], n = e) => (typeof e == "function" ? e(...t) : n),
  Aa = (e, t, n = !0) => {
    if (!n) {
      Ct(e);
      return;
    }
    const i = ld(t) + 5;
    let r = !1;
    const o = ({ target: a }) => {
      a === t && ((r = !0), t.removeEventListener(ji, o), Ct(e));
    };
    t.addEventListener(ji, o),
      setTimeout(() => {
        r || Ea(t);
      }, i);
  },
  vo = (e, t, n, s) => {
    const i = e.length;
    let r = e.indexOf(t);
    return r === -1
      ? !n && s
        ? e[i - 1]
        : e[0]
      : ((r += n ? 1 : -1),
        s && (r = (r + i) % i),
        e[Math.max(0, Math.min(r, i - 1))]);
  },
  cd = /[^.]*(?=\..*)\.|.*/,
  ud = /\..*/,
  fd = /::\d+$/,
  ui = {};
let fr = 1;
const wa = { mouseenter: "mouseover", mouseleave: "mouseout" },
  dd = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function Ca(e, t) {
  return (t && `${t}::${fr++}`) || e.uidEvent || fr++;
}
function Oa(e) {
  const t = Ca(e);
  return (e.uidEvent = t), (ui[t] = ui[t] || {}), ui[t];
}
function hd(e, t) {
  return function n(s) {
    return (
      Eo(s, { delegateTarget: e }),
      n.oneOff && C.off(e, s.type, t),
      t.apply(e, [s])
    );
  };
}
function pd(e, t, n) {
  return function s(i) {
    const r = e.querySelectorAll(t);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (const a of r)
        if (a === o)
          return (
            Eo(i, { delegateTarget: o }),
            s.oneOff && C.off(e, i.type, t, n),
            n.apply(o, [i])
          );
  };
}
function Sa(e, t, n = null) {
  return Object.values(e).find(
    (s) => s.callable === t && s.delegationSelector === n
  );
}
function Na(e, t, n) {
  const s = typeof t == "string",
    i = s ? n : t || n;
  let r = xa(e);
  return dd.has(r) || (r = e), [s, i, r];
}
function dr(e, t, n, s, i) {
  if (typeof t != "string" || !e) return;
  let [r, o, a] = Na(t, n, s);
  t in wa &&
    (o = ((D) =>
      function (T) {
        if (
          !T.relatedTarget ||
          (T.relatedTarget !== T.delegateTarget &&
            !T.delegateTarget.contains(T.relatedTarget))
        )
          return D.call(this, T);
      })(o));
  const l = Oa(e),
    u = l[a] || (l[a] = {}),
    c = Sa(u, o, r ? n : null);
  if (c) {
    c.oneOff = c.oneOff && i;
    return;
  }
  const g = Ca(o, t.replace(cd, "")),
    v = r ? pd(e, n, o) : hd(e, o);
  (v.delegationSelector = r ? n : null),
    (v.callable = o),
    (v.oneOff = i),
    (v.uidEvent = g),
    (u[g] = v),
    e.addEventListener(a, v, r);
}
function Vi(e, t, n, s, i) {
  const r = Sa(t[n], s, i);
  r && (e.removeEventListener(n, r, !!i), delete t[n][r.uidEvent]);
}
function gd(e, t, n, s) {
  const i = t[n] || {};
  for (const [r, o] of Object.entries(i))
    r.includes(s) && Vi(e, t, n, o.callable, o.delegationSelector);
}
function xa(e) {
  return (e = e.replace(ud, "")), wa[e] || e;
}
const C = {
  on(e, t, n, s) {
    dr(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    dr(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e) return;
    const [i, r, o] = Na(t, n, s),
      a = o !== t,
      l = Oa(e),
      u = l[o] || {},
      c = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(u).length) return;
      Vi(e, l, o, r, i ? n : null);
      return;
    }
    if (c) for (const g of Object.keys(l)) gd(e, l, g, t.slice(1));
    for (const [g, v] of Object.entries(u)) {
      const m = g.replace(fd, "");
      (!a || t.includes(m)) && Vi(e, l, o, v.callable, v.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e) return null;
    const s = Ta(),
      i = xa(t),
      r = t !== i;
    let o = null,
      a = !0,
      l = !0,
      u = !1;
    r &&
      s &&
      ((o = s.Event(t, n)),
      s(e).trigger(o),
      (a = !o.isPropagationStopped()),
      (l = !o.isImmediatePropagationStopped()),
      (u = o.isDefaultPrevented()));
    const c = Eo(new Event(t, { bubbles: a, cancelable: !0 }), n);
    return (
      u && c.preventDefault(),
      l && e.dispatchEvent(c),
      c.defaultPrevented && o && o.preventDefault(),
      c
    );
  },
};
function Eo(e, t = {}) {
  for (const [n, s] of Object.entries(t))
    try {
      e[n] = s;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return s;
        },
      });
    }
  return e;
}
function hr(e) {
  if (e === "true") return !0;
  if (e === "false") return !1;
  if (e === Number(e).toString()) return Number(e);
  if (e === "" || e === "null") return null;
  if (typeof e != "string") return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function fi(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const be = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${fi(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${fi(t)}`);
  },
  getDataAttributes(e) {
    if (!e) return {};
    const t = {},
      n = Object.keys(e.dataset).filter(
        (s) => s.startsWith("bs") && !s.startsWith("bsConfig")
      );
    for (const s of n) {
      let i = s.replace(/^bs/, "");
      (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (t[i] = hr(e.dataset[s]));
    }
    return t;
  },
  getDataAttribute(e, t) {
    return hr(e.getAttribute(`data-bs-${fi(t)}`));
  },
};
class Jn {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, n) {
    const s = me(n) ? be.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof s == "object" ? s : {}),
      ...(me(n) ? be.getDataAttributes(n) : {}),
      ...(typeof t == "object" ? t : {}),
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, i] of Object.entries(n)) {
      const r = t[s],
        o = me(r) ? "element" : od(r);
      if (!new RegExp(i).test(o))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`
        );
    }
  }
}
const _d = "5.3.3";
class Xt extends Jn {
  constructor(t, n) {
    super(),
      (t = Se(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(n)),
        ai.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    ai.remove(this._element, this.constructor.DATA_KEY),
      C.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
  }
  _queueCallback(t, n, s = !0) {
    Aa(t, n, s);
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  static getInstance(t) {
    return ai.get(Se(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return _d;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const di = (e) => {
    let t = e.getAttribute("data-bs-target");
    if (!t || t === "#") {
      let n = e.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (t = n && n !== "#" ? n.trim() : null);
    }
    return t
      ? t
          .split(",")
          .map((n) => va(n))
          .join(",")
      : null;
  },
  V = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e));
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e);
    },
    children(e, t) {
      return [].concat(...e.children).filter((n) => n.matches(t));
    },
    parents(e, t) {
      const n = [];
      let s = e.parentNode.closest(t);
      for (; s; ) n.push(s), (s = s.parentNode.closest(t));
      return n;
    },
    prev(e, t) {
      let n = e.previousElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(e, t) {
      let n = e.nextElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(",");
      return this.find(t, e).filter((n) => !Ne(n) && Tn(n));
    },
    getSelectorFromElement(e) {
      const t = di(e);
      return t && V.findOne(t) ? t : null;
    },
    getElementFromSelector(e) {
      const t = di(e);
      return t ? V.findOne(t) : null;
    },
    getMultipleElementsFromSelector(e) {
      const t = di(e);
      return t ? V.find(t) : [];
    },
  },
  Ys = (e, t = "hide") => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      s = e.NAME;
    C.on(document, n, `[data-bs-dismiss="${s}"]`, function (i) {
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Ne(this))
      )
        return;
      const r = V.getElementFromSelector(this) || this.closest(`.${s}`);
      e.getOrCreateInstance(r)[t]();
    });
  },
  md = "alert",
  bd = "bs.alert",
  $a = `.${bd}`,
  vd = `close${$a}`,
  Ed = `closed${$a}`,
  yd = "fade",
  Td = "show";
class Gs extends Xt {
  static get NAME() {
    return md;
  }
  close() {
    if (C.trigger(this._element, vd).defaultPrevented) return;
    this._element.classList.remove(Td);
    const n = this._element.classList.contains(yd);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), C.trigger(this._element, Ed), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Gs.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ys(Gs, "close");
Yt(Gs);
const Ad = "button",
  wd = "bs.button",
  Cd = `.${wd}`,
  Od = ".data-api",
  Sd = "active",
  pr = '[data-bs-toggle="button"]',
  Nd = `click${Cd}${Od}`;
class zs extends Xt {
  static get NAME() {
    return Ad;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(Sd)
    );
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = zs.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
C.on(document, Nd, pr, (e) => {
  e.preventDefault();
  const t = e.target.closest(pr);
  zs.getOrCreateInstance(t).toggle();
});
Yt(zs);
const xd = "swipe",
  An = ".bs.swipe",
  $d = `touchstart${An}`,
  Dd = `touchmove${An}`,
  Ld = `touchend${An}`,
  Id = `pointerdown${An}`,
  Rd = `pointerup${An}`,
  Md = "touch",
  Pd = "pen",
  kd = "pointer-event",
  jd = 40,
  Vd = { endCallback: null, leftCallback: null, rightCallback: null },
  Hd = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class xs extends Jn {
  constructor(t, n) {
    super(),
      (this._element = t),
      !(!t || !xs.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents());
  }
  static get Default() {
    return Vd;
  }
  static get DefaultType() {
    return Hd;
  }
  static get NAME() {
    return xd;
  }
  dispose() {
    C.off(this._element, An);
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) &&
      (this._deltaX = t.clientX - this._deltaX),
      this._handleSwipe(),
      Ct(this._config.endCallback);
  }
  _move(t) {
    this._deltaX =
      t.touches && t.touches.length > 1
        ? 0
        : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= jd) return;
    const n = t / this._deltaX;
    (this._deltaX = 0),
      n && Ct(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (C.on(this._element, Id, (t) => this._start(t)),
        C.on(this._element, Rd, (t) => this._end(t)),
        this._element.classList.add(kd))
      : (C.on(this._element, $d, (t) => this._start(t)),
        C.on(this._element, Dd, (t) => this._move(t)),
        C.on(this._element, Ld, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return (
      this._supportPointerEvents &&
      (t.pointerType === Pd || t.pointerType === Md)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const Fd = "carousel",
  Wd = "bs.carousel",
  Ie = `.${Wd}`,
  Da = ".data-api",
  Bd = "ArrowLeft",
  Kd = "ArrowRight",
  Ud = 500,
  xn = "next",
  Ze = "prev",
  on = "left",
  _s = "right",
  Yd = `slide${Ie}`,
  hi = `slid${Ie}`,
  Gd = `keydown${Ie}`,
  zd = `mouseenter${Ie}`,
  qd = `mouseleave${Ie}`,
  Xd = `dragstart${Ie}`,
  Qd = `load${Ie}${Da}`,
  Jd = `click${Ie}${Da}`,
  La = "carousel",
  os = "active",
  Zd = "slide",
  th = "carousel-item-end",
  eh = "carousel-item-start",
  nh = "carousel-item-next",
  sh = "carousel-item-prev",
  Ia = ".active",
  Ra = ".carousel-item",
  ih = Ia + Ra,
  oh = ".carousel-item img",
  rh = ".carousel-indicators",
  lh = "[data-bs-slide], [data-bs-slide-to]",
  ah = '[data-bs-ride="carousel"]',
  ch = { [Bd]: _s, [Kd]: on },
  uh = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  fh = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class Zn extends Xt {
  constructor(t, n) {
    super(t, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = V.findOne(rh, this._element)),
      this._addEventListeners(),
      this._config.ride === La && this.cycle();
  }
  static get Default() {
    return uh;
  }
  static get DefaultType() {
    return fh;
  }
  static get NAME() {
    return Fd;
  }
  next() {
    this._slide(xn);
  }
  nextWhenVisible() {
    !document.hidden && Tn(this._element) && this.next();
  }
  prev() {
    this._slide(Ze);
  }
  pause() {
    this._isSliding && Ea(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval
      ));
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        C.one(this._element, hi, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0) return;
    if (this._isSliding) {
      C.one(this._element, hi, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t) return;
    const i = t > s ? xn : Ze;
    this._slide(i, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t;
  }
  _addEventListeners() {
    this._config.keyboard && C.on(this._element, Gd, (t) => this._keydown(t)),
      this._config.pause === "hover" &&
        (C.on(this._element, zd, () => this.pause()),
        C.on(this._element, qd, () => this._maybeEnableCycle())),
      this._config.touch && xs.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of V.find(oh, this._element))
      C.on(s, Xd, (i) => i.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(on)),
      rightCallback: () => this._slide(this._directionToOrder(_s)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            Ud + this._config.interval
          )));
      },
    };
    this._swipeHelper = new xs(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return;
    const n = ch[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return;
    const n = V.findOne(Ia, this._indicatorsElement);
    n.classList.remove(os), n.removeAttribute("aria-current");
    const s = V.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(os), s.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t) return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(t, n = null) {
    if (this._isSliding) return;
    const s = this._getActive(),
      i = t === xn,
      r = n || vo(this._getItems(), s, i, this._config.wrap);
    if (r === s) return;
    const o = this._getItemIndex(r),
      a = (m) =>
        C.trigger(this._element, m, {
          relatedTarget: r,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(s),
          to: o,
        });
    if (a(Yd).defaultPrevented || !s || !r) return;
    const u = !!this._interval;
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(o),
      (this._activeElement = r);
    const c = i ? eh : th,
      g = i ? nh : sh;
    r.classList.add(g), Qn(r), s.classList.add(c), r.classList.add(c);
    const v = () => {
      r.classList.remove(c, g),
        r.classList.add(os),
        s.classList.remove(os, g, c),
        (this._isSliding = !1),
        a(hi);
    };
    this._queueCallback(v, s, this._isAnimated()), u && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Zd);
  }
  _getActive() {
    return V.findOne(ih, this._element);
  }
  _getItems() {
    return V.find(Ra, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(t) {
    return Kt() ? (t === on ? Ze : xn) : t === on ? xn : Ze;
  }
  _orderToDirection(t) {
    return Kt() ? (t === Ze ? on : _s) : t === Ze ? _s : on;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Zn.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        n.to(t);
        return;
      }
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
C.on(document, Jd, lh, function (e) {
  const t = V.getElementFromSelector(this);
  if (!t || !t.classList.contains(La)) return;
  e.preventDefault();
  const n = Zn.getOrCreateInstance(t),
    s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if (be.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
C.on(window, Qd, () => {
  const e = V.find(ah);
  for (const t of e) Zn.getOrCreateInstance(t);
});
Yt(Zn);
const dh = "collapse",
  hh = "bs.collapse",
  ts = `.${hh}`,
  ph = ".data-api",
  gh = `show${ts}`,
  _h = `shown${ts}`,
  mh = `hide${ts}`,
  bh = `hidden${ts}`,
  vh = `click${ts}${ph}`,
  pi = "show",
  ln = "collapse",
  rs = "collapsing",
  Eh = "collapsed",
  yh = `:scope .${ln} .${ln}`,
  Th = "collapse-horizontal",
  Ah = "width",
  wh = "height",
  Ch = ".collapse.show, .collapse.collapsing",
  Hi = '[data-bs-toggle="collapse"]',
  Oh = { parent: null, toggle: !0 },
  Sh = { parent: "(null|element)", toggle: "boolean" };
class Un extends Xt {
  constructor(t, n) {
    super(t, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const s = V.find(Hi);
    for (const i of s) {
      const r = V.getSelectorFromElement(i),
        o = V.find(r).filter((a) => a === this._element);
      r !== null && o.length && this._triggerArray.push(i);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return Oh;
  }
  static get DefaultType() {
    return Sh;
  }
  static get NAME() {
    return dh;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [];
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(Ch)
          .filter((a) => a !== this._element)
          .map((a) => Un.getOrCreateInstance(a, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        C.trigger(this._element, gh).defaultPrevented)
    )
      return;
    for (const a of t) a.hide();
    const s = this._getDimension();
    this._element.classList.remove(ln),
      this._element.classList.add(rs),
      (this._element.style[s] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const i = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(rs),
          this._element.classList.add(ln, pi),
          (this._element.style[s] = ""),
          C.trigger(this._element, _h);
      },
      o = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(i, this._element, !0),
      (this._element.style[s] = `${this._element[o]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      C.trigger(this._element, mh).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      Qn(this._element),
      this._element.classList.add(rs),
      this._element.classList.remove(ln, pi);
    for (const i of this._triggerArray) {
      const r = V.getElementFromSelector(i);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(rs),
        this._element.classList.add(ln),
        C.trigger(this._element, bh);
    };
    (this._element.style[n] = ""), this._queueCallback(s, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(pi);
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = Se(t.parent)), t;
  }
  _getDimension() {
    return this._element.classList.contains(Th) ? Ah : wh;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = this._getFirstLevelChildren(Hi);
    for (const n of t) {
      const s = V.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = V.find(yh, this._config.parent);
    return V.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(Eh, !n), s.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(t) {
    const n = {};
    return (
      typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1),
      this.each(function () {
        const s = Un.getOrCreateInstance(this, n);
        if (typeof t == "string") {
          if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
          s[t]();
        }
      })
    );
  }
}
C.on(document, vh, Hi, function (e) {
  (e.target.tagName === "A" ||
    (e.delegateTarget && e.delegateTarget.tagName === "A")) &&
    e.preventDefault();
  for (const t of V.getMultipleElementsFromSelector(this))
    Un.getOrCreateInstance(t, { toggle: !1 }).toggle();
});
Yt(Un);
const gr = "dropdown",
  Nh = "bs.dropdown",
  Xe = `.${Nh}`,
  yo = ".data-api",
  xh = "Escape",
  _r = "Tab",
  $h = "ArrowUp",
  mr = "ArrowDown",
  Dh = 2,
  Lh = `hide${Xe}`,
  Ih = `hidden${Xe}`,
  Rh = `show${Xe}`,
  Mh = `shown${Xe}`,
  Ma = `click${Xe}${yo}`,
  Pa = `keydown${Xe}${yo}`,
  Ph = `keyup${Xe}${yo}`,
  rn = "show",
  kh = "dropup",
  jh = "dropend",
  Vh = "dropstart",
  Hh = "dropup-center",
  Fh = "dropdown-center",
  Ve = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  Wh = `${Ve}.${rn}`,
  ms = ".dropdown-menu",
  Bh = ".navbar",
  Kh = ".navbar-nav",
  Uh = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  Yh = Kt() ? "top-end" : "top-start",
  Gh = Kt() ? "top-start" : "top-end",
  zh = Kt() ? "bottom-end" : "bottom-start",
  qh = Kt() ? "bottom-start" : "bottom-end",
  Xh = Kt() ? "left-start" : "right-start",
  Qh = Kt() ? "right-start" : "left-start",
  Jh = "top",
  Zh = "bottom",
  tp = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  ep = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class le extends Xt {
  constructor(t, n) {
    super(t, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        V.next(this._element, ms)[0] ||
        V.prev(this._element, ms)[0] ||
        V.findOne(ms, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return tp;
  }
  static get DefaultType() {
    return ep;
  }
  static get NAME() {
    return gr;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Ne(this._element) || this._isShown()) return;
    const t = { relatedTarget: this._element };
    if (!C.trigger(this._element, Rh, t).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(Kh))
      )
        for (const s of [].concat(...document.body.children))
          C.on(s, "mouseover", Ns);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(rn),
        this._element.classList.add(rn),
        C.trigger(this._element, Mh, t);
    }
  }
  hide() {
    if (Ne(this._element) || !this._isShown()) return;
    const t = { relatedTarget: this._element };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(t) {
    if (!C.trigger(this._element, Lh, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          C.off(s, "mouseover", Ns);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(rn),
        this._element.classList.remove(rn),
        this._element.setAttribute("aria-expanded", "false"),
        be.removeDataAttribute(this._menu, "popper"),
        C.trigger(this._element, Ih, t);
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == "object" &&
        !me(t.reference) &&
        typeof t.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${gr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper() {
    if (typeof ba > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let t = this._element;
    this._config.reference === "parent"
      ? (t = this._parent)
      : me(this._config.reference)
      ? (t = Se(this._config.reference))
      : typeof this._config.reference == "object" &&
        (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = bo(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(rn);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(jh)) return Xh;
    if (t.classList.contains(Vh)) return Qh;
    if (t.classList.contains(Hh)) return Jh;
    if (t.classList.contains(Fh)) return Zh;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return t.classList.contains(kh) ? (n ? Gh : Yh) : n ? qh : zh;
  }
  _detectNavbar() {
    return this._element.closest(Bh) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || this._config.display === "static") &&
        (be.setDataAttribute(this._menu, "popper", "static"),
        (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...t, ...Ct(this._config.popperConfig, [t]) }
    );
  }
  _selectMenuItem({ key: t, target: n }) {
    const s = V.find(Uh, this._menu).filter((i) => Tn(i));
    s.length && vo(s, n, t === mr, !s.includes(n)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = le.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === Dh || (t.type === "keyup" && t.key !== _r)) return;
    const n = V.find(Wh);
    for (const s of n) {
      const i = le.getInstance(s);
      if (!i || i._config.autoClose === !1) continue;
      const r = t.composedPath(),
        o = r.includes(i._menu);
      if (
        r.includes(i._element) ||
        (i._config.autoClose === "inside" && !o) ||
        (i._config.autoClose === "outside" && o) ||
        (i._menu.contains(t.target) &&
          ((t.type === "keyup" && t.key === _r) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue;
      const a = { relatedTarget: i._element };
      t.type === "click" && (a.clickEvent = t), i._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName),
      s = t.key === xh,
      i = [$h, mr].includes(t.key);
    if ((!i && !s) || (n && !s)) return;
    t.preventDefault();
    const r = this.matches(Ve)
        ? this
        : V.prev(this, Ve)[0] ||
          V.next(this, Ve)[0] ||
          V.findOne(Ve, t.delegateTarget.parentNode),
      o = le.getOrCreateInstance(r);
    if (i) {
      t.stopPropagation(), o.show(), o._selectMenuItem(t);
      return;
    }
    o._isShown() && (t.stopPropagation(), o.hide(), r.focus());
  }
}
C.on(document, Pa, Ve, le.dataApiKeydownHandler);
C.on(document, Pa, ms, le.dataApiKeydownHandler);
C.on(document, Ma, le.clearMenus);
C.on(document, Ph, le.clearMenus);
C.on(document, Ma, Ve, function (e) {
  e.preventDefault(), le.getOrCreateInstance(this).toggle();
});
Yt(le);
const ka = "backdrop",
  np = "fade",
  br = "show",
  vr = `mousedown.bs.${ka}`,
  sp = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  ip = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class ja extends Jn {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return sp;
  }
  static get DefaultType() {
    return ip;
  }
  static get NAME() {
    return ka;
  }
  show(t) {
    if (!this._config.isVisible) {
      Ct(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Qn(n),
      n.classList.add(br),
      this._emulateAnimation(() => {
        Ct(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      Ct(t);
      return;
    }
    this._getElement().classList.remove(br),
      this._emulateAnimation(() => {
        this.dispose(), Ct(t);
      });
  }
  dispose() {
    this._isAppended &&
      (C.off(this._element, vr),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(np),
        (this._element = t);
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return (t.rootElement = Se(t.rootElement)), t;
  }
  _append() {
    if (this._isAppended) return;
    const t = this._getElement();
    this._config.rootElement.append(t),
      C.on(t, vr, () => {
        Ct(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(t) {
    Aa(t, this._getElement(), this._config.isAnimated);
  }
}
const op = "focustrap",
  rp = "bs.focustrap",
  $s = `.${rp}`,
  lp = `focusin${$s}`,
  ap = `keydown.tab${$s}`,
  cp = "Tab",
  up = "forward",
  Er = "backward",
  fp = { autofocus: !0, trapElement: null },
  dp = { autofocus: "boolean", trapElement: "element" };
class Va extends Jn {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return fp;
  }
  static get DefaultType() {
    return dp;
  }
  static get NAME() {
    return op;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      C.off(document, $s),
      C.on(document, lp, (t) => this._handleFocusin(t)),
      C.on(document, ap, (t) => this._handleKeydown(t)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), C.off(document, $s));
  }
  _handleFocusin(t) {
    const { trapElement: n } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target)) return;
    const s = V.focusableChildren(n);
    s.length === 0
      ? n.focus()
      : this._lastTabNavDirection === Er
      ? s[s.length - 1].focus()
      : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === cp && (this._lastTabNavDirection = t.shiftKey ? Er : up);
  }
}
const yr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  Tr = ".sticky-top",
  ls = "padding-right",
  Ar = "margin-right";
class Fi {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, ls, (n) => n + t),
      this._setElementAttributes(yr, ls, (n) => n + t),
      this._setElementAttributes(Tr, Ar, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, ls),
      this._resetElementAttributes(yr, ls),
      this._resetElementAttributes(Tr, Ar);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(t, n, s) {
    const i = this.getWidth(),
      r = (o) => {
        if (o !== this._element && window.innerWidth > o.clientWidth + i)
          return;
        this._saveInitialAttribute(o, n);
        const a = window.getComputedStyle(o).getPropertyValue(n);
        o.style.setProperty(n, `${s(Number.parseFloat(a))}px`);
      };
    this._applyManipulationCallback(t, r);
  }
  _saveInitialAttribute(t, n) {
    const s = t.style.getPropertyValue(n);
    s && be.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (i) => {
      const r = be.getDataAttribute(i, n);
      if (r === null) {
        i.style.removeProperty(n);
        return;
      }
      be.removeDataAttribute(i, n), i.style.setProperty(n, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (me(t)) {
      n(t);
      return;
    }
    for (const s of V.find(t, this._element)) n(s);
  }
}
const hp = "modal",
  pp = "bs.modal",
  Ut = `.${pp}`,
  gp = ".data-api",
  _p = "Escape",
  mp = `hide${Ut}`,
  bp = `hidePrevented${Ut}`,
  Ha = `hidden${Ut}`,
  Fa = `show${Ut}`,
  vp = `shown${Ut}`,
  Ep = `resize${Ut}`,
  yp = `click.dismiss${Ut}`,
  Tp = `mousedown.dismiss${Ut}`,
  Ap = `keydown.dismiss${Ut}`,
  wp = `click${Ut}${gp}`,
  wr = "modal-open",
  Cp = "fade",
  Cr = "show",
  gi = "modal-static",
  Op = ".modal.show",
  Sp = ".modal-dialog",
  Np = ".modal-body",
  xp = '[data-bs-toggle="modal"]',
  $p = { backdrop: !0, focus: !0, keyboard: !0 },
  Dp = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class ze extends Xt {
  constructor(t, n) {
    super(t, n),
      (this._dialog = V.findOne(Sp, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new Fi()),
      this._addEventListeners();
  }
  static get Default() {
    return $p;
  }
  static get DefaultType() {
    return Dp;
  }
  static get NAME() {
    return hp;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      C.trigger(this._element, Fa, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(wr),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      C.trigger(this._element, mp).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(Cr),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated()
      ));
  }
  dispose() {
    C.off(window, Ut),
      C.off(this._dialog, Ut),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new ja({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new Va({ trapElement: this._element });
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = V.findOne(Np, this._dialog);
    n && (n.scrollTop = 0), Qn(this._element), this._element.classList.add(Cr);
    const s = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        C.trigger(this._element, vp, { relatedTarget: t });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    C.on(this._element, Ap, (t) => {
      if (t.key === _p) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      C.on(window, Ep, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      C.on(this._element, Tp, (t) => {
        C.one(this._element, yp, (n) => {
          if (!(this._element !== t.target || this._element !== n.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(wr),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          C.trigger(this._element, Ha);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(Cp);
  }
  _triggerBackdropTransition() {
    if (C.trigger(this._element, bp).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      s = this._element.style.overflowY;
    s === "hidden" ||
      this._element.classList.contains(gi) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(gi),
      this._queueCallback(() => {
        this._element.classList.remove(gi),
          this._queueCallback(() => {
            this._element.style.overflowY = s;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      s = n > 0;
    if (s && !t) {
      const i = Kt() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${n}px`;
    }
    if (!s && t) {
      const i = Kt() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const s = ze.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
C.on(document, wp, xp, function (e) {
  const t = V.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    C.one(t, Fa, (i) => {
      i.defaultPrevented ||
        C.one(t, Ha, () => {
          Tn(this) && this.focus();
        });
    });
  const n = V.findOne(Op);
  n && ze.getInstance(n).hide(), ze.getOrCreateInstance(t).toggle(this);
});
Ys(ze);
Yt(ze);
const Lp = "offcanvas",
  Ip = "bs.offcanvas",
  ye = `.${Ip}`,
  Wa = ".data-api",
  Rp = `load${ye}${Wa}`,
  Mp = "Escape",
  Or = "show",
  Sr = "showing",
  Nr = "hiding",
  Pp = "offcanvas-backdrop",
  Ba = ".offcanvas.show",
  kp = `show${ye}`,
  jp = `shown${ye}`,
  Vp = `hide${ye}`,
  xr = `hidePrevented${ye}`,
  Ka = `hidden${ye}`,
  Hp = `resize${ye}`,
  Fp = `click${ye}${Wa}`,
  Wp = `keydown.dismiss${ye}`,
  Bp = '[data-bs-toggle="offcanvas"]',
  Kp = { backdrop: !0, keyboard: !0, scroll: !1 },
  Up = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class xe extends Xt {
  constructor(t, n) {
    super(t, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return Kp;
  }
  static get DefaultType() {
    return Up;
  }
  static get NAME() {
    return Lp;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (
      this._isShown ||
      C.trigger(this._element, kp, { relatedTarget: t }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new Fi().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(Sr);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(Or),
        this._element.classList.remove(Sr),
        C.trigger(this._element, jp, { relatedTarget: t });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || C.trigger(this._element, Vp).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(Nr),
      this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Or, Nr),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new Fi().reset(),
        C.trigger(this._element, Ka);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === "static") {
          C.trigger(this._element, xr);
          return;
        }
        this.hide();
      },
      n = !!this._config.backdrop;
    return new ja({
      className: Pp,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null,
    });
  }
  _initializeFocusTrap() {
    return new Va({ trapElement: this._element });
  }
  _addEventListeners() {
    C.on(this._element, Wp, (t) => {
      if (t.key === Mp) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        C.trigger(this._element, xr);
      }
    });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = xe.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
C.on(document, Fp, Bp, function (e) {
  const t = V.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Ne(this)))
    return;
  C.one(t, Ka, () => {
    Tn(this) && this.focus();
  });
  const n = V.findOne(Ba);
  n && n !== t && xe.getInstance(n).hide(),
    xe.getOrCreateInstance(t).toggle(this);
});
C.on(window, Rp, () => {
  for (const e of V.find(Ba)) xe.getOrCreateInstance(e).show();
});
C.on(window, Hp, () => {
  for (const e of V.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" &&
      xe.getOrCreateInstance(e).hide();
});
Ys(xe);
Yt(xe);
const Yp = /^aria-[\w-]*$/i,
  Ua = {
    "*": ["class", "dir", "id", "lang", "role", Yp],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  },
  Gp = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  zp = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  qp = (e, t) => {
    const n = e.nodeName.toLowerCase();
    return t.includes(n)
      ? Gp.has(n)
        ? !!zp.test(e.nodeValue)
        : !0
      : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
  };
function Xp(e, t, n) {
  if (!e.length) return e;
  if (n && typeof n == "function") return n(e);
  const i = new window.DOMParser().parseFromString(e, "text/html"),
    r = [].concat(...i.body.querySelectorAll("*"));
  for (const o of r) {
    const a = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes),
      u = [].concat(t["*"] || [], t[a] || []);
    for (const c of l) qp(c, u) || o.removeAttribute(c.nodeName);
  }
  return i.body.innerHTML;
}
const Qp = "TemplateFactory",
  Jp = {
    allowList: Ua,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  Zp = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  tg = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class eg extends Jn {
  constructor(t) {
    super(), (this._config = this._getConfig(t));
  }
  static get Default() {
    return Jp;
  }
  static get DefaultType() {
    return Zp;
  }
  static get NAME() {
    return Qp;
  }
  getContent() {
    return Object.values(this._config.content)
      .map((t) => this._resolvePossibleFunction(t))
      .filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return (
      this._checkContent(t),
      (this._config.content = { ...this._config.content, ...t }),
      this
    );
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, r] of Object.entries(this._config.content))
      this._setContent(t, r, i);
    const n = t.children[0],
      s = this._resolvePossibleFunction(this._config.extraClass);
    return s && n.classList.add(...s.split(" ")), n;
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, s] of Object.entries(t))
      super._typeCheckConfig({ selector: n, entry: s }, tg);
  }
  _setContent(t, n, s) {
    const i = V.findOne(s, t);
    if (i) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        i.remove();
        return;
      }
      if (me(n)) {
        this._putElementInTemplate(Se(n), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(n);
        return;
      }
      i.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize
      ? Xp(t, this._config.allowList, this._config.sanitizeFn)
      : t;
  }
  _resolvePossibleFunction(t) {
    return Ct(t, [this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      (n.innerHTML = ""), n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const ng = "tooltip",
  sg = new Set(["sanitize", "allowList", "sanitizeFn"]),
  _i = "fade",
  ig = "modal",
  as = "show",
  og = ".tooltip-inner",
  $r = `.${ig}`,
  Dr = "hide.bs.modal",
  $n = "hover",
  mi = "focus",
  rg = "click",
  lg = "manual",
  ag = "hide",
  cg = "hidden",
  ug = "show",
  fg = "shown",
  dg = "inserted",
  hg = "click",
  pg = "focusin",
  gg = "focusout",
  _g = "mouseenter",
  mg = "mouseleave",
  bg = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: Kt() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: Kt() ? "right" : "left",
  },
  vg = {
    allowList: Ua,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus",
  },
  Eg = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
  };
class wn extends Xt {
  constructor(t, n) {
    if (typeof ba > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t, n),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle();
  }
  static get Default() {
    return vg;
  }
  static get DefaultType() {
    return Eg;
  }
  static get NAME() {
    return ng;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      C.off(this._element.closest($r), Dr, this._hideModalHandler),
      this._element.getAttribute("data-bs-original-title") &&
        this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title")
        ),
      this._disposePopper(),
      super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled)) return;
    const t = C.trigger(this._element, this.constructor.eventName(ug)),
      s = (
        ya(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (t.defaultPrevented || !s) return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const { container: r } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (r.append(i), C.trigger(this._element, this.constructor.eventName(dg))),
      (this._popper = this._createPopper(i)),
      i.classList.add(as),
      "ontouchstart" in document.documentElement)
    )
      for (const a of [].concat(...document.body.children))
        C.on(a, "mouseover", Ns);
    const o = () => {
      C.trigger(this._element, this.constructor.eventName(fg)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      C.trigger(this._element, this.constructor.eventName(ag)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(as),
      "ontouchstart" in document.documentElement)
    )
      for (const i of [].concat(...document.body.children))
        C.off(i, "mouseover", Ns);
    (this._activeTrigger[rg] = !1),
      (this._activeTrigger[mi] = !1),
      (this._activeTrigger[$n] = !1),
      (this._isHovered = null);
    const s = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        C.trigger(this._element, this.constructor.eventName(cg)));
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate()
        )),
      this.tip
    );
  }
  _createTipElement(t) {
    const n = this._getTemplateFactory(t).toHtml();
    if (!n) return null;
    n.classList.remove(_i, as),
      n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = rd(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", s), this._isAnimated() && n.classList.add(_i), n
    );
  }
  setContent(t) {
    (this._newContent = t),
      this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(t)
        : (this._templateFactory = new eg({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [og]: this._getTitle() };
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute("data-bs-original-title")
    );
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(_i))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(as);
  }
  _createPopper(t) {
    const n = Ct(this._config.placement, [this, t, this._element]),
      s = bg[n.toUpperCase()];
    return bo(this._element, t, this._getPopperConfig(s));
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _resolvePossibleFunction(t) {
    return Ct(t, [this._element]);
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: (s) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              s.state.placement
            );
          },
        },
      ],
    };
    return { ...n, ...Ct(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        C.on(
          this._element,
          this.constructor.eventName(hg),
          this._config.selector,
          (s) => {
            this._initializeOnDelegatedTarget(s).toggle();
          }
        );
      else if (n !== lg) {
        const s =
            n === $n
              ? this.constructor.eventName(_g)
              : this.constructor.eventName(pg),
          i =
            n === $n
              ? this.constructor.eventName(mg)
              : this.constructor.eventName(gg);
        C.on(this._element, s, this._config.selector, (r) => {
          const o = this._initializeOnDelegatedTarget(r);
          (o._activeTrigger[r.type === "focusin" ? mi : $n] = !0), o._enter();
        }),
          C.on(this._element, i, this._config.selector, (r) => {
            const o = this._initializeOnDelegatedTarget(r);
            (o._activeTrigger[r.type === "focusout" ? mi : $n] =
              o._element.contains(r.relatedTarget)),
              o._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      C.on(this._element.closest($r), Dr, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t &&
      (!this._element.getAttribute("aria-label") &&
        !this._element.textContent.trim() &&
        this._element.setAttribute("aria-label", t),
      this._element.setAttribute("data-bs-original-title", t),
      this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    (this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
  }
  _setTimeout(t, n) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(t, n));
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const n = be.getDataAttributes(this._element);
    for (const s of Object.keys(n)) sg.has(s) && delete n[s];
    return (
      (t = { ...n, ...(typeof t == "object" && t ? t : {}) }),
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return (
      (t.container = t.container === !1 ? document.body : Se(t.container)),
      typeof t.delay == "number" &&
        (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == "number" && (t.title = t.title.toString()),
      typeof t.content == "number" && (t.content = t.content.toString()),
      t
    );
  }
  _getDelegateConfig() {
    const t = {};
    for (const [n, s] of Object.entries(this._config))
      this.constructor.Default[n] !== s && (t[n] = s);
    return (t.selector = !1), (t.trigger = "manual"), t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null));
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = wn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Yt(wn);
const yg = "popover",
  Tg = ".popover-header",
  Ag = ".popover-body",
  wg = {
    ...wn.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  Cg = { ...wn.DefaultType, content: "(null|string|element|function)" };
class To extends wn {
  static get Default() {
    return wg;
  }
  static get DefaultType() {
    return Cg;
  }
  static get NAME() {
    return yg;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [Tg]: this._getTitle(), [Ag]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = To.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Yt(To);
const Og = "scrollspy",
  Sg = "bs.scrollspy",
  Ao = `.${Sg}`,
  Ng = ".data-api",
  xg = `activate${Ao}`,
  Lr = `click${Ao}`,
  $g = `load${Ao}${Ng}`,
  Dg = "dropdown-item",
  tn = "active",
  Lg = '[data-bs-spy="scroll"]',
  bi = "[href]",
  Ig = ".nav, .list-group",
  Ir = ".nav-link",
  Rg = ".nav-item",
  Mg = ".list-group-item",
  Pg = `${Ir}, ${Rg} > ${Ir}, ${Mg}`,
  kg = ".dropdown",
  jg = ".dropdown-toggle",
  Vg = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  Hg = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class qs extends Xt {
  constructor(t, n) {
    super(t, n),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === "visible"
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh();
  }
  static get Default() {
    return Vg;
  }
  static get DefaultType() {
    return Hg;
  }
  static get NAME() {
    return Og;
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver());
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(t) {
    return (
      (t.target = Se(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == "string" &&
        (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))),
      t
    );
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (C.off(this._config.target, Lr),
      C.on(this._config.target, Lr, bi, (t) => {
        const n = this._observableSections.get(t.target.hash);
        if (n) {
          t.preventDefault();
          const s = this._rootElement || window,
            i = n.offsetTop - this._element.offsetTop;
          if (s.scrollTo) {
            s.scrollTo({ top: i, behavior: "smooth" });
            return;
          }
          s.scrollTop = i;
        }
      }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    };
    return new IntersectionObserver((n) => this._observerCallback(n), t);
  }
  _observerCallback(t) {
    const n = (o) => this._targetLinks.get(`#${o.target.id}`),
      s = (o) => {
        (this._previousScrollData.visibleEntryTop = o.target.offsetTop),
          this._process(n(o));
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      r = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const o of t) {
      if (!o.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(n(o));
        continue;
      }
      const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (r && a) {
        if ((s(o), !i)) return;
        continue;
      }
      !r && !a && s(o);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const t = V.find(bi, this._config.target);
    for (const n of t) {
      if (!n.hash || Ne(n)) continue;
      const s = V.findOne(decodeURI(n.hash), this._element);
      Tn(s) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(tn),
      this._activateParents(t),
      C.trigger(this._element, xg, { relatedTarget: t }));
  }
  _activateParents(t) {
    if (t.classList.contains(Dg)) {
      V.findOne(jg, t.closest(kg)).classList.add(tn);
      return;
    }
    for (const n of V.parents(t, Ig))
      for (const s of V.prev(n, Pg)) s.classList.add(tn);
  }
  _clearActiveClass(t) {
    t.classList.remove(tn);
    const n = V.find(`${bi}.${tn}`, t);
    for (const s of n) s.classList.remove(tn);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = qs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
C.on(window, $g, () => {
  for (const e of V.find(Lg)) qs.getOrCreateInstance(e);
});
Yt(qs);
const Fg = "tab",
  Wg = "bs.tab",
  Qe = `.${Wg}`,
  Bg = `hide${Qe}`,
  Kg = `hidden${Qe}`,
  Ug = `show${Qe}`,
  Yg = `shown${Qe}`,
  Gg = `click${Qe}`,
  zg = `keydown${Qe}`,
  qg = `load${Qe}`,
  Xg = "ArrowLeft",
  Rr = "ArrowRight",
  Qg = "ArrowUp",
  Mr = "ArrowDown",
  vi = "Home",
  Pr = "End",
  He = "active",
  kr = "fade",
  Ei = "show",
  Jg = "dropdown",
  Ya = ".dropdown-toggle",
  Zg = ".dropdown-menu",
  yi = `:not(${Ya})`,
  t_ = '.list-group, .nav, [role="tablist"]',
  e_ = ".nav-item, .list-group-item",
  n_ = `.nav-link${yi}, .list-group-item${yi}, [role="tab"]${yi}`,
  Ga =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  Ti = `${n_}, ${Ga}`,
  s_ = `.${He}[data-bs-toggle="tab"], .${He}[data-bs-toggle="pill"], .${He}[data-bs-toggle="list"]`;
class En extends Xt {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(t_)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        C.on(this._element, zg, (n) => this._keydown(n)));
  }
  static get NAME() {
    return Fg;
  }
  show() {
    const t = this._element;
    if (this._elemIsActive(t)) return;
    const n = this._getActiveElem(),
      s = n ? C.trigger(n, Bg, { relatedTarget: t }) : null;
    C.trigger(t, Ug, { relatedTarget: n }).defaultPrevented ||
      (s && s.defaultPrevented) ||
      (this._deactivate(n, t), this._activate(t, n));
  }
  _activate(t, n) {
    if (!t) return;
    t.classList.add(He), this._activate(V.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(Ei);
        return;
      }
      t.removeAttribute("tabindex"),
        t.setAttribute("aria-selected", !0),
        this._toggleDropDown(t, !0),
        C.trigger(t, Yg, { relatedTarget: n });
    };
    this._queueCallback(s, t, t.classList.contains(kr));
  }
  _deactivate(t, n) {
    if (!t) return;
    t.classList.remove(He),
      t.blur(),
      this._deactivate(V.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(Ei);
        return;
      }
      t.setAttribute("aria-selected", !1),
        t.setAttribute("tabindex", "-1"),
        this._toggleDropDown(t, !1),
        C.trigger(t, Kg, { relatedTarget: n });
    };
    this._queueCallback(s, t, t.classList.contains(kr));
  }
  _keydown(t) {
    if (![Xg, Rr, Qg, Mr, vi, Pr].includes(t.key)) return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((i) => !Ne(i));
    let s;
    if ([vi, Pr].includes(t.key)) s = n[t.key === vi ? 0 : n.length - 1];
    else {
      const i = [Rr, Mr].includes(t.key);
      s = vo(n, t.target, i, !0);
    }
    s && (s.focus({ preventScroll: !0 }), En.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return V.find(Ti, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const s of n) this._setInitialAttributesOnChild(s);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t),
      s = this._getOuterElement(t);
    t.setAttribute("aria-selected", n),
      s !== t && this._setAttributeIfNotExists(s, "role", "presentation"),
      n || t.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(t, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = V.getElementFromSelector(t);
    n &&
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(Jg)) return;
    const i = (r, o) => {
      const a = V.findOne(r, s);
      a && a.classList.toggle(o, n);
    };
    i(Ya, He), i(Zg, Ei), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(He);
  }
  _getInnerElement(t) {
    return t.matches(Ti) ? t : V.findOne(Ti, t);
  }
  _getOuterElement(t) {
    return t.closest(e_) || t;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = En.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
C.on(document, Gg, Ga, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    !Ne(this) && En.getOrCreateInstance(this).show();
});
C.on(window, qg, () => {
  for (const e of V.find(s_)) En.getOrCreateInstance(e);
});
Yt(En);
const i_ = "toast",
  o_ = "bs.toast",
  Re = `.${o_}`,
  r_ = `mouseover${Re}`,
  l_ = `mouseout${Re}`,
  a_ = `focusin${Re}`,
  c_ = `focusout${Re}`,
  u_ = `hide${Re}`,
  f_ = `hidden${Re}`,
  d_ = `show${Re}`,
  h_ = `shown${Re}`,
  p_ = "fade",
  jr = "hide",
  cs = "show",
  us = "showing",
  g_ = { animation: "boolean", autohide: "boolean", delay: "number" },
  __ = { animation: !0, autohide: !0, delay: 5e3 };
class Xs extends Xt {
  constructor(t, n) {
    super(t, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return __;
  }
  static get DefaultType() {
    return g_;
  }
  static get NAME() {
    return i_;
  }
  show() {
    if (C.trigger(this._element, d_).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(p_);
    const n = () => {
      this._element.classList.remove(us),
        C.trigger(this._element, h_),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(jr),
      Qn(this._element),
      this._element.classList.add(cs, us),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || C.trigger(this._element, u_).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(jr),
        this._element.classList.remove(us, cs),
        C.trigger(this._element, f_);
    };
    this._element.classList.add(us),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(cs),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(cs);
  }
  _maybeScheduleHide() {
    this._config.autohide &&
      (this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const s = t.relatedTarget;
    this._element === s ||
      this._element.contains(s) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    C.on(this._element, r_, (t) => this._onInteraction(t, !0)),
      C.on(this._element, l_, (t) => this._onInteraction(t, !1)),
      C.on(this._element, a_, (t) => this._onInteraction(t, !0)),
      C.on(this._element, c_, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Xs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ys(Xs);
Yt(Xs);
const m_ = {
    class: "col-md-5 col-lg-3 mx-auto border border-dark border-2 rounded-3",
  },
  b_ = { class: "container" },
  v_ = { class: "row border-bottom border-dark border-2" },
  E_ = { class: "col" },
  y_ = {
    class: "display text-end fs-1 overflow-hidden border-2",
    style: { "max-height": "0.5em" },
  },
  T_ = { class: "row justify-content-md-center" },
  A_ = { class: "col-md-auto" },
  w_ = { class: "row m-1" },
  C_ = { class: "col" },
  O_ = { class: "row m-1" },
  S_ = { class: "col" },
  N_ = { class: "row m-1" },
  x_ = { class: "col" },
  $_ = { class: "row m-1" },
  D_ = { class: "col" },
  L_ = { class: "row m-1" },
  I_ = { class: "col" },
  Vr = "/x-+%.",
  R_ = {
    __name: "SimpleCalculator",
    setup(e) {
      let t = Gn([]);
      const n = Yl(() => (console.log("computed", t), t.join("") || "0"));
      document.addEventListener("keydown", r);
      const s = [".", "/", "x", "-", "+"],
        i = {
          96: () => {
            o(0);
          },
          97: () => {
            o(1);
          },
          98: () => {
            o(2);
          },
          99: () => {
            o(3);
          },
          100: () => {
            o(4);
          },
          101: () => {
            o(5);
          },
          102: () => {
            o(6);
          },
          103: () => {
            o(7);
          },
          104: () => {
            o(8);
          },
          105: () => {
            o(9);
          },
          48: () => {
            o(0);
          },
          49: () => {
            o(1);
          },
          50: () => {
            o(2);
          },
          51: () => {
            o(3);
          },
          52: () => {
            o(4);
          },
          53: () => {
            o(5);
          },
          54: () => {
            o(6);
          },
          55: () => {
            o(7);
          },
          56: () => {
            o(8);
          },
          57: () => {
            o(9);
          },
          111: () => {
            o("/");
          },
          106: () => {
            o("x");
          },
          109: () => {
            o("-");
          },
          107: () => {
            o("+");
          },
          110: () => {
            o(".");
          },
          108: () => {
            o(".");
          },
          13: u,
          27: a,
          8: w,
        };
      function r(A) {
        console.log(A.keyCode, A.code), A.preventDefault(), i[A.keyCode]();
      }
      function o(A) {
        const d = t[t.length - 1],
          p = t[t.length - 2],
          E = Vr.includes(d),
          k = Vr.includes(A);
        if (t[0] === "-" && k === !1) {
          t.splice(0, 1, -A);
          return;
        }
        if (A === "negative") {
          t.splice(-1, 1, Number(-t.slice(-1)));
          return;
        }
        if (E === !1 && k === !1)
          if (d === void 0) t.push(Number(A)), console.log(t);
          else {
            const W = String(d) + String(A);
            console.log(W), (t[t.length - 1] = Number(W));
          }
        else {
          if (A === "." && p === ".") return;
          if (E === !1 && k === !0) t.push(A);
          else if (E === !0 && k === !0) {
            if (A === "." && t[t.length - 3] === ".") return;
            t.splice(-1, 1, A);
          } else E === !0 && k === !1 && t.push(A);
        }
        console.log(A, t);
      }
      function a() {
        t.splice(0), console.log(t);
      }
      function l() {
        for (let A of s) {
          let d = t.indexOf(A);
          if (d !== -1) return d;
        }
        return null;
      }
      function u() {
        if (t.length == 1) return;
        let A = l(),
          d = t[A - 1],
          p = t[A + 1];
        if (A === null) {
          console.log("error");
          return;
        }
        if (
          (t.includes("%") === !0 &&
            (t.pop(), t[A], console.log("передача в функции %", t)),
          isFinite(d) && isFinite(p))
        ) {
          let E = c(d, t[A], p);
          t.splice(A - 1, 3, E), u(), console.log(t);
        }
      }
      function c(A, d, p) {
        if (d == "+") return v(A, p);
        if (d == "-") return m(A, p);
        if (d == "/") return T(A, p);
        if (d == "x") return D(A, p);
        if (d == ".") return g(A, p);
      }
      function g(A, d) {
        return +(String(A) + "." + String(d));
      }
      function v(A, d) {
        return A + d;
      }
      function m(A, d) {
        return A - d;
      }
      function D(A, d) {
        return A * d;
      }
      function T(A, d) {
        return A / d;
      }
      function w() {
        let A = t.splice(-1).toString();
        console.log(A, A.length, t),
          A.length > 1 &&
            ((A = A.slice(0, A.length - 1)), t.push(+A), console.log(A, t));
      }
      function P(A, d, p) {}
      return (A, d) => (
        vt(),
        _e("div", m_, [
          _("div", b_, [
            _("div", v_, [_("div", E_, [_("div", y_, Ft(n.value), 1)])]),
            _("div", T_, [
              _("div", A_, [
                _("div", w_, [
                  _("div", C_, [
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[0] || (d[0] = (p) => a()),
                      },
                      " AC "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[1] || (d[1] = (p) => w()),
                      },
                      " ← "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[2] || (d[2] = (p) => o("negative")),
                      },
                      " +/- "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[3] || (d[3] = (p) => o("/")),
                      },
                      " / "
                    ),
                  ]),
                ]),
                _("div", O_, [
                  _("div", S_, [
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[4] || (d[4] = (p) => o(7)),
                      },
                      " 7 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[5] || (d[5] = (p) => o(8)),
                      },
                      " 8 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[6] || (d[6] = (p) => o(9)),
                      },
                      " 9 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[7] || (d[7] = (p) => o("x")),
                      },
                      " x "
                    ),
                  ]),
                ]),
                _("div", N_, [
                  _("div", x_, [
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[8] || (d[8] = (p) => o(4)),
                      },
                      " 4 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[9] || (d[9] = (p) => o(5)),
                      },
                      " 5 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[10] || (d[10] = (p) => o(6)),
                      },
                      " 6 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[11] || (d[11] = (p) => o("-")),
                      },
                      " - "
                    ),
                  ]),
                ]),
                _("div", $_, [
                  _("div", D_, [
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[12] || (d[12] = (p) => o(1)),
                      },
                      " 1 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[13] || (d[13] = (p) => o(2)),
                      },
                      " 2 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[14] || (d[14] = (p) => o(3)),
                      },
                      " 3 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[15] || (d[15] = (p) => o("+")),
                      },
                      " + "
                    ),
                  ]),
                ]),
                _("div", L_, [
                  _("div", I_, [
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button-calc-js button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[16] || (d[16] = (p) => o("%")),
                      },
                      " % "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[17] || (d[17] = (p) => o(0)),
                      },
                      " 0 "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[18] || (d[18] = (p) => o(".")),
                      },
                      " . "
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class:
                          "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3",
                        onClick: d[19] || (d[19] = (p) => u()),
                      },
                      " = "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  },
  M_ = { class: "modal-dialog" },
  P_ = { class: "modal-content" },
  k_ = { class: "modal-body" },
  j_ = { class: "js-line-btn col" },
  V_ = {
    __name: "ModalWindow",
    emits: ["changed-form"],
    setup(e, { expose: t, emit: n }) {
      const s = n,
        i = Y(null),
        r = Y("");
      let o = null;
      const a = Y(null),
        l = Y(!0),
        u = Y("animal");
      Vs(() => {
        (o = new ze(i.value)), console.log(o);
      });
      function c() {
        o.show(), console.log();
      }
      function g() {
        s("changed-form", r.value == "" ? "друг" : r.value, l.value, u.value),
          o.hide();
      }
      return (
        t({ openModal: c }),
        (v, m) => (
          vt(),
          _e(
            "div",
            {
              id: "exampleModal",
              ref_key: "simpleModal",
              ref: i,
              class: "modal fade",
              tabindex: "-1",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true",
            },
            [
              _("div", M_, [
                _("div", P_, [
                  m[7] ||
                    (m[7] = _(
                      "div",
                      { class: "modal-header" },
                      [
                        _(
                          "h1",
                          {
                            id: "exampleModalLabel",
                            class: "modal-title fs-5",
                          },
                          " Выберите нужные параметры "
                        ),
                        _("button", {
                          type: "button",
                          class: "btn-close",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Закрыть",
                        }),
                      ],
                      -1
                    )),
                  _("div", k_, [
                    _("div", null, [
                      m[4] || (m[4] = Bl(" Ваше имя ")),
                      Do(
                        _(
                          "input",
                          {
                            ref_key: "inputFocus",
                            ref: a,
                            "onUpdate:modelValue":
                              m[0] || (m[0] = (D) => (r.value = D)),
                            placeholder: "друг",
                          },
                          null,
                          512
                        ),
                        [[uf, r.value]]
                      ),
                    ]),
                    m[6] || (m[6] = _("br", null, null, -1)),
                    _("div", j_, [
                      _("div", null, [
                        _(
                          "button",
                          {
                            class: "col btn btn-outline-secondary",
                            "data-bs-toggle": "button",
                            onClick:
                              m[1] ||
                              (m[1] = (D) => {
                                l.value = !l.value;
                              }),
                          },
                          Ft(l.value ? "легко" : "сложно"),
                          1
                        ),
                        Do(
                          _(
                            "select",
                            {
                              "onUpdate:modelValue":
                                m[2] || (m[2] = (D) => (u.value = D)),
                              class: "col btn btn-outline-secondary",
                              onClick:
                                m[3] ||
                                (m[3] = (...D) =>
                                  v.changeCategory && v.changeCategory(...D)),
                            },
                            m[5] ||
                              (m[5] = [
                                _(
                                  "option",
                                  { value: "animal", data: "животные" },
                                  " Животные ",
                                  -1
                                ),
                                _(
                                  "option",
                                  { value: "edible" },
                                  " Съедобное ",
                                  -1
                                ),
                                _(
                                  "option",
                                  { value: "inedible" },
                                  " Несъедобное ",
                                  -1
                                ),
                                _(
                                  "option",
                                  { value: "all" },
                                  " Все категории ",
                                  -1
                                ),
                              ]),
                            512
                          ),
                          [[ff, u.value]]
                        ),
                      ]),
                    ]),
                  ]),
                  _("div", { class: "modal-footer" }, [
                    _(
                      "button",
                      {
                        type: "button",
                        class: "col btn btn-outline-secondary",
                        onClick: g,
                      },
                      " Сохранить изменения "
                    ),
                  ]),
                ]),
              ]),
            ],
            512
          )
        )
      );
    },
  },
  H_ = { class: "container text-center", style: { width: "600px" } },
  F_ = { class: "row" },
  W_ = ["innerHTML"],
  B_ = ["innerHTML"],
  K_ = { class: "js-block-answer-btn row justify-content-center" },
  U_ = { class: "js-hidden-word-btn row", style: { width: "400px" } },
  Y_ = { class: "js-line-btn col" },
  G_ = ["disabled"],
  z_ = { class: "js-line-btn row" },
  q_ = ["disabled"],
  X_ = ["disabled"],
  Q_ = ["disabled"],
  J_ = ["disabled"],
  Z_ = ["disabled"],
  tm = ["disabled"],
  em = ["disabled"],
  nm = ["disabled"],
  sm = ["disabled"],
  im = ["disabled"],
  om = ["disabled"],
  rm = ["disabled"],
  lm = { class: "js-line-btn row" },
  am = ["disabled"],
  cm = ["disabled"],
  um = ["disabled"],
  fm = ["disabled"],
  dm = ["disabled"],
  hm = ["disabled"],
  pm = ["disabled"],
  gm = ["disabled"],
  _m = ["disabled"],
  mm = ["disabled"],
  bm = ["disabled"],
  vm = { class: "js-line-btn row" },
  Em = ["disabled"],
  ym = ["disabled"],
  Tm = ["disabled"],
  Am = ["disabled"],
  wm = ["disabled"],
  Cm = ["disabled"],
  Om = ["disabled"],
  Sm = ["disabled"],
  Nm = ["disabled"],
  xm = { class: "js-line-btn col" },
  $m = { class: "d-grid gap-2" },
  Hr = 1,
  Ai = 2,
  Fr = 3,
  Dm = {
    __name: "GallowsGame",
    setup(e) {
      const t = Y("animal"),
        n = Y(null),
        s = Y(null),
        i = Y(!0),
        r = Y("easy"),
        o = Y(1),
        a = Y(null);
      let l = null;
      const u = Y(!1),
        c = Y(!1),
        g = Y(2);
      let v = Y("друг"),
        m = [X, J, ht, Gt, St, dt, fe, Qt, Vt, Nt];
      const D = m.length,
        T = {
          animal: "животные",
          edible: "съедобное",
          inedible: "несъедобное",
          all: "все категории",
          true: "легко",
          false: "сложно",
        },
        w = Gn({
          lettersUsed: [],
          answer: [],
          randomWord: "",
          maxLife: 7,
          remainingAttempts: 0,
          remainingLetters: 0,
        });
      function P() {
        s.value.openModal();
      }
      function A(U, O, S) {
        (v.value = U), (i.value = O), (t.value = S), rt();
      }
      const d = {
          startGame:
            'Угадайте букву или нажмите "Начать заново" что бы сменить слово. ',
          letterWas: "вы уже использовали букву!",
          correctLetter: "Поздравляем! Такая буква есть. Следующая буква?.",
          wrong: "Такой буквы нет. Осталось попыток: ",
          playerWin: "Молодец! Было загадано слово ",
          gameOver: "Вы проиграли! Было загадано слово: ",
          help: "У вас больше не осталось подсказок",
        },
        p = Y(d.startGame),
        E = {
          animal: {
            easy: [
              "лиса",
              "волк",
              "бобёр",
              "ёжик",
              "медведь",
              "олень",
              "заяц",
              "кролик",
              "корова",
              "лягушка",
              "кошка",
              "собака",
              "мышь",
            ],
            hard: [
              "игуана",
              "гиппопотам",
              "трясогузка",
              "леопард",
              "аллигатор",
              "горилла",
            ],
          },
          edible: {
            easy: [
              "каша",
              "пицца",
              "арбуз",
              "лимон",
              "грибы",
              "хлеб",
              "тесто",
              "мясо",
              "салат",
              "рыба",
              "молоко",
            ],
            hard: [
              "сельдерей",
              "фейхоа",
              "картофель",
              "абрикос",
              "баклажан",
              "виноград",
              "йогурт",
              "конфета",
              "свинина",
              "говядина",
            ],
          },
          inedible: {
            easy: [
              "окно",
              "стена",
              "шкаф",
              "стол",
              "стул",
              "пакет",
              "мешок",
              "шарик",
              "очки",
              "машина",
            ],
            hard: [
              "гильотина",
              "наволочка",
              "автозаправка",
              "фортепиано",
              "антресоль",
              "домкрат",
              "электричка",
              "сноуборд",
              "программа",
              "верёвка",
            ],
          },
          all: { easy: [], hard: [] },
        };
      function k() {
        console.log(g.value);
      }
      Vs(() => {
        for (let U in E)
          U != "all" &&
            ((E.all.easy = E.all.easy.concat(E[U].easy)),
            (E.all.hard = E.all.hard.concat(E[U].hard)));
        (l = a.value.getContext("2d")), rt();
      });
      function W() {
        let U = [];
        if (g.value === 0) {
          (p.value = d.help), (c.value = !0);
          return;
        }
        w.answer.forEach((h, b) => {
          h === "-" && U.push(b);
        });
        const O = Math.floor(Math.random() * U.length),
          S = U[O],
          ut = w.randomWord[S] === "ё" ? "е" : w.randomWord[S],
          f = document.querySelector(`[data-index="${ut}"]`);
        ct(f, ut), w.lettersUsed.push(ut), q(), g.value--;
      }
      function z(U) {
        return w.lettersUsed.includes(U)
          ? (console.log("repeat"), Hr)
          : w.randomWord.includes(U)
          ? (console.log("correct"), Ai)
          : U == "е" && w.randomWord.includes("ё")
          ? (console.log("correct", U), Ai)
          : (console.log("wrong"), Fr);
      }
      function q() {
        w.remainingAttempts == 0
          ? jt()
          : w.answer.includes("-") == !1 && w.remainingAttempts > 0 && tt();
      }
      function st() {
        (w.lettersUsed = []),
          (w.answer = []),
          (r.value = i.value ? "easy" : "hard"),
          r.value == "easy" ? (o.value = 1) : (o.value = 2),
          a.value.getContext("2d").clearRect(0, 0, 250, 300),
          (u.value = !1),
          document.querySelectorAll(".js-letter-btn").forEach((U) => {
            U.className =
              "js-letter-btn col btn btn-outline-secondary button-letters";
          }),
          i.value == !1 ? (w.maxLife = 10) : (w.maxLife = 7),
          (w.remainingAttempts = w.maxLife);
      }
      function rt() {
        st(),
          (w.randomWord =
            E[t.value][r.value][
              Math.floor(Math.random() * E[t.value][r.value].length)
            ]);
        for (let U = 0; w.randomWord.length > U; U++) w.answer[U] = "-";
      }
      function F(U) {
        const O = U.target,
          S = U.target.dataset.index;
        switch ((console.log("бутон позития", O), z(S))) {
          case Hr:
            console.log("было"), (p.value = `<b>${v.value}</b> ${d.letterWas}`);
            return;
          case Ai:
            console.log("передача леттера", S),
              (p.value = `<b>${v.value}</b> ${d.correctLetter}`),
              ct(O, S);
            break;
          case Fr:
            Ot(O),
              (p.value = `<b>${v.value}</b> ${d.wrong}"${w.remainingAttempts}"`),
              console.log("передача леттера", S);
            break;
        }
        w.lettersUsed.push(S), q(), console.log(O, S);
      }
      function ct(U, O) {
        let S = [O];
        O == "е" && (S = ["е", "ё"]);
        for (let ut = 0; ut < w.randomWord.length; ut++)
          S.includes(w.randomWord[ut]) &&
            ((w.answer[ut] = w.randomWord[ut]),
            w.remainingLetters--,
            (U.className += " letter-correct"),
            console.log("Буква найдена", w.answer, "Победа"));
      }
      function Ot(U) {
        (U.className += " letter-wrong"), w.remainingAttempts--;
        let O = D / w.maxLife,
          S = D - Math.ceil(O * w.remainingAttempts);
        S = Math.min(S, D);
        for (let ut = 0; S > ut; ut++)
          console.log("минус жизнь", ut, S, m[ut]), m[ut]();
      }
      function jt() {
        console.log("Проигрыш"),
          (p.value = `<b>${v.value}</b> ${d.gameOver} "${w.randomWord}"`);
        for (let U = 0; U < w.randomWord.length; U++)
          (w.answer[U] = w.randomWord[U]), console.log("проиграл");
        u.value = !0;
      }
      function tt() {
        (p.value = `<b>${v.value}</b> ${d.playerWin}<b>"${w.randomWord}"</b>`),
          zt(),
          (g.value += o.value),
          (c.value = !1),
          console.log("выйграл"),
          (u.value = !0);
      }
      function X() {
        l.beginPath(),
          l.moveTo(50, 240),
          l.lineTo(230, 240),
          (l.lineWidth = 2),
          l.stroke();
      }
      function J() {
        l.beginPath(),
          l.moveTo(100, 240),
          l.lineTo(100, 30),
          (l.lineWidth = 2),
          l.stroke();
      }
      function ht() {
        l.beginPath(),
          l.moveTo(60, 30),
          l.lineTo(180, 30),
          (l.lineWidth = 2),
          l.stroke();
      }
      function Gt() {
        l.beginPath(),
          l.moveTo(160, 31),
          l.lineTo(160, 80),
          (l.lineWidth = 2),
          l.stroke();
      }
      function St() {
        l.beginPath(),
          l.clearRect(140, 65, 40, 45),
          l.arc(160, 90, 25, 300, 360, !1),
          l.moveTo(147, 83),
          l.arc(147, 83, 5, 300, 360, !1),
          l.moveTo(172, 83),
          l.arc(172, 83, 5, 300, 360, !1),
          l.moveTo(160, 98),
          l.arc(160, 102, 5, 300, 360, !1),
          (l.lineWidth = 2),
          l.stroke();
      }
      function dt() {
        l.beginPath(),
          l.moveTo(160, 115),
          l.lineTo(160, 180),
          (l.lineWidth = 2),
          l.stroke();
      }
      function fe() {
        l.beginPath(),
          l.moveTo(160, 130),
          l.lineTo(120, 155),
          (l.lineWidth = 2),
          l.stroke();
      }
      function Qt() {
        l.beginPath(),
          l.moveTo(160, 130),
          l.lineTo(200, 155),
          (l.lineWidth = 2),
          l.stroke();
      }
      function Vt() {
        l.beginPath(),
          l.moveTo(160, 180),
          l.lineTo(135, 220),
          (l.lineWidth = 2),
          l.stroke();
      }
      function Nt() {
        l.beginPath(),
          l.clearRect(115, 31, 90, 190),
          l.moveTo(160, 30),
          l.lineTo(160, 75),
          l.arc(160, 100, 25, 300, 360, !1),
          l.moveTo(145, 89),
          l.lineTo(155, 96),
          l.moveTo(155, 89),
          l.lineTo(145, 96),
          l.moveTo(165, 89),
          l.lineTo(175, 96),
          l.moveTo(165, 96),
          l.lineTo(175, 89),
          l.moveTo(160, 108),
          l.arc(160, 112, 5, 300, 360, !1),
          l.moveTo(160, 125),
          l.lineTo(160, 180),
          l.moveTo(160, 140),
          l.lineTo(130, 180),
          l.moveTo(160, 140),
          l.lineTo(190, 180),
          l.moveTo(160, 180),
          l.lineTo(145, 225),
          l.moveTo(160, 180),
          l.lineTo(175, 225),
          (l.lineWidth = 2),
          l.stroke();
      }
      function zt() {
        l.beginPath(),
          l.clearRect(115, 63, 95, 165),
          l.moveTo(148.5, 111),
          l.arc(148.5, 115, 5, 300, 360, !1),
          (l.fillStyle = "white"),
          l.fill(),
          l.moveTo(148.5, 115),
          l.arc(148.5, 115, 0.05, 300, 360, !1),
          l.moveTo(170.5, 111),
          l.arc(170.5, 115, 5, 300, 360, !1, "white"),
          l.fill(),
          l.moveTo(170.5, 115),
          l.arc(170.5, 115, 0.05, 300, 360, !1),
          l.moveTo(160, 96),
          l.clearRect(140, 65, 40, 45),
          l.arc(160, 120, 25, 300, 360, !1),
          l.moveTo(175, 132),
          l.arc(160, 119, 20, 1, 2.4, !1),
          l.moveTo(160, 145),
          l.lineTo(160, 200),
          l.moveTo(160, 160),
          l.lineTo(120, 135),
          l.moveTo(160, 160),
          l.lineTo(200, 135),
          l.moveTo(160, 200),
          l.lineTo(135, 240),
          l.moveTo(160, 200),
          l.lineTo(185, 240),
          (l.lineWidth = 2),
          l.stroke();
      }
      return (U, O) => (
        vt(),
        _e("div", H_, [
          O[36] ||
            (O[36] = _("div", { class: "js-top-window-btn row" }, null, -1)),
          _("div", F_, [
            _("div", null, [
              _(
                "div",
                {
                  class: "container text-center",
                  innerHTML: `Привет <b>${We(v)}</b>. <p />категория: <b>${
                    T[t.value]
                  }</b>, сложность: <b>${T[i.value]}</b>`,
                },
                null,
                8,
                W_
              ),
              _(
                "canvas",
                {
                  ref_key: "canvasElementRef",
                  ref: a,
                  class: "canvas-style border border-black center",
                  height: "250px",
                  width: "300px",
                },
                null,
                512
              ),
            ]),
          ]),
          _(
            "div",
            {
              class: "container text-center",
              ref_key: "infoElementRef",
              ref: n,
              innerHTML: p.value,
            },
            null,
            8,
            B_
          ),
          O[37] ||
            (O[37] = _(
              "div",
              { class: "row" },
              [_("div", { class: "js-information-btn col" })],
              -1
            )),
          _("div", K_, [
            _("div", U_, [
              (vt(!0),
              _e(
                It,
                null,
                tu(
                  w.answer,
                  (S) => (
                    vt(),
                    _e(
                      "div",
                      { class: "js-answer-word-btn col", key: S.id },
                      Ft(S),
                      1
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
          _("div", Y_, [
            _("div", null, [
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  onClick: O[0] || (O[0] = (S) => rt()),
                },
                " Начать заново "
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  onClick: O[1] || (O[1] = (S) => P()),
                },
                " Настройки игры "
              ),
              oe(
                V_,
                { ref_key: "myModal", ref: s, onChangedForm: A },
                null,
                512
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  disabled: c.value,
                  onClick: O[2] || (O[2] = (S) => W()),
                },
                " всего подсказок: " + Ft(g.value),
                9,
                G_
              ),
            ]),
          ]),
          _("div", null, [
            _("div", z_, [
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "й",
                  onClick: O[3] || (O[3] = (S) => F(S)),
                },
                " Й ",
                8,
                q_
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ц",
                  onClick: O[4] || (O[4] = (S) => F(S)),
                },
                " Ц ",
                8,
                X_
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "у",
                  onClick: O[5] || (O[5] = (S) => F(S)),
                },
                " У ",
                8,
                Q_
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "к",
                  onClick: O[6] || (O[6] = (S) => F(S)),
                },
                " К ",
                8,
                J_
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "е",
                  onClick: O[7] || (O[7] = (S) => F(S)),
                },
                " Е ",
                8,
                Z_
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "н",
                  onClick: O[8] || (O[8] = (S) => F(S)),
                },
                " Н ",
                8,
                tm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "г",
                  onClick: O[9] || (O[9] = (S) => F(S)),
                },
                " Г ",
                8,
                em
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ш",
                  onClick: O[10] || (O[10] = (S) => F(S)),
                },
                " Ш ",
                8,
                nm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "щ",
                  onClick: O[11] || (O[11] = (S) => F(S)),
                },
                " Щ ",
                8,
                sm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "з",
                  onClick: O[12] || (O[12] = (S) => F(S)),
                },
                " З ",
                8,
                im
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "х",
                  onClick: O[13] || (O[13] = (S) => F(S)),
                },
                " Х ",
                8,
                om
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ъ",
                  onClick: O[14] || (O[14] = (S) => F(S)),
                },
                " Ъ ",
                8,
                rm
              ),
            ]),
            _("div", lm, [
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ф",
                  onClick: O[15] || (O[15] = (S) => F(S)),
                },
                " Ф ",
                8,
                am
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ы",
                  onClick: O[16] || (O[16] = (S) => F(S)),
                },
                " Ы ",
                8,
                cm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "в",
                  onClick: O[17] || (O[17] = (S) => F(S)),
                },
                " В ",
                8,
                um
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "а",
                  onClick: O[18] || (O[18] = (S) => F(S)),
                },
                " А ",
                8,
                fm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "п",
                  onClick: O[19] || (O[19] = (S) => F(S)),
                },
                " П ",
                8,
                dm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "р",
                  onClick: O[20] || (O[20] = (S) => F(S)),
                },
                " Р ",
                8,
                hm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "о",
                  onClick: O[21] || (O[21] = (S) => F(S)),
                },
                " О ",
                8,
                pm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "л",
                  onClick: O[22] || (O[22] = (S) => F(S)),
                },
                " Л ",
                8,
                gm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "д",
                  onClick: O[23] || (O[23] = (S) => F(S)),
                },
                " Д ",
                8,
                _m
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ж",
                  onClick: O[24] || (O[24] = (S) => F(S)),
                },
                " Ж ",
                8,
                mm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "э",
                  onClick: O[25] || (O[25] = (S) => F(S)),
                },
                " Э ",
                8,
                bm
              ),
            ]),
            _("div", vm, [
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "я",
                  onClick: O[26] || (O[26] = (S) => F(S)),
                },
                " Я ",
                8,
                Em
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ч",
                  onClick: O[27] || (O[27] = (S) => F(S)),
                },
                " Ч ",
                8,
                ym
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "с",
                  onClick: O[28] || (O[28] = (S) => F(S)),
                },
                " С ",
                8,
                Tm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "м",
                  onClick: O[29] || (O[29] = (S) => F(S)),
                },
                " М ",
                8,
                Am
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "и",
                  onClick: O[30] || (O[30] = (S) => F(S)),
                },
                " И ",
                8,
                wm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "т",
                  onClick: O[31] || (O[31] = (S) => F(S)),
                },
                " Т ",
                8,
                Cm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ь",
                  onClick: O[32] || (O[32] = (S) => F(S)),
                },
                " Ь ",
                8,
                Om
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "б",
                  onClick: O[33] || (O[33] = (S) => F(S)),
                },
                " Б ",
                8,
                Sm
              ),
              _(
                "button",
                {
                  class: "js-letter-btn col btn btn-outline-secondary",
                  ref: "letterButton",
                  disabled: u.value,
                  "data-index": "ю",
                  onClick: O[34] || (O[34] = (S) => F(S)),
                },
                " Ю ",
                8,
                Nm
              ),
            ]),
          ]),
          _("div", xm, [
            _("div", $m, [
              _(
                "button",
                {
                  class: "col btn btn-outline-secondary",
                  onClick: O[35] || (O[35] = (S) => k()),
                },
                " Проверка "
              ),
            ]),
          ]),
          O[38] || (O[38] = _("div", { class: "js-line-btn" }, null, -1)),
        ])
      );
    },
  },
  Lm = "/Lux-super-project/assets/map01-Bd6Y6zGu.jpg",
  Im = { class: "container text-center" },
  Rm = { class: "col" },
  Mm = { class: "js_distance" },
  Pm = {
    __name: "FindTheTreasure",
    setup(e) {
      const t = Y(null),
        n = Y(null),
        s = Y("null");
      let i = Y(0),
        r = Y(0);
      const o = Y(""),
        a = Y(""),
        l = Y({
          width: 600,
          height: 500,
          map: document.querySelector(".js_map"),
          clicks: 0,
        });
      let u = { x: c(l.value.width), y: c(l.value.height) };
      function c(D) {
        return Math.floor(Math.random() * D);
      }
      function g(D) {
        l.value.clicks++, (t.value = D.offsetX), (n.value = D.offsetY);
        let T = v(D.offsetX, D.offsetY);
        (s.value.className = "div-reactive"),
          setTimeout(() => {
            (a.value = ""), (s.value.className = "div-reactive-hidden");
          }, 4e3),
          T < 8
            ? (alert(
                "Клад найден! Сделано кликов: " +
                  l.value.clicks +
                  " и мы перепрятали клад."
              ),
              (o.value = "Попробуй найти!"),
              (l.value.clicks = 0),
              (u.x = u.x = c(l.value.width)),
              (u.y = u.x = c(l.value.width)))
            : T < 10
            ? ((a.value = "Обожжешься!"), (o.value = "Обожжешься!"))
            : T < 20
            ? ((a.value = "Очень горячо!"), (o.value = "Очень горячо!"))
            : T < 40
            ? ((a.value = "Горячо!"), (o.value = "Очень горячо!"))
            : T < 80
            ? ((a.value = "Тепло!"), (o.value = "Тепло!"))
            : T < 160
            ? ((a.value = "Холодно!"), (o.value = "Холодно!"))
            : T < 320
            ? ((a.value = "Очень холодно!"), (o.value = "Очень холодно!"))
            : ((a.value = "Замерзнешь!"), (o.value = "Замерзнешь!"));
      }
      function v(D, T) {
        let w = D - u.x,
          P = T - u.y;
        return Math.sqrt(w * w + P * P);
      }
      function m(D, T) {
        (s.value.style.left = D + 30 + "px"),
          (s.value.style.top = T + 10 + "px"),
          (i.value = D),
          (r.value = T);
      }
      return (D, T) => (
        vt(),
        _e(
          It,
          null,
          [
            _("div", Im, [
              _("div", Rm, [
                T[2] || (T[2] = _("h1", null, "Найди клад", -1)),
                _("div", null, [
                  _("p", Mm, Ft(o.value), 1),
                  _(
                    "img",
                    {
                      class: "js_map",
                      width: "600",
                      height: "500",
                      src: Lm,
                      onClick: T[0] || (T[0] = (w) => g(w)),
                      onMousemove:
                        T[1] || (T[1] = (w) => m(w.clientX, w.clientY)),
                    },
                    null,
                    32
                  ),
                ]),
              ]),
            ]),
            _("div", null, [
              _("div", null, [
                _(
                  "div",
                  {
                    ref_key: "targetDiv",
                    ref: s,
                    class: "div-reactive-hidden",
                  },
                  Ft(a.value),
                  513
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  km = { class: "container text-center" },
  jm = { class: "container text-center" },
  Vm = {
    __name: "GameOfLife",
    setup(e) {
      let t = Y(0),
        n = Y(0);
      const s = Y(null);
      let i = null,
        r = null,
        o = {},
        a = [],
        l = {};
      Vs(() => {
        i = s.value.getContext("2d");
        for (let d = 0; d < 400; d += 10) i.moveTo(d, 0), i.lineTo(d, 400);
        for (let d = 0; d < 400; d += 10) i.moveTo(0, d), i.lineTo(400, d);
        (i.strokeStyle = "silver"), i.stroke();
      });
      function u() {
        i.fillRect(60, 60, 10, 10),
          (o["60,60"] = [60, 60]),
          i.fillRect(60, 70, 10, 10),
          (o["60,70"] = [60, 70]),
          i.fillRect(60, 80, 10, 10),
          (o["60,80"] = [60, 80]),
          i.fillRect(80, 40, 10, 10),
          (o["80,40"] = [80, 40]),
          i.fillRect(100, 80, 10, 10),
          (o["100,80"] = [100, 80]),
          i.fillRect(110, 80, 10, 10),
          (o["110,80"] = [110, 80]),
          i.fillRect(120, 80, 10, 10),
          (o["120,80"] = [120, 80]),
          i.fillRect(120, 90, 10, 10),
          (o["120,90"] = [120, 90]),
          i.fillRect(120, 100, 10, 10),
          (o["120,100"] = [120, 100]),
          i.fillRect(110, 100, 10, 10),
          (o["110,100"] = [110, 100]),
          i.fillRect(100, 100, 10, 10),
          (o["100,100"] = [100, 100]),
          i.fillRect(100, 90, 10, 10),
          (o["100,90"] = [100, 90]),
          i.fillRect(30, 30, 10, 10),
          (o["30,30"] = [30, 30]),
          i.fillRect(40, 40, 10, 10),
          (o["40,40"] = [40, 40]),
          i.fillRect(40, 50, 10, 10),
          (o["40,50"] = [40, 50]),
          i.fillRect(30, 50, 10, 10),
          (o["30,50"] = [30, 50]),
          i.fillRect(20, 50, 10, 10),
          (o["20,50"] = [20, 50]),
          i.fillRect(0, 0, 10, 10),
          (o["0,0"] = [0, 0]),
          i.fillRect(10, 0, 10, 10),
          (o["10,0"] = [10, 0]),
          i.fillRect(20, 0, 10, 10),
          (o["20,0"] = [20, 0]),
          i.fillRect(0, 390, 10, 10),
          (o["0,390"] = [0, 390]);
      }
      function c() {
        let d = 0,
          p = 0;
        for (let E in o) (d = o[E][0]), (p = o[E][1]), g(d, p);
        m();
      }
      function g(d, p) {
        const E = [
          [d - 10, p - 10],
          [d, p - 10],
          [d + 10, p - 10],
          [d + 10, p],
          [d + 10, p + 10],
          [d, p + 10],
          [d - 10, p + 10],
          [d - 10, p],
        ];
        let k = -1,
          W = 0;
        const z = {
          1: o[`${E[0][0]},${E[0][1]}`],
          2: o[`${E[1][0]},${E[1][1]}`],
          3: o[`${E[2][0]},${E[2][1]}`],
          4: o[`${E[3][0]},${E[3][1]}`],
          5: o[`${E[4][0]},${E[4][1]}`],
          6: o[`${E[5][0]},${E[5][1]}`],
          7: o[`${E[6][0]},${E[6][1]}`],
          8: o[`${E[7][0]},${E[7][1]}`],
        };
        for (let q in z)
          (k += 1),
            z[q] != null && (W += 1),
            z[q] === void 0 && v(E[k][0], E[k][1]);
        (W < 2 || W > 3) && a.push([d, p]);
      }
      function v(d, p) {
        const E = [
          [d - 10, p - 10],
          [d, p - 10],
          [d + 10, p - 10],
          [d + 10, p],
          [d + 10, p + 10],
          [d, p + 10],
          [d - 10, p + 10],
          [d - 10, p],
        ];
        let k = 0;
        const W = {
          1: o[`${E[0][0]},${E[0][1]}`],
          2: o[`${E[1][0]},${E[1][1]}`],
          3: o[`${E[2][0]},${E[2][1]}`],
          4: o[`${E[3][0]},${E[3][1]}`],
          5: o[`${E[4][0]},${E[4][1]}`],
          6: o[`${E[5][0]},${E[5][1]}`],
          7: o[`${E[6][0]},${E[6][1]}`],
          8: o[`${E[7][0]},${E[7][1]}`],
        };
        for (let z in W) W[z] != null && (k += 1);
        k === 3 &&
          o[`${d},${p}`] == null &&
          d >= 0 &&
          (d < 400) & (p >= 0) &&
          p < 400 &&
          (l[`${d},${p}`] = [d, p]);
      }
      function m() {
        a.forEach((d) => {
          delete o[`${d[0]},${d[1]}`], i.clearRect(d[0], d[1], 10, 10);
        });
        for (let d in l)
          (o[`${l[d][0]},${l[d][1]}`] = [l[d][0], l[d][1]]),
            i.fillRect(l[d][0], l[d][1], 10, 10);
        (l = {}), (a = []);
        for (let d = 0; d < 400; d += 10) i.moveTo(d, 0), i.lineTo(d, 400);
        for (let d = 0; d < 400; d += 10) i.moveTo(0, d), i.lineTo(400, d);
        (i.strokeStyle = "silver"), i.stroke();
      }
      function D(d, p) {
        (t.value = d), (n.value = p);
      }
      function T(d, p) {
        (d = d - s.value.getBoundingClientRect().x),
          (p = p - s.value.getBoundingClientRect().y);
        let E = "",
          k = "",
          W = String(d),
          z = String(p);
        for (let q = 0; q < W.length - 1; q++) E = E + W[q];
        E = +(E + "0");
        for (let q = 0; q < z.length - 1; q++) k = k + z[q];
        (k = +(k + "0")), i.fillRect(E, k, 10, 10), (o[`${E},${k}`] = [E, k]);
      }
      function w() {
        i.clearRect(0, 0, 400, 400), (o = {});
        for (let d = 0; d < 400; d += 10) i.moveTo(d, 0), i.lineTo(d, 400);
        for (let d = 0; d < 400; d += 10) i.moveTo(0, d), i.lineTo(400, d);
        (i.strokeStyle = "silver"), i.stroke();
      }
      function P() {
        r = setInterval(() => c(), 0);
      }
      function A() {
        clearInterval(r), console.log(o);
      }
      return (d, p) => (
        vt(),
        _e(
          It,
          null,
          [
            _("div", { class: "container text-center" }, [
              p[2] || (p[2] = _("div", null, "Информация", -1)),
              _("button", { type: "button", onClick: c }, " шаг "),
              _("button", { type: "button", onClick: P }, " старт "),
              _("button", { type: "button", onClick: A }, " стоп "),
              _("button", { type: "button", onClick: w }, " сброс "),
              _("button", { type: "button", onClick: u }, " тест "),
            ]),
            _("div", km, [
              _(
                "canvas",
                {
                  ref_key: "canvasElementRef",
                  ref: s,
                  class: "position canvas-style border border-black center",
                  height: "400px",
                  width: "400px",
                  onMousemove: p[0] || (p[0] = (E) => D(E.clientX, E.clientY)),
                  onClick: p[1] || (p[1] = (E) => T(E.clientX, E.clientY)),
                },
                null,
                544
              ),
            ]),
            _("div", jm, Ft(We(t)) + " " + Ft(We(n)), 1),
          ],
          64
        )
      );
    },
  },
  Hm = { class: "Contur" },
  Fm = {
    __name: "VariousTesting",
    setup(e) {
      const t = Y("null");
      let n = Y(0),
        s = Y(0),
        i = Y("");
      function r(a, l) {
        (t.value.style.left = a - 10 + "px"),
          (t.value.style.top = l - 80 + "px"),
          (n.value = a),
          (s.value = l);
      }
      function o() {
        (t.value.className = "div-reactive"),
          console.log(t.value),
          (i.value = "Я изменился"),
          setTimeout(() => {
            (i.value = ""), (t.value.className = "div-reactive-hidden");
          }, 2e3),
          console.log("Click");
      }
      return (a, l) => (
        vt(),
        _e("div", null, [
          _("div", null, [
            _("h2", Hm, " тык " + Ft(We(n)) + " : " + Ft(We(s)), 1),
          ]),
          _(
            "div",
            {
              class: "box",
              onClick: l[0] || (l[0] = (u) => o(u.clientX, u.clientY)),
              onMousemove: l[1] || (l[1] = (u) => r(u.clientX, u.clientY)),
            },
            [
              _(
                "div",
                { ref_key: "targetDiv", ref: t, class: "div-reactive-hidden" },
                Ft(We(i)),
                513
              ),
            ],
            32
          ),
        ])
      );
    },
  },
  Wm = {
    __name: "App",
    setup(e) {
      const t = Y(!1),
        n = Y(!1),
        s = Y(!1),
        i = Y(!1),
        r = Y(!1),
        o = Y(null),
        a = Y(null),
        l = Y(null),
        u = Y(null),
        c = Y(null);
      function g() {
        (t.value = !0),
          (n.value = !1),
          (s.value = !1),
          (i.value = !1),
          (r.value = !1),
          (o.value.className += " active"),
          (a.value.className = "col btn btn-outline-secondary"),
          (l.value.className = "col btn btn-outline-secondary"),
          (u.value.className = "col btn btn-outline-secondary"),
          (c.value.className = "col btn btn-outline-secondary");
      }
      function v() {
        (t.value = !1),
          (n.value = !0),
          (s.value = !1),
          (i.value = !1),
          (r.value = !1),
          (a.value.className += " active"),
          (o.value.className = "col btn btn-outline-secondary"),
          (l.value.className = "col btn btn-outline-secondary"),
          (u.value.className = "col btn btn-outline-secondary"),
          (c.value.className = "col btn btn-outline-secondary");
      }
      function m() {
        (n.value = !1),
          (t.value = !1),
          (s.value = !0),
          (i.value = !1),
          (r.value = !1),
          (l.value.className += " active"),
          (o.value.className = "col btn btn-outline-secondary"),
          (a.value.className = "col btn btn-outline-secondary"),
          (u.value.className = "col btn btn-outline-secondary"),
          (c.value.className = "col btn btn-outline-secondary");
      }
      function D() {
        (t.value = !1),
          (n.value = !1),
          (s.value = !1),
          (i.value = !0),
          (r.value = !1),
          (o.value.className = "col btn btn-outline-secondary"),
          (a.value.className = "col btn btn-outline-secondary"),
          (l.value.className = "col btn btn-outline-secondary"),
          (u.value.className += " active"),
          (c.value.className = "col btn btn-outline-secondary");
      }
      function T() {
        (n.value = !1),
          (t.value = !1),
          (s.value = !1),
          (i.value = !1),
          (r.value = !0),
          (o.value.className = "col btn btn-outline-secondary"),
          (l.value.className = "col btn btn-outline-secondary"),
          (a.value.className = "col btn btn-outline-secondary"),
          (u.value.className = "col btn btn-outline-secondary"),
          (c.value.className += " active");
      }
      return (w, P) => (
        vt(),
        _e(
          It,
          null,
          [
            _("header", null, [
              _("div", null, [
                _(
                  "button",
                  {
                    ref_key: "calculatorLink",
                    ref: o,
                    type: "button",
                    class: "col btn btn-outline-secondary",
                    onClick: g,
                  },
                  " калькулятор ",
                  512
                ),
                _(
                  "button",
                  {
                    ref_key: "gallowsLink",
                    ref: a,
                    type: "button",
                    class: "col btn btn-outline-secondary",
                    onClick: v,
                  },
                  " виселица ",
                  512
                ),
                _(
                  "button",
                  {
                    ref_key: "findTheTreasureLink",
                    ref: l,
                    type: "button",
                    class: "col btn btn-outline-secondary",
                    onClick: m,
                  },
                  " найди клад ",
                  512
                ),
                _(
                  "button",
                  {
                    ref_key: "gameOfLifeLink",
                    ref: u,
                    type: "button",
                    class: "col btn btn-outline-secondary",
                    onClick: D,
                  },
                  " игра в жизнь ",
                  512
                ),
                _(
                  "button",
                  {
                    ref_key: "testLink",
                    ref: c,
                    type: "button",
                    class: "col btn btn-outline-secondary",
                    onClick: T,
                  },
                  " тестовое ",
                  512
                ),
              ]),
            ]),
            _("main", null, [
              t.value ? (vt(), nn(R_, { key: 0 })) : Nn("", !0),
              n.value ? (vt(), nn(Dm, { key: 1 })) : Nn("", !0),
              s.value ? (vt(), nn(Pm, { key: 2 })) : Nn("", !0),
              r.value ? (vt(), nn(Fm, { key: 3 })) : Nn("", !0),
              i.value ? (vt(), nn(Vm, { key: 4 })) : Nn("", !0),
            ]),
          ],
          64
        )
      );
    },
  };
pf(Wm).mount("#app");

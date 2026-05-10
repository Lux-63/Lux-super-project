(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const r of i.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Si(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const bt = {},
  xn = [],
  Ae = () => {},
  Eu = () => !1,
  lo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  xi = (e) => e.startsWith("onUpdate:"),
  Vt = Object.assign,
  $i = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  yu = Object.prototype.hasOwnProperty,
  mt = (e, t) => yu.call(e, t),
  st = Array.isArray,
  $n = (e) => Es(e) === "[object Map]",
  ao = (e) => Es(e) === "[object Set]",
  pr = (e) => Es(e) === "[object Date]",
  ot = (e) => typeof e == "function",
  St = (e) => typeof e == "string",
  pe = (e) => typeof e == "symbol",
  wt = (e) => e !== null && typeof e == "object",
  Gl = (e) => (wt(e) || ot(e)) && ot(e.then) && ot(e.catch),
  ql = Object.prototype.toString,
  Es = (e) => ql.call(e),
  wu = (e) => Es(e).slice(8, -1),
  zl = (e) => Es(e) === "[object Object]",
  Ni = (e) =>
    St(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  ss = Si(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  co = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Au = /-(\w)/g,
  ae = co((e) => e.replace(Au, (t, n) => (n ? n.toUpperCase() : ""))),
  Cu = /\B([A-Z])/g,
  Xe = co((e) => e.replace(Cu, "-$1").toLowerCase()),
  uo = co((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  $o = co((e) => (e ? `on${uo(e)}` : "")),
  We = (e, t) => !Object.is(e, t),
  Vs = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Xl = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  Gs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let gr;
const fo = () =>
  gr ||
  (gr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Li(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = St(s) ? xu(s) : Li(s);
      if (o) for (const i in o) t[i] = o[i];
    }
    return t;
  } else if (St(e) || wt(e)) return e;
}
const Tu = /;(?![^(]*\))/g,
  Ou = /:([^]+)/,
  Su = /\/\*[^]*?\*\//g;
function xu(e) {
  const t = {};
  return (
    e
      .replace(Su, "")
      .split(Tu)
      .forEach((n) => {
        if (n) {
          const s = n.split(Ou);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ri(e) {
  let t = "";
  if (St(e)) t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ri(e[n]);
      s && (t += s + " ");
    }
  else if (wt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const $u =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Nu = Si($u);
function Ql(e) {
  return !!e || e === "";
}
function Lu(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++) n = ho(e[s], t[s]);
  return n;
}
function ho(e, t) {
  if (e === t) return !0;
  let n = pr(e),
    s = pr(t);
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
  if (((n = pe(e)), (s = pe(t)), n || s)) return e === t;
  if (((n = st(e)), (s = st(t)), n || s)) return n && s ? Lu(e, t) : !1;
  if (((n = wt(e)), (s = wt(t)), n || s)) {
    if (!n || !s) return !1;
    const o = Object.keys(e).length,
      i = Object.keys(t).length;
    if (o !== i) return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r),
        l = t.hasOwnProperty(r);
      if ((a && !l) || (!a && l) || !ho(e[r], t[r])) return !1;
    }
  }
  return String(e) === String(t);
}
function Ru(e, t) {
  return e.findIndex((n) => ho(n, t));
}
const Jl = (e) => !!(e && e.__v_isRef === !0),
  Nt = (e) =>
    St(e)
      ? e
      : e == null
      ? ""
      : st(e) || (wt(e) && (e.toString === ql || !ot(e.toString)))
      ? Jl(e)
        ? Nt(e.value)
        : JSON.stringify(e, Zl, 2)
      : String(e),
  Zl = (e, t) =>
    Jl(t)
      ? Zl(e, t.value)
      : $n(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, o], i) => ((n[No(s, i) + " =>"] = o), n),
            {}
          ),
        }
      : ao(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => No(n)) }
      : pe(t)
      ? No(t)
      : wt(t) && !st(t) && !zl(t)
      ? String(t)
      : t,
  No = (e, t = "") => {
    var n;
    return pe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Zt;
class ku {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Zt),
      !t && Zt && (this.index = (Zt.scopes || (Zt.scopes = [])).push(this) - 1);
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
      const n = Zt;
      try {
        return (Zt = this), t();
      } finally {
        Zt = n;
      }
    }
  }
  on() {
    Zt = this;
  }
  off() {
    Zt = this.parent;
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
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Iu() {
  return Zt;
}
let yt;
const Lo = new WeakSet();
class ta {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Zt && Zt.active && Zt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Lo.has(this) && (Lo.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || na(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), mr(this), sa(this);
    const t = yt,
      n = he;
    (yt = this), (he = !0);
    try {
      return this.fn();
    } finally {
      oa(this), (yt = t), (he = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Di(t);
      (this.deps = this.depsTail = void 0),
        mr(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Lo.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    oi(this) && this.run();
  }
  get dirty() {
    return oi(this);
  }
}
let ea = 0,
  os,
  is;
function na(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = is), (is = e);
    return;
  }
  (e.next = os), (os = e);
}
function ki() {
  ea++;
}
function Ii() {
  if (--ea > 0) return;
  if (is) {
    let t = is;
    for (is = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; os; ) {
    let t = os;
    for (os = void 0; t; ) {
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
function sa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function oa(e) {
  let t,
    n = e.depsTail,
    s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Di(s), Du(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = o);
  }
  (e.deps = t), (e.depsTail = n);
}
function oi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (ia(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function ia(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === fs)
  )
    return;
  e.globalVersion = fs;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !oi(e))) {
    e.flags &= -3;
    return;
  }
  const n = yt,
    s = he;
  (yt = e), (he = !0);
  try {
    sa(e);
    const o = e.fn(e._value);
    (t.version === 0 || We(o, e._value)) && ((e._value = o), t.version++);
  } catch (o) {
    throw (t.version++, o);
  } finally {
    (yt = n), (he = s), oa(e), (e.flags &= -3);
  }
}
function Di(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (
    (s && ((s.nextSub = o), (e.prevSub = void 0)),
    o && ((o.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Di(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Du(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let he = !0;
const ra = [];
function Qe() {
  ra.push(he), (he = !1);
}
function Je() {
  const e = ra.pop();
  he = e === void 0 ? !0 : e;
}
function mr(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = yt;
    yt = void 0;
    try {
      t();
    } finally {
      yt = n;
    }
  }
}
let fs = 0;
class Pu {
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
class Pi {
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
    if (!yt || !he || yt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== yt)
      (n = this.activeLink = new Pu(yt, this)),
        yt.deps
          ? ((n.prevDep = yt.depsTail),
            (yt.depsTail.nextDep = n),
            (yt.depsTail = n))
          : (yt.deps = yt.depsTail = n),
        la(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep;
      (s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = yt.depsTail),
        (n.nextDep = void 0),
        (yt.depsTail.nextDep = n),
        (yt.depsTail = n),
        yt.deps === n && (yt.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, fs++, this.notify(t);
  }
  notify(t) {
    ki();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ii();
    }
  }
}
function la(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep) la(s);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const ii = new WeakMap(),
  fn = Symbol(""),
  ri = Symbol(""),
  ds = Symbol("");
function Dt(e, t, n) {
  if (he && yt) {
    let s = ii.get(e);
    s || ii.set(e, (s = new Map()));
    let o = s.get(n);
    o || (s.set(n, (o = new Pi())), (o.map = s), (o.key = n)), o.track();
  }
}
function Le(e, t, n, s, o, i) {
  const r = ii.get(e);
  if (!r) {
    fs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((ki(), t === "clear")) r.forEach(a);
  else {
    const l = st(e),
      c = l && Ni(n);
    if (l && n === "length") {
      const u = Number(s);
      r.forEach((d, m) => {
        (m === "length" || m === ds || (!pe(m) && m >= u)) && a(d);
      });
    } else
      switch (
        ((n !== void 0 || r.has(void 0)) && a(r.get(n)), c && a(r.get(ds)), t)
      ) {
        case "add":
          l ? c && a(r.get("length")) : (a(r.get(fn)), $n(e) && a(r.get(ri)));
          break;
        case "delete":
          l || (a(r.get(fn)), $n(e) && a(r.get(ri)));
          break;
        case "set":
          $n(e) && a(r.get(fn));
          break;
      }
  }
  Ii();
}
function bn(e) {
  const t = gt(e);
  return t === e ? t : (Dt(t, "iterate", ds), ie(e) ? t : t.map(Pt));
}
function po(e) {
  return Dt((e = gt(e)), "iterate", ds), e;
}
const Mu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ro(this, Symbol.iterator, Pt);
  },
  concat(...e) {
    return bn(this).concat(...e.map((t) => (st(t) ? bn(t) : t)));
  },
  entries() {
    return Ro(this, "entries", (e) => ((e[1] = Pt(e[1])), e));
  },
  every(e, t) {
    return xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xe(this, "filter", e, t, (n) => n.map(Pt), arguments);
  },
  find(e, t) {
    return xe(this, "find", e, t, Pt, arguments);
  },
  findIndex(e, t) {
    return xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xe(this, "findLast", e, t, Pt, arguments);
  },
  findLastIndex(e, t) {
    return xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ko(this, "includes", e);
  },
  indexOf(...e) {
    return ko(this, "indexOf", e);
  },
  join(e) {
    return bn(this).join(e);
  },
  lastIndexOf(...e) {
    return ko(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qn(this, "pop");
  },
  push(...e) {
    return Qn(this, "push", e);
  },
  reduce(e, ...t) {
    return _r(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _r(this, "reduceRight", e, t);
  },
  shift() {
    return Qn(this, "shift");
  },
  some(e, t) {
    return xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qn(this, "splice", e);
  },
  toReversed() {
    return bn(this).toReversed();
  },
  toSorted(e) {
    return bn(this).toSorted(e);
  },
  toSpliced(...e) {
    return bn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qn(this, "unshift", e);
  },
  values() {
    return Ro(this, "values", Pt);
  },
};
function Ro(e, t, n) {
  const s = po(e),
    o = s[t]();
  return (
    s !== e &&
      !ie(e) &&
      ((o._next = o.next),
      (o.next = () => {
        const i = o._next();
        return i.value && (i.value = n(i.value)), i;
      })),
    o
  );
}
const Bu = Array.prototype;
function xe(e, t, n, s, o, i) {
  const r = po(e),
    a = r !== e && !ie(e),
    l = r[t];
  if (l !== Bu[t]) {
    const d = l.apply(e, i);
    return a ? Pt(d) : d;
  }
  let c = n;
  r !== e &&
    (a
      ? (c = function (d, m) {
          return n.call(this, Pt(d), m, e);
        })
      : n.length > 2 &&
        (c = function (d, m) {
          return n.call(this, d, m, e);
        }));
  const u = l.call(r, c, s);
  return a && o ? o(u) : u;
}
function _r(e, t, n, s) {
  const o = po(e);
  let i = n;
  return (
    o !== e &&
      (ie(e)
        ? n.length > 3 &&
          (i = function (r, a, l) {
            return n.call(this, r, a, l, e);
          })
        : (i = function (r, a, l) {
            return n.call(this, r, Pt(a), l, e);
          })),
    o[t](i, ...s)
  );
}
function ko(e, t, n) {
  const s = gt(e);
  Dt(s, "iterate", ds);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Vi(n[0])
    ? ((n[0] = gt(n[0])), s[t](...n))
    : o;
}
function Qn(e, t, n = []) {
  Qe(), ki();
  const s = gt(e)[t].apply(e, n);
  return Ii(), Je(), s;
}
const Vu = Si("__proto__,__v_isRef,__isVue"),
  aa = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(pe)
  );
function ju(e) {
  pe(e) || (e = String(e));
  const t = gt(this);
  return Dt(t, "has", e), t.hasOwnProperty(e);
}
class ca {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (o ? (i ? Xu : ha) : i ? da : fa).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const r = st(t);
    if (!o) {
      let l;
      if (r && (l = Mu[n])) return l;
      if (n === "hasOwnProperty") return ju;
    }
    const a = Reflect.get(t, n, Bt(t) ? t : s);
    return (pe(n) ? aa.has(n) : Vu(n)) || (o || Dt(t, "get", n), i)
      ? a
      : Bt(a)
      ? r && Ni(n)
        ? a
        : a.value
      : wt(a)
      ? o
        ? ga(a)
        : mn(a)
      : a;
  }
}
class ua extends ca {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const l = hn(i);
      if (
        (!ie(s) && !hn(s) && ((i = gt(i)), (s = gt(s))),
        !st(t) && Bt(i) && !Bt(s))
      )
        return l ? !1 : ((i.value = s), !0);
    }
    const r = st(t) && Ni(n) ? Number(n) < t.length : mt(t, n),
      a = Reflect.set(t, n, s, Bt(t) ? t : o);
    return (
      t === gt(o) && (r ? We(s, i) && Le(t, "set", n, s) : Le(t, "add", n, s)),
      a
    );
  }
  deleteProperty(t, n) {
    const s = mt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Le(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!pe(n) || !aa.has(n)) && Dt(t, "has", n), s;
  }
  ownKeys(t) {
    return Dt(t, "iterate", st(t) ? "length" : fn), Reflect.ownKeys(t);
  }
}
class Hu extends ca {
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
const Fu = new ua(),
  Wu = new Hu(),
  Ku = new ua(!0);
const li = (e) => e,
  $s = (e) => Reflect.getPrototypeOf(e);
function Uu(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      i = gt(o),
      r = $n(i),
      a = e === "entries" || (e === Symbol.iterator && r),
      l = e === "keys" && r,
      c = o[e](...s),
      u = n ? li : t ? ai : Pt;
    return (
      !t && Dt(i, "iterate", l ? ri : fn),
      {
        next() {
          const { value: d, done: m } = c.next();
          return m
            ? { value: d, done: m }
            : { value: a ? [u(d[0]), u(d[1])] : u(d), done: m };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ns(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yu(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw,
        r = gt(i),
        a = gt(o);
      e || (We(o, a) && Dt(r, "get", o), Dt(r, "get", a));
      const { has: l } = $s(r),
        c = t ? li : e ? ai : Pt;
      if (l.call(r, o)) return c(i.get(o));
      if (l.call(r, a)) return c(i.get(a));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Dt(gt(o), "iterate", fn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw,
        r = gt(i),
        a = gt(o);
      return (
        e || (We(o, a) && Dt(r, "has", o), Dt(r, "has", a)),
        o === a ? i.has(o) : i.has(o) || i.has(a)
      );
    },
    forEach(o, i) {
      const r = this,
        a = r.__v_raw,
        l = gt(a),
        c = t ? li : e ? ai : Pt;
      return (
        !e && Dt(l, "iterate", fn),
        a.forEach((u, d) => o.call(i, c(u), c(d), r))
      );
    },
  };
  return (
    Vt(
      n,
      e
        ? {
            add: Ns("add"),
            set: Ns("set"),
            delete: Ns("delete"),
            clear: Ns("clear"),
          }
        : {
            add(o) {
              !t && !ie(o) && !hn(o) && (o = gt(o));
              const i = gt(this);
              return (
                $s(i).has.call(i, o) || (i.add(o), Le(i, "add", o, o)), this
              );
            },
            set(o, i) {
              !t && !ie(i) && !hn(i) && (i = gt(i));
              const r = gt(this),
                { has: a, get: l } = $s(r);
              let c = a.call(r, o);
              c || ((o = gt(o)), (c = a.call(r, o)));
              const u = l.call(r, o);
              return (
                r.set(o, i),
                c ? We(i, u) && Le(r, "set", o, i) : Le(r, "add", o, i),
                this
              );
            },
            delete(o) {
              const i = gt(this),
                { has: r, get: a } = $s(i);
              let l = r.call(i, o);
              l || ((o = gt(o)), (l = r.call(i, o))), a && a.call(i, o);
              const c = i.delete(o);
              return l && Le(i, "delete", o, void 0), c;
            },
            clear() {
              const o = gt(this),
                i = o.size !== 0,
                r = o.clear();
              return i && Le(o, "clear", void 0, void 0), r;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      n[o] = Uu(o, e, t);
    }),
    n
  );
}
function Mi(e, t) {
  const n = Yu(e, t);
  return (s, o, i) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? s
      : Reflect.get(mt(n, o) && o in s ? n : s, o, i);
}
const Gu = { get: Mi(!1, !1) },
  qu = { get: Mi(!1, !0) },
  zu = { get: Mi(!0, !1) };
const fa = new WeakMap(),
  da = new WeakMap(),
  ha = new WeakMap(),
  Xu = new WeakMap();
function Qu(e) {
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
function Ju(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qu(wu(e));
}
function mn(e) {
  return hn(e) ? e : Bi(e, !1, Fu, Gu, fa);
}
function pa(e) {
  return Bi(e, !1, Ku, qu, da);
}
function ga(e) {
  return Bi(e, !0, Wu, zu, ha);
}
function Bi(e, t, n, s, o) {
  if (!wt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = o.get(e);
  if (i) return i;
  const r = Ju(e);
  if (r === 0) return e;
  const a = new Proxy(e, r === 2 ? s : n);
  return o.set(e, a), a;
}
function Nn(e) {
  return hn(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function hn(e) {
  return !!(e && e.__v_isReadonly);
}
function ie(e) {
  return !!(e && e.__v_isShallow);
}
function Vi(e) {
  return e ? !!e.__v_raw : !1;
}
function gt(e) {
  const t = e && e.__v_raw;
  return t ? gt(t) : e;
}
function Zu(e) {
  return (
    !mt(e, "__v_skip") && Object.isExtensible(e) && Xl(e, "__v_skip", !0), e
  );
}
const Pt = (e) => (wt(e) ? mn(e) : e),
  ai = (e) => (wt(e) ? ga(e) : e);
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function U(e) {
  return ma(e, !1);
}
function tf(e) {
  return ma(e, !0);
}
function ma(e, t) {
  return Bt(e) ? e : new ef(e, t);
}
class ef {
  constructor(t, n) {
    (this.dep = new Pi()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : gt(t)),
      (this._value = n ? t : Pt(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || ie(t) || hn(t);
    (t = s ? t : gt(t)),
      We(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : Pt(t)),
        this.dep.trigger());
  }
}
function ft(e) {
  return Bt(e) ? e.value : e;
}
const nf = {
  get: (e, t, n) => (t === "__v_raw" ? e : ft(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const o = e[t];
    return Bt(o) && !Bt(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function _a(e) {
  return Nn(e) ? e : new Proxy(e, nf);
}
class sf {
  constructor(t, n, s) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Pi(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = fs - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && yt !== this))
      return na(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ia(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function of(e, t, n = !1) {
  let s, o;
  return ot(e) ? (s = e) : ((s = e.get), (o = e.set)), new sf(s, o, n);
}
const Ls = {},
  qs = new WeakMap();
let rn;
function rf(e, t = !1, n = rn) {
  if (n) {
    let s = qs.get(n);
    s || qs.set(n, (s = [])), s.push(e);
  }
}
function lf(e, t, n = bt) {
  const {
      immediate: s,
      deep: o,
      once: i,
      scheduler: r,
      augmentJob: a,
      call: l,
    } = n,
    c = (_) => (o ? _ : ie(_) || o === !1 || o === 0 ? Re(_, 1) : Re(_));
  let u,
    d,
    m,
    h,
    A = !1,
    w = !1;
  if (
    (Bt(e)
      ? ((d = () => e.value), (A = ie(e)))
      : Nn(e)
      ? ((d = () => c(e)), (A = !0))
      : st(e)
      ? ((w = !0),
        (A = e.some((_) => Nn(_) || ie(_))),
        (d = () =>
          e.map((_) => {
            if (Bt(_)) return _.value;
            if (Nn(_)) return c(_);
            if (ot(_)) return l ? l(_, 2) : _();
          })))
      : ot(e)
      ? t
        ? (d = l ? () => l(e, 2) : e)
        : (d = () => {
            if (m) {
              Qe();
              try {
                m();
              } finally {
                Je();
              }
            }
            const _ = rn;
            rn = u;
            try {
              return l ? l(e, 3, [h]) : e(h);
            } finally {
              rn = _;
            }
          })
      : (d = Ae),
    t && o)
  ) {
    const _ = d,
      O = o === !0 ? 1 / 0 : o;
    d = () => Re(_(), O);
  }
  const T = Iu(),
    M = () => {
      u.stop(), T && T.active && $i(T.effects, u);
    };
  if (i && t) {
    const _ = t;
    t = (...O) => {
      _(...O), M();
    };
  }
  let C = w ? new Array(e.length).fill(Ls) : Ls;
  const E = (_) => {
    if (!(!(u.flags & 1) || (!u.dirty && !_)))
      if (t) {
        const O = u.run();
        if (o || A || (w ? O.some((Y, j) => We(Y, C[j])) : We(O, C))) {
          m && m();
          const Y = rn;
          rn = u;
          try {
            const j = [O, C === Ls ? void 0 : w && C[0] === Ls ? [] : C, h];
            l ? l(t, 3, j) : t(...j), (C = O);
          } finally {
            rn = Y;
          }
        }
      } else u.run();
  };
  return (
    a && a(E),
    (u = new ta(d)),
    (u.scheduler = r ? () => r(E, !1) : E),
    (h = (_) => rf(_, !1, u)),
    (m = u.onStop =
      () => {
        const _ = qs.get(u);
        if (_) {
          if (l) l(_, 4);
          else for (const O of _) O();
          qs.delete(u);
        }
      }),
    t ? (s ? E(!0) : (C = u.run())) : r ? r(E.bind(null, !0), !0) : u.run(),
    (M.pause = u.pause.bind(u)),
    (M.resume = u.resume.bind(u)),
    (M.stop = M),
    M
  );
}
function Re(e, t = 1 / 0, n) {
  if (t <= 0 || !wt(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, Bt(e))) Re(e.value, t, n);
  else if (st(e)) for (let s = 0; s < e.length; s++) Re(e[s], t, n);
  else if (ao(e) || $n(e))
    e.forEach((s) => {
      Re(s, t, n);
    });
  else if (zl(e)) {
    for (const s in e) Re(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Re(e[s], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ys(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    go(o, t, n);
  }
}
function Oe(e, t, n, s) {
  if (ot(e)) {
    const o = ys(e, t, n, s);
    return (
      o &&
        Gl(o) &&
        o.catch((i) => {
          go(i, t, n);
        }),
      o
    );
  }
  if (st(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++) o.push(Oe(e[i], t, n, s));
    return o;
  }
}
function go(e, t, n, s = !0) {
  const o = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: r } =
      (t && t.appContext.config) || bt;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, l, c) === !1) return;
      }
      a = a.parent;
    }
    if (i) {
      Qe(), ys(i, null, 10, [e, l, c]), Je();
      return;
    }
  }
  af(e, n, o, s, r);
}
function af(e, t, n, s = !0, o = !1) {
  if (o) throw e;
  console.error(e);
}
const Wt = [];
let ye = -1;
const Ln = [];
let je = null,
  wn = 0;
const va = Promise.resolve();
let zs = null;
function ji(e) {
  const t = zs || va;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cf(e) {
  let t = ye + 1,
    n = Wt.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      o = Wt[s],
      i = hs(o);
    i < e || (i === e && o.flags & 2) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Hi(e) {
  if (!(e.flags & 1)) {
    const t = hs(e),
      n = Wt[Wt.length - 1];
    !n || (!(e.flags & 2) && t >= hs(n)) ? Wt.push(e) : Wt.splice(cf(t), 0, e),
      (e.flags |= 1),
      ba();
  }
}
function ba() {
  zs || (zs = va.then(ya));
}
function uf(e) {
  st(e)
    ? Ln.push(...e)
    : je && e.id === -1
    ? je.splice(wn + 1, 0, e)
    : e.flags & 1 || (Ln.push(e), (e.flags |= 1)),
    ba();
}
function vr(e, t, n = ye + 1) {
  for (; n < Wt.length; n++) {
    const s = Wt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue;
      Wt.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ea(e) {
  if (Ln.length) {
    const t = [...new Set(Ln)].sort((n, s) => hs(n) - hs(s));
    if (((Ln.length = 0), je)) {
      je.push(...t);
      return;
    }
    for (je = t, wn = 0; wn < je.length; wn++) {
      const n = je[wn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (je = null), (wn = 0);
  }
}
const hs = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ya(e) {
  try {
    for (ye = 0; ye < Wt.length; ye++) {
      const t = Wt[ye];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        ys(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ye < Wt.length; ye++) {
      const t = Wt[ye];
      t && (t.flags &= -2);
    }
    (ye = -1),
      (Wt.length = 0),
      Ea(),
      (zs = null),
      (Wt.length || Ln.length) && ya();
  }
}
let kt = null,
  wa = null;
function Xs(e) {
  const t = kt;
  return (kt = e), (wa = (e && e.type.__scopeId) || null), t;
}
function At(e, t = kt, n) {
  if (!t || e._n) return e;
  const s = (...o) => {
    s._d && xr(-1);
    const i = Xs(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Xs(i), s._d && xr(1);
    }
    return r;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Qs(e, t) {
  if (kt === null) return e;
  const n = bo(kt),
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, a, l = bt] = t[o];
    i &&
      (ot(i) && (i = { mounted: i, updated: i }),
      i.deep && Re(r),
      s.push({
        dir: i,
        instance: n,
        value: r,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return e;
}
function sn(e, t, n, s) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const a = o[r];
    i && (a.oldValue = i[r].value);
    let l = a.dir[s];
    l && (Qe(), Oe(l, n, 8, [e.el, a, e, t]), Je());
  }
}
const ff = Symbol("_vte"),
  df = (e) => e.__isTeleport;
function Fi(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Fi(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function Aa(e, t) {
  return ot(e) ? Vt({ name: e.name }, t, { setup: e }) : e;
}
function Ca(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Js(e, t, n, s, o = !1) {
  if (st(e)) {
    e.forEach((A, w) => Js(A, t && (st(t) ? t[w] : t), n, s, o));
    return;
  }
  if (Rn(s) && !o) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Js(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? bo(s.component) : s.el,
    r = o ? null : i,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === bt ? (a.refs = {}) : a.refs,
    d = a.setupState,
    m = gt(d),
    h = d === bt ? () => !1 : (A) => mt(m, A);
  if (
    (c != null &&
      c !== l &&
      (St(c)
        ? ((u[c] = null), h(c) && (d[c] = null))
        : Bt(c) && (c.value = null)),
    ot(l))
  )
    ys(l, a, 12, [r, u]);
  else {
    const A = St(l),
      w = Bt(l);
    if (A || w) {
      const T = () => {
        if (e.f) {
          const M = A ? (h(l) ? d[l] : u[l]) : l.value;
          o
            ? st(M) && $i(M, i)
            : st(M)
            ? M.includes(i) || M.push(i)
            : A
            ? ((u[l] = [i]), h(l) && (d[l] = u[l]))
            : ((l.value = [i]), e.k && (u[e.k] = l.value));
        } else
          A
            ? ((u[l] = r), h(l) && (d[l] = r))
            : w && ((l.value = r), e.k && (u[e.k] = r));
      };
      r ? ((T.id = -1), Jt(T, n)) : T();
    }
  }
}
fo().requestIdleCallback;
fo().cancelIdleCallback;
const Rn = (e) => !!e.type.__asyncLoader,
  Ta = (e) => e.type.__isKeepAlive;
function Oa(e, t) {
  xa(e, "a", t);
}
function Sa(e, t) {
  xa(e, "da", t);
}
function xa(e, t, n = Mt) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((mo(t, s, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Ta(o.parent.vnode) && hf(s, t, n, o), (o = o.parent);
  }
}
function hf(e, t, n, s) {
  const o = mo(t, e, s, !0);
  Wi(() => {
    $i(s[t], o);
  }, n);
}
function mo(e, t, n = Mt, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...r) => {
          Qe();
          const a = ws(n),
            l = Oe(t, n, e, r);
          return a(), Je(), l;
        });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Pe =
    (e) =>
    (t, n = Mt) => {
      (!_s || e === "sp") && mo(e, (...s) => t(...s), n);
    },
  pf = Pe("bm"),
  fe = Pe("m"),
  gf = Pe("bu"),
  $a = Pe("u"),
  mf = Pe("bum"),
  Wi = Pe("um"),
  _f = Pe("sp"),
  vf = Pe("rtg"),
  bf = Pe("rtc");
function Ef(e, t = Mt) {
  mo("ec", e, t);
}
const Na = "components";
function Dn(e, t) {
  return Ra(Na, e, !0, t) || e;
}
const La = Symbol.for("v-ndc");
function yf(e) {
  return St(e) ? Ra(Na, e, !1) || e : e || La;
}
function Ra(e, t, n = !0, s = !1) {
  const o = kt || Mt;
  if (o) {
    const i = o.type;
    {
      const a = ld(i, !1);
      if (a && (a === t || a === ae(t) || a === uo(ae(t)))) return i;
    }
    const r = br(o[e] || i[e], t) || br(o.appContext[e], t);
    return !r && s ? i : r;
  }
}
function br(e, t) {
  return e && (e[t] || e[ae(t)] || e[uo(ae(t))]);
}
function ps(e, t, n, s) {
  let o;
  const i = n,
    r = st(e);
  if (r || St(e)) {
    const a = r && Nn(e);
    let l = !1;
    a && ((l = !ie(e)), (e = po(e))), (o = new Array(e.length));
    for (let c = 0, u = e.length; c < u; c++)
      o[c] = t(l ? Pt(e[c]) : e[c], c, void 0, i);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, i);
  } else if (wt(e))
    if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, i));
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        o[l] = t(e[u], u, l, i);
      }
    }
  else o = [];
  return o;
}
function ka(e, t, n = {}, s, o) {
  if (kt.ce || (kt.parent && Rn(kt.parent) && kt.parent.ce))
    return (
      t !== "default" && (n.name = t), Q(), Pn(ht, null, [rt("slot", n, s)], 64)
    );
  let i = e[t];
  i && i._c && (i._d = !1), Q();
  const r = i && Ia(i(n)),
    a = n.key || (r && r.key),
    l = Pn(
      ht,
      { key: (a && !pe(a) ? a : `_${t}`) + "" },
      r || [],
      r && e._ === 1 ? 64 : -2
    );
  return (
    l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function Ia(e) {
  return e.some((t) =>
    ms(t) ? !(t.type === Ue || (t.type === ht && !Ia(t.children))) : !0
  )
    ? e
    : null;
}
const ci = (e) => (e ? (nc(e) ? bo(e) : ci(e.parent)) : null),
  rs = Vt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ci(e.parent),
    $root: (e) => ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Pa(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Hi(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ji.bind(e.proxy)),
    $watch: (e) => Ff.bind(e),
  }),
  Io = (e, t) => e !== bt && !e.__isScriptSetup && mt(e, t),
  wf = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: o,
        props: i,
        accessCache: r,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const h = r[t];
        if (h !== void 0)
          switch (h) {
            case 1:
              return s[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Io(s, t)) return (r[t] = 1), s[t];
          if (o !== bt && mt(o, t)) return (r[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && mt(c, t)) return (r[t] = 3), i[t];
          if (n !== bt && mt(n, t)) return (r[t] = 4), n[t];
          ui && (r[t] = 0);
        }
      }
      const u = rs[t];
      let d, m;
      if (u) return t === "$attrs" && Dt(e.attrs, "get", ""), u(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== bt && mt(n, t)) return (r[t] = 4), n[t];
      if (((m = l.config.globalProperties), mt(m, t))) return m[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: i } = e;
      return Io(o, t)
        ? ((o[t] = n), !0)
        : s !== bt && mt(s, t)
        ? ((s[t] = n), !0)
        : mt(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: o,
          propsOptions: i,
        },
      },
      r
    ) {
      let a;
      return (
        !!n[r] ||
        (e !== bt && mt(e, r)) ||
        Io(t, r) ||
        ((a = i[0]) && mt(a, r)) ||
        mt(s, r) ||
        mt(rs, r) ||
        mt(o.config.globalProperties, r)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : mt(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Er(e) {
  return st(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let ui = !0;
function Af(e) {
  const t = Pa(e),
    n = e.proxy,
    s = e.ctx;
  (ui = !1), t.beforeCreate && yr(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: i,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: m,
    beforeUpdate: h,
    updated: A,
    activated: w,
    deactivated: T,
    beforeDestroy: M,
    beforeUnmount: C,
    destroyed: E,
    unmounted: _,
    render: O,
    renderTracked: Y,
    renderTriggered: j,
    errorCaptured: lt,
    serverPrefetch: ut,
    expose: k,
    inheritAttrs: B,
    components: I,
    directives: it,
    filters: S,
  } = t;
  if ((c && Cf(c, s, null), r))
    for (const z in r) {
      const tt = r[z];
      ot(tt) && (s[z] = tt.bind(n));
    }
  if (o) {
    const z = o.call(n, n);
    wt(z) && (e.data = mn(z));
  }
  if (((ui = !0), i))
    for (const z in i) {
      const tt = i[z],
        _t = ot(tt) ? tt.bind(n, n) : ot(tt.get) ? tt.get.bind(n, n) : Ae,
        Lt = !ot(tt) && ot(tt.set) ? tt.set.bind(n) : Ae,
        It = oe({ get: _t, set: Lt });
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => It.value,
        set: (Tt) => (It.value = Tt),
      });
    }
  if (a) for (const z in a) Da(a[z], s, n, z);
  if (l) {
    const z = ot(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((tt) => {
      js(tt, z[tt]);
    });
  }
  u && yr(u, e, "c");
  function G(z, tt) {
    st(tt) ? tt.forEach((_t) => z(_t.bind(n))) : tt && z(tt.bind(n));
  }
  if (
    (G(pf, d),
    G(fe, m),
    G(gf, h),
    G($a, A),
    G(Oa, w),
    G(Sa, T),
    G(Ef, lt),
    G(bf, Y),
    G(vf, j),
    G(mf, C),
    G(Wi, _),
    G(_f, ut),
    st(k))
  )
    if (k.length) {
      const z = e.exposed || (e.exposed = {});
      k.forEach((tt) => {
        Object.defineProperty(z, tt, {
          get: () => n[tt],
          set: (_t) => (n[tt] = _t),
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Ae && (e.render = O),
    B != null && (e.inheritAttrs = B),
    I && (e.components = I),
    it && (e.directives = it),
    ut && Ca(e);
}
function Cf(e, t, n = Ae) {
  st(e) && (e = fi(e));
  for (const s in e) {
    const o = e[s];
    let i;
    wt(o)
      ? "default" in o
        ? (i = re(o.from || s, o.default, !0))
        : (i = re(o.from || s))
      : (i = re(o)),
      Bt(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (r) => (i.value = r),
          })
        : (t[s] = i);
  }
}
function yr(e, t, n) {
  Oe(st(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Da(e, t, n, s) {
  let o = s.includes(".") ? Xa(n, s) : () => n[s];
  if (St(e)) {
    const i = t[e];
    ot(i) && Ke(o, i);
  } else if (ot(e)) Ke(o, e.bind(n));
  else if (wt(e))
    if (st(e)) e.forEach((i) => Da(i, t, n, s));
    else {
      const i = ot(e.handler) ? e.handler.bind(n) : t[e.handler];
      ot(i) && Ke(o, i, e);
    }
}
function Pa(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    a = i.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !o.length && !n && !s
      ? (l = t)
      : ((l = {}), o.length && o.forEach((c) => Zs(l, c, r, !0)), Zs(l, t, r)),
    wt(t) && i.set(t, l),
    l
  );
}
function Zs(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Zs(e, i, n, !0), o && o.forEach((r) => Zs(e, r, n, !0));
  for (const r in t)
    if (!(s && r === "expose")) {
      const a = Tf[r] || (n && n[r]);
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const Tf = {
  data: wr,
  props: Ar,
  emits: Ar,
  methods: ns,
  computed: ns,
  beforeCreate: Ht,
  created: Ht,
  beforeMount: Ht,
  mounted: Ht,
  beforeUpdate: Ht,
  updated: Ht,
  beforeDestroy: Ht,
  beforeUnmount: Ht,
  destroyed: Ht,
  unmounted: Ht,
  activated: Ht,
  deactivated: Ht,
  errorCaptured: Ht,
  serverPrefetch: Ht,
  components: ns,
  directives: ns,
  watch: Sf,
  provide: wr,
  inject: Of,
};
function wr(e, t) {
  return t
    ? e
      ? function () {
          return Vt(
            ot(e) ? e.call(this, this) : e,
            ot(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Of(e, t) {
  return ns(fi(e), fi(t));
}
function fi(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ns(e, t) {
  return e ? Vt(Object.create(null), e, t) : t;
}
function Ar(e, t) {
  return e
    ? st(e) && st(t)
      ? [...new Set([...e, ...t])]
      : Vt(Object.create(null), Er(e), Er(t ?? {}))
    : t;
}
function Sf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Vt(Object.create(null), e);
  for (const s in t) n[s] = Ht(e[s], t[s]);
  return n;
}
function Ma() {
  return {
    app: null,
    config: {
      isNativeTag: Eu,
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
let xf = 0;
function $f(e, t) {
  return function (s, o = null) {
    ot(s) || (s = Vt({}, s)), o != null && !wt(o) && (o = null);
    const i = Ma(),
      r = new WeakSet(),
      a = [];
    let l = !1;
    const c = (i.app = {
      _uid: xf++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: cd,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...d) {
        return (
          r.has(u) ||
            (u && ot(u.install)
              ? (r.add(u), u.install(c, ...d))
              : ot(u) && (r.add(u), u(c, ...d))),
          c
        );
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c;
      },
      component(u, d) {
        return d ? ((i.components[u] = d), c) : i.components[u];
      },
      directive(u, d) {
        return d ? ((i.directives[u] = d), c) : i.directives[u];
      },
      mount(u, d, m) {
        if (!l) {
          const h = c._ceVNode || rt(s, o);
          return (
            (h.appContext = i),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            e(h, u, m),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            bo(h.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l &&
          (Oe(a, c._instance, 16),
          e(null, c._container),
          delete c._container.__vue_app__);
      },
      provide(u, d) {
        return (i.provides[u] = d), c;
      },
      runWithContext(u) {
        const d = kn;
        kn = c;
        try {
          return u();
        } finally {
          kn = d;
        }
      },
    });
    return c;
  };
}
let kn = null;
function js(e, t) {
  if (Mt) {
    let n = Mt.provides;
    const s = Mt.parent && Mt.parent.provides;
    s === n && (n = Mt.provides = Object.create(s)), (n[e] = t);
  }
}
function re(e, t, n = !1) {
  const s = Mt || kt;
  if (s || kn) {
    const o = kn
      ? kn._context.provides
      : s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && ot(t) ? t.call(s && s.proxy) : t;
  }
}
const Ba = {},
  Va = () => Object.create(Ba),
  ja = (e) => Object.getPrototypeOf(e) === Ba;
function Nf(e, t, n, s = !1) {
  const o = {},
    i = Va();
  (e.propsDefaults = Object.create(null)), Ha(e, t, o, i);
  for (const r in e.propsOptions[0]) r in o || (o[r] = void 0);
  n ? (e.props = s ? o : pa(o)) : e.type.props ? (e.props = o) : (e.props = i),
    (e.attrs = i);
}
function Lf(e, t, n, s) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: r },
    } = e,
    a = gt(o),
    [l] = e.propsOptions;
  let c = !1;
  if ((s || r > 0) && !(r & 16)) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let m = u[d];
        if (_o(e.emitsOptions, m)) continue;
        const h = t[m];
        if (l)
          if (mt(i, m)) h !== i[m] && ((i[m] = h), (c = !0));
          else {
            const A = ae(m);
            o[A] = di(l, a, A, h, e, !1);
          }
        else h !== i[m] && ((i[m] = h), (c = !0));
      }
    }
  } else {
    Ha(e, t, o, i) && (c = !0);
    let u;
    for (const d in a)
      (!t || (!mt(t, d) && ((u = Xe(d)) === d || !mt(t, u)))) &&
        (l
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (o[d] = di(l, a, d, void 0, e, !0))
          : delete o[d]);
    if (i !== a)
      for (const d in i) (!t || !mt(t, d)) && (delete i[d], (c = !0));
  }
  c && Le(e.attrs, "set", "");
}
function Ha(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1,
    a;
  if (t)
    for (let l in t) {
      if (ss(l)) continue;
      const c = t[l];
      let u;
      o && mt(o, (u = ae(l)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : _o(e.emitsOptions, l) ||
          ((!(l in s) || c !== s[l]) && ((s[l] = c), (r = !0)));
    }
  if (i) {
    const l = gt(n),
      c = a || bt;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = di(o, l, d, c[d], e, !mt(c, d));
    }
  }
  return r;
}
function di(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const a = mt(r, "default");
    if (a && s === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && ot(l)) {
        const { propsDefaults: c } = o;
        if (n in c) s = c[n];
        else {
          const u = ws(o);
          (s = c[n] = l.call(null, t)), u();
        }
      } else s = l;
      o.ce && o.ce._setProp(n, s);
    }
    r[0] &&
      (i && !a ? (s = !1) : r[1] && (s === "" || s === Xe(n)) && (s = !0));
  }
  return s;
}
const Rf = new WeakMap();
function Fa(e, t, n = !1) {
  const s = n ? Rf : t.propsCache,
    o = s.get(e);
  if (o) return o;
  const i = e.props,
    r = {},
    a = [];
  let l = !1;
  if (!ot(e)) {
    const u = (d) => {
      l = !0;
      const [m, h] = Fa(d, t, !0);
      Vt(r, m), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !l) return wt(e) && s.set(e, xn), xn;
  if (st(i))
    for (let u = 0; u < i.length; u++) {
      const d = ae(i[u]);
      Cr(d) && (r[d] = bt);
    }
  else if (i)
    for (const u in i) {
      const d = ae(u);
      if (Cr(d)) {
        const m = i[u],
          h = (r[d] = st(m) || ot(m) ? { type: m } : Vt({}, m)),
          A = h.type;
        let w = !1,
          T = !0;
        if (st(A))
          for (let M = 0; M < A.length; ++M) {
            const C = A[M],
              E = ot(C) && C.name;
            if (E === "Boolean") {
              w = !0;
              break;
            } else E === "String" && (T = !1);
          }
        else w = ot(A) && A.name === "Boolean";
        (h[0] = w), (h[1] = T), (w || mt(h, "default")) && a.push(d);
      }
    }
  const c = [r, a];
  return wt(e) && s.set(e, c), c;
}
function Cr(e) {
  return e[0] !== "$" && !ss(e);
}
const Wa = (e) => e[0] === "_" || e === "$stable",
  Ki = (e) => (st(e) ? e.map(we) : [we(e)]),
  kf = (e, t, n) => {
    if (t._n) return t;
    const s = At((...o) => Ki(t(...o)), n);
    return (s._c = !1), s;
  },
  Ka = (e, t, n) => {
    const s = e._ctx;
    for (const o in e) {
      if (Wa(o)) continue;
      const i = e[o];
      if (ot(i)) t[o] = kf(o, i, s);
      else if (i != null) {
        const r = Ki(i);
        t[o] = () => r;
      }
    }
  },
  Ua = (e, t) => {
    const n = Ki(t);
    e.slots.default = () => n;
  },
  Ya = (e, t, n) => {
    for (const s in t) (n || s !== "_") && (e[s] = t[s]);
  },
  If = (e, t, n) => {
    const s = (e.slots = Va());
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Ya(s, t, n), n && Xl(s, "_", o, !0)) : Ka(t, s);
    } else t && Ua(e, t);
  },
  Df = (e, t, n) => {
    const { vnode: s, slots: o } = e;
    let i = !0,
      r = bt;
    if (s.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (i = !1)
          : Ya(o, t, n)
        : ((i = !t.$stable), Ka(t, o)),
        (r = t);
    } else t && (Ua(e, t), (r = { default: 1 }));
    if (i) for (const a in o) !Wa(a) && r[a] == null && delete o[a];
  },
  Jt = zf;
function Pf(e) {
  return Mf(e);
}
function Mf(e, t) {
  const n = fo();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: o,
      patchProp: i,
      createElement: r,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: m,
      setScopeId: h = Ae,
      insertStaticContent: A,
    } = e,
    w = (
      p,
      g,
      b,
      $ = null,
      R = null,
      N = null,
      W = void 0,
      F = null,
      H = !!g.dynamicChildren
    ) => {
      if (p === g) return;
      p && !Jn(p, g) && (($ = x(p)), Tt(p, R, N, !0), (p = null)),
        g.patchFlag === -2 && ((H = !1), (g.dynamicChildren = null));
      const { type: V, ref: Z, shapeFlag: K } = g;
      switch (V) {
        case vo:
          T(p, g, b, $);
          break;
        case Ue:
          M(p, g, b, $);
          break;
        case Hs:
          p == null && C(g, b, $, W);
          break;
        case ht:
          I(p, g, b, $, R, N, W, F, H);
          break;
        default:
          K & 1
            ? O(p, g, b, $, R, N, W, F, H)
            : K & 6
            ? it(p, g, b, $, R, N, W, F, H)
            : (K & 64 || K & 128) && V.process(p, g, b, $, R, N, W, F, H, y);
      }
      Z != null && R && Js(Z, p && p.ref, N, g || p, !g);
    },
    T = (p, g, b, $) => {
      if (p == null) s((g.el = a(g.children)), b, $);
      else {
        const R = (g.el = p.el);
        g.children !== p.children && c(R, g.children);
      }
    },
    M = (p, g, b, $) => {
      p == null ? s((g.el = l(g.children || "")), b, $) : (g.el = p.el);
    },
    C = (p, g, b, $) => {
      [p.el, p.anchor] = A(p.children, g, b, $, p.el, p.anchor);
    },
    E = ({ el: p, anchor: g }, b, $) => {
      let R;
      for (; p && p !== g; ) (R = m(p)), s(p, b, $), (p = R);
      s(g, b, $);
    },
    _ = ({ el: p, anchor: g }) => {
      let b;
      for (; p && p !== g; ) (b = m(p)), o(p), (p = b);
      o(g);
    },
    O = (p, g, b, $, R, N, W, F, H) => {
      g.type === "svg" ? (W = "svg") : g.type === "math" && (W = "mathml"),
        p == null ? Y(g, b, $, R, N, W, F, H) : ut(p, g, R, N, W, F, H);
    },
    Y = (p, g, b, $, R, N, W, F) => {
      let H, V;
      const { props: Z, shapeFlag: K, transition: q, dirs: et } = p;
      if (
        ((H = p.el = r(p.type, N, Z && Z.is, Z)),
        K & 8
          ? u(H, p.children)
          : K & 16 && lt(p.children, H, null, $, R, Do(p, N), W, F),
        et && sn(p, null, $, "created"),
        j(H, p, p.scopeId, W, $),
        Z)
      ) {
        for (const vt in Z)
          vt !== "value" && !ss(vt) && i(H, vt, null, Z[vt], N, $);
        "value" in Z && i(H, "value", null, Z.value, N),
          (V = Z.onVnodeBeforeMount) && Ee(V, $, p);
      }
      et && sn(p, null, $, "beforeMount");
      const at = Bf(R, q);
      at && q.beforeEnter(H),
        s(H, g, b),
        ((V = Z && Z.onVnodeMounted) || at || et) &&
          Jt(() => {
            V && Ee(V, $, p), at && q.enter(H), et && sn(p, null, $, "mounted");
          }, R);
    },
    j = (p, g, b, $, R) => {
      if ((b && h(p, b), $)) for (let N = 0; N < $.length; N++) h(p, $[N]);
      if (R) {
        let N = R.subTree;
        if (
          g === N ||
          (Ja(N.type) && (N.ssContent === g || N.ssFallback === g))
        ) {
          const W = R.vnode;
          j(p, W, W.scopeId, W.slotScopeIds, R.parent);
        }
      }
    },
    lt = (p, g, b, $, R, N, W, F, H = 0) => {
      for (let V = H; V < p.length; V++) {
        const Z = (p[V] = F ? He(p[V]) : we(p[V]));
        w(null, Z, g, b, $, R, N, W, F);
      }
    },
    ut = (p, g, b, $, R, N, W) => {
      const F = (g.el = p.el);
      let { patchFlag: H, dynamicChildren: V, dirs: Z } = g;
      H |= p.patchFlag & 16;
      const K = p.props || bt,
        q = g.props || bt;
      let et;
      if (
        (b && on(b, !1),
        (et = q.onVnodeBeforeUpdate) && Ee(et, b, g, p),
        Z && sn(g, p, b, "beforeUpdate"),
        b && on(b, !0),
        ((K.innerHTML && q.innerHTML == null) ||
          (K.textContent && q.textContent == null)) &&
          u(F, ""),
        V
          ? k(p.dynamicChildren, V, F, b, $, Do(g, R), N)
          : W || tt(p, g, F, null, b, $, Do(g, R), N, !1),
        H > 0)
      ) {
        if (H & 16) B(F, K, q, b, R);
        else if (
          (H & 2 && K.class !== q.class && i(F, "class", null, q.class, R),
          H & 4 && i(F, "style", K.style, q.style, R),
          H & 8)
        ) {
          const at = g.dynamicProps;
          for (let vt = 0; vt < at.length; vt++) {
            const dt = at[vt],
              Xt = K[dt],
              Gt = q[dt];
            (Gt !== Xt || dt === "value") && i(F, dt, Xt, Gt, R, b);
          }
        }
        H & 1 && p.children !== g.children && u(F, g.children);
      } else !W && V == null && B(F, K, q, b, R);
      ((et = q.onVnodeUpdated) || Z) &&
        Jt(() => {
          et && Ee(et, b, g, p), Z && sn(g, p, b, "updated");
        }, $);
    },
    k = (p, g, b, $, R, N, W) => {
      for (let F = 0; F < g.length; F++) {
        const H = p[F],
          V = g[F],
          Z =
            H.el && (H.type === ht || !Jn(H, V) || H.shapeFlag & 70)
              ? d(H.el)
              : b;
        w(H, V, Z, null, $, R, N, W, !0);
      }
    },
    B = (p, g, b, $, R) => {
      if (g !== b) {
        if (g !== bt)
          for (const N in g) !ss(N) && !(N in b) && i(p, N, g[N], null, R, $);
        for (const N in b) {
          if (ss(N)) continue;
          const W = b[N],
            F = g[N];
          W !== F && N !== "value" && i(p, N, F, W, R, $);
        }
        "value" in b && i(p, "value", g.value, b.value, R);
      }
    },
    I = (p, g, b, $, R, N, W, F, H) => {
      const V = (g.el = p ? p.el : a("")),
        Z = (g.anchor = p ? p.anchor : a(""));
      let { patchFlag: K, dynamicChildren: q, slotScopeIds: et } = g;
      et && (F = F ? F.concat(et) : et),
        p == null
          ? (s(V, b, $), s(Z, b, $), lt(g.children || [], b, Z, R, N, W, F, H))
          : K > 0 && K & 64 && q && p.dynamicChildren
          ? (k(p.dynamicChildren, q, b, R, N, W, F),
            (g.key != null || (R && g === R.subTree)) && Ga(p, g, !0))
          : tt(p, g, b, Z, R, N, W, F, H);
    },
    it = (p, g, b, $, R, N, W, F, H) => {
      (g.slotScopeIds = F),
        p == null
          ? g.shapeFlag & 512
            ? R.ctx.activate(g, b, $, W, H)
            : S(g, b, $, R, N, W, H)
          : L(p, g, H);
    },
    S = (p, g, b, $, R, N, W) => {
      const F = (p.component = nd(p, $, R));
      if ((Ta(p) && (F.ctx.renderer = y), sd(F, !1, W), F.asyncDep)) {
        if ((R && R.registerDep(F, G, W), !p.el)) {
          const H = (F.subTree = rt(Ue));
          M(null, H, g, b);
        }
      } else G(F, p, g, b, R, N, W);
    },
    L = (p, g, b) => {
      const $ = (g.component = p.component);
      if (Gf(p, g, b))
        if ($.asyncDep && !$.asyncResolved) {
          z($, g, b);
          return;
        } else ($.next = g), $.update();
      else (g.el = p.el), ($.vnode = g);
    },
    G = (p, g, b, $, R, N, W) => {
      const F = () => {
        if (p.isMounted) {
          let { next: K, bu: q, u: et, parent: at, vnode: vt } = p;
          {
            const ve = qa(p);
            if (ve) {
              K && ((K.el = vt.el), z(p, K, W)),
                ve.asyncDep.then(() => {
                  p.isUnmounted || F();
                });
              return;
            }
          }
          let dt = K,
            Xt;
          on(p, !1),
            K ? ((K.el = vt.el), z(p, K, W)) : (K = vt),
            q && Vs(q),
            (Xt = K.props && K.props.onVnodeBeforeUpdate) && Ee(Xt, at, K, vt),
            on(p, !0);
          const Gt = Or(p),
            _e = p.subTree;
          (p.subTree = Gt),
            w(_e, Gt, d(_e.el), x(_e), p, R, N),
            (K.el = Gt.el),
            dt === null && qf(p, Gt.el),
            et && Jt(et, R),
            (Xt = K.props && K.props.onVnodeUpdated) &&
              Jt(() => Ee(Xt, at, K, vt), R);
        } else {
          let K;
          const { el: q, props: et } = g,
            { bm: at, m: vt, parent: dt, root: Xt, type: Gt } = p,
            _e = Rn(g);
          on(p, !1),
            at && Vs(at),
            !_e && (K = et && et.onVnodeBeforeMount) && Ee(K, dt, g),
            on(p, !0);
          {
            Xt.ce && Xt.ce._injectChildStyle(Gt);
            const ve = (p.subTree = Or(p));
            w(null, ve, b, $, p, R, N), (g.el = ve.el);
          }
          if ((vt && Jt(vt, R), !_e && (K = et && et.onVnodeMounted))) {
            const ve = g;
            Jt(() => Ee(K, dt, ve), R);
          }
          (g.shapeFlag & 256 ||
            (dt && Rn(dt.vnode) && dt.vnode.shapeFlag & 256)) &&
            p.a &&
            Jt(p.a, R),
            (p.isMounted = !0),
            (g = b = $ = null);
        }
      };
      p.scope.on();
      const H = (p.effect = new ta(F));
      p.scope.off();
      const V = (p.update = H.run.bind(H)),
        Z = (p.job = H.runIfDirty.bind(H));
      (Z.i = p), (Z.id = p.uid), (H.scheduler = () => Hi(Z)), on(p, !0), V();
    },
    z = (p, g, b) => {
      g.component = p;
      const $ = p.vnode.props;
      (p.vnode = g),
        (p.next = null),
        Lf(p, g.props, $, b),
        Df(p, g.children, b),
        Qe(),
        vr(p),
        Je();
    },
    tt = (p, g, b, $, R, N, W, F, H = !1) => {
      const V = p && p.children,
        Z = p ? p.shapeFlag : 0,
        K = g.children,
        { patchFlag: q, shapeFlag: et } = g;
      if (q > 0) {
        if (q & 128) {
          Lt(V, K, b, $, R, N, W, F, H);
          return;
        } else if (q & 256) {
          _t(V, K, b, $, R, N, W, F, H);
          return;
        }
      }
      et & 8
        ? (Z & 16 && xt(V, R, N), K !== V && u(b, K))
        : Z & 16
        ? et & 16
          ? Lt(V, K, b, $, R, N, W, F, H)
          : xt(V, R, N, !0)
        : (Z & 8 && u(b, ""), et & 16 && lt(K, b, $, R, N, W, F, H));
    },
    _t = (p, g, b, $, R, N, W, F, H) => {
      (p = p || xn), (g = g || xn);
      const V = p.length,
        Z = g.length,
        K = Math.min(V, Z);
      let q;
      for (q = 0; q < K; q++) {
        const et = (g[q] = H ? He(g[q]) : we(g[q]));
        w(p[q], et, b, null, R, N, W, F, H);
      }
      V > Z ? xt(p, R, N, !0, !1, K) : lt(g, b, $, R, N, W, F, H, K);
    },
    Lt = (p, g, b, $, R, N, W, F, H) => {
      let V = 0;
      const Z = g.length;
      let K = p.length - 1,
        q = Z - 1;
      for (; V <= K && V <= q; ) {
        const et = p[V],
          at = (g[V] = H ? He(g[V]) : we(g[V]));
        if (Jn(et, at)) w(et, at, b, null, R, N, W, F, H);
        else break;
        V++;
      }
      for (; V <= K && V <= q; ) {
        const et = p[K],
          at = (g[q] = H ? He(g[q]) : we(g[q]));
        if (Jn(et, at)) w(et, at, b, null, R, N, W, F, H);
        else break;
        K--, q--;
      }
      if (V > K) {
        if (V <= q) {
          const et = q + 1,
            at = et < Z ? g[et].el : $;
          for (; V <= q; )
            w(null, (g[V] = H ? He(g[V]) : we(g[V])), b, at, R, N, W, F, H),
              V++;
        }
      } else if (V > q) for (; V <= K; ) Tt(p[V], R, N, !0), V++;
      else {
        const et = V,
          at = V,
          vt = new Map();
        for (V = at; V <= q; V++) {
          const Qt = (g[V] = H ? He(g[V]) : we(g[V]));
          Qt.key != null && vt.set(Qt.key, V);
        }
        let dt,
          Xt = 0;
        const Gt = q - at + 1;
        let _e = !1,
          ve = 0;
        const Xn = new Array(Gt);
        for (V = 0; V < Gt; V++) Xn[V] = 0;
        for (V = et; V <= K; V++) {
          const Qt = p[V];
          if (Xt >= Gt) {
            Tt(Qt, R, N, !0);
            continue;
          }
          let be;
          if (Qt.key != null) be = vt.get(Qt.key);
          else
            for (dt = at; dt <= q; dt++)
              if (Xn[dt - at] === 0 && Jn(Qt, g[dt])) {
                be = dt;
                break;
              }
          be === void 0
            ? Tt(Qt, R, N, !0)
            : ((Xn[be - at] = V + 1),
              be >= ve ? (ve = be) : (_e = !0),
              w(Qt, g[be], b, null, R, N, W, F, H),
              Xt++);
        }
        const dr = _e ? Vf(Xn) : xn;
        for (dt = dr.length - 1, V = Gt - 1; V >= 0; V--) {
          const Qt = at + V,
            be = g[Qt],
            hr = Qt + 1 < Z ? g[Qt + 1].el : $;
          Xn[V] === 0
            ? w(null, be, b, hr, R, N, W, F, H)
            : _e && (dt < 0 || V !== dr[dt] ? It(be, b, hr, 2) : dt--);
        }
      }
    },
    It = (p, g, b, $, R = null) => {
      const { el: N, type: W, transition: F, children: H, shapeFlag: V } = p;
      if (V & 6) {
        It(p.component.subTree, g, b, $);
        return;
      }
      if (V & 128) {
        p.suspense.move(g, b, $);
        return;
      }
      if (V & 64) {
        W.move(p, g, b, y);
        return;
      }
      if (W === ht) {
        s(N, g, b);
        for (let K = 0; K < H.length; K++) It(H[K], g, b, $);
        s(p.anchor, g, b);
        return;
      }
      if (W === Hs) {
        E(p, g, b);
        return;
      }
      if ($ !== 2 && V & 1 && F)
        if ($ === 0) F.beforeEnter(N), s(N, g, b), Jt(() => F.enter(N), R);
        else {
          const { leave: K, delayLeave: q, afterLeave: et } = F,
            at = () => s(N, g, b),
            vt = () => {
              K(N, () => {
                at(), et && et();
              });
            };
          q ? q(N, at, vt) : vt();
        }
      else s(N, g, b);
    },
    Tt = (p, g, b, $ = !1, R = !1) => {
      const {
        type: N,
        props: W,
        ref: F,
        children: H,
        dynamicChildren: V,
        shapeFlag: Z,
        patchFlag: K,
        dirs: q,
        cacheIndex: et,
      } = p;
      if (
        (K === -2 && (R = !1),
        F != null && Js(F, null, b, p, !0),
        et != null && (g.renderCache[et] = void 0),
        Z & 256)
      ) {
        g.ctx.deactivate(p);
        return;
      }
      const at = Z & 1 && q,
        vt = !Rn(p);
      let dt;
      if ((vt && (dt = W && W.onVnodeBeforeUnmount) && Ee(dt, g, p), Z & 6))
        Rt(p.component, b, $);
      else {
        if (Z & 128) {
          p.suspense.unmount(b, $);
          return;
        }
        at && sn(p, null, g, "beforeUnmount"),
          Z & 64
            ? p.type.remove(p, g, b, y, $)
            : V && !V.hasOnce && (N !== ht || (K > 0 && K & 64))
            ? xt(V, g, b, !1, !0)
            : ((N === ht && K & 384) || (!R && Z & 16)) && xt(H, g, b),
          $ && zt(p);
      }
      ((vt && (dt = W && W.onVnodeUnmounted)) || at) &&
        Jt(() => {
          dt && Ee(dt, g, p), at && sn(p, null, g, "unmounted");
        }, b);
    },
    zt = (p) => {
      const { type: g, el: b, anchor: $, transition: R } = p;
      if (g === ht) {
        jt(b, $);
        return;
      }
      if (g === Hs) {
        _(p);
        return;
      }
      const N = () => {
        o(b), R && !R.persisted && R.afterLeave && R.afterLeave();
      };
      if (p.shapeFlag & 1 && R && !R.persisted) {
        const { leave: W, delayLeave: F } = R,
          H = () => W(b, N);
        F ? F(p.el, N, H) : H();
      } else N();
    },
    jt = (p, g) => {
      let b;
      for (; p !== g; ) (b = m(p)), o(p), (p = b);
      o(g);
    },
    Rt = (p, g, b) => {
      const { bum: $, scope: R, job: N, subTree: W, um: F, m: H, a: V } = p;
      Tr(H),
        Tr(V),
        $ && Vs($),
        R.stop(),
        N && ((N.flags |= 8), Tt(W, p, g, b)),
        F && Jt(F, g),
        Jt(() => {
          p.isUnmounted = !0;
        }, g),
        g &&
          g.pendingBranch &&
          !g.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === g.pendingId &&
          (g.deps--, g.deps === 0 && g.resolve());
    },
    xt = (p, g, b, $ = !1, R = !1, N = 0) => {
      for (let W = N; W < p.length; W++) Tt(p[W], g, b, $, R);
    },
    x = (p) => {
      if (p.shapeFlag & 6) return x(p.component.subTree);
      if (p.shapeFlag & 128) return p.suspense.next();
      const g = m(p.anchor || p.el),
        b = g && g[ff];
      return b ? m(b) : g;
    };
  let D = !1;
  const v = (p, g, b) => {
      p == null
        ? g._vnode && Tt(g._vnode, null, null, !0)
        : w(g._vnode || null, p, g, null, null, null, b),
        (g._vnode = p),
        D || ((D = !0), vr(), Ea(), (D = !1));
    },
    y = {
      p: w,
      um: Tt,
      m: It,
      r: zt,
      mt: S,
      mc: lt,
      pc: tt,
      pbc: k,
      n: x,
      o: e,
    };
  return { render: v, hydrate: void 0, createApp: $f(v) };
}
function Do({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function on({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Bf(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Ga(e, t, n = !1) {
  const s = e.children,
    o = t.children;
  if (st(s) && st(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let a = o[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = o[i] = He(o[i])), (a.el = r.el)),
        !n && a.patchFlag !== -2 && Ga(r, a)),
        a.type === vo && (a.el = r.el);
    }
}
function Vf(e) {
  const t = e.slice(),
    n = [0];
  let s, o, i, r, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const c = e[s];
    if (c !== 0) {
      if (((o = n[n.length - 1]), e[o] < c)) {
        (t[s] = o), n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        (a = (i + r) >> 1), e[n[a]] < c ? (i = a + 1) : (r = a);
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; ) (n[i] = r), (r = t[r]);
  return n;
}
function qa(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : qa(t);
}
function Tr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const jf = Symbol.for("v-scx"),
  Hf = () => re(jf);
function Ke(e, t, n) {
  return za(e, t, n);
}
function za(e, t, n = bt) {
  const { immediate: s, deep: o, flush: i, once: r } = n,
    a = Vt({}, n),
    l = (t && s) || (!t && i !== "post");
  let c;
  if (_s) {
    if (i === "sync") {
      const h = Hf();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {};
      return (h.stop = Ae), (h.resume = Ae), (h.pause = Ae), h;
    }
  }
  const u = Mt;
  a.call = (h, A, w) => Oe(h, u, A, w);
  let d = !1;
  i === "post"
    ? (a.scheduler = (h) => {
        Jt(h, u && u.suspense);
      })
    : i !== "sync" &&
      ((d = !0),
      (a.scheduler = (h, A) => {
        A ? h() : Hi(h);
      })),
    (a.augmentJob = (h) => {
      t && (h.flags |= 4),
        d && ((h.flags |= 2), u && ((h.id = u.uid), (h.i = u)));
    });
  const m = lf(e, t, a);
  return _s && (c ? c.push(m) : l && m()), m;
}
function Ff(e, t, n) {
  const s = this.proxy,
    o = St(e) ? (e.includes(".") ? Xa(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  ot(t) ? (i = t) : ((i = t.handler), (n = t));
  const r = ws(this),
    a = za(o, i.bind(s), n);
  return r(), a;
}
function Xa(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++) s = s[n[o]];
    return s;
  };
}
const Wf = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function Kf(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || bt;
  let o = n;
  const i = t.startsWith("update:"),
    r = i && Wf(s, t.slice(7));
  r &&
    (r.trim && (o = n.map((u) => (St(u) ? u.trim() : u))),
    r.number && (o = n.map(Gs)));
  let a,
    l = s[(a = $o(t))] || s[(a = $o(ae(t)))];
  !l && i && (l = s[(a = $o(Xe(t)))]), l && Oe(l, e, 6, o);
  const c = s[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Oe(c, e, 6, o);
  }
}
function Qa(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e);
  if (o !== void 0) return o;
  const i = e.emits;
  let r = {},
    a = !1;
  if (!ot(e)) {
    const l = (c) => {
      const u = Qa(c, t, !0);
      u && ((a = !0), Vt(r, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !i && !a
    ? (wt(e) && s.set(e, null), null)
    : (st(i) ? i.forEach((l) => (r[l] = null)) : Vt(r, i),
      wt(e) && s.set(e, r),
      r);
}
function _o(e, t) {
  return !e || !lo(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      mt(e, t[0].toLowerCase() + t.slice(1)) || mt(e, Xe(t)) || mt(e, t));
}
function Or(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: o,
      propsOptions: [i],
      slots: r,
      attrs: a,
      emit: l,
      render: c,
      renderCache: u,
      props: d,
      data: m,
      setupState: h,
      ctx: A,
      inheritAttrs: w,
    } = e,
    T = Xs(e);
  let M, C;
  try {
    if (n.shapeFlag & 4) {
      const _ = o || s,
        O = _;
      (M = we(c.call(O, _, u, d, h, m, A))), (C = a);
    } else {
      const _ = t;
      (M = we(
        _.length > 1 ? _(d, { attrs: a, slots: r, emit: l }) : _(d, null)
      )),
        (C = t.props ? a : Uf(a));
    }
  } catch (_) {
    (ls.length = 0), go(_, e, 1), (M = rt(Ue));
  }
  let E = M;
  if (C && w !== !1) {
    const _ = Object.keys(C),
      { shapeFlag: O } = E;
    _.length &&
      O & 7 &&
      (i && _.some(xi) && (C = Yf(C, i)), (E = Mn(E, C, !1, !0)));
  }
  return (
    n.dirs &&
      ((E = Mn(E, null, !1, !0)),
      (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Fi(E, n.transition),
    (M = E),
    Xs(T),
    M
  );
}
const Uf = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || lo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Yf = (e, t) => {
    const n = {};
    for (const s in e) (!xi(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Gf(e, t, n) {
  const { props: s, children: o, component: i } = e,
    { props: r, children: a, patchFlag: l } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? Sr(s, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (r[m] !== s[m] && !_o(c, m)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable)
      ? !0
      : s === r
      ? !1
      : s
      ? r
        ? Sr(s, r, c)
        : !0
      : !!r;
  return !1;
}
function Sr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !_o(n, i)) return !0;
  }
  return !1;
}
function qf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Ja = (e) => e.__isSuspense;
function zf(e, t) {
  t && t.pendingBranch
    ? st(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : uf(e);
}
const ht = Symbol.for("v-fgt"),
  vo = Symbol.for("v-txt"),
  Ue = Symbol.for("v-cmt"),
  Hs = Symbol.for("v-stc"),
  ls = [];
let te = null;
function Q(e = !1) {
  ls.push((te = e ? null : []));
}
function Xf() {
  ls.pop(), (te = ls[ls.length - 1] || null);
}
let gs = 1;
function xr(e, t = !1) {
  (gs += e), e < 0 && te && t && (te.hasOnce = !0);
}
function Za(e) {
  return (
    (e.dynamicChildren = gs > 0 ? te || xn : null),
    Xf(),
    gs > 0 && te && te.push(e),
    e
  );
}
function nt(e, t, n, s, o, i) {
  return Za(f(e, t, n, s, o, i, !0));
}
function Pn(e, t, n, s, o) {
  return Za(rt(e, t, n, s, o, !0));
}
function ms(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tc = ({ key: e }) => e ?? null,
  Fs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? St(e) || Bt(e) || ot(e)
        ? { i: kt, r: e, k: t, f: !!n }
        : e
      : null
  );
function f(
  e,
  t = null,
  n = null,
  s = 0,
  o = null,
  i = e === ht ? 0 : 1,
  r = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tc(t),
    ref: t && Fs(t),
    scopeId: wa,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: kt,
  };
  return (
    a
      ? (Ui(l, n), i & 128 && e.normalize(l))
      : n && (l.shapeFlag |= St(n) ? 8 : 16),
    gs > 0 &&
      !r &&
      te &&
      (l.patchFlag > 0 || i & 6) &&
      l.patchFlag !== 32 &&
      te.push(l),
    l
  );
}
const rt = Qf;
function Qf(e, t = null, n = null, s = 0, o = null, i = !1) {
  if (((!e || e === La) && (e = Ue), ms(e))) {
    const a = Mn(e, t, !0);
    return (
      n && Ui(a, n),
      gs > 0 &&
        !i &&
        te &&
        (a.shapeFlag & 6 ? (te[te.indexOf(e)] = a) : te.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((ad(e) && (e = e.__vccOpts), t)) {
    t = Jf(t);
    let { class: a, style: l } = t;
    a && !St(a) && (t.class = Ri(a)),
      wt(l) && (Vi(l) && !st(l) && (l = Vt({}, l)), (t.style = Li(l)));
  }
  const r = St(e) ? 1 : Ja(e) ? 128 : df(e) ? 64 : wt(e) ? 4 : ot(e) ? 2 : 0;
  return f(e, t, n, s, o, r, i, !0);
}
function Jf(e) {
  return e ? (Vi(e) || ja(e) ? Vt({}, e) : e) : null;
}
function Mn(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: a, transition: l } = e,
    c = t ? ec(o || {}, t) : o,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && tc(c),
      ref:
        t && t.ref
          ? n && i
            ? st(i)
              ? i.concat(Fs(t))
              : [i, Fs(t)]
            : Fs(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ht ? (r === -1 ? 16 : r | 16) : r,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Mn(e.ssContent),
      ssFallback: e.ssFallback && Mn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && s && Fi(u, l.clone(u)), u;
}
function ct(e = " ", t = 0) {
  return rt(vo, null, e, t);
}
function Zf(e, t) {
  const n = rt(Hs, null, e);
  return (n.staticCount = t), n;
}
function Kt(e = "", t = !1) {
  return t ? (Q(), Pn(Ue, null, e)) : rt(Ue, null, e);
}
function we(e) {
  return e == null || typeof e == "boolean"
    ? rt(Ue)
    : st(e)
    ? rt(ht, null, e.slice())
    : ms(e)
    ? He(e)
    : rt(vo, null, String(e));
}
function He(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Mn(e);
}
function Ui(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (st(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ui(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ja(t)
        ? (t._ctx = kt)
        : o === 3 &&
          kt &&
          (kt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ot(t)
      ? ((t = { default: t, _ctx: kt }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ct(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ec(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Ri([t.class, s.class]));
      else if (o === "style") t.style = Li([t.style, s.style]);
      else if (lo(o)) {
        const i = t[o],
          r = s[o];
        r &&
          i !== r &&
          !(st(i) && i.includes(r)) &&
          (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Ee(e, t, n, s = null) {
  Oe(e, t, 7, [n, s]);
}
const td = Ma();
let ed = 0;
function nd(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || td,
    i = {
      uid: ed++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new ku(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Fa(s, o),
      emitsOptions: Qa(s, o),
      emit: null,
      emitted: null,
      propsDefaults: bt,
      inheritAttrs: s.inheritAttrs,
      ctx: bt,
      data: bt,
      props: bt,
      attrs: bt,
      slots: bt,
      refs: bt,
      setupState: bt,
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
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = Kf.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Mt = null,
  to,
  hi;
{
  const e = fo(),
    t = (n, s) => {
      let o;
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(s),
        (i) => {
          o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
        }
      );
    };
  (to = t("__VUE_INSTANCE_SETTERS__", (n) => (Mt = n))),
    (hi = t("__VUE_SSR_SETTERS__", (n) => (_s = n)));
}
const ws = (e) => {
    const t = Mt;
    return (
      to(e),
      e.scope.on(),
      () => {
        e.scope.off(), to(t);
      }
    );
  },
  $r = () => {
    Mt && Mt.scope.off(), to(null);
  };
function nc(e) {
  return e.vnode.shapeFlag & 4;
}
let _s = !1;
function sd(e, t = !1, n = !1) {
  t && hi(t);
  const { props: s, children: o } = e.vnode,
    i = nc(e);
  Nf(e, s, i, t), If(e, o, n);
  const r = i ? od(e, t) : void 0;
  return t && hi(!1), r;
}
function od(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, wf));
  const { setup: s } = n;
  if (s) {
    Qe();
    const o = (e.setupContext = s.length > 1 ? rd(e) : null),
      i = ws(e),
      r = ys(s, e, 0, [e.props, o]),
      a = Gl(r);
    if ((Je(), i(), (a || e.sp) && !Rn(e) && Ca(e), a)) {
      if ((r.then($r, $r), t))
        return r
          .then((l) => {
            Nr(e, l);
          })
          .catch((l) => {
            go(l, e, 0);
          });
      e.asyncDep = r;
    } else Nr(e, r);
  } else sc(e);
}
function Nr(e, t, n) {
  ot(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : wt(t) && (e.setupState = _a(t)),
    sc(e);
}
function sc(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ae);
  {
    const o = ws(e);
    Qe();
    try {
      Af(e);
    } finally {
      Je(), o();
    }
  }
}
const id = {
  get(e, t) {
    return Dt(e, "get", ""), e[t];
  },
};
function rd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, id),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function bo(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(_a(Zu(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in rs) return rs[n](e);
          },
          has(t, n) {
            return n in t || n in rs;
          },
        }))
    : e.proxy;
}
function ld(e, t = !0) {
  return ot(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function ad(e) {
  return ot(e) && "__vccOpts" in e;
}
const oe = (e, t) => of(e, t, _s);
function oc(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? wt(t) && !st(t)
      ? ms(t)
        ? rt(e, null, [t])
        : rt(e, t)
      : rt(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && ms(n) && (n = [n]),
      rt(e, t, n));
}
const cd = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let pi;
const Lr = typeof window < "u" && window.trustedTypes;
if (Lr)
  try {
    pi = Lr.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const ic = pi ? (e) => pi.createHTML(e) : (e) => e,
  ud = "http://www.w3.org/2000/svg",
  fd = "http://www.w3.org/1998/Math/MathML",
  Ne = typeof document < "u" ? document : null,
  Rr = Ne && Ne.createElement("template"),
  dd = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const o =
        t === "svg"
          ? Ne.createElementNS(ud, e)
          : t === "mathml"
          ? Ne.createElementNS(fd, e)
          : n
          ? Ne.createElement(e, { is: n })
          : Ne.createElement(e);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          o.setAttribute("multiple", s.multiple),
        o
      );
    },
    createText: (e) => Ne.createTextNode(e),
    createComment: (e) => Ne.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ne.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, o, i) {
      const r = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling));

        );
      else {
        Rr.innerHTML = ic(
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = Rr.content;
        if (s === "svg" || s === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  hd = Symbol("_vtc");
function pd(e, t, n) {
  const s = e[hd];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const kr = Symbol("_vod"),
  gd = Symbol("_vsh"),
  md = Symbol(""),
  _d = /(^|;)\s*display\s*:/;
function vd(e, t, n) {
  const s = e.style,
    o = St(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (St(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          n[a] == null && Ws(s, a, "");
        }
      else for (const r in t) n[r] == null && Ws(s, r, "");
    for (const r in n) r === "display" && (i = !0), Ws(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[md];
      r && (n += ";" + r), (s.cssText = n), (i = _d.test(n));
    }
  } else t && e.removeAttribute("style");
  kr in e && ((e[kr] = i ? s.display : ""), e[gd] && (s.display = "none"));
}
const Ir = /\s*!important$/;
function Ws(e, t, n) {
  if (st(n)) n.forEach((s) => Ws(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = bd(e, t);
    Ir.test(n)
      ? e.setProperty(Xe(s), n.replace(Ir, ""), "important")
      : (e[s] = n);
  }
}
const Dr = ["Webkit", "Moz", "ms"],
  Po = {};
function bd(e, t) {
  const n = Po[t];
  if (n) return n;
  let s = ae(t);
  if (s !== "filter" && s in e) return (Po[t] = s);
  s = uo(s);
  for (let o = 0; o < Dr.length; o++) {
    const i = Dr[o] + s;
    if (i in e) return (Po[t] = i);
  }
  return t;
}
const Pr = "http://www.w3.org/1999/xlink";
function Mr(e, t, n, s, o, i = Nu(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Pr, t.slice(6, t.length))
      : e.setAttributeNS(Pr, t, n)
    : n == null || (i && !Ql(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : pe(n) ? String(n) : n);
}
function Br(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ic(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (a !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Ql(n))
      : n == null && a === "string"
      ? ((n = ""), (r = !0))
      : a === "number" && ((n = 0), (r = !0));
  }
  try {
    e[t] = n;
  } catch {}
  r && e.removeAttribute(o || t);
}
function ln(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ed(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Vr = Symbol("_vei");
function yd(e, t, n, s, o = null) {
  const i = e[Vr] || (e[Vr] = {}),
    r = i[t];
  if (s && r) r.value = s;
  else {
    const [a, l] = wd(t);
    if (s) {
      const c = (i[t] = Td(s, o));
      ln(e, a, c, l);
    } else r && (Ed(e, a, r, l), (i[t] = void 0));
  }
}
const jr = /(?:Once|Passive|Capture)$/;
function wd(e) {
  let t;
  if (jr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(jr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let Mo = 0;
const Ad = Promise.resolve(),
  Cd = () => Mo || (Ad.then(() => (Mo = 0)), (Mo = Date.now()));
function Td(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Oe(Od(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Cd()), n;
}
function Od(e, t) {
  if (st(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (o) => !o._stopped && s && s(o))
    );
  } else return t;
}
const Hr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Sd = (e, t, n, s, o, i) => {
    const r = o === "svg";
    t === "class"
      ? pd(e, s, r)
      : t === "style"
      ? vd(e, n, s)
      : lo(t)
      ? xi(t) || yd(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : xd(e, t, s, r)
        )
      ? (Br(e, t, s),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Mr(e, t, s, r, i, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !St(s))
      ? Br(e, ae(t), s, i, t)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Mr(e, t, s, r));
  };
function xd(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Hr(t) && ot(n))
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
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Hr(t) && St(n) ? !1 : t in e;
}
const eo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return st(t) ? (n) => Vs(t, n) : t;
};
function $d(e) {
  e.target.composing = !0;
}
function Fr(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const In = Symbol("_assign"),
  Nd = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
      e[In] = eo(o);
      const i = s || (o.props && o.props.type === "number");
      ln(e, t ? "change" : "input", (r) => {
        if (r.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), i && (a = Gs(a)), e[In](a);
      }),
        n &&
          ln(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (ln(e, "compositionstart", $d),
          ln(e, "compositionend", Fr),
          ln(e, "change", Fr));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } },
      r
    ) {
      if (((e[In] = eo(r)), e.composing)) return;
      const a =
          (i || e.type === "number") && !/^0\d/.test(e.value)
            ? Gs(e.value)
            : e.value,
        l = t ?? "";
      a !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((s && t === n) || (o && e.value.trim() === l))) ||
          (e.value = l));
    },
  },
  gi = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const o = ao(t);
      ln(e, "change", () => {
        const i = Array.prototype.filter
          .call(e.options, (r) => r.selected)
          .map((r) => (n ? Gs(no(r)) : no(r)));
        e[In](e.multiple ? (o ? new Set(i) : i) : i[0]),
          (e._assigning = !0),
          ji(() => {
            e._assigning = !1;
          });
      }),
        (e[In] = eo(s));
    },
    mounted(e, { value: t }) {
      Wr(e, t);
    },
    beforeUpdate(e, t, n) {
      e[In] = eo(n);
    },
    updated(e, { value: t }) {
      e._assigning || Wr(e, t);
    },
  };
function Wr(e, t) {
  const n = e.multiple,
    s = st(t);
  if (!(n && !s && !ao(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const r = e.options[o],
        a = no(r);
      if (n)
        if (s) {
          const l = typeof a;
          l === "string" || l === "number"
            ? (r.selected = t.some((c) => String(c) === String(a)))
            : (r.selected = Ru(t, a) > -1);
        } else r.selected = t.has(a);
      else if (ho(no(r), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function no(e) {
  return "_value" in e ? e._value : e.value;
}
const Ld = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Kr = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (o) => {
        if (!("key" in o)) return;
        const i = Xe(o.key);
        if (t.some((r) => r === i || Ld[r] === i)) return e(o);
      })
    );
  },
  Rd = Vt({ patchProp: Sd }, dd);
let Ur;
function kd() {
  return Ur || (Ur = Pf(Rd));
}
const Id = (...e) => {
  const t = kd().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const o = Pd(s);
      if (!o) return;
      const i = t._component;
      !ot(i) && !i.render && !i.template && (i.template = o.innerHTML),
        o.nodeType === 1 && (o.textContent = "");
      const r = n(o, !1, Dd(o));
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        r
      );
    }),
    t
  );
};
function Dd(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pd(e) {
  return St(e) ? document.querySelector(e) : e;
}
var Ut = "top",
  ee = "bottom",
  ne = "right",
  Yt = "left",
  Eo = "auto",
  Yn = [Ut, ee, ne, Yt],
  pn = "start",
  Bn = "end",
  rc = "clippingParents",
  Yi = "viewport",
  An = "popper",
  lc = "reference",
  mi = Yn.reduce(function (e, t) {
    return e.concat([t + "-" + pn, t + "-" + Bn]);
  }, []),
  Gi = [].concat(Yn, [Eo]).reduce(function (e, t) {
    return e.concat([t, t + "-" + pn, t + "-" + Bn]);
  }, []),
  ac = "beforeRead",
  cc = "read",
  uc = "afterRead",
  fc = "beforeMain",
  dc = "main",
  hc = "afterMain",
  pc = "beforeWrite",
  gc = "write",
  mc = "afterWrite",
  _c = [ac, cc, uc, fc, dc, hc, pc, gc, mc];
function Se(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function se(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function gn(e) {
  var t = se(e).Element;
  return e instanceof t || e instanceof Element;
}
function le(e) {
  var t = se(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qi(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = se(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Md(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var s = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !le(i) ||
      !Se(i) ||
      (Object.assign(i.style, s),
      Object.keys(o).forEach(function (r) {
        var a = o[r];
        a === !1 ? i.removeAttribute(r) : i.setAttribute(r, a === !0 ? "" : a);
      }));
  });
}
function Bd(e) {
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
        var o = t.elements[s],
          i = t.attributes[s] || {},
          r = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : n[s]),
          a = r.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !le(o) ||
          !Se(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const zi = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Md,
  effect: Bd,
  requires: ["computeStyles"],
};
function Ce(e) {
  return e.split("-")[0];
}
var dn = Math.max,
  so = Math.min,
  Vn = Math.round;
function _i() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function vc() {
  return !/^((?!chrome|android).)*safari/i.test(_i());
}
function jn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var s = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    le(e) &&
    ((o = (e.offsetWidth > 0 && Vn(s.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Vn(s.height) / e.offsetHeight) || 1));
  var r = gn(e) ? se(e) : window,
    a = r.visualViewport,
    l = !vc() && n,
    c = (s.left + (l && a ? a.offsetLeft : 0)) / o,
    u = (s.top + (l && a ? a.offsetTop : 0)) / i,
    d = s.width / o,
    m = s.height / i;
  return {
    width: d,
    height: m,
    top: u,
    right: c + d,
    bottom: u + m,
    left: c,
    x: c,
    y: u,
  };
}
function Xi(e) {
  var t = jn(e),
    n = e.offsetWidth,
    s = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - s) <= 1 && (s = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: s }
  );
}
function bc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && qi(n)) {
    var s = t;
    do {
      if (s && e.isSameNode(s)) return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function De(e) {
  return se(e).getComputedStyle(e);
}
function Vd(e) {
  return ["table", "td", "th"].indexOf(Se(e)) >= 0;
}
function Ze(e) {
  return ((gn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function yo(e) {
  return Se(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (qi(e) ? e.host : null) || Ze(e);
}
function Yr(e) {
  return !le(e) || De(e).position === "fixed" ? null : e.offsetParent;
}
function jd(e) {
  var t = /firefox/i.test(_i()),
    n = /Trident/i.test(_i());
  if (n && le(e)) {
    var s = De(e);
    if (s.position === "fixed") return null;
  }
  var o = yo(e);
  for (qi(o) && (o = o.host); le(o) && ["html", "body"].indexOf(Se(o)) < 0; ) {
    var i = De(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function As(e) {
  for (var t = se(e), n = Yr(e); n && Vd(n) && De(n).position === "static"; )
    n = Yr(n);
  return n &&
    (Se(n) === "html" || (Se(n) === "body" && De(n).position === "static"))
    ? t
    : n || jd(e) || t;
}
function Qi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function as(e, t, n) {
  return dn(e, so(t, n));
}
function Hd(e, t, n) {
  var s = as(e, t, n);
  return s > n ? n : s;
}
function Ec() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function yc(e) {
  return Object.assign({}, Ec(), e);
}
function wc(e, t) {
  return t.reduce(function (n, s) {
    return (n[s] = e), n;
  }, {});
}
var Fd = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    yc(typeof t != "number" ? t : wc(t, Yn))
  );
};
function Wd(e) {
  var t,
    n = e.state,
    s = e.name,
    o = e.options,
    i = n.elements.arrow,
    r = n.modifiersData.popperOffsets,
    a = Ce(n.placement),
    l = Qi(a),
    c = [Yt, ne].indexOf(a) >= 0,
    u = c ? "height" : "width";
  if (!(!i || !r)) {
    var d = Fd(o.padding, n),
      m = Xi(i),
      h = l === "y" ? Ut : Yt,
      A = l === "y" ? ee : ne,
      w =
        n.rects.reference[u] + n.rects.reference[l] - r[l] - n.rects.popper[u],
      T = r[l] - n.rects.reference[l],
      M = As(i),
      C = M ? (l === "y" ? M.clientHeight || 0 : M.clientWidth || 0) : 0,
      E = w / 2 - T / 2,
      _ = d[h],
      O = C - m[u] - d[A],
      Y = C / 2 - m[u] / 2 + E,
      j = as(_, Y, O),
      lt = l;
    n.modifiersData[s] = ((t = {}), (t[lt] = j), (t.centerOffset = j - Y), t);
  }
}
function Kd(e) {
  var t = e.state,
    n = e.options,
    s = n.element,
    o = s === void 0 ? "[data-popper-arrow]" : s;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (bc(t.elements.popper, o) && (t.elements.arrow = o)));
}
const Ac = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wd,
  effect: Kd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Hn(e) {
  return e.split("-")[1];
}
var Ud = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Yd(e, t) {
  var n = e.x,
    s = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Vn(n * o) / o || 0, y: Vn(s * o) / o || 0 };
}
function Gr(e) {
  var t,
    n = e.popper,
    s = e.popperRect,
    o = e.placement,
    i = e.variation,
    r = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    m = r.x,
    h = m === void 0 ? 0 : m,
    A = r.y,
    w = A === void 0 ? 0 : A,
    T = typeof u == "function" ? u({ x: h, y: w }) : { x: h, y: w };
  (h = T.x), (w = T.y);
  var M = r.hasOwnProperty("x"),
    C = r.hasOwnProperty("y"),
    E = Yt,
    _ = Ut,
    O = window;
  if (c) {
    var Y = As(n),
      j = "clientHeight",
      lt = "clientWidth";
    if (
      (Y === se(n) &&
        ((Y = Ze(n)),
        De(Y).position !== "static" &&
          a === "absolute" &&
          ((j = "scrollHeight"), (lt = "scrollWidth"))),
      (Y = Y),
      o === Ut || ((o === Yt || o === ne) && i === Bn))
    ) {
      _ = ee;
      var ut =
        d && Y === O && O.visualViewport ? O.visualViewport.height : Y[j];
      (w -= ut - s.height), (w *= l ? 1 : -1);
    }
    if (o === Yt || ((o === Ut || o === ee) && i === Bn)) {
      E = ne;
      var k = d && Y === O && O.visualViewport ? O.visualViewport.width : Y[lt];
      (h -= k - s.width), (h *= l ? 1 : -1);
    }
  }
  var B = Object.assign({ position: a }, c && Ud),
    I = u === !0 ? Yd({ x: h, y: w }, se(n)) : { x: h, y: w };
  if (((h = I.x), (w = I.y), l)) {
    var it;
    return Object.assign(
      {},
      B,
      ((it = {}),
      (it[_] = C ? "0" : ""),
      (it[E] = M ? "0" : ""),
      (it.transform =
        (O.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + w + "px)"
          : "translate3d(" + h + "px, " + w + "px, 0)"),
      it)
    );
  }
  return Object.assign(
    {},
    B,
    ((t = {}),
    (t[_] = C ? w + "px" : ""),
    (t[E] = M ? h + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function Gd(e) {
  var t = e.state,
    n = e.options,
    s = n.gpuAcceleration,
    o = s === void 0 ? !0 : s,
    i = n.adaptive,
    r = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: Ce(t.placement),
      variation: Hn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Gr(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: r,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Gr(
          Object.assign({}, c, {
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
const Ji = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Gd,
  data: {},
};
var Rs = { passive: !0 };
function qd(e) {
  var t = e.state,
    n = e.instance,
    s = e.options,
    o = s.scroll,
    i = o === void 0 ? !0 : o,
    r = s.resize,
    a = r === void 0 ? !0 : r,
    l = se(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (u) {
        u.addEventListener("scroll", n.update, Rs);
      }),
    a && l.addEventListener("resize", n.update, Rs),
    function () {
      i &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", n.update, Rs);
        }),
        a && l.removeEventListener("resize", n.update, Rs);
    }
  );
}
const Zi = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: qd,
  data: {},
};
var zd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ks(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return zd[t];
  });
}
var Xd = { start: "end", end: "start" };
function qr(e) {
  return e.replace(/start|end/g, function (t) {
    return Xd[t];
  });
}
function tr(e) {
  var t = se(e),
    n = t.pageXOffset,
    s = t.pageYOffset;
  return { scrollLeft: n, scrollTop: s };
}
function er(e) {
  return jn(Ze(e)).left + tr(e).scrollLeft;
}
function Qd(e, t) {
  var n = se(e),
    s = Ze(e),
    o = n.visualViewport,
    i = s.clientWidth,
    r = s.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (r = o.height);
    var c = vc();
    (c || (!c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: r, x: a + er(e), y: l };
}
function Jd(e) {
  var t,
    n = Ze(e),
    s = tr(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = dn(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    r = dn(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    a = -s.scrollLeft + er(e),
    l = -s.scrollTop;
  return (
    De(o || n).direction === "rtl" &&
      (a += dn(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: r, x: a, y: l }
  );
}
function nr(e) {
  var t = De(e),
    n = t.overflow,
    s = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Cc(e) {
  return ["html", "body", "#document"].indexOf(Se(e)) >= 0
    ? e.ownerDocument.body
    : le(e) && nr(e)
    ? e
    : Cc(yo(e));
}
function cs(e, t) {
  var n;
  t === void 0 && (t = []);
  var s = Cc(e),
    o = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = se(s),
    r = o ? [i].concat(i.visualViewport || [], nr(s) ? s : []) : s,
    a = t.concat(r);
  return o ? a : a.concat(cs(yo(r)));
}
function vi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Zd(e, t) {
  var n = jn(e, !1, t === "fixed");
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
function zr(e, t, n) {
  return t === Yi ? vi(Qd(e, n)) : gn(t) ? Zd(t, n) : vi(Jd(Ze(e)));
}
function th(e) {
  var t = cs(yo(e)),
    n = ["absolute", "fixed"].indexOf(De(e).position) >= 0,
    s = n && le(e) ? As(e) : e;
  return gn(s)
    ? t.filter(function (o) {
        return gn(o) && bc(o, s) && Se(o) !== "body";
      })
    : [];
}
function eh(e, t, n, s) {
  var o = t === "clippingParents" ? th(e) : [].concat(t),
    i = [].concat(o, [n]),
    r = i[0],
    a = i.reduce(function (l, c) {
      var u = zr(e, c, s);
      return (
        (l.top = dn(u.top, l.top)),
        (l.right = so(u.right, l.right)),
        (l.bottom = so(u.bottom, l.bottom)),
        (l.left = dn(u.left, l.left)),
        l
      );
    }, zr(e, r, s));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function Tc(e) {
  var t = e.reference,
    n = e.element,
    s = e.placement,
    o = s ? Ce(s) : null,
    i = s ? Hn(s) : null,
    r = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case Ut:
      l = { x: r, y: t.y - n.height };
      break;
    case ee:
      l = { x: r, y: t.y + t.height };
      break;
    case ne:
      l = { x: t.x + t.width, y: a };
      break;
    case Yt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? Qi(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case pn:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Bn:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Fn(e, t) {
  t === void 0 && (t = {});
  var n = t,
    s = n.placement,
    o = s === void 0 ? e.placement : s,
    i = n.strategy,
    r = i === void 0 ? e.strategy : i,
    a = n.boundary,
    l = a === void 0 ? rc : a,
    c = n.rootBoundary,
    u = c === void 0 ? Yi : c,
    d = n.elementContext,
    m = d === void 0 ? An : d,
    h = n.altBoundary,
    A = h === void 0 ? !1 : h,
    w = n.padding,
    T = w === void 0 ? 0 : w,
    M = yc(typeof T != "number" ? T : wc(T, Yn)),
    C = m === An ? lc : An,
    E = e.rects.popper,
    _ = e.elements[A ? C : m],
    O = eh(gn(_) ? _ : _.contextElement || Ze(e.elements.popper), l, u, r),
    Y = jn(e.elements.reference),
    j = Tc({ reference: Y, element: E, strategy: "absolute", placement: o }),
    lt = vi(Object.assign({}, E, j)),
    ut = m === An ? lt : Y,
    k = {
      top: O.top - ut.top + M.top,
      bottom: ut.bottom - O.bottom + M.bottom,
      left: O.left - ut.left + M.left,
      right: ut.right - O.right + M.right,
    },
    B = e.modifiersData.offset;
  if (m === An && B) {
    var I = B[o];
    Object.keys(k).forEach(function (it) {
      var S = [ne, ee].indexOf(it) >= 0 ? 1 : -1,
        L = [Ut, ee].indexOf(it) >= 0 ? "y" : "x";
      k[it] += I[L] * S;
    });
  }
  return k;
}
function nh(e, t) {
  t === void 0 && (t = {});
  var n = t,
    s = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    r = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? Gi : l,
    u = Hn(s),
    d = u
      ? a
        ? mi
        : mi.filter(function (A) {
            return Hn(A) === u;
          })
      : Yn,
    m = d.filter(function (A) {
      return c.indexOf(A) >= 0;
    });
  m.length === 0 && (m = d);
  var h = m.reduce(function (A, w) {
    return (
      (A[w] = Fn(e, { placement: w, boundary: o, rootBoundary: i, padding: r })[
        Ce(w)
      ]),
      A
    );
  }, {});
  return Object.keys(h).sort(function (A, w) {
    return h[A] - h[w];
  });
}
function sh(e) {
  if (Ce(e) === Eo) return [];
  var t = Ks(e);
  return [qr(e), t, qr(t)];
}
function oh(e) {
  var t = e.state,
    n = e.options,
    s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        r = n.altAxis,
        a = r === void 0 ? !0 : r,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        m = n.altBoundary,
        h = n.flipVariations,
        A = h === void 0 ? !0 : h,
        w = n.allowedAutoPlacements,
        T = t.options.placement,
        M = Ce(T),
        C = M === T,
        E = l || (C || !A ? [Ks(T)] : sh(T)),
        _ = [T].concat(E).reduce(function (jt, Rt) {
          return jt.concat(
            Ce(Rt) === Eo
              ? nh(t, {
                  placement: Rt,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: A,
                  allowedAutoPlacements: w,
                })
              : Rt
          );
        }, []),
        O = t.rects.reference,
        Y = t.rects.popper,
        j = new Map(),
        lt = !0,
        ut = _[0],
        k = 0;
      k < _.length;
      k++
    ) {
      var B = _[k],
        I = Ce(B),
        it = Hn(B) === pn,
        S = [Ut, ee].indexOf(I) >= 0,
        L = S ? "width" : "height",
        G = Fn(t, {
          placement: B,
          boundary: u,
          rootBoundary: d,
          altBoundary: m,
          padding: c,
        }),
        z = S ? (it ? ne : Yt) : it ? ee : Ut;
      O[L] > Y[L] && (z = Ks(z));
      var tt = Ks(z),
        _t = [];
      if (
        (i && _t.push(G[I] <= 0),
        a && _t.push(G[z] <= 0, G[tt] <= 0),
        _t.every(function (jt) {
          return jt;
        }))
      ) {
        (ut = B), (lt = !1);
        break;
      }
      j.set(B, _t);
    }
    if (lt)
      for (
        var Lt = A ? 3 : 1,
          It = function (Rt) {
            var xt = _.find(function (x) {
              var D = j.get(x);
              if (D)
                return D.slice(0, Rt).every(function (v) {
                  return v;
                });
            });
            if (xt) return (ut = xt), "break";
          },
          Tt = Lt;
        Tt > 0;
        Tt--
      ) {
        var zt = It(Tt);
        if (zt === "break") break;
      }
    t.placement !== ut &&
      ((t.modifiersData[s]._skip = !0), (t.placement = ut), (t.reset = !0));
  }
}
const Oc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: oh,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Xr(e, t, n) {
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
function Qr(e) {
  return [Ut, ne, ee, Yt].some(function (t) {
    return e[t] >= 0;
  });
}
function ih(e) {
  var t = e.state,
    n = e.name,
    s = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    r = Fn(t, { elementContext: "reference" }),
    a = Fn(t, { altBoundary: !0 }),
    l = Xr(r, s),
    c = Xr(a, o, i),
    u = Qr(l),
    d = Qr(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    }));
}
const Sc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ih,
};
function rh(e, t, n) {
  var s = Ce(e),
    o = [Yt, Ut].indexOf(s) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    r = i[0],
    a = i[1];
  return (
    (r = r || 0),
    (a = (a || 0) * o),
    [Yt, ne].indexOf(s) >= 0 ? { x: a, y: r } : { x: r, y: a }
  );
}
function lh(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    r = Gi.reduce(function (u, d) {
      return (u[d] = rh(d, t.rects, i)), u;
    }, {}),
    a = r[t.placement],
    l = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[s] = r);
}
const xc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: lh,
};
function ah(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Tc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const sr = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ah,
  data: {},
};
function ch(e) {
  return e === "x" ? "y" : "x";
}
function uh(e) {
  var t = e.state,
    n = e.options,
    s = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    r = n.altAxis,
    a = r === void 0 ? !1 : r,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    m = n.tether,
    h = m === void 0 ? !0 : m,
    A = n.tetherOffset,
    w = A === void 0 ? 0 : A,
    T = Fn(t, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }),
    M = Ce(t.placement),
    C = Hn(t.placement),
    E = !C,
    _ = Qi(M),
    O = ch(_),
    Y = t.modifiersData.popperOffsets,
    j = t.rects.reference,
    lt = t.rects.popper,
    ut =
      typeof w == "function"
        ? w(Object.assign({}, t.rects, { placement: t.placement }))
        : w,
    k =
      typeof ut == "number"
        ? { mainAxis: ut, altAxis: ut }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, ut),
    B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    I = { x: 0, y: 0 };
  if (Y) {
    if (i) {
      var it,
        S = _ === "y" ? Ut : Yt,
        L = _ === "y" ? ee : ne,
        G = _ === "y" ? "height" : "width",
        z = Y[_],
        tt = z + T[S],
        _t = z - T[L],
        Lt = h ? -lt[G] / 2 : 0,
        It = C === pn ? j[G] : lt[G],
        Tt = C === pn ? -lt[G] : -j[G],
        zt = t.elements.arrow,
        jt = h && zt ? Xi(zt) : { width: 0, height: 0 },
        Rt = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Ec(),
        xt = Rt[S],
        x = Rt[L],
        D = as(0, j[G], jt[G]),
        v = E ? j[G] / 2 - Lt - D - xt - k.mainAxis : It - D - xt - k.mainAxis,
        y = E ? -j[G] / 2 + Lt + D + x + k.mainAxis : Tt + D + x + k.mainAxis,
        X = t.elements.arrow && As(t.elements.arrow),
        p = X ? (_ === "y" ? X.clientTop || 0 : X.clientLeft || 0) : 0,
        g = (it = B == null ? void 0 : B[_]) != null ? it : 0,
        b = z + v - g - p,
        $ = z + y - g,
        R = as(h ? so(tt, b) : tt, z, h ? dn(_t, $) : _t);
      (Y[_] = R), (I[_] = R - z);
    }
    if (a) {
      var N,
        W = _ === "x" ? Ut : Yt,
        F = _ === "x" ? ee : ne,
        H = Y[O],
        V = O === "y" ? "height" : "width",
        Z = H + T[W],
        K = H - T[F],
        q = [Ut, Yt].indexOf(M) !== -1,
        et = (N = B == null ? void 0 : B[O]) != null ? N : 0,
        at = q ? Z : H - j[V] - lt[V] - et + k.altAxis,
        vt = q ? H + j[V] + lt[V] - et - k.altAxis : K,
        dt = h && q ? Hd(at, H, vt) : as(h ? at : Z, H, h ? vt : K);
      (Y[O] = dt), (I[O] = dt - H);
    }
    t.modifiersData[s] = I;
  }
}
const $c = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: uh,
  requiresIfExists: ["offset"],
};
function fh(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function dh(e) {
  return e === se(e) || !le(e) ? tr(e) : fh(e);
}
function hh(e) {
  var t = e.getBoundingClientRect(),
    n = Vn(t.width) / e.offsetWidth || 1,
    s = Vn(t.height) / e.offsetHeight || 1;
  return n !== 1 || s !== 1;
}
function ph(e, t, n) {
  n === void 0 && (n = !1);
  var s = le(t),
    o = le(t) && hh(t),
    i = Ze(t),
    r = jn(e, o, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (s || (!s && !n)) &&
      ((Se(t) !== "body" || nr(i)) && (a = dh(t)),
      le(t)
        ? ((l = jn(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = er(i))),
    {
      x: r.left + a.scrollLeft - l.x,
      y: r.top + a.scrollTop - l.y,
      width: r.width,
      height: r.height,
    }
  );
}
function gh(e) {
  var t = new Map(),
    n = new Set(),
    s = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var r = [].concat(i.requires || [], i.requiresIfExists || []);
    r.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      s.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    s
  );
}
function mh(e) {
  var t = gh(e);
  return _c.reduce(function (n, s) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === s;
      })
    );
  }, []);
}
function _h(e) {
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
function vh(e) {
  var t = e.reduce(function (n, s) {
    var o = n[s.name];
    return (
      (n[s.name] = o
        ? Object.assign({}, o, s, {
            options: Object.assign({}, o.options, s.options),
            data: Object.assign({}, o.data, s.data),
          })
        : s),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Jr = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Zr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function wo(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    s = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? Jr : o;
  return function (a, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Jr, i),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      m = !1,
      h = {
        state: u,
        setOptions: function (M) {
          var C = typeof M == "function" ? M(u.options) : M;
          w(),
            (u.options = Object.assign({}, i, u.options, C)),
            (u.scrollParents = {
              reference: gn(a)
                ? cs(a)
                : a.contextElement
                ? cs(a.contextElement)
                : [],
              popper: cs(l),
            });
          var E = mh(vh([].concat(s, u.options.modifiers)));
          return (
            (u.orderedModifiers = E.filter(function (_) {
              return _.enabled;
            })),
            A(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!m) {
            var M = u.elements,
              C = M.reference,
              E = M.popper;
            if (Zr(C, E)) {
              (u.rects = {
                reference: ph(C, As(E), u.options.strategy === "fixed"),
                popper: Xi(E),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (k) {
                  return (u.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var _ = 0; _ < u.orderedModifiers.length; _++) {
                if (u.reset === !0) {
                  (u.reset = !1), (_ = -1);
                  continue;
                }
                var O = u.orderedModifiers[_],
                  Y = O.fn,
                  j = O.options,
                  lt = j === void 0 ? {} : j,
                  ut = O.name;
                typeof Y == "function" &&
                  (u =
                    Y({ state: u, options: lt, name: ut, instance: h }) || u);
              }
            }
          }
        },
        update: _h(function () {
          return new Promise(function (T) {
            h.forceUpdate(), T(u);
          });
        }),
        destroy: function () {
          w(), (m = !0);
        },
      };
    if (!Zr(a, l)) return h;
    h.setOptions(c).then(function (T) {
      !m && c.onFirstUpdate && c.onFirstUpdate(T);
    });
    function A() {
      u.orderedModifiers.forEach(function (T) {
        var M = T.name,
          C = T.options,
          E = C === void 0 ? {} : C,
          _ = T.effect;
        if (typeof _ == "function") {
          var O = _({ state: u, name: M, instance: h, options: E }),
            Y = function () {};
          d.push(O || Y);
        }
      });
    }
    function w() {
      d.forEach(function (T) {
        return T();
      }),
        (d = []);
    }
    return h;
  };
}
var bh = wo(),
  Eh = [Zi, sr, Ji, zi],
  yh = wo({ defaultModifiers: Eh }),
  wh = [Zi, sr, Ji, zi, xc, Oc, $c, Ac, Sc],
  or = wo({ defaultModifiers: wh });
const Nc = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: hc,
      afterRead: uc,
      afterWrite: mc,
      applyStyles: zi,
      arrow: Ac,
      auto: Eo,
      basePlacements: Yn,
      beforeMain: fc,
      beforeRead: ac,
      beforeWrite: pc,
      bottom: ee,
      clippingParents: rc,
      computeStyles: Ji,
      createPopper: or,
      createPopperBase: bh,
      createPopperLite: yh,
      detectOverflow: Fn,
      end: Bn,
      eventListeners: Zi,
      flip: Oc,
      hide: Sc,
      left: Yt,
      main: dc,
      modifierPhases: _c,
      offset: xc,
      placements: Gi,
      popper: An,
      popperGenerator: wo,
      popperOffsets: sr,
      preventOverflow: $c,
      read: cc,
      reference: lc,
      right: ne,
      start: pn,
      top: Ut,
      variationPlacements: mi,
      viewport: Yi,
      write: gc,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Be = new Map(),
  Bo = {
    set(e, t, n) {
      Be.has(e) || Be.set(e, new Map());
      const s = Be.get(e);
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
      return (Be.has(e) && Be.get(e).get(t)) || null;
    },
    remove(e, t) {
      if (!Be.has(e)) return;
      const n = Be.get(e);
      n.delete(t), n.size === 0 && Be.delete(e);
    },
  },
  Ah = 1e6,
  Ch = 1e3,
  bi = "transitionend",
  Lc = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
    e
  ),
  Th = (e) =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  Oh = (e) => {
    do e += Math.floor(Math.random() * Ah);
    while (document.getElementById(e));
    return e;
  },
  Sh = (e) => {
    if (!e) return 0;
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e);
    const s = Number.parseFloat(t),
      o = Number.parseFloat(n);
    return !s && !o
      ? 0
      : ((t = t.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * Ch);
  },
  Rc = (e) => {
    e.dispatchEvent(new Event(bi));
  },
  ke = (e) =>
    !e || typeof e != "object"
      ? !1
      : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
  Ye = (e) =>
    ke(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == "string" && e.length > 0
      ? document.querySelector(Lc(e))
      : null,
  Gn = (e) => {
    if (!ke(e) || e.getClientRects().length === 0) return !1;
    const t = getComputedStyle(e).getPropertyValue("visibility") === "visible",
      n = e.closest("details:not([open])");
    if (!n) return t;
    if (n !== e) {
      const s = e.closest("summary");
      if ((s && s.parentNode !== n) || s === null) return !1;
    }
    return t;
  },
  Ge = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")
      ? !0
      : typeof e.disabled < "u"
      ? e.disabled
      : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
  kc = (e) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? kc(e.parentNode) : null;
  },
  oo = () => {},
  Cs = (e) => {
    e.offsetHeight;
  },
  Ic = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  Vo = [],
  xh = (e) => {
    document.readyState === "loading"
      ? (Vo.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const t of Vo) t();
          }),
        Vo.push(e))
      : e();
  },
  ce = () => document.documentElement.dir === "rtl",
  de = (e) => {
    xh(() => {
      const t = Ic();
      if (t) {
        const n = e.NAME,
          s = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = s), e.jQueryInterface));
      }
    });
  },
  qt = (e, t = [], n = e) => (typeof e == "function" ? e(...t) : n),
  Dc = (e, t, n = !0) => {
    if (!n) {
      qt(e);
      return;
    }
    const o = Sh(t) + 5;
    let i = !1;
    const r = ({ target: a }) => {
      a === t && ((i = !0), t.removeEventListener(bi, r), qt(e));
    };
    t.addEventListener(bi, r),
      setTimeout(() => {
        i || Rc(t);
      }, o);
  },
  ir = (e, t, n, s) => {
    const o = e.length;
    let i = e.indexOf(t);
    return i === -1
      ? !n && s
        ? e[o - 1]
        : e[0]
      : ((i += n ? 1 : -1),
        s && (i = (i + o) % o),
        e[Math.max(0, Math.min(i, o - 1))]);
  },
  $h = /[^.]*(?=\..*)\.|.*/,
  Nh = /\..*/,
  Lh = /::\d+$/,
  jo = {};
let tl = 1;
const Pc = { mouseenter: "mouseover", mouseleave: "mouseout" },
  Rh = new Set([
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
function Mc(e, t) {
  return (t && `${t}::${tl++}`) || e.uidEvent || tl++;
}
function Bc(e) {
  const t = Mc(e);
  return (e.uidEvent = t), (jo[t] = jo[t] || {}), jo[t];
}
function kh(e, t) {
  return function n(s) {
    return (
      rr(s, { delegateTarget: e }),
      n.oneOff && P.off(e, s.type, t),
      t.apply(e, [s])
    );
  };
}
function Ih(e, t, n) {
  return function s(o) {
    const i = e.querySelectorAll(t);
    for (let { target: r } = o; r && r !== this; r = r.parentNode)
      for (const a of i)
        if (a === r)
          return (
            rr(o, { delegateTarget: r }),
            s.oneOff && P.off(e, o.type, t, n),
            n.apply(r, [o])
          );
  };
}
function Vc(e, t, n = null) {
  return Object.values(e).find(
    (s) => s.callable === t && s.delegationSelector === n
  );
}
function jc(e, t, n) {
  const s = typeof t == "string",
    o = s ? n : t || n;
  let i = Hc(e);
  return Rh.has(i) || (i = e), [s, o, i];
}
function el(e, t, n, s, o) {
  if (typeof t != "string" || !e) return;
  let [i, r, a] = jc(t, n, s);
  t in Pc &&
    (r = ((A) =>
      function (w) {
        if (
          !w.relatedTarget ||
          (w.relatedTarget !== w.delegateTarget &&
            !w.delegateTarget.contains(w.relatedTarget))
        )
          return A.call(this, w);
      })(r));
  const l = Bc(e),
    c = l[a] || (l[a] = {}),
    u = Vc(c, r, i ? n : null);
  if (u) {
    u.oneOff = u.oneOff && o;
    return;
  }
  const d = Mc(r, t.replace($h, "")),
    m = i ? Ih(e, n, r) : kh(e, r);
  (m.delegationSelector = i ? n : null),
    (m.callable = r),
    (m.oneOff = o),
    (m.uidEvent = d),
    (c[d] = m),
    e.addEventListener(a, m, i);
}
function Ei(e, t, n, s, o) {
  const i = Vc(t[n], s, o);
  i && (e.removeEventListener(n, i, !!o), delete t[n][i.uidEvent]);
}
function Dh(e, t, n, s) {
  const o = t[n] || {};
  for (const [i, r] of Object.entries(o))
    i.includes(s) && Ei(e, t, n, r.callable, r.delegationSelector);
}
function Hc(e) {
  return (e = e.replace(Nh, "")), Pc[e] || e;
}
const P = {
  on(e, t, n, s) {
    el(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    el(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if (typeof t != "string" || !e) return;
    const [o, i, r] = jc(t, n, s),
      a = r !== t,
      l = Bc(e),
      c = l[r] || {},
      u = t.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(c).length) return;
      Ei(e, l, r, i, o ? n : null);
      return;
    }
    if (u) for (const d of Object.keys(l)) Dh(e, l, d, t.slice(1));
    for (const [d, m] of Object.entries(c)) {
      const h = d.replace(Lh, "");
      (!a || t.includes(h)) && Ei(e, l, r, m.callable, m.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e) return null;
    const s = Ic(),
      o = Hc(t),
      i = t !== o;
    let r = null,
      a = !0,
      l = !0,
      c = !1;
    i &&
      s &&
      ((r = s.Event(t, n)),
      s(e).trigger(r),
      (a = !r.isPropagationStopped()),
      (l = !r.isImmediatePropagationStopped()),
      (c = r.isDefaultPrevented()));
    const u = rr(new Event(t, { bubbles: a, cancelable: !0 }), n);
    return (
      c && u.preventDefault(),
      l && e.dispatchEvent(u),
      u.defaultPrevented && r && r.preventDefault(),
      u
    );
  },
};
function rr(e, t = {}) {
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
function nl(e) {
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
function Ho(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Ie = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Ho(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Ho(t)}`);
  },
  getDataAttributes(e) {
    if (!e) return {};
    const t = {},
      n = Object.keys(e.dataset).filter(
        (s) => s.startsWith("bs") && !s.startsWith("bsConfig")
      );
    for (const s of n) {
      let o = s.replace(/^bs/, "");
      (o = o.charAt(0).toLowerCase() + o.slice(1, o.length)),
        (t[o] = nl(e.dataset[s]));
    }
    return t;
  },
  getDataAttribute(e, t) {
    return nl(e.getAttribute(`data-bs-${Ho(t)}`));
  },
};
class Ts {
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
    const s = ke(n) ? Ie.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof s == "object" ? s : {}),
      ...(ke(n) ? Ie.getDataAttributes(n) : {}),
      ...(typeof t == "object" ? t : {}),
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [s, o] of Object.entries(n)) {
      const i = t[s],
        r = ke(i) ? "element" : Th(i);
      if (!new RegExp(o).test(r))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${o}".`
        );
    }
  }
}
const Ph = "5.3.3";
class me extends Ts {
  constructor(t, n) {
    super(),
      (t = Ye(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(n)),
        Bo.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Bo.remove(this._element, this.constructor.DATA_KEY),
      P.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
  }
  _queueCallback(t, n, s = !0) {
    Dc(t, n, s);
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
    return Bo.get(Ye(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return Ph;
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
const Fo = (e) => {
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
          .map((n) => Lc(n))
          .join(",")
      : null;
  },
  J = {
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
      return this.find(t, e).filter((n) => !Ge(n) && Gn(n));
    },
    getSelectorFromElement(e) {
      const t = Fo(e);
      return t && J.findOne(t) ? t : null;
    },
    getElementFromSelector(e) {
      const t = Fo(e);
      return t ? J.findOne(t) : null;
    },
    getMultipleElementsFromSelector(e) {
      const t = Fo(e);
      return t ? J.find(t) : [];
    },
  },
  Ao = (e, t = "hide") => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      s = e.NAME;
    P.on(document, n, `[data-bs-dismiss="${s}"]`, function (o) {
      if (
        (["A", "AREA"].includes(this.tagName) && o.preventDefault(), Ge(this))
      )
        return;
      const i = J.getElementFromSelector(this) || this.closest(`.${s}`);
      e.getOrCreateInstance(i)[t]();
    });
  },
  Mh = "alert",
  Bh = "bs.alert",
  Fc = `.${Bh}`,
  Vh = `close${Fc}`,
  jh = `closed${Fc}`,
  Hh = "fade",
  Fh = "show";
class Co extends me {
  static get NAME() {
    return Mh;
  }
  close() {
    if (P.trigger(this._element, Vh).defaultPrevented) return;
    this._element.classList.remove(Fh);
    const n = this._element.classList.contains(Hh);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), P.trigger(this._element, jh), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Co.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ao(Co, "close");
de(Co);
const Wh = "button",
  Kh = "bs.button",
  Uh = `.${Kh}`,
  Yh = ".data-api",
  Gh = "active",
  sl = '[data-bs-toggle="button"]',
  qh = `click${Uh}${Yh}`;
class To extends me {
  static get NAME() {
    return Wh;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(Gh)
    );
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = To.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
P.on(document, qh, sl, (e) => {
  e.preventDefault();
  const t = e.target.closest(sl);
  To.getOrCreateInstance(t).toggle();
});
de(To);
const zh = "swipe",
  qn = ".bs.swipe",
  Xh = `touchstart${qn}`,
  Qh = `touchmove${qn}`,
  Jh = `touchend${qn}`,
  Zh = `pointerdown${qn}`,
  tp = `pointerup${qn}`,
  ep = "touch",
  np = "pen",
  sp = "pointer-event",
  op = 40,
  ip = { endCallback: null, leftCallback: null, rightCallback: null },
  rp = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class io extends Ts {
  constructor(t, n) {
    super(),
      (this._element = t),
      !(!t || !io.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents());
  }
  static get Default() {
    return ip;
  }
  static get DefaultType() {
    return rp;
  }
  static get NAME() {
    return zh;
  }
  dispose() {
    P.off(this._element, qn);
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
      qt(this._config.endCallback);
  }
  _move(t) {
    this._deltaX =
      t.touches && t.touches.length > 1
        ? 0
        : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= op) return;
    const n = t / this._deltaX;
    (this._deltaX = 0),
      n && qt(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (P.on(this._element, Zh, (t) => this._start(t)),
        P.on(this._element, tp, (t) => this._end(t)),
        this._element.classList.add(sp))
      : (P.on(this._element, Xh, (t) => this._start(t)),
        P.on(this._element, Qh, (t) => this._move(t)),
        P.on(this._element, Jh, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return (
      this._supportPointerEvents &&
      (t.pointerType === np || t.pointerType === ep)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const lp = "carousel",
  ap = "bs.carousel",
  tn = `.${ap}`,
  Wc = ".data-api",
  cp = "ArrowLeft",
  up = "ArrowRight",
  fp = 500,
  Zn = "next",
  En = "prev",
  Cn = "left",
  Us = "right",
  dp = `slide${tn}`,
  Wo = `slid${tn}`,
  hp = `keydown${tn}`,
  pp = `mouseenter${tn}`,
  gp = `mouseleave${tn}`,
  mp = `dragstart${tn}`,
  _p = `load${tn}${Wc}`,
  vp = `click${tn}${Wc}`,
  Kc = "carousel",
  ks = "active",
  bp = "slide",
  Ep = "carousel-item-end",
  yp = "carousel-item-start",
  wp = "carousel-item-next",
  Ap = "carousel-item-prev",
  Uc = ".active",
  Yc = ".carousel-item",
  Cp = Uc + Yc,
  Tp = ".carousel-item img",
  Op = ".carousel-indicators",
  Sp = "[data-bs-slide], [data-bs-slide-to]",
  xp = '[data-bs-ride="carousel"]',
  $p = { [cp]: Us, [up]: Cn },
  Np = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  Lp = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class Os extends me {
  constructor(t, n) {
    super(t, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = J.findOne(Op, this._element)),
      this._addEventListeners(),
      this._config.ride === Kc && this.cycle();
  }
  static get Default() {
    return Np;
  }
  static get DefaultType() {
    return Lp;
  }
  static get NAME() {
    return lp;
  }
  next() {
    this._slide(Zn);
  }
  nextWhenVisible() {
    !document.hidden && Gn(this._element) && this.next();
  }
  prev() {
    this._slide(En);
  }
  pause() {
    this._isSliding && Rc(this._element), this._clearInterval();
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
        P.one(this._element, Wo, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0) return;
    if (this._isSliding) {
      P.one(this._element, Wo, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t) return;
    const o = t > s ? Zn : En;
    this._slide(o, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t;
  }
  _addEventListeners() {
    this._config.keyboard && P.on(this._element, hp, (t) => this._keydown(t)),
      this._config.pause === "hover" &&
        (P.on(this._element, pp, () => this.pause()),
        P.on(this._element, gp, () => this._maybeEnableCycle())),
      this._config.touch && io.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of J.find(Tp, this._element))
      P.on(s, mp, (o) => o.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(Cn)),
      rightCallback: () => this._slide(this._directionToOrder(Us)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            fp + this._config.interval
          )));
      },
    };
    this._swipeHelper = new io(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return;
    const n = $p[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return;
    const n = J.findOne(Uc, this._indicatorsElement);
    n.classList.remove(ks), n.removeAttribute("aria-current");
    const s = J.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(ks), s.setAttribute("aria-current", "true"));
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
      o = t === Zn,
      i = n || ir(this._getItems(), s, o, this._config.wrap);
    if (i === s) return;
    const r = this._getItemIndex(i),
      a = (h) =>
        P.trigger(this._element, h, {
          relatedTarget: i,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(s),
          to: r,
        });
    if (a(dp).defaultPrevented || !s || !i) return;
    const c = !!this._interval;
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(r),
      (this._activeElement = i);
    const u = o ? yp : Ep,
      d = o ? wp : Ap;
    i.classList.add(d), Cs(i), s.classList.add(u), i.classList.add(u);
    const m = () => {
      i.classList.remove(u, d),
        i.classList.add(ks),
        s.classList.remove(ks, d, u),
        (this._isSliding = !1),
        a(Wo);
    };
    this._queueCallback(m, s, this._isAnimated()), c && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(bp);
  }
  _getActive() {
    return J.findOne(Cp, this._element);
  }
  _getItems() {
    return J.find(Yc, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(t) {
    return ce() ? (t === Cn ? En : Zn) : t === Cn ? Zn : En;
  }
  _orderToDirection(t) {
    return ce() ? (t === En ? Cn : Us) : t === En ? Us : Cn;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Os.getOrCreateInstance(this, t);
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
P.on(document, vp, Sp, function (e) {
  const t = J.getElementFromSelector(this);
  if (!t || !t.classList.contains(Kc)) return;
  e.preventDefault();
  const n = Os.getOrCreateInstance(t),
    s = this.getAttribute("data-bs-slide-to");
  if (s) {
    n.to(s), n._maybeEnableCycle();
    return;
  }
  if (Ie.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
P.on(window, _p, () => {
  const e = J.find(xp);
  for (const t of e) Os.getOrCreateInstance(t);
});
de(Os);
const Rp = "collapse",
  kp = "bs.collapse",
  Ss = `.${kp}`,
  Ip = ".data-api",
  Dp = `show${Ss}`,
  Pp = `shown${Ss}`,
  Mp = `hide${Ss}`,
  Bp = `hidden${Ss}`,
  Vp = `click${Ss}${Ip}`,
  Ko = "show",
  Sn = "collapse",
  Is = "collapsing",
  jp = "collapsed",
  Hp = `:scope .${Sn} .${Sn}`,
  Fp = "collapse-horizontal",
  Wp = "width",
  Kp = "height",
  Up = ".collapse.show, .collapse.collapsing",
  yi = '[data-bs-toggle="collapse"]',
  Yp = { parent: null, toggle: !0 },
  Gp = { parent: "(null|element)", toggle: "boolean" };
class vs extends me {
  constructor(t, n) {
    super(t, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const s = J.find(yi);
    for (const o of s) {
      const i = J.getSelectorFromElement(o),
        r = J.find(i).filter((a) => a === this._element);
      i !== null && r.length && this._triggerArray.push(o);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return Yp;
  }
  static get DefaultType() {
    return Gp;
  }
  static get NAME() {
    return Rp;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [];
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(Up)
          .filter((a) => a !== this._element)
          .map((a) => vs.getOrCreateInstance(a, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        P.trigger(this._element, Dp).defaultPrevented)
    )
      return;
    for (const a of t) a.hide();
    const s = this._getDimension();
    this._element.classList.remove(Sn),
      this._element.classList.add(Is),
      (this._element.style[s] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const o = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(Is),
          this._element.classList.add(Sn, Ko),
          (this._element.style[s] = ""),
          P.trigger(this._element, Pp);
      },
      r = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(o, this._element, !0),
      (this._element.style[s] = `${this._element[r]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      P.trigger(this._element, Mp).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      Cs(this._element),
      this._element.classList.add(Is),
      this._element.classList.remove(Sn, Ko);
    for (const o of this._triggerArray) {
      const i = J.getElementFromSelector(o);
      i && !this._isShown(i) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(Is),
        this._element.classList.add(Sn),
        P.trigger(this._element, Bp);
    };
    (this._element.style[n] = ""), this._queueCallback(s, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(Ko);
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = Ye(t.parent)), t;
  }
  _getDimension() {
    return this._element.classList.contains(Fp) ? Wp : Kp;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = this._getFirstLevelChildren(yi);
    for (const n of t) {
      const s = J.getElementFromSelector(n);
      s && this._addAriaAndCollapsedClass([n], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const n = J.find(Hp, this._config.parent);
    return J.find(t, this._config.parent).filter((s) => !n.includes(s));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(jp, !n), s.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(t) {
    const n = {};
    return (
      typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1),
      this.each(function () {
        const s = vs.getOrCreateInstance(this, n);
        if (typeof t == "string") {
          if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
          s[t]();
        }
      })
    );
  }
}
P.on(document, Vp, yi, function (e) {
  (e.target.tagName === "A" ||
    (e.delegateTarget && e.delegateTarget.tagName === "A")) &&
    e.preventDefault();
  for (const t of J.getMultipleElementsFromSelector(this))
    vs.getOrCreateInstance(t, { toggle: !1 }).toggle();
});
de(vs);
const ol = "dropdown",
  qp = "bs.dropdown",
  _n = `.${qp}`,
  lr = ".data-api",
  zp = "Escape",
  il = "Tab",
  Xp = "ArrowUp",
  rl = "ArrowDown",
  Qp = 2,
  Jp = `hide${_n}`,
  Zp = `hidden${_n}`,
  tg = `show${_n}`,
  eg = `shown${_n}`,
  Gc = `click${_n}${lr}`,
  qc = `keydown${_n}${lr}`,
  ng = `keyup${_n}${lr}`,
  Tn = "show",
  sg = "dropup",
  og = "dropend",
  ig = "dropstart",
  rg = "dropup-center",
  lg = "dropdown-center",
  an = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  ag = `${an}.${Tn}`,
  Ys = ".dropdown-menu",
  cg = ".navbar",
  ug = ".navbar-nav",
  fg = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  dg = ce() ? "top-end" : "top-start",
  hg = ce() ? "top-start" : "top-end",
  pg = ce() ? "bottom-end" : "bottom-start",
  gg = ce() ? "bottom-start" : "bottom-end",
  mg = ce() ? "left-start" : "right-start",
  _g = ce() ? "right-start" : "left-start",
  vg = "top",
  bg = "bottom",
  Eg = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  yg = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class Te extends me {
  constructor(t, n) {
    super(t, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        J.next(this._element, Ys)[0] ||
        J.prev(this._element, Ys)[0] ||
        J.findOne(Ys, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return Eg;
  }
  static get DefaultType() {
    return yg;
  }
  static get NAME() {
    return ol;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Ge(this._element) || this._isShown()) return;
    const t = { relatedTarget: this._element };
    if (!P.trigger(this._element, tg, t).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(ug))
      )
        for (const s of [].concat(...document.body.children))
          P.on(s, "mouseover", oo);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Tn),
        this._element.classList.add(Tn),
        P.trigger(this._element, eg, t);
    }
  }
  hide() {
    if (Ge(this._element) || !this._isShown()) return;
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
    if (!P.trigger(this._element, Jp, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          P.off(s, "mouseover", oo);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(Tn),
        this._element.classList.remove(Tn),
        this._element.setAttribute("aria-expanded", "false"),
        Ie.removeDataAttribute(this._menu, "popper"),
        P.trigger(this._element, Zp, t);
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == "object" &&
        !ke(t.reference) &&
        typeof t.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${ol.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper() {
    if (typeof Nc > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let t = this._element;
    this._config.reference === "parent"
      ? (t = this._parent)
      : ke(this._config.reference)
      ? (t = Ye(this._config.reference))
      : typeof this._config.reference == "object" &&
        (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = or(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(Tn);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(og)) return mg;
    if (t.classList.contains(ig)) return _g;
    if (t.classList.contains(rg)) return vg;
    if (t.classList.contains(lg)) return bg;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return t.classList.contains(sg) ? (n ? hg : dg) : n ? gg : pg;
  }
  _detectNavbar() {
    return this._element.closest(cg) !== null;
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
        (Ie.setDataAttribute(this._menu, "popper", "static"),
        (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...t, ...qt(this._config.popperConfig, [t]) }
    );
  }
  _selectMenuItem({ key: t, target: n }) {
    const s = J.find(fg, this._menu).filter((o) => Gn(o));
    s.length && ir(s, n, t === rl, !s.includes(n)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Te.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === Qp || (t.type === "keyup" && t.key !== il)) return;
    const n = J.find(ag);
    for (const s of n) {
      const o = Te.getInstance(s);
      if (!o || o._config.autoClose === !1) continue;
      const i = t.composedPath(),
        r = i.includes(o._menu);
      if (
        i.includes(o._element) ||
        (o._config.autoClose === "inside" && !r) ||
        (o._config.autoClose === "outside" && r) ||
        (o._menu.contains(t.target) &&
          ((t.type === "keyup" && t.key === il) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue;
      const a = { relatedTarget: o._element };
      t.type === "click" && (a.clickEvent = t), o._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName),
      s = t.key === zp,
      o = [Xp, rl].includes(t.key);
    if ((!o && !s) || (n && !s)) return;
    t.preventDefault();
    const i = this.matches(an)
        ? this
        : J.prev(this, an)[0] ||
          J.next(this, an)[0] ||
          J.findOne(an, t.delegateTarget.parentNode),
      r = Te.getOrCreateInstance(i);
    if (o) {
      t.stopPropagation(), r.show(), r._selectMenuItem(t);
      return;
    }
    r._isShown() && (t.stopPropagation(), r.hide(), i.focus());
  }
}
P.on(document, qc, an, Te.dataApiKeydownHandler);
P.on(document, qc, Ys, Te.dataApiKeydownHandler);
P.on(document, Gc, Te.clearMenus);
P.on(document, ng, Te.clearMenus);
P.on(document, Gc, an, function (e) {
  e.preventDefault(), Te.getOrCreateInstance(this).toggle();
});
de(Te);
const zc = "backdrop",
  wg = "fade",
  ll = "show",
  al = `mousedown.bs.${zc}`,
  Ag = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  Cg = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class Xc extends Ts {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return Ag;
  }
  static get DefaultType() {
    return Cg;
  }
  static get NAME() {
    return zc;
  }
  show(t) {
    if (!this._config.isVisible) {
      qt(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Cs(n),
      n.classList.add(ll),
      this._emulateAnimation(() => {
        qt(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      qt(t);
      return;
    }
    this._getElement().classList.remove(ll),
      this._emulateAnimation(() => {
        this.dispose(), qt(t);
      });
  }
  dispose() {
    this._isAppended &&
      (P.off(this._element, al),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(wg),
        (this._element = t);
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return (t.rootElement = Ye(t.rootElement)), t;
  }
  _append() {
    if (this._isAppended) return;
    const t = this._getElement();
    this._config.rootElement.append(t),
      P.on(t, al, () => {
        qt(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(t) {
    Dc(t, this._getElement(), this._config.isAnimated);
  }
}
const Tg = "focustrap",
  Og = "bs.focustrap",
  ro = `.${Og}`,
  Sg = `focusin${ro}`,
  xg = `keydown.tab${ro}`,
  $g = "Tab",
  Ng = "forward",
  cl = "backward",
  Lg = { autofocus: !0, trapElement: null },
  Rg = { autofocus: "boolean", trapElement: "element" };
class Qc extends Ts {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return Lg;
  }
  static get DefaultType() {
    return Rg;
  }
  static get NAME() {
    return Tg;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      P.off(document, ro),
      P.on(document, Sg, (t) => this._handleFocusin(t)),
      P.on(document, xg, (t) => this._handleKeydown(t)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), P.off(document, ro));
  }
  _handleFocusin(t) {
    const { trapElement: n } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target)) return;
    const s = J.focusableChildren(n);
    s.length === 0
      ? n.focus()
      : this._lastTabNavDirection === cl
      ? s[s.length - 1].focus()
      : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === $g && (this._lastTabNavDirection = t.shiftKey ? cl : Ng);
  }
}
const ul = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  fl = ".sticky-top",
  Ds = "padding-right",
  dl = "margin-right";
class wi {
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
      this._setElementAttributes(this._element, Ds, (n) => n + t),
      this._setElementAttributes(ul, Ds, (n) => n + t),
      this._setElementAttributes(fl, dl, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, Ds),
      this._resetElementAttributes(ul, Ds),
      this._resetElementAttributes(fl, dl);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(t, n, s) {
    const o = this.getWidth(),
      i = (r) => {
        if (r !== this._element && window.innerWidth > r.clientWidth + o)
          return;
        this._saveInitialAttribute(r, n);
        const a = window.getComputedStyle(r).getPropertyValue(n);
        r.style.setProperty(n, `${s(Number.parseFloat(a))}px`);
      };
    this._applyManipulationCallback(t, i);
  }
  _saveInitialAttribute(t, n) {
    const s = t.style.getPropertyValue(n);
    s && Ie.setDataAttribute(t, n, s);
  }
  _resetElementAttributes(t, n) {
    const s = (o) => {
      const i = Ie.getDataAttribute(o, n);
      if (i === null) {
        o.style.removeProperty(n);
        return;
      }
      Ie.removeDataAttribute(o, n), o.style.setProperty(n, i);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, n) {
    if (ke(t)) {
      n(t);
      return;
    }
    for (const s of J.find(t, this._element)) n(s);
  }
}
const kg = "modal",
  Ig = "bs.modal",
  ue = `.${Ig}`,
  Dg = ".data-api",
  Pg = "Escape",
  Mg = `hide${ue}`,
  Bg = `hidePrevented${ue}`,
  Jc = `hidden${ue}`,
  Zc = `show${ue}`,
  Vg = `shown${ue}`,
  jg = `resize${ue}`,
  Hg = `click.dismiss${ue}`,
  Fg = `mousedown.dismiss${ue}`,
  Wg = `keydown.dismiss${ue}`,
  Kg = `click${ue}${Dg}`,
  hl = "modal-open",
  Ug = "fade",
  pl = "show",
  Uo = "modal-static",
  Yg = ".modal.show",
  Gg = ".modal-dialog",
  qg = ".modal-body",
  zg = '[data-bs-toggle="modal"]',
  Xg = { backdrop: !0, focus: !0, keyboard: !0 },
  Qg = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class qe extends me {
  constructor(t, n) {
    super(t, n),
      (this._dialog = J.findOne(Gg, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new wi()),
      this._addEventListeners();
  }
  static get Default() {
    return Xg;
  }
  static get DefaultType() {
    return Qg;
  }
  static get NAME() {
    return kg;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      P.trigger(this._element, Zc, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(hl),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      P.trigger(this._element, Mg).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(pl),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated()
      ));
  }
  dispose() {
    P.off(window, ue),
      P.off(this._dialog, ue),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new Xc({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new Qc({ trapElement: this._element });
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = J.findOne(qg, this._dialog);
    n && (n.scrollTop = 0), Cs(this._element), this._element.classList.add(pl);
    const s = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        P.trigger(this._element, Vg, { relatedTarget: t });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    P.on(this._element, Wg, (t) => {
      if (t.key === Pg) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      P.on(window, jg, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      P.on(this._element, Fg, (t) => {
        P.one(this._element, Hg, (n) => {
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
        document.body.classList.remove(hl),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          P.trigger(this._element, Jc);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(Ug);
  }
  _triggerBackdropTransition() {
    if (P.trigger(this._element, Bg).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      s = this._element.style.overflowY;
    s === "hidden" ||
      this._element.classList.contains(Uo) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(Uo),
      this._queueCallback(() => {
        this._element.classList.remove(Uo),
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
      const o = ce() ? "paddingLeft" : "paddingRight";
      this._element.style[o] = `${n}px`;
    }
    if (!s && t) {
      const o = ce() ? "paddingRight" : "paddingLeft";
      this._element.style[o] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const s = qe.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
        s[t](n);
      }
    });
  }
}
P.on(document, Kg, zg, function (e) {
  const t = J.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    P.one(t, Zc, (o) => {
      o.defaultPrevented ||
        P.one(t, Jc, () => {
          Gn(this) && this.focus();
        });
    });
  const n = J.findOne(Yg);
  n && qe.getInstance(n).hide(), qe.getOrCreateInstance(t).toggle(this);
});
Ao(qe);
de(qe);
const Jg = "offcanvas",
  Zg = "bs.offcanvas",
  Me = `.${Zg}`,
  tu = ".data-api",
  tm = `load${Me}${tu}`,
  em = "Escape",
  gl = "show",
  ml = "showing",
  _l = "hiding",
  nm = "offcanvas-backdrop",
  eu = ".offcanvas.show",
  sm = `show${Me}`,
  om = `shown${Me}`,
  im = `hide${Me}`,
  vl = `hidePrevented${Me}`,
  nu = `hidden${Me}`,
  rm = `resize${Me}`,
  lm = `click${Me}${tu}`,
  am = `keydown.dismiss${Me}`,
  cm = '[data-bs-toggle="offcanvas"]',
  um = { backdrop: !0, keyboard: !0, scroll: !1 },
  fm = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class ze extends me {
  constructor(t, n) {
    super(t, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return um;
  }
  static get DefaultType() {
    return fm;
  }
  static get NAME() {
    return Jg;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (
      this._isShown ||
      P.trigger(this._element, sm, { relatedTarget: t }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new wi().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(ml);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(gl),
        this._element.classList.remove(ml),
        P.trigger(this._element, om, { relatedTarget: t });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || P.trigger(this._element, im).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(_l),
      this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(gl, _l),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new wi().reset(),
        P.trigger(this._element, nu);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === "static") {
          P.trigger(this._element, vl);
          return;
        }
        this.hide();
      },
      n = !!this._config.backdrop;
    return new Xc({
      className: nm,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null,
    });
  }
  _initializeFocusTrap() {
    return new Qc({ trapElement: this._element });
  }
  _addEventListeners() {
    P.on(this._element, am, (t) => {
      if (t.key === em) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        P.trigger(this._element, vl);
      }
    });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ze.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
P.on(document, lm, cm, function (e) {
  const t = J.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Ge(this)))
    return;
  P.one(t, nu, () => {
    Gn(this) && this.focus();
  });
  const n = J.findOne(eu);
  n && n !== t && ze.getInstance(n).hide(),
    ze.getOrCreateInstance(t).toggle(this);
});
P.on(window, tm, () => {
  for (const e of J.find(eu)) ze.getOrCreateInstance(e).show();
});
P.on(window, rm, () => {
  for (const e of J.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" &&
      ze.getOrCreateInstance(e).hide();
});
Ao(ze);
de(ze);
const dm = /^aria-[\w-]*$/i,
  su = {
    "*": ["class", "dir", "id", "lang", "role", dm],
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
  hm = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  pm = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  gm = (e, t) => {
    const n = e.nodeName.toLowerCase();
    return t.includes(n)
      ? hm.has(n)
        ? !!pm.test(e.nodeValue)
        : !0
      : t.filter((s) => s instanceof RegExp).some((s) => s.test(n));
  };
function mm(e, t, n) {
  if (!e.length) return e;
  if (n && typeof n == "function") return n(e);
  const o = new window.DOMParser().parseFromString(e, "text/html"),
    i = [].concat(...o.body.querySelectorAll("*"));
  for (const r of i) {
    const a = r.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      r.remove();
      continue;
    }
    const l = [].concat(...r.attributes),
      c = [].concat(t["*"] || [], t[a] || []);
    for (const u of l) gm(u, c) || r.removeAttribute(u.nodeName);
  }
  return o.body.innerHTML;
}
const _m = "TemplateFactory",
  vm = {
    allowList: su,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  bm = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  Em = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class ym extends Ts {
  constructor(t) {
    super(), (this._config = this._getConfig(t));
  }
  static get Default() {
    return vm;
  }
  static get DefaultType() {
    return bm;
  }
  static get NAME() {
    return _m;
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
    for (const [o, i] of Object.entries(this._config.content))
      this._setContent(t, i, o);
    const n = t.children[0],
      s = this._resolvePossibleFunction(this._config.extraClass);
    return s && n.classList.add(...s.split(" ")), n;
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, s] of Object.entries(t))
      super._typeCheckConfig({ selector: n, entry: s }, Em);
  }
  _setContent(t, n, s) {
    const o = J.findOne(s, t);
    if (o) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        o.remove();
        return;
      }
      if (ke(n)) {
        this._putElementInTemplate(Ye(n), o);
        return;
      }
      if (this._config.html) {
        o.innerHTML = this._maybeSanitize(n);
        return;
      }
      o.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize
      ? mm(t, this._config.allowList, this._config.sanitizeFn)
      : t;
  }
  _resolvePossibleFunction(t) {
    return qt(t, [this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      (n.innerHTML = ""), n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const wm = "tooltip",
  Am = new Set(["sanitize", "allowList", "sanitizeFn"]),
  Yo = "fade",
  Cm = "modal",
  Ps = "show",
  Tm = ".tooltip-inner",
  bl = `.${Cm}`,
  El = "hide.bs.modal",
  ts = "hover",
  Go = "focus",
  Om = "click",
  Sm = "manual",
  xm = "hide",
  $m = "hidden",
  Nm = "show",
  Lm = "shown",
  Rm = "inserted",
  km = "click",
  Im = "focusin",
  Dm = "focusout",
  Pm = "mouseenter",
  Mm = "mouseleave",
  Bm = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: ce() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: ce() ? "right" : "left",
  },
  Vm = {
    allowList: su,
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
  jm = {
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
class zn extends me {
  constructor(t, n) {
    if (typeof Nc > "u")
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
    return Vm;
  }
  static get DefaultType() {
    return jm;
  }
  static get NAME() {
    return wm;
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
      P.off(this._element.closest(bl), El, this._hideModalHandler),
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
    const t = P.trigger(this._element, this.constructor.eventName(Nm)),
      s = (
        kc(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (t.defaultPrevented || !s) return;
    this._disposePopper();
    const o = this._getTipElement();
    this._element.setAttribute("aria-describedby", o.getAttribute("id"));
    const { container: i } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (i.append(o), P.trigger(this._element, this.constructor.eventName(Rm))),
      (this._popper = this._createPopper(o)),
      o.classList.add(Ps),
      "ontouchstart" in document.documentElement)
    )
      for (const a of [].concat(...document.body.children))
        P.on(a, "mouseover", oo);
    const r = () => {
      P.trigger(this._element, this.constructor.eventName(Lm)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(r, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      P.trigger(this._element, this.constructor.eventName(xm)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(Ps),
      "ontouchstart" in document.documentElement)
    )
      for (const o of [].concat(...document.body.children))
        P.off(o, "mouseover", oo);
    (this._activeTrigger[Om] = !1),
      (this._activeTrigger[Go] = !1),
      (this._activeTrigger[ts] = !1),
      (this._isHovered = null);
    const s = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        P.trigger(this._element, this.constructor.eventName($m)));
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
    n.classList.remove(Yo, Ps),
      n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = Oh(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", s), this._isAnimated() && n.classList.add(Yo), n
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
        : (this._templateFactory = new ym({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [Tm]: this._getTitle() };
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
      this._config.animation || (this.tip && this.tip.classList.contains(Yo))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Ps);
  }
  _createPopper(t) {
    const n = qt(this._config.placement, [this, t, this._element]),
      s = Bm[n.toUpperCase()];
    return or(this._element, t, this._getPopperConfig(s));
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
    return qt(t, [this._element]);
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
    return { ...n, ...qt(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        P.on(
          this._element,
          this.constructor.eventName(km),
          this._config.selector,
          (s) => {
            this._initializeOnDelegatedTarget(s).toggle();
          }
        );
      else if (n !== Sm) {
        const s =
            n === ts
              ? this.constructor.eventName(Pm)
              : this.constructor.eventName(Im),
          o =
            n === ts
              ? this.constructor.eventName(Mm)
              : this.constructor.eventName(Dm);
        P.on(this._element, s, this._config.selector, (i) => {
          const r = this._initializeOnDelegatedTarget(i);
          (r._activeTrigger[i.type === "focusin" ? Go : ts] = !0), r._enter();
        }),
          P.on(this._element, o, this._config.selector, (i) => {
            const r = this._initializeOnDelegatedTarget(i);
            (r._activeTrigger[i.type === "focusout" ? Go : ts] =
              r._element.contains(i.relatedTarget)),
              r._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      P.on(this._element.closest(bl), El, this._hideModalHandler);
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
    const n = Ie.getDataAttributes(this._element);
    for (const s of Object.keys(n)) Am.has(s) && delete n[s];
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
      (t.container = t.container === !1 ? document.body : Ye(t.container)),
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
      const n = zn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
de(zn);
const Hm = "popover",
  Fm = ".popover-header",
  Wm = ".popover-body",
  Km = {
    ...zn.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  Um = { ...zn.DefaultType, content: "(null|string|element|function)" };
class ar extends zn {
  static get Default() {
    return Km;
  }
  static get DefaultType() {
    return Um;
  }
  static get NAME() {
    return Hm;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [Fm]: this._getTitle(), [Wm]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ar.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
de(ar);
const Ym = "scrollspy",
  Gm = "bs.scrollspy",
  cr = `.${Gm}`,
  qm = ".data-api",
  zm = `activate${cr}`,
  yl = `click${cr}`,
  Xm = `load${cr}${qm}`,
  Qm = "dropdown-item",
  yn = "active",
  Jm = '[data-bs-spy="scroll"]',
  qo = "[href]",
  Zm = ".nav, .list-group",
  wl = ".nav-link",
  t_ = ".nav-item",
  e_ = ".list-group-item",
  n_ = `${wl}, ${t_} > ${wl}, ${e_}`,
  s_ = ".dropdown",
  o_ = ".dropdown-toggle",
  i_ = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  r_ = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class Oo extends me {
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
    return i_;
  }
  static get DefaultType() {
    return r_;
  }
  static get NAME() {
    return Ym;
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
      (t.target = Ye(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == "string" &&
        (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))),
      t
    );
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (P.off(this._config.target, yl),
      P.on(this._config.target, yl, qo, (t) => {
        const n = this._observableSections.get(t.target.hash);
        if (n) {
          t.preventDefault();
          const s = this._rootElement || window,
            o = n.offsetTop - this._element.offsetTop;
          if (s.scrollTo) {
            s.scrollTo({ top: o, behavior: "smooth" });
            return;
          }
          s.scrollTop = o;
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
    const n = (r) => this._targetLinks.get(`#${r.target.id}`),
      s = (r) => {
        (this._previousScrollData.visibleEntryTop = r.target.offsetTop),
          this._process(n(r));
      },
      o = (this._rootElement || document.documentElement).scrollTop,
      i = o >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = o;
    for (const r of t) {
      if (!r.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(n(r));
        continue;
      }
      const a = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (i && a) {
        if ((s(r), !o)) return;
        continue;
      }
      !i && !a && s(r);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const t = J.find(qo, this._config.target);
    for (const n of t) {
      if (!n.hash || Ge(n)) continue;
      const s = J.findOne(decodeURI(n.hash), this._element);
      Gn(s) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(yn),
      this._activateParents(t),
      P.trigger(this._element, zm, { relatedTarget: t }));
  }
  _activateParents(t) {
    if (t.classList.contains(Qm)) {
      J.findOne(o_, t.closest(s_)).classList.add(yn);
      return;
    }
    for (const n of J.parents(t, Zm))
      for (const s of J.prev(n, n_)) s.classList.add(yn);
  }
  _clearActiveClass(t) {
    t.classList.remove(yn);
    const n = J.find(`${qo}.${yn}`, t);
    for (const s of n) s.classList.remove(yn);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Oo.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
P.on(window, Xm, () => {
  for (const e of J.find(Jm)) Oo.getOrCreateInstance(e);
});
de(Oo);
const l_ = "tab",
  a_ = "bs.tab",
  vn = `.${a_}`,
  c_ = `hide${vn}`,
  u_ = `hidden${vn}`,
  f_ = `show${vn}`,
  d_ = `shown${vn}`,
  h_ = `click${vn}`,
  p_ = `keydown${vn}`,
  g_ = `load${vn}`,
  m_ = "ArrowLeft",
  Al = "ArrowRight",
  __ = "ArrowUp",
  Cl = "ArrowDown",
  zo = "Home",
  Tl = "End",
  cn = "active",
  Ol = "fade",
  Xo = "show",
  v_ = "dropdown",
  ou = ".dropdown-toggle",
  b_ = ".dropdown-menu",
  Qo = `:not(${ou})`,
  E_ = '.list-group, .nav, [role="tablist"]',
  y_ = ".nav-item, .list-group-item",
  w_ = `.nav-link${Qo}, .list-group-item${Qo}, [role="tab"]${Qo}`,
  iu =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  Jo = `${w_}, ${iu}`,
  A_ = `.${cn}[data-bs-toggle="tab"], .${cn}[data-bs-toggle="pill"], .${cn}[data-bs-toggle="list"]`;
class Wn extends me {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(E_)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        P.on(this._element, p_, (n) => this._keydown(n)));
  }
  static get NAME() {
    return l_;
  }
  show() {
    const t = this._element;
    if (this._elemIsActive(t)) return;
    const n = this._getActiveElem(),
      s = n ? P.trigger(n, c_, { relatedTarget: t }) : null;
    P.trigger(t, f_, { relatedTarget: n }).defaultPrevented ||
      (s && s.defaultPrevented) ||
      (this._deactivate(n, t), this._activate(t, n));
  }
  _activate(t, n) {
    if (!t) return;
    t.classList.add(cn), this._activate(J.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(Xo);
        return;
      }
      t.removeAttribute("tabindex"),
        t.setAttribute("aria-selected", !0),
        this._toggleDropDown(t, !0),
        P.trigger(t, d_, { relatedTarget: n });
    };
    this._queueCallback(s, t, t.classList.contains(Ol));
  }
  _deactivate(t, n) {
    if (!t) return;
    t.classList.remove(cn),
      t.blur(),
      this._deactivate(J.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(Xo);
        return;
      }
      t.setAttribute("aria-selected", !1),
        t.setAttribute("tabindex", "-1"),
        this._toggleDropDown(t, !1),
        P.trigger(t, u_, { relatedTarget: n });
    };
    this._queueCallback(s, t, t.classList.contains(Ol));
  }
  _keydown(t) {
    if (![m_, Al, __, Cl, zo, Tl].includes(t.key)) return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((o) => !Ge(o));
    let s;
    if ([zo, Tl].includes(t.key)) s = n[t.key === zo ? 0 : n.length - 1];
    else {
      const o = [Al, Cl].includes(t.key);
      s = ir(n, t.target, o, !0);
    }
    s && (s.focus({ preventScroll: !0 }), Wn.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return J.find(Jo, this._parent);
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
    const n = J.getElementFromSelector(t);
    n &&
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(v_)) return;
    const o = (i, r) => {
      const a = J.findOne(i, s);
      a && a.classList.toggle(r, n);
    };
    o(ou, cn), o(b_, Xo), s.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, s) {
    t.hasAttribute(n) || t.setAttribute(n, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(cn);
  }
  _getInnerElement(t) {
    return t.matches(Jo) ? t : J.findOne(Jo, t);
  }
  _getOuterElement(t) {
    return t.closest(y_) || t;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Wn.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
P.on(document, h_, iu, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    !Ge(this) && Wn.getOrCreateInstance(this).show();
});
P.on(window, g_, () => {
  for (const e of J.find(A_)) Wn.getOrCreateInstance(e);
});
de(Wn);
const C_ = "toast",
  T_ = "bs.toast",
  en = `.${T_}`,
  O_ = `mouseover${en}`,
  S_ = `mouseout${en}`,
  x_ = `focusin${en}`,
  $_ = `focusout${en}`,
  N_ = `hide${en}`,
  L_ = `hidden${en}`,
  R_ = `show${en}`,
  k_ = `shown${en}`,
  I_ = "fade",
  Sl = "hide",
  Ms = "show",
  Bs = "showing",
  D_ = { animation: "boolean", autohide: "boolean", delay: "number" },
  P_ = { animation: !0, autohide: !0, delay: 5e3 };
class xs extends me {
  constructor(t, n) {
    super(t, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return P_;
  }
  static get DefaultType() {
    return D_;
  }
  static get NAME() {
    return C_;
  }
  show() {
    if (P.trigger(this._element, R_).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(I_);
    const n = () => {
      this._element.classList.remove(Bs),
        P.trigger(this._element, k_),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(Sl),
      Cs(this._element),
      this._element.classList.add(Ms, Bs),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || P.trigger(this._element, N_).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Sl),
        this._element.classList.remove(Bs, Ms),
        P.trigger(this._element, L_);
    };
    this._element.classList.add(Bs),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(Ms),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(Ms);
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
    P.on(this._element, O_, (t) => this._onInteraction(t, !0)),
      P.on(this._element, S_, (t) => this._onInteraction(t, !1)),
      P.on(this._element, x_, (t) => this._onInteraction(t, !0)),
      P.on(this._element, $_, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = xs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Ao(xs);
de(xs);
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const On = typeof document < "u";
function ru(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function M_(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && ru(e.default))
  );
}
const pt = Object.assign;
function Zo(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = ge(o) ? o.map(e) : e(o);
  }
  return n;
}
const us = () => {},
  ge = Array.isArray;
function xl(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
const lu = /#/g,
  B_ = /&/g,
  V_ = /\//g,
  j_ = /=/g,
  H_ = /\?/g,
  au = /\+/g,
  F_ = /%5B/g,
  W_ = /%5D/g,
  cu = /%5E/g,
  K_ = /%60/g,
  uu = /%7B/g,
  U_ = /%7C/g,
  fu = /%7D/g,
  Y_ = /%20/g;
function ur(e) {
  return e == null
    ? ""
    : encodeURI("" + e)
        .replace(U_, "|")
        .replace(F_, "[")
        .replace(W_, "]");
}
function G_(e) {
  return ur(e).replace(uu, "{").replace(fu, "}").replace(cu, "^");
}
function Ai(e) {
  return ur(e)
    .replace(au, "%2B")
    .replace(Y_, "+")
    .replace(lu, "%23")
    .replace(B_, "%26")
    .replace(K_, "`")
    .replace(uu, "{")
    .replace(fu, "}")
    .replace(cu, "^");
}
function q_(e) {
  return Ai(e).replace(j_, "%3D");
}
function z_(e) {
  return ur(e).replace(lu, "%23").replace(H_, "%3F");
}
function X_(e) {
  return z_(e).replace(V_, "%2F");
}
function bs(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Q_ = /\/$/,
  J_ = (e) => e.replace(Q_, "");
function ti(e, t, n = "/") {
  let s,
    o = {},
    i = "",
    r = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    (l = a >= 0 && l > a ? -1 : l),
    l >= 0 &&
      ((s = t.slice(0, l)),
      (i = t.slice(l, a > 0 ? a : t.length)),
      (o = e(i.slice(1)))),
    a >= 0 && ((s = s || t.slice(0, a)), (r = t.slice(a, t.length))),
    (s = nv(s ?? t, n)),
    { fullPath: s + i + r, path: s, query: o, hash: bs(r) }
  );
}
function Z_(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function $l(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function tv(e, t, n) {
  const s = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    s > -1 &&
    s === o &&
    Kn(t.matched[s], n.matched[o]) &&
    du(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Kn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function du(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!ev(e[n], t[n])) return !1;
  return !0;
}
function ev(e, t) {
  return ge(e)
    ? Nl(e, t)
    : ge(t)
    ? Nl(t, e)
    : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Nl(e, t) {
  return ge(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function nv(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    o = s[s.length - 1];
  (o === ".." || o === ".") && s.push("");
  let i = n.length - 1,
    r,
    a;
  for (r = 0; r < s.length; r++)
    if (((a = s[r]), a !== "."))
      if (a === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + s.slice(r).join("/");
}
const Ve = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
let Ci = (function (e) {
    return (e.pop = "pop"), (e.push = "push"), e;
  })({}),
  ei = (function (e) {
    return (e.back = "back"), (e.forward = "forward"), (e.unknown = ""), e;
  })({});
function sv(e) {
  if (!e)
    if (On) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), J_(e);
}
const ov = /^[^#]+#/;
function iv(e, t) {
  return e.replace(ov, "#") + t;
}
function rv(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const So = () => ({ left: window.scrollX, top: window.scrollY });
function lv(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = rv(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Ll(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ti = new Map();
function av(e, t) {
  Ti.set(e, t);
}
function cv(e) {
  const t = Ti.get(e);
  return Ti.delete(e), t;
}
function uv(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function hu(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Ot = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = "MATCHER_NOT_FOUND"),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = "NAVIGATION_GUARD_REDIRECT"),
    (e[(e.NAVIGATION_ABORTED = 4)] = "NAVIGATION_ABORTED"),
    (e[(e.NAVIGATION_CANCELLED = 8)] = "NAVIGATION_CANCELLED"),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = "NAVIGATION_DUPLICATED"),
    e
  );
})({});
const pu = Symbol("");
Ot.MATCHER_NOT_FOUND + "",
  Ot.NAVIGATION_GUARD_REDIRECT + "",
  Ot.NAVIGATION_ABORTED + "",
  Ot.NAVIGATION_CANCELLED + "",
  Ot.NAVIGATION_DUPLICATED + "";
function Un(e, t) {
  return pt(new Error(), { type: e, [pu]: !0 }, t);
}
function $e(e, t) {
  return e instanceof Error && pu in e && (t == null || !!(e.type & t));
}
const fv = ["params", "query", "hash"];
function dv(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of fv) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function hv(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < n.length; ++s) {
    const o = n[s].replace(au, " "),
      i = o.indexOf("="),
      r = bs(i < 0 ? o : o.slice(0, i)),
      a = i < 0 ? null : bs(o.slice(i + 1));
    if (r in t) {
      let l = t[r];
      ge(l) || (l = t[r] = [l]), l.push(a);
    } else t[r] = a;
  }
  return t;
}
function Rl(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = q_(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (ge(s) ? s.map((o) => o && Ai(o)) : [s && Ai(s)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function pv(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = ge(s)
        ? s.map((o) => (o == null ? null : "" + o))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const gu = Symbol(""),
  kl = Symbol(""),
  xo = Symbol(""),
  fr = Symbol(""),
  Oi = Symbol("");
function es() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const o = e.indexOf(s);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function gv(e, t, n) {
  const s = () => {
    e[t].delete(n);
  };
  Wi(s),
    Sa(s),
    Oa(() => {
      e[t].add(n);
    }),
    e[t].add(n);
}
function mv(e) {
  const t = re(gu, {}).value;
  t && gv(t, "updateGuards", e);
}
function Fe(e, t, n, s, o, i = (r) => r()) {
  const r = s && (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () =>
    new Promise((a, l) => {
      const c = (m) => {
          m === !1
            ? l(Un(Ot.NAVIGATION_ABORTED, { from: n, to: t }))
            : m instanceof Error
            ? l(m)
            : uv(m)
            ? l(Un(Ot.NAVIGATION_GUARD_REDIRECT, { from: t, to: m }))
            : (r &&
                s.enterCallbacks[o] === r &&
                typeof m == "function" &&
                r.push(m),
              a());
        },
        u = i(() => e.call(s && s.instances[o], t, n, c));
      let d = Promise.resolve(u);
      e.length < 3 && (d = d.then(c)), d.catch((m) => l(m));
    });
}
function ni(e, t, n, s, o = (i) => i()) {
  const i = [];
  for (const r of e)
    for (const a in r.components) {
      let l = r.components[a];
      if (!(t !== "beforeRouteEnter" && !r.instances[a]))
        if (ru(l)) {
          const c = (l.__vccOpts || l)[t];
          c && i.push(Fe(c, n, s, r, a, o));
        } else {
          let c = l();
          i.push(() =>
            c.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${r.path}"`
                );
              const d = M_(u) ? u.default : u;
              (r.mods[a] = u), (r.components[a] = d);
              const m = (d.__vccOpts || d)[t];
              return m && Fe(m, n, s, r, a, o)();
            })
          );
        }
    }
  return i;
}
function _v(e, t) {
  const n = [],
    s = [],
    o = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < i; r++) {
    const a = t.matched[r];
    a && (e.matched.find((c) => Kn(c, a)) ? s.push(a) : n.push(a));
    const l = e.matched[r];
    l && (t.matched.find((c) => Kn(c, l)) || o.push(l));
  }
  return [n, s, o];
}
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let vv = () => location.protocol + "//" + location.host;
function mu(e, t) {
  const { pathname: n, search: s, hash: o } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let r = o.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = o.slice(r);
    return a[0] !== "/" && (a = "/" + a), $l(a, "");
  }
  return $l(n, e) + s + o;
}
function bv(e, t, n, s) {
  let o = [],
    i = [],
    r = null;
  const a = ({ state: m }) => {
    const h = mu(e, location),
      A = n.value,
      w = t.value;
    let T = 0;
    if (m) {
      if (((n.value = h), (t.value = m), r && r === A)) {
        r = null;
        return;
      }
      T = w ? m.position - w.position : 0;
    } else s(h);
    o.forEach((M) => {
      M(n.value, A, {
        delta: T,
        type: Ci.pop,
        direction: T ? (T > 0 ? ei.forward : ei.back) : ei.unknown,
      });
    });
  };
  function l() {
    r = n.value;
  }
  function c(m) {
    o.push(m);
    const h = () => {
      const A = o.indexOf(m);
      A > -1 && o.splice(A, 1);
    };
    return i.push(h), h;
  }
  function u() {
    if (document.visibilityState === "hidden") {
      const { history: m } = window;
      if (!m.state) return;
      m.replaceState(pt({}, m.state, { scroll: So() }), "");
    }
  }
  function d() {
    for (const m of i) m();
    (i = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("pagehide", u),
      document.removeEventListener("visibilitychange", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("pagehide", u),
    document.addEventListener("visibilitychange", u),
    { pauseListeners: l, listen: c, destroy: d }
  );
}
function Il(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? So() : null,
  };
}
function Ev(e) {
  const { history: t, location: n } = window,
    s = { value: mu(e, n) },
    o = { value: t.state };
  o.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(l, c, u) {
    const d = e.indexOf("#"),
      m =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l
          : vv() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", m), (o.value = c);
    } catch (h) {
      console.error(h), n[u ? "replace" : "assign"](m);
    }
  }
  function r(l, c) {
    i(
      l,
      pt({}, t.state, Il(o.value.back, l, o.value.forward, !0), c, {
        position: o.value.position,
      }),
      !0
    ),
      (s.value = l);
  }
  function a(l, c) {
    const u = pt({}, o.value, t.state, { forward: l, scroll: So() });
    i(u.current, u, !0),
      i(l, pt({}, Il(s.value, l, null), { position: u.position + 1 }, c), !1),
      (s.value = l);
  }
  return { location: s, state: o, push: a, replace: r };
}
function yv(e) {
  e = sv(e);
  const t = Ev(e),
    n = bv(e, t.state, t.location, t.replace);
  function s(i, r = !0) {
    r || n.pauseListeners(), history.go(i);
  }
  const o = pt(
    { location: "", base: e, go: s, createHref: iv.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
let un = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.Group = 2)] = "Group"),
    e
  );
})({});
var $t = (function (e) {
  return (
    (e[(e.Static = 0)] = "Static"),
    (e[(e.Param = 1)] = "Param"),
    (e[(e.ParamRegExp = 2)] = "ParamRegExp"),
    (e[(e.ParamRegExpEnd = 3)] = "ParamRegExpEnd"),
    (e[(e.EscapeNext = 4)] = "EscapeNext"),
    e
  );
})($t || {});
const wv = { type: un.Static, value: "" },
  Av = /[a-zA-Z0-9_]/;
function Cv(e) {
  if (!e) return [[]];
  if (e === "/") return [[wv]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${c}": ${h}`);
  }
  let n = $t.Static,
    s = n;
  const o = [];
  let i;
  function r() {
    i && o.push(i), (i = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function d() {
    c &&
      (n === $t.Static
        ? i.push({ type: un.Static, value: c })
        : n === $t.Param || n === $t.ParamRegExp || n === $t.ParamRegExpEnd
        ? (i.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: un.Param,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function m() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== $t.ParamRegExp)) {
      (s = n), (n = $t.EscapeNext);
      continue;
    }
    switch (n) {
      case $t.Static:
        l === "/" ? (c && d(), r()) : l === ":" ? (d(), (n = $t.Param)) : m();
        break;
      case $t.EscapeNext:
        m(), (n = s);
        break;
      case $t.Param:
        l === "("
          ? (n = $t.ParamRegExp)
          : Av.test(l)
          ? m()
          : (d(), (n = $t.Static), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case $t.ParamRegExp:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = $t.ParamRegExpEnd)
          : (u += l);
        break;
      case $t.ParamRegExpEnd:
        d(),
          (n = $t.Static),
          l !== "*" && l !== "?" && l !== "+" && a--,
          (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return (
    n === $t.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`),
    d(),
    r(),
    o
  );
}
const Dl = "[^/]+?",
  Tv = { sensitive: !1, strict: !1, start: !0, end: !0 };
var Ft = (function (e) {
  return (
    (e[(e._multiplier = 10)] = "_multiplier"),
    (e[(e.Root = 90)] = "Root"),
    (e[(e.Segment = 40)] = "Segment"),
    (e[(e.SubSegment = 30)] = "SubSegment"),
    (e[(e.Static = 40)] = "Static"),
    (e[(e.Dynamic = 20)] = "Dynamic"),
    (e[(e.BonusCustomRegExp = 10)] = "BonusCustomRegExp"),
    (e[(e.BonusWildcard = -50)] = "BonusWildcard"),
    (e[(e.BonusRepeatable = -20)] = "BonusRepeatable"),
    (e[(e.BonusOptional = -8)] = "BonusOptional"),
    (e[(e.BonusStrict = 0.7000000000000001)] = "BonusStrict"),
    (e[(e.BonusCaseSensitive = 0.25)] = "BonusCaseSensitive"),
    e
  );
})(Ft || {});
const Ov = /[.+*?^${}()[\]/\\]/g;
function Sv(e, t) {
  const n = pt({}, Tv, t),
    s = [];
  let o = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [Ft.Root];
    n.strict && !c.length && (o += "/");
    for (let d = 0; d < c.length; d++) {
      const m = c[d];
      let h = Ft.Segment + (n.sensitive ? Ft.BonusCaseSensitive : 0);
      if (m.type === un.Static)
        d || (o += "/"), (o += m.value.replace(Ov, "\\$&")), (h += Ft.Static);
      else if (m.type === un.Param) {
        const { value: A, repeatable: w, optional: T, regexp: M } = m;
        i.push({ name: A, repeatable: w, optional: T });
        const C = M || Dl;
        if (C !== Dl) {
          h += Ft.BonusCustomRegExp;
          try {
            `${C}`;
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${A}" (${C}): ` + _.message
            );
          }
        }
        let E = w ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
        d || (E = T && c.length < 2 ? `(?:/${E})` : "/" + E),
          T && (E += "?"),
          (o += E),
          (h += Ft.Dynamic),
          T && (h += Ft.BonusOptional),
          w && (h += Ft.BonusRepeatable),
          C === ".*" && (h += Ft.BonusWildcard);
      }
      u.push(h);
    }
    s.push(u);
  }
  if (n.strict && n.end) {
    const c = s.length - 1;
    s[c][s[c].length - 1] += Ft.BonusStrict;
  }
  n.strict || (o += "/?"),
    n.end ? (o += "$") : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const r = new RegExp(o, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(r),
      d = {};
    if (!u) return null;
    for (let m = 1; m < u.length; m++) {
      const h = u[m] || "",
        A = i[m - 1];
      d[A.name] = h && A.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function l(c) {
    let u = "",
      d = !1;
    for (const m of e) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const h of m)
        if (h.type === un.Static) u += h.value;
        else if (h.type === un.Param) {
          const { value: A, repeatable: w, optional: T } = h,
            M = A in c ? c[A] : "";
          if (ge(M) && !w)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`
            );
          const C = ge(M) ? M.join("/") : M;
          if (!C)
            if (T)
              m.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${A}"`);
          u += C;
        }
    }
    return u || "/";
  }
  return { re: r, score: s, keys: i, parse: a, stringify: l };
}
function xv(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === Ft.Static + Ft.Segment
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === Ft.Static + Ft.Segment
      ? 1
      : -1
    : 0;
}
function _u(e, t) {
  let n = 0;
  const s = e.score,
    o = t.score;
  for (; n < s.length && n < o.length; ) {
    const i = xv(s[n], o[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Pl(s)) return 1;
    if (Pl(o)) return -1;
  }
  return o.length - s.length;
}
function Pl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const $v = { strict: !1, end: !0, sensitive: !1 };
function Nv(e, t, n) {
  const s = Sv(Cv(e.path), n),
    o = pt(s, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Lv(e, t) {
  const n = [],
    s = new Map();
  t = xl($v, t);
  function o(d) {
    return s.get(d);
  }
  function i(d, m, h) {
    const A = !h,
      w = Bl(d);
    w.aliasOf = h && h.record;
    const T = xl(t, d),
      M = [w];
    if ("alias" in d) {
      const _ = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const O of _)
        M.push(
          Bl(
            pt({}, w, {
              components: h ? h.record.components : w.components,
              path: O,
              aliasOf: h ? h.record : w,
            })
          )
        );
    }
    let C, E;
    for (const _ of M) {
      const { path: O } = _;
      if (m && O[0] !== "/") {
        const Y = m.record.path,
          j = Y[Y.length - 1] === "/" ? "" : "/";
        _.path = m.record.path + (O && j + O);
      }
      if (
        ((C = Nv(_, m, T)),
        h
          ? h.alias.push(C)
          : ((E = E || C),
            E !== C && E.alias.push(C),
            A && d.name && !Vl(C) && r(d.name)),
        vu(C) && l(C),
        w.children)
      ) {
        const Y = w.children;
        for (let j = 0; j < Y.length; j++) i(Y[j], C, h && h.children[j]);
      }
      h = h || C;
    }
    return E
      ? () => {
          r(E);
        }
      : us;
  }
  function r(d) {
    if (hu(d)) {
      const m = s.get(d);
      m &&
        (s.delete(d),
        n.splice(n.indexOf(m), 1),
        m.children.forEach(r),
        m.alias.forEach(r));
    } else {
      const m = n.indexOf(d);
      m > -1 &&
        (n.splice(m, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(r),
        d.alias.forEach(r));
    }
  }
  function a() {
    return n;
  }
  function l(d) {
    const m = Iv(d, n);
    n.splice(m, 0, d), d.record.name && !Vl(d) && s.set(d.record.name, d);
  }
  function c(d, m) {
    let h,
      A = {},
      w,
      T;
    if ("name" in d && d.name) {
      if (((h = s.get(d.name)), !h))
        throw Un(Ot.MATCHER_NOT_FOUND, { location: d });
      (T = h.record.name),
        (A = pt(
          Ml(
            m.params,
            h.keys
              .filter((E) => !E.optional)
              .concat(h.parent ? h.parent.keys.filter((E) => E.optional) : [])
              .map((E) => E.name)
          ),
          d.params &&
            Ml(
              d.params,
              h.keys.map((E) => E.name)
            )
        )),
        (w = h.stringify(A));
    } else if (d.path != null)
      (w = d.path),
        (h = n.find((E) => E.re.test(w))),
        h && ((A = h.parse(w)), (T = h.record.name));
    else {
      if (((h = m.name ? s.get(m.name) : n.find((E) => E.re.test(m.path))), !h))
        throw Un(Ot.MATCHER_NOT_FOUND, { location: d, currentLocation: m });
      (T = h.record.name),
        (A = pt({}, m.params, d.params)),
        (w = h.stringify(A));
    }
    const M = [];
    let C = h;
    for (; C; ) M.unshift(C.record), (C = C.parent);
    return { name: T, path: w, params: A, matched: M, meta: kv(M) };
  }
  e.forEach((d) => i(d));
  function u() {
    (n.length = 0), s.clear();
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: r,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: o,
  };
}
function Ml(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Bl(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Rv(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Rv(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function Vl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function kv(e) {
  return e.reduce((t, n) => pt(t, n.meta), {});
}
function Iv(e, t) {
  let n = 0,
    s = t.length;
  for (; n !== s; ) {
    const i = (n + s) >> 1;
    _u(e, t[i]) < 0 ? (s = i) : (n = i + 1);
  }
  const o = Dv(e);
  return o && (s = t.lastIndexOf(o, s - 1)), s;
}
function Dv(e) {
  let t = e;
  for (; (t = t.parent); ) if (vu(t) && _u(e, t) === 0) return t;
}
function vu({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function jl(e) {
  const t = re(xo),
    n = re(fr),
    s = oe(() => {
      const l = ft(e.to);
      return t.resolve(l);
    }),
    o = oe(() => {
      const { matched: l } = s.value,
        { length: c } = l,
        u = l[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const m = d.findIndex(Kn.bind(null, u));
      if (m > -1) return m;
      const h = Hl(l[c - 2]);
      return c > 1 && Hl(u) === h && d[d.length - 1].path !== h
        ? d.findIndex(Kn.bind(null, l[c - 2]))
        : m;
    }),
    i = oe(() => o.value > -1 && jv(n.params, s.value.params)),
    r = oe(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        du(n.params, s.value.params)
    );
  function a(l = {}) {
    if (Vv(l)) {
      const c = t[ft(e.replace) ? "replace" : "push"](ft(e.to)).catch(us);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => c),
        c
      );
    }
    return Promise.resolve();
  }
  return {
    route: s,
    href: oe(() => s.value.href),
    isActive: i,
    isExactActive: r,
    navigate: a,
  };
}
function Pv(e) {
  return e.length === 1 ? e[0] : e;
}
const Mv = Aa({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
      viewTransition: Boolean,
    },
    useLink: jl,
    setup(e, { slots: t }) {
      const n = mn(jl(e)),
        { options: s } = re(xo),
        o = oe(() => ({
          [Fl(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Fl(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && Pv(t.default(n));
        return e.custom
          ? i
          : oc(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              i
            );
      };
    },
  }),
  Bv = Mv;
function Vv(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function jv(e, t) {
  for (const n in t) {
    const s = t[n],
      o = e[n];
    if (typeof s == "string") {
      if (s !== o) return !1;
    } else if (
      !ge(o) ||
      o.length !== s.length ||
      s.some((i, r) => i.valueOf() !== o[r].valueOf())
    )
      return !1;
  }
  return !0;
}
function Hl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Fl = (e, t, n) => e ?? t ?? n,
  Hv = Aa({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = re(Oi),
        o = oe(() => e.route || s.value),
        i = re(kl, 0),
        r = oe(() => {
          let c = ft(i);
          const { matched: u } = o.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        a = oe(() => o.value.matched[r.value]);
      js(
        kl,
        oe(() => r.value + 1)
      ),
        js(gu, a),
        js(Oi, o);
      const l = U();
      return (
        Ke(
          () => [l.value, a.value, e.name],
          ([c, u, d], [m, h, A]) => {
            u &&
              ((u.instances[d] = c),
              h &&
                h !== u &&
                c &&
                c === m &&
                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
              c &&
                u &&
                (!h || !Kn(u, h) || !m) &&
                (u.enterCallbacks[d] || []).forEach((w) => w(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = o.value,
            u = e.name,
            d = a.value,
            m = d && d.components[u];
          if (!m) return Wl(n.default, { Component: m, route: c });
          const h = d.props[u],
            A = h
              ? h === !0
                ? c.params
                : typeof h == "function"
                ? h(c)
                : h
              : null,
            T = oc(
              m,
              pt({}, A, t, {
                onVnodeUnmounted: (M) => {
                  M.component.isUnmounted && (d.instances[u] = null);
                },
                ref: l,
              })
            );
          return Wl(n.default, { Component: T, route: c }) || T;
        }
      );
    },
  });
function Wl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Fv = Hv;
function Wv(e) {
  const t = Lv(e.routes, e),
    n = e.parseQuery || hv,
    s = e.stringifyQuery || Rl,
    o = e.history,
    i = es(),
    r = es(),
    a = es(),
    l = tf(Ve);
  let c = Ve;
  On &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Zo.bind(null, (x) => "" + x),
    d = Zo.bind(null, X_),
    m = Zo.bind(null, bs);
  function h(x, D) {
    let v, y;
    return (
      hu(x) ? ((v = t.getRecordMatcher(x)), (y = D)) : (y = x), t.addRoute(y, v)
    );
  }
  function A(x) {
    const D = t.getRecordMatcher(x);
    D && t.removeRoute(D);
  }
  function w() {
    return t.getRoutes().map((x) => x.record);
  }
  function T(x) {
    return !!t.getRecordMatcher(x);
  }
  function M(x, D) {
    if (((D = pt({}, D || l.value)), typeof x == "string")) {
      const b = ti(n, x, D.path),
        $ = t.resolve({ path: b.path }, D),
        R = o.createHref(b.fullPath);
      return pt(b, $, {
        params: m($.params),
        hash: bs(b.hash),
        redirectedFrom: void 0,
        href: R,
      });
    }
    let v;
    if (x.path != null) v = pt({}, x, { path: ti(n, x.path, D.path).path });
    else {
      const b = pt({}, x.params);
      for (const $ in b) b[$] == null && delete b[$];
      (v = pt({}, x, { params: d(b) })), (D.params = d(D.params));
    }
    const y = t.resolve(v, D),
      X = x.hash || "";
    y.params = u(m(y.params));
    const p = Z_(s, pt({}, x, { hash: G_(X), path: y.path })),
      g = o.createHref(p);
    return pt(
      { fullPath: p, hash: X, query: s === Rl ? pv(x.query) : x.query || {} },
      y,
      { redirectedFrom: void 0, href: g }
    );
  }
  function C(x) {
    return typeof x == "string" ? ti(n, x, l.value.path) : pt({}, x);
  }
  function E(x, D) {
    if (c !== x) return Un(Ot.NAVIGATION_CANCELLED, { from: D, to: x });
  }
  function _(x) {
    return j(x);
  }
  function O(x) {
    return _(pt(C(x), { replace: !0 }));
  }
  function Y(x, D) {
    const v = x.matched[x.matched.length - 1];
    if (v && v.redirect) {
      const { redirect: y } = v;
      let X = typeof y == "function" ? y(x, D) : y;
      return (
        typeof X == "string" &&
          ((X = X.includes("?") || X.includes("#") ? (X = C(X)) : { path: X }),
          (X.params = {})),
        pt(
          {
            query: x.query,
            hash: x.hash,
            params: X.path != null ? {} : x.params,
          },
          X
        )
      );
    }
  }
  function j(x, D) {
    const v = (c = M(x)),
      y = l.value,
      X = x.state,
      p = x.force,
      g = x.replace === !0,
      b = Y(v, y);
    if (b)
      return j(
        pt(C(b), {
          state: typeof b == "object" ? pt({}, X, b.state) : X,
          force: p,
          replace: g,
        }),
        D || v
      );
    const $ = v;
    $.redirectedFrom = D;
    let R;
    return (
      !p &&
        tv(s, y, v) &&
        ((R = Un(Ot.NAVIGATION_DUPLICATED, { to: $, from: y })),
        It(y, y, !0, !1)),
      (R ? Promise.resolve(R) : k($, y))
        .catch((N) =>
          $e(N)
            ? $e(N, Ot.NAVIGATION_GUARD_REDIRECT)
              ? N
              : Lt(N)
            : tt(N, $, y)
        )
        .then((N) => {
          if (N) {
            if ($e(N, Ot.NAVIGATION_GUARD_REDIRECT))
              return j(
                pt({ replace: g }, C(N.to), {
                  state: typeof N.to == "object" ? pt({}, X, N.to.state) : X,
                  force: p,
                }),
                D || $
              );
          } else N = I($, y, !0, g, X);
          return B($, y, N), N;
        })
    );
  }
  function lt(x, D) {
    const v = E(x, D);
    return v ? Promise.reject(v) : Promise.resolve();
  }
  function ut(x) {
    const D = jt.values().next().value;
    return D && typeof D.runWithContext == "function"
      ? D.runWithContext(x)
      : x();
  }
  function k(x, D) {
    let v;
    const [y, X, p] = _v(x, D);
    v = ni(y.reverse(), "beforeRouteLeave", x, D);
    for (const b of y)
      b.leaveGuards.forEach(($) => {
        v.push(Fe($, x, D));
      });
    const g = lt.bind(null, x, D);
    return (
      v.push(g),
      xt(v)
        .then(() => {
          v = [];
          for (const b of i.list()) v.push(Fe(b, x, D));
          return v.push(g), xt(v);
        })
        .then(() => {
          v = ni(X, "beforeRouteUpdate", x, D);
          for (const b of X)
            b.updateGuards.forEach(($) => {
              v.push(Fe($, x, D));
            });
          return v.push(g), xt(v);
        })
        .then(() => {
          v = [];
          for (const b of p)
            if (b.beforeEnter)
              if (ge(b.beforeEnter))
                for (const $ of b.beforeEnter) v.push(Fe($, x, D));
              else v.push(Fe(b.beforeEnter, x, D));
          return v.push(g), xt(v);
        })
        .then(
          () => (
            x.matched.forEach((b) => (b.enterCallbacks = {})),
            (v = ni(p, "beforeRouteEnter", x, D, ut)),
            v.push(g),
            xt(v)
          )
        )
        .then(() => {
          v = [];
          for (const b of r.list()) v.push(Fe(b, x, D));
          return v.push(g), xt(v);
        })
        .catch((b) => ($e(b, Ot.NAVIGATION_CANCELLED) ? b : Promise.reject(b)))
    );
  }
  function B(x, D, v) {
    a.list().forEach((y) => ut(() => y(x, D, v)));
  }
  function I(x, D, v, y, X) {
    const p = E(x, D);
    if (p) return p;
    const g = D === Ve,
      b = On ? history.state : {};
    v &&
      (y || g
        ? o.replace(x.fullPath, pt({ scroll: g && b && b.scroll }, X))
        : o.push(x.fullPath, X)),
      (l.value = x),
      It(x, D, v, g),
      Lt();
  }
  let it;
  function S() {
    it ||
      (it = o.listen((x, D, v) => {
        if (!Rt.listening) return;
        const y = M(x),
          X = Y(y, Rt.currentRoute.value);
        if (X) {
          j(pt(X, { replace: !0, force: !0 }), y).catch(us);
          return;
        }
        c = y;
        const p = l.value;
        On && av(Ll(p.fullPath, v.delta), So()),
          k(y, p)
            .catch((g) =>
              $e(g, Ot.NAVIGATION_ABORTED | Ot.NAVIGATION_CANCELLED)
                ? g
                : $e(g, Ot.NAVIGATION_GUARD_REDIRECT)
                ? (j(pt(C(g.to), { force: !0 }), y)
                    .then((b) => {
                      $e(b, Ot.NAVIGATION_ABORTED | Ot.NAVIGATION_DUPLICATED) &&
                        !v.delta &&
                        v.type === Ci.pop &&
                        o.go(-1, !1);
                    })
                    .catch(us),
                  Promise.reject())
                : (v.delta && o.go(-v.delta, !1), tt(g, y, p))
            )
            .then((g) => {
              (g = g || I(y, p, !1)),
                g &&
                  (v.delta && !$e(g, Ot.NAVIGATION_CANCELLED)
                    ? o.go(-v.delta, !1)
                    : v.type === Ci.pop &&
                      $e(g, Ot.NAVIGATION_ABORTED | Ot.NAVIGATION_DUPLICATED) &&
                      o.go(-1, !1)),
                B(y, p, g);
            })
            .catch(us);
      }));
  }
  let L = es(),
    G = es(),
    z;
  function tt(x, D, v) {
    Lt(x);
    const y = G.list();
    return (
      y.length ? y.forEach((X) => X(x, D, v)) : console.error(x),
      Promise.reject(x)
    );
  }
  function _t() {
    return z && l.value !== Ve
      ? Promise.resolve()
      : new Promise((x, D) => {
          L.add([x, D]);
        });
  }
  function Lt(x) {
    return (
      z ||
        ((z = !x),
        S(),
        L.list().forEach(([D, v]) => (x ? v(x) : D())),
        L.reset()),
      x
    );
  }
  function It(x, D, v, y) {
    const { scrollBehavior: X } = e;
    if (!On || !X) return Promise.resolve();
    const p =
      (!v && cv(Ll(x.fullPath, 0))) ||
      ((y || !v) && history.state && history.state.scroll) ||
      null;
    return ji()
      .then(() => X(x, D, p))
      .then((g) => g && lv(g))
      .catch((g) => tt(g, x, D));
  }
  const Tt = (x) => o.go(x);
  let zt;
  const jt = new Set(),
    Rt = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: A,
      clearRoutes: t.clearRoutes,
      hasRoute: T,
      getRoutes: w,
      resolve: M,
      options: e,
      push: _,
      replace: O,
      go: Tt,
      back: () => Tt(-1),
      forward: () => Tt(1),
      beforeEach: i.add,
      beforeResolve: r.add,
      afterEach: a.add,
      onError: G.add,
      isReady: _t,
      install(x) {
        x.component("RouterLink", Bv),
          x.component("RouterView", Fv),
          (x.config.globalProperties.$router = Rt),
          Object.defineProperty(x.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ft(l),
          }),
          On &&
            !zt &&
            l.value === Ve &&
            ((zt = !0), _(o.location).catch((y) => {}));
        const D = {};
        for (const y in Ve)
          Object.defineProperty(D, y, {
            get: () => l.value[y],
            enumerable: !0,
          });
        x.provide(xo, Rt), x.provide(fr, pa(D)), x.provide(Oi, l);
        const v = x.unmount;
        jt.add(x),
          (x.unmount = function () {
            jt.delete(x),
              jt.size < 1 &&
                ((c = Ve),
                it && it(),
                (it = null),
                (l.value = Ve),
                (zt = !1),
                (z = !1)),
              v();
          });
      },
    };
  function xt(x) {
    return x.reduce((D, v) => D.then(() => ut(v)), Promise.resolve());
  }
  return Rt;
}
function bu() {
  return re(xo);
}
function Kv(e) {
  return re(fr);
}
const Uv = { class: "navbar navbar-expand-md navbar-dark bg-dark mb-4" },
  Yv = { class: "container-fluid" },
  Gv = { class: "collapse navbar-collapse", id: "navbarCollapse" },
  qv = { class: "navbar-nav me-auto mb-2 mb-md-0" },
  zv = { class: "nav-item" },
  Xv = { class: "nav-item" },
  Qv = { class: "nav-item" },
  Jv = { class: "nav-item" },
  Zv = { class: "nav-item" },
  tb = { class: "nav-item" },
  eb = { class: "nav-item" },
  nb = { class: "nav-item" },
  sb = { class: "container" },
  ob = {
    __name: "App",
    setup(e) {
      return (
        U(null),
        U("Описание страницы"),
        bu(),
        (t, n) => {
          const s = Dn("RouterLink"),
            o = Dn("RouterView");
          return (
            Q(),
            nt(
              ht,
              null,
              [
                f("nav", Uv, [
                  f("div", Yv, [
                    n[8] ||
                      (n[8] = f(
                        "a",
                        { class: "navbar-brand", href: "#" },
                        "Lux project",
                        -1
                      )),
                    n[9] ||
                      (n[9] = f(
                        "button",
                        {
                          class: "navbar-toggler",
                          type: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#navbarCollapse",
                          "aria-controls": "navbarCollapse",
                          "aria-expanded": "false",
                          "aria-label": "Toggle navigation",
                        },
                        [f("span", { class: "navbar-toggler-icon" })],
                        -1
                      )),
                    f("div", Gv, [
                      f("ul", qv, [
                        f("li", zv, [
                          rt(
                            s,
                            { to: "/", class: "nav-link" },
                            {
                              default: At(
                                () => n[0] || (n[0] = [ct("Обо мне")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        f("li", Xv, [
                          rt(
                            s,
                            { to: "/calculator", class: "nav-link" },
                            {
                              default: At(
                                () => n[1] || (n[1] = [ct("Калькулятор")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        f("li", Qv, [
                          rt(
                            s,
                            { to: "/gallows", class: "nav-link" },
                            {
                              default: At(
                                () => n[2] || (n[2] = [ct("Виселица")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        f("li", Jv, [
                          rt(
                            s,
                            { to: "/find-the-treasure", class: "nav-link" },
                            {
                              default: At(
                                () => n[3] || (n[3] = [ct("Найди клад")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        f("li", Zv, [
                          rt(
                            s,
                            { to: "/game-of-life", class: "nav-link" },
                            {
                              default: At(
                                () => n[4] || (n[4] = [ct("Игра в жизнь")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        f("li", tb, [
                          rt(
                            s,
                            { to: "/page-dogs", class: "nav-link" },
                            {
                              default: At(
                                () => n[5] || (n[5] = [ct("Собаки")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        f("li", eb, [
                          rt(
                            s,
                            { to: "/progress-bar", class: "nav-link" },
                            {
                              default: At(
                                () => n[6] || (n[6] = [ct("Прогресс бар")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                        f("li", nb, [
                          rt(
                            s,
                            { to: "/testing", class: "nav-link" },
                            {
                              default: At(
                                () => n[7] || (n[7] = [ct("Тестовое")])
                              ),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                f("main", sb, [rt(o)]),
              ],
              64
            )
          );
        }
      );
    },
  },
  ib = "/Lux-super-project/assets/personaPhoto-DbW-h41R.jpg",
  rb = { class: "position-fixed top-0 end-0 p-3" },
  lb = { class: "toast-container position-fixed top-0 end-0 p-3" },
  ab = { class: "toast-body" },
  nn = {
    __name: "PageDescription",
    setup(e) {
      const t = U(null),
        n = U(null);
      return (
        fe(() => {
          (n.value = new xs(t.value, { autohide: !1 })), n.value.show();
        }),
        (s, o) => (
          Q(),
          nt(
            ht,
            null,
            [
              f("div", rb, [
                (Q(),
                nt(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "40",
                    fill: "black",
                    class: "question-view bi bi-question-square",
                    viewBox: "0 0 26 26",
                    onClick: o[0] || (o[0] = (i) => n.value.show()),
                  },
                  o[1] ||
                    (o[1] = [
                      f(
                        "path",
                        {
                          d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z",
                        },
                        null,
                        -1
                      ),
                      f(
                        "path",
                        {
                          d: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z",
                        },
                        null,
                        -1
                      ),
                    ])
                )),
              ]),
              f("div", lb, [
                f(
                  "div",
                  {
                    id: "liveToast",
                    ref_key: "toastContainer",
                    ref: t,
                    class: "toast",
                    role: "alert",
                    "aria-live": "assertive",
                    "aria-atomic": "true",
                  },
                  [
                    o[2] ||
                      (o[2] = f(
                        "div",
                        { class: "toast-header" },
                        [
                          f(
                            "strong",
                            { class: "me-auto" },
                            "Описание компонента"
                          ),
                          f("button", {
                            type: "button",
                            class: "btn-close",
                            "data-bs-dismiss": "toast",
                            "aria-label": "Закрыть",
                          }),
                        ],
                        -1
                      )),
                    f("div", ab, [ka(s.$slots, "default")]),
                  ],
                  512
                ),
              ]),
            ],
            64
          )
        )
      );
    },
  },
  cb = {
    __name: "PersonalPage",
    setup(e) {
      return (t, n) => (
        Q(),
        nt(
          ht,
          null,
          [
            rt(nn, null, {
              default: At(
                () =>
                  n[0] ||
                  (n[0] = [
                    ct(
                      " Страница построена с использованием Vue.js. Используя современные технологии и подходы к разработке, я создаю интерактивные и удобные в использовании приложения. Допольнительные инструменты и технологии, которые я использую в этом проекте: "
                    ),
                    f("b", null, "Vue Router", -1),
                    ct(" для управления маршрутизацией, а так же "),
                    f("b", null, "Bootstrap", -1),
                    ct(" для стилизации и создания адаптивного дизайна. "),
                  ])
              ),
              _: 1,
            }),
            n[1] ||
              (n[1] = Zf(
                '<div class="row"><div class="col-6 mx-auto text-center"><p class="fs-4"> Добро пожаловать на мой проект! это должно быть на странице </p><p>Меня зовут Сергей, и я рад приветствовать вас здесь.</p><p> На этой странице вы найдете информацию обо мне, моих увлечениях и проектах, которые я разработал в рамках учебного процесса. Я использовал Vue.js для создания интерактивных и динамичных интерфейсов, а также применял различные библиотеки и инструменты для улучшения функциональности и дизайна. </p><p> На этой странице вы можете ознакомиться с моими проектами, такими как калькулятор, игра &quot;Виселица&quot;, &quot;Найди клад&quot;, &quot;Игра в жизнь&quot; и многое другое. Я стремился создать разнообразные приложения, чтобы продемонстрировать свои навыки и творческий подход к разработке. </p><p> Я всегда открыт для новых знакомств и сотрудничества, поэтому не стесняйтесь связаться со мной, если у вас есть какие-либо вопросы или предложения. </p><p> Спасибо, что посетили мою страницу, и я надеюсь, что вам будет интересно узнать обо мне больше! </p></div><div class="col-2"><img src="' +
                  ib +
                  '" width="251" height="377"></div></div>',
                1
              )),
          ],
          64
        )
      );
    },
  },
  ub = { class: "row-2" },
  fb = { class: "col-4 col-md-auto" },
  db = { class: "col-3 mx-auto border border-dark border-2 rounded-3" },
  hb = { class: "border-bottom border-dark border-2" },
  pb = { class: "col" },
  gb = {
    class: "display text-end fs-1 overflow-hidden border-2",
    style: { "max-height": "0.5em" },
  },
  mb = { class: "row justify-content-md-center" },
  _b = { class: "col-md-auto" },
  vb = { class: "row" },
  bb = { class: "col" },
  Eb = { class: "row" },
  yb = { class: "col" },
  wb = { class: "row" },
  Ab = { class: "col" },
  Cb = { class: "row" },
  Tb = { class: "col" },
  Ob = { class: "row" },
  Sb = { class: "col" },
  Kl = "/x-+%.",
  xb = {
    __name: "SimpleCalculator",
    setup(e) {
      let t = mn([]);
      const n = oe(() => (console.log("computed", t), t.join("") || "0"));
      document.addEventListener("keydown", i);
      const s = [".", "/", "x", "-", "+"],
        o = {
          96: () => {
            r(0);
          },
          97: () => {
            r(1);
          },
          98: () => {
            r(2);
          },
          99: () => {
            r(3);
          },
          100: () => {
            r(4);
          },
          101: () => {
            r(5);
          },
          102: () => {
            r(6);
          },
          103: () => {
            r(7);
          },
          104: () => {
            r(8);
          },
          105: () => {
            r(9);
          },
          48: () => {
            r(0);
          },
          49: () => {
            r(1);
          },
          50: () => {
            r(2);
          },
          51: () => {
            r(3);
          },
          52: () => {
            r(4);
          },
          53: () => {
            r(5);
          },
          54: () => {
            r(6);
          },
          55: () => {
            r(7);
          },
          56: () => {
            r(8);
          },
          57: () => {
            r(9);
          },
          111: () => {
            r("/");
          },
          106: () => {
            r("x");
          },
          109: () => {
            r("-");
          },
          107: () => {
            r("+");
          },
          110: () => {
            r(".");
          },
          108: () => {
            r(".");
          },
          13: c,
          27: a,
          8: T,
        };
      function i(C) {
        console.log(C.keyCode, C.code), C.preventDefault(), o[C.keyCode]();
      }
      function r(C) {
        const E = t[t.length - 1],
          _ = t[t.length - 2],
          O = Kl.includes(E),
          Y = Kl.includes(C);
        if (t[0] === "-" && Y === !1) {
          t.splice(0, 1, -C);
          return;
        }
        if (C === "negative") {
          t.splice(-1, 1, Number(-t.slice(-1)));
          return;
        }
        if (O === !1 && Y === !1)
          if (E === void 0) t.push(Number(C)), console.log(t);
          else {
            const j = String(E) + String(C);
            console.log(j), (t[t.length - 1] = Number(j));
          }
        else {
          if (C === "." && _ === ".") return;
          if (O === !1 && Y === !0) t.push(C);
          else if (O === !0 && Y === !0) {
            if (C === "." && t[t.length - 3] === ".") return;
            t.splice(-1, 1, C);
          } else O === !0 && Y === !1 && t.push(C);
        }
        console.log(C, t);
      }
      function a() {
        t.splice(0), console.log(t);
      }
      function l() {
        for (let C of s) {
          let E = t.indexOf(C);
          if (E !== -1) return E;
        }
        return null;
      }
      function c() {
        if (t.length == 1) return;
        let C = l(),
          E = t[C - 1],
          _ = t[C + 1];
        if (C === null) {
          console.log("error");
          return;
        }
        if (
          (t.includes("%") === !0 &&
            (t.pop(), t[C], console.log("передача в функции %", t)),
          isFinite(E) && isFinite(_))
        ) {
          let O = u(E, t[C], _);
          t.splice(C - 1, 3, O), c(), console.log(t);
        }
      }
      function u(C, E, _) {
        if (E == "+") return m(C, _);
        if (E == "-") return h(C, _);
        if (E == "/") return w(C, _);
        if (E == "x") return A(C, _);
        if (E == ".") return d(C, _);
      }
      function d(C, E) {
        return +(String(C) + "." + String(E));
      }
      function m(C, E) {
        return C + E;
      }
      function h(C, E) {
        return C - E;
      }
      function A(C, E) {
        return C * E;
      }
      function w(C, E) {
        return C / E;
      }
      function T() {
        let C = t.splice(-1).toString();
        console.log(C, C.length, t),
          C.length > 1 &&
            ((C = C.slice(0, C.length - 1)), t.push(+C), console.log(C, t));
      }
      function M(C, E, _) {}
      return (C, E) => (
        Q(),
        nt(
          ht,
          null,
          [
            rt(nn, null, {
              default: At(
                () =>
                  E[20] ||
                  (E[20] = [
                    ct(
                      " Простой калькулятор с вычислением выражений, поддержкой не целых чисел, а так же с отрицательными числами. заложен приоритет операций. Изначально писался в качестве практики на "
                    ),
                    f("b", null, "JavaScript", -1),
                    ct(", но в итоге был перенесён на "),
                    f("b", null, "Vue.js", -1),
                    ct(" с минимальными изменениями в коде.', "),
                  ])
              ),
              _: 1,
            }),
            f("div", ub, [
              f("div", fb, [
                f("div", db, [
                  f("div", hb, [f("div", pb, [f("div", gb, Nt(n.value), 1)])]),
                  f("div", mb, [
                    f("div", _b, [
                      f("div", vb, [
                        f("div", bb, [
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[0] || (E[0] = (_) => a()),
                            },
                            " AC "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[1] || (E[1] = (_) => T()),
                            },
                            " ←"
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[2] || (E[2] = (_) => r("negative")),
                            },
                            " +/- "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[3] || (E[3] = (_) => r("/")),
                            },
                            " / "
                          ),
                        ]),
                      ]),
                      f("div", Eb, [
                        f("div", yb, [
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[4] || (E[4] = (_) => r(7)),
                            },
                            " 7 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[5] || (E[5] = (_) => r(8)),
                            },
                            " 8 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[6] || (E[6] = (_) => r(9)),
                            },
                            " 9 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[7] || (E[7] = (_) => r("x")),
                            },
                            " x "
                          ),
                        ]),
                      ]),
                      f("div", wb, [
                        f("div", Ab, [
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[8] || (E[8] = (_) => r(4)),
                            },
                            " 4 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[9] || (E[9] = (_) => r(5)),
                            },
                            " 5 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[10] || (E[10] = (_) => r(6)),
                            },
                            " 6 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[11] || (E[11] = (_) => r("-")),
                            },
                            " - "
                          ),
                        ]),
                      ]),
                      f("div", Cb, [
                        f("div", Tb, [
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[12] || (E[12] = (_) => r(1)),
                            },
                            " 1 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[13] || (E[13] = (_) => r(2)),
                            },
                            " 2 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[14] || (E[14] = (_) => r(3)),
                            },
                            " 3 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[15] || (E[15] = (_) => r("+")),
                            },
                            " + "
                          ),
                        ]),
                      ]),
                      f("div", Ob, [
                        f("div", Sb, [
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button-calc-js button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[16] || (E[16] = (_) => r("%")),
                            },
                            " % "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[17] || (E[17] = (_) => r(0)),
                            },
                            " 0 "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[18] || (E[18] = (_) => r(".")),
                            },
                            " . "
                          ),
                          f(
                            "button",
                            {
                              type: "button",
                              class:
                                "button button-calc button btn btn-lg btn-outline-dark p-0 fs-3 m-1",
                              onClick: E[19] || (E[19] = (_) => c()),
                            },
                            " = "
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  $b = { class: "modal-dialog" },
  Nb = { class: "modal-content" },
  Lb = { class: "modal-body" },
  Rb = { class: "js-line-btn col" },
  kb = {
    __name: "ModalWindow",
    emits: ["changed-form"],
    setup(e, { expose: t, emit: n }) {
      const s = n,
        o = U(null),
        i = U("");
      let r = null;
      const a = U(null),
        l = U(!0),
        c = U("animal");
      fe(() => {
        (r = new qe(o.value)), console.log(r);
      });
      function u() {
        r.show(), console.log();
      }
      function d() {
        s("changed-form", i.value == "" ? "друг" : i.value, l.value, c.value),
          r.hide();
      }
      return (
        t({ openModal: u }),
        (m, h) => (
          Q(),
          nt(
            "div",
            {
              id: "exampleModal",
              ref_key: "simpleModal",
              ref: o,
              class: "modal fade",
              tabindex: "-1",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true",
            },
            [
              f("div", $b, [
                f("div", Nb, [
                  h[7] ||
                    (h[7] = f(
                      "div",
                      { class: "modal-header" },
                      [
                        f(
                          "h1",
                          {
                            id: "exampleModalLabel",
                            class: "modal-title fs-5",
                          },
                          " Выберите нужные параметры "
                        ),
                        f("button", {
                          type: "button",
                          class: "btn-close",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Закрыть",
                        }),
                      ],
                      -1
                    )),
                  f("div", Lb, [
                    f("div", null, [
                      h[4] || (h[4] = ct(" Ваше имя ")),
                      Qs(
                        f(
                          "input",
                          {
                            ref_key: "inputFocus",
                            ref: a,
                            "onUpdate:modelValue":
                              h[0] || (h[0] = (A) => (i.value = A)),
                            placeholder: "друг",
                          },
                          null,
                          512
                        ),
                        [[Nd, i.value]]
                      ),
                    ]),
                    h[6] || (h[6] = f("br", null, null, -1)),
                    f("div", Rb, [
                      f("div", null, [
                        f(
                          "button",
                          {
                            class: "col btn btn-outline-secondary",
                            "data-bs-toggle": "button",
                            onClick:
                              h[1] || (h[1] = (A) => (l.value = !l.value)),
                          },
                          Nt(l.value ? "легко" : "сложно"),
                          1
                        ),
                        Qs(
                          f(
                            "select",
                            {
                              "onUpdate:modelValue":
                                h[2] || (h[2] = (A) => (c.value = A)),
                              class: "col btn btn-outline-secondary",
                              onClick:
                                h[3] ||
                                (h[3] = (...A) =>
                                  m.changeCategory && m.changeCategory(...A)),
                            },
                            h[5] ||
                              (h[5] = [
                                f(
                                  "option",
                                  { value: "animal", data: "животные" },
                                  " Животные ",
                                  -1
                                ),
                                f(
                                  "option",
                                  { value: "edible" },
                                  " Съедобное ",
                                  -1
                                ),
                                f(
                                  "option",
                                  { value: "inedible" },
                                  " Несъедобное ",
                                  -1
                                ),
                                f(
                                  "option",
                                  { value: "all" },
                                  " Все категории ",
                                  -1
                                ),
                              ]),
                            512
                          ),
                          [[gi, c.value]]
                        ),
                      ]),
                    ]),
                  ]),
                  f("div", { class: "modal-footer" }, [
                    f(
                      "button",
                      {
                        type: "button",
                        class: "col btn btn-outline-secondary",
                        onClick: d,
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
  Ib = { class: "container text-center", style: { width: "600px" } },
  Db = { class: "row" },
  Pb = ["innerHTML"],
  Mb = ["innerHTML"],
  Bb = { class: "js-block-answer-btn row justify-content-center" },
  Vb = { class: "js-hidden-word-btn row", style: { width: "400px" } },
  jb = { class: "js-line-btn col" },
  Hb = ["disabled"],
  Fb = { class: "js-line-btn row" },
  Wb = ["disabled"],
  Kb = ["disabled"],
  Ub = ["disabled"],
  Yb = ["disabled"],
  Gb = ["disabled"],
  qb = ["disabled"],
  zb = ["disabled"],
  Xb = ["disabled"],
  Qb = ["disabled"],
  Jb = ["disabled"],
  Zb = ["disabled"],
  t1 = ["disabled"],
  e1 = { class: "js-line-btn row" },
  n1 = ["disabled"],
  s1 = ["disabled"],
  o1 = ["disabled"],
  i1 = ["disabled"],
  r1 = ["disabled"],
  l1 = ["disabled"],
  a1 = ["disabled"],
  c1 = ["disabled"],
  u1 = ["disabled"],
  f1 = ["disabled"],
  d1 = ["disabled"],
  h1 = { class: "js-line-btn row" },
  p1 = ["disabled"],
  g1 = ["disabled"],
  m1 = ["disabled"],
  _1 = ["disabled"],
  v1 = ["disabled"],
  b1 = ["disabled"],
  E1 = ["disabled"],
  y1 = ["disabled"],
  w1 = ["disabled"],
  A1 = { class: "js-line-btn col" },
  C1 = { class: "d-grid gap-2" },
  Ul = 1,
  si = 2,
  Yl = 3,
  T1 = {
    __name: "GallowsGame",
    setup(e) {
      const t = U("animal"),
        n = U(null),
        s = U(null),
        o = U(!0),
        i = U("easy"),
        r = U(1),
        a = U(null);
      let l = null;
      const c = U(!1),
        u = U(!1),
        d = U(2);
      let m = U("друг"),
        h = [z, tt, _t, Lt, It, Tt, zt, jt, Rt, xt];
      const A = h.length,
        w = {
          animal: "животные",
          edible: "съедобное",
          inedible: "несъедобное",
          all: "все категории",
          true: "легко",
          false: "сложно",
        },
        T = mn({
          lettersUsed: [],
          answer: [],
          randomWord: "",
          maxLife: 7,
          remainingAttempts: 0,
          remainingLetters: 0,
        });
      function M() {
        s.value.openModal();
      }
      function C(D, v, y) {
        (m.value = D), (o.value = v), (t.value = y), B();
      }
      const E = {
          startGame:
            'Угадайте букву или нажмите "Начать заново" что бы сменить слово. ',
          letterWas: "вы уже использовали букву!",
          correctLetter: "Поздравляем! Такая буква есть. Следующая буква?.",
          wrong: "Такой буквы нет. Осталось попыток: ",
          playerWin: "Молодец! Было загадано слово ",
          gameOver: "Вы проиграли! Было загадано слово: ",
          help: "У вас больше не осталось подсказок",
        },
        _ = U(E.startGame),
        O = {
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
      function Y() {
        console.log(d.value);
      }
      fe(() => {
        for (let D in O)
          D != "all" &&
            ((O.all.easy = O.all.easy.concat(O[D].easy)),
            (O.all.hard = O.all.hard.concat(O[D].hard)));
        (l = a.value.getContext("2d")), B();
      });
      function j() {
        let D = [];
        if (d.value === 0) {
          (_.value = E.help), (u.value = !0);
          return;
        }
        T.answer.forEach((g, b) => {
          g === "-" && D.push(b);
        });
        const v = Math.floor(Math.random() * D.length),
          y = D[v],
          X = T.randomWord[y] === "ё" ? "е" : T.randomWord[y],
          p = document.querySelector(`[data-index="${X}"]`);
        it(p, X), T.lettersUsed.push(X), ut(), d.value--;
      }
      function lt(D) {
        return T.lettersUsed.includes(D)
          ? (console.log("repeat"), Ul)
          : T.randomWord.includes(D)
          ? (console.log("correct"), si)
          : D == "е" && T.randomWord.includes("ё")
          ? (console.log("correct", D), si)
          : (console.log("wrong"), Yl);
      }
      function ut() {
        T.remainingAttempts == 0
          ? L()
          : T.answer.includes("-") == !1 && T.remainingAttempts > 0 && G();
      }
      function k() {
        (T.lettersUsed = []),
          (T.answer = []),
          (i.value = o.value ? "easy" : "hard"),
          i.value == "easy" ? (r.value = 1) : (r.value = 2),
          a.value.getContext("2d").clearRect(0, 0, 250, 300),
          (c.value = !1),
          document.querySelectorAll(".js-letter-btn").forEach((D) => {
            D.className =
              "js-letter-btn col btn btn-outline-secondary button-letters";
          }),
          o.value == !1 ? (T.maxLife = 10) : (T.maxLife = 7),
          (T.remainingAttempts = T.maxLife);
      }
      function B() {
        k(),
          (T.randomWord =
            O[t.value][i.value][
              Math.floor(Math.random() * O[t.value][i.value].length)
            ]);
        for (let D = 0; T.randomWord.length > D; D++) T.answer[D] = "-";
      }
      function I(D) {
        const v = D.target,
          y = D.target.dataset.index;
        switch ((console.log("бутон позития", v), lt(y))) {
          case Ul:
            console.log("было"), (_.value = `<b>${m.value}</b> ${E.letterWas}`);
            return;
          case si:
            console.log("передача леттера", y),
              (_.value = `<b>${m.value}</b> ${E.correctLetter}`),
              it(v, y);
            break;
          case Yl:
            S(v),
              (_.value = `<b>${m.value}</b> ${E.wrong}"${T.remainingAttempts}"`),
              console.log("передача леттера", y);
            break;
        }
        T.lettersUsed.push(y), ut(), console.log(v, y);
      }
      function it(D, v) {
        let y = [v];
        v == "е" && (y = ["е", "ё"]);
        for (let X = 0; X < T.randomWord.length; X++)
          y.includes(T.randomWord[X]) &&
            ((T.answer[X] = T.randomWord[X]),
            T.remainingLetters--,
            (D.className += " letter-correct"),
            console.log("Буква найдена", T.answer, "Победа"));
      }
      function S(D) {
        (D.className += " letter-wrong"), T.remainingAttempts--;
        let v = A / T.maxLife,
          y = A - Math.ceil(v * T.remainingAttempts);
        y = Math.min(y, A);
        for (let X = 0; y > X; X++)
          console.log("минус жизнь", X, y, h[X]), h[X]();
      }
      function L() {
        console.log("Проигрыш"),
          (_.value = `<b>${m.value}</b> ${E.gameOver} "${T.randomWord}"`);
        for (let D = 0; D < T.randomWord.length; D++)
          (T.answer[D] = T.randomWord[D]), console.log("проиграл");
        c.value = !0;
      }
      function G() {
        (_.value = `<b>${m.value}</b> ${E.playerWin}<b>"${T.randomWord}"</b>`),
          x(),
          (d.value += r.value),
          (u.value = !1),
          console.log("выйграл"),
          (c.value = !0);
      }
      function z() {
        l.beginPath(),
          l.moveTo(50, 240),
          l.lineTo(230, 240),
          (l.lineWidth = 2),
          l.stroke();
      }
      function tt() {
        l.beginPath(),
          l.moveTo(100, 240),
          l.lineTo(100, 30),
          (l.lineWidth = 2),
          l.stroke();
      }
      function _t() {
        l.beginPath(),
          l.moveTo(60, 30),
          l.lineTo(180, 30),
          (l.lineWidth = 2),
          l.stroke();
      }
      function Lt() {
        l.beginPath(),
          l.moveTo(160, 31),
          l.lineTo(160, 80),
          (l.lineWidth = 2),
          l.stroke();
      }
      function It() {
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
      function Tt() {
        l.beginPath(),
          l.moveTo(160, 115),
          l.lineTo(160, 180),
          (l.lineWidth = 2),
          l.stroke();
      }
      function zt() {
        l.beginPath(),
          l.moveTo(160, 130),
          l.lineTo(120, 155),
          (l.lineWidth = 2),
          l.stroke();
      }
      function jt() {
        l.beginPath(),
          l.moveTo(160, 130),
          l.lineTo(200, 155),
          (l.lineWidth = 2),
          l.stroke();
      }
      function Rt() {
        l.beginPath(),
          l.moveTo(160, 180),
          l.lineTo(135, 220),
          (l.lineWidth = 2),
          l.stroke();
      }
      function xt() {
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
      function x() {
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
      return (D, v) => (
        Q(),
        nt(
          ht,
          null,
          [
            rt(nn, null, {
              default: At(
                () =>
                  v[36] ||
                  (v[36] = [
                    ct(
                      " Игра Виселица, в которой игрок должен отгадывать слова. Игра поддерживает рызличные категории слов, сложность, систему подсказок, а так же выбор имени игрока. Изначально писался на чистом "
                    ),
                    f("b", null, "JavaScript", -1),
                    ct(". Допольнительно будет использоваться "),
                    f("b", null, "pinia", -1),
                    ct(
                      " для хранения статистики игроков и их достижений. Настройки игры вынесены в отдельный компонент, в виде модального окна.' "
                    ),
                  ])
              ),
              _: 1,
            }),
            f("div", Ib, [
              v[37] ||
                (v[37] = f(
                  "div",
                  { class: "js-top-window-btn row" },
                  null,
                  -1
                )),
              f("div", Db, [
                f("div", null, [
                  f(
                    "div",
                    {
                      class: "container text-center",
                      innerHTML: `Привет <b>${ft(m)}</b>. <p />категория: <b>${
                        w[t.value]
                      }</b>, сложность: <b>${w[o.value]}</b>`,
                    },
                    null,
                    8,
                    Pb
                  ),
                  f(
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
              f(
                "div",
                {
                  class: "container text-center",
                  ref_key: "infoElementRef",
                  ref: n,
                  innerHTML: _.value,
                },
                null,
                8,
                Mb
              ),
              v[38] ||
                (v[38] = f(
                  "div",
                  { class: "row" },
                  [f("div", { class: "js-information-btn col" })],
                  -1
                )),
              f("div", Bb, [
                f("div", Vb, [
                  (Q(!0),
                  nt(
                    ht,
                    null,
                    ps(
                      T.answer,
                      (y) => (
                        Q(),
                        nt(
                          "div",
                          { class: "js-answer-word-btn col", key: y.id },
                          Nt(y),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              f("div", jb, [
                f("div", null, [
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      onClick: v[0] || (v[0] = (y) => B()),
                    },
                    " Начать заново "
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      onClick: v[1] || (v[1] = (y) => M()),
                    },
                    " Настройки игры "
                  ),
                  rt(
                    kb,
                    { ref_key: "myModal", ref: s, onChangedForm: C },
                    null,
                    512
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      disabled: u.value,
                      onClick: v[2] || (v[2] = (y) => j()),
                    },
                    " всего подсказок: " + Nt(d.value),
                    9,
                    Hb
                  ),
                ]),
              ]),
              f("div", null, [
                f("div", Fb, [
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "й",
                      onClick: v[3] || (v[3] = (y) => I(y)),
                    },
                    " Й ",
                    8,
                    Wb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ц",
                      onClick: v[4] || (v[4] = (y) => I(y)),
                    },
                    " Ц ",
                    8,
                    Kb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "у",
                      onClick: v[5] || (v[5] = (y) => I(y)),
                    },
                    " У ",
                    8,
                    Ub
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "к",
                      onClick: v[6] || (v[6] = (y) => I(y)),
                    },
                    " К ",
                    8,
                    Yb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "е",
                      onClick: v[7] || (v[7] = (y) => I(y)),
                    },
                    " Е ",
                    8,
                    Gb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "н",
                      onClick: v[8] || (v[8] = (y) => I(y)),
                    },
                    " Н ",
                    8,
                    qb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "г",
                      onClick: v[9] || (v[9] = (y) => I(y)),
                    },
                    " Г ",
                    8,
                    zb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ш",
                      onClick: v[10] || (v[10] = (y) => I(y)),
                    },
                    " Ш ",
                    8,
                    Xb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "щ",
                      onClick: v[11] || (v[11] = (y) => I(y)),
                    },
                    " Щ ",
                    8,
                    Qb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "з",
                      onClick: v[12] || (v[12] = (y) => I(y)),
                    },
                    " З ",
                    8,
                    Jb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "х",
                      onClick: v[13] || (v[13] = (y) => I(y)),
                    },
                    " Х ",
                    8,
                    Zb
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ъ",
                      onClick: v[14] || (v[14] = (y) => I(y)),
                    },
                    " Ъ ",
                    8,
                    t1
                  ),
                ]),
                f("div", e1, [
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ф",
                      onClick: v[15] || (v[15] = (y) => I(y)),
                    },
                    " Ф ",
                    8,
                    n1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ы",
                      onClick: v[16] || (v[16] = (y) => I(y)),
                    },
                    " Ы ",
                    8,
                    s1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "в",
                      onClick: v[17] || (v[17] = (y) => I(y)),
                    },
                    " В ",
                    8,
                    o1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "а",
                      onClick: v[18] || (v[18] = (y) => I(y)),
                    },
                    " А ",
                    8,
                    i1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "п",
                      onClick: v[19] || (v[19] = (y) => I(y)),
                    },
                    " П ",
                    8,
                    r1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "р",
                      onClick: v[20] || (v[20] = (y) => I(y)),
                    },
                    " Р ",
                    8,
                    l1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "о",
                      onClick: v[21] || (v[21] = (y) => I(y)),
                    },
                    " О ",
                    8,
                    a1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "л",
                      onClick: v[22] || (v[22] = (y) => I(y)),
                    },
                    " Л ",
                    8,
                    c1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "д",
                      onClick: v[23] || (v[23] = (y) => I(y)),
                    },
                    " Д ",
                    8,
                    u1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ж",
                      onClick: v[24] || (v[24] = (y) => I(y)),
                    },
                    " Ж ",
                    8,
                    f1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "э",
                      onClick: v[25] || (v[25] = (y) => I(y)),
                    },
                    " Э ",
                    8,
                    d1
                  ),
                ]),
                f("div", h1, [
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "я",
                      onClick: v[26] || (v[26] = (y) => I(y)),
                    },
                    " Я ",
                    8,
                    p1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ч",
                      onClick: v[27] || (v[27] = (y) => I(y)),
                    },
                    " Ч ",
                    8,
                    g1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "с",
                      onClick: v[28] || (v[28] = (y) => I(y)),
                    },
                    " С ",
                    8,
                    m1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "м",
                      onClick: v[29] || (v[29] = (y) => I(y)),
                    },
                    " М ",
                    8,
                    _1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "и",
                      onClick: v[30] || (v[30] = (y) => I(y)),
                    },
                    " И ",
                    8,
                    v1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "т",
                      onClick: v[31] || (v[31] = (y) => I(y)),
                    },
                    " Т ",
                    8,
                    b1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ь",
                      onClick: v[32] || (v[32] = (y) => I(y)),
                    },
                    " Ь ",
                    8,
                    E1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "б",
                      onClick: v[33] || (v[33] = (y) => I(y)),
                    },
                    " Б ",
                    8,
                    y1
                  ),
                  f(
                    "button",
                    {
                      class: "js-letter-btn col btn btn-outline-secondary",
                      ref: "letterButton",
                      disabled: c.value,
                      "data-index": "ю",
                      onClick: v[34] || (v[34] = (y) => I(y)),
                    },
                    " Ю ",
                    8,
                    w1
                  ),
                ]),
              ]),
              f("div", A1, [
                f("div", C1, [
                  f(
                    "button",
                    {
                      class: "col btn btn-outline-secondary",
                      onClick: v[35] || (v[35] = (y) => Y()),
                    },
                    " Проверка "
                  ),
                ]),
              ]),
              v[39] || (v[39] = f("div", { class: "js-line-btn" }, null, -1)),
            ]),
          ],
          64
        )
      );
    },
  },
  O1 = "/Lux-super-project/assets/map01-Bd6Y6zGu.jpg",
  S1 = { class: "container text-center" },
  x1 = { class: "col" },
  $1 = { class: "js_distance" },
  N1 = {
    __name: "FindTheTreasure",
    setup(e) {
      const t = U(null),
        n = U(null),
        s = U("null");
      let o = U(0),
        i = U(0);
      const r = U("Попробуй найти!"),
        a = U(""),
        l = U({
          width: 600,
          height: 500,
          map: document.querySelector(".js_map"),
          clicks: 0,
        });
      let c = { x: u(l.value.width), y: u(l.value.height) };
      function u(A) {
        return Math.floor(Math.random() * A);
      }
      function d(A) {
        l.value.clicks++, (t.value = A.offsetX), (n.value = A.offsetY);
        let w = m(A.offsetX, A.offsetY);
        (s.value.className = "div-reactive"),
          setTimeout(() => {
            (a.value = ""), (s.value.className = "div-reactive-hidden");
          }, 4e3),
          w < 8
            ? (alert(
                "Клад найден! Сделано кликов: " +
                  l.value.clicks +
                  " и мы перепрятали клад."
              ),
              (r.value = "Попробуй найти!"),
              (l.value.clicks = 0),
              (c.x = c.x = u(l.value.width)),
              (c.y = c.x = u(l.value.width)))
            : w < 10
            ? ((a.value = "Обожжешься!"), (r.value = "Обожжешься!"))
            : w < 20
            ? ((a.value = "Очень горячо!"), (r.value = "Очень горячо!"))
            : w < 40
            ? ((a.value = "Горячо!"), (r.value = "Очень горячо!"))
            : w < 80
            ? ((a.value = "Тепло!"), (r.value = "Тепло!"))
            : w < 160
            ? ((a.value = "Холодно!"), (r.value = "Холодно!"))
            : w < 320
            ? ((a.value = "Очень холодно!"), (r.value = "Очень холодно!"))
            : ((a.value = "Замерзнешь!"), (r.value = "Замерзнешь!"));
      }
      function m(A, w) {
        let T = A - c.x,
          M = w - c.y;
        return Math.sqrt(T * T + M * M);
      }
      function h(A, w) {
        (s.value.style.left = A + 30 + "px"),
          (s.value.style.top = w + 10 + "px"),
          (o.value = A),
          (i.value = w);
      }
      return (A, w) => (
        Q(),
        nt(
          ht,
          null,
          [
            rt(nn, null, {
              default: At(
                () =>
                  w[2] ||
                  (w[2] = [
                    ct(
                      ' Игра "Найди сокровище", в которой игрок должен найти спрятанное сокровище на карте. Была написана как отработка координантной системы и взаимодействия с мышью. Изначально была написана на '
                    ),
                    f("b", null, "чистом JavaScript", -1),
                    ct(".', "),
                  ])
              ),
              _: 1,
            }),
            f("div", S1, [
              f("div", x1, [
                w[3] || (w[3] = f("h1", null, "Найди клад", -1)),
                f("div", null, [
                  f("p", $1, Nt(r.value), 1),
                  f(
                    "img",
                    {
                      class: "js_map",
                      width: "600",
                      height: "500",
                      src: O1,
                      onClick: w[0] || (w[0] = (T) => d(T)),
                      onMousemove:
                        w[1] || (w[1] = (T) => h(T.clientX, T.clientY)),
                    },
                    null,
                    32
                  ),
                ]),
              ]),
            ]),
            f("div", null, [
              f("div", null, [
                f(
                  "div",
                  {
                    ref_key: "targetDiv",
                    ref: s,
                    class: "div-reactive-hidden",
                  },
                  Nt(a.value),
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
  L1 = { class: "row justify-content-center" },
  R1 = { class: "col text-center" },
  k1 = { class: "btn-group", role: "group" },
  I1 = { class: "container text-center" },
  D1 = ["height", "width"],
  P1 = { class: "container text-center" },
  Et = 10,
  M1 = {
    __name: "OptionWithObject",
    props: {
      cellCountX: { type: Number, default: 40 },
      cellCountY: { type: Number, default: 40 },
    },
    setup(e) {
      const t = e;
      let n = U(0),
        s = U(0);
      const o = U(null);
      let i = null,
        r = U(0),
        a = null,
        l = {},
        c = [],
        u = {},
        d = U(t.cellCountX),
        m = U(t.cellCountY);
      Ke([() => t.cellCountX, () => t.cellCountY], () => {
        h(t.cellCountX, t.cellCountY), (l = {}), ut(), console.log(l);
      }),
        fe(() => {
          (i = o.value.getContext("2d")), h(t.cellCountX, t.cellCountY);
        });
      function h(k, B) {
        const I = k * Et,
          it = B * Et;
        for (let S = 0; S <= k; S++) {
          let L = S * Et;
          i.moveTo(L, 0), i.lineTo(L, it);
        }
        for (let S = 0; S < B; S++) {
          let L = S * Et;
          i.moveTo(0, L), i.lineTo(I, L);
        }
        (i.strokeStyle = "silver"),
          i.stroke(),
          console.log("drawGrid", k, B, I, it);
      }
      function A(k, B, I) {
        I == "drawing"
          ? (console.log("drawing cell", k, B), i.fillRect(k, B, Et, Et))
          : I == "del" &&
            (console.log("delete cell", k, B), i.clearRect(k, B, Et, Et));
      }
      function w() {
        let k = {
          "60,60": [60, 60],
          "60,70": [60, 70],
          "60,80": [60, 80],
          "80,40": [80, 40],
          "100,80": [100, 80],
          "110,80": [110, 80],
          "120,80": [120, 80],
          "120,90": [120, 90],
          "120,100": [120, 100],
          "110,100": [110, 100],
          "100,100": [100, 100],
          "100,90": [100, 90],
          "30,30": [30, 30],
          "40,40": [40, 40],
          "40,50": [40, 50],
          "30,50": [30, 50],
          "20,50": [20, 50],
          "0,0": [0, 0],
          "10,0": [10, 0],
          "20,0": [20, 0],
          "0,390": [0, 390],
        };
        for (let B in k)
          T(k[B][0], k[B][1]), console.log("testing coord", k[B]);
      }
      function T(k, B) {
        k < t.cellCountX * Et && B < t.cellCountY * Et
          ? (console.log("cell OK", k, B),
            (l[`${k},${B}`] = [k, B]),
            A(k, B, "drawing"))
          : console.log("cell eror", k, B);
      }
      function M() {
        let k = 0,
          B = 0;
        for (let I in l) (k = l[I][0]), (B = l[I][1]), C(k, B);
        r.value++, console.log("strart evo"), _();
      }
      function C(k, B) {
        const I = [
          [k - 10, B - 10],
          [k, B - 10],
          [k + 10, B - 10],
          [k + 10, B],
          [k + 10, B + 10],
          [k, B + 10],
          [k - 10, B + 10],
          [k - 10, B],
        ];
        let it = -1,
          S = 0;
        const L = {
          1: l[`${I[0][0]},${I[0][1]}`],
          2: l[`${I[1][0]},${I[1][1]}`],
          3: l[`${I[2][0]},${I[2][1]}`],
          4: l[`${I[3][0]},${I[3][1]}`],
          5: l[`${I[4][0]},${I[4][1]}`],
          6: l[`${I[5][0]},${I[5][1]}`],
          7: l[`${I[6][0]},${I[6][1]}`],
          8: l[`${I[7][0]},${I[7][1]}`],
        };
        for (let G in L)
          (it += 1),
            L[G] != null && (S += 1),
            L[G] === void 0 && E(I[it][0], I[it][1]);
        (S < 2 || S > 3) && (c.push([k, B]), console.log("dead cell", k, B));
      }
      function E(k, B) {
        const I = [
          [k - 10, B - 10],
          [k, B - 10],
          [k + 10, B - 10],
          [k + 10, B],
          [k + 10, B + 10],
          [k, B + 10],
          [k - 10, B + 10],
          [k - 10, B],
        ];
        let it = 0;
        const S = {
          1: l[`${I[0][0]},${I[0][1]}`],
          2: l[`${I[1][0]},${I[1][1]}`],
          3: l[`${I[2][0]},${I[2][1]}`],
          4: l[`${I[3][0]},${I[3][1]}`],
          5: l[`${I[4][0]},${I[4][1]}`],
          6: l[`${I[5][0]},${I[5][1]}`],
          7: l[`${I[6][0]},${I[6][1]}`],
          8: l[`${I[7][0]},${I[7][1]}`],
        };
        for (let L in S) S[L] != null && (it += 1);
        it === 3 &&
          l[`${k},${B}`] == null &&
          k >= 0 &&
          k < t.cellCountX * Et &&
          B >= 0 &&
          B < t.cellCountY * Et &&
          (u[`${k},${B}`] = [k, B]);
      }
      function _() {
        console.log("del obj", c);
        for (let k in c)
          delete l[`${c[k][0]},${c[k][1]}`], A(c[k][0], c[k][1], "del");
        for (let k in u)
          (l[`${u[k][0]},${u[k][1]}`] = [u[k][0], u[k][1]]),
            A(u[k][0], u[k][1], "drawing");
        (u = {}), (c = []), h(t.cellCountX, t.cellCountY);
      }
      function O(k, B) {
        (n.value = Math.floor((k - o.value.getBoundingClientRect().x) / Et)),
          (s.value = Math.floor((B - o.value.getBoundingClientRect().y) / Et)),
          n.value >= d.value && n.value--,
          s.value >= m.value && s.value--;
      }
      function Y(k, B) {
        (k = Math.floor((k - o.value.getBoundingClientRect().x) / Et)),
          (B = Math.floor((B - o.value.getBoundingClientRect().y) / Et)),
          k >= t.cellCountX && k--,
          B >= t.cellCountY && B--,
          A(k * Et, B * Et, "drawing"),
          (l[`${k * Et},${B * Et}`] = [k * Et, B * Et]),
          console.log(l);
      }
      function j() {
        i.clearRect(0, 0, t.cellCountX * Et, t.cellCountY * Et),
          (l = {}),
          (r.value = 0),
          h(t.cellCountX, t.cellCountY);
      }
      function lt() {
        a = setInterval(() => M(), 500);
      }
      function ut() {
        clearInterval(a), console.log(l);
      }
      return (k, B) => (
        Q(),
        nt(
          ht,
          null,
          [
            B[3] || (B[3] = f("br", null, null, -1)),
            f("div", L1, [
              f("div", R1, [
                f("div", k1, [
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: M,
                    },
                    " шаг "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: lt,
                    },
                    " старт "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: ut,
                    },
                    " стоп "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: j,
                    },
                    " сброс "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: w,
                    },
                    " тест "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick:
                        B[0] || (B[0] = (I) => h(t.cellCountX, t.cellCountY)),
                    },
                    " drawGrid "
                  ),
                ]),
              ]),
            ]),
            f("div", I1, [
              f(
                "canvas",
                {
                  ref_key: "canvasElementRef",
                  ref: o,
                  class: "canvas-size",
                  height: `${e.cellCountY * Et}px`,
                  width: `${e.cellCountX * Et}px`,
                  onMousemove: B[1] || (B[1] = (I) => O(I.clientX, I.clientY)),
                  onClick: B[2] || (B[2] = (I) => Y(I.clientX, I.clientY)),
                },
                null,
                40,
                D1
              ),
            ]),
            f("div", P1, " Текущее поколение: " + Nt(ft(r)), 1),
          ],
          64
        )
      );
    },
  },
  B1 = { class: "row justify-content-center" },
  V1 = { class: "col text-center" },
  j1 = { class: "btn-group", role: "group" },
  H1 = { class: "container text-center" },
  F1 = ["height", "width"],
  W1 = { class: "container text-center" },
  Ct = 10,
  K1 = {
    __name: "OptionWithArray",
    props: {
      cellCountX: { type: Number, default: 40 },
      cellCountY: { type: Number, default: 40 },
    },
    setup(e) {
      const t = e;
      let n = U(0),
        s = U(0);
      const o = U(null);
      let i = null,
        r = U(0),
        a = null,
        l = U(t.cellCountX),
        c = U(t.cellCountY),
        u = U(0),
        d = 0,
        m = 0,
        h = [],
        A = [],
        w = [];
      Ke([() => t.cellCountX, () => t.cellCountY], () => {
        console.log("рисуем разметку"),
          T(t.cellCountX, t.cellCountY),
          console.log("Создаем популяцию"),
          C(t.cellCountX, t.cellCountY),
          console.log("Создаем популяцию"),
          it(),
          (r.value = 0),
          console.log("Останавливаем игру");
      }),
        fe(() => {
          (i = o.value.getContext("2d")),
            (u.value = t.cellCountX / Ct),
            T(t.cellCountX, t.cellCountY),
            C(t.cellCountX, t.cellCountY);
        });
      function T(S, L) {
        console.log("start of field marking");
        const G = S * Ct,
          z = L * Ct;
        for (let tt = 0; tt <= S; tt++) {
          let _t = tt * Ct;
          i.moveTo(_t, 0), i.lineTo(_t, z);
        }
        for (let tt = 0; tt < L; tt++) {
          let _t = tt * Ct;
          i.moveTo(0, _t), i.lineTo(G, _t);
        }
        (i.strokeStyle = "silver"), i.stroke();
      }
      function M(S, L, G) {
        G == "drawing"
          ? (console.log("drawing cell", S, L), i.fillRect(S, L, Ct, Ct))
          : G == "del" &&
            (console.log("delete cell", S, L), i.clearRect(S, L, Ct, Ct));
      }
      function C(S, L) {
        h = [];
        for (let G = 0; G < L; G++) {
          (d = G), h.push([]);
          for (let z = 0; z < S; z++) (m = z), h[d].push(0);
        }
        console.log(h, d, m, "parameters from parent", u.value);
      }
      function E() {
        let S = [
          [6, 6],
          [7, 6],
          [8, 6],
          [4, 8],
          [8, 10],
          [8, 11],
          [8, 12],
          [9, 12],
          [10, 12],
          [10, 11],
          [10, 10],
          [9, 10],
          [3, 3],
          [4, 4],
          [5, 4],
          [5, 3],
          [5, 2],
          [0, 0],
          [0, 1],
          [0, 2],
          [40, 40],
          [39, 39],
        ];
        for (let L in S) _(S[L][0], S[L][1]);
        console.log("проверим параметры", u.value, l.value, c.value);
      }
      function _(S, L) {
        L < t.cellCountX &&
          S < t.cellCountY &&
          (console.log("cell OK", S, L),
          (h[S][L] = 1),
          M(L * Ct, S * Ct, "drawing"));
      }
      function O() {
        for (let S = 0; S < h.length; S++)
          for (let L = 0; L < h[S].length; L++) h[S][L] == 1 && Y(S, L);
        r.value++, lt();
      }
      function Y(S, L) {
        let G = 0,
          z = -1;
        const tt = [
            [S - 1, L - 1],
            [S - 1, L],
            [S - 1, L + 1],
            [S, L + 1],
            [S + 1, L + 1],
            [S + 1, L],
            [S + 1, L - 1],
            [S, L - 1],
          ],
          _t = [
            S > 0 && L > 0 ? h[S - 1][L - 1] : -1,
            S > 0 ? h[S - 1][L] : -1,
            S > 0 && L < t.cellCountX - 1 ? h[S - 1][L + 1] : -1,
            S > 0 && L < t.cellCountX - 1 ? h[S][L + 1] : -1,
            S < t.cellCountY - 1 && L < t.cellCountX ? h[S + 1][L + 1] : -1,
            S < t.cellCountY - 1 ? h[S + 1][L] : -1,
            S < t.cellCountY - 1 && L > 0 ? h[S + 1][L - 1] : -1,
            L > 0 ? h[S][L - 1] : -1,
          ];
        for (let Lt in _t)
          z++, _t[Lt] == 1 ? G++ : _t[Lt] == 0 && j(tt[z][0], tt[z][1]);
        (G < 2 || G > 3) && A.push([S, L]);
      }
      function j(S, L) {
        let G = 0;
        const z = [
          S > 0 && L > 0 ? h[S - 1][L - 1] : -1,
          S > 0 ? h[S - 1][L] : -1,
          S > 0 && L < t.cellCountX - 1 ? h[S - 1][L + 1] : -1,
          S > 0 && L < t.cellCountX - 1 ? h[S][L + 1] : -1,
          S < t.cellCountY - 1 && L < l.value ? h[S + 1][L + 1] : -1,
          S < t.cellCountY - 1 ? h[S + 1][L] : -1,
          S < t.cellCountY - 1 && L > 0 ? h[S + 1][L - 1] : -1,
          L > 0 ? h[S][L - 1] : -1,
        ];
        for (let tt in z) z[tt] == 1 && G++;
        G == 3 && w.push([S, L]);
      }
      function lt() {
        for (let S in A)
          M(A[S][1] * Ct, A[S][0] * Ct, "del"),
            h[A[S][0]].splice(A[S][1], 1, 0);
        for (let S in w)
          h[w[S][0]].splice(w[S][1], 1, 1),
            M(w[S][1] * Ct, w[S][0] * Ct, "drawing");
        (w = []), (A = []), T(t.cellCountX, t.cellCountY);
      }
      function ut(S, L) {
        (n.value = Math.floor(S - o.value.getBoundingClientRect().x)),
          (s.value = Math.floor(L - o.value.getBoundingClientRect().y)),
          n.value >= l.value && n.value--,
          s.value >= c.value && s.value--;
      }
      function k(S, L) {
        (S = Math.floor((S - o.value.getBoundingClientRect().x) / Ct)),
          (L = Math.floor((L - o.value.getBoundingClientRect().y) / Ct)),
          S >= l.value && S--,
          L >= c.value && L--,
          i.fillRect(S * Ct, L * Ct, 10, 10),
          console.log(S, L),
          h[L].splice(S, 1, 1);
      }
      function B() {
        i.clearRect(0, 0, t.cellCountX * Ct, t.cellCountY * Ct),
          C(t.cellCountX, t.cellCountY),
          (r.value = 0),
          T(t.cellCountX, t.cellCountY);
      }
      function I() {
        a = setInterval(() => O(), 500);
      }
      function it() {
        clearInterval(a), console.log(h);
      }
      return (S, L) => (
        Q(),
        nt(
          ht,
          null,
          [
            L[3] || (L[3] = f("br", null, null, -1)),
            f("div", B1, [
              f("div", V1, [
                f("div", j1, [
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: O,
                    },
                    " шаг "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: I,
                    },
                    " старт "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: it,
                    },
                    " стоп "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: B,
                    },
                    " сброс "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick: E,
                    },
                    " тест "
                  ),
                  f(
                    "button",
                    {
                      class: "btn btn-outline-secondary",
                      type: "button",
                      onClick:
                        L[0] || (L[0] = (G) => T(t.cellCountX, t.cellCountY)),
                    },
                    " drawGrid "
                  ),
                ]),
              ]),
            ]),
            f("div", H1, [
              f(
                "canvas",
                {
                  ref_key: "canvasElementRef",
                  ref: o,
                  class: "canvas-size",
                  height: `${e.cellCountY * Ct}px`,
                  width: `${e.cellCountX * Ct}px`,
                  onMousemove: L[1] || (L[1] = (G) => ut(G.clientX, G.clientY)),
                  onClick: L[2] || (L[2] = (G) => k(G.clientX, G.clientY)),
                },
                null,
                40,
                F1
              ),
            ]),
            f(
              "div",
              W1,
              " Текущее поколение: " +
                Nt(ft(r)) +
                ". Размер: " +
                Nt(e.cellCountX) +
                " " +
                Nt(e.cellCountY),
              1
            ),
          ],
          64
        )
      );
    },
  },
  U1 = { class: "row justify-content-center" },
  Y1 = { class: "col-2 text-center" },
  G1 = { class: "row" },
  q1 = { class: "col mx-auto text-center" },
  z1 = {
    __name: "GameOfLife",
    setup(e) {
      const t = U(!1),
        n = U(!0);
      let s = U(40),
        o = U(40);
      function i() {
        (t.value = !0), (n.value = !1);
      }
      function r() {
        (t.value = !1), (n.value = !0);
      }
      function a() {
        (s.value = Number(prompt("количество клеток в ширину", 40))),
          (o.value = Number(prompt("количество клеток в высоту", 40)));
      }
      return (l, c) => (
        Q(),
        nt(
          ht,
          null,
          [
            rt(nn, null, {
              default: At(
                () =>
                  c[0] ||
                  (c[0] = [
                    f("b", null, '"Игра в жизнь"', -1),
                    ct(
                      " - это клеточный автомат, который моделирует эволюцию клеток на двумерной сетке. Реализована в двух вариантах - с использованием "
                    ),
                    f("b", null, "массивов", -1),
                    ct(" и "),
                    f("b", null, "объектов", -1),
                    ct(", с использованием "),
                    f("b", null, "Canvas", -1),
                    ct(
                      ". Игра была написана для практики работы с массивами и логикой, а так же для отработки навыков оптимизации производительности при работе с большим количеством данных. Изначально писался на чистом JavaScript.' "
                    ),
                  ])
              ),
              _: 1,
            }),
            f("div", U1, [
              f("div", Y1, [
                f(
                  "select",
                  ec({ class: "btn btn-outline-secondary" }, r),
                  [
                    f("option", { onClick: r }, "вариант с массивом"),
                    f("option", { onClick: i }, "вариант с объектом"),
                  ],
                  16
                ),
              ]),
              f("div", { class: "col-2 text-center" }, [
                f(
                  "button",
                  {
                    class: "btn btn-outline-secondary",
                    type: "button",
                    onClick: a,
                  },
                  " размер поля "
                ),
              ]),
            ]),
            f("div", G1, [
              f("div", q1, [
                t.value
                  ? (Q(),
                    Pn(
                      M1,
                      { key: 0, "cell-count-x": ft(s), "cell-count-y": ft(o) },
                      null,
                      8,
                      ["cell-count-x", "cell-count-y"]
                    ))
                  : Kt("", !0),
                n.value
                  ? (Q(),
                    Pn(
                      K1,
                      { key: 1, "cell-count-x": ft(s), "cell-count-y": ft(o) },
                      null,
                      8,
                      ["cell-count-x", "cell-count-y"]
                    ))
                  : Kt("", !0),
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  X1 = { class: "row" },
  Q1 = { class: "col-4 mx-auto text-center" },
  J1 = ["value"],
  Z1 = { class: "col-4 mx-auto text-center" },
  t0 = ["value"],
  e0 = { class: "row" },
  n0 = { class: "col-4 mx-auto text-center" },
  s0 = { class: "container" },
  o0 = {
    __name: "PageDogs",
    setup(e) {
      const t = bu(),
        n = Kv(),
        s = mn([]),
        o = U([]),
        i = U(null),
        r = U(null);
      Ke(r, (c) => {
        console.log("выбрана порода собак", n),
          t.push({ path: n.path, query: { breed: c, count: i.value } });
      }),
        Ke(i, (c) => {
          r.value &&
            t.push({ path: n.path, query: { breed: r.value, count: c } });
        }),
        mv((c, u) => {
          console.log("параметры маршрута изменились", c.query, u.query),
            (u.query.breed !== c.query.breed ||
              u.query.count !== c.query.count) &&
              l(c.query.breed, c.query.count);
        }),
        fe(() => {
          console.log("текст любой"), a();
        });
      async function a() {
        let u = await (
          await fetch("https://dog.ceo/api/breeds/list/all")
        ).json();
        (o.value = Object.keys(u.message)),
          n.query.count && n.query.breed
            ? ((r.value = n.query.breed),
              (i.value = n.query.count),
              l(n.query.breed, n.query.count))
            : ((r.value = o.value[0]), (i.value = 10));
      }
      async function l(c, u) {
        let m = await (
          await fetch(`https://dog.ceo/api/breed/${c}/images/random/${u}`)
        ).json();
        s.splice(0, s.length, ...m.message);
      }
      return (c, u) => {
        const d = Dn("RouterLink"),
          m = Dn("RouterView");
        return (
          Q(),
          nt(
            ht,
            null,
            [
              rt(nn, null, {
                default: At(
                  () =>
                    u[2] ||
                    (u[2] = [
                      f("b", null, "Работа с API", -1),
                      ct(
                        " и отображение данных. На странице отображаются фотографии собак, полученные с помощью API. Реализована пагинация для удобства просмотра большого количества фотографий. Варианты отображения данных - карусель и галерея. Компонент карусели был написан с нуля, а галерея была реализована с использованием "
                      ),
                      f("b", null, "Bootstrap", -1),
                      ct(
                        ". Реализована возможность фильтрации фотографий по породам собак и количесвтву отображаемых фотографий. "
                      ),
                    ])
                ),
                _: 1,
              }),
              f("div", X1, [
                u[4] ||
                  (u[4] = f(
                    "p",
                    { class: "fs-4 mx-auto text-center" },
                    " Выберите породу собак и количество изображений: ",
                    -1
                  )),
                f("div", Q1, [
                  Qs(
                    f(
                      "select",
                      {
                        class: "form-select",
                        "onUpdate:modelValue":
                          u[0] || (u[0] = (h) => (r.value = h)),
                        "aria-label": "Пример выбора по умолчанию",
                      },
                      [
                        u[3] ||
                          (u[3] = f(
                            "option",
                            { selected: "", disabled: "", value: "" },
                            "Откройте это меню выбора",
                            -1
                          )),
                        (Q(!0),
                        nt(
                          ht,
                          null,
                          ps(
                            o.value,
                            (h) => (
                              Q(), nt("option", { value: h }, Nt(h), 9, J1)
                            )
                          ),
                          256
                        )),
                      ],
                      512
                    ),
                    [[gi, r.value]]
                  ),
                ]),
                f("div", Z1, [
                  Qs(
                    f(
                      "select",
                      {
                        class: "form-select",
                        "onUpdate:modelValue":
                          u[1] || (u[1] = (h) => (i.value = h)),
                        "aria-label": "Пример выбора по умолчанию",
                      },
                      [
                        (Q(),
                        nt(
                          ht,
                          null,
                          ps(25, (h) =>
                            f("option", { value: h }, Nt(h), 9, t0)
                          ),
                          64
                        )),
                      ],
                      512
                    ),
                    [[gi, i.value]]
                  ),
                ]),
              ]),
              u[7] || (u[7] = f("br", null, null, -1)),
              f("div", e0, [
                f("div", n0, [
                  rt(
                    d,
                    {
                      to: { path: "/page-dogs/carusel", query: ft(n).query },
                      class: "btn btn-outline-secondary mx-2",
                    },
                    {
                      default: At(() => u[5] || (u[5] = [ct("Карусель")])),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                  rt(
                    d,
                    {
                      to: { path: "/page-dogs/gallery", query: ft(n).query },
                      class: "btn btn-outline-secondary mx-2",
                    },
                    {
                      default: At(() => u[6] || (u[6] = [ct("Галерея")])),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                ]),
              ]),
              u[8] || (u[8] = f("br", null, null, -1)),
              f("div", s0, [
                rt(m, null, {
                  default: At(({ Component: h }) => [
                    (Q(),
                    Pn(yf(h), { currentDogsLinks: s }, null, 8, [
                      "currentDogsLinks",
                    ])),
                  ]),
                  _: 1,
                }),
              ]),
            ],
            64
          )
        );
      };
    },
  },
  i0 = { class: "row" },
  r0 = { class: "col-4 mx-auto text-center" },
  l0 = {
    id: "carouselExampleAutoplaying",
    class: "carousel carousel-dark slide",
    "data-bs-ride": "false",
  },
  a0 = { class: "carousel-inner" },
  c0 = ["src"],
  u0 = {
    __name: "LuxCarusel",
    props: { currentDogsLinks: { type: Array, default: () => [] } },
    setup(e) {
      return (
        $a(() => {
          document.querySelector(".carousel-item") &&
            (document.querySelector(".carousel-item").className += " active");
        }),
        fe(() => {
          document.querySelector(".carousel-item") &&
            (document.querySelector(".carousel-item").className += " active");
        }),
        (t, n) => (
          Q(),
          nt("div", i0, [
            f("div", r0, [
              f("div", l0, [
                f("div", a0, [
                  (Q(!0),
                  nt(
                    ht,
                    null,
                    ps(
                      e.currentDogsLinks,
                      (s) => (
                        Q(),
                        nt("div", { key: s, class: "carousel-item" }, [
                          f(
                            "img",
                            {
                              src: s,
                              class: "d-block w-60 center",
                              alt: "...",
                              style: { height: "300px", width: "340px" },
                            },
                            null,
                            8,
                            c0
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
                f(
                  "button",
                  {
                    class:
                      "carousel-control-prev btn btn-dark btn-outline-dark",
                    type: "button",
                    "data-bs-target": "#carouselExampleAutoplaying",
                    "data-bs-slide": "prev",
                    onKeyup:
                      n[0] ||
                      (n[0] = Kr(
                        (...s) => t.buttonEvent && t.buttonEvent(...s),
                        ["left"]
                      )),
                  },
                  n[2] ||
                    (n[2] = [
                      f(
                        "span",
                        {
                          class: "carousel-control-prev-icon",
                          "aria-hidden": "true",
                        },
                        null,
                        -1
                      ),
                      f("span", { class: "visually-hidden" }, "Предыдущий", -1),
                    ]),
                  32
                ),
                f(
                  "button",
                  {
                    class: "carousel-control-next btn btn-outline-dark",
                    type: "button",
                    "data-bs-target": "#carouselExampleAutoplaying",
                    "data-bs-slide": "next",
                    onKeyup:
                      n[1] ||
                      (n[1] = Kr(
                        (...s) => t.buttonEvent && t.buttonEvent(...s),
                        ["right"]
                      )),
                  },
                  n[3] ||
                    (n[3] = [
                      f(
                        "span",
                        {
                          class: "carousel-control-next-icon",
                          "aria-hidden": "true",
                        },
                        null,
                        -1
                      ),
                      f("span", { class: "visually-hidden" }, "Следующий", -1),
                    ]),
                  32
                ),
              ]),
            ]),
          ])
        )
      );
    },
  },
  f0 = { class: "modal-dialog" },
  d0 = { class: "modal-content" },
  h0 = { class: "modal-header" },
  p0 = { class: "modal-body" },
  g0 = { key: 0 },
  m0 = ["src"],
  _0 = {
    __name: "ModalWindow",
    props: { currentDogsLinks: { type: Array, default: () => [] } },
    setup(e, { expose: t }) {
      const n = U(null),
        s = U(""),
        o = U(null);
      let i = null;
      fe(() => {
        (i = new qe(n.value)), console.log(i);
      });
      function r(l, c) {
        (s.value = l),
          (o.value = c),
          i.show(),
          console.log("Open modal for", l, c);
      }
      t({ openModal: r });
      function a() {
        console.log(
          "test button clicked, current image index:",
          o.value,
          o.value + 1
        );
      }
      return (l, c) => (
        Q(),
        nt(
          "div",
          {
            id: "exampleModal",
            ref_key: "simpleModal",
            ref: n,
            class: "modal fade",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          [
            f("div", f0, [
              f("div", d0, [
                f("div", h0, [ka(l.$slots, "header")]),
                f("div", p0, [
                  c[0] || (c[0] = f("div", null, " тело ", -1)),
                  s.value
                    ? (Q(),
                      nt("div", g0, [
                        f(
                          "img",
                          {
                            src: s.value,
                            class: "rounded float-start",
                            alt: "Большое изображение",
                          },
                          null,
                          8,
                          m0
                        ),
                      ]))
                    : Kt("", !0),
                ]),
                f("div", { class: "modal-footer" }, [
                  c[1] || (c[1] = ct(" ноги ")),
                  f(
                    "button",
                    { type: "button", class: "btn btn-secondary", onClick: a },
                    "NEXT IMG"
                  ),
                ]),
              ]),
            ]),
          ],
          512
        )
      );
    },
  },
  v0 = { class: "row" },
  b0 = { class: "col" },
  E0 = { class: "album py-5 bg-body-tertiary" },
  y0 = { class: "row row-cols-1 row-cols-sm-3 row-cols-md-5 g-3" },
  w0 = { class: "card shadow-sm" },
  A0 = ["src", "index", "onClick"],
  C0 = { class: "row" },
  T0 = { class: "col-md-4" },
  O0 = {
    __name: "LuxGallery",
    props: { currentDogsLinks: { type: Array, default: () => [] } },
    setup(e) {
      const t = U(null);
      function n(s, o) {
        console.log("клик по картинке", s, o), t.value.openModal(s, o);
      }
      return (s, o) => (
        Q(),
        nt("div", v0, [
          f("div", b0, [
            f("div", E0, [
              f("div", y0, [
                (Q(!0),
                nt(
                  ht,
                  null,
                  ps(
                    e.currentDogsLinks,
                    (i, r) => (
                      Q(),
                      nt("div", { class: "col", key: r }, [
                        f("div", w0, [
                          f(
                            "img",
                            {
                              src: i,
                              class: "rounded float-start",
                              alt: "...",
                              index: r,
                              onClick: (a) => n(i, r),
                            },
                            null,
                            8,
                            A0
                          ),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ]),
          ]),
          f("div", C0, [
            f("div", T0, [
              rt(
                _0,
                { ref_key: "myModal", ref: t },
                {
                  header: At(
                    () =>
                      o[0] ||
                      (o[0] = [
                        ct(" 12345 "),
                        f(
                          "h1",
                          {
                            id: "exampleModalLabel",
                            class: "modal-title fs-5",
                          },
                          " диалоговое окно ",
                          -1
                        ),
                        f(
                          "button",
                          {
                            type: "button",
                            class: "btn-close",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Закрыть",
                          },
                          null,
                          -1
                        ),
                      ])
                  ),
                  _: 1,
                },
                512
              ),
            ]),
          ]),
        ])
      );
    },
  },
  S0 = { class: "row" },
  x0 = { class: "col-4 mx-auto text-center" },
  $0 = { class: "container" },
  N0 = {
    __name: "ProgressBar",
    setup(e) {
      return (t, n) => {
        const s = Dn("router-link"),
          o = Dn("router-view");
        return (
          Q(),
          nt(
            ht,
            null,
            [
              rt(nn, null, {
                default: At(
                  () =>
                    n[0] ||
                    (n[0] = [
                      ct(
                        " Различные варианты реализации прогресс бара. В проекте представлены круговой, линейный и Dashboard. "
                      ),
                    ])
                ),
                _: 1,
              }),
              f("div", S0, [
                f("div", x0, [
                  rt(
                    s,
                    {
                      to: "/progress-bar/circle",
                      class: "btn btn-outline-secondary mx-2",
                    },
                    {
                      default: At(() => n[1] || (n[1] = [ct("Круговой")])),
                      _: 1,
                    }
                  ),
                  rt(
                    s,
                    {
                      to: "/progress-bar/dash-board",
                      class: "btn btn-outline-secondary mx-2",
                    },
                    {
                      default: At(() => n[2] || (n[2] = [ct("Dashboard")])),
                      _: 1,
                    }
                  ),
                  rt(
                    s,
                    {
                      to: "/progress-bar/line-board",
                      class: "btn btn-outline-secondary mx-2",
                    },
                    {
                      default: At(() => n[3] || (n[3] = [ct("Линейный")])),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              f("div", $0, [rt(o)]),
            ],
            64
          )
        );
      };
    },
  },
  L0 = { class: "row" },
  R0 = { class: "col text-center" },
  k0 = { class: "row" },
  I0 = { class: "col m-2 text-center" },
  D0 = { class: "row" },
  P0 = { class: "col-2 mx-auto text-center" },
  M0 = { class: "wiew-circle-svg" },
  B0 = {
    class: "loading-circumference",
    width: "236",
    height: "236",
    viewBox: "-29.5 -29.5 295 295",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    style: { transform: "rotate(-90deg)" },
  },
  V0 = { class: "info-circle-position" },
  j0 = { key: 0 },
  H0 = { key: 1 },
  F0 = {
    class: "js-load-complete dots-circle-complette",
    y: "0px",
    style: { "enable-background": "new 0 0 512.003 512.003" },
    "xml:space": "preserve",
    x: "0px",
    viewBox: "-400 100 1212.003 512.003",
  },
  W0 = { key: 2, class: "wiew-circle-error dots-circle-complette" },
  K0 = { key: 3, class: "wiew-circle-warning dots-circle-complette" },
  U0 = {
    __name: "CircumFerence",
    setup(e) {
      let t = 0,
        n = !1,
        s = 0,
        o = 0,
        i = U(null),
        r = U(0),
        a = U(0),
        l = !1,
        c = U(678),
        u = 0,
        d = null,
        m = "#00cc00";
      fe(() => {
        (t = 2 * 3.14 * Number(i.value.getAttribute("r"))),
          (u = Number(i.value.getAttribute("r"))),
          console.log(t, u);
      });
      function h() {
        o == 0 && ((m = "rgb(255, 0, 0)"), (i.value.style.stroke = m)),
          (o = 1),
          s < 100 && n === !1
            ? ((s += 0.1),
              (c.value = t * ((100 - s) / 100)),
              (r.value = Math.round(s)),
              A(s),
              console.log("info %", c.value, s))
            : M(),
          console.log();
      }
      function A(_) {
        let O = _;
        console.log("старт рисования"),
          Math.round(O) >= 20 && O < 25
            ? (console.log("сработало"),
              (m = "#cb0a0a"),
              i.value.classList.add("dots-one"),
              (i.value.style.stroke = "rgb(240, 115, 12)"),
              (m = "rgb(240, 115, 12)"))
            : Math.round(O) >= 45 && O < 50
            ? ((i.value.style.stroke = "rgb(240, 115, 12)"),
              i.value.classList.remove("dots-one"),
              i.value.classList.add("dots-two"),
              (i.value.style.stroke = "rgb(233, 161, 17)"),
              (m = "rgb(233, 161, 17)"))
            : Math.round(O) >= 70 && O < 75
            ? ((i.value.style.stroke = "rgb(233, 161, 17)"),
              i.value.classList.remove("dots-two"),
              i.value.classList.add("dots-three"),
              (i.value.style.stroke = "rgb(17, 150, 233)"),
              (m = "rgb(17, 150, 233)"))
            : Math.round(O) >= 85 && O < 100
            ? ((i.value.style.stroke = "rgb(17, 150, 233)"),
              i.value.classList.remove("dots-three"),
              i.value.classList.add("dots-four"),
              (i.value.style.stroke = "rgb(17, 42, 233)"),
              (m = "rgb(17, 42, 233)"))
            : Math.round(O) == 100 &&
              ((i.value.style.stroke = "rgb(17, 42, 233)"),
              i.value.classList.remove("dots-four"),
              i.value.classList.add("dots-five"),
              (i.value.style.stroke = "rgb(28, 233, 17)"),
              (m = "rgb(28, 233, 17)"),
              (a.value = 1)),
          (i.value.style.stroke = m),
          (i.value.style.strokeDashoffset = `${c.value}`),
          console.log(t, O, c.value);
      }
      function w() {
        (i.value.style.stroke = "#e0e0e0"),
          (m = "rgb(255, 0, 0)"),
          (r.value = 0),
          (o = 1),
          (s = 0),
          (r.value = 0),
          (n = !1),
          (i.value.classList = "circle-bar-size"),
          (a.value = 0);
      }
      function T() {
        l === !1 &&
          ((l = !0),
          (d = setInterval(() => {
            h();
          }, 10)));
      }
      function M() {
        l === !0 && ((l = !1), setTimeout(clearInterval(d)));
      }
      function C() {
        M(),
          setTimeout(clearInterval(d)),
          r.value !== "error" &&
            ((a.value = 3),
            (r.value = "warning"),
            (n = !0),
            (i.value.classList = "circle-bar-size dots-warning"),
            setTimeout(() => {
              i.value.style.stroke = "rgb(233, 175, 17)";
            }, 2e3));
      }
      function E() {
        M(),
          setTimeout(clearInterval(d)),
          r.value !== "warning" &&
            ((a.value = 2),
            (r.value = "error"),
            (n = !0),
            i.value.classList.add("dots-error"),
            setTimeout(() => {
              i.value.style.stroke = "rgb(233, 17, 17)";
            }, 3e3)),
          console.log(i.value);
      }
      return (_, O) => (
        Q(),
        nt(
          ht,
          null,
          [
            O[11] || (O[11] = f("br", null, null, -1)),
            f("div", L0, [
              f("div", R0, [
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: O[0] || (O[0] = (Y) => T()),
                  },
                  " start "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: O[1] || (O[1] = (Y) => M()),
                  },
                  " stop "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: O[2] || (O[2] = (Y) => h()),
                  },
                  " step "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: O[3] || (O[3] = (Y) => w()),
                  },
                  " reset "
                ),
              ]),
              O[6] || (O[6] = f("br", null, null, -1)),
              f("div", k0, [
                f("div", I0, [
                  f(
                    "button",
                    {
                      type: "button",
                      class: "btn btn-outline-secondary m-1",
                      onClick: O[4] || (O[4] = (Y) => C()),
                    },
                    " warning "
                  ),
                  f(
                    "button",
                    {
                      type: "button",
                      class: "btn btn-outline-secondary m-1",
                      onClick: O[5] || (O[5] = (Y) => E()),
                    },
                    " error "
                  ),
                ]),
              ]),
            ]),
            f("div", D0, [
              f("div", P0, [
                f("div", M0, [
                  f("div", null, [
                    (Q(),
                    nt("svg", B0, [
                      O[7] ||
                        (O[7] = f(
                          "circle",
                          {
                            class: "circle-bar-size js-load-bar",
                            r: "127",
                            cx: "118",
                            cy: "118",
                            fill: "transparent",
                            stroke: "#e0e0e0",
                            "stroke-width": "17",
                          },
                          null,
                          -1
                        )),
                      f(
                        "circle",
                        {
                          ref_key: "circleBar",
                          ref: i,
                          class: "circle-bar-size",
                          r: "127",
                          cx: "118",
                          cy: "118",
                          fill: "transparent",
                          stroke: "rgb(224, 224, 224)",
                          "stroke-width": "17",
                          "stroke-linecap": "round",
                          "stroke-dasharray": "800",
                        },
                        null,
                        512
                      ),
                    ])),
                  ]),
                  f("div", V0, [
                    ft(a) == 0
                      ? (Q(), nt("div", j0, Nt(ft(r)), 1))
                      : Kt("", !0),
                    ft(a) == 1
                      ? (Q(),
                        nt("div", H0, [
                          (Q(),
                          nt(
                            "svg",
                            F0,
                            O[8] ||
                              (O[8] = [
                                f(
                                  "g",
                                  null,
                                  [
                                    f("g", null, [
                                      f("path", {
                                        style: { fill: "rgb(28, 233, 17)" },
                                        d: "M507.291,57.14c-5.605-4.851-14.094-4.204-18.998,1.455L174.383,424.81l-151.39-151.39 c-5.255-5.255-13.797-5.255-19.052,0c-5.255,5.255-5.255,13.797,0,19.052l161.684,161.684c2.533,2.506,5.982,3.934,9.539,3.934 c0.162,0,0.35,0,0.539,0.027c3.746-0.162,7.276-1.886,9.701-4.716L508.773,76.138C513.597,70.479,512.95,61.99,507.291,57.14z",
                                      }),
                                    ]),
                                  ],
                                  -1
                                ),
                              ])
                          )),
                        ]))
                      : Kt("", !0),
                    ft(a) == 2
                      ? (Q(),
                        nt(
                          "div",
                          W0,
                          O[9] ||
                            (O[9] = [
                              f(
                                "svg",
                                {
                                  width: "48",
                                  height: "48",
                                  viewBox: "0 0 16 16",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                [
                                  f("path", {
                                    "fill-rule": "evenodd",
                                    fill: "rgb(233, 17, 17)",
                                    "clip-rule": "evenodd",
                                    d: "M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z",
                                  }),
                                ],
                                -1
                              ),
                            ])
                        ))
                      : Kt("", !0),
                    ft(a) == 3
                      ? (Q(),
                        nt(
                          "div",
                          K0,
                          O[10] ||
                            (O[10] = [
                              f(
                                "svg",
                                {
                                  fill: "rgb(233, 175, 17)",
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "0 0 36 36",
                                  version: "1.1",
                                  preserveAspectRatio: "xMidYMid meet",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                },
                                [
                                  f("title", null, "exclamation-circle-solid"),
                                  f("path", {
                                    class: "clr-i-solid clr-i-solid-path-1",
                                    d: "M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z",
                                  }),
                                  f("rect", {
                                    x: "0",
                                    y: "0",
                                    width: "36",
                                    height: "36",
                                    "fill-opacity": "0",
                                  }),
                                ],
                                -1
                              ),
                            ])
                        ))
                      : Kt("", !0),
                  ]),
                ]),
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  Y0 = { class: "row" },
  G0 = { class: "col text-center" },
  q0 = { class: "row" },
  z0 = { class: "col m-2 text-center" },
  X0 = { class: "row" },
  Q0 = { class: "col-2 mx-auto text-center" },
  J0 = { class: "wiew-dash-svg" },
  Z0 = {
    class: "loading-circumference",
    width: "236",
    height: "236",
    viewBox: "-29.5 -29.5 295 295",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    style: { transform: "rotate(0deg)" },
  },
  tE = { class: "info-dash-position", ref: "wiewStatusBar" },
  eE = { key: 0 },
  nE = { key: 1 },
  sE = {
    class: "js-load-complete dots-complette",
    y: "0px",
    style: { "enable-background": "new 0 0 512.003 512.003" },
    "xml:space": "preserve",
    x: "0px",
    viewBox: "-400 100 1212.003 512.003",
  },
  oE = { key: 2, class: "wiew-dash-error dots-complette" },
  iE = { key: 3, class: "wiew-dash-warning dots-complette" },
  rE = {
    __name: "DashBoard",
    setup(e) {
      let t = 0,
        n = !1,
        s = 0,
        o = 0,
        i = 800,
        r = 0,
        a = U(null),
        l = U(0),
        c = U(0),
        u = !1,
        d = U(678),
        m = 0,
        h = null,
        A = "#00cc00";
      fe(() => {
        (t = 2 * 3.14 * Number(a.value.getAttribute("r"))),
          (m = Number(a.value.getAttribute("r"))),
          console.log(t, m);
      });
      function w() {
        r == 0 && ((A = "rgb(255, 0, 0)"), (a.value.style.stroke = A)),
          (r = 1),
          s < 100 && n === !1
            ? ((s += 0.1),
              (o = 0 + Math.round((600 * s) / 100)),
              (i = 800 - Math.round((600 * s) / 100)),
              (d.value = t * ((100 - s) / 100)),
              (l.value = Math.round(s)),
              T(s),
              console.log(
                "info %",
                d.value,
                s,
                "тут мы смотрим состояние значений",
                o,
                i
              ))
            : E(),
          console.log();
      }
      function T(Y) {
        let j = Y;
        console.log("старт рисования"),
          Math.round(j) >= 20 && j < 25
            ? (console.log("сработало"),
              (A = "#cb0a0a"),
              a.value.classList.add("dots-one"),
              (a.value.style.stroke = "rgb(240, 115, 12)"),
              (A = "rgb(240, 115, 12)"))
            : Math.round(j) >= 45 && j < 50
            ? ((a.value.style.stroke = "rgb(240, 115, 12)"),
              a.value.classList.remove("dots-one"),
              a.value.classList.add("dots-two"),
              (a.value.style.stroke = "rgb(233, 161, 17)"),
              (A = "rgb(233, 161, 17)"))
            : Math.round(j) >= 70 && j < 75
            ? ((a.value.style.stroke = "rgb(233, 161, 17)"),
              a.value.classList.remove("dots-two"),
              a.value.classList.add("dots-three"),
              (a.value.style.stroke = "rgb(17, 150, 233)"),
              (A = "rgb(17, 150, 233)"))
            : Math.round(j) >= 85 && j < 100
            ? ((a.value.style.stroke = "rgb(17, 150, 233)"),
              a.value.classList.remove("dots-three"),
              a.value.classList.add("dots-four"),
              (a.value.style.stroke = "rgb(17, 42, 233)"),
              (A = "rgb(17, 42, 233)"))
            : Math.round(j) == 100 &&
              ((a.value.style.stroke = "rgb(17, 42, 233)"),
              a.value.classList.remove("dots-four"),
              a.value.classList.add("dots-five"),
              (a.value.style.stroke = "rgb(28, 233, 17)"),
              (A = "rgb(28, 233, 17)"),
              (c.value = 1)),
          (a.value.style.stroke = A),
          a.value.setAttribute("stroke-dasharray", `${o} ${i}`),
          console.log(t, j, d.value);
      }
      function M() {
        (a.value.style.stroke = "#e0e0e0"),
          (A = "rgb(255, 0, 0)"),
          (l.value = 0),
          (r = 1),
          (s = 0),
          (l.value = 0),
          (n = !1),
          (a.value.classList = "circle-bar-size"),
          (c.value = 0);
      }
      function C() {
        u == !1 &&
          ((u = !0),
          (h = setInterval(() => {
            w();
          }, 10)));
      }
      function E() {
        u === !0 && ((u = !1), setTimeout(clearInterval(h)));
      }
      function _() {
        E(),
          setTimeout(clearInterval(h)),
          l.value != "error" &&
            l.value != "warning" &&
            ((c.value = 3),
            (l.value = "warning"),
            (n = !0),
            a.value.classList.remove("dots-three"),
            a.value.classList.add("dots-warning"),
            setTimeout(() => {
              a.value.style.stroke = "rgb(233, 175, 17)";
            }, 3e3));
      }
      function O() {
        E(),
          setTimeout(clearInterval(h)),
          l.value != "warning" &&
            l.value != "error" &&
            ((c.value = 2),
            (l.value = "error"),
            (n = !0),
            a.value.classList.add("dots-error"),
            setTimeout(() => {
              a.value.style.stroke = "rgb(233, 17, 17)";
            }, 3e3));
      }
      return (Y, j) => (
        Q(),
        nt(
          ht,
          null,
          [
            j[11] || (j[11] = f("br", null, null, -1)),
            f("div", Y0, [
              f("div", G0, [
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: j[0] || (j[0] = (lt) => C()),
                  },
                  " start "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: j[1] || (j[1] = (lt) => E()),
                  },
                  " stop "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: j[2] || (j[2] = (lt) => w()),
                  },
                  " step "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: j[3] || (j[3] = (lt) => M()),
                  },
                  " reset "
                ),
              ]),
              j[6] || (j[6] = f("br", null, null, -1)),
              f("div", q0, [
                f("div", z0, [
                  f(
                    "button",
                    {
                      type: "button",
                      class: "btn btn-outline-secondary m-1",
                      onClick: j[4] || (j[4] = (lt) => _()),
                    },
                    " warning "
                  ),
                  f(
                    "button",
                    {
                      type: "button",
                      class: "btn btn-outline-secondary m-1",
                      onClick: j[5] || (j[5] = (lt) => O()),
                    },
                    " error "
                  ),
                ]),
              ]),
            ]),
            f("div", X0, [
              f("div", Q0, [
                f("div", J0, [
                  f("div", null, [
                    (Q(),
                    nt("svg", Z0, [
                      j[7] ||
                        (j[7] = f(
                          "circle",
                          {
                            class: "circle-bar-size js-load-bar",
                            r: "127",
                            cx: "118",
                            cy: "118",
                            fill: "transparent",
                            stroke: "#e0e0e0",
                            "stroke-width": "17",
                            "stroke-linecap": "round",
                            "stroke-dasharray": "580 200",
                            "stroke-dashoffset": "480",
                          },
                          null,
                          -1
                        )),
                      f(
                        "circle",
                        {
                          ref_key: "circleBar",
                          ref: a,
                          class: "circle-bar-size",
                          r: "127",
                          cx: "118",
                          cy: "118",
                          fill: "transparent",
                          stroke: "#e0e0e0",
                          "stroke-width": "17",
                          "stroke-linecap": "round",
                          "stroke-dasharray": "0 800",
                          "stroke-dashoffset": "500",
                        },
                        null,
                        512
                      ),
                    ])),
                  ]),
                  f(
                    "div",
                    tE,
                    [
                      ft(c) == 0
                        ? (Q(), nt("div", eE, Nt(ft(l)), 1))
                        : Kt("", !0),
                      ft(c) == 1
                        ? (Q(),
                          nt("div", nE, [
                            (Q(),
                            nt(
                              "svg",
                              sE,
                              j[8] ||
                                (j[8] = [
                                  f(
                                    "g",
                                    null,
                                    [
                                      f("g", null, [
                                        f("path", {
                                          style: { fill: "rgb(28, 233, 17)" },
                                          d: "M507.291,57.14c-5.605-4.851-14.094-4.204-18.998,1.455L174.383,424.81l-151.39-151.39 c-5.255-5.255-13.797-5.255-19.052,0c-5.255,5.255-5.255,13.797,0,19.052l161.684,161.684c2.533,2.506,5.982,3.934,9.539,3.934 c0.162,0,0.35,0,0.539,0.027c3.746-0.162,7.276-1.886,9.701-4.716L508.773,76.138C513.597,70.479,512.95,61.99,507.291,57.14z",
                                        }),
                                      ]),
                                    ],
                                    -1
                                  ),
                                ])
                            )),
                          ]))
                        : Kt("", !0),
                      ft(c) == 2
                        ? (Q(),
                          nt(
                            "div",
                            oE,
                            j[9] ||
                              (j[9] = [
                                f(
                                  "svg",
                                  {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 16 16",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  [
                                    f("path", {
                                      "fill-rule": "evenodd",
                                      fill: "rgb(233, 17, 17)",
                                      "clip-rule": "evenodd",
                                      d: "M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z",
                                    }),
                                  ],
                                  -1
                                ),
                              ])
                          ))
                        : Kt("", !0),
                      ft(c) == 3
                        ? (Q(),
                          nt(
                            "div",
                            iE,
                            j[10] ||
                              (j[10] = [
                                f(
                                  "svg",
                                  {
                                    fill: "rgb(233, 175, 17)",
                                    width: "60px",
                                    height: "60px",
                                    viewBox: "0 0 36 36",
                                  },
                                  [
                                    f(
                                      "title",
                                      null,
                                      "exclamation-circle-solid"
                                    ),
                                    f("path", {
                                      class: "clr-i-solid clr-i-solid-path-1",
                                      d: "M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z",
                                    }),
                                    f("rect", {
                                      x: "0",
                                      y: "0",
                                      width: "36",
                                      height: "36",
                                      "fill-opacity": "0",
                                    }),
                                  ],
                                  -1
                                ),
                              ])
                          ))
                        : Kt("", !0),
                    ],
                    512
                  ),
                ]),
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  lE = { class: "row" },
  aE = { class: "col text-center" },
  cE = { class: "row" },
  uE = { class: "col m-2 text-center" },
  fE = { class: "row" },
  dE = { class: "col-2 mx-auto text-center" },
  hE = { class: "wiew-line-svg" },
  pE = {
    class: "loading-circumference",
    height: "90",
    width: "290",
    viewBox: "-29.5 -29.5 295 295",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    style: { transform: "rotate(0deg)" },
  },
  gE = { class: "information-position" },
  mE = { key: 0 },
  _E = { key: 1 },
  vE = {
    class: "js-load-complete dots-line-complette wiew-line-complete",
    y: "0px",
    style: { "enable-background": "new 0 0 512.003 512.003" },
    "xml:space": "preserve",
    x: "0px",
    viewBox: "-400 100 1212.003 512.003",
  },
  bE = { key: 2, class: "wiew-line-error dots-line -complette" },
  EE = { key: 3, class: "wiew-line-warning dots-line -complette" },
  yE = {
    __name: "LineBoard",
    setup(e) {
      let t = 0,
        n = !1,
        s = 0,
        o = 0,
        i = U(null),
        r = U(0),
        a = U(0),
        l = !1,
        c = U(678),
        u = null,
        d = "#00cc00";
      fe(() => {
        console.log(t);
      });
      function m() {
        o == 0 && ((d = "rgb(255, 0, 0)"), (i.value.style.stroke = d)),
          (o = 1),
          s < 100 && n === !1
            ? ((s += 0.1),
              (c.value = 600 * ((100 - s) / 100)),
              (r.value = Math.round(s)),
              h(s),
              console.log("info %", c.value, s))
            : T(),
          console.log();
      }
      function h(E) {
        let _ = E;
        console.log("старт рисования"),
          Math.round(_) >= 20 && _ < 25
            ? (console.log("сработало"),
              (d = "#cb0a0a"),
              i.value.classList.add("dots-one"),
              (i.value.style.stroke = "rgb(240, 115, 12)"),
              (d = "rgb(240, 115, 12)"))
            : Math.round(_) >= 45 && _ < 50
            ? ((i.value.style.stroke = "rgb(240, 115, 12)"),
              i.value.classList.remove("dots-one"),
              i.value.classList.add("dots-two"),
              (i.value.style.stroke = "rgb(233, 161, 17)"),
              (d = "rgb(233, 161, 17)"))
            : Math.round(_) >= 70 && _ < 75
            ? ((i.value.style.stroke = "rgb(233, 161, 17)"),
              i.value.classList.remove("dots-two"),
              i.value.classList.add("dots-three"),
              (i.value.style.stroke = "rgb(17, 150, 233)"),
              (d = "rgb(17, 150, 233)"))
            : Math.round(_) >= 85 && _ < 100
            ? ((i.value.style.stroke = "rgb(17, 150, 233)"),
              i.value.classList.remove("dots-three"),
              i.value.classList.add("dots-four"),
              (i.value.style.stroke = "rgb(17, 42, 233)"),
              (d = "rgb(17, 42, 233)"))
            : Math.round(_) == 100 &&
              ((i.value.style.stroke = "rgb(17, 42, 233)"),
              i.value.classList.remove("dots-four"),
              i.value.classList.add("dots-five"),
              (i.value.style.stroke = "rgb(28, 233, 17)"),
              (d = "rgb(28, 233, 17)"),
              (a.value = 1)),
          (i.value.style.stroke = d),
          i.value.setAttribute("x2", (600 * _) / 100),
          console.log(t, _, c.value);
      }
      function A() {
        (i.value.style.stroke = "#e0e0e0"),
          (d = "rgb(255, 0, 0)"),
          (r.value = 0),
          (o = 1),
          (s = 0),
          (r.value = 0),
          (n = !1),
          (i.value.classList = "circle-bar-size"),
          (a.value = 0);
      }
      function w() {
        l == !1 &&
          ((l = !0),
          (u = setInterval(() => {
            m();
          }, 10)));
      }
      function T() {
        l === !0 && ((l = !1), setTimeout(clearInterval(u)));
      }
      function M() {
        T(),
          setTimeout(clearInterval(u)),
          r.value != "error" &&
            ((a.value = 3),
            (r.value = "warning"),
            (n = !0),
            i.value.classList.remove("dots-three"),
            i.value.classList.add("dots-warning"),
            setTimeout(() => {
              i.value.style.stroke = "rgb(233, 175, 17)";
            }, 3e3));
      }
      function C() {
        T(),
          setTimeout(clearInterval(u)),
          r.value != "warning" &&
            ((a.value = 2),
            (r.value = "error"),
            (n = !0),
            i.value.classList.add("dots-error"),
            setTimeout(() => {
              i.value.style.stroke = "rgb(233, 17, 17)";
            }, 3e3));
      }
      return (E, _) => (
        Q(),
        nt(
          ht,
          null,
          [
            _[11] || (_[11] = f("br", null, null, -1)),
            f("div", lE, [
              f("div", aE, [
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: _[0] || (_[0] = (O) => w()),
                  },
                  " start "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: _[1] || (_[1] = (O) => T()),
                  },
                  " stop "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: _[2] || (_[2] = (O) => m()),
                  },
                  " step "
                ),
                f(
                  "button",
                  {
                    type: "button",
                    class: "btn btn-outline-secondary m-1",
                    onClick: _[3] || (_[3] = (O) => A()),
                  },
                  " reset "
                ),
              ]),
              _[6] || (_[6] = f("br", null, null, -1)),
              f("div", cE, [
                f("div", uE, [
                  f(
                    "button",
                    {
                      type: "button",
                      class: "btn btn-outline-secondary m-1",
                      onClick: _[4] || (_[4] = (O) => M()),
                    },
                    " warning "
                  ),
                  f(
                    "button",
                    {
                      type: "button",
                      class: "btn btn-outline-secondary m-1",
                      onClick: _[5] || (_[5] = (O) => C()),
                    },
                    " error "
                  ),
                ]),
              ]),
            ]),
            f("div", fE, [
              f("div", dE, [
                f("div", hE, [
                  f("div", null, [
                    (Q(),
                    nt("svg", pE, [
                      _[7] ||
                        (_[7] = f(
                          "line",
                          {
                            x1: "0",
                            y1: "0",
                            x2: "600",
                            y2: "0",
                            stroke: "rgb(224, 224, 224)",
                            "stroke-width": "45",
                          },
                          null,
                          -1
                        )),
                      f(
                        "line",
                        {
                          ref_key: "lineBar",
                          ref: i,
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "0",
                          stroke: "rgb(17, 42, 233)",
                          "stroke-width": "45",
                        },
                        null,
                        512
                      ),
                    ])),
                  ]),
                  f("div", gE, [
                    ft(a) == 0
                      ? (Q(), nt("div", mE, Nt(ft(r)), 1))
                      : Kt("", !0),
                    ft(a) == 1
                      ? (Q(),
                        nt("div", _E, [
                          (Q(),
                          nt(
                            "svg",
                            vE,
                            _[8] ||
                              (_[8] = [
                                f(
                                  "g",
                                  null,
                                  [
                                    f("g", null, [
                                      f("path", {
                                        style: { fill: "rgb(28, 233, 17)" },
                                        d: "M507.291,57.14c-5.605-4.851-14.094-4.204-18.998,1.455L174.383,424.81l-151.39-151.39 c-5.255-5.255-13.797-5.255-19.052,0c-5.255,5.255-5.255,13.797,0,19.052l161.684,161.684c2.533,2.506,5.982,3.934,9.539,3.934 c0.162,0,0.35,0,0.539,0.027c3.746-0.162,7.276-1.886,9.701-4.716L508.773,76.138C513.597,70.479,512.95,61.99,507.291,57.14z",
                                      }),
                                    ]),
                                  ],
                                  -1
                                ),
                              ])
                          )),
                        ]))
                      : Kt("", !0),
                    ft(a) == 2
                      ? (Q(),
                        nt(
                          "div",
                          bE,
                          _[9] ||
                            (_[9] = [
                              f(
                                "svg",
                                {
                                  width: "48",
                                  height: "48",
                                  viewBox: "0 0 16 16",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                [
                                  f("path", {
                                    "fill-rule": "evenodd",
                                    fill: "rgb(233, 17, 17)",
                                    "clip-rule": "evenodd",
                                    d: "M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z",
                                  }),
                                ],
                                -1
                              ),
                            ])
                        ))
                      : Kt("", !0),
                    ft(a) == 3
                      ? (Q(),
                        nt(
                          "div",
                          EE,
                          _[10] ||
                            (_[10] = [
                              f(
                                "svg",
                                {
                                  fill: "rgb(233, 175, 17)",
                                  width: "60px",
                                  height: "60px",
                                  viewBox: "0 0 36 36",
                                },
                                [
                                  f("title", null, "exclamation-circle-solid"),
                                  f("path", {
                                    class: "clr-i-solid clr-i-solid-path-1",
                                    d: "M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z",
                                  }),
                                  f("rect", {
                                    x: "0",
                                    y: "0",
                                    width: "36",
                                    height: "36",
                                    "fill-opacity": "0",
                                  }),
                                ],
                                -1
                              ),
                            ])
                        ))
                      : Kt("", !0),
                  ]),
                ]),
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  wE = { class: "row" },
  AE = { class: "col-4 mx-auto" },
  CE = { class: "Contur" },
  TE = { class: "row-2" },
  OE = { class: "col" },
  SE = {
    __name: "VariousTesting",
    setup(e) {
      const t = U("null");
      let n = U(0),
        s = U(0),
        o = U("");
      function i(a, l) {
        (t.value.style.left = a - 10 + "px"),
          (t.value.style.top = l - 80 + "px"),
          (n.value = a),
          (s.value = l);
      }
      function r() {
        (t.value.className = "div-reactive"),
          console.log(t.value),
          (o.value = "Я изменился"),
          setTimeout(() => {
            (o.value = ""), (t.value.className = "div-reactive-hidden");
          }, 2e3),
          console.log("Click");
      }
      return (a, l) => (
        Q(),
        nt(
          ht,
          null,
          [
            rt(nn, null, {
              default: At(() => l[2] || (l[2] = [ct(" Различные тесты ")])),
              _: 1,
            }),
            f("div", wE, [
              f("div", AE, [
                f("div", null, [
                  f("h2", CE, "Координаты " + Nt(ft(n)) + " : " + Nt(ft(s)), 1),
                ]),
              ]),
            ]),
            l[3] || (l[3] = f("br", null, null, -1)),
            f("div", TE, [
              f("div", OE, [
                f(
                  "div",
                  {
                    class: "box mx-auto",
                    onClick: l[0] || (l[0] = (c) => r(c.clientX, c.clientY)),
                    onMousemove:
                      l[1] || (l[1] = (c) => i(c.clientX, c.clientY)),
                  },
                  [
                    f(
                      "div",
                      {
                        ref_key: "targetDiv",
                        ref: t,
                        class: "div-reactive-hidden",
                      },
                      Nt(ft(o)),
                      513
                    ),
                  ],
                  32
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  xE = [
    { path: "/", component: cb, meta: {} },
    { path: "/calculator", component: xb, meta: {} },
    { path: "/gallows", component: T1, meta: {} },
    { path: "/find-the-treasure", component: N1, meta: {} },
    { path: "/game-of-life", component: z1, meta: {} },
    {
      path: "/page-dogs/",
      component: o0,
      children: [
        { path: "", redirect: "/page-dogs/carusel" },
        { path: "carusel", component: u0 },
        { path: "gallery", component: O0 },
      ],
      meta: {},
    },
    {
      path: "/progress-bar",
      component: N0,
      children: [
        { path: "", redirect: "/progress-bar/circle" },
        { path: "circle", component: U0 },
        { path: "dash-board", component: rE },
        { path: "line-board", component: yE },
      ],
      meta: {},
    },
    { path: "/testing", component: SE, meta: {} },
  ],
  $E = Wv({
    history: yv("/Lux-super-project/"),
    linkActiveClass: "active",
    routes: xE,
  });
Id(ob).use($E).mount("#app");

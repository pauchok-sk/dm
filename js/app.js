(() => {
    var __webpack_modules__ = {
        755: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */            (function(global, factory) {
                "use strict";
                if (true && typeof module.exports === "object") module.exports = global.document ? factory(global, true) : function(w) {
                    if (!w.document) throw new Error("jQuery requires a window with a document");
                    return factory(w);
                }; else factory(global);
            })(typeof window !== "undefined" ? window : this, (function(window, noGlobal) {
                "use strict";
                var arr = [];
                var getProto = Object.getPrototypeOf;
                var slice = arr.slice;
                var flat = arr.flat ? function(array) {
                    return arr.flat.call(array);
                } : function(array) {
                    return arr.concat.apply([], array);
                };
                var push = arr.push;
                var indexOf = arr.indexOf;
                var class2type = {};
                var toString = class2type.toString;
                var hasOwn = class2type.hasOwnProperty;
                var fnToString = hasOwn.toString;
                var ObjectFunctionString = fnToString.call(Object);
                var support = {};
                var isFunction = function isFunction(obj) {
                    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
                };
                var isWindow = function isWindow(obj) {
                    return obj != null && obj === obj.window;
                };
                var document = window.document;
                var preservedScriptAttributes = {
                    type: true,
                    src: true,
                    nonce: true,
                    noModule: true
                };
                function DOMEval(code, node, doc) {
                    doc = doc || document;
                    var i, val, script = doc.createElement("script");
                    script.text = code;
                    if (node) for (i in preservedScriptAttributes) {
                        val = node[i] || node.getAttribute && node.getAttribute(i);
                        if (val) script.setAttribute(i, val);
                    }
                    doc.head.appendChild(script).parentNode.removeChild(script);
                }
                function toType(obj) {
                    if (obj == null) return obj + "";
                    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
                }
                var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
                    return new jQuery.fn.init(selector, context);
                };
                jQuery.fn = jQuery.prototype = {
                    jquery: version,
                    constructor: jQuery,
                    length: 0,
                    toArray: function() {
                        return slice.call(this);
                    },
                    get: function(num) {
                        if (num == null) return slice.call(this);
                        return num < 0 ? this[num + this.length] : this[num];
                    },
                    pushStack: function(elems) {
                        var ret = jQuery.merge(this.constructor(), elems);
                        ret.prevObject = this;
                        return ret;
                    },
                    each: function(callback) {
                        return jQuery.each(this, callback);
                    },
                    map: function(callback) {
                        return this.pushStack(jQuery.map(this, (function(elem, i) {
                            return callback.call(elem, i, elem);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(slice.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return (i + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return i % 2;
                        })));
                    },
                    eq: function(i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push,
                    sort: arr.sort,
                    splice: arr.splice
                };
                jQuery.extend = jQuery.fn.extend = function() {
                    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                    if (typeof target === "boolean") {
                        deep = target;
                        target = arguments[i] || {};
                        i++;
                    }
                    if (typeof target !== "object" && !isFunction(target)) target = {};
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for (;i < length; i++) if ((options = arguments[i]) != null) for (name in options) {
                        copy = options[name];
                        if (name === "__proto__" || target === copy) continue;
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            src = target[name];
                            if (copyIsArray && !Array.isArray(src)) clone = []; else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {}; else clone = src;
                            copyIsArray = false;
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== void 0) target[name] = copy;
                    }
                    return target;
                };
                jQuery.extend({
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    isReady: true,
                    error: function(msg) {
                        throw new Error(msg);
                    },
                    noop: function() {},
                    isPlainObject: function(obj) {
                        var proto, Ctor;
                        if (!obj || toString.call(obj) !== "[object Object]") return false;
                        proto = getProto(obj);
                        if (!proto) return true;
                        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
                    },
                    isEmptyObject: function(obj) {
                        var name;
                        for (name in obj) return false;
                        return true;
                    },
                    globalEval: function(code, options, doc) {
                        DOMEval(code, {
                            nonce: options && options.nonce
                        }, doc);
                    },
                    each: function(obj, callback) {
                        var length, i = 0;
                        if (isArrayLike(obj)) {
                            length = obj.length;
                            for (;i < length; i++) if (callback.call(obj[i], i, obj[i]) === false) break;
                        } else for (i in obj) if (callback.call(obj[i], i, obj[i]) === false) break;
                        return obj;
                    },
                    text: function(elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) while (node = elem[i++]) ret += jQuery.text(node);
                        if (nodeType === 1 || nodeType === 11) return elem.textContent;
                        if (nodeType === 9) return elem.documentElement.textContent;
                        if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
                        return ret;
                    },
                    makeArray: function(arr, results) {
                        var ret = results || [];
                        if (arr != null) if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr); else push.call(ret, arr);
                        return ret;
                    },
                    inArray: function(elem, arr, i) {
                        return arr == null ? -1 : indexOf.call(arr, elem, i);
                    },
                    isXMLDoc: function(elem) {
                        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
                        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
                    },
                    merge: function(first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        for (;j < len; j++) first[i++] = second[j];
                        first.length = i;
                        return first;
                    },
                    grep: function(elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        for (;i < length; i++) {
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                        }
                        return matches;
                    },
                    map: function(elems, callback, arg) {
                        var length, value, i = 0, ret = [];
                        if (isArrayLike(elems)) {
                            length = elems.length;
                            for (;i < length; i++) {
                                value = callback(elems[i], i, arg);
                                if (value != null) ret.push(value);
                            }
                        } else for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (value != null) ret.push(value);
                        }
                        return flat(ret);
                    },
                    guid: 1,
                    support
                });
                if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                }));
                function isArrayLike(obj) {
                    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                    if (isFunction(obj) || isWindow(obj)) return false;
                    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
                }
                function nodeName(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                }
                var pop = arr.pop;
                var sort = arr.sort;
                var splice = arr.splice;
                var whitespace = "[\\x20\\t\\r\\n\\f]";
                var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
                jQuery.contains = function(a, b) {
                    var bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                };
                var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                function fcssescape(ch, asCodePoint) {
                    if (asCodePoint) {
                        if (ch === "\0") return "�";
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                    }
                    return "\\" + ch;
                }
                jQuery.escapeSelector = function(sel) {
                    return (sel + "").replace(rcssescape, fcssescape);
                };
                var preferredDoc = document, pushNative = push;
                (function() {
                    var i, Expr, outermostContext, sortInput, hasDuplicate, document, documentElement, documentIsHTML, rbuggyQSA, matches, push = pushNative, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                        if (a === b) hasDuplicate = true;
                        return 0;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" + "loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        ID: new RegExp("^#(" + identifier + ")"),
                        CLASS: new RegExp("^\\.(" + identifier + ")"),
                        TAG: new RegExp("^(" + identifier + "|[*])"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 65536;
                        if (nonHex) return nonHex;
                        return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
                    }, unloadHandler = function() {
                        setDocument();
                    }, inDisabledFieldset = addCombinator((function(elem) {
                        return elem.disabled === true && nodeName(elem, "fieldset");
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    function safeActiveElement() {
                        try {
                            return document.activeElement;
                        } catch (err) {}
                    }
                    try {
                        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: function(target, els) {
                                pushNative.apply(target, slice.call(els));
                            },
                            call: function(target) {
                                pushNative.apply(target, slice.call(arguments, 1));
                            }
                        };
                    }
                    function find(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                        results = results || [];
                        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
                        if (!seed) {
                            setDocument(context);
                            context = context || document;
                            if (documentIsHTML) {
                                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                                    if (nodeType === 9) if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            push.call(results, elem);
                                            return results;
                                        }
                                    } else return results; else if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                                        push.call(results, elem);
                                        return results;
                                    }
                                } else if (match[2]) {
                                    push.apply(results, context.getElementsByTagName(selector));
                                    return results;
                                } else if ((m = match[3]) && context.getElementsByClassName) {
                                    push.apply(results, context.getElementsByClassName(m));
                                    return results;
                                }
                                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                                    newSelector = selector;
                                    newContext = context;
                                    if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                        if (newContext != context || !support.scope) if (nid = context.getAttribute("id")) nid = jQuery.escapeSelector(nid); else context.setAttribute("id", nid = expando);
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while (i--) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                        newSelector = groups.join(",");
                                    }
                                    try {
                                        push.apply(results, newContext.querySelectorAll(newSelector));
                                        return results;
                                    } catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    } finally {
                                        if (nid === expando) context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                        return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
                    }
                    function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            if (keys.push(key + " ") > Expr.cacheLength) delete cache[keys.shift()];
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    function assert(fn) {
                        var el = document.createElement("fieldset");
                        try {
                            return !!fn(el);
                        } catch (e) {
                            return false;
                        } finally {
                            if (el.parentNode) el.parentNode.removeChild(el);
                            el = null;
                        }
                    }
                    function createInputPseudo(type) {
                        return function(elem) {
                            return nodeName(elem, "input") && elem.type === type;
                        };
                    }
                    function createButtonPseudo(type) {
                        return function(elem) {
                            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
                        };
                    }
                    function createDisabledPseudo(disabled) {
                        return function(elem) {
                            if ("form" in elem) {
                                if (elem.parentNode && elem.disabled === false) {
                                    if ("label" in elem) if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled; else return elem.disabled === disabled;
                                    return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                                }
                                return elem.disabled === disabled;
                            } else if ("label" in elem) return elem.disabled === disabled;
                            return false;
                        };
                    }
                    function createPositionalPseudo(fn) {
                        return markFunction((function(argument) {
                            argument = +argument;
                            return markFunction((function(seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                            }));
                        }));
                    }
                    function testContext(context) {
                        return context && typeof context.getElementsByTagName !== "undefined" && context;
                    }
                    function setDocument(node) {
                        var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                        if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
                        document = doc;
                        documentElement = document.documentElement;
                        documentIsHTML = !jQuery.isXMLDoc(document);
                        matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;
                        if (documentElement.msMatchesSelector && preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) subWindow.addEventListener("unload", unloadHandler);
                        support.getById = assert((function(el) {
                            documentElement.appendChild(el).id = jQuery.expando;
                            return !document.getElementsByName || !document.getElementsByName(jQuery.expando).length;
                        }));
                        support.disconnectedMatch = assert((function(el) {
                            return matches.call(el, "*");
                        }));
                        support.scope = assert((function() {
                            return document.querySelectorAll(":scope");
                        }));
                        support.cssHas = assert((function() {
                            try {
                                document.querySelector(":has(*,:jqfake)");
                                return false;
                            } catch (e) {
                                return true;
                            }
                        }));
                        if (support.getById) {
                            Expr.filter.ID = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find.ID = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [ elem ] : [];
                                }
                            };
                        } else {
                            Expr.filter.ID = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                            Expr.find.ID = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var node, i, elems, elem = context.getElementById(id);
                                    if (elem) {
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) return [ elem ];
                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while (elem = elems[i++]) {
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) return [ elem ];
                                        }
                                    }
                                    return [];
                                }
                            };
                        }
                        Expr.find.TAG = function(tag, context) {
                            if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag); else return context.querySelectorAll(tag);
                        };
                        Expr.find.CLASS = function(className, context) {
                            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
                        };
                        rbuggyQSA = [];
                        assert((function(el) {
                            var input;
                            documentElement.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";
                            if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                            if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                            if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                            if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                            input = document.createElement("input");
                            input.setAttribute("type", "hidden");
                            el.appendChild(input).setAttribute("name", "D");
                            documentElement.appendChild(el).disabled = true;
                            if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                            input = document.createElement("input");
                            input.setAttribute("name", "");
                            el.appendChild(input);
                            if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                        }));
                        if (!support.cssHas) rbuggyQSA.push(":has");
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        sortOrder = function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) return compare;
                            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                if (a === document || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) return -1;
                                if (b === document || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) return 1;
                                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                            }
                            return compare & 4 ? -1 : 1;
                        };
                        return document;
                    }
                    find.matches = function(expr, elements) {
                        return find(expr, null, null, elements);
                    };
                    find.matchesSelector = function(elem, expr) {
                        setDocument(elem);
                        if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) return ret;
                        } catch (e) {
                            nonnativeSelectorCache(expr, true);
                        }
                        return find(expr, document, null, [ elem ]).length > 0;
                    };
                    find.contains = function(context, elem) {
                        if ((context.ownerDocument || context) != document) setDocument(context);
                        return jQuery.contains(context, elem);
                    };
                    find.attr = function(elem, name) {
                        if ((elem.ownerDocument || elem) != document) setDocument(elem);
                        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                        if (val !== void 0) return val;
                        return elem.getAttribute(name);
                    };
                    find.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    jQuery.uniqueSort = function(results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        hasDuplicate = !support.sortStable;
                        sortInput = !support.sortStable && slice.call(results, 0);
                        sort.call(results, sortOrder);
                        if (hasDuplicate) {
                            while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
                            while (j--) splice.call(results, duplicates[j], 1);
                        }
                        sortInput = null;
                        return results;
                    };
                    jQuery.fn.uniqueSort = function() {
                        return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
                    };
                    Expr = jQuery.expr = {
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(match) {
                                match[1] = match[1].replace(runescape, funescape);
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if (match[2] === "~=") match[3] = " " + match[3] + " ";
                                return match.slice(0, 4);
                            },
                            CHILD: function(match) {
                                match[1] = match[1].toLowerCase();
                                if (match[1].slice(0, 3) === "nth") {
                                    if (!match[3]) find.error(match[0]);
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                    match[5] = +(match[7] + match[8] || match[3] === "odd");
                                } else if (match[3]) find.error(match[0]);
                                return match;
                            },
                            PSEUDO: function(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr.CHILD.test(match[0])) return null;
                                if (match[3]) match[2] = match[4] || match[5] || ""; else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            TAG: function(nodeNameSelector) {
                                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return nodeNameSelector === "*" ? function() {
                                    return true;
                                } : function(elem) {
                                    return nodeName(elem, expectedNodeName);
                                };
                            },
                            CLASS: function(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, (function(elem) {
                                    return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(name, operator, check) {
                                return function(elem) {
                                    var result = find.attr(elem, name);
                                    if (result == null) return operator === "!=";
                                    if (!operator) return true;
                                    result += "";
                                    if (operator === "=") return result === check;
                                    if (operator === "!=") return result !== check;
                                    if (operator === "^=") return check && result.indexOf(check) === 0;
                                    if (operator === "*=") return check && result.indexOf(check) > -1;
                                    if (operator === "$=") return check && result.slice(-check.length) === check;
                                    if (operator === "~=") return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                                    if (operator === "|=") return result === check || result.slice(0, check.length + 1) === check + "-";
                                    return false;
                                };
                            },
                            CHILD: function(type, what, _argument, first, last) {
                                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                                return first === 1 && last === 0 ? function(elem) {
                                    return !!elem.parentNode;
                                } : function(elem, _context, xml) {
                                    var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                    if (parent) {
                                        if (simple) {
                                            while (dir) {
                                                node = elem;
                                                while (node = node[dir]) if (ofType ? nodeName(node, name) : node.nodeType === 1) return false;
                                                start = dir = type === "only" && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [ forward ? parent.firstChild : parent.lastChild ];
                                        if (forward && useCache) {
                                            outerCache = parent[expando] || (parent[expando] = {});
                                            cache = outerCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (node.nodeType === 1 && ++diff && node === elem) {
                                                outerCache[type] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        } else {
                                            if (useCache) {
                                                outerCache = elem[expando] || (elem[expando] = {});
                                                cache = outerCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex;
                                            }
                                            if (diff === false) while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    outerCache[type] = [ dirruns, diff ];
                                                }
                                                if (node === elem) break;
                                            }
                                        }
                                        diff -= last;
                                        return diff === first || diff % first === 0 && diff / first >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(pseudo, argument) {
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                                if (fn[expando]) return fn(argument);
                                if (fn.length > 1) {
                                    args = [ pseudo, pseudo, "", argument ];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction((function(seed, matches) {
                                        var idx, matched = fn(seed, argument), i = matched.length;
                                        while (i--) {
                                            idx = indexOf.call(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    })) : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            not: markFunction((function(selector) {
                                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                                return matcher[expando] ? markFunction((function(seed, matches, _context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                    while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                                })) : function(elem, _context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    input[0] = null;
                                    return !results.pop();
                                };
                            })),
                            has: markFunction((function(selector) {
                                return function(elem) {
                                    return find(selector, elem).length > 0;
                                };
                            })),
                            contains: markFunction((function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                                };
                            })),
                            lang: markFunction((function(lang) {
                                if (!ridentifier.test(lang || "")) find.error("unsupported lang: " + lang);
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                        }
                                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                    return false;
                                };
                            })),
                            target: function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            root: function(elem) {
                                return elem === documentElement;
                            },
                            focus: function(elem) {
                                return elem === safeActiveElement() && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            enabled: createDisabledPseudo(false),
                            disabled: createDisabledPseudo(true),
                            checked: function(elem) {
                                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
                            },
                            selected: function(elem) {
                                if (elem.parentNode) elem.parentNode.selectedIndex;
                                return elem.selected === true;
                            },
                            empty: function(elem) {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
                                return true;
                            },
                            parent: function(elem) {
                                return !Expr.pseudos.empty(elem);
                            },
                            header: function(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            input: function(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            button: function(elem) {
                                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
                            },
                            text: function(elem) {
                                var attr;
                                return nodeName(elem, "input") && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                            },
                            first: createPositionalPseudo((function() {
                                return [ 0 ];
                            })),
                            last: createPositionalPseudo((function(_matchIndexes, length) {
                                return [ length - 1 ];
                            })),
                            eq: createPositionalPseudo((function(_matchIndexes, length, argument) {
                                return [ argument < 0 ? argument + length : argument ];
                            })),
                            even: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 0;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            odd: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 1;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            lt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i;
                                if (argument < 0) i = argument + length; else if (argument > length) i = length; else i = argument;
                                for (;--i >= 0; ) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            gt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (;++i < length; ) matchIndexes.push(i);
                                return matchIndexes;
                            }))
                        }
                    };
                    Expr.pseudos.nth = Expr.pseudos.eq;
                    for (i in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    }) Expr.pseudos[i] = createInputPseudo(i);
                    for (i in {
                        submit: true,
                        reset: true
                    }) Expr.pseudos[i] = createButtonPseudo(i);
                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters;
                    function tokenize(selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) {
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) soFar = soFar.slice(match[0].length) || soFar;
                                groups.push(tokens = []);
                            }
                            matched = false;
                            if (match = rleadingCombinator.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: match[0].replace(rtrimCSS, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            for (type in Expr.filter) if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            if (!matched) break;
                        }
                        if (parseOnly) return soFar.length;
                        return soFar ? find.error(selector) : tokenCache(selector, groups).slice(0);
                    }
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for (;i < len; i++) selector += tokens[i].value;
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
                        return combinator.first ? function(elem, context, xml) {
                            while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                            return false;
                        } : function(elem, context, xml) {
                            var oldCache, outerCache, newCache = [ dirruns, doneName ];
                            if (xml) {
                                while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) if (matcher(elem, context, xml)) return true;
                            } else while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                if (skip && nodeName(elem, skip)) elem = elem[dir] || elem; else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; else {
                                    outerCache[key] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) return true;
                                }
                            }
                            return false;
                        };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function(elem, context, xml) {
                            var i = matchers.length;
                            while (i--) if (!matchers[i](elem, context, xml)) return false;
                            return true;
                        } : matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for (;i < len; i++) find(selector, contexts[i], results);
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                        for (;i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) map.push(i);
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                        if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                        return markFunction((function(seed, results, context, xml) {
                            var temp, i, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
                            if (matcher) {
                                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
                                matcher(matcherIn, matcherOut, context, xml);
                            } else matcherOut = matcherIn;
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                i = temp.length;
                                while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
                                        postFinder(null, matcherOut = [], temp, xml);
                                    }
                                    i = matcherOut.length;
                                    while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                                }
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) postFinder(null, results, matcherOut, xml); else push.apply(results, matcherOut);
                            }
                        }));
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator((function(elem) {
                            return elem === checkContext;
                        }), implicitRelative, true), matchAnyContext = addCombinator((function(elem) {
                            return indexOf.call(checkContext, elem) > -1;
                        }), implicitRelative, true), matchers = [ function(elem, context, xml) {
                            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            checkContext = null;
                            return ret;
                        } ];
                        for (;i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (;j < len; j++) if (Expr.relative[tokens[j].type]) break;
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: tokens[i - 2].type === " " ? "*" : ""
                                })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                            if (outermost) outermostContext = context == document || context || outermost;
                            for (;i !== len && (elem = elems[i]) != null; i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    if (!context && elem.ownerDocument != document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while (matcher = elementMatchers[j++]) if (matcher(elem, context || document, xml)) {
                                        push.call(results, elem);
                                        break;
                                    }
                                    if (outermost) dirruns = dirrunsUnique;
                                }
                                if (bySet) {
                                    if (elem = !matcher && elem) matchedCount--;
                                    if (seed) unmatched.push(elem);
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0) while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                    setMatched = condense(setMatched);
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) jQuery.uniqueSort(results);
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    function compile(selector, match) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            if (!match) match = tokenize(selector);
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) setMatchers.push(cached); else elementMatchers.push(cached);
                            }
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            cached.selector = selector;
                        }
                        return cached;
                    }
                    function select(selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || [];
                        if (match.length === 1) {
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) return results; else if (compiled) context = context.parentNode;
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                if (Expr.relative[type = token.type]) break;
                                if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    }
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    setDocument();
                    support.sortDetached = assert((function(el) {
                        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                    }));
                    jQuery.find = find;
                    jQuery.expr[":"] = jQuery.expr.pseudos;
                    jQuery.unique = jQuery.uniqueSort;
                    find.compile = compile;
                    find.select = select;
                    find.setDocument = setDocument;
                    find.tokenize = tokenize;
                    find.escape = jQuery.escapeSelector;
                    find.getText = jQuery.text;
                    find.isXML = jQuery.isXMLDoc;
                    find.selectors = jQuery.expr;
                    find.support = jQuery.support;
                    find.uniqueSort = jQuery.uniqueSort;
                })();
                var dir = function(elem, dir, until) {
                    var matched = [], truncate = until !== void 0;
                    while ((elem = elem[dir]) && elem.nodeType !== 9) if (elem.nodeType === 1) {
                        if (truncate && jQuery(elem).is(until)) break;
                        matched.push(elem);
                    }
                    return matched;
                };
                var siblings = function(n, elem) {
                    var matched = [];
                    for (;n; n = n.nextSibling) if (n.nodeType === 1 && n !== elem) matched.push(n);
                    return matched;
                };
                var rneedsContext = jQuery.expr.match.needsContext;
                var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function winnow(elements, qualifier, not) {
                    if (isFunction(qualifier)) return jQuery.grep(elements, (function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    }));
                    if (qualifier.nodeType) return jQuery.grep(elements, (function(elem) {
                        return elem === qualifier !== not;
                    }));
                    if (typeof qualifier !== "string") return jQuery.grep(elements, (function(elem) {
                        return indexOf.call(qualifier, elem) > -1 !== not;
                    }));
                    return jQuery.filter(qualifier, elements, not);
                }
                jQuery.filter = function(expr, elems, not) {
                    var elem = elems[0];
                    if (not) expr = ":not(" + expr + ")";
                    if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
                    return jQuery.find.matches(expr, jQuery.grep(elems, (function(elem) {
                        return elem.nodeType === 1;
                    })));
                };
                jQuery.fn.extend({
                    find: function(selector) {
                        var i, ret, len = this.length, self = this;
                        if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter((function() {
                            for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
                        })));
                        ret = this.pushStack([]);
                        for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function(selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function(selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function(selector) {
                        return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                    }
                });
                var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
                    var match, elem;
                    if (!selector) return this;
                    root = root || rootjQuery;
                    if (typeof selector === "string") {
                        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) match = [ null, selector, null ]; else match = rquickExpr.exec(selector);
                        if (match && (match[1] || !context)) if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (isFunction(this[match])) this[match](context[match]); else this.attr(match, context[match]);
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem) {
                                this[0] = elem;
                                this.length = 1;
                            }
                            return this;
                        } else if (!context || context.jquery) return (context || root).find(selector); else return this.constructor(context).find(selector);
                    } else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;
                    } else if (isFunction(selector)) return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
                    return jQuery.makeArray(selector, this);
                };
                init.prototype = jQuery.fn;
                rootjQuery = jQuery(document);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.fn.extend({
                    has: function(target) {
                        var targets = jQuery(target, this), l = targets.length;
                        return this.filter((function() {
                            var i = 0;
                            for (;i < l; i++) if (jQuery.contains(this, targets[i])) return true;
                        }));
                    },
                    closest: function(selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                        if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                    },
                    index: function(elem) {
                        if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
                        return indexOf.call(this, elem.jquery ? elem[0] : elem);
                    },
                    add: function(selector, context) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function(selector) {
                        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    while ((cur = cur[dir]) && cur.nodeType !== 1) ;
                    return cur;
                }
                jQuery.each({
                    parent: function(elem) {
                        var parent = elem.parentNode;
                        return parent && parent.nodeType !== 11 ? parent : null;
                    },
                    parents: function(elem) {
                        return dir(elem, "parentNode");
                    },
                    parentsUntil: function(elem, _i, until) {
                        return dir(elem, "parentNode", until);
                    },
                    next: function(elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function(elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function(elem) {
                        return dir(elem, "nextSibling");
                    },
                    prevAll: function(elem) {
                        return dir(elem, "previousSibling");
                    },
                    nextUntil: function(elem, _i, until) {
                        return dir(elem, "nextSibling", until);
                    },
                    prevUntil: function(elem, _i, until) {
                        return dir(elem, "previousSibling", until);
                    },
                    siblings: function(elem) {
                        return siblings((elem.parentNode || {}).firstChild, elem);
                    },
                    children: function(elem) {
                        return siblings(elem.firstChild);
                    },
                    contents: function(elem) {
                        if (elem.contentDocument != null && getProto(elem.contentDocument)) return elem.contentDocument;
                        if (nodeName(elem, "template")) elem = elem.content || elem;
                        return jQuery.merge([], elem.childNodes);
                    }
                }, (function(name, fn) {
                    jQuery.fn[name] = function(until, selector) {
                        var matched = jQuery.map(this, fn, until);
                        if (name.slice(-5) !== "Until") selector = until;
                        if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
                        if (this.length > 1) {
                            if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                            if (rparentsprev.test(name)) matched.reverse();
                        }
                        return this.pushStack(matched);
                    };
                }));
                var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
                function createOptions(options) {
                    var object = {};
                    jQuery.each(options.match(rnothtmlwhite) || [], (function(_, flag) {
                        object[flag] = true;
                    }));
                    return object;
                }
                jQuery.Callbacks = function(options) {
                    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
                    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                        locked = locked || options.once;
                        fired = firing = true;
                        for (;queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                        if (!options.memory) memory = false;
                        firing = false;
                        if (locked) if (memory) list = []; else list = "";
                    }, self = {
                        add: function() {
                            if (list) {
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }
                                (function add(args) {
                                    jQuery.each(args, (function(_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) list.push(arg);
                                        } else if (arg && arg.length && toType(arg) !== "string") add(arg);
                                    }));
                                })(arguments);
                                if (memory && !firing) fire();
                            }
                            return this;
                        },
                        remove: function() {
                            jQuery.each(arguments, (function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    if (index <= firingIndex) firingIndex--;
                                }
                            }));
                            return this;
                        },
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        },
                        empty: function() {
                            if (list) list = [];
                            return this;
                        },
                        disable: function() {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },
                        lock: function() {
                            locked = queue = [];
                            if (!memory && !firing) list = memory = "";
                            return this;
                        },
                        locked: function() {
                            return !!locked;
                        },
                        fireWith: function(context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [ context, args.slice ? args.slice() : args ];
                                queue.push(args);
                                if (!firing) fire();
                            }
                            return this;
                        },
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        fired: function() {
                            return !!fired;
                        }
                    };
                    return self;
                };
                function Identity(v) {
                    return v;
                }
                function Thrower(ex) {
                    throw ex;
                }
                function adoptValue(value, resolve, reject, noValue) {
                    var method;
                    try {
                        if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject); else if (value && isFunction(method = value.then)) method.call(value, resolve, reject); else resolve.apply(void 0, [ value ].slice(noValue));
                    } catch (value) {
                        reject.apply(void 0, [ value ]);
                    }
                }
                jQuery.extend({
                    Deferred: function(func) {
                        var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            catch: function(fn) {
                                return promise.then(null, fn);
                            },
                            pipe: function() {
                                var fns = arguments;
                                return jQuery.Deferred((function(newDefer) {
                                    jQuery.each(tuples, (function(_i, tuple) {
                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                        deferred[tuple[1]]((function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject); else newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                        }));
                                    }));
                                    fns = null;
                                })).promise();
                            },
                            then: function(onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;
                                function resolve(depth, deferred, handler, special) {
                                    return function() {
                                        var that = this, args = arguments, mightThrow = function() {
                                            var returned, then;
                                            if (depth < maxDepth) return;
                                            returned = handler.apply(that, args);
                                            if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                            if (isFunction(then)) if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); else {
                                                maxDepth++;
                                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                            } else {
                                                if (handler !== Identity) {
                                                    that = void 0;
                                                    args = [ returned ];
                                                }
                                                (special || deferred.resolveWith)(that, args);
                                            }
                                        }, process = special ? mightThrow : function() {
                                            try {
                                                mightThrow();
                                            } catch (e) {
                                                if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.error);
                                                if (depth + 1 >= maxDepth) {
                                                    if (handler !== Thrower) {
                                                        that = void 0;
                                                        args = [ e ];
                                                    }
                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };
                                        if (depth) process(); else {
                                            if (jQuery.Deferred.getErrorHook) process.error = jQuery.Deferred.getErrorHook(); else if (jQuery.Deferred.getStackHook) process.error = jQuery.Deferred.getStackHook();
                                            window.setTimeout(process);
                                        }
                                    };
                                }
                                return jQuery.Deferred((function(newDefer) {
                                    tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                                    tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                                    tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                                })).promise();
                            },
                            promise: function(obj) {
                                return obj != null ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred = {};
                        jQuery.each(tuples, (function(i, tuple) {
                            var list = tuple[2], stateString = tuple[5];
                            promise[tuple[1]] = list.add;
                            if (stateString) list.add((function() {
                                state = stateString;
                            }), tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                            list.add(tuple[3].fire);
                            deferred[tuple[0]] = function() {
                                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                                return this;
                            };
                            deferred[tuple[0] + "With"] = list.fireWith;
                        }));
                        promise.promise(deferred);
                        if (func) func.call(deferred, deferred);
                        return deferred;
                    },
                    when: function(singleValue) {
                        var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i) {
                            return function(value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                            };
                        };
                        if (remaining <= 1) {
                            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
                        }
                        while (i--) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                        return primary.promise();
                    }
                });
                var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function(error, asyncError) {
                    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
                };
                jQuery.readyException = function(error) {
                    window.setTimeout((function() {
                        throw error;
                    }));
                };
                var readyList = jQuery.Deferred();
                jQuery.fn.ready = function(fn) {
                    readyList.then(fn).catch((function(error) {
                        jQuery.readyException(error);
                    }));
                    return this;
                };
                jQuery.extend({
                    isReady: false,
                    readyWait: 1,
                    ready: function(wait) {
                        if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
                        jQuery.isReady = true;
                        if (wait !== true && --jQuery.readyWait > 0) return;
                        readyList.resolveWith(document, [ jQuery ]);
                    }
                });
                jQuery.ready.then = readyList.then;
                function completed() {
                    document.removeEventListener("DOMContentLoaded", completed);
                    window.removeEventListener("load", completed);
                    jQuery.ready();
                }
                if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) window.setTimeout(jQuery.ready); else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed);
                }
                var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0, len = elems.length, bulk = key == null;
                    if (toType(key) === "object") {
                        chainable = true;
                        for (i in key) access(elems, fn, i, key[i], true, emptyGet, raw);
                    } else if (value !== void 0) {
                        chainable = true;
                        if (!isFunction(value)) raw = true;
                        if (bulk) if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            bulk = fn;
                            fn = function(elem, _key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                        if (fn) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                    if (chainable) return elems;
                    if (bulk) return fn.call(elems);
                    return len ? fn(elems[0], key) : emptyGet;
                };
                var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
                function fcamelCase(_all, letter) {
                    return letter.toUpperCase();
                }
                function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                }
                var acceptData = function(owner) {
                    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
                };
                function Data() {
                    this.expando = jQuery.expando + Data.uid++;
                }
                Data.uid = 1;
                Data.prototype = {
                    cache: function(owner) {
                        var value = owner[this.expando];
                        if (!value) {
                            value = {};
                            if (acceptData(owner)) if (owner.nodeType) owner[this.expando] = value; else Object.defineProperty(owner, this.expando, {
                                value,
                                configurable: true
                            });
                        }
                        return value;
                    },
                    set: function(owner, data, value) {
                        var prop, cache = this.cache(owner);
                        if (typeof data === "string") cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
                        return cache;
                    },
                    get: function(owner, key) {
                        return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function(owner, key, value) {
                        if (key === void 0 || key && typeof key === "string" && value === void 0) return this.get(owner, key);
                        this.set(owner, key, value);
                        return value !== void 0 ? value : key;
                    },
                    remove: function(owner, key) {
                        var i, cache = owner[this.expando];
                        if (cache === void 0) return;
                        if (key !== void 0) {
                            if (Array.isArray(key)) key = key.map(camelCase); else {
                                key = camelCase(key);
                                key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                            }
                            i = key.length;
                            while (i--) delete cache[key[i]];
                        }
                        if (key === void 0 || jQuery.isEmptyObject(cache)) if (owner.nodeType) owner[this.expando] = void 0; else delete owner[this.expando];
                    },
                    hasData: function(owner) {
                        var cache = owner[this.expando];
                        return cache !== void 0 && !jQuery.isEmptyObject(cache);
                    }
                };
                var dataPriv = new Data;
                var dataUser = new Data;
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
                function getData(data) {
                    if (data === "true") return true;
                    if (data === "false") return false;
                    if (data === "null") return null;
                    if (data === +data + "") return +data;
                    if (rbrace.test(data)) return JSON.parse(data);
                    return data;
                }
                function dataAttr(elem, key, data) {
                    var name;
                    if (data === void 0 && elem.nodeType === 1) {
                        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                        data = elem.getAttribute(name);
                        if (typeof data === "string") {
                            try {
                                data = getData(data);
                            } catch (e) {}
                            dataUser.set(elem, key, data);
                        } else data = void 0;
                    }
                    return data;
                }
                jQuery.extend({
                    hasData: function(elem) {
                        return dataUser.hasData(elem) || dataPriv.hasData(elem);
                    },
                    data: function(elem, name, data) {
                        return dataUser.access(elem, name, data);
                    },
                    removeData: function(elem, name) {
                        dataUser.remove(elem, name);
                    },
                    _data: function(elem, name, data) {
                        return dataPriv.access(elem, name, data);
                    },
                    _removeData: function(elem, name) {
                        dataPriv.remove(elem, name);
                    }
                });
                jQuery.fn.extend({
                    data: function(key, value) {
                        var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                        if (key === void 0) {
                            if (this.length) {
                                data = dataUser.get(elem);
                                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                    i = attrs.length;
                                    while (i--) if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (name.indexOf("data-") === 0) {
                                            name = camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                    dataPriv.set(elem, "hasDataAttrs", true);
                                }
                            }
                            return data;
                        }
                        if (typeof key === "object") return this.each((function() {
                            dataUser.set(this, key);
                        }));
                        return access(this, (function(value) {
                            var data;
                            if (elem && value === void 0) {
                                data = dataUser.get(elem, key);
                                if (data !== void 0) return data;
                                data = dataAttr(elem, key);
                                if (data !== void 0) return data;
                                return;
                            }
                            this.each((function() {
                                dataUser.set(this, key, value);
                            }));
                        }), null, value, arguments.length > 1, null, true);
                    },
                    removeData: function(key) {
                        return this.each((function() {
                            dataUser.remove(this, key);
                        }));
                    }
                });
                jQuery.extend({
                    queue: function(elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = dataPriv.get(elem, type);
                            if (data) if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data)); else queue.push(data);
                            return queue || [];
                        }
                    },
                    dequeue: function(elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                            jQuery.dequeue(elem, type);
                        };
                        if (fn === "inprogress") {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            if (type === "fx") queue.unshift("inprogress");
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) hooks.empty.fire();
                    },
                    _queueHooks: function(elem, type) {
                        var key = type + "queueHooks";
                        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                            empty: jQuery.Callbacks("once memory").add((function() {
                                dataPriv.remove(elem, [ type + "queue", key ]);
                            }))
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        if (typeof type !== "string") {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) return jQuery.queue(this[0], type);
                        return data === void 0 ? this : this.each((function() {
                            var queue = jQuery.queue(this, type, data);
                            jQuery._queueHooks(this, type);
                            if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
                        }));
                    },
                    dequeue: function(type) {
                        return this.each((function() {
                            jQuery.dequeue(this, type);
                        }));
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", []);
                    },
                    promise: function(type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                            if (!--count) defer.resolveWith(elements, [ elements ]);
                        };
                        if (typeof type !== "string") {
                            obj = type;
                            type = void 0;
                        }
                        type = type || "fx";
                        while (i--) {
                            tmp = dataPriv.get(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
                var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
                var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
                var documentElement = document.documentElement;
                var isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                }, composed = {
                    composed: true
                };
                if (documentElement.getRootNode) isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
                };
                var isHiddenWithinTree = function(elem, el) {
                    elem = el || elem;
                    return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
                };
                function adjustCSS(elem, prop, valueParts, tween) {
                    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                        return tween.cur();
                    } : function() {
                        return jQuery.css(elem, prop, "");
                    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                    if (initialInUnit && initialInUnit[3] !== unit) {
                        initial /= 2;
                        unit = unit || initialInUnit[3];
                        initialInUnit = +initial || 1;
                        while (maxIterations--) {
                            jQuery.style(elem, prop, initialInUnit + unit);
                            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) maxIterations = 0;
                            initialInUnit /= scale;
                        }
                        initialInUnit *= 2;
                        jQuery.style(elem, prop, initialInUnit + unit);
                        valueParts = valueParts || [];
                    }
                    if (valueParts) {
                        initialInUnit = +initialInUnit || +initial || 0;
                        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                        if (tween) {
                            tween.unit = unit;
                            tween.start = initialInUnit;
                            tween.end = adjusted;
                        }
                    }
                    return adjusted;
                }
                var defaultDisplayMap = {};
                function getDefaultDisplay(elem) {
                    var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                    if (display) return display;
                    temp = doc.body.appendChild(doc.createElement(nodeName));
                    display = jQuery.css(temp, "display");
                    temp.parentNode.removeChild(temp);
                    if (display === "none") display = "block";
                    defaultDisplayMap[nodeName] = display;
                    return display;
                }
                function showHide(elements, show) {
                    var display, elem, values = [], index = 0, length = elements.length;
                    for (;index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) continue;
                        display = elem.style.display;
                        if (show) {
                            if (display === "none") {
                                values[index] = dataPriv.get(elem, "display") || null;
                                if (!values[index]) elem.style.display = "";
                            }
                            if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
                        } else if (display !== "none") {
                            values[index] = "none";
                            dataPriv.set(elem, "display", display);
                        }
                    }
                    for (index = 0; index < length; index++) if (values[index] != null) elements[index].style.display = values[index];
                    return elements;
                }
                jQuery.fn.extend({
                    show: function() {
                        return showHide(this, true);
                    },
                    hide: function() {
                        return showHide(this);
                    },
                    toggle: function(state) {
                        if (typeof state === "boolean") return state ? this.show() : this.hide();
                        return this.each((function() {
                            if (isHiddenWithinTree(this)) jQuery(this).show(); else jQuery(this).hide();
                        }));
                    }
                });
                var rcheckableType = /^(?:checkbox|radio)$/i;
                var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
                var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
                (function() {
                    var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("checked", "checked");
                    input.setAttribute("name", "t");
                    div.appendChild(input);
                    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    div.innerHTML = "<textarea>x</textarea>";
                    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    div.innerHTML = "<option></option>";
                    support.option = !!div.lastChild;
                })();
                var wrapMap = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                if (!support.option) wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
                function getAll(context, tag) {
                    var ret;
                    if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*"); else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*"); else ret = [];
                    if (tag === void 0 || tag && nodeName(context, tag)) return jQuery.merge([ context ], ret);
                    return ret;
                }
                function setGlobalEval(elems, refElements) {
                    var i = 0, l = elems.length;
                    for (;i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                }
                var rhtml = /<|&#?\w+;/;
                function buildFragment(elems, context, scripts, selection, ignored) {
                    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                    for (;i < l; i++) {
                        elem = elems[i];
                        if (elem || elem === 0) if (toType(elem) === "object") jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                            tmp = tmp || fragment.appendChild(context.createElement("div"));
                            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                            j = wrap[0];
                            while (j--) tmp = tmp.lastChild;
                            jQuery.merge(nodes, tmp.childNodes);
                            tmp = fragment.firstChild;
                            tmp.textContent = "";
                        }
                    }
                    fragment.textContent = "";
                    i = 0;
                    while (elem = nodes[i++]) {
                        if (selection && jQuery.inArray(elem, selection) > -1) {
                            if (ignored) ignored.push(elem);
                            continue;
                        }
                        attached = isAttached(elem);
                        tmp = getAll(fragment.appendChild(elem), "script");
                        if (attached) setGlobalEval(tmp);
                        if (scripts) {
                            j = 0;
                            while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
                        }
                    }
                    return fragment;
                }
                var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                function on(elem, types, selector, data, fn, one) {
                    var origFn, type;
                    if (typeof types === "object") {
                        if (typeof selector !== "string") {
                            data = data || selector;
                            selector = void 0;
                        }
                        for (type in types) on(elem, type, selector, data, types[type], one);
                        return elem;
                    }
                    if (data == null && fn == null) {
                        fn = selector;
                        data = selector = void 0;
                    } else if (fn == null) if (typeof selector === "string") {
                        fn = data;
                        data = void 0;
                    } else {
                        fn = data;
                        data = selector;
                        selector = void 0;
                    }
                    if (fn === false) fn = returnFalse; else if (!fn) return elem;
                    if (one === 1) {
                        origFn = fn;
                        fn = function(event) {
                            jQuery().off(event);
                            return origFn.apply(this, arguments);
                        };
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                    }
                    return elem.each((function() {
                        jQuery.event.add(this, types, fn, data, selector);
                    }));
                }
                jQuery.event = {
                    global: {},
                    add: function(elem, types, handler, data, selector) {
                        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                        if (!acceptData(elem)) return;
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        if (selector) jQuery.find.matchesSelector(documentElement, selector);
                        if (!handler.guid) handler.guid = jQuery.guid++;
                        if (!(events = elemData.events)) events = elemData.events = Object.create(null);
                        if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                        };
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) continue;
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            special = jQuery.event.special[type] || {};
                            handleObj = jQuery.extend({
                                type,
                                origType,
                                data,
                                handler,
                                guid: handler.guid,
                                selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                            }
                            if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj); else handlers.push(handleObj);
                            jQuery.event.global[type] = true;
                        }
                    },
                    remove: function(elem, types, handler, selector, mappedTypes) {
                        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                        if (!elemData || !(events = elemData.events)) return;
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) {
                                for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                continue;
                            }
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            origCount = j = handlers.length;
                            while (j--) {
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) handlers.delegateCount--;
                                    if (special.remove) special.remove.call(elem, handleObj);
                                }
                            }
                            if (origCount && !handlers.length) {
                                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                                delete events[type];
                            }
                        }
                        if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
                    },
                    dispatch: function(nativeEvent) {
                        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                        args[0] = event;
                        for (i = 1; i < arguments.length; i++) args[i] = arguments[i];
                        event.delegateTarget = this;
                        if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        i = 0;
                        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                            event.currentTarget = matched.elem;
                            j = 0;
                            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (ret !== void 0) if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                        if (special.postDispatch) special.postDispatch.call(this, event);
                        return event.result;
                    },
                    handlers: function(event, handlers) {
                        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) for (;cur !== this; cur = cur.parentNode || this) if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matchedSelectors[sel] === void 0) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                                if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                            }
                            if (matchedHandlers.length) handlerQueue.push({
                                elem: cur,
                                handlers: matchedHandlers
                            });
                        }
                        cur = this;
                        if (delegateCount < handlers.length) handlerQueue.push({
                            elem: cur,
                            handlers: handlers.slice(delegateCount)
                        });
                        return handlerQueue;
                    },
                    addProp: function(name, hook) {
                        Object.defineProperty(jQuery.Event.prototype, name, {
                            enumerable: true,
                            configurable: true,
                            get: isFunction(hook) ? function() {
                                if (this.originalEvent) return hook(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[name];
                            },
                            set: function(value) {
                                Object.defineProperty(this, name, {
                                    enumerable: true,
                                    configurable: true,
                                    writable: true,
                                    value
                                });
                            }
                        });
                    },
                    fix: function(originalEvent) {
                        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                    },
                    special: {
                        load: {
                            noBubble: true
                        },
                        click: {
                            setup: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click", true);
                                return false;
                            },
                            trigger: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                                return true;
                            },
                            _default: function(event) {
                                var target = event.target;
                                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(event) {
                                if (event.result !== void 0 && event.originalEvent) event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                };
                function leverageNative(el, type, isSetup) {
                    if (!isSetup) {
                        if (dataPriv.get(el, type) === void 0) jQuery.event.add(el, type, returnTrue);
                        return;
                    }
                    dataPriv.set(el, type, false);
                    jQuery.event.add(el, type, {
                        namespace: false,
                        handler: function(event) {
                            var result, saved = dataPriv.get(this, type);
                            if (event.isTrigger & 1 && this[type]) {
                                if (!saved) {
                                    saved = slice.call(arguments);
                                    dataPriv.set(this, type, saved);
                                    this[type]();
                                    result = dataPriv.get(this, type);
                                    dataPriv.set(this, type, false);
                                    if (saved !== result) {
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        return result;
                                    }
                                } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                            } else if (saved) {
                                dataPriv.set(this, type, jQuery.event.trigger(saved[0], saved.slice(1), this));
                                event.stopPropagation();
                                event.isImmediatePropagationStopped = returnTrue;
                            }
                        }
                    });
                }
                jQuery.removeEvent = function(elem, type, handle) {
                    if (elem.removeEventListener) elem.removeEventListener(type, handle);
                };
                jQuery.Event = function(src, props) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
                        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
                        this.currentTarget = src.currentTarget;
                        this.relatedTarget = src.relatedTarget;
                    } else this.type = src;
                    if (props) jQuery.extend(this, props);
                    this.timeStamp = src && src.timeStamp || Date.now();
                    this[jQuery.expando] = true;
                };
                jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: false,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (e && !this.isSimulated) e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopImmediatePropagation();
                        this.stopPropagation();
                    }
                };
                jQuery.each({
                    altKey: true,
                    bubbles: true,
                    cancelable: true,
                    changedTouches: true,
                    ctrlKey: true,
                    detail: true,
                    eventPhase: true,
                    metaKey: true,
                    pageX: true,
                    pageY: true,
                    shiftKey: true,
                    view: true,
                    char: true,
                    code: true,
                    charCode: true,
                    key: true,
                    keyCode: true,
                    button: true,
                    buttons: true,
                    clientX: true,
                    clientY: true,
                    offsetX: true,
                    offsetY: true,
                    pointerId: true,
                    pointerType: true,
                    screenX: true,
                    screenY: true,
                    targetTouches: true,
                    toElement: true,
                    touches: true,
                    which: true
                }, jQuery.event.addProp);
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(type, delegateType) {
                    function focusMappedHandler(nativeEvent) {
                        if (document.documentMode) {
                            var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
                            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
                            event.isSimulated = true;
                            handle(nativeEvent);
                            if (event.target === event.currentTarget) handle(event);
                        } else jQuery.event.simulate(delegateType, nativeEvent.target, jQuery.event.fix(nativeEvent));
                    }
                    jQuery.event.special[type] = {
                        setup: function() {
                            var attaches;
                            leverageNative(this, type, true);
                            if (document.documentMode) {
                                attaches = dataPriv.get(this, delegateType);
                                if (!attaches) this.addEventListener(delegateType, focusMappedHandler);
                                dataPriv.set(this, delegateType, (attaches || 0) + 1);
                            } else return false;
                        },
                        trigger: function() {
                            leverageNative(this, type);
                            return true;
                        },
                        teardown: function() {
                            var attaches;
                            if (document.documentMode) {
                                attaches = dataPriv.get(this, delegateType) - 1;
                                if (!attaches) {
                                    this.removeEventListener(delegateType, focusMappedHandler);
                                    dataPriv.remove(this, delegateType);
                                } else dataPriv.set(this, delegateType, attaches);
                            } else return false;
                        },
                        _default: function(event) {
                            return dataPriv.get(event.target, type);
                        },
                        delegateType
                    };
                    jQuery.event.special[delegateType] = {
                        setup: function() {
                            var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
                            if (!attaches) if (document.documentMode) this.addEventListener(delegateType, focusMappedHandler); else doc.addEventListener(type, focusMappedHandler, true);
                            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
                            if (!attaches) {
                                if (document.documentMode) this.removeEventListener(delegateType, focusMappedHandler); else doc.removeEventListener(type, focusMappedHandler, true);
                                dataPriv.remove(dataHolder, delegateType);
                            } else dataPriv.set(dataHolder, delegateType, attaches);
                        }
                    };
                }));
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function(event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            if (!related || related !== target && !jQuery.contains(target, related)) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                }));
                jQuery.fn.extend({
                    on: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function(types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if (typeof types === "object") {
                            for (type in types) this.off(type, selector, types[type]);
                            return this;
                        }
                        if (selector === false || typeof selector === "function") {
                            fn = selector;
                            selector = void 0;
                        }
                        if (fn === false) fn = returnFalse;
                        return this.each((function() {
                            jQuery.event.remove(this, types, fn, selector);
                        }));
                    }
                });
                var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function manipulationTarget(elem, content) {
                    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
                    return elem;
                }
                function disableScript(elem) {
                    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5); else elem.removeAttribute("type");
                    return elem;
                }
                function cloneCopyEvent(src, dest) {
                    var i, l, type, pdataOld, udataOld, udataCur, events;
                    if (dest.nodeType !== 1) return;
                    if (dataPriv.hasData(src)) {
                        pdataOld = dataPriv.get(src);
                        events = pdataOld.events;
                        if (events) {
                            dataPriv.remove(dest, "handle events");
                            for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                    if (dataUser.hasData(src)) {
                        udataOld = dataUser.access(src);
                        udataCur = jQuery.extend({}, udataOld);
                        dataUser.set(dest, udataCur);
                    }
                }
                function fixInput(src, dest) {
                    var nodeName = dest.nodeName.toLowerCase();
                    if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked; else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
                }
                function domManip(collection, args, callback, ignored) {
                    args = flat(args);
                    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each((function(index) {
                        var self = collection.eq(index);
                        if (valueIsFunction) args[0] = value.call(this, index, self.html());
                        domManip(self, args, callback, ignored);
                    }));
                    if (l) {
                        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                        first = fragment.firstChild;
                        if (fragment.childNodes.length === 1) fragment = first;
                        if (first || ignored) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            for (;i < l; i++) {
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
                                }
                                callback.call(collection[i], node, i);
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                jQuery.map(scripts, restoreScript);
                                for (i = 0; i < hasScripts; i++) {
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) if (node.src && (node.type || "").toLowerCase() !== "module") {
                                        if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                            nonce: node.nonce || node.getAttribute("nonce")
                                        }, doc);
                                    } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                }
                            }
                        }
                    }
                    return collection;
                }
                function remove(elem, selector, keepData) {
                    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                    for (;(node = nodes[i]) != null; i++) {
                        if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
                        if (node.parentNode) {
                            if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                            node.parentNode.removeChild(node);
                        }
                    }
                    return elem;
                }
                jQuery.extend({
                    htmlPrefilter: function(html) {
                        return html;
                    },
                    clone: function(elem, dataAndEvents, deepDataAndEvents) {
                        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for (i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                        }
                        if (dataAndEvents) if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                        } else cloneCopyEvent(elem, clone);
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        return clone;
                    },
                    cleanData: function(elems) {
                        var data, elem, type, special = jQuery.event.special, i = 0;
                        for (;(elem = elems[i]) !== void 0; i++) if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type); else jQuery.removeEvent(elem, type, data.handle);
                                elem[dataPriv.expando] = void 0;
                            }
                            if (elem[dataUser.expando]) elem[dataUser.expando] = void 0;
                        }
                    }
                });
                jQuery.fn.extend({
                    detach: function(selector) {
                        return remove(this, selector, true);
                    },
                    remove: function(selector) {
                        return remove(this, selector);
                    },
                    text: function(value) {
                        return access(this, (function(value) {
                            return value === void 0 ? jQuery.text(this) : this.empty().each((function() {
                                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                            }));
                        }), null, value, arguments.length);
                    },
                    append: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        }));
                    },
                    prepend: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this);
                        }));
                    },
                    after: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        var elem, i = 0;
                        for (;(elem = this[i]) != null; i++) if (elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.textContent = "";
                        }
                        return this;
                    },
                    clone: function(dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                        return this.map((function() {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        }));
                    },
                    html: function(value) {
                        return access(this, (function(value) {
                            var elem = this[0] || {}, i = 0, l = this.length;
                            if (value === void 0 && elem.nodeType === 1) return elem.innerHTML;
                            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                                value = jQuery.htmlPrefilter(value);
                                try {
                                    for (;i < l; i++) {
                                        elem = this[i] || {};
                                        if (elem.nodeType === 1) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                } catch (e) {}
                            }
                            if (elem) this.empty().append(value);
                        }), null, value, arguments.length);
                    },
                    replaceWith: function() {
                        var ignored = [];
                        return domManip(this, arguments, (function(elem) {
                            var parent = this.parentNode;
                            if (jQuery.inArray(this, ignored) < 0) {
                                jQuery.cleanData(getAll(this));
                                if (parent) parent.replaceChild(elem, this);
                            }
                        }), ignored);
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(name, original) {
                    jQuery.fn[name] = function(selector) {
                        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                        for (;i <= last; i++) {
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            push.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                }));
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var rcustomProp = /^--/;
                var getStyles = function(elem) {
                    var view = elem.ownerDocument.defaultView;
                    if (!view || !view.opener) view = window;
                    return view.getComputedStyle(elem);
                };
                var swap = function(elem, options, callback) {
                    var ret, name, old = {};
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.call(elem);
                    for (name in options) elem.style[name] = old[name];
                    return ret;
                };
                var rboxStyle = new RegExp(cssExpand.join("|"), "i");
                (function() {
                    function computeStyleTests() {
                        if (!div) return;
                        container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                        documentElement.appendChild(container).appendChild(div);
                        var divStyle = window.getComputedStyle(div);
                        pixelPositionVal = divStyle.top !== "1%";
                        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
                        div.style.right = "60%";
                        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
                        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
                        div.style.position = "absolute";
                        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
                        documentElement.removeChild(container);
                        div = null;
                    }
                    function roundPixelMeasures(measure) {
                        return Math.round(parseFloat(measure));
                    }
                    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                    if (!div.style) return;
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support.clearCloneStyle = div.style.backgroundClip === "content-box";
                    jQuery.extend(support, {
                        boxSizingReliable: function() {
                            computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelBoxStyles: function() {
                            computeStyleTests();
                            return pixelBoxStylesVal;
                        },
                        pixelPosition: function() {
                            computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginLeft: function() {
                            computeStyleTests();
                            return reliableMarginLeftVal;
                        },
                        scrollboxSize: function() {
                            computeStyleTests();
                            return scrollboxSizeVal;
                        },
                        reliableTrDimensions: function() {
                            var table, tr, trChild, trStyle;
                            if (reliableTrDimensionsVal == null) {
                                table = document.createElement("table");
                                tr = document.createElement("tr");
                                trChild = document.createElement("div");
                                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                                tr.style.height = "1px";
                                trChild.style.height = "9px";
                                trChild.style.display = "block";
                                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                                trStyle = window.getComputedStyle(tr);
                                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                                documentElement.removeChild(table);
                            }
                            return reliableTrDimensionsVal;
                        }
                    });
                })();
                function curCSS(elem, name, computed) {
                    var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
                    computed = computed || getStyles(elem);
                    if (computed) {
                        ret = computed.getPropertyValue(name) || computed[name];
                        if (isCustomProp && ret) ret = ret.replace(rtrimCSS, "$1") || void 0;
                        if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
                        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }
                    return ret !== void 0 ? ret + "" : ret;
                }
                function addGetHookIf(conditionFn, hookFn) {
                    return {
                        get: function() {
                            if (conditionFn()) {
                                delete this.get;
                                return;
                            }
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
                function vendorPropName(name) {
                    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                    while (i--) {
                        name = cssPrefixes[i] + capName;
                        if (name in emptyStyle) return name;
                    }
                }
                function finalPropName(name) {
                    var final = jQuery.cssProps[name] || vendorProps[name];
                    if (final) return final;
                    if (name in emptyStyle) return name;
                    return vendorProps[name] = vendorPropName(name) || name;
                }
                var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function setPositiveNumber(_elem, value, subtract) {
                    var matches = rcssNum.exec(value);
                    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
                }
                function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                    var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
                    if (box === (isBorderBox ? "border" : "content")) return 0;
                    for (;i < 4; i += 2) {
                        if (box === "margin") marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
                        if (!isBorderBox) {
                            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        } else {
                            if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                    if (!isBorderBox && computedVal >= 0) delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
                    return delta + marginDelta;
                }
                function getWidthOrHeight(elem, dimension, extra) {
                    var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                    if (rnumnonpx.test(val)) {
                        if (!extra) return val;
                        val = "auto";
                    }
                    if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
                        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                        valueIsBorderBox = offsetProp in elem;
                        if (valueIsBorderBox) val = elem[offsetProp];
                    }
                    val = parseFloat(val) || 0;
                    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
                }
                jQuery.extend({
                    cssHooks: {
                        opacity: {
                            get: function(elem, computed) {
                                if (computed) {
                                    var ret = curCSS(elem, "opacity");
                                    return ret === "" ? "1" : ret;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: true,
                        aspectRatio: true,
                        borderImageSlice: true,
                        columnCount: true,
                        flexGrow: true,
                        flexShrink: true,
                        fontWeight: true,
                        gridArea: true,
                        gridColumn: true,
                        gridColumnEnd: true,
                        gridColumnStart: true,
                        gridRow: true,
                        gridRowEnd: true,
                        gridRowStart: true,
                        lineHeight: true,
                        opacity: true,
                        order: true,
                        orphans: true,
                        scale: true,
                        widows: true,
                        zIndex: true,
                        zoom: true,
                        fillOpacity: true,
                        floodOpacity: true,
                        stopOpacity: true,
                        strokeMiterlimit: true,
                        strokeOpacity: true
                    },
                    cssProps: {},
                    style: function(elem, name, value, extra) {
                        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (value !== void 0) {
                            type = typeof value;
                            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                                value = adjustCSS(elem, name, ret);
                                type = "number";
                            }
                            if (value == null || value !== value) return;
                            if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) if (isCustomProp) style.setProperty(name, value); else style[name] = value;
                        } else {
                            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) return ret;
                            return style[name];
                        }
                    },
                    css: function(elem, name, extra, styles) {
                        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                        if (val === void 0) val = curCSS(elem, name, styles);
                        if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
                        if (extra === "" || extra) {
                            num = parseFloat(val);
                            return extra === true || isFinite(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each([ "height", "width" ], (function(_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function(elem, computed, extra) {
                            if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, (function() {
                                return getWidthOrHeight(elem, dimension, extra);
                            })) : getWidthOrHeight(elem, dimension, extra);
                        },
                        set: function(elem, value, extra) {
                            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                            if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
                            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                                elem.style[dimension] = value;
                                value = jQuery.css(elem, dimension);
                            }
                            return setPositiveNumber(elem, value, subtract);
                        }
                    };
                }));
                jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, (function(elem, computed) {
                    if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, (function() {
                        return elem.getBoundingClientRect().left;
                    }))) + "px";
                }));
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function(value) {
                            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                            for (;i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        }
                    };
                    if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }));
                jQuery.fn.extend({
                    css: function(name, value) {
                        return access(this, (function(elem, name, value) {
                            var styles, len, map = {}, i = 0;
                            if (Array.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for (;i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                return map;
                            }
                            return value !== void 0 ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                        }), name, value, arguments.length > 1);
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function(elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || jQuery.easing._default;
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function() {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function(percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); else this.pos = eased = percent;
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) this.options.step.call(this.elem, this.now, this);
                        if (hooks && hooks.set) hooks.set(this); else Tween.propHooks._default.set(this);
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function(tween) {
                            var result;
                            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                            result = jQuery.css(tween.elem, tween.prop, "");
                            return !result || result === "auto" ? 0 : result;
                        },
                        set: function(tween) {
                            if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween); else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); else tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                    }
                };
                jQuery.easing = {
                    linear: function(p) {
                        return p;
                    },
                    swing: function(p) {
                        return .5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing"
                };
                jQuery.fx = Tween.prototype.init;
                jQuery.fx.step = {};
                var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
                function schedule() {
                    if (inProgress) {
                        if (document.hidden === false && window.requestAnimationFrame) window.requestAnimationFrame(schedule); else window.setTimeout(schedule, jQuery.fx.interval);
                        jQuery.fx.tick();
                    }
                }
                function createFxNow() {
                    window.setTimeout((function() {
                        fxNow = void 0;
                    }));
                    return fxNow = Date.now();
                }
                function genFx(type, includeWidth) {
                    var which, i = 0, attrs = {
                        height: type
                    };
                    includeWidth = includeWidth ? 1 : 0;
                    for (;i < 4; i += 2 - includeWidth) {
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) attrs.opacity = attrs.width = type;
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                    for (;index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (hooks.unqueued == null) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function() {
                                if (!hooks.unqueued) oldfire();
                            };
                        }
                        hooks.unqueued++;
                        anim.always((function() {
                            anim.always((function() {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                            }));
                        }));
                    }
                    for (prop in props) {
                        value = props[prop];
                        if (rfxtypes.test(value)) {
                            delete props[prop];
                            toggle = toggle || value === "toggle";
                            if (value === (hidden ? "hide" : "show")) if (value === "show" && dataShow && dataShow[prop] !== void 0) hidden = true; else continue;
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        }
                    }
                    propTween = !jQuery.isEmptyObject(props);
                    if (!propTween && jQuery.isEmptyObject(orig)) return;
                    if (isBox && elem.nodeType === 1) {
                        opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                        restoreDisplay = dataShow && dataShow.display;
                        if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
                        display = jQuery.css(elem, "display");
                        if (display === "none") if (restoreDisplay) display = restoreDisplay; else {
                            showHide([ elem ], true);
                            restoreDisplay = elem.style.display || restoreDisplay;
                            display = jQuery.css(elem, "display");
                            showHide([ elem ]);
                        }
                        if (display === "inline" || display === "inline-block" && restoreDisplay != null) if (jQuery.css(elem, "float") === "none") {
                            if (!propTween) {
                                anim.done((function() {
                                    style.display = restoreDisplay;
                                }));
                                if (restoreDisplay == null) {
                                    display = style.display;
                                    restoreDisplay = display === "none" ? "" : display;
                                }
                            }
                            style.display = "inline-block";
                        }
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        anim.always((function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        }));
                    }
                    propTween = false;
                    for (prop in orig) {
                        if (!propTween) {
                            if (dataShow) {
                                if ("hidden" in dataShow) hidden = dataShow.hidden;
                            } else dataShow = dataPriv.access(elem, "fxshow", {
                                display: restoreDisplay
                            });
                            if (toggle) dataShow.hidden = !hidden;
                            if (hidden) showHide([ elem ], true);
                            anim.done((function() {
                                if (!hidden) showHide([ elem ]);
                                dataPriv.remove(elem, "fxshow");
                                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
                            }));
                        }
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = propTween.start;
                            if (hidden) {
                                propTween.end = propTween.start;
                                propTween.start = 0;
                            }
                        }
                    }
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    for (index in props) {
                        name = camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (Array.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            for (index in value) if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        } else specialEasing[name] = easing;
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always((function() {
                        delete tick.elem;
                    })), tick = function() {
                        if (stopped) return false;
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for (;index < length; index++) animation.tweens[index].run(percent);
                        deferred.notifyWith(elem, [ animation, percent, remaining ]);
                        if (percent < 1 && length) return remaining;
                        if (!length) deferred.notifyWith(elem, [ animation, 1, 0 ]);
                        deferred.resolveWith(elem, [ animation ]);
                        return false;
                    }, animation = deferred.promise({
                        elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            stopped = true;
                            for (;index < length; index++) animation.tweens[index].run(1);
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [ animation, 1, 0 ]);
                                deferred.resolveWith(elem, [ animation, gotoEnd ]);
                            } else deferred.rejectWith(elem, [ animation, gotoEnd ]);
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for (;index < length; index++) {
                        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                        if (result) {
                            if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                            return result;
                        }
                    }
                    jQuery.map(props, createTween, animation);
                    if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation;
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [ function(prop, value) {
                            var tween = this.createTween(prop, value);
                            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                            return tween;
                        } ]
                    },
                    tweener: function(props, callback) {
                        if (isFunction(props)) {
                            callback = props;
                            props = [ "*" ];
                        } else props = props.match(rnothtmlwhite);
                        var prop, index = 0, length = props.length;
                        for (;index < length; index++) {
                            prop = props[index];
                            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                            Animation.tweeners[prop].unshift(callback);
                        }
                    },
                    prefilters: [ defaultPrefilter ],
                    prefilter: function(callback, prepend) {
                        if (prepend) Animation.prefilters.unshift(callback); else Animation.prefilters.push(callback);
                    }
                });
                jQuery.speed = function(speed, easing, fn) {
                    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                        complete: fn || !fn && easing || isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !isFunction(easing) && easing
                    };
                    if (jQuery.fx.off) opt.duration = 0; else if (typeof opt.duration !== "number") if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration]; else opt.duration = jQuery.fx.speeds._default;
                    if (opt.queue == null || opt.queue === true) opt.queue = "fx";
                    opt.old = opt.complete;
                    opt.complete = function() {
                        if (isFunction(opt.old)) opt.old.call(this);
                        if (opt.queue) jQuery.dequeue(this, opt.queue);
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function(speed, to, easing, callback) {
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                            opacity: to
                        }, speed, easing, callback);
                    },
                    animate: function(prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            if (empty || dataPriv.get(this, "finish")) anim.stop(true);
                        };
                        doAnimation.finish = doAnimation;
                        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function(type, clearQueue, gotoEnd) {
                        var stopQueue = function(hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if (typeof type !== "string") {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = void 0;
                        }
                        if (clearQueue) this.queue(type || "fx", []);
                        return this.each((function() {
                            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                            if (index) {
                                if (data[index] && data[index].stop) stopQueue(data[index]);
                            } else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                            if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                        }));
                    },
                    finish: function(type) {
                        if (type !== false) type = type || "fx";
                        return this.each((function() {
                            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            data.finish = true;
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) hooks.stop.call(this, true);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                            for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                            delete data.finish;
                        }));
                    }
                });
                jQuery.each([ "toggle", "show", "hide" ], (function(_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                    };
                }));
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(name, props) {
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                }));
                jQuery.timers = [];
                jQuery.fx.tick = function() {
                    var timer, i = 0, timers = jQuery.timers;
                    fxNow = Date.now();
                    for (;i < timers.length; i++) {
                        timer = timers[i];
                        if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                    }
                    if (!timers.length) jQuery.fx.stop();
                    fxNow = void 0;
                };
                jQuery.fx.timer = function(timer) {
                    jQuery.timers.push(timer);
                    jQuery.fx.start();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function() {
                    if (inProgress) return;
                    inProgress = true;
                    schedule();
                };
                jQuery.fx.stop = function() {
                    inProgress = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                };
                jQuery.fn.delay = function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, (function(next, hooks) {
                        var timeout = window.setTimeout(next, time);
                        hooks.stop = function() {
                            window.clearTimeout(timeout);
                        };
                    }));
                };
                (function() {
                    var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
                    input.type = "checkbox";
                    support.checkOn = input.value !== "";
                    support.optSelected = opt.selected;
                    input = document.createElement("input");
                    input.value = "t";
                    input.type = "radio";
                    support.radioValue = input.value === "t";
                })();
                var boolHook, attrHandle = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function(name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function(name) {
                        return this.each((function() {
                            jQuery.removeAttr(this, name);
                        }));
                    }
                });
                jQuery.extend({
                    attr: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (nType === 3 || nType === 8 || nType === 2) return;
                        if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
                        if (value !== void 0) {
                            if (value === null) {
                                jQuery.removeAttr(elem, name);
                                return;
                            }
                            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
                            elem.setAttribute(name, value + "");
                            return value;
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                        ret = jQuery.find.attr(elem, name);
                        return ret == null ? void 0 : ret;
                    },
                    attrHooks: {
                        type: {
                            set: function(elem, value) {
                                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) elem.value = val;
                                    return value;
                                }
                            }
                        }
                    },
                    removeAttr: function(elem, value) {
                        var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && elem.nodeType === 1) while (name = attrNames[i++]) elem.removeAttribute(name);
                    }
                });
                boolHook = {
                    set: function(elem, value, name) {
                        if (value === false) jQuery.removeAttr(elem, name); else elem.setAttribute(name, name);
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(_i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = function(elem, name, isXML) {
                        var ret, handle, lowercaseName = name.toLowerCase();
                        if (!isXML) {
                            handle = attrHandle[lowercaseName];
                            attrHandle[lowercaseName] = ret;
                            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                            attrHandle[lowercaseName] = handle;
                        }
                        return ret;
                    };
                }));
                var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function(name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function(name) {
                        return this.each((function() {
                            delete this[jQuery.propFix[name] || name];
                        }));
                    }
                });
                jQuery.extend({
                    prop: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (nType === 3 || nType === 8 || nType === 2) return;
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (value !== void 0) {
                            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
                            return elem[name] = value;
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                        return elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(elem) {
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                if (tabindex) return parseInt(tabindex, 10);
                                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                                return -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                });
                if (!support.optSelected) jQuery.propHooks.selected = {
                    get: function(elem) {
                        var parent = elem.parentNode;
                        if (parent && parent.parentNode) parent.parentNode.selectedIndex;
                        return null;
                    },
                    set: function(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) parent.parentNode.selectedIndex;
                        }
                    }
                };
                jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    jQuery.propFix[this.toLowerCase()] = this;
                }));
                function stripAndCollapse(value) {
                    var tokens = value.match(rnothtmlwhite) || [];
                    return tokens.join(" ");
                }
                function getClass(elem) {
                    return elem.getAttribute && elem.getAttribute("class") || "";
                }
                function classesToArray(value) {
                    if (Array.isArray(value)) return value;
                    if (typeof value === "string") return value.match(rnothtmlwhite) || [];
                    return [];
                }
                jQuery.fn.extend({
                    addClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        }));
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    removeClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    while (cur.indexOf(" " + className + " ") > -1) cur = cur.replace(" " + className + " ", " ");
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    toggleClass: function(value, stateVal) {
                        var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
                        if (isFunction(value)) return this.each((function(i) {
                            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                        }));
                        if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
                        classNames = classesToArray(value);
                        return this.each((function() {
                            if (isValidValue) {
                                self = jQuery(this);
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (self.hasClass(className)) self.removeClass(className); else self.addClass(className);
                                }
                            } else if (value === void 0 || type === "boolean") {
                                className = getClass(this);
                                if (className) dataPriv.set(this, "__className__", className);
                                if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                            }
                        }));
                    },
                    hasClass: function(selector) {
                        var className, elem, i = 0;
                        className = " " + selector + " ";
                        while (elem = this[i++]) if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
                        return false;
                    }
                });
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function(value) {
                        var hooks, ret, valueIsFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) return ret;
                                ret = elem.value;
                                if (typeof ret === "string") return ret.replace(rreturn, "");
                                return ret == null ? "" : ret;
                            }
                            return;
                        }
                        valueIsFunction = isFunction(value);
                        return this.each((function(i) {
                            var val;
                            if (this.nodeType !== 1) return;
                            if (valueIsFunction) val = value.call(this, i, jQuery(this).val()); else val = value;
                            if (val == null) val = ""; else if (typeof val === "number") val += ""; else if (Array.isArray(val)) val = jQuery.map(val, (function(value) {
                                return value == null ? "" : value + "";
                            }));
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) this.value = val;
                        }));
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return val != null ? val : stripAndCollapse(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function(elem) {
                                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                                if (index < 0) i = max; else i = one ? index : 0;
                                for (;i < max; i++) {
                                    option = options[i];
                                    if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                        value = jQuery(option).val();
                                        if (one) return value;
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function(elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while (i--) {
                                    option = options[i];
                                    if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                                }
                                if (!optionSet) elem.selectedIndex = -1;
                                return values;
                            }
                        }
                    }
                });
                jQuery.each([ "radio", "checkbox" ], (function() {
                    jQuery.valHooks[this] = {
                        set: function(elem, value) {
                            if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                        }
                    };
                    if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    };
                }));
                var location = window.location;
                var nonce = {
                    guid: Date.now()
                };
                var rquery = /\?/;
                jQuery.parseXML = function(data) {
                    var xml, parserErrorElem;
                    if (!data || typeof data !== "string") return null;
                    try {
                        xml = (new window.DOMParser).parseFromString(data, "text/xml");
                    } catch (e) {}
                    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
                    if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, (function(el) {
                        return el.textContent;
                    })).join("\n") : data));
                    return xml;
                };
                var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
                    e.stopPropagation();
                };
                jQuery.extend(jQuery.event, {
                    trigger: function(event, data, elem, onlyHandlers) {
                        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = lastElement = tmp = elem = elem || document;
                        if (elem.nodeType === 3 || elem.nodeType === 8) return;
                        if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                        if (type.indexOf(".") > -1) {
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        event.result = void 0;
                        if (!event.target) event.target = elem;
                        data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
                        special = jQuery.event.special[type] || {};
                        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                            for (;cur; cur = cur.parentNode) {
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        i = 0;
                        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                            lastElement = cur;
                            event.type = i > 1 ? bubbleType : special.bindType || type;
                            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                            if (handle) handle.apply(cur, data);
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (event.result === false) event.preventDefault();
                            }
                        }
                        event.type = type;
                        if (!onlyHandlers && !event.isDefaultPrevented()) if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) elem[ontype] = null;
                            jQuery.event.triggered = type;
                            if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                            elem[type]();
                            if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                            jQuery.event.triggered = void 0;
                            if (tmp) elem[ontype] = tmp;
                        }
                        return event.result;
                    },
                    simulate: function(type, elem, event) {
                        var e = jQuery.extend(new jQuery.Event, event, {
                            type,
                            isSimulated: true
                        });
                        jQuery.event.trigger(e, null, elem);
                    }
                });
                jQuery.fn.extend({
                    trigger: function(type, data) {
                        return this.each((function() {
                            jQuery.event.trigger(type, data, this);
                        }));
                    },
                    triggerHandler: function(type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, true);
                    }
                });
                var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (Array.isArray(obj)) jQuery.each(obj, (function(i, v) {
                        if (traditional || rbracket.test(prefix)) add(prefix, v); else buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                    })); else if (!traditional && toType(obj) === "object") for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
                }
                jQuery.param = function(a, traditional) {
                    var prefix, s = [], add = function(key, valueOrFunction) {
                        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
                    };
                    if (a == null) return "";
                    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, (function() {
                        add(this.name, this.value);
                    })); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                    return s.join("&");
                };
                jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })).filter((function() {
                            var type = this.type;
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                        })).map((function(_i, elem) {
                            var val = jQuery(this).val();
                            if (val == null) return null;
                            if (Array.isArray(val)) return jQuery.map(val, (function(val) {
                                return {
                                    name: elem.name,
                                    value: val.replace(rCRLF, "\r\n")
                                };
                            }));
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        })).get();
                    }
                });
                var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
                originAnchor.href = location.href;
                function addToPrefiltersOrTransports(structure) {
                    return function(dataTypeExpression, func) {
                        if (typeof dataTypeExpression !== "string") {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                        if (isFunction(func)) while (dataType = dataTypes[i++]) if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else (structure[dataType] = structure[dataType] || []).push(func);
                    };
                }
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {}, seekingTransport = structure === transports;
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], (function(_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                        }));
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                function ajaxExtend(target, src) {
                    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                    for (key in src) if (src[key] !== void 0) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                    if (deep) jQuery.extend(true, target, deep);
                    return target;
                }
                function ajaxHandleResponses(s, jqXHR, responses) {
                    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                    while (dataTypes[0] === "*") {
                        dataTypes.shift();
                        if (ct === void 0) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                    if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) firstDataType = type;
                        }
                        finalDataType = finalDataType || firstDataType;
                    }
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                        return responses[finalDataType];
                    }
                }
                function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    while (current) {
                        if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                        if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                        prev = current;
                        current = dataTypes.shift();
                        if (current) if (current === "*") current = prev; else if (prev !== "*" && prev !== current) {
                            conv = converters[prev + " " + current] || converters["* " + current];
                            if (!conv) for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) conv = converters[conv2]; else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (conv !== true) if (conv && s.throws) response = conv(response); else try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }
                jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: rlocalProtocol.test(location.protocol),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": true,
                            "text json": JSON.parse,
                            "text xml": jQuery.parseXML
                        },
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    ajaxSetup: function(target, settings) {
                        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    ajax: function(url, options) {
                        if (typeof url === "object") {
                            options = url;
                            url = void 0;
                        }
                        options = options || {};
                        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                            readyState: 0,
                            getResponseHeader: function(key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return match == null ? null : match.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return completed ? responseHeadersString : null;
                            },
                            setRequestHeader: function(name, value) {
                                if (completed == null) {
                                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            overrideMimeType: function(type) {
                                if (completed == null) s.mimeType = type;
                                return this;
                            },
                            statusCode: function(map) {
                                var code;
                                if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (code in map) statusCode[code] = [ statusCode[code], map[code] ];
                                return this;
                            },
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) transport.abort(finalText);
                                done(0, finalText);
                                return this;
                            }
                        };
                        deferred.promise(jqXHR);
                        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                        s.type = options.method || options.type || s.method || s.type;
                        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                        if (s.crossDomain == null) {
                            urlAnchor = document.createElement("a");
                            try {
                                urlAnchor.href = s.url;
                                urlAnchor.href = urlAnchor.href;
                                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                            } catch (e) {
                                s.crossDomain = true;
                            }
                        }
                        if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        if (completed) return jqXHR;
                        fireGlobals = jQuery.event && s.global;
                        if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
                        s.type = s.type.toUpperCase();
                        s.hasContent = !rnoContent.test(s.type);
                        cacheURL = s.url.replace(rhash, "");
                        if (!s.hasContent) {
                            uncached = s.url.slice(cacheURL.length);
                            if (s.data && (s.processData || typeof s.data === "string")) {
                                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                delete s.data;
                            }
                            if (s.cache === false) {
                                cacheURL = cacheURL.replace(rantiCache, "$1");
                                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                            }
                            s.url = cacheURL + uncached;
                        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                        if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                        for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) return jqXHR.abort();
                        strAbort = "abort";
                        completeDeferred.add(s.complete);
                        jqXHR.done(s.success);
                        jqXHR.fail(s.error);
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        if (!transport) done(-1, "No Transport"); else {
                            jqXHR.readyState = 1;
                            if (fireGlobals) globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                            if (completed) return jqXHR;
                            if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout((function() {
                                jqXHR.abort("timeout");
                            }), s.timeout);
                            try {
                                completed = false;
                                transport.send(requestHeaders, done);
                            } catch (e) {
                                if (completed) throw e;
                                done(-1, e);
                            }
                        }
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            if (completed) return;
                            completed = true;
                            if (timeoutTimer) window.clearTimeout(timeoutTimer);
                            transport = void 0;
                            responseHeadersString = headers || "";
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            isSuccess = status >= 200 && status < 300 || status === 304;
                            if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            if (isSuccess) {
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) jQuery.lastModified[cacheURL] = modified;
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) jQuery.etag[cacheURL] = modified;
                                }
                                if (status === 204 || s.type === "HEAD") statusText = "nocontent"; else if (status === 304) statusText = "notmodified"; else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            } else {
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) status = 0;
                                }
                            }
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            if (isSuccess) deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]); else deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                            jqXHR.statusCode(statusCode);
                            statusCode = void 0;
                            if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                            completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                                if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function(url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function(url, callback) {
                        return jQuery.get(url, void 0, callback, "script");
                    }
                });
                jQuery.each([ "get", "post" ], (function(_i, method) {
                    jQuery[method] = function(url, data, callback, type) {
                        if (isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = void 0;
                        }
                        return jQuery.ajax(jQuery.extend({
                            url,
                            type: method,
                            dataType: type,
                            data,
                            success: callback
                        }, jQuery.isPlainObject(url) && url));
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    var i;
                    for (i in s.headers) if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
                }));
                jQuery._evalUrl = function(url, options, doc) {
                    return jQuery.ajax({
                        url,
                        type: "GET",
                        dataType: "script",
                        cache: true,
                        async: false,
                        global: false,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(response) {
                            jQuery.globalEval(response, options, doc);
                        }
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function(html) {
                        var wrap;
                        if (this[0]) {
                            if (isFunction(html)) html = html.call(this[0]);
                            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) wrap.insertBefore(this[0]);
                            wrap.map((function() {
                                var elem = this;
                                while (elem.firstElementChild) elem = elem.firstElementChild;
                                return elem;
                            })).append(this);
                        }
                        return this;
                    },
                    wrapInner: function(html) {
                        if (isFunction(html)) return this.each((function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        }));
                        return this.each((function() {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) contents.wrapAll(html); else self.append(html);
                        }));
                    },
                    wrap: function(html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each((function(i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        }));
                    },
                    unwrap: function(selector) {
                        this.parent(selector).not("body").each((function() {
                            jQuery(this).replaceWith(this.childNodes);
                        }));
                        return this;
                    }
                });
                jQuery.expr.pseudos.hidden = function(elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                };
                jQuery.expr.pseudos.visible = function(elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                };
                jQuery.ajaxSettings.xhr = function() {
                    try {
                        return new window.XMLHttpRequest;
                    } catch (e) {}
                };
                var xhrSuccessStatus = {
                    0: 200,
                    1223: 204
                }, xhrSupported = jQuery.ajaxSettings.xhr();
                support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
                support.ajax = xhrSupported = !!xhrSupported;
                jQuery.ajaxTransport((function(options) {
                    var callback, errorCallback;
                    if (support.cors || xhrSupported && !options.crossDomain) return {
                        send: function(headers, complete) {
                            var i, xhr = options.xhr();
                            xhr.open(options.type, options.url, options.async, options.username, options.password);
                            if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                            if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                            if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                            for (i in headers) xhr.setRequestHeader(i, headers[i]);
                            callback = function(type) {
                                return function() {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                        if (type === "abort") xhr.abort(); else if (type === "error") if (typeof xhr.status !== "number") complete(0, "error"); else complete(xhr.status, xhr.statusText); else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                };
                            };
                            xhr.onload = callback();
                            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                            if (xhr.onabort !== void 0) xhr.onabort = errorCallback; else xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) window.setTimeout((function() {
                                    if (callback) errorCallback();
                                }));
                            };
                            callback = callback("abort");
                            try {
                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) {
                                if (callback) throw e;
                            }
                        },
                        abort: function() {
                            if (callback) callback();
                        }
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    if (s.crossDomain) s.contents.script = false;
                }));
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                jQuery.ajaxPrefilter("script", (function(s) {
                    if (s.cache === void 0) s.cache = false;
                    if (s.crossDomain) s.type = "GET";
                }));
                jQuery.ajaxTransport("script", (function(s) {
                    if (s.crossDomain || s.scriptAttrs) {
                        var script, callback;
                        return {
                            send: function(_, complete) {
                                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                                    charset: s.scriptCharset,
                                    src: s.url
                                }).on("load error", callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                                });
                                document.head.appendChild(script[0]);
                            },
                            abort: function() {
                                if (callback) callback();
                            }
                        };
                    }
                }));
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                        this[callback] = true;
                        return callback;
                    }
                });
                jQuery.ajaxPrefilter("json jsonp", (function(s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
                    if (jsonProp || s.dataTypes[0] === "jsonp") {
                        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                        if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        s.converters["script json"] = function() {
                            if (!responseContainer) jQuery.error(callbackName + " was not called");
                            return responseContainer[0];
                        };
                        s.dataTypes[0] = "json";
                        overwritten = window[callbackName];
                        window[callbackName] = function() {
                            responseContainer = arguments;
                        };
                        jqXHR.always((function() {
                            if (overwritten === void 0) jQuery(window).removeProp(callbackName); else window[callbackName] = overwritten;
                            if (s[callbackName]) {
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                oldCallbacks.push(callbackName);
                            }
                            if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                            responseContainer = overwritten = void 0;
                        }));
                        return "script";
                    }
                }));
                support.createHTMLDocument = function() {
                    var body = document.implementation.createHTMLDocument("").body;
                    body.innerHTML = "<form></form><form></form>";
                    return body.childNodes.length === 2;
                }();
                jQuery.parseHTML = function(data, context, keepScripts) {
                    if (typeof data !== "string") return [];
                    if (typeof context === "boolean") {
                        keepScripts = context;
                        context = false;
                    }
                    var base, parsed, scripts;
                    if (!context) if (support.createHTMLDocument) {
                        context = document.implementation.createHTMLDocument("");
                        base = context.createElement("base");
                        base.href = document.location.href;
                        context.head.appendChild(base);
                    } else context = document;
                    parsed = rsingleTag.exec(data);
                    scripts = !keepScripts && [];
                    if (parsed) return [ context.createElement(parsed[1]) ];
                    parsed = buildFragment([ data ], context, scripts);
                    if (scripts && scripts.length) jQuery(scripts).remove();
                    return jQuery.merge([], parsed.childNodes);
                };
                jQuery.fn.load = function(url, params, callback) {
                    var selector, type, response, self = this, off = url.indexOf(" ");
                    if (off > -1) {
                        selector = stripAndCollapse(url.slice(off));
                        url = url.slice(0, off);
                    }
                    if (isFunction(params)) {
                        callback = params;
                        params = void 0;
                    } else if (params && typeof params === "object") type = "POST";
                    if (self.length > 0) jQuery.ajax({
                        url,
                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done((function(responseText) {
                        response = arguments;
                        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                    })).always(callback && function(jqXHR, status) {
                        self.each((function() {
                            callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                        }));
                    });
                    return this;
                };
                jQuery.expr.pseudos.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, (function(fn) {
                        return elem === fn.elem;
                    })).length;
                };
                jQuery.offset = {
                    setOffset: function(elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                        if (position === "static") elem.style.position = "relative";
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        } else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (isFunction(options)) options = options.call(elem, i, jQuery.extend({}, curOffset));
                        if (options.top != null) props.top = options.top - curOffset.top + curTop;
                        if (options.left != null) props.left = options.left - curOffset.left + curLeft;
                        if ("using" in options) options.using.call(elem, props); else curElem.css(props);
                    }
                };
                jQuery.fn.extend({
                    offset: function(options) {
                        if (arguments.length) return options === void 0 ? this : this.each((function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        }));
                        var rect, win, elem = this[0];
                        if (!elem) return;
                        if (!elem.getClientRects().length) return {
                            top: 0,
                            left: 0
                        };
                        rect = elem.getBoundingClientRect();
                        win = elem.ownerDocument.defaultView;
                        return {
                            top: rect.top + win.pageYOffset,
                            left: rect.left + win.pageXOffset
                        };
                    },
                    position: function() {
                        if (!this[0]) return;
                        var offsetParent, offset, doc, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        if (jQuery.css(elem, "position") === "fixed") offset = elem.getBoundingClientRect(); else {
                            offset = this.offset();
                            doc = elem.ownerDocument;
                            offsetParent = elem.offsetParent || doc.documentElement;
                            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.parentNode;
                            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                                parentOffset = jQuery(offsetParent).offset();
                                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                            }
                        }
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            var offsetParent = this.offsetParent;
                            while (offsetParent && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.offsetParent;
                            return offsetParent || documentElement;
                        }));
                    }
                });
                jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function(val) {
                        return access(this, (function(elem, method, val) {
                            var win;
                            if (isWindow(elem)) win = elem; else if (elem.nodeType === 9) win = elem.defaultView;
                            if (val === void 0) return win ? win[prop] : elem[method];
                            if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset); else elem[method] = val;
                        }), method, val, arguments.length);
                    };
                }));
                jQuery.each([ "top", "left" ], (function(_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, (function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }));
                }));
                jQuery.each({
                    Height: "height",
                    Width: "width"
                }, (function(name, type) {
                    jQuery.each({
                        padding: "inner" + name,
                        content: type,
                        "": "outer" + name
                    }, (function(defaultExtra, funcName) {
                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                            return access(this, (function(elem, type, value) {
                                var doc;
                                if (isWindow(elem)) return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                                if (elem.nodeType === 9) {
                                    doc = elem.documentElement;
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return value === void 0 ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                            }), type, chainable ? margin : void 0, chainable);
                        };
                    }));
                }));
                jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(_i, type) {
                    jQuery.fn[type] = function(fn) {
                        return this.on(type, fn);
                    };
                }));
                jQuery.fn.extend({
                    bind: function(types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function(types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function(selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function(selector, types, fn) {
                        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    },
                    hover: function(fnOver, fnOut) {
                        return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
                    }
                });
                jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(_i, name) {
                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                }));
                var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                jQuery.proxy = function(fn, context) {
                    var tmp, args, proxy;
                    if (typeof context === "string") {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    }
                    if (!isFunction(fn)) return;
                    args = slice.call(arguments, 2);
                    proxy = function() {
                        return fn.apply(context || this, args.concat(slice.call(arguments)));
                    };
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                };
                jQuery.holdReady = function(hold) {
                    if (hold) jQuery.readyWait++; else jQuery.ready(true);
                };
                jQuery.isArray = Array.isArray;
                jQuery.parseJSON = JSON.parse;
                jQuery.nodeName = nodeName;
                jQuery.isFunction = isFunction;
                jQuery.isWindow = isWindow;
                jQuery.camelCase = camelCase;
                jQuery.type = toType;
                jQuery.now = Date.now;
                jQuery.isNumeric = function(obj) {
                    var type = jQuery.type(obj);
                    return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
                };
                jQuery.trim = function(text) {
                    return text == null ? "" : (text + "").replace(rtrim, "$1");
                };
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return jQuery;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                var _jQuery = window.jQuery, _$ = window.$;
                jQuery.noConflict = function(deep) {
                    if (window.$ === jQuery) window.$ = _$;
                    if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
                    return jQuery;
                };
                if (typeof noGlobal === "undefined") window.jQuery = window.$ = jQuery;
                return jQuery;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        (function(exports) {
            "use strict";
            function makeMap(str, expectsLowerCase) {
                const map = Object.create(null);
                const list = str.split(",");
                for (let i = 0; i < list.length; i++) map[list[i]] = true;
                return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
            }
            const EMPTY_OBJ = Object.freeze({});
            const EMPTY_ARR = Object.freeze([]);
            const NOOP = () => {};
            const NO = () => false;
            const onRE = /^on[^a-z]/;
            const isOn = key => onRE.test(key);
            const isModelListener = key => key.startsWith("onUpdate:");
            const extend = Object.assign;
            const remove = (arr, el) => {
                const i = arr.indexOf(el);
                if (i > -1) arr.splice(i, 1);
            };
            const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
            const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
            const isArray = Array.isArray;
            const isMap = val => toTypeString(val) === "[object Map]";
            const isSet = val => toTypeString(val) === "[object Set]";
            const isDate = val => toTypeString(val) === "[object Date]";
            const isRegExp = val => toTypeString(val) === "[object RegExp]";
            const isFunction = val => typeof val === "function";
            const isString = val => typeof val === "string";
            const isSymbol = val => typeof val === "symbol";
            const isObject = val => val !== null && typeof val === "object";
            const isPromise = val => isObject(val) && isFunction(val.then) && isFunction(val.catch);
            const objectToString = Object.prototype.toString;
            const toTypeString = value => objectToString.call(value);
            const toRawType = value => toTypeString(value).slice(8, -1);
            const isPlainObject = val => toTypeString(val) === "[object Object]";
            const isIntegerKey = key => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
            const isReservedProp = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
            const isBuiltInDirective = makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
            const cacheStringFunction = fn => {
                const cache = Object.create(null);
                return str => {
                    const hit = cache[str];
                    return hit || (cache[str] = fn(str));
                };
            };
            const camelizeRE = /-(\w)/g;
            const camelize = cacheStringFunction((str => str.replace(camelizeRE, ((_, c) => c ? c.toUpperCase() : ""))));
            const hyphenateRE = /\B([A-Z])/g;
            const hyphenate = cacheStringFunction((str => str.replace(hyphenateRE, "-$1").toLowerCase()));
            const capitalize = cacheStringFunction((str => str.charAt(0).toUpperCase() + str.slice(1)));
            const toHandlerKey = cacheStringFunction((str => str ? `on${capitalize(str)}` : ``));
            const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
            const invokeArrayFns = (fns, arg) => {
                for (let i = 0; i < fns.length; i++) fns[i](arg);
            };
            const def = (obj, key, value) => {
                Object.defineProperty(obj, key, {
                    configurable: true,
                    enumerable: false,
                    value
                });
            };
            const looseToNumber = val => {
                const n = parseFloat(val);
                return isNaN(n) ? val : n;
            };
            const toNumber = val => {
                const n = isString(val) ? Number(val) : NaN;
                return isNaN(n) ? val : n;
            };
            let _globalThis;
            const getGlobalThis = () => _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
            const PatchFlagNames = {
                [1]: `TEXT`,
                [2]: `CLASS`,
                [4]: `STYLE`,
                [8]: `PROPS`,
                [16]: `FULL_PROPS`,
                [32]: `HYDRATE_EVENTS`,
                [64]: `STABLE_FRAGMENT`,
                [128]: `KEYED_FRAGMENT`,
                [256]: `UNKEYED_FRAGMENT`,
                [512]: `NEED_PATCH`,
                [1024]: `DYNAMIC_SLOTS`,
                [2048]: `DEV_ROOT_FRAGMENT`,
                [-1]: `HOISTED`,
                [-2]: `BAIL`
            };
            const slotFlagsText = {
                [1]: "STABLE",
                [2]: "DYNAMIC",
                [3]: "FORWARDED"
            };
            const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console";
            const isGloballyWhitelisted = makeMap(GLOBALS_WHITE_LISTED);
            const range = 2;
            function generateCodeFrame(source, start = 0, end = source.length) {
                let lines = source.split(/(\r?\n)/);
                const newlineSequences = lines.filter(((_, idx) => idx % 2 === 1));
                lines = lines.filter(((_, idx) => idx % 2 === 0));
                let count = 0;
                const res = [];
                for (let i = 0; i < lines.length; i++) {
                    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
                    if (count >= start) {
                        for (let j = i - range; j <= i + range || end > count; j++) {
                            if (j < 0 || j >= lines.length) continue;
                            const line = j + 1;
                            res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                            const lineLength = lines[j].length;
                            const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                            if (j === i) {
                                const pad = start - (count - (lineLength + newLineSeqLength));
                                const length = Math.max(1, end > count ? lineLength - pad : end - start);
                                res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                            } else if (j > i) {
                                if (end > count) {
                                    const length = Math.max(Math.min(end - count, lineLength), 1);
                                    res.push(`   |  ` + "^".repeat(length));
                                }
                                count += lineLength + newLineSeqLength;
                            }
                        }
                        break;
                    }
                }
                return res.join("\n");
            }
            function normalizeStyle(value) {
                if (isArray(value)) {
                    const res = {};
                    for (let i = 0; i < value.length; i++) {
                        const item = value[i];
                        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
                        if (normalized) for (const key in normalized) res[key] = normalized[key];
                    }
                    return res;
                } else if (isString(value)) return value; else if (isObject(value)) return value;
            }
            const listDelimiterRE = /;(?![^(]*\))/g;
            const propertyDelimiterRE = /:([^]+)/;
            const styleCommentRE = /\/\*[^]*?\*\//g;
            function parseStringStyle(cssText) {
                const ret = {};
                cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item => {
                    if (item) {
                        const tmp = item.split(propertyDelimiterRE);
                        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
                    }
                }));
                return ret;
            }
            function normalizeClass(value) {
                let res = "";
                if (isString(value)) res = value; else if (isArray(value)) for (let i = 0; i < value.length; i++) {
                    const normalized = normalizeClass(value[i]);
                    if (normalized) res += normalized + " ";
                } else if (isObject(value)) for (const name in value) if (value[name]) res += name + " ";
                return res.trim();
            }
            function normalizeProps(props) {
                if (!props) return null;
                let {class: klass, style} = props;
                if (klass && !isString(klass)) props.class = normalizeClass(klass);
                if (style) props.style = normalizeStyle(style);
                return props;
            }
            const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
            const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
            const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
            const isHTMLTag = makeMap(HTML_TAGS);
            const isSVGTag = makeMap(SVG_TAGS);
            const isVoidTag = makeMap(VOID_TAGS);
            const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
            const isSpecialBooleanAttr = makeMap(specialBooleanAttrs);
            function includeBooleanAttr(value) {
                return !!value || value === "";
            }
            function looseCompareArrays(a, b) {
                if (a.length !== b.length) return false;
                let equal = true;
                for (let i = 0; equal && i < a.length; i++) equal = looseEqual(a[i], b[i]);
                return equal;
            }
            function looseEqual(a, b) {
                if (a === b) return true;
                let aValidType = isDate(a);
                let bValidType = isDate(b);
                if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
                aValidType = isSymbol(a);
                bValidType = isSymbol(b);
                if (aValidType || bValidType) return a === b;
                aValidType = isArray(a);
                bValidType = isArray(b);
                if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
                aValidType = isObject(a);
                bValidType = isObject(b);
                if (aValidType || bValidType) {
                    if (!aValidType || !bValidType) return false;
                    const aKeysCount = Object.keys(a).length;
                    const bKeysCount = Object.keys(b).length;
                    if (aKeysCount !== bKeysCount) return false;
                    for (const key in a) {
                        const aHasKey = a.hasOwnProperty(key);
                        const bHasKey = b.hasOwnProperty(key);
                        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
                    }
                }
                return String(a) === String(b);
            }
            function looseIndexOf(arr, val) {
                return arr.findIndex((item => looseEqual(item, val)));
            }
            const toDisplayString = val => isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
            const replacer = (_key, val) => {
                if (val && val.__v_isRef) return replacer(_key, val.value); else if (isMap(val)) return {
                    [`Map(${val.size})`]: [ ...val.entries() ].reduce(((entries, [key, val2]) => {
                        entries[`${key} =>`] = val2;
                        return entries;
                    }), {})
                }; else if (isSet(val)) return {
                    [`Set(${val.size})`]: [ ...val.values() ]
                }; else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
                return val;
            };
            function warn$1(msg, ...args) {
                console.warn(`[Vue warn] ${msg}`, ...args);
            }
            let activeEffectScope;
            class EffectScope {
                constructor(detached = false) {
                    this.detached = detached;
                    this._active = true;
                    this.effects = [];
                    this.cleanups = [];
                    this.parent = activeEffectScope;
                    if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
                }
                get active() {
                    return this._active;
                }
                run(fn) {
                    if (this._active) {
                        const currentEffectScope = activeEffectScope;
                        try {
                            activeEffectScope = this;
                            return fn();
                        } finally {
                            activeEffectScope = currentEffectScope;
                        }
                    } else warn$1(`cannot run an inactive effect scope.`);
                }
                on() {
                    activeEffectScope = this;
                }
                off() {
                    activeEffectScope = this.parent;
                }
                stop(fromParent) {
                    if (this._active) {
                        let i, l;
                        for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
                        for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
                        if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].stop(true);
                        if (!this.detached && this.parent && !fromParent) {
                            const last = this.parent.scopes.pop();
                            if (last && last !== this) {
                                this.parent.scopes[this.index] = last;
                                last.index = this.index;
                            }
                        }
                        this.parent = void 0;
                        this._active = false;
                    }
                }
            }
            function effectScope(detached) {
                return new EffectScope(detached);
            }
            function recordEffectScope(effect, scope = activeEffectScope) {
                if (scope && scope.active) scope.effects.push(effect);
            }
            function getCurrentScope() {
                return activeEffectScope;
            }
            function onScopeDispose(fn) {
                if (activeEffectScope) activeEffectScope.cleanups.push(fn); else warn$1(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
            }
            const createDep = effects => {
                const dep = new Set(effects);
                dep.w = 0;
                dep.n = 0;
                return dep;
            };
            const wasTracked = dep => (dep.w & trackOpBit) > 0;
            const newTracked = dep => (dep.n & trackOpBit) > 0;
            const initDepMarkers = ({deps}) => {
                if (deps.length) for (let i = 0; i < deps.length; i++) deps[i].w |= trackOpBit;
            };
            const finalizeDepMarkers = effect => {
                const {deps} = effect;
                if (deps.length) {
                    let ptr = 0;
                    for (let i = 0; i < deps.length; i++) {
                        const dep = deps[i];
                        if (wasTracked(dep) && !newTracked(dep)) dep.delete(effect); else deps[ptr++] = dep;
                        dep.w &= ~trackOpBit;
                        dep.n &= ~trackOpBit;
                    }
                    deps.length = ptr;
                }
            };
            const targetMap = new WeakMap;
            let effectTrackDepth = 0;
            let trackOpBit = 1;
            const maxMarkerBits = 30;
            let activeEffect;
            const ITERATE_KEY = Symbol("iterate");
            const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
            class ReactiveEffect {
                constructor(fn, scheduler = null, scope) {
                    this.fn = fn;
                    this.scheduler = scheduler;
                    this.active = true;
                    this.deps = [];
                    this.parent = void 0;
                    recordEffectScope(this, scope);
                }
                run() {
                    if (!this.active) return this.fn();
                    let parent = activeEffect;
                    let lastShouldTrack = shouldTrack;
                    while (parent) {
                        if (parent === this) return;
                        parent = parent.parent;
                    }
                    try {
                        this.parent = activeEffect;
                        activeEffect = this;
                        shouldTrack = true;
                        trackOpBit = 1 << ++effectTrackDepth;
                        if (effectTrackDepth <= maxMarkerBits) initDepMarkers(this); else cleanupEffect(this);
                        return this.fn();
                    } finally {
                        if (effectTrackDepth <= maxMarkerBits) finalizeDepMarkers(this);
                        trackOpBit = 1 << --effectTrackDepth;
                        activeEffect = this.parent;
                        shouldTrack = lastShouldTrack;
                        this.parent = void 0;
                        if (this.deferStop) this.stop();
                    }
                }
                stop() {
                    if (activeEffect === this) this.deferStop = true; else if (this.active) {
                        cleanupEffect(this);
                        if (this.onStop) this.onStop();
                        this.active = false;
                    }
                }
            }
            function cleanupEffect(effect2) {
                const {deps} = effect2;
                if (deps.length) {
                    for (let i = 0; i < deps.length; i++) deps[i].delete(effect2);
                    deps.length = 0;
                }
            }
            function effect(fn, options) {
                if (fn.effect) fn = fn.effect.fn;
                const _effect = new ReactiveEffect(fn);
                if (options) {
                    extend(_effect, options);
                    if (options.scope) recordEffectScope(_effect, options.scope);
                }
                if (!options || !options.lazy) _effect.run();
                const runner = _effect.run.bind(_effect);
                runner.effect = _effect;
                return runner;
            }
            function stop(runner) {
                runner.effect.stop();
            }
            let shouldTrack = true;
            const trackStack = [];
            function pauseTracking() {
                trackStack.push(shouldTrack);
                shouldTrack = false;
            }
            function resetTracking() {
                const last = trackStack.pop();
                shouldTrack = last === void 0 ? true : last;
            }
            function track(target, type, key) {
                if (shouldTrack && activeEffect) {
                    let depsMap = targetMap.get(target);
                    if (!depsMap) targetMap.set(target, depsMap = new Map);
                    let dep = depsMap.get(key);
                    if (!dep) depsMap.set(key, dep = createDep());
                    const eventInfo = {
                        effect: activeEffect,
                        target,
                        type,
                        key
                    };
                    trackEffects(dep, eventInfo);
                }
            }
            function trackEffects(dep, debuggerEventExtraInfo) {
                let shouldTrack2 = false;
                if (effectTrackDepth <= maxMarkerBits) {
                    if (!newTracked(dep)) {
                        dep.n |= trackOpBit;
                        shouldTrack2 = !wasTracked(dep);
                    }
                } else shouldTrack2 = !dep.has(activeEffect);
                if (shouldTrack2) {
                    dep.add(activeEffect);
                    activeEffect.deps.push(dep);
                    if (activeEffect.onTrack) activeEffect.onTrack(extend({
                        effect: activeEffect
                    }, debuggerEventExtraInfo));
                }
            }
            function trigger(target, type, key, newValue, oldValue, oldTarget) {
                const depsMap = targetMap.get(target);
                if (!depsMap) return;
                let deps = [];
                if (type === "clear") deps = [ ...depsMap.values() ]; else if (key === "length" && isArray(target)) {
                    const newLength = Number(newValue);
                    depsMap.forEach(((dep, key2) => {
                        if (key2 === "length" || key2 >= newLength) deps.push(dep);
                    }));
                } else {
                    if (key !== void 0) deps.push(depsMap.get(key));
                    switch (type) {
                      case "add":
                        if (!isArray(target)) {
                            deps.push(depsMap.get(ITERATE_KEY));
                            if (isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                        } else if (isIntegerKey(key)) deps.push(depsMap.get("length"));
                        break;

                      case "delete":
                        if (!isArray(target)) {
                            deps.push(depsMap.get(ITERATE_KEY));
                            if (isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                        }
                        break;

                      case "set":
                        if (isMap(target)) deps.push(depsMap.get(ITERATE_KEY));
                        break;
                    }
                }
                const eventInfo = {
                    target,
                    type,
                    key,
                    newValue,
                    oldValue,
                    oldTarget
                };
                if (deps.length === 1) {
                    if (deps[0]) triggerEffects(deps[0], eventInfo);
                } else {
                    const effects = [];
                    for (const dep of deps) if (dep) effects.push(...dep);
                    triggerEffects(createDep(effects), eventInfo);
                }
            }
            function triggerEffects(dep, debuggerEventExtraInfo) {
                const effects = isArray(dep) ? dep : [ ...dep ];
                for (const effect2 of effects) if (effect2.computed) triggerEffect(effect2, debuggerEventExtraInfo);
                for (const effect2 of effects) if (!effect2.computed) triggerEffect(effect2, debuggerEventExtraInfo);
            }
            function triggerEffect(effect2, debuggerEventExtraInfo) {
                if (effect2 !== activeEffect || effect2.allowRecurse) {
                    if (effect2.onTrigger) effect2.onTrigger(extend({
                        effect: effect2
                    }, debuggerEventExtraInfo));
                    if (effect2.scheduler) effect2.scheduler(); else effect2.run();
                }
            }
            function getDepFromReactive(object, key) {
                var _a;
                return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
            }
            const isNonTrackableKeys = makeMap(`__proto__,__v_isRef,__isVue`);
            const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).filter((key => key !== "arguments" && key !== "caller")).map((key => Symbol[key])).filter(isSymbol));
            const get$1 = createGetter();
            const shallowGet = createGetter(false, true);
            const readonlyGet = createGetter(true);
            const shallowReadonlyGet = createGetter(true, true);
            const arrayInstrumentations = createArrayInstrumentations();
            function createArrayInstrumentations() {
                const instrumentations = {};
                [ "includes", "indexOf", "lastIndexOf" ].forEach((key => {
                    instrumentations[key] = function(...args) {
                        const arr = toRaw(this);
                        for (let i = 0, l = this.length; i < l; i++) track(arr, "get", i + "");
                        const res = arr[key](...args);
                        if (res === -1 || res === false) return arr[key](...args.map(toRaw)); else return res;
                    };
                }));
                [ "push", "pop", "shift", "unshift", "splice" ].forEach((key => {
                    instrumentations[key] = function(...args) {
                        pauseTracking();
                        const res = toRaw(this)[key].apply(this, args);
                        resetTracking();
                        return res;
                    };
                }));
                return instrumentations;
            }
            function hasOwnProperty(key) {
                const obj = toRaw(this);
                track(obj, "has", key);
                return obj.hasOwnProperty(key);
            }
            function createGetter(isReadonly2 = false, shallow = false) {
                return function get2(target, key, receiver) {
                    if (key === "__v_isReactive") return !isReadonly2; else if (key === "__v_isReadonly") return isReadonly2; else if (key === "__v_isShallow") return shallow; else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
                    const targetIsArray = isArray(target);
                    if (!isReadonly2) {
                        if (targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
                        if (key === "hasOwnProperty") return hasOwnProperty;
                    }
                    const res = Reflect.get(target, key, receiver);
                    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
                    if (!isReadonly2) track(target, "get", key);
                    if (shallow) return res;
                    if (isRef(res)) return targetIsArray && isIntegerKey(key) ? res : res.value;
                    if (isObject(res)) return isReadonly2 ? readonly(res) : reactive(res);
                    return res;
                };
            }
            const set$1 = createSetter();
            const shallowSet = createSetter(true);
            function createSetter(shallow = false) {
                return function set2(target, key, value, receiver) {
                    let oldValue = target[key];
                    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) return false;
                    if (!shallow) {
                        if (!isShallow(value) && !isReadonly(value)) {
                            oldValue = toRaw(oldValue);
                            value = toRaw(value);
                        }
                        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                            oldValue.value = value;
                            return true;
                        }
                    }
                    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
                    const result = Reflect.set(target, key, value, receiver);
                    if (target === toRaw(receiver)) if (!hadKey) trigger(target, "add", key, value); else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
                    return result;
                };
            }
            function deleteProperty(target, key) {
                const hadKey = hasOwn(target, key);
                const oldValue = target[key];
                const result = Reflect.deleteProperty(target, key);
                if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
                return result;
            }
            function has$1(target, key) {
                const result = Reflect.has(target, key);
                if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
                return result;
            }
            function ownKeys(target) {
                track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
                return Reflect.ownKeys(target);
            }
            const mutableHandlers = {
                get: get$1,
                set: set$1,
                deleteProperty,
                has: has$1,
                ownKeys
            };
            const readonlyHandlers = {
                get: readonlyGet,
                set(target, key) {
                    warn$1(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
                    return true;
                },
                deleteProperty(target, key) {
                    warn$1(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
                    return true;
                }
            };
            const shallowReactiveHandlers = extend({}, mutableHandlers, {
                get: shallowGet,
                set: shallowSet
            });
            const shallowReadonlyHandlers = extend({}, readonlyHandlers, {
                get: shallowReadonlyGet
            });
            const toShallow = value => value;
            const getProto = v => Reflect.getPrototypeOf(v);
            function get(target, key, isReadonly = false, isShallow = false) {
                target = target["__v_raw"];
                const rawTarget = toRaw(target);
                const rawKey = toRaw(key);
                if (!isReadonly) {
                    if (key !== rawKey) track(rawTarget, "get", key);
                    track(rawTarget, "get", rawKey);
                }
                const {has: has2} = getProto(rawTarget);
                const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
                if (has2.call(rawTarget, key)) return wrap(target.get(key)); else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey)); else if (target !== rawTarget) target.get(key);
            }
            function has(key, isReadonly = false) {
                const target = this["__v_raw"];
                const rawTarget = toRaw(target);
                const rawKey = toRaw(key);
                if (!isReadonly) {
                    if (key !== rawKey) track(rawTarget, "has", key);
                    track(rawTarget, "has", rawKey);
                }
                return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
            }
            function size(target, isReadonly = false) {
                target = target["__v_raw"];
                !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
                return Reflect.get(target, "size", target);
            }
            function add(value) {
                value = toRaw(value);
                const target = toRaw(this);
                const proto = getProto(target);
                const hadKey = proto.has.call(target, value);
                if (!hadKey) {
                    target.add(value);
                    trigger(target, "add", value, value);
                }
                return this;
            }
            function set(key, value) {
                value = toRaw(value);
                const target = toRaw(this);
                const {has: has2, get: get2} = getProto(target);
                let hadKey = has2.call(target, key);
                if (!hadKey) {
                    key = toRaw(key);
                    hadKey = has2.call(target, key);
                } else checkIdentityKeys(target, has2, key);
                const oldValue = get2.call(target, key);
                target.set(key, value);
                if (!hadKey) trigger(target, "add", key, value); else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
                return this;
            }
            function deleteEntry(key) {
                const target = toRaw(this);
                const {has: has2, get: get2} = getProto(target);
                let hadKey = has2.call(target, key);
                if (!hadKey) {
                    key = toRaw(key);
                    hadKey = has2.call(target, key);
                } else checkIdentityKeys(target, has2, key);
                const oldValue = get2 ? get2.call(target, key) : void 0;
                const result = target.delete(key);
                if (hadKey) trigger(target, "delete", key, void 0, oldValue);
                return result;
            }
            function clear() {
                const target = toRaw(this);
                const hadItems = target.size !== 0;
                const oldTarget = isMap(target) ? new Map(target) : new Set(target);
                const result = target.clear();
                if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
                return result;
            }
            function createForEach(isReadonly, isShallow) {
                return function forEach(callback, thisArg) {
                    const observed = this;
                    const target = observed["__v_raw"];
                    const rawTarget = toRaw(target);
                    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
                    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
                    return target.forEach(((value, key) => callback.call(thisArg, wrap(value), wrap(key), observed)));
                };
            }
            function createIterableMethod(method, isReadonly, isShallow) {
                return function(...args) {
                    const target = this["__v_raw"];
                    const rawTarget = toRaw(target);
                    const targetIsMap = isMap(rawTarget);
                    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
                    const isKeyOnly = method === "keys" && targetIsMap;
                    const innerIterator = target[method](...args);
                    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
                    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
                    return {
                        next() {
                            const {value, done} = innerIterator.next();
                            return done ? {
                                value,
                                done
                            } : {
                                value: isPair ? [ wrap(value[0]), wrap(value[1]) ] : wrap(value),
                                done
                            };
                        },
                        [Symbol.iterator]() {
                            return this;
                        }
                    };
                };
            }
            function createReadonlyMethod(type) {
                return function(...args) {
                    {
                        const key = args[0] ? `on key "${args[0]}" ` : ``;
                        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
                    }
                    return type === "delete" ? false : this;
                };
            }
            function createInstrumentations() {
                const mutableInstrumentations2 = {
                    get(key) {
                        return get(this, key);
                    },
                    get size() {
                        return size(this);
                    },
                    has,
                    add,
                    set,
                    delete: deleteEntry,
                    clear,
                    forEach: createForEach(false, false)
                };
                const shallowInstrumentations2 = {
                    get(key) {
                        return get(this, key, false, true);
                    },
                    get size() {
                        return size(this);
                    },
                    has,
                    add,
                    set,
                    delete: deleteEntry,
                    clear,
                    forEach: createForEach(false, true)
                };
                const readonlyInstrumentations2 = {
                    get(key) {
                        return get(this, key, true);
                    },
                    get size() {
                        return size(this, true);
                    },
                    has(key) {
                        return has.call(this, key, true);
                    },
                    add: createReadonlyMethod("add"),
                    set: createReadonlyMethod("set"),
                    delete: createReadonlyMethod("delete"),
                    clear: createReadonlyMethod("clear"),
                    forEach: createForEach(true, false)
                };
                const shallowReadonlyInstrumentations2 = {
                    get(key) {
                        return get(this, key, true, true);
                    },
                    get size() {
                        return size(this, true);
                    },
                    has(key) {
                        return has.call(this, key, true);
                    },
                    add: createReadonlyMethod("add"),
                    set: createReadonlyMethod("set"),
                    delete: createReadonlyMethod("delete"),
                    clear: createReadonlyMethod("clear"),
                    forEach: createForEach(true, true)
                };
                const iteratorMethods = [ "keys", "values", "entries", Symbol.iterator ];
                iteratorMethods.forEach((method => {
                    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
                    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
                    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
                    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
                }));
                return [ mutableInstrumentations2, readonlyInstrumentations2, shallowInstrumentations2, shallowReadonlyInstrumentations2 ];
            }
            const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = createInstrumentations();
            function createInstrumentationGetter(isReadonly, shallow) {
                const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
                return (target, key, receiver) => {
                    if (key === "__v_isReactive") return !isReadonly; else if (key === "__v_isReadonly") return isReadonly; else if (key === "__v_raw") return target;
                    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
                };
            }
            const mutableCollectionHandlers = {
                get: createInstrumentationGetter(false, false)
            };
            const shallowCollectionHandlers = {
                get: createInstrumentationGetter(false, true)
            };
            const readonlyCollectionHandlers = {
                get: createInstrumentationGetter(true, false)
            };
            const shallowReadonlyCollectionHandlers = {
                get: createInstrumentationGetter(true, true)
            };
            function checkIdentityKeys(target, has2, key) {
                const rawKey = toRaw(key);
                if (rawKey !== key && has2.call(target, rawKey)) {
                    const type = toRawType(target);
                    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
                }
            }
            const reactiveMap = new WeakMap;
            const shallowReactiveMap = new WeakMap;
            const readonlyMap = new WeakMap;
            const shallowReadonlyMap = new WeakMap;
            function targetTypeMap(rawType) {
                switch (rawType) {
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
            function getTargetType(value) {
                return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
            }
            function reactive(target) {
                if (isReadonly(target)) return target;
                return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
            }
            function shallowReactive(target) {
                return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
            }
            function readonly(target) {
                return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
            }
            function shallowReadonly(target) {
                return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
            }
            function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
                if (!isObject(target)) {
                    console.warn(`value cannot be made reactive: ${String(target)}`);
                    return target;
                }
                if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
                const existingProxy = proxyMap.get(target);
                if (existingProxy) return existingProxy;
                const targetType = getTargetType(target);
                if (targetType === 0) return target;
                const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
                proxyMap.set(target, proxy);
                return proxy;
            }
            function isReactive(value) {
                if (isReadonly(value)) return isReactive(value["__v_raw"]);
                return !!(value && value["__v_isReactive"]);
            }
            function isReadonly(value) {
                return !!(value && value["__v_isReadonly"]);
            }
            function isShallow(value) {
                return !!(value && value["__v_isShallow"]);
            }
            function isProxy(value) {
                return isReactive(value) || isReadonly(value);
            }
            function toRaw(observed) {
                const raw = observed && observed["__v_raw"];
                return raw ? toRaw(raw) : observed;
            }
            function markRaw(value) {
                def(value, "__v_skip", true);
                return value;
            }
            const toReactive = value => isObject(value) ? reactive(value) : value;
            const toReadonly = value => isObject(value) ? readonly(value) : value;
            function trackRefValue(ref2) {
                if (shouldTrack && activeEffect) {
                    ref2 = toRaw(ref2);
                    trackEffects(ref2.dep || (ref2.dep = createDep()), {
                        target: ref2,
                        type: "get",
                        key: "value"
                    });
                }
            }
            function triggerRefValue(ref2, newVal) {
                ref2 = toRaw(ref2);
                const dep = ref2.dep;
                if (dep) triggerEffects(dep, {
                    target: ref2,
                    type: "set",
                    key: "value",
                    newValue: newVal
                });
            }
            function isRef(r) {
                return !!(r && r.__v_isRef === true);
            }
            function ref(value) {
                return createRef(value, false);
            }
            function shallowRef(value) {
                return createRef(value, true);
            }
            function createRef(rawValue, shallow) {
                if (isRef(rawValue)) return rawValue;
                return new RefImpl(rawValue, shallow);
            }
            class RefImpl {
                constructor(value, __v_isShallow) {
                    this.__v_isShallow = __v_isShallow;
                    this.dep = void 0;
                    this.__v_isRef = true;
                    this._rawValue = __v_isShallow ? value : toRaw(value);
                    this._value = __v_isShallow ? value : toReactive(value);
                }
                get value() {
                    trackRefValue(this);
                    return this._value;
                }
                set value(newVal) {
                    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
                    newVal = useDirectValue ? newVal : toRaw(newVal);
                    if (hasChanged(newVal, this._rawValue)) {
                        this._rawValue = newVal;
                        this._value = useDirectValue ? newVal : toReactive(newVal);
                        triggerRefValue(this, newVal);
                    }
                }
            }
            function triggerRef(ref2) {
                triggerRefValue(ref2, ref2.value);
            }
            function unref(ref2) {
                return isRef(ref2) ? ref2.value : ref2;
            }
            function toValue(source) {
                return isFunction(source) ? source() : unref(source);
            }
            const shallowUnwrapHandlers = {
                get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
                set: (target, key, value, receiver) => {
                    const oldValue = target[key];
                    if (isRef(oldValue) && !isRef(value)) {
                        oldValue.value = value;
                        return true;
                    } else return Reflect.set(target, key, value, receiver);
                }
            };
            function proxyRefs(objectWithRefs) {
                return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
            }
            class CustomRefImpl {
                constructor(factory) {
                    this.dep = void 0;
                    this.__v_isRef = true;
                    const {get, set} = factory((() => trackRefValue(this)), (() => triggerRefValue(this)));
                    this._get = get;
                    this._set = set;
                }
                get value() {
                    return this._get();
                }
                set value(newVal) {
                    this._set(newVal);
                }
            }
            function customRef(factory) {
                return new CustomRefImpl(factory);
            }
            function toRefs(object) {
                if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
                const ret = isArray(object) ? new Array(object.length) : {};
                for (const key in object) ret[key] = propertyToRef(object, key);
                return ret;
            }
            class ObjectRefImpl {
                constructor(_object, _key, _defaultValue) {
                    this._object = _object;
                    this._key = _key;
                    this._defaultValue = _defaultValue;
                    this.__v_isRef = true;
                }
                get value() {
                    const val = this._object[this._key];
                    return val === void 0 ? this._defaultValue : val;
                }
                set value(newVal) {
                    this._object[this._key] = newVal;
                }
                get dep() {
                    return getDepFromReactive(toRaw(this._object), this._key);
                }
            }
            class GetterRefImpl {
                constructor(_getter) {
                    this._getter = _getter;
                    this.__v_isRef = true;
                    this.__v_isReadonly = true;
                }
                get value() {
                    return this._getter();
                }
            }
            function toRef(source, key, defaultValue) {
                if (isRef(source)) return source; else if (isFunction(source)) return new GetterRefImpl(source); else if (isObject(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue); else return ref(source);
            }
            function propertyToRef(source, key, defaultValue) {
                const val = source[key];
                return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
            }
            class ComputedRefImpl {
                constructor(getter, _setter, isReadonly, isSSR) {
                    this._setter = _setter;
                    this.dep = void 0;
                    this.__v_isRef = true;
                    this["__v_isReadonly"] = false;
                    this._dirty = true;
                    this.effect = new ReactiveEffect(getter, (() => {
                        if (!this._dirty) {
                            this._dirty = true;
                            triggerRefValue(this);
                        }
                    }));
                    this.effect.computed = this;
                    this.effect.active = this._cacheable = !isSSR;
                    this["__v_isReadonly"] = isReadonly;
                }
                get value() {
                    const self = toRaw(this);
                    trackRefValue(self);
                    if (self._dirty || !self._cacheable) {
                        self._dirty = false;
                        self._value = self.effect.run();
                    }
                    return self._value;
                }
                set value(newValue) {
                    this._setter(newValue);
                }
            }
            function computed$1(getterOrOptions, debugOptions, isSSR = false) {
                let getter;
                let setter;
                const onlyGetter = isFunction(getterOrOptions);
                if (onlyGetter) {
                    getter = getterOrOptions;
                    setter = () => {
                        console.warn("Write operation failed: computed value is readonly");
                    };
                } else {
                    getter = getterOrOptions.get;
                    setter = getterOrOptions.set;
                }
                const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
                if (debugOptions && !isSSR) {
                    cRef.effect.onTrack = debugOptions.onTrack;
                    cRef.effect.onTrigger = debugOptions.onTrigger;
                }
                return cRef;
            }
            const stack = [];
            function pushWarningContext(vnode) {
                stack.push(vnode);
            }
            function popWarningContext() {
                stack.pop();
            }
            function warn(msg, ...args) {
                pauseTracking();
                const instance = stack.length ? stack[stack.length - 1].component : null;
                const appWarnHandler = instance && instance.appContext.config.warnHandler;
                const trace = getComponentTrace();
                if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11, [ msg + args.join(""), instance && instance.proxy, trace.map((({vnode}) => `at <${formatComponentName(instance, vnode.type)}>`)).join("\n"), trace ]); else {
                    const warnArgs = [ `[Vue warn]: ${msg}`, ...args ];
                    if (trace.length && true) warnArgs.push(`\n  `, ...formatTrace(trace));
                    console.warn(...warnArgs);
                }
                resetTracking();
            }
            function getComponentTrace() {
                let currentVNode = stack[stack.length - 1];
                if (!currentVNode) return [];
                const normalizedStack = [];
                while (currentVNode) {
                    const last = normalizedStack[0];
                    if (last && last.vnode === currentVNode) last.recurseCount++; else normalizedStack.push({
                        vnode: currentVNode,
                        recurseCount: 0
                    });
                    const parentInstance = currentVNode.component && currentVNode.component.parent;
                    currentVNode = parentInstance && parentInstance.vnode;
                }
                return normalizedStack;
            }
            function formatTrace(trace) {
                const logs = [];
                trace.forEach(((entry, i) => {
                    logs.push(...i === 0 ? [] : [ `\n  ` ], ...formatTraceEntry(entry));
                }));
                return logs;
            }
            function formatTraceEntry({vnode, recurseCount}) {
                const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
                const isRoot = vnode.component ? vnode.component.parent == null : false;
                const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
                const close = `>` + postfix;
                return vnode.props ? [ open, ...formatProps(vnode.props), close ] : [ open + close ];
            }
            function formatProps(props) {
                const res = [];
                const keys = Object.keys(props);
                keys.slice(0, 3).forEach((key => {
                    res.push(...formatProp(key, props[key]));
                }));
                if (keys.length > 3) res.push(` ...`);
                return res;
            }
            function formatProp(key, value, raw) {
                if (isString(value)) {
                    value = JSON.stringify(value);
                    return raw ? value : [ `${key}=${value}` ];
                } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [ `${key}=${value}` ]; else if (isRef(value)) {
                    value = formatProp(key, toRaw(value.value), true);
                    return raw ? value : [ `${key}=Ref<`, value, `>` ];
                } else if (isFunction(value)) return [ `${key}=fn${value.name ? `<${value.name}>` : ``}` ]; else {
                    value = toRaw(value);
                    return raw ? value : [ `${key}=`, value ];
                }
            }
            function assertNumber(val, type) {
                if (val === void 0) return; else if (typeof val !== "number") warn(`${type} is not a valid number - got ${JSON.stringify(val)}.`); else if (isNaN(val)) warn(`${type} is NaN - the duration expression might be incorrect.`);
            }
            const ErrorTypeStrings = {
                ["sp"]: "serverPrefetch hook",
                ["bc"]: "beforeCreate hook",
                ["c"]: "created hook",
                ["bm"]: "beforeMount hook",
                ["m"]: "mounted hook",
                ["bu"]: "beforeUpdate hook",
                ["u"]: "updated",
                ["bum"]: "beforeUnmount hook",
                ["um"]: "unmounted hook",
                ["a"]: "activated hook",
                ["da"]: "deactivated hook",
                ["ec"]: "errorCaptured hook",
                ["rtc"]: "renderTracked hook",
                ["rtg"]: "renderTriggered hook",
                [0]: "setup function",
                [1]: "render function",
                [2]: "watcher getter",
                [3]: "watcher callback",
                [4]: "watcher cleanup function",
                [5]: "native event handler",
                [6]: "component event handler",
                [7]: "vnode hook",
                [8]: "directive hook",
                [9]: "transition hook",
                [10]: "app errorHandler",
                [11]: "app warnHandler",
                [12]: "ref function",
                [13]: "async component loader",
                [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
            };
            function callWithErrorHandling(fn, instance, type, args) {
                let res;
                try {
                    res = args ? fn(...args) : fn();
                } catch (err) {
                    handleError(err, instance, type);
                }
                return res;
            }
            function callWithAsyncErrorHandling(fn, instance, type, args) {
                if (isFunction(fn)) {
                    const res = callWithErrorHandling(fn, instance, type, args);
                    if (res && isPromise(res)) res.catch((err => {
                        handleError(err, instance, type);
                    }));
                    return res;
                }
                const values = [];
                for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
                return values;
            }
            function handleError(err, instance, type, throwInDev = true) {
                const contextVNode = instance ? instance.vnode : null;
                if (instance) {
                    let cur = instance.parent;
                    const exposedInstance = instance.proxy;
                    const errorInfo = ErrorTypeStrings[type];
                    while (cur) {
                        const errorCapturedHooks = cur.ec;
                        if (errorCapturedHooks) for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
                        cur = cur.parent;
                    }
                    const appErrorHandler = instance.appContext.config.errorHandler;
                    if (appErrorHandler) {
                        callWithErrorHandling(appErrorHandler, null, 10, [ err, exposedInstance, errorInfo ]);
                        return;
                    }
                }
                logError(err, type, contextVNode, throwInDev);
            }
            function logError(err, type, contextVNode, throwInDev = true) {
                {
                    const info = ErrorTypeStrings[type];
                    if (contextVNode) pushWarningContext(contextVNode);
                    warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
                    if (contextVNode) popWarningContext();
                    if (throwInDev) throw err; else console.error(err);
                }
            }
            let isFlushing = false;
            let isFlushPending = false;
            const queue = [];
            let flushIndex = 0;
            const pendingPostFlushCbs = [];
            let activePostFlushCbs = null;
            let postFlushIndex = 0;
            const resolvedPromise = Promise.resolve();
            let currentFlushPromise = null;
            const RECURSION_LIMIT = 100;
            function nextTick(fn) {
                const p = currentFlushPromise || resolvedPromise;
                return fn ? p.then(this ? fn.bind(this) : fn) : p;
            }
            function findInsertionIndex(id) {
                let start = flushIndex + 1;
                let end = queue.length;
                while (start < end) {
                    const middle = start + end >>> 1;
                    const middleJobId = getId(queue[middle]);
                    middleJobId < id ? start = middle + 1 : end = middle;
                }
                return start;
            }
            function queueJob(job) {
                if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
                    if (job.id == null) queue.push(job); else queue.splice(findInsertionIndex(job.id), 0, job);
                    queueFlush();
                }
            }
            function queueFlush() {
                if (!isFlushing && !isFlushPending) {
                    isFlushPending = true;
                    currentFlushPromise = resolvedPromise.then(flushJobs);
                }
            }
            function invalidateJob(job) {
                const i = queue.indexOf(job);
                if (i > flushIndex) queue.splice(i, 1);
            }
            function queuePostFlushCb(cb) {
                if (!isArray(cb)) {
                    if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) pendingPostFlushCbs.push(cb);
                } else pendingPostFlushCbs.push(...cb);
                queueFlush();
            }
            function flushPreFlushCbs(seen, i = (isFlushing ? flushIndex + 1 : 0)) {
                seen = seen || new Map;
                for (;i < queue.length; i++) {
                    const cb = queue[i];
                    if (cb && cb.pre) {
                        if (checkRecursiveUpdates(seen, cb)) continue;
                        queue.splice(i, 1);
                        i--;
                        cb();
                    }
                }
            }
            function flushPostFlushCbs(seen) {
                if (pendingPostFlushCbs.length) {
                    const deduped = [ ...new Set(pendingPostFlushCbs) ];
                    pendingPostFlushCbs.length = 0;
                    if (activePostFlushCbs) {
                        activePostFlushCbs.push(...deduped);
                        return;
                    }
                    activePostFlushCbs = deduped;
                    seen = seen || new Map;
                    activePostFlushCbs.sort(((a, b) => getId(a) - getId(b)));
                    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
                        if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
                        activePostFlushCbs[postFlushIndex]();
                    }
                    activePostFlushCbs = null;
                    postFlushIndex = 0;
                }
            }
            const getId = job => job.id == null ? 1 / 0 : job.id;
            const comparator = (a, b) => {
                const diff = getId(a) - getId(b);
                if (diff === 0) {
                    if (a.pre && !b.pre) return -1;
                    if (b.pre && !a.pre) return 1;
                }
                return diff;
            };
            function flushJobs(seen) {
                isFlushPending = false;
                isFlushing = true;
                seen = seen || new Map;
                queue.sort(comparator);
                const check = job => checkRecursiveUpdates(seen, job);
                try {
                    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
                        const job = queue[flushIndex];
                        if (job && job.active !== false) {
                            if (check(job)) continue;
                            callWithErrorHandling(job, null, 14);
                        }
                    }
                } finally {
                    flushIndex = 0;
                    queue.length = 0;
                    flushPostFlushCbs(seen);
                    isFlushing = false;
                    currentFlushPromise = null;
                    if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
                }
            }
            function checkRecursiveUpdates(seen, fn) {
                if (!seen.has(fn)) seen.set(fn, 1); else {
                    const count = seen.get(fn);
                    if (count > RECURSION_LIMIT) {
                        const instance = fn.ownerInstance;
                        const componentName = instance && getComponentName(instance.type);
                        warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
                        return true;
                    } else seen.set(fn, count + 1);
                }
            }
            let isHmrUpdating = false;
            const hmrDirtyComponents = new Set;
            getGlobalThis().__VUE_HMR_RUNTIME__ = {
                createRecord: tryWrap(createRecord),
                rerender: tryWrap(rerender),
                reload: tryWrap(reload)
            };
            const map = new Map;
            function registerHMR(instance) {
                const id = instance.type.__hmrId;
                let record = map.get(id);
                if (!record) {
                    createRecord(id, instance.type);
                    record = map.get(id);
                }
                record.instances.add(instance);
            }
            function unregisterHMR(instance) {
                map.get(instance.type.__hmrId).instances.delete(instance);
            }
            function createRecord(id, initialDef) {
                if (map.has(id)) return false;
                map.set(id, {
                    initialDef: normalizeClassComponent(initialDef),
                    instances: new Set
                });
                return true;
            }
            function normalizeClassComponent(component) {
                return isClassComponent(component) ? component.__vccOpts : component;
            }
            function rerender(id, newRender) {
                const record = map.get(id);
                if (!record) return;
                record.initialDef.render = newRender;
                [ ...record.instances ].forEach((instance => {
                    if (newRender) {
                        instance.render = newRender;
                        normalizeClassComponent(instance.type).render = newRender;
                    }
                    instance.renderCache = [];
                    isHmrUpdating = true;
                    instance.update();
                    isHmrUpdating = false;
                }));
            }
            function reload(id, newComp) {
                const record = map.get(id);
                if (!record) return;
                newComp = normalizeClassComponent(newComp);
                updateComponentDef(record.initialDef, newComp);
                const instances = [ ...record.instances ];
                for (const instance of instances) {
                    const oldComp = normalizeClassComponent(instance.type);
                    if (!hmrDirtyComponents.has(oldComp)) {
                        if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
                        hmrDirtyComponents.add(oldComp);
                    }
                    instance.appContext.propsCache.delete(instance.type);
                    instance.appContext.emitsCache.delete(instance.type);
                    instance.appContext.optionsCache.delete(instance.type);
                    if (instance.ceReload) {
                        hmrDirtyComponents.add(oldComp);
                        instance.ceReload(newComp.styles);
                        hmrDirtyComponents.delete(oldComp);
                    } else if (instance.parent) queueJob(instance.parent.update); else if (instance.appContext.reload) instance.appContext.reload(); else if (typeof window !== "undefined") window.location.reload(); else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
                }
                queuePostFlushCb((() => {
                    for (const instance of instances) hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
                }));
            }
            function updateComponentDef(oldComp, newComp) {
                extend(oldComp, newComp);
                for (const key in oldComp) if (key !== "__file" && !(key in newComp)) delete oldComp[key];
            }
            function tryWrap(fn) {
                return (id, arg) => {
                    try {
                        return fn(id, arg);
                    } catch (e) {
                        console.error(e);
                        console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
                    }
                };
            }
            exports.devtools = void 0;
            let buffer = [];
            let devtoolsNotInstalled = false;
            function emit$1(event, ...args) {
                if (exports.devtools) exports.devtools.emit(event, ...args); else if (!devtoolsNotInstalled) buffer.push({
                    event,
                    args
                });
            }
            function setDevtoolsHook(hook, target) {
                var _a, _b;
                exports.devtools = hook;
                if (exports.devtools) {
                    exports.devtools.enabled = true;
                    buffer.forEach((({event, args}) => exports.devtools.emit(event, ...args)));
                    buffer = [];
                } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
                    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
                    replay.push((newHook => {
                        setDevtoolsHook(newHook, target);
                    }));
                    setTimeout((() => {
                        if (!exports.devtools) {
                            target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                            devtoolsNotInstalled = true;
                            buffer = [];
                        }
                    }), 3e3);
                } else {
                    devtoolsNotInstalled = true;
                    buffer = [];
                }
            }
            function devtoolsInitApp(app, version) {
                emit$1("app:init", app, version, {
                    Fragment,
                    Text,
                    Comment,
                    Static
                });
            }
            function devtoolsUnmountApp(app) {
                emit$1("app:unmount", app);
            }
            const devtoolsComponentAdded = createDevtoolsComponentHook("component:added");
            const devtoolsComponentUpdated = createDevtoolsComponentHook("component:updated");
            const _devtoolsComponentRemoved = createDevtoolsComponentHook("component:removed");
            const devtoolsComponentRemoved = component => {
                if (exports.devtools && typeof exports.devtools.cleanupBuffer === "function" && !exports.devtools.cleanupBuffer(component)) _devtoolsComponentRemoved(component);
            };
            function createDevtoolsComponentHook(hook) {
                return component => {
                    emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
                };
            }
            const devtoolsPerfStart = createDevtoolsPerformanceHook("perf:start");
            const devtoolsPerfEnd = createDevtoolsPerformanceHook("perf:end");
            function createDevtoolsPerformanceHook(hook) {
                return (component, type, time) => {
                    emit$1(hook, component.appContext.app, component.uid, component, type, time);
                };
            }
            function devtoolsComponentEmit(component, event, params) {
                emit$1("component:emit", component.appContext.app, component, event, params);
            }
            function emit(instance, event, ...rawArgs) {
                if (instance.isUnmounted) return;
                const props = instance.vnode.props || EMPTY_OBJ;
                {
                    const {emitsOptions, propsOptions: [propsOptions]} = instance;
                    if (emitsOptions) if (!(event in emitsOptions) && true) {
                        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) warn(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
                    } else {
                        const validator = emitsOptions[event];
                        if (isFunction(validator)) {
                            const isValid = validator(...rawArgs);
                            if (!isValid) warn(`Invalid event arguments: event validation failed for event "${event}".`);
                        }
                    }
                }
                let args = rawArgs;
                const isModelListener = event.startsWith("update:");
                const modelArg = isModelListener && event.slice(7);
                if (modelArg && modelArg in props) {
                    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
                    const {number, trim} = props[modifiersKey] || EMPTY_OBJ;
                    if (trim) args = rawArgs.map((a => isString(a) ? a.trim() : a));
                    if (number) args = rawArgs.map(looseToNumber);
                }
                devtoolsComponentEmit(instance, event, args);
                {
                    const lowerCaseEvent = event.toLowerCase();
                    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) warn(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
                }
                let handlerName;
                let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
                if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate(event))];
                if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
                const onceHandler = props[handlerName + `Once`];
                if (onceHandler) {
                    if (!instance.emitted) instance.emitted = {}; else if (instance.emitted[handlerName]) return;
                    instance.emitted[handlerName] = true;
                    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
                }
            }
            function normalizeEmitsOptions(comp, appContext, asMixin = false) {
                const cache = appContext.emitsCache;
                const cached = cache.get(comp);
                if (cached !== void 0) return cached;
                const raw = comp.emits;
                let normalized = {};
                let hasExtends = false;
                if (!isFunction(comp)) {
                    const extendEmits = raw2 => {
                        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
                        if (normalizedFromExtend) {
                            hasExtends = true;
                            extend(normalized, normalizedFromExtend);
                        }
                    };
                    if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
                    if (comp.extends) extendEmits(comp.extends);
                    if (comp.mixins) comp.mixins.forEach(extendEmits);
                }
                if (!raw && !hasExtends) {
                    if (isObject(comp)) cache.set(comp, null);
                    return null;
                }
                if (isArray(raw)) raw.forEach((key => normalized[key] = null)); else extend(normalized, raw);
                if (isObject(comp)) cache.set(comp, normalized);
                return normalized;
            }
            function isEmitListener(options, key) {
                if (!options || !isOn(key)) return false;
                key = key.slice(2).replace(/Once$/, "");
                return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
            }
            let currentRenderingInstance = null;
            let currentScopeId = null;
            function setCurrentRenderingInstance(instance) {
                const prev = currentRenderingInstance;
                currentRenderingInstance = instance;
                currentScopeId = instance && instance.type.__scopeId || null;
                return prev;
            }
            function pushScopeId(id) {
                currentScopeId = id;
            }
            function popScopeId() {
                currentScopeId = null;
            }
            const withScopeId = _id => withCtx;
            function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
                if (!ctx) return fn;
                if (fn._n) return fn;
                const renderFnWithContext = (...args) => {
                    if (renderFnWithContext._d) setBlockTracking(-1);
                    const prevInstance = setCurrentRenderingInstance(ctx);
                    let res;
                    try {
                        res = fn(...args);
                    } finally {
                        setCurrentRenderingInstance(prevInstance);
                        if (renderFnWithContext._d) setBlockTracking(1);
                    }
                    devtoolsComponentUpdated(ctx);
                    return res;
                };
                renderFnWithContext._n = true;
                renderFnWithContext._c = true;
                renderFnWithContext._d = true;
                return renderFnWithContext;
            }
            let accessedAttrs = false;
            function markAttrsAccessed() {
                accessedAttrs = true;
            }
            function renderComponentRoot(instance) {
                const {type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs} = instance;
                let result;
                let fallthroughAttrs;
                const prev = setCurrentRenderingInstance(instance);
                accessedAttrs = false;
                try {
                    if (vnode.shapeFlag & 4) {
                        const proxyToUse = withProxy || proxy;
                        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
                        fallthroughAttrs = attrs;
                    } else {
                        const render2 = Component;
                        if (attrs === props) markAttrsAccessed();
                        result = normalizeVNode(render2.length > 1 ? render2(props, true ? {
                            get attrs() {
                                markAttrsAccessed();
                                return attrs;
                            },
                            slots,
                            emit
                        } : 0) : render2(props, null));
                        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
                    }
                } catch (err) {
                    blockStack.length = 0;
                    handleError(err, instance, 1);
                    result = createVNode(Comment);
                }
                let root = result;
                let setRoot;
                if (result.patchFlag > 0 && result.patchFlag & 2048) [root, setRoot] = getChildRoot(result);
                if (fallthroughAttrs && inheritAttrs !== false) {
                    const keys = Object.keys(fallthroughAttrs);
                    const {shapeFlag} = root;
                    if (keys.length) if (shapeFlag & (1 | 6)) {
                        if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                        root = cloneVNode(root, fallthroughAttrs);
                    } else if (!accessedAttrs && root.type !== Comment) {
                        const allAttrs = Object.keys(attrs);
                        const eventAttrs = [];
                        const extraAttrs = [];
                        for (let i = 0, l = allAttrs.length; i < l; i++) {
                            const key = allAttrs[i];
                            if (isOn(key)) {
                                if (!isModelListener(key)) eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                            } else extraAttrs.push(key);
                        }
                        if (extraAttrs.length) warn(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
                        if (eventAttrs.length) warn(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
                    }
                }
                if (vnode.dirs) {
                    if (!isElementRoot(root)) warn(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
                    root = cloneVNode(root);
                    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
                }
                if (vnode.transition) {
                    if (!isElementRoot(root)) warn(`Component inside <Transition> renders non-element root node that cannot be animated.`);
                    root.transition = vnode.transition;
                }
                if (setRoot) setRoot(root); else result = root;
                setCurrentRenderingInstance(prev);
                return result;
            }
            const getChildRoot = vnode => {
                const rawChildren = vnode.children;
                const dynamicChildren = vnode.dynamicChildren;
                const childRoot = filterSingleRoot(rawChildren);
                if (!childRoot) return [ vnode, void 0 ];
                const index = rawChildren.indexOf(childRoot);
                const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
                const setRoot = updatedRoot => {
                    rawChildren[index] = updatedRoot;
                    if (dynamicChildren) if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot; else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [ ...dynamicChildren, updatedRoot ];
                };
                return [ normalizeVNode(childRoot), setRoot ];
            };
            function filterSingleRoot(children) {
                let singleRoot;
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    if (isVNode(child)) {
                        if (child.type !== Comment || child.children === "v-if") if (singleRoot) return; else singleRoot = child;
                    } else return;
                }
                return singleRoot;
            }
            const getFunctionalFallthrough = attrs => {
                let res;
                for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
                return res;
            };
            const filterModelListeners = (attrs, props) => {
                const res = {};
                for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
                return res;
            };
            const isElementRoot = vnode => vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
            function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
                const {props: prevProps, children: prevChildren, component} = prevVNode;
                const {props: nextProps, children: nextChildren, patchFlag} = nextVNode;
                const emits = component.emitsOptions;
                if ((prevChildren || nextChildren) && isHmrUpdating) return true;
                if (nextVNode.dirs || nextVNode.transition) return true;
                if (optimized && patchFlag >= 0) {
                    if (patchFlag & 1024) return true;
                    if (patchFlag & 16) {
                        if (!prevProps) return !!nextProps;
                        return hasPropsChanged(prevProps, nextProps, emits);
                    } else if (patchFlag & 8) {
                        const dynamicProps = nextVNode.dynamicProps;
                        for (let i = 0; i < dynamicProps.length; i++) {
                            const key = dynamicProps[i];
                            if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
                        }
                    }
                } else {
                    if (prevChildren || nextChildren) if (!nextChildren || !nextChildren.$stable) return true;
                    if (prevProps === nextProps) return false;
                    if (!prevProps) return !!nextProps;
                    if (!nextProps) return true;
                    return hasPropsChanged(prevProps, nextProps, emits);
                }
                return false;
            }
            function hasPropsChanged(prevProps, nextProps, emitsOptions) {
                const nextKeys = Object.keys(nextProps);
                if (nextKeys.length !== Object.keys(prevProps).length) return true;
                for (let i = 0; i < nextKeys.length; i++) {
                    const key = nextKeys[i];
                    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
                }
                return false;
            }
            function updateHOCHostEl({vnode, parent}, el) {
                while (parent && parent.subTree === vnode) {
                    (vnode = parent.vnode).el = el;
                    parent = parent.parent;
                }
            }
            const isSuspense = type => type.__isSuspense;
            const SuspenseImpl = {
                name: "Suspense",
                __isSuspense: true,
                process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
                    if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals); else patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
                },
                hydrate: hydrateSuspense,
                create: createSuspenseBoundary,
                normalize: normalizeSuspenseChildren
            };
            const Suspense = SuspenseImpl;
            function triggerEvent(vnode, name) {
                const eventListener = vnode.props && vnode.props[name];
                if (isFunction(eventListener)) eventListener();
            }
            function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
                const {p: patch, o: {createElement}} = rendererInternals;
                const hiddenContainer = createElement("div");
                const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
                patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
                if (suspense.deps > 0) {
                    triggerEvent(vnode, "onPending");
                    triggerEvent(vnode, "onFallback");
                    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds);
                    setActiveBranch(suspense, vnode.ssFallback);
                } else suspense.resolve(false, true);
            }
            function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, {p: patch, um: unmount, o: {createElement}}) {
                const suspense = n2.suspense = n1.suspense;
                suspense.vnode = n2;
                n2.el = n1.el;
                const newBranch = n2.ssContent;
                const newFallback = n2.ssFallback;
                const {activeBranch, pendingBranch, isInFallback, isHydrating} = suspense;
                if (pendingBranch) {
                    suspense.pendingBranch = newBranch;
                    if (isSameVNodeType(newBranch, pendingBranch)) {
                        patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                        if (suspense.deps <= 0) suspense.resolve(); else if (isInFallback) {
                            patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                            setActiveBranch(suspense, newFallback);
                        }
                    } else {
                        suspense.pendingId++;
                        if (isHydrating) {
                            suspense.isHydrating = false;
                            suspense.activeBranch = pendingBranch;
                        } else unmount(pendingBranch, parentComponent, suspense);
                        suspense.deps = 0;
                        suspense.effects.length = 0;
                        suspense.hiddenContainer = createElement("div");
                        if (isInFallback) {
                            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                            if (suspense.deps <= 0) suspense.resolve(); else {
                                patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                                setActiveBranch(suspense, newFallback);
                            }
                        } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                            suspense.resolve(true);
                        } else {
                            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                            if (suspense.deps <= 0) suspense.resolve();
                        }
                    }
                } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                    patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newBranch);
                } else {
                    triggerEvent(n2, "onPending");
                    suspense.pendingBranch = newBranch;
                    suspense.pendingId++;
                    patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                    if (suspense.deps <= 0) suspense.resolve(); else {
                        const {timeout, pendingId} = suspense;
                        if (timeout > 0) setTimeout((() => {
                            if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
                        }), timeout); else if (timeout === 0) suspense.fallback(newFallback);
                    }
                }
            }
            let hasWarned = false;
            function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
                if (!hasWarned) {
                    hasWarned = true;
                    console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
                }
                const {p: patch, m: move, um: unmount, n: next, o: {parentNode, remove}} = rendererInternals;
                let parentSuspenseId;
                const isSuspensible = isVNodeSuspensible(vnode);
                if (isSuspensible) if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
                    parentSuspenseId = parentSuspense.pendingId;
                    parentSuspense.deps++;
                }
                const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
                assertNumber(timeout, `Suspense timeout`);
                const suspense = {
                    vnode,
                    parent: parentSuspense,
                    parentComponent,
                    isSVG,
                    container,
                    hiddenContainer,
                    anchor,
                    deps: 0,
                    pendingId: 0,
                    timeout: typeof timeout === "number" ? timeout : -1,
                    activeBranch: null,
                    pendingBranch: null,
                    isInFallback: true,
                    isHydrating,
                    isUnmounted: false,
                    effects: [],
                    resolve(resume = false, sync = false) {
                        if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
                        if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
                        const {vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2} = suspense;
                        if (suspense.isHydrating) suspense.isHydrating = false; else if (!resume) {
                            const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                            if (delayEnter) activeBranch.transition.afterLeave = () => {
                                if (pendingId === suspense.pendingId) move(pendingBranch, container2, anchor2, 0);
                            };
                            let {anchor: anchor2} = suspense;
                            if (activeBranch) {
                                anchor2 = next(activeBranch);
                                unmount(activeBranch, parentComponent2, suspense, true);
                            }
                            if (!delayEnter) move(pendingBranch, container2, anchor2, 0);
                        }
                        setActiveBranch(suspense, pendingBranch);
                        suspense.pendingBranch = null;
                        suspense.isInFallback = false;
                        let parent = suspense.parent;
                        let hasUnresolvedAncestor = false;
                        while (parent) {
                            if (parent.pendingBranch) {
                                parent.effects.push(...effects);
                                hasUnresolvedAncestor = true;
                                break;
                            }
                            parent = parent.parent;
                        }
                        if (!hasUnresolvedAncestor) queuePostFlushCb(effects);
                        suspense.effects = [];
                        if (isSuspensible) if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                            parentSuspense.deps--;
                            if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
                        }
                        triggerEvent(vnode2, "onResolve");
                    },
                    fallback(fallbackVNode) {
                        if (!suspense.pendingBranch) return;
                        const {vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2} = suspense;
                        triggerEvent(vnode2, "onFallback");
                        const anchor2 = next(activeBranch);
                        const mountFallback = () => {
                            if (!suspense.isInFallback) return;
                            patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, isSVG2, slotScopeIds, optimized);
                            setActiveBranch(suspense, fallbackVNode);
                        };
                        const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
                        if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
                        suspense.isInFallback = true;
                        unmount(activeBranch, parentComponent2, null, true);
                        if (!delayEnter) mountFallback();
                    },
                    move(container2, anchor2, type) {
                        suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
                        suspense.container = container2;
                    },
                    next() {
                        return suspense.activeBranch && next(suspense.activeBranch);
                    },
                    registerDep(instance, setupRenderEffect) {
                        const isInPendingSuspense = !!suspense.pendingBranch;
                        if (isInPendingSuspense) suspense.deps++;
                        const hydratedEl = instance.vnode.el;
                        instance.asyncDep.catch((err => {
                            handleError(err, instance, 0);
                        })).then((asyncSetupResult => {
                            if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                            instance.asyncResolved = true;
                            const {vnode: vnode2} = instance;
                            pushWarningContext(vnode2);
                            handleSetupResult(instance, asyncSetupResult, false);
                            if (hydratedEl) vnode2.el = hydratedEl;
                            const placeholder = !hydratedEl && instance.subTree.el;
                            setupRenderEffect(instance, vnode2, parentNode(hydratedEl || instance.subTree.el), hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                            if (placeholder) remove(placeholder);
                            updateHOCHostEl(instance, vnode2.el);
                            popWarningContext();
                            if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
                        }));
                    },
                    unmount(parentSuspense2, doRemove) {
                        suspense.isUnmounted = true;
                        if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
                        if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
                    }
                };
                return suspense;
            }
            function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
                const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement("div"), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
                const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
                if (suspense.deps === 0) suspense.resolve(false, true);
                return result;
            }
            function normalizeSuspenseChildren(vnode) {
                const {shapeFlag, children} = vnode;
                const isSlotChildren = shapeFlag & 32;
                vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
                vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
            }
            function normalizeSuspenseSlot(s) {
                let block;
                if (isFunction(s)) {
                    const trackBlock = isBlockTreeEnabled && s._c;
                    if (trackBlock) {
                        s._d = false;
                        openBlock();
                    }
                    s = s();
                    if (trackBlock) {
                        s._d = true;
                        block = currentBlock;
                        closeBlock();
                    }
                }
                if (isArray(s)) {
                    const singleChild = filterSingleRoot(s);
                    if (!singleChild) warn(`<Suspense> slots expect a single root node.`);
                    s = singleChild;
                }
                s = normalizeVNode(s);
                if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c => c !== s));
                return s;
            }
            function queueEffectWithSuspense(fn, suspense) {
                if (suspense && suspense.pendingBranch) if (isArray(fn)) suspense.effects.push(...fn); else suspense.effects.push(fn); else queuePostFlushCb(fn);
            }
            function setActiveBranch(suspense, branch) {
                suspense.activeBranch = branch;
                const {vnode, parentComponent} = suspense;
                const el = vnode.el = branch.el;
                if (parentComponent && parentComponent.subTree === vnode) {
                    parentComponent.vnode.el = el;
                    updateHOCHostEl(parentComponent, el);
                }
            }
            function isVNodeSuspensible(vnode) {
                var _a;
                return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
            }
            function watchEffect(effect, options) {
                return doWatch(effect, null, options);
            }
            function watchPostEffect(effect, options) {
                return doWatch(effect, null, extend({}, options, {
                    flush: "post"
                }));
            }
            function watchSyncEffect(effect, options) {
                return doWatch(effect, null, extend({}, options, {
                    flush: "sync"
                }));
            }
            const INITIAL_WATCHER_VALUE = {};
            function watch(source, cb, options) {
                if (!isFunction(cb)) warn(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
                return doWatch(source, cb, options);
            }
            function doWatch(source, cb, {immediate, deep, flush, onTrack, onTrigger} = EMPTY_OBJ) {
                var _a;
                if (!cb) {
                    if (immediate !== void 0) warn(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
                    if (deep !== void 0) warn(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
                }
                const warnInvalidSource = s => {
                    warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
                };
                const instance = getCurrentScope() === ((_a = currentInstance) == null ? void 0 : _a.scope) ? currentInstance : null;
                let getter;
                let forceTrigger = false;
                let isMultiSource = false;
                if (isRef(source)) {
                    getter = () => source.value;
                    forceTrigger = isShallow(source);
                } else if (isReactive(source)) {
                    getter = () => source;
                    deep = true;
                } else if (isArray(source)) {
                    isMultiSource = true;
                    forceTrigger = source.some((s => isReactive(s) || isShallow(s)));
                    getter = () => source.map((s => {
                        if (isRef(s)) return s.value; else if (isReactive(s)) return traverse(s); else if (isFunction(s)) return callWithErrorHandling(s, instance, 2); else warnInvalidSource(s);
                    }));
                } else if (isFunction(source)) if (cb) getter = () => callWithErrorHandling(source, instance, 2); else getter = () => {
                    if (instance && instance.isUnmounted) return;
                    if (cleanup) cleanup();
                    return callWithAsyncErrorHandling(source, instance, 3, [ onCleanup ]);
                }; else {
                    getter = NOOP;
                    warnInvalidSource(source);
                }
                if (cb && deep) {
                    const baseGetter = getter;
                    getter = () => traverse(baseGetter());
                }
                let cleanup;
                let onCleanup = fn => {
                    cleanup = effect.onStop = () => {
                        callWithErrorHandling(fn, instance, 4);
                    };
                };
                let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
                const job = () => {
                    if (!effect.active) return;
                    if (cb) {
                        const newValue = effect.run();
                        if (deep || forceTrigger || (isMultiSource ? newValue.some(((v, i) => hasChanged(v, oldValue[i]))) : hasChanged(newValue, oldValue)) || false) {
                            if (cleanup) cleanup();
                            callWithAsyncErrorHandling(cb, instance, 3, [ newValue, oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue, onCleanup ]);
                            oldValue = newValue;
                        }
                    } else effect.run();
                };
                job.allowRecurse = !!cb;
                let scheduler;
                if (flush === "sync") scheduler = job; else if (flush === "post") scheduler = () => queuePostRenderEffect(job, instance && instance.suspense); else {
                    job.pre = true;
                    if (instance) job.id = instance.uid;
                    scheduler = () => queueJob(job);
                }
                const effect = new ReactiveEffect(getter, scheduler);
                effect.onTrack = onTrack;
                effect.onTrigger = onTrigger;
                if (cb) if (immediate) job(); else oldValue = effect.run(); else if (flush === "post") queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense); else effect.run();
                const unwatch = () => {
                    effect.stop();
                    if (instance && instance.scope) remove(instance.scope.effects, effect);
                };
                return unwatch;
            }
            function instanceWatch(source, value, options) {
                const publicThis = this.proxy;
                const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
                let cb;
                if (isFunction(value)) cb = value; else {
                    cb = value.handler;
                    options = value;
                }
                const cur = currentInstance;
                setCurrentInstance(this);
                const res = doWatch(getter, cb.bind(publicThis), options);
                if (cur) setCurrentInstance(cur); else unsetCurrentInstance();
                return res;
            }
            function createPathGetter(ctx, path) {
                const segments = path.split(".");
                return () => {
                    let cur = ctx;
                    for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
                    return cur;
                };
            }
            function traverse(value, seen) {
                if (!isObject(value) || value["__v_skip"]) return value;
                seen = seen || new Set;
                if (seen.has(value)) return value;
                seen.add(value);
                if (isRef(value)) traverse(value.value, seen); else if (isArray(value)) for (let i = 0; i < value.length; i++) traverse(value[i], seen); else if (isSet(value) || isMap(value)) value.forEach((v => {
                    traverse(v, seen);
                })); else if (isPlainObject(value)) for (const key in value) traverse(value[key], seen);
                return value;
            }
            function validateDirectiveName(name) {
                if (isBuiltInDirective(name)) warn("Do not use built-in directive ids as custom directive id: " + name);
            }
            function withDirectives(vnode, directives) {
                const internalInstance = currentRenderingInstance;
                if (internalInstance === null) {
                    warn(`withDirectives can only be used inside render functions.`);
                    return vnode;
                }
                const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
                const bindings = vnode.dirs || (vnode.dirs = []);
                for (let i = 0; i < directives.length; i++) {
                    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
                    if (dir) {
                        if (isFunction(dir)) dir = {
                            mounted: dir,
                            updated: dir
                        };
                        if (dir.deep) traverse(value);
                        bindings.push({
                            dir,
                            instance,
                            value,
                            oldValue: void 0,
                            arg,
                            modifiers
                        });
                    }
                }
                return vnode;
            }
            function invokeDirectiveHook(vnode, prevVNode, instance, name) {
                const bindings = vnode.dirs;
                const oldBindings = prevVNode && prevVNode.dirs;
                for (let i = 0; i < bindings.length; i++) {
                    const binding = bindings[i];
                    if (oldBindings) binding.oldValue = oldBindings[i].value;
                    let hook = binding.dir[name];
                    if (hook) {
                        pauseTracking();
                        callWithAsyncErrorHandling(hook, instance, 8, [ vnode.el, binding, vnode, prevVNode ]);
                        resetTracking();
                    }
                }
            }
            function useTransitionState() {
                const state = {
                    isMounted: false,
                    isLeaving: false,
                    isUnmounting: false,
                    leavingVNodes: new Map
                };
                onMounted((() => {
                    state.isMounted = true;
                }));
                onBeforeUnmount((() => {
                    state.isUnmounting = true;
                }));
                return state;
            }
            const TransitionHookValidator = [ Function, Array ];
            const BaseTransitionPropsValidators = {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: TransitionHookValidator,
                onEnter: TransitionHookValidator,
                onAfterEnter: TransitionHookValidator,
                onEnterCancelled: TransitionHookValidator,
                onBeforeLeave: TransitionHookValidator,
                onLeave: TransitionHookValidator,
                onAfterLeave: TransitionHookValidator,
                onLeaveCancelled: TransitionHookValidator,
                onBeforeAppear: TransitionHookValidator,
                onAppear: TransitionHookValidator,
                onAfterAppear: TransitionHookValidator,
                onAppearCancelled: TransitionHookValidator
            };
            const BaseTransitionImpl = {
                name: `BaseTransition`,
                props: BaseTransitionPropsValidators,
                setup(props, {slots}) {
                    const instance = getCurrentInstance();
                    const state = useTransitionState();
                    let prevTransitionKey;
                    return () => {
                        const children = slots.default && getTransitionRawChildren(slots.default(), true);
                        if (!children || !children.length) return;
                        let child = children[0];
                        if (children.length > 1) {
                            let hasFound = false;
                            for (const c of children) if (c.type !== Comment) {
                                if (hasFound) {
                                    warn("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                                    break;
                                }
                                child = c;
                                hasFound = true;
                            }
                        }
                        const rawProps = toRaw(props);
                        const {mode} = rawProps;
                        if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn(`invalid <transition> mode: ${mode}`);
                        if (state.isLeaving) return emptyPlaceholder(child);
                        const innerChild = getKeepAliveChild(child);
                        if (!innerChild) return emptyPlaceholder(child);
                        const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
                        setTransitionHooks(innerChild, enterHooks);
                        const oldChild = instance.subTree;
                        const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
                        let transitionKeyChanged = false;
                        const {getTransitionKey} = innerChild.type;
                        if (getTransitionKey) {
                            const key = getTransitionKey();
                            if (prevTransitionKey === void 0) prevTransitionKey = key; else if (key !== prevTransitionKey) {
                                prevTransitionKey = key;
                                transitionKeyChanged = true;
                            }
                        }
                        if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                            const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                            setTransitionHooks(oldInnerChild, leavingHooks);
                            if (mode === "out-in") {
                                state.isLeaving = true;
                                leavingHooks.afterLeave = () => {
                                    state.isLeaving = false;
                                    if (instance.update.active !== false) instance.update();
                                };
                                return emptyPlaceholder(child);
                            } else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                                const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                                leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                                el._leaveCb = () => {
                                    earlyRemove();
                                    el._leaveCb = void 0;
                                    delete enterHooks.delayedLeave;
                                };
                                enterHooks.delayedLeave = delayedLeave;
                            };
                        }
                        return child;
                    };
                }
            };
            const BaseTransition = BaseTransitionImpl;
            function getLeavingNodesForType(state, vnode) {
                const {leavingVNodes} = state;
                let leavingVNodesCache = leavingVNodes.get(vnode.type);
                if (!leavingVNodesCache) {
                    leavingVNodesCache = Object.create(null);
                    leavingVNodes.set(vnode.type, leavingVNodesCache);
                }
                return leavingVNodesCache;
            }
            function resolveTransitionHooks(vnode, props, state, instance) {
                const {appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled} = props;
                const key = String(vnode.key);
                const leavingVNodesCache = getLeavingNodesForType(state, vnode);
                const callHook = (hook, args) => {
                    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
                };
                const callAsyncHook = (hook, args) => {
                    const done = args[1];
                    callHook(hook, args);
                    if (isArray(hook)) {
                        if (hook.every((hook2 => hook2.length <= 1))) done();
                    } else if (hook.length <= 1) done();
                };
                const hooks = {
                    mode,
                    persisted,
                    beforeEnter(el) {
                        let hook = onBeforeEnter;
                        if (!state.isMounted) if (appear) hook = onBeforeAppear || onBeforeEnter; else return;
                        if (el._leaveCb) el._leaveCb(true);
                        const leavingVNode = leavingVNodesCache[key];
                        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) leavingVNode.el._leaveCb();
                        callHook(hook, [ el ]);
                    },
                    enter(el) {
                        let hook = onEnter;
                        let afterHook = onAfterEnter;
                        let cancelHook = onEnterCancelled;
                        if (!state.isMounted) if (appear) {
                            hook = onAppear || onEnter;
                            afterHook = onAfterAppear || onAfterEnter;
                            cancelHook = onAppearCancelled || onEnterCancelled;
                        } else return;
                        let called = false;
                        const done = el._enterCb = cancelled => {
                            if (called) return;
                            called = true;
                            if (cancelled) callHook(cancelHook, [ el ]); else callHook(afterHook, [ el ]);
                            if (hooks.delayedLeave) hooks.delayedLeave();
                            el._enterCb = void 0;
                        };
                        if (hook) callAsyncHook(hook, [ el, done ]); else done();
                    },
                    leave(el, remove) {
                        const key2 = String(vnode.key);
                        if (el._enterCb) el._enterCb(true);
                        if (state.isUnmounting) return remove();
                        callHook(onBeforeLeave, [ el ]);
                        let called = false;
                        const done = el._leaveCb = cancelled => {
                            if (called) return;
                            called = true;
                            remove();
                            if (cancelled) callHook(onLeaveCancelled, [ el ]); else callHook(onAfterLeave, [ el ]);
                            el._leaveCb = void 0;
                            if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
                        };
                        leavingVNodesCache[key2] = vnode;
                        if (onLeave) callAsyncHook(onLeave, [ el, done ]); else done();
                    },
                    clone(vnode2) {
                        return resolveTransitionHooks(vnode2, props, state, instance);
                    }
                };
                return hooks;
            }
            function emptyPlaceholder(vnode) {
                if (isKeepAlive(vnode)) {
                    vnode = cloneVNode(vnode);
                    vnode.children = null;
                    return vnode;
                }
            }
            function getKeepAliveChild(vnode) {
                return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
            }
            function setTransitionHooks(vnode, hooks) {
                if (vnode.shapeFlag & 6 && vnode.component) setTransitionHooks(vnode.component.subTree, hooks); else if (vnode.shapeFlag & 128) {
                    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
                    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
                } else vnode.transition = hooks;
            }
            function getTransitionRawChildren(children, keepComment = false, parentKey) {
                let ret = [];
                let keyedFragmentCount = 0;
                for (let i = 0; i < children.length; i++) {
                    let child = children[i];
                    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
                    if (child.type === Fragment) {
                        if (child.patchFlag & 128) keyedFragmentCount++;
                        ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
                    } else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, {
                        key
                    }) : child);
                }
                if (keyedFragmentCount > 1) for (let i = 0; i < ret.length; i++) ret[i].patchFlag = -2;
                return ret;
            }
            function defineComponent(options, extraOptions) {
                return isFunction(options) ? (() => extend({
                    name: options.name
                }, extraOptions, {
                    setup: options
                }))() : options;
            }
            const isAsyncWrapper = i => !!i.type.__asyncLoader;
            function defineAsyncComponent(source) {
                if (isFunction(source)) source = {
                    loader: source
                };
                const {loader, loadingComponent, errorComponent, delay = 200, timeout, suspensible = true, onError: userOnError} = source;
                let pendingRequest = null;
                let resolvedComp;
                let retries = 0;
                const retry = () => {
                    retries++;
                    pendingRequest = null;
                    return load();
                };
                const load = () => {
                    let thisRequest;
                    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err => {
                        err = err instanceof Error ? err : new Error(String(err));
                        if (userOnError) return new Promise(((resolve, reject) => {
                            const userRetry = () => resolve(retry());
                            const userFail = () => reject(err);
                            userOnError(err, userRetry, userFail, retries + 1);
                        })); else throw err;
                    })).then((comp => {
                        if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
                        if (!comp) warn(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
                        if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
                        if (comp && !isObject(comp) && !isFunction(comp)) throw new Error(`Invalid async component load result: ${comp}`);
                        resolvedComp = comp;
                        return comp;
                    })));
                };
                return defineComponent({
                    name: "AsyncComponentWrapper",
                    __asyncLoader: load,
                    get __asyncResolved() {
                        return resolvedComp;
                    },
                    setup() {
                        const instance = currentInstance;
                        if (resolvedComp) return () => createInnerComp(resolvedComp, instance);
                        const onError = err => {
                            pendingRequest = null;
                            handleError(err, instance, 13, !errorComponent);
                        };
                        if (suspensible && instance.suspense || false) return load().then((comp => () => createInnerComp(comp, instance))).catch((err => {
                            onError(err);
                            return () => errorComponent ? createVNode(errorComponent, {
                                error: err
                            }) : null;
                        }));
                        const loaded = ref(false);
                        const error = ref();
                        const delayed = ref(!!delay);
                        if (delay) setTimeout((() => {
                            delayed.value = false;
                        }), delay);
                        if (timeout != null) setTimeout((() => {
                            if (!loaded.value && !error.value) {
                                const err = new Error(`Async component timed out after ${timeout}ms.`);
                                onError(err);
                                error.value = err;
                            }
                        }), timeout);
                        load().then((() => {
                            loaded.value = true;
                            if (instance.parent && isKeepAlive(instance.parent.vnode)) queueJob(instance.parent.update);
                        })).catch((err => {
                            onError(err);
                            error.value = err;
                        }));
                        return () => {
                            if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance); else if (error.value && errorComponent) return createVNode(errorComponent, {
                                error: error.value
                            }); else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
                        };
                    }
                });
            }
            function createInnerComp(comp, parent) {
                const {ref: ref2, props, children, ce} = parent.vnode;
                const vnode = createVNode(comp, props, children);
                vnode.ref = ref2;
                vnode.ce = ce;
                delete parent.vnode.ce;
                return vnode;
            }
            const isKeepAlive = vnode => vnode.type.__isKeepAlive;
            const KeepAliveImpl = {
                name: `KeepAlive`,
                __isKeepAlive: true,
                props: {
                    include: [ String, RegExp, Array ],
                    exclude: [ String, RegExp, Array ],
                    max: [ String, Number ]
                },
                setup(props, {slots}) {
                    const instance = getCurrentInstance();
                    const sharedContext = instance.ctx;
                    const cache = new Map;
                    const keys = new Set;
                    let current = null;
                    instance.__v_cache = cache;
                    const parentSuspense = instance.suspense;
                    const {renderer: {p: patch, m: move, um: _unmount, o: {createElement}}} = sharedContext;
                    const storageContainer = createElement("div");
                    sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
                        const instance2 = vnode.component;
                        move(vnode, container, anchor, 0, parentSuspense);
                        patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
                        queuePostRenderEffect((() => {
                            instance2.isDeactivated = false;
                            if (instance2.a) invokeArrayFns(instance2.a);
                            const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                            if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                        }), parentSuspense);
                        devtoolsComponentAdded(instance2);
                    };
                    sharedContext.deactivate = vnode => {
                        const instance2 = vnode.component;
                        move(vnode, storageContainer, null, 1, parentSuspense);
                        queuePostRenderEffect((() => {
                            if (instance2.da) invokeArrayFns(instance2.da);
                            const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                            if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                            instance2.isDeactivated = true;
                        }), parentSuspense);
                        devtoolsComponentAdded(instance2);
                    };
                    function unmount(vnode) {
                        resetShapeFlag(vnode);
                        _unmount(vnode, instance, parentSuspense, true);
                    }
                    function pruneCache(filter) {
                        cache.forEach(((vnode, key) => {
                            const name = getComponentName(vnode.type);
                            if (name && (!filter || !filter(name))) pruneCacheEntry(key);
                        }));
                    }
                    function pruneCacheEntry(key) {
                        const cached = cache.get(key);
                        if (!current || !isSameVNodeType(cached, current)) unmount(cached); else if (current) resetShapeFlag(current);
                        cache.delete(key);
                        keys.delete(key);
                    }
                    watch((() => [ props.include, props.exclude ]), (([include, exclude]) => {
                        include && pruneCache((name => matches(include, name)));
                        exclude && pruneCache((name => !matches(exclude, name)));
                    }), {
                        flush: "post",
                        deep: true
                    });
                    let pendingCacheKey = null;
                    const cacheSubtree = () => {
                        if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance.subTree));
                    };
                    onMounted(cacheSubtree);
                    onUpdated(cacheSubtree);
                    onBeforeUnmount((() => {
                        cache.forEach((cached => {
                            const {subTree, suspense} = instance;
                            const vnode = getInnerChild(subTree);
                            if (cached.type === vnode.type && cached.key === vnode.key) {
                                resetShapeFlag(vnode);
                                const da = vnode.component.da;
                                da && queuePostRenderEffect(da, suspense);
                                return;
                            }
                            unmount(cached);
                        }));
                    }));
                    return () => {
                        pendingCacheKey = null;
                        if (!slots.default) return null;
                        const children = slots.default();
                        const rawVNode = children[0];
                        if (children.length > 1) {
                            warn(`KeepAlive should contain exactly one component child.`);
                            current = null;
                            return children;
                        } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                            current = null;
                            return rawVNode;
                        }
                        let vnode = getInnerChild(rawVNode);
                        const comp = vnode.type;
                        const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
                        const {include, exclude, max} = props;
                        if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                            current = vnode;
                            return rawVNode;
                        }
                        const key = vnode.key == null ? comp : vnode.key;
                        const cachedVNode = cache.get(key);
                        if (vnode.el) {
                            vnode = cloneVNode(vnode);
                            if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
                        }
                        pendingCacheKey = key;
                        if (cachedVNode) {
                            vnode.el = cachedVNode.el;
                            vnode.component = cachedVNode.component;
                            if (vnode.transition) setTransitionHooks(vnode, vnode.transition);
                            vnode.shapeFlag |= 512;
                            keys.delete(key);
                            keys.add(key);
                        } else {
                            keys.add(key);
                            if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
                        }
                        vnode.shapeFlag |= 256;
                        current = vnode;
                        return isSuspense(rawVNode.type) ? rawVNode : vnode;
                    };
                }
            };
            const KeepAlive = KeepAliveImpl;
            function matches(pattern, name) {
                if (isArray(pattern)) return pattern.some((p => matches(p, name))); else if (isString(pattern)) return pattern.split(",").includes(name); else if (isRegExp(pattern)) return pattern.test(name);
                return false;
            }
            function onActivated(hook, target) {
                registerKeepAliveHook(hook, "a", target);
            }
            function onDeactivated(hook, target) {
                registerKeepAliveHook(hook, "da", target);
            }
            function registerKeepAliveHook(hook, type, target = currentInstance) {
                const wrappedHook = hook.__wdc || (hook.__wdc = () => {
                    let current = target;
                    while (current) {
                        if (current.isDeactivated) return;
                        current = current.parent;
                    }
                    return hook();
                });
                injectHook(type, wrappedHook, target);
                if (target) {
                    let current = target.parent;
                    while (current && current.parent) {
                        if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
                        current = current.parent;
                    }
                }
            }
            function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
                const injected = injectHook(type, hook, keepAliveRoot, true);
                onUnmounted((() => {
                    remove(keepAliveRoot[type], injected);
                }), target);
            }
            function resetShapeFlag(vnode) {
                vnode.shapeFlag &= ~256;
                vnode.shapeFlag &= ~512;
            }
            function getInnerChild(vnode) {
                return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
            }
            function injectHook(type, hook, target = currentInstance, prepend = false) {
                if (target) {
                    const hooks = target[type] || (target[type] = []);
                    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
                        if (target.isUnmounted) return;
                        pauseTracking();
                        setCurrentInstance(target);
                        const res = callWithAsyncErrorHandling(hook, target, type, args);
                        unsetCurrentInstance();
                        resetTracking();
                        return res;
                    });
                    if (prepend) hooks.unshift(wrappedHook); else hooks.push(wrappedHook);
                    return wrappedHook;
                } else {
                    const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
                    warn(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + ` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
                }
            }
            const createHook = lifecycle => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, ((...args) => hook(...args)), target);
            const onBeforeMount = createHook("bm");
            const onMounted = createHook("m");
            const onBeforeUpdate = createHook("bu");
            const onUpdated = createHook("u");
            const onBeforeUnmount = createHook("bum");
            const onUnmounted = createHook("um");
            const onServerPrefetch = createHook("sp");
            const onRenderTriggered = createHook("rtg");
            const onRenderTracked = createHook("rtc");
            function onErrorCaptured(hook, target = currentInstance) {
                injectHook("ec", hook, target);
            }
            const COMPONENTS = "components";
            const DIRECTIVES = "directives";
            function resolveComponent(name, maybeSelfReference) {
                return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
            }
            const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
            function resolveDynamicComponent(component) {
                if (isString(component)) return resolveAsset(COMPONENTS, component, false) || component; else return component || NULL_DYNAMIC_COMPONENT;
            }
            function resolveDirective(name) {
                return resolveAsset(DIRECTIVES, name);
            }
            function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
                const instance = currentRenderingInstance || currentInstance;
                if (instance) {
                    const Component = instance.type;
                    if (type === COMPONENTS) {
                        const selfName = getComponentName(Component, false);
                        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) return Component;
                    }
                    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
                    if (!res && maybeSelfReference) return Component;
                    if (warnMissing && !res) {
                        const extra = type === COMPONENTS ? `\n  If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
                        warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
                    }
                    return res;
                } else warn(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
            }
            function resolve(registry, name) {
                return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
            }
            function renderList(source, renderItem, cache, index) {
                let ret;
                const cached = cache && cache[index];
                if (isArray(source) || isString(source)) {
                    ret = new Array(source.length);
                    for (let i = 0, l = source.length; i < l; i++) ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
                } else if (typeof source === "number") {
                    if (!Number.isInteger(source)) warn(`The v-for range expect an integer value but got ${source}.`);
                    ret = new Array(source);
                    for (let i = 0; i < source; i++) ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
                } else if (isObject(source)) if (source[Symbol.iterator]) ret = Array.from(source, ((item, i) => renderItem(item, i, void 0, cached && cached[i]))); else {
                    const keys = Object.keys(source);
                    ret = new Array(keys.length);
                    for (let i = 0, l = keys.length; i < l; i++) {
                        const key = keys[i];
                        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
                    }
                } else ret = [];
                if (cache) cache[index] = ret;
                return ret;
            }
            function createSlots(slots, dynamicSlots) {
                for (let i = 0; i < dynamicSlots.length; i++) {
                    const slot = dynamicSlots[i];
                    if (isArray(slot)) for (let j = 0; j < slot.length; j++) slots[slot[j].name] = slot[j].fn; else if (slot) slots[slot.name] = slot.key ? (...args) => {
                        const res = slot.fn(...args);
                        if (res) res.key = slot.key;
                        return res;
                    } : slot.fn;
                }
                return slots;
            }
            function renderSlot(slots, name, props = {}, fallback, noSlotted) {
                if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
                    if (name !== "default") props.name = name;
                    return createVNode("slot", props, fallback && fallback());
                }
                let slot = slots[name];
                if (slot && slot.length > 1) {
                    warn(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
                    slot = () => [];
                }
                if (slot && slot._c) slot._d = false;
                openBlock();
                const validSlotContent = slot && ensureValidVNode(slot(props));
                const rendered = createBlock(Fragment, {
                    key: props.key || validSlotContent && validSlotContent.key || `_${name}`
                }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
                if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [ rendered.scopeId + "-s" ];
                if (slot && slot._c) slot._d = true;
                return rendered;
            }
            function ensureValidVNode(vnodes) {
                return vnodes.some((child => {
                    if (!isVNode(child)) return true;
                    if (child.type === Comment) return false;
                    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
                    return true;
                })) ? vnodes : null;
            }
            function toHandlers(obj, preserveCaseIfNecessary) {
                const ret = {};
                if (!isObject(obj)) {
                    warn(`v-on with no argument expects an object value.`);
                    return ret;
                }
                for (const key in obj) ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
                return ret;
            }
            const getPublicInstance = i => {
                if (!i) return null;
                if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
                return getPublicInstance(i.parent);
            };
            const publicPropertiesMap = extend(Object.create(null), {
                $: i => i,
                $el: i => i.vnode.el,
                $data: i => i.data,
                $props: i => shallowReadonly(i.props),
                $attrs: i => shallowReadonly(i.attrs),
                $slots: i => shallowReadonly(i.slots),
                $refs: i => shallowReadonly(i.refs),
                $parent: i => getPublicInstance(i.parent),
                $root: i => getPublicInstance(i.root),
                $emit: i => i.emit,
                $options: i => resolveMergedOptions(i),
                $forceUpdate: i => i.f || (i.f = () => queueJob(i.update)),
                $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy)),
                $watch: i => instanceWatch.bind(i)
            });
            const isReservedPrefix = key => key === "_" || key === "$";
            const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
            const PublicInstanceProxyHandlers = {
                get({_: instance}, key) {
                    const {ctx, setupState, data, props, accessCache, type, appContext} = instance;
                    if (key === "__isVue") return true;
                    let normalizedProps;
                    if (key[0] !== "$") {
                        const n = accessCache[key];
                        if (n !== void 0) switch (n) {
                          case 1:
                            return setupState[key];

                          case 2:
                            return data[key];

                          case 4:
                            return ctx[key];

                          case 3:
                            return props[key];
                        } else if (hasSetupBinding(setupState, key)) {
                            accessCache[key] = 1;
                            return setupState[key];
                        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                            accessCache[key] = 2;
                            return data[key];
                        } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
                            accessCache[key] = 3;
                            return props[key];
                        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                            accessCache[key] = 4;
                            return ctx[key];
                        } else if (shouldCacheAccess) accessCache[key] = 0;
                    }
                    const publicGetter = publicPropertiesMap[key];
                    let cssModule, globalProperties;
                    if (publicGetter) {
                        if (key === "$attrs") {
                            track(instance, "get", key);
                            markAttrsAccessed();
                        } else if (key === "$slots") track(instance, "get", key);
                        return publicGetter(instance);
                    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule; else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                        accessCache[key] = 4;
                        return ctx[key];
                    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key]; else if (currentRenderingInstance && (!isString(key) || key.indexOf("__v") !== 0)) if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`); else if (instance === currentRenderingInstance) warn(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
                },
                set({_: instance}, key, value) {
                    const {data, setupState, ctx} = instance;
                    if (hasSetupBinding(setupState, key)) {
                        setupState[key] = value;
                        return true;
                    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
                        warn(`Cannot mutate <script setup> binding "${key}" from Options API.`);
                        return false;
                    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                        data[key] = value;
                        return true;
                    } else if (hasOwn(instance.props, key)) {
                        warn(`Attempting to mutate prop "${key}". Props are readonly.`);
                        return false;
                    }
                    if (key[0] === "$" && key.slice(1) in instance) {
                        warn(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
                        return false;
                    } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
                        enumerable: true,
                        configurable: true,
                        value
                    }); else ctx[key] = value;
                    return true;
                },
                has({_: {data, setupState, accessCache, ctx, appContext, propsOptions}}, key) {
                    let normalizedProps;
                    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
                },
                defineProperty(target, key, descriptor) {
                    if (descriptor.get != null) target._.accessCache[key] = 0; else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
                    return Reflect.defineProperty(target, key, descriptor);
                }
            };
            PublicInstanceProxyHandlers.ownKeys = target => {
                warn(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
                return Reflect.ownKeys(target);
            };
            const RuntimeCompiledPublicInstanceProxyHandlers = extend({}, PublicInstanceProxyHandlers, {
                get(target, key) {
                    if (key === Symbol.unscopables) return;
                    return PublicInstanceProxyHandlers.get(target, key, target);
                },
                has(_, key) {
                    const has = key[0] !== "_" && !isGloballyWhitelisted(key);
                    if (!has && PublicInstanceProxyHandlers.has(_, key)) warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
                    return has;
                }
            });
            function createDevRenderContext(instance) {
                const target = {};
                Object.defineProperty(target, `_`, {
                    configurable: true,
                    enumerable: false,
                    get: () => instance
                });
                Object.keys(publicPropertiesMap).forEach((key => {
                    Object.defineProperty(target, key, {
                        configurable: true,
                        enumerable: false,
                        get: () => publicPropertiesMap[key](instance),
                        set: NOOP
                    });
                }));
                return target;
            }
            function exposePropsOnRenderContext(instance) {
                const {ctx, propsOptions: [propsOptions]} = instance;
                if (propsOptions) Object.keys(propsOptions).forEach((key => {
                    Object.defineProperty(ctx, key, {
                        enumerable: true,
                        configurable: true,
                        get: () => instance.props[key],
                        set: NOOP
                    });
                }));
            }
            function exposeSetupStateOnRenderContext(instance) {
                const {ctx, setupState} = instance;
                Object.keys(toRaw(setupState)).forEach((key => {
                    if (!setupState.__isScriptSetup) {
                        if (isReservedPrefix(key[0])) {
                            warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
                            return;
                        }
                        Object.defineProperty(ctx, key, {
                            enumerable: true,
                            configurable: true,
                            get: () => setupState[key],
                            set: NOOP
                        });
                    }
                }));
            }
            const warnRuntimeUsage = method => warn(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
            function defineProps() {
                warnRuntimeUsage(`defineProps`);
                return null;
            }
            function defineEmits() {
                warnRuntimeUsage(`defineEmits`);
                return null;
            }
            function defineExpose(exposed) {
                warnRuntimeUsage(`defineExpose`);
            }
            function defineOptions(options) {
                warnRuntimeUsage(`defineOptions`);
            }
            function defineSlots() {
                warnRuntimeUsage(`defineSlots`);
                return null;
            }
            function defineModel() {
                warnRuntimeUsage("defineModel");
            }
            function withDefaults(props, defaults) {
                warnRuntimeUsage(`withDefaults`);
                return null;
            }
            function useSlots() {
                return getContext().slots;
            }
            function useAttrs() {
                return getContext().attrs;
            }
            function useModel(props, name, options) {
                const i = getCurrentInstance();
                if (!i) {
                    warn(`useModel() called without active instance.`);
                    return ref();
                }
                if (!i.propsOptions[0][name]) {
                    warn(`useModel() called with prop "${name}" which is not declared.`);
                    return ref();
                }
                if (options && options.local) {
                    const proxy = ref(props[name]);
                    watch((() => props[name]), (v => proxy.value = v));
                    watch(proxy, (value => {
                        if (value !== props[name]) i.emit(`update:${name}`, value);
                    }));
                    return proxy;
                } else return {
                    __v_isRef: true,
                    get value() {
                        return props[name];
                    },
                    set value(value) {
                        i.emit(`update:${name}`, value);
                    }
                };
            }
            function getContext() {
                const i = getCurrentInstance();
                if (!i) warn(`useContext() called without active instance.`);
                return i.setupContext || (i.setupContext = createSetupContext(i));
            }
            function normalizePropsOrEmits(props) {
                return isArray(props) ? props.reduce(((normalized, p) => (normalized[p] = null, 
                normalized)), {}) : props;
            }
            function mergeDefaults(raw, defaults) {
                const props = normalizePropsOrEmits(raw);
                for (const key in defaults) {
                    if (key.startsWith("__skip")) continue;
                    let opt = props[key];
                    if (opt) if (isArray(opt) || isFunction(opt)) opt = props[key] = {
                        type: opt,
                        default: defaults[key]
                    }; else opt.default = defaults[key]; else if (opt === null) opt = props[key] = {
                        default: defaults[key]
                    }; else warn(`props default key "${key}" has no corresponding declaration.`);
                    if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
                }
                return props;
            }
            function mergeModels(a, b) {
                if (!a || !b) return a || b;
                if (isArray(a) && isArray(b)) return a.concat(b);
                return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
            }
            function createPropsRestProxy(props, excludedKeys) {
                const ret = {};
                for (const key in props) if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
                    enumerable: true,
                    get: () => props[key]
                });
                return ret;
            }
            function withAsyncContext(getAwaitable) {
                const ctx = getCurrentInstance();
                if (!ctx) warn(`withAsyncContext called without active current instance. This is likely a bug.`);
                let awaitable = getAwaitable();
                unsetCurrentInstance();
                if (isPromise(awaitable)) awaitable = awaitable.catch((e => {
                    setCurrentInstance(ctx);
                    throw e;
                }));
                return [ awaitable, () => setCurrentInstance(ctx) ];
            }
            function createDuplicateChecker() {
                const cache = Object.create(null);
                return (type, key) => {
                    if (cache[key]) warn(`${type} property "${key}" is already defined in ${cache[key]}.`); else cache[key] = type;
                };
            }
            let shouldCacheAccess = true;
            function applyOptions(instance) {
                const options = resolveMergedOptions(instance);
                const publicThis = instance.proxy;
                const ctx = instance.ctx;
                shouldCacheAccess = false;
                if (options.beforeCreate) callHook$1(options.beforeCreate, instance, "bc");
                const {data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters} = options;
                const checkDuplicateProperties = createDuplicateChecker();
                {
                    const [propsOptions] = instance.propsOptions;
                    if (propsOptions) for (const key in propsOptions) checkDuplicateProperties("Props", key);
                }
                if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
                if (methods) for (const key in methods) {
                    const methodHandler = methods[key];
                    if (isFunction(methodHandler)) {
                        Object.defineProperty(ctx, key, {
                            value: methodHandler.bind(publicThis),
                            configurable: true,
                            enumerable: true,
                            writable: true
                        });
                        checkDuplicateProperties("Methods", key);
                    } else warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
                }
                if (dataOptions) {
                    if (!isFunction(dataOptions)) warn(`The data option must be a function. Plain object usage is no longer supported.`);
                    const data = dataOptions.call(publicThis, publicThis);
                    if (isPromise(data)) warn(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
                    if (!isObject(data)) warn(`data() should return an object.`); else {
                        instance.data = reactive(data);
                        for (const key in data) {
                            checkDuplicateProperties("Data", key);
                            if (!isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
                                configurable: true,
                                enumerable: true,
                                get: () => data[key],
                                set: NOOP
                            });
                        }
                    }
                }
                shouldCacheAccess = true;
                if (computedOptions) for (const key in computedOptions) {
                    const opt = computedOptions[key];
                    const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
                    if (get === NOOP) warn(`Computed property "${key}" has no getter.`);
                    const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
                        warn(`Write operation failed: computed property "${key}" is readonly.`);
                    };
                    const c = computed({
                        get,
                        set
                    });
                    Object.defineProperty(ctx, key, {
                        enumerable: true,
                        configurable: true,
                        get: () => c.value,
                        set: v => c.value = v
                    });
                    checkDuplicateProperties("Computed", key);
                }
                if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
                if (provideOptions) {
                    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
                    Reflect.ownKeys(provides).forEach((key => {
                        provide(key, provides[key]);
                    }));
                }
                if (created) callHook$1(created, instance, "c");
                function registerLifecycleHook(register, hook) {
                    if (isArray(hook)) hook.forEach((_hook => register(_hook.bind(publicThis)))); else if (hook) register(hook.bind(publicThis));
                }
                registerLifecycleHook(onBeforeMount, beforeMount);
                registerLifecycleHook(onMounted, mounted);
                registerLifecycleHook(onBeforeUpdate, beforeUpdate);
                registerLifecycleHook(onUpdated, updated);
                registerLifecycleHook(onActivated, activated);
                registerLifecycleHook(onDeactivated, deactivated);
                registerLifecycleHook(onErrorCaptured, errorCaptured);
                registerLifecycleHook(onRenderTracked, renderTracked);
                registerLifecycleHook(onRenderTriggered, renderTriggered);
                registerLifecycleHook(onBeforeUnmount, beforeUnmount);
                registerLifecycleHook(onUnmounted, unmounted);
                registerLifecycleHook(onServerPrefetch, serverPrefetch);
                if (isArray(expose)) if (expose.length) {
                    const exposed = instance.exposed || (instance.exposed = {});
                    expose.forEach((key => {
                        Object.defineProperty(exposed, key, {
                            get: () => publicThis[key],
                            set: val => publicThis[key] = val
                        });
                    }));
                } else if (!instance.exposed) instance.exposed = {};
                if (render && instance.render === NOOP) instance.render = render;
                if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
                if (components) instance.components = components;
                if (directives) instance.directives = directives;
            }
            function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
                if (isArray(injectOptions)) injectOptions = normalizeInject(injectOptions);
                for (const key in injectOptions) {
                    const opt = injectOptions[key];
                    let injected;
                    if (isObject(opt)) if ("default" in opt) injected = inject(opt.from || key, opt.default, true); else injected = inject(opt.from || key); else injected = inject(opt);
                    if (isRef(injected)) Object.defineProperty(ctx, key, {
                        enumerable: true,
                        configurable: true,
                        get: () => injected.value,
                        set: v => injected.value = v
                    }); else ctx[key] = injected;
                    checkDuplicateProperties("Inject", key);
                }
            }
            function callHook$1(hook, instance, type) {
                callWithAsyncErrorHandling(isArray(hook) ? hook.map((h => h.bind(instance.proxy))) : hook.bind(instance.proxy), instance, type);
            }
            function createWatcher(raw, ctx, publicThis, key) {
                const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
                if (isString(raw)) {
                    const handler = ctx[raw];
                    if (isFunction(handler)) watch(getter, handler); else warn(`Invalid watch handler specified by key "${raw}"`, handler);
                } else if (isFunction(raw)) watch(getter, raw.bind(publicThis)); else if (isObject(raw)) if (isArray(raw)) raw.forEach((r => createWatcher(r, ctx, publicThis, key))); else {
                    const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
                    if (isFunction(handler)) watch(getter, handler, raw); else warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
                } else warn(`Invalid watch option: "${key}"`, raw);
            }
            function resolveMergedOptions(instance) {
                const base = instance.type;
                const {mixins, extends: extendsOptions} = base;
                const {mixins: globalMixins, optionsCache: cache, config: {optionMergeStrategies}} = instance.appContext;
                const cached = cache.get(base);
                let resolved;
                if (cached) resolved = cached; else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base; else {
                    resolved = {};
                    if (globalMixins.length) globalMixins.forEach((m => mergeOptions(resolved, m, optionMergeStrategies, true)));
                    mergeOptions(resolved, base, optionMergeStrategies);
                }
                if (isObject(base)) cache.set(base, resolved);
                return resolved;
            }
            function mergeOptions(to, from, strats, asMixin = false) {
                const {mixins, extends: extendsOptions} = from;
                if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
                if (mixins) mixins.forEach((m => mergeOptions(to, m, strats, true)));
                for (const key in from) if (asMixin && key === "expose") warn(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`); else {
                    const strat = internalOptionMergeStrats[key] || strats && strats[key];
                    to[key] = strat ? strat(to[key], from[key]) : from[key];
                }
                return to;
            }
            const internalOptionMergeStrats = {
                data: mergeDataFn,
                props: mergeEmitsOrPropsOptions,
                emits: mergeEmitsOrPropsOptions,
                methods: mergeObjectOptions,
                computed: mergeObjectOptions,
                beforeCreate: mergeAsArray$1,
                created: mergeAsArray$1,
                beforeMount: mergeAsArray$1,
                mounted: mergeAsArray$1,
                beforeUpdate: mergeAsArray$1,
                updated: mergeAsArray$1,
                beforeDestroy: mergeAsArray$1,
                beforeUnmount: mergeAsArray$1,
                destroyed: mergeAsArray$1,
                unmounted: mergeAsArray$1,
                activated: mergeAsArray$1,
                deactivated: mergeAsArray$1,
                errorCaptured: mergeAsArray$1,
                serverPrefetch: mergeAsArray$1,
                components: mergeObjectOptions,
                directives: mergeObjectOptions,
                watch: mergeWatchOptions,
                provide: mergeDataFn,
                inject: mergeInject
            };
            function mergeDataFn(to, from) {
                if (!from) return to;
                if (!to) return from;
                return function mergedDataFn() {
                    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
                };
            }
            function mergeInject(to, from) {
                return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
            }
            function normalizeInject(raw) {
                if (isArray(raw)) {
                    const res = {};
                    for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
                    return res;
                }
                return raw;
            }
            function mergeAsArray$1(to, from) {
                return to ? [ ...new Set([].concat(to, from)) ] : from;
            }
            function mergeObjectOptions(to, from) {
                return to ? extend(Object.create(null), to, from) : from;
            }
            function mergeEmitsOrPropsOptions(to, from) {
                if (to) {
                    if (isArray(to) && isArray(from)) return [ ...new Set([ ...to, ...from ]) ];
                    return extend(Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
                } else return from;
            }
            function mergeWatchOptions(to, from) {
                if (!to) return from;
                if (!from) return to;
                const merged = extend(Object.create(null), to);
                for (const key in from) merged[key] = mergeAsArray$1(to[key], from[key]);
                return merged;
            }
            function createAppContext() {
                return {
                    app: null,
                    config: {
                        isNativeTag: NO,
                        performance: false,
                        globalProperties: {},
                        optionMergeStrategies: {},
                        errorHandler: void 0,
                        warnHandler: void 0,
                        compilerOptions: {}
                    },
                    mixins: [],
                    components: {},
                    directives: {},
                    provides: Object.create(null),
                    optionsCache: new WeakMap,
                    propsCache: new WeakMap,
                    emitsCache: new WeakMap
                };
            }
            let uid$1 = 0;
            function createAppAPI(render, hydrate) {
                return function createApp(rootComponent, rootProps = null) {
                    if (!isFunction(rootComponent)) rootComponent = extend({}, rootComponent);
                    if (rootProps != null && !isObject(rootProps)) {
                        warn(`root props passed to app.mount() must be an object.`);
                        rootProps = null;
                    }
                    const context = createAppContext();
                    Object.defineProperty(context.config, "unwrapInjectedRef", {
                        get() {
                            return true;
                        },
                        set() {
                            warn(`app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.`);
                        }
                    });
                    const installedPlugins = new Set;
                    let isMounted = false;
                    const app = context.app = {
                        _uid: uid$1++,
                        _component: rootComponent,
                        _props: rootProps,
                        _container: null,
                        _context: context,
                        _instance: null,
                        version,
                        get config() {
                            return context.config;
                        },
                        set config(v) {
                            warn(`app.config cannot be replaced. Modify individual options instead.`);
                        },
                        use(plugin, ...options) {
                            if (installedPlugins.has(plugin)) warn(`Plugin has already been applied to target app.`); else if (plugin && isFunction(plugin.install)) {
                                installedPlugins.add(plugin);
                                plugin.install(app, ...options);
                            } else if (isFunction(plugin)) {
                                installedPlugins.add(plugin);
                                plugin(app, ...options);
                            } else warn(`A plugin must either be a function or an object with an "install" function.`);
                            return app;
                        },
                        mixin(mixin) {
                            if (!context.mixins.includes(mixin)) context.mixins.push(mixin); else warn("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                            return app;
                        },
                        component(name, component) {
                            validateComponentName(name, context.config);
                            if (!component) return context.components[name];
                            if (context.components[name]) warn(`Component "${name}" has already been registered in target app.`);
                            context.components[name] = component;
                            return app;
                        },
                        directive(name, directive) {
                            validateDirectiveName(name);
                            if (!directive) return context.directives[name];
                            if (context.directives[name]) warn(`Directive "${name}" has already been registered in target app.`);
                            context.directives[name] = directive;
                            return app;
                        },
                        mount(rootContainer, isHydrate, isSVG) {
                            if (!isMounted) {
                                if (rootContainer.__vue_app__) warn(`There is already an app instance mounted on the host container.\n   If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
                                const vnode = createVNode(rootComponent, rootProps);
                                vnode.appContext = context;
                                context.reload = () => {
                                    render(cloneVNode(vnode), rootContainer, isSVG);
                                };
                                if (isHydrate && hydrate) hydrate(vnode, rootContainer); else render(vnode, rootContainer, isSVG);
                                isMounted = true;
                                app._container = rootContainer;
                                rootContainer.__vue_app__ = app;
                                app._instance = vnode.component;
                                devtoolsInitApp(app, version);
                                return getExposeProxy(vnode.component) || vnode.component.proxy;
                            } else warn(`App has already been mounted.\n  If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
                        },
                        unmount() {
                            if (isMounted) {
                                render(null, app._container);
                                app._instance = null;
                                devtoolsUnmountApp(app);
                                delete app._container.__vue_app__;
                            } else warn(`Cannot unmount an app that is not mounted.`);
                        },
                        provide(key, value) {
                            if (key in context.provides) warn(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
                            context.provides[key] = value;
                            return app;
                        },
                        runWithContext(fn) {
                            currentApp = app;
                            try {
                                return fn();
                            } finally {
                                currentApp = null;
                            }
                        }
                    };
                    return app;
                };
            }
            let currentApp = null;
            function provide(key, value) {
                if (!currentInstance) warn(`provide() can only be used inside setup().`); else {
                    let provides = currentInstance.provides;
                    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
                    if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
                    provides[key] = value;
                }
            }
            function inject(key, defaultValue, treatDefaultAsFactory = false) {
                const instance = currentInstance || currentRenderingInstance;
                if (instance || currentApp) {
                    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
                    if (provides && key in provides) return provides[key]; else if (arguments.length > 1) return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue; else warn(`injection "${String(key)}" not found.`);
                } else warn(`inject() can only be used inside setup() or functional components.`);
            }
            function hasInjectionContext() {
                return !!(currentInstance || currentRenderingInstance || currentApp);
            }
            function initProps(instance, rawProps, isStateful, isSSR = false) {
                const props = {};
                const attrs = {};
                def(attrs, InternalObjectKey, 1);
                instance.propsDefaults = Object.create(null);
                setFullProps(instance, rawProps, props, attrs);
                for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
                validateProps(rawProps || {}, props, instance);
                if (isStateful) instance.props = isSSR ? props : shallowReactive(props); else if (!instance.type.props) instance.props = attrs; else instance.props = props;
                instance.attrs = attrs;
            }
            function isInHmrContext(instance) {
                while (instance) {
                    if (instance.type.__hmrId) return true;
                    instance = instance.parent;
                }
            }
            function updateProps(instance, rawProps, rawPrevProps, optimized) {
                const {props, attrs, vnode: {patchFlag}} = instance;
                const rawCurrentProps = toRaw(props);
                const [options] = instance.propsOptions;
                let hasAttrsChanged = false;
                if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
                    if (patchFlag & 8) {
                        const propsToUpdate = instance.vnode.dynamicProps;
                        for (let i = 0; i < propsToUpdate.length; i++) {
                            let key = propsToUpdate[i];
                            if (isEmitListener(instance.emitsOptions, key)) continue;
                            const value = rawProps[key];
                            if (options) if (hasOwn(attrs, key)) {
                                if (value !== attrs[key]) {
                                    attrs[key] = value;
                                    hasAttrsChanged = true;
                                }
                            } else {
                                const camelizedKey = camelize(key);
                                props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                            } else if (value !== attrs[key]) {
                                attrs[key] = value;
                                hasAttrsChanged = true;
                            }
                        }
                    }
                } else {
                    if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
                    let kebabKey;
                    for (const key in rawCurrentProps) if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) if (options) {
                        if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
                    } else delete props[key];
                    if (attrs !== rawCurrentProps) for (const key in attrs) if (!rawProps || !hasOwn(rawProps, key) && true) {
                        delete attrs[key];
                        hasAttrsChanged = true;
                    }
                }
                if (hasAttrsChanged) trigger(instance, "set", "$attrs");
                validateProps(rawProps || {}, props, instance);
            }
            function setFullProps(instance, rawProps, props, attrs) {
                const [options, needCastKeys] = instance.propsOptions;
                let hasAttrsChanged = false;
                let rawCastValues;
                if (rawProps) for (let key in rawProps) {
                    if (isReservedProp(key)) continue;
                    const value = rawProps[key];
                    let camelKey;
                    if (options && hasOwn(options, camelKey = camelize(key))) if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value; else (rawCastValues || (rawCastValues = {}))[camelKey] = value; else if (!isEmitListener(instance.emitsOptions, key)) if (!(key in attrs) || value !== attrs[key]) {
                        attrs[key] = value;
                        hasAttrsChanged = true;
                    }
                }
                if (needCastKeys) {
                    const rawCurrentProps = toRaw(props);
                    const castValues = rawCastValues || EMPTY_OBJ;
                    for (let i = 0; i < needCastKeys.length; i++) {
                        const key = needCastKeys[i];
                        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
                    }
                }
                return hasAttrsChanged;
            }
            function resolvePropValue(options, props, key, value, instance, isAbsent) {
                const opt = options[key];
                if (opt != null) {
                    const hasDefault = hasOwn(opt, "default");
                    if (hasDefault && value === void 0) {
                        const defaultValue = opt.default;
                        if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
                            const {propsDefaults} = instance;
                            if (key in propsDefaults) value = propsDefaults[key]; else {
                                setCurrentInstance(instance);
                                value = propsDefaults[key] = defaultValue.call(null, props);
                                unsetCurrentInstance();
                            }
                        } else value = defaultValue;
                    }
                    if (opt[0]) if (isAbsent && !hasDefault) value = false; else if (opt[1] && (value === "" || value === hyphenate(key))) value = true;
                }
                return value;
            }
            function normalizePropsOptions(comp, appContext, asMixin = false) {
                const cache = appContext.propsCache;
                const cached = cache.get(comp);
                if (cached) return cached;
                const raw = comp.props;
                const normalized = {};
                const needCastKeys = [];
                let hasExtends = false;
                if (!isFunction(comp)) {
                    const extendProps = raw2 => {
                        hasExtends = true;
                        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
                        extend(normalized, props);
                        if (keys) needCastKeys.push(...keys);
                    };
                    if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
                    if (comp.extends) extendProps(comp.extends);
                    if (comp.mixins) comp.mixins.forEach(extendProps);
                }
                if (!raw && !hasExtends) {
                    if (isObject(comp)) cache.set(comp, EMPTY_ARR);
                    return EMPTY_ARR;
                }
                if (isArray(raw)) for (let i = 0; i < raw.length; i++) {
                    if (!isString(raw[i])) warn(`props must be strings when using array syntax.`, raw[i]);
                    const normalizedKey = camelize(raw[i]);
                    if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
                } else if (raw) {
                    if (!isObject(raw)) warn(`invalid props options`, raw);
                    for (const key in raw) {
                        const normalizedKey = camelize(key);
                        if (validatePropName(normalizedKey)) {
                            const opt = raw[key];
                            const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? {
                                type: opt
                            } : extend({}, opt);
                            if (prop) {
                                const booleanIndex = getTypeIndex(Boolean, prop.type);
                                const stringIndex = getTypeIndex(String, prop.type);
                                prop[0] = booleanIndex > -1;
                                prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
                                if (booleanIndex > -1 || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
                            }
                        }
                    }
                }
                const res = [ normalized, needCastKeys ];
                if (isObject(comp)) cache.set(comp, res);
                return res;
            }
            function validatePropName(key) {
                if (key[0] !== "$") return true; else warn(`Invalid prop name: "${key}" is a reserved property.`);
                return false;
            }
            function getType(ctor) {
                const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
                return match ? match[2] : ctor === null ? "null" : "";
            }
            function isSameType(a, b) {
                return getType(a) === getType(b);
            }
            function getTypeIndex(type, expectedTypes) {
                if (isArray(expectedTypes)) return expectedTypes.findIndex((t => isSameType(t, type))); else if (isFunction(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
                return -1;
            }
            function validateProps(rawProps, props, instance) {
                const resolvedValues = toRaw(props);
                const options = instance.propsOptions[0];
                for (const key in options) {
                    let opt = options[key];
                    if (opt == null) continue;
                    validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
                }
            }
            function validateProp(name, value, prop, isAbsent) {
                const {type, required, validator, skipCheck} = prop;
                if (required && isAbsent) {
                    warn('Missing required prop: "' + name + '"');
                    return;
                }
                if (value == null && !required) return;
                if (type != null && type !== true && !skipCheck) {
                    let isValid = false;
                    const types = isArray(type) ? type : [ type ];
                    const expectedTypes = [];
                    for (let i = 0; i < types.length && !isValid; i++) {
                        const {valid, expectedType} = assertType(value, types[i]);
                        expectedTypes.push(expectedType || "");
                        isValid = valid;
                    }
                    if (!isValid) {
                        warn(getInvalidTypeMessage(name, value, expectedTypes));
                        return;
                    }
                }
                if (validator && !validator(value)) warn('Invalid prop: custom validator check failed for prop "' + name + '".');
            }
            const isSimpleType = makeMap("String,Number,Boolean,Function,Symbol,BigInt");
            function assertType(value, type) {
                let valid;
                const expectedType = getType(type);
                if (isSimpleType(expectedType)) {
                    const t = typeof value;
                    valid = t === expectedType.toLowerCase();
                    if (!valid && t === "object") valid = value instanceof type;
                } else if (expectedType === "Object") valid = isObject(value); else if (expectedType === "Array") valid = isArray(value); else if (expectedType === "null") valid = value === null; else valid = value instanceof type;
                return {
                    valid,
                    expectedType
                };
            }
            function getInvalidTypeMessage(name, value, expectedTypes) {
                let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
                const expectedType = expectedTypes[0];
                const receivedType = toRawType(value);
                const expectedValue = styleValue(value, expectedType);
                const receivedValue = styleValue(value, receivedType);
                if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
                message += `, got ${receivedType} `;
                if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
                return message;
            }
            function styleValue(value, type) {
                if (type === "String") return `"${value}"`; else if (type === "Number") return `${Number(value)}`; else return `${value}`;
            }
            function isExplicable(type) {
                const explicitTypes = [ "string", "number", "boolean" ];
                return explicitTypes.some((elem => type.toLowerCase() === elem));
            }
            function isBoolean(...args) {
                return args.some((elem => elem.toLowerCase() === "boolean"));
            }
            const isInternalKey = key => key[0] === "_" || key === "$stable";
            const normalizeSlotValue = value => isArray(value) ? value.map(normalizeVNode) : [ normalizeVNode(value) ];
            const normalizeSlot = (key, rawSlot, ctx) => {
                if (rawSlot._n) return rawSlot;
                const normalized = withCtx(((...args) => {
                    if (currentInstance) warn(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
                    return normalizeSlotValue(rawSlot(...args));
                }), ctx);
                normalized._c = false;
                return normalized;
            };
            const normalizeObjectSlots = (rawSlots, slots, instance) => {
                const ctx = rawSlots._ctx;
                for (const key in rawSlots) {
                    if (isInternalKey(key)) continue;
                    const value = rawSlots[key];
                    if (isFunction(value)) slots[key] = normalizeSlot(key, value, ctx); else if (value != null) {
                        warn(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
                        const normalized = normalizeSlotValue(value);
                        slots[key] = () => normalized;
                    }
                }
            };
            const normalizeVNodeSlots = (instance, children) => {
                if (!isKeepAlive(instance.vnode) && true) warn(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
                const normalized = normalizeSlotValue(children);
                instance.slots.default = () => normalized;
            };
            const initSlots = (instance, children) => {
                if (instance.vnode.shapeFlag & 32) {
                    const type = children._;
                    if (type) {
                        instance.slots = toRaw(children);
                        def(children, "_", type);
                    } else normalizeObjectSlots(children, instance.slots = {});
                } else {
                    instance.slots = {};
                    if (children) normalizeVNodeSlots(instance, children);
                }
                def(instance.slots, InternalObjectKey, 1);
            };
            const updateSlots = (instance, children, optimized) => {
                const {vnode, slots} = instance;
                let needDeletionCheck = true;
                let deletionComparisonTarget = EMPTY_OBJ;
                if (vnode.shapeFlag & 32) {
                    const type = children._;
                    if (type) if (isHmrUpdating) {
                        extend(slots, children);
                        trigger(instance, "set", "$slots");
                    } else if (optimized && type === 1) needDeletionCheck = false; else {
                        extend(slots, children);
                        if (!optimized && type === 1) delete slots._;
                    } else {
                        needDeletionCheck = !children.$stable;
                        normalizeObjectSlots(children, slots);
                    }
                    deletionComparisonTarget = children;
                } else if (children) {
                    normalizeVNodeSlots(instance, children);
                    deletionComparisonTarget = {
                        default: 1
                    };
                }
                if (needDeletionCheck) for (const key in slots) if (!isInternalKey(key) && !(key in deletionComparisonTarget)) delete slots[key];
            };
            function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
                if (isArray(rawRef)) {
                    rawRef.forEach(((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount)));
                    return;
                }
                if (isAsyncWrapper(vnode) && !isUnmount) return;
                const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
                const value = isUnmount ? null : refValue;
                const {i: owner, r: ref} = rawRef;
                if (!owner) {
                    warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
                    return;
                }
                const oldRef = oldRawRef && oldRawRef.r;
                const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
                const setupState = owner.setupState;
                if (oldRef != null && oldRef !== ref) if (isString(oldRef)) {
                    refs[oldRef] = null;
                    if (hasOwn(setupState, oldRef)) setupState[oldRef] = null;
                } else if (isRef(oldRef)) oldRef.value = null;
                if (isFunction(ref)) callWithErrorHandling(ref, owner, 12, [ value, refs ]); else {
                    const _isString = isString(ref);
                    const _isRef = isRef(ref);
                    if (_isString || _isRef) {
                        const doSet = () => {
                            if (rawRef.f) {
                                const existing = _isString ? hasOwn(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                                if (isUnmount) isArray(existing) && remove(existing, refValue); else if (!isArray(existing)) if (_isString) {
                                    refs[ref] = [ refValue ];
                                    if (hasOwn(setupState, ref)) setupState[ref] = refs[ref];
                                } else {
                                    ref.value = [ refValue ];
                                    if (rawRef.k) refs[rawRef.k] = ref.value;
                                } else if (!existing.includes(refValue)) existing.push(refValue);
                            } else if (_isString) {
                                refs[ref] = value;
                                if (hasOwn(setupState, ref)) setupState[ref] = value;
                            } else if (_isRef) {
                                ref.value = value;
                                if (rawRef.k) refs[rawRef.k] = value;
                            } else warn("Invalid template ref type:", ref, `(${typeof ref})`);
                        };
                        if (value) {
                            doSet.id = -1;
                            queuePostRenderEffect(doSet, parentSuspense);
                        } else doSet();
                    } else warn("Invalid template ref type:", ref, `(${typeof ref})`);
                }
            }
            let hasMismatch = false;
            const isSVGContainer = container => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
            const isComment = node => node.nodeType === 8;
            function createHydrationFunctions(rendererInternals) {
                const {mt: mountComponent, p: patch, o: {patchProp, createText, nextSibling, parentNode, remove, insert, createComment}} = rendererInternals;
                const hydrate = (vnode, container) => {
                    if (!container.hasChildNodes()) {
                        warn(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
                        patch(null, vnode, container);
                        flushPostFlushCbs();
                        container._vnode = vnode;
                        return;
                    }
                    hasMismatch = false;
                    hydrateNode(container.firstChild, vnode, null, null, null);
                    flushPostFlushCbs();
                    container._vnode = vnode;
                    if (hasMismatch && true) console.error(`Hydration completed but contains mismatches.`);
                };
                const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
                    const isFragmentStart = isComment(node) && node.data === "[";
                    const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
                    const {type, ref, shapeFlag, patchFlag} = vnode;
                    let domType = node.nodeType;
                    vnode.el = node;
                    if (patchFlag === -2) {
                        optimized = false;
                        vnode.dynamicChildren = null;
                    }
                    let nextNode = null;
                    switch (type) {
                      case Text:
                        if (domType !== 3) if (vnode.children === "") {
                            insert(vnode.el = createText(""), parentNode(node), node);
                            nextNode = node;
                        } else nextNode = onMismatch(); else {
                            if (node.data !== vnode.children) {
                                hasMismatch = true;
                                warn(`Hydration text mismatch:\n  - Client: ${JSON.stringify(node.data)}\n  - Server: ${JSON.stringify(vnode.children)}`);
                                node.data = vnode.children;
                            }
                            nextNode = nextSibling(node);
                        }
                        break;

                      case Comment:
                        if (domType !== 8 || isFragmentStart) nextNode = onMismatch(); else nextNode = nextSibling(node);
                        break;

                      case Static:
                        if (isFragmentStart) {
                            node = nextSibling(node);
                            domType = node.nodeType;
                        }
                        if (domType === 1 || domType === 3) {
                            nextNode = node;
                            const needToAdoptContent = !vnode.children.length;
                            for (let i = 0; i < vnode.staticCount; i++) {
                                if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
                                if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                                nextNode = nextSibling(nextNode);
                            }
                            return isFragmentStart ? nextSibling(nextNode) : nextNode;
                        } else onMismatch();
                        break;

                      case Fragment:
                        if (!isFragmentStart) nextNode = onMismatch(); else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                        break;

                      default:
                        if (shapeFlag & 1) if (domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) nextNode = onMismatch(); else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized); else if (shapeFlag & 6) {
                            vnode.slotScopeIds = slotScopeIds;
                            const container = parentNode(node);
                            mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
                            if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") nextNode = nextSibling(nextNode);
                            if (isAsyncWrapper(vnode)) {
                                let subTree;
                                if (isFragmentStart) {
                                    subTree = createVNode(Fragment);
                                    subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                                } else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                                subTree.el = node;
                                vnode.component.subTree = subTree;
                            }
                        } else if (shapeFlag & 64) if (domType !== 8) nextNode = onMismatch(); else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren); else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode); else warn("Invalid HostVNode type:", type, `(${typeof type})`);
                    }
                    if (ref != null) setRef(ref, null, parentSuspense, vnode);
                    return nextNode;
                };
                const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
                    optimized = optimized || !!vnode.dynamicChildren;
                    const {type, props, patchFlag, shapeFlag, dirs} = vnode;
                    const forcePatchValue = type === "input" && dirs || type === "option";
                    {
                        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
                        if (props) if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
                            for (const key in props) if (forcePatchValue && key.endsWith("value") || isOn(key) && !isReservedProp(key)) patchProp(el, key, null, props[key], false, void 0, parentComponent);
                        } else if (props.onClick) patchProp(el, "onClick", null, props.onClick, false, void 0, parentComponent);
                        let vnodeHooks;
                        if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
                        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) queueEffectWithSuspense((() => {
                            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
                        }), parentSuspense);
                        if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
                            let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                            let hasWarned = false;
                            while (next) {
                                hasMismatch = true;
                                if (!hasWarned) {
                                    warn(`Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`);
                                    hasWarned = true;
                                }
                                const cur = next;
                                next = next.nextSibling;
                                remove(cur);
                            }
                        } else if (shapeFlag & 8) if (el.textContent !== vnode.children) {
                            hasMismatch = true;
                            warn(`Hydration text content mismatch in <${vnode.type}>:\n  - Client: ${el.textContent}\n  - Server: ${vnode.children}`);
                            el.textContent = vnode.children;
                        }
                    }
                    return el.nextSibling;
                };
                const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
                    optimized = optimized || !!parentVNode.dynamicChildren;
                    const children = parentVNode.children;
                    const l = children.length;
                    let hasWarned = false;
                    for (let i = 0; i < l; i++) {
                        const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
                        if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized); else if (vnode.type === Text && !vnode.children) continue; else {
                            hasMismatch = true;
                            if (!hasWarned) {
                                warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`);
                                hasWarned = true;
                            }
                            patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
                        }
                    }
                    return node;
                };
                const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
                    const {slotScopeIds: fragmentSlotScopeIds} = vnode;
                    if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
                    const container = parentNode(node);
                    const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
                    if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next); else {
                        hasMismatch = true;
                        insert(vnode.anchor = createComment(`]`), container, next);
                        return next;
                    }
                };
                const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
                    hasMismatch = true;
                    warn(`Hydration node mismatch:\n  - Client vnode:`, vnode.type, `\n  - Server rendered DOM:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
                    vnode.el = null;
                    if (isFragment) {
                        const end = locateClosingAsyncAnchor(node);
                        while (true) {
                            const next2 = nextSibling(node);
                            if (next2 && next2 !== end) remove(next2); else break;
                        }
                    }
                    const next = nextSibling(node);
                    const container = parentNode(node);
                    remove(node);
                    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
                    return next;
                };
                const locateClosingAsyncAnchor = node => {
                    let match = 0;
                    while (node) {
                        node = nextSibling(node);
                        if (node && isComment(node)) {
                            if (node.data === "[") match++;
                            if (node.data === "]") if (match === 0) return nextSibling(node); else match--;
                        }
                    }
                    return node;
                };
                return [ hydrate, hydrateNode ];
            }
            let supported;
            let perf;
            function startMeasure(instance, type) {
                if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
                devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
            }
            function endMeasure(instance, type) {
                if (instance.appContext.config.performance && isSupported()) {
                    const startTag = `vue-${type}-${instance.uid}`;
                    const endTag = startTag + `:end`;
                    perf.mark(endTag);
                    perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
                    perf.clearMarks(startTag);
                    perf.clearMarks(endTag);
                }
                devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
            }
            function isSupported() {
                if (supported !== void 0) return supported;
                if (typeof window !== "undefined" && window.performance) {
                    supported = true;
                    perf = window.performance;
                } else supported = false;
                return supported;
            }
            const queuePostRenderEffect = queueEffectWithSuspense;
            function createRenderer(options) {
                return baseCreateRenderer(options);
            }
            function createHydrationRenderer(options) {
                return baseCreateRenderer(options, createHydrationFunctions);
            }
            function baseCreateRenderer(options, createHydrationFns) {
                const target = getGlobalThis();
                target.__VUE__ = true;
                setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
                const {insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent} = options;
                const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = (isHmrUpdating ? false : !!n2.dynamicChildren)) => {
                    if (n1 === n2) return;
                    if (n1 && !isSameVNodeType(n1, n2)) {
                        anchor = getNextHostNode(n1);
                        unmount(n1, parentComponent, parentSuspense, true);
                        n1 = null;
                    }
                    if (n2.patchFlag === -2) {
                        optimized = false;
                        n2.dynamicChildren = null;
                    }
                    const {type, ref, shapeFlag} = n2;
                    switch (type) {
                      case Text:
                        processText(n1, n2, container, anchor);
                        break;

                      case Comment:
                        processCommentNode(n1, n2, container, anchor);
                        break;

                      case Static:
                        if (n1 == null) mountStaticNode(n2, container, anchor, isSVG); else patchStaticNode(n1, n2, container, isSVG);
                        break;

                      case Fragment:
                        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                        break;

                      default:
                        if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized); else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized); else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals); else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals); else warn("Invalid VNode type:", type, `(${typeof type})`);
                    }
                    if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
                };
                const processText = (n1, n2, container, anchor) => {
                    if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor); else {
                        const el = n2.el = n1.el;
                        if (n2.children !== n1.children) hostSetText(el, n2.children);
                    }
                };
                const processCommentNode = (n1, n2, container, anchor) => {
                    if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor); else n2.el = n1.el;
                };
                const mountStaticNode = (n2, container, anchor, isSVG) => {
                    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
                };
                const patchStaticNode = (n1, n2, container, isSVG) => {
                    if (n2.children !== n1.children) {
                        const anchor = hostNextSibling(n1.anchor);
                        removeStaticNode(n1);
                        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
                    } else {
                        n2.el = n1.el;
                        n2.anchor = n1.anchor;
                    }
                };
                const moveStaticNode = ({el, anchor}, container, nextSibling) => {
                    let next;
                    while (el && el !== anchor) {
                        next = hostNextSibling(el);
                        hostInsert(el, container, nextSibling);
                        el = next;
                    }
                    hostInsert(anchor, container, nextSibling);
                };
                const removeStaticNode = ({el, anchor}) => {
                    let next;
                    while (el && el !== anchor) {
                        next = hostNextSibling(el);
                        hostRemove(el);
                        el = next;
                    }
                    hostRemove(anchor);
                };
                const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
                    isSVG = isSVG || n2.type === "svg";
                    if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized); else patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                };
                const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
                    let el;
                    let vnodeHook;
                    const {type, props, shapeFlag, transition, dirs} = vnode;
                    el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
                    if (shapeFlag & 8) hostSetElementText(el, vnode.children); else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
                    if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
                    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
                    if (props) {
                        for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                        if ("value" in props) hostPatchProp(el, "value", null, props.value);
                        if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
                    }
                    Object.defineProperty(el, "__vnode", {
                        value: vnode,
                        enumerable: false
                    });
                    Object.defineProperty(el, "__vueParentComponent", {
                        value: parentComponent,
                        enumerable: false
                    });
                    if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
                    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
                    if (needCallTransitionHooks) transition.beforeEnter(el);
                    hostInsert(el, container, anchor);
                    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect((() => {
                        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                        needCallTransitionHooks && transition.enter(el);
                        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
                    }), parentSuspense);
                };
                const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
                    if (scopeId) hostSetScopeId(el, scopeId);
                    if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
                    if (parentComponent) {
                        let subTree = parentComponent.subTree;
                        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) subTree = filterSingleRoot(subTree.children) || subTree;
                        if (vnode === subTree) {
                            const parentVNode = parentComponent.vnode;
                            setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
                        }
                    }
                };
                const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
                    for (let i = start; i < children.length; i++) {
                        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
                        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    }
                };
                const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
                    const el = n2.el = n1.el;
                    let {patchFlag, dynamicChildren, dirs} = n2;
                    patchFlag |= n1.patchFlag & 16;
                    const oldProps = n1.props || EMPTY_OBJ;
                    const newProps = n2.props || EMPTY_OBJ;
                    let vnodeHook;
                    parentComponent && toggleRecurse(parentComponent, false);
                    if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                    if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
                    parentComponent && toggleRecurse(parentComponent, true);
                    if (isHmrUpdating) {
                        patchFlag = 0;
                        optimized = false;
                        dynamicChildren = null;
                    }
                    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
                    if (dynamicChildren) {
                        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
                        traverseStaticChildren(n1, n2);
                    } else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
                    if (patchFlag > 0) {
                        if (patchFlag & 16) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG); else {
                            if (patchFlag & 2) if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, isSVG);
                            if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
                            if (patchFlag & 8) {
                                const propsToUpdate = n2.dynamicProps;
                                for (let i = 0; i < propsToUpdate.length; i++) {
                                    const key = propsToUpdate[i];
                                    const prev = oldProps[key];
                                    const next = newProps[key];
                                    if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                                }
                            }
                        }
                        if (patchFlag & 1) if (n1.children !== n2.children) hostSetElementText(el, n2.children);
                    } else if (!optimized && dynamicChildren == null) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
                    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect((() => {
                        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
                    }), parentSuspense);
                };
                const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
                    for (let i = 0; i < newChildren.length; i++) {
                        const oldVNode = oldChildren[i];
                        const newVNode = newChildren[i];
                        const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
                        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
                    }
                };
                const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
                    if (oldProps !== newProps) {
                        if (oldProps !== EMPTY_OBJ) for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                        for (const key in newProps) {
                            if (isReservedProp(key)) continue;
                            const next = newProps[key];
                            const prev = oldProps[key];
                            if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                        }
                        if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value);
                    }
                };
                const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
                    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
                    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
                    let {patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds} = n2;
                    if (isHmrUpdating || patchFlag & 2048) {
                        patchFlag = 0;
                        optimized = false;
                        dynamicChildren = null;
                    }
                    if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
                    if (n1 == null) {
                        hostInsert(fragmentStartAnchor, container, anchor);
                        hostInsert(fragmentEndAnchor, container, anchor);
                        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    } else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
                        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                        traverseStaticChildren(n1, n2);
                    } else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                };
                const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
                    n2.slotScopeIds = slotScopeIds;
                    if (n1 == null) if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized); else mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized); else updateComponent(n1, n2, optimized);
                };
                const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
                    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
                    if (instance.type.__hmrId) registerHMR(instance);
                    pushWarningContext(initialVNode);
                    startMeasure(instance, `mount`);
                    if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
                    startMeasure(instance, `init`);
                    setupComponent(instance);
                    endMeasure(instance, `init`);
                    if (instance.asyncDep) {
                        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
                        if (!initialVNode.el) {
                            const placeholder = instance.subTree = createVNode(Comment);
                            processCommentNode(null, placeholder, container, anchor);
                        }
                        return;
                    }
                    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
                    popWarningContext();
                    endMeasure(instance, `mount`);
                };
                const updateComponent = (n1, n2, optimized) => {
                    const instance = n2.component = n1.component;
                    if (shouldUpdateComponent(n1, n2, optimized)) if (instance.asyncDep && !instance.asyncResolved) {
                        pushWarningContext(n2);
                        updateComponentPreRender(instance, n2, optimized);
                        popWarningContext();
                        return;
                    } else {
                        instance.next = n2;
                        invalidateJob(instance.update);
                        instance.update();
                    } else {
                        n2.el = n1.el;
                        instance.vnode = n2;
                    }
                };
                const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
                    const componentUpdateFn = () => {
                        if (!instance.isMounted) {
                            let vnodeHook;
                            const {el, props} = initialVNode;
                            const {bm, m, parent} = instance;
                            const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                            toggleRecurse(instance, false);
                            if (bm) invokeArrayFns(bm);
                            if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                            toggleRecurse(instance, true);
                            if (el && hydrateNode) {
                                const hydrateSubTree = () => {
                                    startMeasure(instance, `render`);
                                    instance.subTree = renderComponentRoot(instance);
                                    endMeasure(instance, `render`);
                                    startMeasure(instance, `hydrate`);
                                    hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                                    endMeasure(instance, `hydrate`);
                                };
                                if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then((() => !instance.isUnmounted && hydrateSubTree())); else hydrateSubTree();
                            } else {
                                startMeasure(instance, `render`);
                                const subTree = instance.subTree = renderComponentRoot(instance);
                                endMeasure(instance, `render`);
                                startMeasure(instance, `patch`);
                                patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                                endMeasure(instance, `patch`);
                                initialVNode.el = subTree.el;
                            }
                            if (m) queuePostRenderEffect(m, parentSuspense);
                            if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                                const scopedInitialVNode = initialVNode;
                                queuePostRenderEffect((() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode)), parentSuspense);
                            }
                            if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                            instance.isMounted = true;
                            devtoolsComponentAdded(instance);
                            initialVNode = container = anchor = null;
                        } else {
                            let {next, bu, u, parent, vnode} = instance;
                            let originNext = next;
                            let vnodeHook;
                            pushWarningContext(next || instance.vnode);
                            toggleRecurse(instance, false);
                            if (next) {
                                next.el = vnode.el;
                                updateComponentPreRender(instance, next, optimized);
                            } else next = vnode;
                            if (bu) invokeArrayFns(bu);
                            if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                            toggleRecurse(instance, true);
                            startMeasure(instance, `render`);
                            const nextTree = renderComponentRoot(instance);
                            endMeasure(instance, `render`);
                            const prevTree = instance.subTree;
                            instance.subTree = nextTree;
                            startMeasure(instance, `patch`);
                            patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                            endMeasure(instance, `patch`);
                            next.el = nextTree.el;
                            if (originNext === null) updateHOCHostEl(instance, nextTree.el);
                            if (u) queuePostRenderEffect(u, parentSuspense);
                            if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect((() => invokeVNodeHook(vnodeHook, parent, next, vnode)), parentSuspense);
                            devtoolsComponentUpdated(instance);
                            popWarningContext();
                        }
                    };
                    const effect = instance.effect = new ReactiveEffect(componentUpdateFn, (() => queueJob(update)), instance.scope);
                    const update = instance.update = () => effect.run();
                    update.id = instance.uid;
                    toggleRecurse(instance, true);
                    effect.onTrack = instance.rtc ? e => invokeArrayFns(instance.rtc, e) : void 0;
                    effect.onTrigger = instance.rtg ? e => invokeArrayFns(instance.rtg, e) : void 0;
                    update.ownerInstance = instance;
                    update();
                };
                const updateComponentPreRender = (instance, nextVNode, optimized) => {
                    nextVNode.component = instance;
                    const prevProps = instance.vnode.props;
                    instance.vnode = nextVNode;
                    instance.next = null;
                    updateProps(instance, nextVNode.props, prevProps, optimized);
                    updateSlots(instance, nextVNode.children, optimized);
                    pauseTracking();
                    flushPreFlushCbs();
                    resetTracking();
                };
                const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
                    const c1 = n1 && n1.children;
                    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
                    const c2 = n2.children;
                    const {patchFlag, shapeFlag} = n2;
                    if (patchFlag > 0) if (patchFlag & 128) {
                        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                        return;
                    } else if (patchFlag & 256) {
                        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                        return;
                    }
                    if (shapeFlag & 8) {
                        if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
                        if (c2 !== c1) hostSetElementText(container, c2);
                    } else if (prevShapeFlag & 16) if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized); else unmountChildren(c1, parentComponent, parentSuspense, true); else {
                        if (prevShapeFlag & 8) hostSetElementText(container, "");
                        if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    }
                };
                const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
                    c1 = c1 || EMPTY_ARR;
                    c2 = c2 || EMPTY_ARR;
                    const oldLength = c1.length;
                    const newLength = c2.length;
                    const commonLength = Math.min(oldLength, newLength);
                    let i;
                    for (i = 0; i < commonLength; i++) {
                        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    }
                    if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength); else mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
                };
                const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
                    let i = 0;
                    const l2 = c2.length;
                    let e1 = c1.length - 1;
                    let e2 = l2 - 1;
                    while (i <= e1 && i <= e2) {
                        const n1 = c1[i];
                        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                        if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized); else break;
                        i++;
                    }
                    while (i <= e1 && i <= e2) {
                        const n1 = c1[e1];
                        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
                        if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized); else break;
                        e1--;
                        e2--;
                    }
                    if (i > e1) {
                        if (i <= e2) {
                            const nextPos = e2 + 1;
                            const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                            while (i <= e2) {
                                patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                                i++;
                            }
                        }
                    } else if (i > e2) while (i <= e1) {
                        unmount(c1[i], parentComponent, parentSuspense, true);
                        i++;
                    } else {
                        const s1 = i;
                        const s2 = i;
                        const keyToNewIndexMap = new Map;
                        for (i = s2; i <= e2; i++) {
                            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                            if (nextChild.key != null) {
                                if (keyToNewIndexMap.has(nextChild.key)) warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                                keyToNewIndexMap.set(nextChild.key, i);
                            }
                        }
                        let j;
                        let patched = 0;
                        const toBePatched = e2 - s2 + 1;
                        let moved = false;
                        let maxNewIndexSoFar = 0;
                        const newIndexToOldIndexMap = new Array(toBePatched);
                        for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
                        for (i = s1; i <= e1; i++) {
                            const prevChild = c1[i];
                            if (patched >= toBePatched) {
                                unmount(prevChild, parentComponent, parentSuspense, true);
                                continue;
                            }
                            let newIndex;
                            if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key); else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                                newIndex = j;
                                break;
                            }
                            if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true); else {
                                newIndexToOldIndexMap[newIndex - s2] = i + 1;
                                if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex; else moved = true;
                                patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                                patched++;
                            }
                        }
                        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
                        j = increasingNewIndexSequence.length - 1;
                        for (i = toBePatched - 1; i >= 0; i--) {
                            const nextIndex = s2 + i;
                            const nextChild = c2[nextIndex];
                            const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                            if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized); else if (moved) if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2); else j--;
                        }
                    }
                };
                const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
                    const {el, type, transition, children, shapeFlag} = vnode;
                    if (shapeFlag & 6) {
                        move(vnode.component.subTree, container, anchor, moveType);
                        return;
                    }
                    if (shapeFlag & 128) {
                        vnode.suspense.move(container, anchor, moveType);
                        return;
                    }
                    if (shapeFlag & 64) {
                        type.move(vnode, container, anchor, internals);
                        return;
                    }
                    if (type === Fragment) {
                        hostInsert(el, container, anchor);
                        for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
                        hostInsert(vnode.anchor, container, anchor);
                        return;
                    }
                    if (type === Static) {
                        moveStaticNode(vnode, container, anchor);
                        return;
                    }
                    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
                    if (needTransition) if (moveType === 0) {
                        transition.beforeEnter(el);
                        hostInsert(el, container, anchor);
                        queuePostRenderEffect((() => transition.enter(el)), parentSuspense);
                    } else {
                        const {leave, delayLeave, afterLeave} = transition;
                        const remove2 = () => hostInsert(el, container, anchor);
                        const performLeave = () => {
                            leave(el, (() => {
                                remove2();
                                afterLeave && afterLeave();
                            }));
                        };
                        if (delayLeave) delayLeave(el, remove2, performLeave); else performLeave();
                    } else hostInsert(el, container, anchor);
                };
                const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
                    const {type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs} = vnode;
                    if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
                    if (shapeFlag & 256) {
                        parentComponent.ctx.deactivate(vnode);
                        return;
                    }
                    const shouldInvokeDirs = shapeFlag & 1 && dirs;
                    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
                    let vnodeHook;
                    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
                    if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove); else {
                        if (shapeFlag & 128) {
                            vnode.suspense.unmount(parentSuspense, doRemove);
                            return;
                        }
                        if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
                        if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove); else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true); else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
                        if (doRemove) remove(vnode);
                    }
                    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect((() => {
                        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
                    }), parentSuspense);
                };
                const remove = vnode => {
                    const {type, el, anchor, transition} = vnode;
                    if (type === Fragment) {
                        if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) vnode.children.forEach((child => {
                            if (child.type === Comment) hostRemove(child.el); else remove(child);
                        })); else removeFragment(el, anchor);
                        return;
                    }
                    if (type === Static) {
                        removeStaticNode(vnode);
                        return;
                    }
                    const performRemove = () => {
                        hostRemove(el);
                        if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
                    };
                    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
                        const {leave, delayLeave} = transition;
                        const performLeave = () => leave(el, performRemove);
                        if (delayLeave) delayLeave(vnode.el, performRemove, performLeave); else performLeave();
                    } else performRemove();
                };
                const removeFragment = (cur, end) => {
                    let next;
                    while (cur !== end) {
                        next = hostNextSibling(cur);
                        hostRemove(cur);
                        cur = next;
                    }
                    hostRemove(end);
                };
                const unmountComponent = (instance, parentSuspense, doRemove) => {
                    if (instance.type.__hmrId) unregisterHMR(instance);
                    const {bum, scope, update, subTree, um} = instance;
                    if (bum) invokeArrayFns(bum);
                    scope.stop();
                    if (update) {
                        update.active = false;
                        unmount(subTree, instance, parentSuspense, doRemove);
                    }
                    if (um) queuePostRenderEffect(um, parentSuspense);
                    queuePostRenderEffect((() => {
                        instance.isUnmounted = true;
                    }), parentSuspense);
                    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
                        parentSuspense.deps--;
                        if (parentSuspense.deps === 0) parentSuspense.resolve();
                    }
                    devtoolsComponentRemoved(instance);
                };
                const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
                    for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
                };
                const getNextHostNode = vnode => {
                    if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
                    if (vnode.shapeFlag & 128) return vnode.suspense.next();
                    return hostNextSibling(vnode.anchor || vnode.el);
                };
                const render = (vnode, container, isSVG) => {
                    if (vnode == null) {
                        if (container._vnode) unmount(container._vnode, null, null, true);
                    } else patch(container._vnode || null, vnode, container, null, null, null, isSVG);
                    flushPreFlushCbs();
                    flushPostFlushCbs();
                    container._vnode = vnode;
                };
                const internals = {
                    p: patch,
                    um: unmount,
                    m: move,
                    r: remove,
                    mt: mountComponent,
                    mc: mountChildren,
                    pc: patchChildren,
                    pbc: patchBlockChildren,
                    n: getNextHostNode,
                    o: options
                };
                let hydrate;
                let hydrateNode;
                if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
                return {
                    render,
                    hydrate,
                    createApp: createAppAPI(render, hydrate)
                };
            }
            function toggleRecurse({effect, update}, allowed) {
                effect.allowRecurse = update.allowRecurse = allowed;
            }
            function traverseStaticChildren(n1, n2, shallow = false) {
                const ch1 = n1.children;
                const ch2 = n2.children;
                if (isArray(ch1) && isArray(ch2)) for (let i = 0; i < ch1.length; i++) {
                    const c1 = ch1[i];
                    let c2 = ch2[i];
                    if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
                        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                            c2 = ch2[i] = cloneIfMounted(ch2[i]);
                            c2.el = c1.el;
                        }
                        if (!shallow) traverseStaticChildren(c1, c2);
                    }
                    if (c2.type === Text) c2.el = c1.el;
                    if (c2.type === Comment && !c2.el) c2.el = c1.el;
                }
            }
            function getSequence(arr) {
                const p = arr.slice();
                const result = [ 0 ];
                let i, j, u, v, c;
                const len = arr.length;
                for (i = 0; i < len; i++) {
                    const arrI = arr[i];
                    if (arrI !== 0) {
                        j = result[result.length - 1];
                        if (arr[j] < arrI) {
                            p[i] = j;
                            result.push(i);
                            continue;
                        }
                        u = 0;
                        v = result.length - 1;
                        while (u < v) {
                            c = u + v >> 1;
                            if (arr[result[c]] < arrI) u = c + 1; else v = c;
                        }
                        if (arrI < arr[result[u]]) {
                            if (u > 0) p[i] = result[u - 1];
                            result[u] = i;
                        }
                    }
                }
                u = result.length;
                v = result[u - 1];
                while (u-- > 0) {
                    result[u] = v;
                    v = p[v];
                }
                return result;
            }
            const isTeleport = type => type.__isTeleport;
            const isTeleportDisabled = props => props && (props.disabled || props.disabled === "");
            const isTargetSVG = target => typeof SVGElement !== "undefined" && target instanceof SVGElement;
            const resolveTarget = (props, select) => {
                const targetSelector = props && props.to;
                if (isString(targetSelector)) if (!select) {
                    warn(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
                    return null;
                } else {
                    const target = select(targetSelector);
                    if (!target) warn(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
                    return target;
                } else {
                    if (!targetSelector && !isTeleportDisabled(props)) warn(`Invalid Teleport target: ${targetSelector}`);
                    return targetSelector;
                }
            };
            const TeleportImpl = {
                __isTeleport: true,
                process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
                    const {mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: {insert, querySelector, createText, createComment}} = internals;
                    const disabled = isTeleportDisabled(n2.props);
                    let {shapeFlag, children, dynamicChildren} = n2;
                    if (isHmrUpdating) {
                        optimized = false;
                        dynamicChildren = null;
                    }
                    if (n1 == null) {
                        const placeholder = n2.el = createComment("teleport start");
                        const mainAnchor = n2.anchor = createComment("teleport end");
                        insert(placeholder, container, anchor);
                        insert(mainAnchor, container, anchor);
                        const target = n2.target = resolveTarget(n2.props, querySelector);
                        const targetAnchor = n2.targetAnchor = createText("");
                        if (target) {
                            insert(targetAnchor, target);
                            isSVG = isSVG || isTargetSVG(target);
                        } else if (!disabled) warn("Invalid Teleport target on mount:", target, `(${typeof target})`);
                        const mount = (container2, anchor2) => {
                            if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                        };
                        if (disabled) mount(container, mainAnchor); else if (target) mount(target, targetAnchor);
                    } else {
                        n2.el = n1.el;
                        const mainAnchor = n2.anchor = n1.anchor;
                        const target = n2.target = n1.target;
                        const targetAnchor = n2.targetAnchor = n1.targetAnchor;
                        const wasDisabled = isTeleportDisabled(n1.props);
                        const currentContainer = wasDisabled ? container : target;
                        const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
                        isSVG = isSVG || isTargetSVG(target);
                        if (dynamicChildren) {
                            patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                            traverseStaticChildren(n1, n2, true);
                        } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
                        if (disabled) {
                            if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
                        } else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                            const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                            if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0); else warn("Invalid Teleport target on update:", target, `(${typeof target})`);
                        } else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
                    }
                    updateCssVars(n2);
                },
                remove(vnode, parentComponent, parentSuspense, optimized, {um: unmount, o: {remove: hostRemove}}, doRemove) {
                    const {shapeFlag, children, anchor, targetAnchor, target, props} = vnode;
                    if (target) hostRemove(targetAnchor);
                    if (doRemove || !isTeleportDisabled(props)) {
                        hostRemove(anchor);
                        if (shapeFlag & 16) for (let i = 0; i < children.length; i++) {
                            const child = children[i];
                            unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
                        }
                    }
                },
                move: moveTeleport,
                hydrate: hydrateTeleport
            };
            function moveTeleport(vnode, container, parentAnchor, {o: {insert}, m: move}, moveType = 2) {
                if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
                const {el, anchor, shapeFlag, children, props} = vnode;
                const isReorder = moveType === 2;
                if (isReorder) insert(el, container, parentAnchor);
                if (!isReorder || isTeleportDisabled(props)) if (shapeFlag & 16) for (let i = 0; i < children.length; i++) move(children[i], container, parentAnchor, 2);
                if (isReorder) insert(anchor, container, parentAnchor);
            }
            function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {o: {nextSibling, parentNode, querySelector}}, hydrateChildren) {
                const target = vnode.target = resolveTarget(vnode.props, querySelector);
                if (target) {
                    const targetNode = target._lpa || target.firstChild;
                    if (vnode.shapeFlag & 16) if (isTeleportDisabled(vnode.props)) {
                        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                        vnode.targetAnchor = targetNode;
                    } else {
                        vnode.anchor = nextSibling(node);
                        let targetAnchor = targetNode;
                        while (targetAnchor) {
                            targetAnchor = nextSibling(targetAnchor);
                            if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                                vnode.targetAnchor = targetAnchor;
                                target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                                break;
                            }
                        }
                        hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
                    }
                    updateCssVars(vnode);
                }
                return vnode.anchor && nextSibling(vnode.anchor);
            }
            const Teleport = TeleportImpl;
            function updateCssVars(vnode) {
                const ctx = vnode.ctx;
                if (ctx && ctx.ut) {
                    let node = vnode.children[0].el;
                    while (node !== vnode.targetAnchor) {
                        if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
                        node = node.nextSibling;
                    }
                    ctx.ut();
                }
            }
            const Fragment = Symbol.for("v-fgt");
            const Text = Symbol.for("v-txt");
            const Comment = Symbol.for("v-cmt");
            const Static = Symbol.for("v-stc");
            const blockStack = [];
            let currentBlock = null;
            function openBlock(disableTracking = false) {
                blockStack.push(currentBlock = disableTracking ? null : []);
            }
            function closeBlock() {
                blockStack.pop();
                currentBlock = blockStack[blockStack.length - 1] || null;
            }
            let isBlockTreeEnabled = 1;
            function setBlockTracking(value) {
                isBlockTreeEnabled += value;
            }
            function setupBlock(vnode) {
                vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
                closeBlock();
                if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
                return vnode;
            }
            function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
                return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
            }
            function createBlock(type, props, children, patchFlag, dynamicProps) {
                return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
            }
            function isVNode(value) {
                return value ? value.__v_isVNode === true : false;
            }
            function isSameVNodeType(n1, n2) {
                if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
                    n1.shapeFlag &= ~256;
                    n2.shapeFlag &= ~512;
                    return false;
                }
                return n1.type === n2.type && n1.key === n2.key;
            }
            let vnodeArgsTransformer;
            function transformVNodeArgs(transformer) {
                vnodeArgsTransformer = transformer;
            }
            const createVNodeWithArgsTransform = (...args) => _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
            const InternalObjectKey = `__vInternal`;
            const normalizeKey = ({key}) => key != null ? key : null;
            const normalizeRef = ({ref, ref_key, ref_for}) => {
                if (typeof ref === "number") ref = "" + ref;
                return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? {
                    i: currentRenderingInstance,
                    r: ref,
                    k: ref_key,
                    f: !!ref_for
                } : ref : null;
            };
            function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = (type === Fragment ? 0 : 1), isBlockNode = false, needFullChildrenNormalization = false) {
                const vnode = {
                    __v_isVNode: true,
                    __v_skip: true,
                    type,
                    props,
                    key: props && normalizeKey(props),
                    ref: props && normalizeRef(props),
                    scopeId: currentScopeId,
                    slotScopeIds: null,
                    children,
                    component: null,
                    suspense: null,
                    ssContent: null,
                    ssFallback: null,
                    dirs: null,
                    transition: null,
                    el: null,
                    anchor: null,
                    target: null,
                    targetAnchor: null,
                    staticCount: 0,
                    shapeFlag,
                    patchFlag,
                    dynamicProps,
                    dynamicChildren: null,
                    appContext: null,
                    ctx: currentRenderingInstance
                };
                if (needFullChildrenNormalization) {
                    normalizeChildren(vnode, children);
                    if (shapeFlag & 128) type.normalize(vnode);
                } else if (children) vnode.shapeFlag |= isString(children) ? 8 : 16;
                if (vnode.key !== vnode.key) warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
                if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
                return vnode;
            }
            const createVNode = createVNodeWithArgsTransform;
            function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
                if (!type || type === NULL_DYNAMIC_COMPONENT) {
                    if (!type) warn(`Invalid vnode type when creating vnode: ${type}.`);
                    type = Comment;
                }
                if (isVNode(type)) {
                    const cloned = cloneVNode(type, props, true);
                    if (children) normalizeChildren(cloned, children);
                    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned; else currentBlock.push(cloned);
                    cloned.patchFlag |= -2;
                    return cloned;
                }
                if (isClassComponent(type)) type = type.__vccOpts;
                if (props) {
                    props = guardReactiveProps(props);
                    let {class: klass, style} = props;
                    if (klass && !isString(klass)) props.class = normalizeClass(klass);
                    if (isObject(style)) {
                        if (isProxy(style) && !isArray(style)) style = extend({}, style);
                        props.style = normalizeStyle(style);
                    }
                }
                const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
                if (shapeFlag & 4 && isProxy(type)) {
                    type = toRaw(type);
                    warn(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `\n  Component that was made reactive: `, type);
                }
                return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
            }
            function guardReactiveProps(props) {
                if (!props) return null;
                return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
            }
            function cloneVNode(vnode, extraProps, mergeRef = false) {
                const {props, ref, patchFlag, children} = vnode;
                const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
                const cloned = {
                    __v_isVNode: true,
                    __v_skip: true,
                    type: vnode.type,
                    props: mergedProps,
                    key: mergedProps && normalizeKey(mergedProps),
                    ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ ref, normalizeRef(extraProps) ] : normalizeRef(extraProps) : ref,
                    scopeId: vnode.scopeId,
                    slotScopeIds: vnode.slotScopeIds,
                    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
                    target: vnode.target,
                    targetAnchor: vnode.targetAnchor,
                    staticCount: vnode.staticCount,
                    shapeFlag: vnode.shapeFlag,
                    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
                    dynamicProps: vnode.dynamicProps,
                    dynamicChildren: vnode.dynamicChildren,
                    appContext: vnode.appContext,
                    dirs: vnode.dirs,
                    transition: vnode.transition,
                    component: vnode.component,
                    suspense: vnode.suspense,
                    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
                    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
                    el: vnode.el,
                    anchor: vnode.anchor,
                    ctx: vnode.ctx,
                    ce: vnode.ce
                };
                return cloned;
            }
            function deepCloneVNode(vnode) {
                const cloned = cloneVNode(vnode);
                if (isArray(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
                return cloned;
            }
            function createTextVNode(text = " ", flag = 0) {
                return createVNode(Text, null, text, flag);
            }
            function createStaticVNode(content, numberOfNodes) {
                const vnode = createVNode(Static, null, content);
                vnode.staticCount = numberOfNodes;
                return vnode;
            }
            function createCommentVNode(text = "", asBlock = false) {
                return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
            }
            function normalizeVNode(child) {
                if (child == null || typeof child === "boolean") return createVNode(Comment); else if (isArray(child)) return createVNode(Fragment, null, child.slice()); else if (typeof child === "object") return cloneIfMounted(child); else return createVNode(Text, null, String(child));
            }
            function cloneIfMounted(child) {
                return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
            }
            function normalizeChildren(vnode, children) {
                let type = 0;
                const {shapeFlag} = vnode;
                if (children == null) children = null; else if (isArray(children)) type = 16; else if (typeof children === "object") if (shapeFlag & (1 | 64)) {
                    const slot = children.default;
                    if (slot) {
                        slot._c && (slot._d = false);
                        normalizeChildren(vnode, slot());
                        slot._c && (slot._d = true);
                    }
                    return;
                } else {
                    type = 32;
                    const slotFlag = children._;
                    if (!slotFlag && !(InternalObjectKey in children)) children._ctx = currentRenderingInstance; else if (slotFlag === 3 && currentRenderingInstance) if (currentRenderingInstance.slots._ === 1) children._ = 1; else {
                        children._ = 2;
                        vnode.patchFlag |= 1024;
                    }
                } else if (isFunction(children)) {
                    children = {
                        default: children,
                        _ctx: currentRenderingInstance
                    };
                    type = 32;
                } else {
                    children = String(children);
                    if (shapeFlag & 64) {
                        type = 16;
                        children = [ createTextVNode(children) ];
                    } else type = 8;
                }
                vnode.children = children;
                vnode.shapeFlag |= type;
            }
            function mergeProps(...args) {
                const ret = {};
                for (let i = 0; i < args.length; i++) {
                    const toMerge = args[i];
                    for (const key in toMerge) if (key === "class") {
                        if (ret.class !== toMerge.class) ret.class = normalizeClass([ ret.class, toMerge.class ]);
                    } else if (key === "style") ret.style = normalizeStyle([ ret.style, toMerge.style ]); else if (isOn(key)) {
                        const existing = ret[key];
                        const incoming = toMerge[key];
                        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
                    } else if (key !== "") ret[key] = toMerge[key];
                }
                return ret;
            }
            function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
                callWithAsyncErrorHandling(hook, instance, 7, [ vnode, prevVNode ]);
            }
            const emptyAppContext = createAppContext();
            let uid = 0;
            function createComponentInstance(vnode, parent, suspense) {
                const type = vnode.type;
                const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
                const instance = {
                    uid: uid++,
                    vnode,
                    type,
                    parent,
                    appContext,
                    root: null,
                    next: null,
                    subTree: null,
                    effect: null,
                    update: null,
                    scope: new EffectScope(true),
                    render: null,
                    proxy: null,
                    exposed: null,
                    exposeProxy: null,
                    withProxy: null,
                    provides: parent ? parent.provides : Object.create(appContext.provides),
                    accessCache: null,
                    renderCache: [],
                    components: null,
                    directives: null,
                    propsOptions: normalizePropsOptions(type, appContext),
                    emitsOptions: normalizeEmitsOptions(type, appContext),
                    emit: null,
                    emitted: null,
                    propsDefaults: EMPTY_OBJ,
                    inheritAttrs: type.inheritAttrs,
                    ctx: EMPTY_OBJ,
                    data: EMPTY_OBJ,
                    props: EMPTY_OBJ,
                    attrs: EMPTY_OBJ,
                    slots: EMPTY_OBJ,
                    refs: EMPTY_OBJ,
                    setupState: EMPTY_OBJ,
                    setupContext: null,
                    attrsProxy: null,
                    slotsProxy: null,
                    suspense,
                    suspenseId: suspense ? suspense.pendingId : 0,
                    asyncDep: null,
                    asyncResolved: false,
                    isMounted: false,
                    isUnmounted: false,
                    isDeactivated: false,
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
                    sp: null
                };
                instance.ctx = createDevRenderContext(instance);
                instance.root = parent ? parent.root : instance;
                instance.emit = emit.bind(null, instance);
                if (vnode.ce) vnode.ce(instance);
                return instance;
            }
            let currentInstance = null;
            const getCurrentInstance = () => currentInstance || currentRenderingInstance;
            let internalSetCurrentInstance;
            internalSetCurrentInstance = i => {
                currentInstance = i;
            };
            const setCurrentInstance = instance => {
                internalSetCurrentInstance(instance);
                instance.scope.on();
            };
            const unsetCurrentInstance = () => {
                currentInstance && currentInstance.scope.off();
                internalSetCurrentInstance(null);
            };
            const isBuiltInTag = makeMap("slot,component");
            function validateComponentName(name, config) {
                const appIsNativeTag = config.isNativeTag || NO;
                if (isBuiltInTag(name) || appIsNativeTag(name)) warn("Do not use built-in or reserved HTML elements as component id: " + name);
            }
            function isStatefulComponent(instance) {
                return instance.vnode.shapeFlag & 4;
            }
            let isInSSRComponentSetup = false;
            function setupComponent(instance, isSSR = false) {
                isInSSRComponentSetup = isSSR;
                const {props, children} = instance.vnode;
                const isStateful = isStatefulComponent(instance);
                initProps(instance, props, isStateful, isSSR);
                initSlots(instance, children);
                const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
                isInSSRComponentSetup = false;
                return setupResult;
            }
            function setupStatefulComponent(instance, isSSR) {
                var _a;
                const Component = instance.type;
                if (Component.name) validateComponentName(Component.name, instance.appContext.config);
                if (Component.components) {
                    const names = Object.keys(Component.components);
                    for (let i = 0; i < names.length; i++) validateComponentName(names[i], instance.appContext.config);
                }
                if (Component.directives) {
                    const names = Object.keys(Component.directives);
                    for (let i = 0; i < names.length; i++) validateDirectiveName(names[i]);
                }
                if (Component.compilerOptions && isRuntimeOnly()) warn(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
                instance.accessCache = Object.create(null);
                instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
                exposePropsOnRenderContext(instance);
                const {setup} = Component;
                if (setup) {
                    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
                    setCurrentInstance(instance);
                    pauseTracking();
                    const setupResult = callWithErrorHandling(setup, instance, 0, [ shallowReadonly(instance.props), setupContext ]);
                    resetTracking();
                    unsetCurrentInstance();
                    if (isPromise(setupResult)) {
                        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
                        if (isSSR) return setupResult.then((resolvedResult => {
                            handleSetupResult(instance, resolvedResult, isSSR);
                        })).catch((e => {
                            handleError(e, instance, 0);
                        })); else {
                            instance.asyncDep = setupResult;
                            if (!instance.suspense) {
                                const name = (_a = Component.name) != null ? _a : "Anonymous";
                                warn(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
                            }
                        }
                    } else handleSetupResult(instance, setupResult, isSSR);
                } else finishComponentSetup(instance, isSSR);
            }
            function handleSetupResult(instance, setupResult, isSSR) {
                if (isFunction(setupResult)) instance.render = setupResult; else if (isObject(setupResult)) {
                    if (isVNode(setupResult)) warn(`setup() should not return VNodes directly - return a render function instead.`);
                    instance.devtoolsRawSetupState = setupResult;
                    instance.setupState = proxyRefs(setupResult);
                    exposeSetupStateOnRenderContext(instance);
                } else if (setupResult !== void 0) warn(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
                finishComponentSetup(instance, isSSR);
            }
            let compile$1;
            let installWithProxy;
            function registerRuntimeCompiler(_compile) {
                compile$1 = _compile;
                installWithProxy = i => {
                    if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
                };
            }
            const isRuntimeOnly = () => !compile$1;
            function finishComponentSetup(instance, isSSR, skipOptions) {
                const Component = instance.type;
                if (!instance.render) {
                    if (!isSSR && compile$1 && !Component.render) {
                        const template = Component.template || resolveMergedOptions(instance).template;
                        if (template) {
                            startMeasure(instance, `compile`);
                            const {isCustomElement, compilerOptions} = instance.appContext.config;
                            const {delimiters, compilerOptions: componentCompilerOptions} = Component;
                            const finalCompilerOptions = extend(extend({
                                isCustomElement,
                                delimiters
                            }, compilerOptions), componentCompilerOptions);
                            Component.render = compile$1(template, finalCompilerOptions);
                            endMeasure(instance, `compile`);
                        }
                    }
                    instance.render = Component.render || NOOP;
                    if (installWithProxy) installWithProxy(instance);
                }
                setCurrentInstance(instance);
                pauseTracking();
                applyOptions(instance);
                resetTracking();
                unsetCurrentInstance();
                if (!Component.render && instance.render === NOOP && !isSSR) if (!compile$1 && Component.template) warn(`Component provided template option but runtime compilation is not supported in this build of Vue.` + ` Use "vue.global.js" instead.`); else warn(`Component is missing template or render function.`);
            }
            function getAttrsProxy(instance) {
                return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
                    get(target, key) {
                        markAttrsAccessed();
                        track(instance, "get", "$attrs");
                        return target[key];
                    },
                    set() {
                        warn(`setupContext.attrs is readonly.`);
                        return false;
                    },
                    deleteProperty() {
                        warn(`setupContext.attrs is readonly.`);
                        return false;
                    }
                }));
            }
            function getSlotsProxy(instance) {
                return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
                    get(target, key) {
                        track(instance, "get", "$slots");
                        return target[key];
                    }
                }));
            }
            function createSetupContext(instance) {
                const expose = exposed => {
                    if (instance.exposed) warn(`expose() should be called only once per setup().`);
                    if (exposed != null) {
                        let exposedType = typeof exposed;
                        if (exposedType === "object") if (isArray(exposed)) exposedType = "array"; else if (isRef(exposed)) exposedType = "ref";
                        if (exposedType !== "object") warn(`expose() should be passed a plain object, received ${exposedType}.`);
                    }
                    instance.exposed = exposed || {};
                };
                return Object.freeze({
                    get attrs() {
                        return getAttrsProxy(instance);
                    },
                    get slots() {
                        return getSlotsProxy(instance);
                    },
                    get emit() {
                        return (event, ...args) => instance.emit(event, ...args);
                    },
                    expose
                });
            }
            function getExposeProxy(instance) {
                if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
                    get(target, key) {
                        if (key in target) return target[key]; else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
                    },
                    has(target, key) {
                        return key in target || key in publicPropertiesMap;
                    }
                }));
            }
            const classifyRE = /(?:^|[-_])(\w)/g;
            const classify = str => str.replace(classifyRE, (c => c.toUpperCase())).replace(/[-_]/g, "");
            function getComponentName(Component, includeInferred = true) {
                return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
            }
            function formatComponentName(instance, Component, isRoot = false) {
                let name = getComponentName(Component);
                if (!name && Component.__file) {
                    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
                    if (match) name = match[1];
                }
                if (!name && instance && instance.parent) {
                    const inferFromRegistry = registry => {
                        for (const key in registry) if (registry[key] === Component) return key;
                    };
                    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
                }
                return name ? classify(name) : isRoot ? `App` : `Anonymous`;
            }
            function isClassComponent(value) {
                return isFunction(value) && "__vccOpts" in value;
            }
            const computed = (getterOrOptions, debugOptions) => computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
            function h(type, propsOrChildren, children) {
                const l = arguments.length;
                if (l === 2) if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
                    if (isVNode(propsOrChildren)) return createVNode(type, null, [ propsOrChildren ]);
                    return createVNode(type, propsOrChildren);
                } else return createVNode(type, null, propsOrChildren); else {
                    if (l > 3) children = Array.prototype.slice.call(arguments, 2); else if (l === 3 && isVNode(children)) children = [ children ];
                    return createVNode(type, propsOrChildren, children);
                }
            }
            const ssrContextKey = Symbol.for("v-scx");
            const useSSRContext = () => {
                warn(`useSSRContext() is not supported in the global build.`);
            };
            function initCustomFormatter() {
                if (typeof window === "undefined") return;
                const vueStyle = {
                    style: "color:#3ba776"
                };
                const numberStyle = {
                    style: "color:#0b1bc9"
                };
                const stringStyle = {
                    style: "color:#b62e24"
                };
                const keywordStyle = {
                    style: "color:#9d288c"
                };
                const formatter = {
                    header(obj) {
                        if (!isObject(obj)) return null;
                        if (obj.__isVue) return [ "div", vueStyle, `VueInstance` ]; else if (isRef(obj)) return [ "div", {}, [ "span", vueStyle, genRefFlag(obj) ], "<", formatValue(obj.value), `>` ]; else if (isReactive(obj)) return [ "div", {}, [ "span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive" ], "<", formatValue(obj), `>${isReadonly(obj) ? ` (readonly)` : ``}` ]; else if (isReadonly(obj)) return [ "div", {}, [ "span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly" ], "<", formatValue(obj), ">" ];
                        return null;
                    },
                    hasBody(obj) {
                        return obj && obj.__isVue;
                    },
                    body(obj) {
                        if (obj && obj.__isVue) return [ "div", {}, ...formatInstance(obj.$) ];
                    }
                };
                function formatInstance(instance) {
                    const blocks = [];
                    if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", toRaw(instance.props)));
                    if (instance.setupState !== EMPTY_OBJ) blocks.push(createInstanceBlock("setup", instance.setupState));
                    if (instance.data !== EMPTY_OBJ) blocks.push(createInstanceBlock("data", toRaw(instance.data)));
                    const computed = extractKeys(instance, "computed");
                    if (computed) blocks.push(createInstanceBlock("computed", computed));
                    const injected = extractKeys(instance, "inject");
                    if (injected) blocks.push(createInstanceBlock("injected", injected));
                    blocks.push([ "div", {}, [ "span", {
                        style: keywordStyle.style + ";opacity:0.66"
                    }, "$ (internal): " ], [ "object", {
                        object: instance
                    } ] ]);
                    return blocks;
                }
                function createInstanceBlock(type, target) {
                    target = extend({}, target);
                    if (!Object.keys(target).length) return [ "span", {} ];
                    return [ "div", {
                        style: "line-height:1.25em;margin-bottom:0.6em"
                    }, [ "div", {
                        style: "color:#476582"
                    }, type ], [ "div", {
                        style: "padding-left:1.25em"
                    }, ...Object.keys(target).map((key => [ "div", {}, [ "span", keywordStyle, key + ": " ], formatValue(target[key], false) ])) ] ];
                }
                function formatValue(v, asRaw = true) {
                    if (typeof v === "number") return [ "span", numberStyle, v ]; else if (typeof v === "string") return [ "span", stringStyle, JSON.stringify(v) ]; else if (typeof v === "boolean") return [ "span", keywordStyle, v ]; else if (isObject(v)) return [ "object", {
                        object: asRaw ? toRaw(v) : v
                    } ]; else return [ "span", stringStyle, String(v) ];
                }
                function extractKeys(instance, type) {
                    const Comp = instance.type;
                    if (isFunction(Comp)) return;
                    const extracted = {};
                    for (const key in instance.ctx) if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
                    return extracted;
                }
                function isKeyOfType(Comp, key, type) {
                    const opts = Comp[type];
                    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) return true;
                    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
                    if (Comp.mixins && Comp.mixins.some((m => isKeyOfType(m, key, type)))) return true;
                }
                function genRefFlag(v) {
                    if (isShallow(v)) return `ShallowRef`;
                    if (v.effect) return `ComputedRef`;
                    return `Ref`;
                }
                if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter); else window.devtoolsFormatters = [ formatter ];
            }
            function withMemo(memo, render, cache, index) {
                const cached = cache[index];
                if (cached && isMemoSame(cached, memo)) return cached;
                const ret = render();
                ret.memo = memo.slice();
                return cache[index] = ret;
            }
            function isMemoSame(cached, memo) {
                const prev = cached.memo;
                if (prev.length != memo.length) return false;
                for (let i = 0; i < prev.length; i++) if (hasChanged(prev[i], memo[i])) return false;
                if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
                return true;
            }
            const version = "3.3.4";
            const ssrUtils = null;
            const resolveFilter = null;
            const compatUtils = null;
            const svgNS = "http://www.w3.org/2000/svg";
            const doc = typeof document !== "undefined" ? document : null;
            const templateContainer = doc && doc.createElement("template");
            const nodeOps = {
                insert: (child, parent, anchor) => {
                    parent.insertBefore(child, anchor || null);
                },
                remove: child => {
                    const parent = child.parentNode;
                    if (parent) parent.removeChild(child);
                },
                createElement: (tag, isSVG, is, props) => {
                    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
                        is
                    } : void 0);
                    if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
                    return el;
                },
                createText: text => doc.createTextNode(text),
                createComment: text => doc.createComment(text),
                setText: (node, text) => {
                    node.nodeValue = text;
                },
                setElementText: (el, text) => {
                    el.textContent = text;
                },
                parentNode: node => node.parentNode,
                nextSibling: node => node.nextSibling,
                querySelector: selector => doc.querySelector(selector),
                setScopeId(el, id) {
                    el.setAttribute(id, "");
                },
                insertStaticContent(content, parent, anchor, isSVG, start, end) {
                    const before = anchor ? anchor.previousSibling : parent.lastChild;
                    if (start && (start === end || start.nextSibling)) while (true) {
                        parent.insertBefore(start.cloneNode(true), anchor);
                        if (start === end || !(start = start.nextSibling)) break;
                    } else {
                        templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
                        const template = templateContainer.content;
                        if (isSVG) {
                            const wrapper = template.firstChild;
                            while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
                            template.removeChild(wrapper);
                        }
                        parent.insertBefore(template, anchor);
                    }
                    return [ before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild ];
                }
            };
            function patchClass(el, value, isSVG) {
                const transitionClasses = el._vtc;
                if (transitionClasses) value = (value ? [ value, ...transitionClasses ] : [ ...transitionClasses ]).join(" ");
                if (value == null) el.removeAttribute("class"); else if (isSVG) el.setAttribute("class", value); else el.className = value;
            }
            function patchStyle(el, prev, next) {
                const style = el.style;
                const isCssString = isString(next);
                if (next && !isCssString) {
                    if (prev && !isString(prev)) for (const key in prev) if (next[key] == null) setStyle(style, key, "");
                    for (const key in next) setStyle(style, key, next[key]);
                } else {
                    const currentDisplay = style.display;
                    if (isCssString) {
                        if (prev !== next) style.cssText = next;
                    } else if (prev) el.removeAttribute("style");
                    if ("_vod" in el) style.display = currentDisplay;
                }
            }
            const semicolonRE = /[^\\];\s*$/;
            const importantRE = /\s*!important$/;
            function setStyle(style, name, val) {
                if (isArray(val)) val.forEach((v => setStyle(style, name, v))); else {
                    if (val == null) val = "";
                    if (semicolonRE.test(val)) warn(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
                    if (name.startsWith("--")) style.setProperty(name, val); else {
                        const prefixed = autoPrefix(style, name);
                        if (importantRE.test(val)) style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important"); else style[prefixed] = val;
                    }
                }
            }
            const prefixes = [ "Webkit", "Moz", "ms" ];
            const prefixCache = {};
            function autoPrefix(style, rawName) {
                const cached = prefixCache[rawName];
                if (cached) return cached;
                let name = camelize(rawName);
                if (name !== "filter" && name in style) return prefixCache[rawName] = name;
                name = capitalize(name);
                for (let i = 0; i < prefixes.length; i++) {
                    const prefixed = prefixes[i] + name;
                    if (prefixed in style) return prefixCache[rawName] = prefixed;
                }
                return rawName;
            }
            const xlinkNS = "http://www.w3.org/1999/xlink";
            function patchAttr(el, key, value, isSVG, instance) {
                if (isSVG && key.startsWith("xlink:")) if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length)); else el.setAttributeNS(xlinkNS, key, value); else {
                    const isBoolean = isSpecialBooleanAttr(key);
                    if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key); else el.setAttribute(key, isBoolean ? "" : value);
                }
            }
            function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
                if (key === "innerHTML" || key === "textContent") {
                    if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
                    el[key] = value == null ? "" : value;
                    return;
                }
                const tag = el.tagName;
                if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
                    el._value = value;
                    const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
                    const newValue = value == null ? "" : value;
                    if (oldValue !== newValue) el.value = newValue;
                    if (value == null) el.removeAttribute(key);
                    return;
                }
                let needRemove = false;
                if (value === "" || value == null) {
                    const type = typeof el[key];
                    if (type === "boolean") value = includeBooleanAttr(value); else if (value == null && type === "string") {
                        value = "";
                        needRemove = true;
                    } else if (type === "number") {
                        value = 0;
                        needRemove = true;
                    }
                }
                try {
                    el[key] = value;
                } catch (e) {
                    if (!needRemove) warn(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
                }
                needRemove && el.removeAttribute(key);
            }
            function addEventListener(el, event, handler, options) {
                el.addEventListener(event, handler, options);
            }
            function removeEventListener(el, event, handler, options) {
                el.removeEventListener(event, handler, options);
            }
            function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
                const invokers = el._vei || (el._vei = {});
                const existingInvoker = invokers[rawName];
                if (nextValue && existingInvoker) existingInvoker.value = nextValue; else {
                    const [name, options] = parseName(rawName);
                    if (nextValue) {
                        const invoker = invokers[rawName] = createInvoker(nextValue, instance);
                        addEventListener(el, name, invoker, options);
                    } else if (existingInvoker) {
                        removeEventListener(el, name, existingInvoker, options);
                        invokers[rawName] = void 0;
                    }
                }
            }
            const optionsModifierRE = /(?:Once|Passive|Capture)$/;
            function parseName(name) {
                let options;
                if (optionsModifierRE.test(name)) {
                    options = {};
                    let m;
                    while (m = name.match(optionsModifierRE)) {
                        name = name.slice(0, name.length - m[0].length);
                        options[m[0].toLowerCase()] = true;
                    }
                }
                const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
                return [ event, options ];
            }
            let cachedNow = 0;
            const p = Promise.resolve();
            const getNow = () => cachedNow || (p.then((() => cachedNow = 0)), cachedNow = Date.now());
            function createInvoker(initialValue, instance) {
                const invoker = e => {
                    if (!e._vts) e._vts = Date.now(); else if (e._vts <= invoker.attached) return;
                    callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [ e ]);
                };
                invoker.value = initialValue;
                invoker.attached = getNow();
                return invoker;
            }
            function patchStopImmediatePropagation(e, value) {
                if (isArray(value)) {
                    const originalStop = e.stopImmediatePropagation;
                    e.stopImmediatePropagation = () => {
                        originalStop.call(e);
                        e._stopped = true;
                    };
                    return value.map((fn => e2 => !e2._stopped && fn && fn(e2)));
                } else return value;
            }
            const nativeOnRE = /^on[a-z]/;
            const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
                if (key === "class") patchClass(el, nextValue, isSVG); else if (key === "style") patchStyle(el, prevValue, nextValue); else if (isOn(key)) {
                    if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
                } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), 
                false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren); else {
                    if (key === "true-value") el._trueValue = nextValue; else if (key === "false-value") el._falseValue = nextValue;
                    patchAttr(el, key, nextValue, isSVG);
                }
            };
            function shouldSetAsProp(el, key, value, isSVG) {
                if (isSVG) {
                    if (key === "innerHTML" || key === "textContent") return true;
                    if (key in el && nativeOnRE.test(key) && isFunction(value)) return true;
                    return false;
                }
                if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
                if (key === "form") return false;
                if (key === "list" && el.tagName === "INPUT") return false;
                if (key === "type" && el.tagName === "TEXTAREA") return false;
                if (nativeOnRE.test(key) && isString(value)) return false;
                return key in el;
            }
            function defineCustomElement(options, hydrate2) {
                const Comp = defineComponent(options);
                class VueCustomElement extends VueElement {
                    constructor(initialProps) {
                        super(Comp, initialProps, hydrate2);
                    }
                }
                VueCustomElement.def = Comp;
                return VueCustomElement;
            }
            const defineSSRCustomElement = options => defineCustomElement(options, hydrate);
            const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
            class VueElement extends BaseClass {
                constructor(_def, _props = {}, hydrate2) {
                    super();
                    this._def = _def;
                    this._props = _props;
                    this._instance = null;
                    this._connected = false;
                    this._resolved = false;
                    this._numberProps = null;
                    if (this.shadowRoot && hydrate2) hydrate2(this._createVNode(), this.shadowRoot); else {
                        if (this.shadowRoot) warn(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
                        this.attachShadow({
                            mode: "open"
                        });
                        if (!this._def.__asyncLoader) this._resolveProps(this._def);
                    }
                }
                connectedCallback() {
                    this._connected = true;
                    if (!this._instance) if (this._resolved) this._update(); else this._resolveDef();
                }
                disconnectedCallback() {
                    this._connected = false;
                    nextTick((() => {
                        if (!this._connected) {
                            render(null, this.shadowRoot);
                            this._instance = null;
                        }
                    }));
                }
                _resolveDef() {
                    this._resolved = true;
                    for (let i = 0; i < this.attributes.length; i++) this._setAttr(this.attributes[i].name);
                    new MutationObserver((mutations => {
                        for (const m of mutations) this._setAttr(m.attributeName);
                    })).observe(this, {
                        attributes: true
                    });
                    const resolve = (def, isAsync = false) => {
                        const {props, styles} = def;
                        let numberProps;
                        if (props && !isArray(props)) for (const key in props) {
                            const opt = props[key];
                            if (opt === Number || opt && opt.type === Number) {
                                if (key in this._props) this._props[key] = toNumber(this._props[key]);
                                (numberProps || (numberProps = Object.create(null)))[camelize(key)] = true;
                            }
                        }
                        this._numberProps = numberProps;
                        if (isAsync) this._resolveProps(def);
                        this._applyStyles(styles);
                        this._update();
                    };
                    const asyncDef = this._def.__asyncLoader;
                    if (asyncDef) asyncDef().then((def => resolve(def, true))); else resolve(this._def);
                }
                _resolveProps(def) {
                    const {props} = def;
                    const declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
                    for (const key of Object.keys(this)) if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key], true, false);
                    for (const key of declaredPropKeys.map(camelize)) Object.defineProperty(this, key, {
                        get() {
                            return this._getProp(key);
                        },
                        set(val) {
                            this._setProp(key, val);
                        }
                    });
                }
                _setAttr(key) {
                    let value = this.getAttribute(key);
                    const camelKey = camelize(key);
                    if (this._numberProps && this._numberProps[camelKey]) value = toNumber(value);
                    this._setProp(camelKey, value, false);
                }
                _getProp(key) {
                    return this._props[key];
                }
                _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
                    if (val !== this._props[key]) {
                        this._props[key] = val;
                        if (shouldUpdate && this._instance) this._update();
                        if (shouldReflect) if (val === true) this.setAttribute(hyphenate(key), ""); else if (typeof val === "string" || typeof val === "number") this.setAttribute(hyphenate(key), val + ""); else if (!val) this.removeAttribute(hyphenate(key));
                    }
                }
                _update() {
                    render(this._createVNode(), this.shadowRoot);
                }
                _createVNode() {
                    const vnode = createVNode(this._def, extend({}, this._props));
                    if (!this._instance) vnode.ce = instance => {
                        this._instance = instance;
                        instance.isCE = true;
                        instance.ceReload = newStyles => {
                            if (this._styles) {
                                this._styles.forEach((s => this.shadowRoot.removeChild(s)));
                                this._styles.length = 0;
                            }
                            this._applyStyles(newStyles);
                            this._instance = null;
                            this._update();
                        };
                        const dispatch = (event, args) => {
                            this.dispatchEvent(new CustomEvent(event, {
                                detail: args
                            }));
                        };
                        instance.emit = (event, ...args) => {
                            dispatch(event, args);
                            if (hyphenate(event) !== event) dispatch(hyphenate(event), args);
                        };
                        let parent = this;
                        while (parent = parent && (parent.parentNode || parent.host)) if (parent instanceof VueElement) {
                            instance.parent = parent._instance;
                            instance.provides = parent._instance.provides;
                            break;
                        }
                    };
                    return vnode;
                }
                _applyStyles(styles) {
                    if (styles) styles.forEach((css => {
                        const s = document.createElement("style");
                        s.textContent = css;
                        this.shadowRoot.appendChild(s);
                        (this._styles || (this._styles = [])).push(s);
                    }));
                }
            }
            function useCssModule(name = "$style") {
                warn(`useCssModule() is not supported in the global build.`);
                return EMPTY_OBJ;
            }
            function useCssVars(getter) {
                const instance = getCurrentInstance();
                if (!instance) {
                    warn(`useCssVars is called without current active component instance.`);
                    return;
                }
                const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
                    Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node => setVarsOnNode(node, vars)));
                };
                const setVars = () => {
                    const vars = getter(instance.proxy);
                    setVarsOnVNode(instance.subTree, vars);
                    updateTeleports(vars);
                };
                watchPostEffect(setVars);
                onMounted((() => {
                    const ob = new MutationObserver(setVars);
                    ob.observe(instance.subTree.el.parentNode, {
                        childList: true
                    });
                    onUnmounted((() => ob.disconnect()));
                }));
            }
            function setVarsOnVNode(vnode, vars) {
                if (vnode.shapeFlag & 128) {
                    const suspense = vnode.suspense;
                    vnode = suspense.activeBranch;
                    if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push((() => {
                        setVarsOnVNode(suspense.activeBranch, vars);
                    }));
                }
                while (vnode.component) vnode = vnode.component.subTree;
                if (vnode.shapeFlag & 1 && vnode.el) setVarsOnNode(vnode.el, vars); else if (vnode.type === Fragment) vnode.children.forEach((c => setVarsOnVNode(c, vars))); else if (vnode.type === Static) {
                    let {el, anchor} = vnode;
                    while (el) {
                        setVarsOnNode(el, vars);
                        if (el === anchor) break;
                        el = el.nextSibling;
                    }
                }
            }
            function setVarsOnNode(el, vars) {
                if (el.nodeType === 1) {
                    const style = el.style;
                    for (const key in vars) style.setProperty(`--${key}`, vars[key]);
                }
            }
            const TRANSITION$1 = "transition";
            const ANIMATION = "animation";
            const Transition = (props, {slots}) => h(BaseTransition, resolveTransitionProps(props), slots);
            Transition.displayName = "Transition";
            const DOMTransitionPropsValidators = {
                name: String,
                type: String,
                css: {
                    type: Boolean,
                    default: true
                },
                duration: [ String, Number, Object ],
                enterFromClass: String,
                enterActiveClass: String,
                enterToClass: String,
                appearFromClass: String,
                appearActiveClass: String,
                appearToClass: String,
                leaveFromClass: String,
                leaveActiveClass: String,
                leaveToClass: String
            };
            const TransitionPropsValidators = Transition.props = extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
            const callHook = (hook, args = []) => {
                if (isArray(hook)) hook.forEach((h2 => h2(...args))); else if (hook) hook(...args);
            };
            const hasExplicitCallback = hook => hook ? isArray(hook) ? hook.some((h2 => h2.length > 1)) : hook.length > 1 : false;
            function resolveTransitionProps(rawProps) {
                const baseProps = {};
                for (const key in rawProps) if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
                if (rawProps.css === false) return baseProps;
                const {name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to`} = rawProps;
                const durations = normalizeDuration(duration);
                const enterDuration = durations && durations[0];
                const leaveDuration = durations && durations[1];
                const {onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled} = baseProps;
                const finishEnter = (el, isAppear, done) => {
                    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
                    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
                    done && done();
                };
                const finishLeave = (el, done) => {
                    el._isLeaving = false;
                    removeTransitionClass(el, leaveFromClass);
                    removeTransitionClass(el, leaveToClass);
                    removeTransitionClass(el, leaveActiveClass);
                    done && done();
                };
                const makeEnterHook = isAppear => (el, done) => {
                    const hook = isAppear ? onAppear : onEnter;
                    const resolve = () => finishEnter(el, isAppear, done);
                    callHook(hook, [ el, resolve ]);
                    nextFrame((() => {
                        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                        if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
                    }));
                };
                return extend(baseProps, {
                    onBeforeEnter(el) {
                        callHook(onBeforeEnter, [ el ]);
                        addTransitionClass(el, enterFromClass);
                        addTransitionClass(el, enterActiveClass);
                    },
                    onBeforeAppear(el) {
                        callHook(onBeforeAppear, [ el ]);
                        addTransitionClass(el, appearFromClass);
                        addTransitionClass(el, appearActiveClass);
                    },
                    onEnter: makeEnterHook(false),
                    onAppear: makeEnterHook(true),
                    onLeave(el, done) {
                        el._isLeaving = true;
                        const resolve = () => finishLeave(el, done);
                        addTransitionClass(el, leaveFromClass);
                        forceReflow();
                        addTransitionClass(el, leaveActiveClass);
                        nextFrame((() => {
                            if (!el._isLeaving) return;
                            removeTransitionClass(el, leaveFromClass);
                            addTransitionClass(el, leaveToClass);
                            if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
                        }));
                        callHook(onLeave, [ el, resolve ]);
                    },
                    onEnterCancelled(el) {
                        finishEnter(el, false);
                        callHook(onEnterCancelled, [ el ]);
                    },
                    onAppearCancelled(el) {
                        finishEnter(el, true);
                        callHook(onAppearCancelled, [ el ]);
                    },
                    onLeaveCancelled(el) {
                        finishLeave(el);
                        callHook(onLeaveCancelled, [ el ]);
                    }
                });
            }
            function normalizeDuration(duration) {
                if (duration == null) return null; else if (isObject(duration)) return [ NumberOf(duration.enter), NumberOf(duration.leave) ]; else {
                    const n = NumberOf(duration);
                    return [ n, n ];
                }
            }
            function NumberOf(val) {
                const res = toNumber(val);
                assertNumber(res, "<transition> explicit duration");
                return res;
            }
            function addTransitionClass(el, cls) {
                cls.split(/\s+/).forEach((c => c && el.classList.add(c)));
                (el._vtc || (el._vtc = new Set)).add(cls);
            }
            function removeTransitionClass(el, cls) {
                cls.split(/\s+/).forEach((c => c && el.classList.remove(c)));
                const {_vtc} = el;
                if (_vtc) {
                    _vtc.delete(cls);
                    if (!_vtc.size) el._vtc = void 0;
                }
            }
            function nextFrame(cb) {
                requestAnimationFrame((() => {
                    requestAnimationFrame(cb);
                }));
            }
            let endId = 0;
            function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
                const id = el._endId = ++endId;
                const resolveIfNotStale = () => {
                    if (id === el._endId) resolve();
                };
                if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
                const {type, timeout, propCount} = getTransitionInfo(el, expectedType);
                if (!type) return resolve();
                const endEvent = type + "end";
                let ended = 0;
                const end = () => {
                    el.removeEventListener(endEvent, onEnd);
                    resolveIfNotStale();
                };
                const onEnd = e => {
                    if (e.target === el && ++ended >= propCount) end();
                };
                setTimeout((() => {
                    if (ended < propCount) end();
                }), timeout + 1);
                el.addEventListener(endEvent, onEnd);
            }
            function getTransitionInfo(el, expectedType) {
                const styles = window.getComputedStyle(el);
                const getStyleProperties = key => (styles[key] || "").split(", ");
                const transitionDelays = getStyleProperties(`${TRANSITION$1}Delay`);
                const transitionDurations = getStyleProperties(`${TRANSITION$1}Duration`);
                const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
                const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
                const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
                const animationTimeout = getTimeout(animationDelays, animationDurations);
                let type = null;
                let timeout = 0;
                let propCount = 0;
                if (expectedType === TRANSITION$1) {
                    if (transitionTimeout > 0) {
                        type = TRANSITION$1;
                        timeout = transitionTimeout;
                        propCount = transitionDurations.length;
                    }
                } else if (expectedType === ANIMATION) {
                    if (animationTimeout > 0) {
                        type = ANIMATION;
                        timeout = animationTimeout;
                        propCount = animationDurations.length;
                    }
                } else {
                    timeout = Math.max(transitionTimeout, animationTimeout);
                    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION$1 : ANIMATION : null;
                    propCount = type ? type === TRANSITION$1 ? transitionDurations.length : animationDurations.length : 0;
                }
                const hasTransform = type === TRANSITION$1 && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION$1}Property`).toString());
                return {
                    type,
                    timeout,
                    propCount,
                    hasTransform
                };
            }
            function getTimeout(delays, durations) {
                while (delays.length < durations.length) delays = delays.concat(delays);
                return Math.max(...durations.map(((d, i) => toMs(d) + toMs(delays[i]))));
            }
            function toMs(s) {
                return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
            }
            function forceReflow() {
                return document.body.offsetHeight;
            }
            const positionMap = new WeakMap;
            const newPositionMap = new WeakMap;
            const TransitionGroupImpl = {
                name: "TransitionGroup",
                props: extend({}, TransitionPropsValidators, {
                    tag: String,
                    moveClass: String
                }),
                setup(props, {slots}) {
                    const instance = getCurrentInstance();
                    const state = useTransitionState();
                    let prevChildren;
                    let children;
                    onUpdated((() => {
                        if (!prevChildren.length) return;
                        const moveClass = props.moveClass || `${props.name || "v"}-move`;
                        if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
                        prevChildren.forEach(callPendingCbs);
                        prevChildren.forEach(recordPosition);
                        const movedChildren = prevChildren.filter(applyTranslation);
                        forceReflow();
                        movedChildren.forEach((c => {
                            const el = c.el;
                            const style = el.style;
                            addTransitionClass(el, moveClass);
                            style.transform = style.webkitTransform = style.transitionDuration = "";
                            const cb = el._moveCb = e => {
                                if (e && e.target !== el) return;
                                if (!e || /transform$/.test(e.propertyName)) {
                                    el.removeEventListener("transitionend", cb);
                                    el._moveCb = null;
                                    removeTransitionClass(el, moveClass);
                                }
                            };
                            el.addEventListener("transitionend", cb);
                        }));
                    }));
                    return () => {
                        const rawProps = toRaw(props);
                        const cssTransitionProps = resolveTransitionProps(rawProps);
                        let tag = rawProps.tag || Fragment;
                        prevChildren = children;
                        children = slots.default ? getTransitionRawChildren(slots.default()) : [];
                        for (let i = 0; i < children.length; i++) {
                            const child = children[i];
                            if (child.key != null) setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance)); else warn(`<TransitionGroup> children must be keyed.`);
                        }
                        if (prevChildren) for (let i = 0; i < prevChildren.length; i++) {
                            const child = prevChildren[i];
                            setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                            positionMap.set(child, child.el.getBoundingClientRect());
                        }
                        return createVNode(tag, null, children);
                    };
                }
            };
            const removeMode = props => delete props.mode;
            removeMode(TransitionGroupImpl.props);
            const TransitionGroup = TransitionGroupImpl;
            function callPendingCbs(c) {
                const el = c.el;
                if (el._moveCb) el._moveCb();
                if (el._enterCb) el._enterCb();
            }
            function recordPosition(c) {
                newPositionMap.set(c, c.el.getBoundingClientRect());
            }
            function applyTranslation(c) {
                const oldPos = positionMap.get(c);
                const newPos = newPositionMap.get(c);
                const dx = oldPos.left - newPos.left;
                const dy = oldPos.top - newPos.top;
                if (dx || dy) {
                    const s = c.el.style;
                    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
                    s.transitionDuration = "0s";
                    return c;
                }
            }
            function hasCSSTransform(el, root, moveClass) {
                const clone = el.cloneNode();
                if (el._vtc) el._vtc.forEach((cls => {
                    cls.split(/\s+/).forEach((c => c && clone.classList.remove(c)));
                }));
                moveClass.split(/\s+/).forEach((c => c && clone.classList.add(c)));
                clone.style.display = "none";
                const container = root.nodeType === 1 ? root : root.parentNode;
                container.appendChild(clone);
                const {hasTransform} = getTransitionInfo(clone);
                container.removeChild(clone);
                return hasTransform;
            }
            const getModelAssigner = vnode => {
                const fn = vnode.props["onUpdate:modelValue"] || false;
                return isArray(fn) ? value => invokeArrayFns(fn, value) : fn;
            };
            function onCompositionStart(e) {
                e.target.composing = true;
            }
            function onCompositionEnd(e) {
                const target = e.target;
                if (target.composing) {
                    target.composing = false;
                    target.dispatchEvent(new Event("input"));
                }
            }
            const vModelText = {
                created(el, {modifiers: {lazy, trim, number}}, vnode) {
                    el._assign = getModelAssigner(vnode);
                    const castToNumber = number || vnode.props && vnode.props.type === "number";
                    addEventListener(el, lazy ? "change" : "input", (e => {
                        if (e.target.composing) return;
                        let domValue = el.value;
                        if (trim) domValue = domValue.trim();
                        if (castToNumber) domValue = looseToNumber(domValue);
                        el._assign(domValue);
                    }));
                    if (trim) addEventListener(el, "change", (() => {
                        el.value = el.value.trim();
                    }));
                    if (!lazy) {
                        addEventListener(el, "compositionstart", onCompositionStart);
                        addEventListener(el, "compositionend", onCompositionEnd);
                        addEventListener(el, "change", onCompositionEnd);
                    }
                },
                mounted(el, {value}) {
                    el.value = value == null ? "" : value;
                },
                beforeUpdate(el, {value, modifiers: {lazy, trim, number}}, vnode) {
                    el._assign = getModelAssigner(vnode);
                    if (el.composing) return;
                    if (document.activeElement === el && el.type !== "range") {
                        if (lazy) return;
                        if (trim && el.value.trim() === value) return;
                        if ((number || el.type === "number") && looseToNumber(el.value) === value) return;
                    }
                    const newValue = value == null ? "" : value;
                    if (el.value !== newValue) el.value = newValue;
                }
            };
            const vModelCheckbox = {
                deep: true,
                created(el, _, vnode) {
                    el._assign = getModelAssigner(vnode);
                    addEventListener(el, "change", (() => {
                        const modelValue = el._modelValue;
                        const elementValue = getValue(el);
                        const checked = el.checked;
                        const assign = el._assign;
                        if (isArray(modelValue)) {
                            const index = looseIndexOf(modelValue, elementValue);
                            const found = index !== -1;
                            if (checked && !found) assign(modelValue.concat(elementValue)); else if (!checked && found) {
                                const filtered = [ ...modelValue ];
                                filtered.splice(index, 1);
                                assign(filtered);
                            }
                        } else if (isSet(modelValue)) {
                            const cloned = new Set(modelValue);
                            if (checked) cloned.add(elementValue); else cloned.delete(elementValue);
                            assign(cloned);
                        } else assign(getCheckboxValue(el, checked));
                    }));
                },
                mounted: setChecked,
                beforeUpdate(el, binding, vnode) {
                    el._assign = getModelAssigner(vnode);
                    setChecked(el, binding, vnode);
                }
            };
            function setChecked(el, {value, oldValue}, vnode) {
                el._modelValue = value;
                if (isArray(value)) el.checked = looseIndexOf(value, vnode.props.value) > -1; else if (isSet(value)) el.checked = value.has(vnode.props.value); else if (value !== oldValue) el.checked = looseEqual(value, getCheckboxValue(el, true));
            }
            const vModelRadio = {
                created(el, {value}, vnode) {
                    el.checked = looseEqual(value, vnode.props.value);
                    el._assign = getModelAssigner(vnode);
                    addEventListener(el, "change", (() => {
                        el._assign(getValue(el));
                    }));
                },
                beforeUpdate(el, {value, oldValue}, vnode) {
                    el._assign = getModelAssigner(vnode);
                    if (value !== oldValue) el.checked = looseEqual(value, vnode.props.value);
                }
            };
            const vModelSelect = {
                deep: true,
                created(el, {value, modifiers: {number}}, vnode) {
                    const isSetModel = isSet(value);
                    addEventListener(el, "change", (() => {
                        const selectedVal = Array.prototype.filter.call(el.options, (o => o.selected)).map((o => number ? looseToNumber(getValue(o)) : getValue(o)));
                        el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
                    }));
                    el._assign = getModelAssigner(vnode);
                },
                mounted(el, {value}) {
                    setSelected(el, value);
                },
                beforeUpdate(el, _binding, vnode) {
                    el._assign = getModelAssigner(vnode);
                },
                updated(el, {value}) {
                    setSelected(el, value);
                }
            };
            function setSelected(el, value) {
                const isMultiple = el.multiple;
                if (isMultiple && !isArray(value) && !isSet(value)) {
                    warn(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
                    return;
                }
                for (let i = 0, l = el.options.length; i < l; i++) {
                    const option = el.options[i];
                    const optionValue = getValue(option);
                    if (isMultiple) if (isArray(value)) option.selected = looseIndexOf(value, optionValue) > -1; else option.selected = value.has(optionValue); else if (looseEqual(getValue(option), value)) {
                        if (el.selectedIndex !== i) el.selectedIndex = i;
                        return;
                    }
                }
                if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
            }
            function getValue(el) {
                return "_value" in el ? el._value : el.value;
            }
            function getCheckboxValue(el, checked) {
                const key = checked ? "_trueValue" : "_falseValue";
                return key in el ? el[key] : checked;
            }
            const vModelDynamic = {
                created(el, binding, vnode) {
                    callModelHook(el, binding, vnode, null, "created");
                },
                mounted(el, binding, vnode) {
                    callModelHook(el, binding, vnode, null, "mounted");
                },
                beforeUpdate(el, binding, vnode, prevVNode) {
                    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
                },
                updated(el, binding, vnode, prevVNode) {
                    callModelHook(el, binding, vnode, prevVNode, "updated");
                }
            };
            function resolveDynamicModel(tagName, type) {
                switch (tagName) {
                  case "SELECT":
                    return vModelSelect;

                  case "TEXTAREA":
                    return vModelText;

                  default:
                    switch (type) {
                      case "checkbox":
                        return vModelCheckbox;

                      case "radio":
                        return vModelRadio;

                      default:
                        return vModelText;
                    }
                }
            }
            function callModelHook(el, binding, vnode, prevVNode, hook) {
                const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
                const fn = modelToUse[hook];
                fn && fn(el, binding, vnode, prevVNode);
            }
            const systemModifiers = [ "ctrl", "shift", "alt", "meta" ];
            const modifierGuards = {
                stop: e => e.stopPropagation(),
                prevent: e => e.preventDefault(),
                self: e => e.target !== e.currentTarget,
                ctrl: e => !e.ctrlKey,
                shift: e => !e.shiftKey,
                alt: e => !e.altKey,
                meta: e => !e.metaKey,
                left: e => "button" in e && e.button !== 0,
                middle: e => "button" in e && e.button !== 1,
                right: e => "button" in e && e.button !== 2,
                exact: (e, modifiers) => systemModifiers.some((m => e[`${m}Key`] && !modifiers.includes(m)))
            };
            const withModifiers = (fn, modifiers) => (event, ...args) => {
                for (let i = 0; i < modifiers.length; i++) {
                    const guard = modifierGuards[modifiers[i]];
                    if (guard && guard(event, modifiers)) return;
                }
                return fn(event, ...args);
            };
            const keyNames = {
                esc: "escape",
                space: " ",
                up: "arrow-up",
                left: "arrow-left",
                right: "arrow-right",
                down: "arrow-down",
                delete: "backspace"
            };
            const withKeys = (fn, modifiers) => event => {
                if (!("key" in event)) return;
                const eventKey = hyphenate(event.key);
                if (modifiers.some((k => k === eventKey || keyNames[k] === eventKey))) return fn(event);
            };
            const vShow = {
                beforeMount(el, {value}, {transition}) {
                    el._vod = el.style.display === "none" ? "" : el.style.display;
                    if (transition && value) transition.beforeEnter(el); else setDisplay(el, value);
                },
                mounted(el, {value}, {transition}) {
                    if (transition && value) transition.enter(el);
                },
                updated(el, {value, oldValue}, {transition}) {
                    if (!value === !oldValue) return;
                    if (transition) if (value) {
                        transition.beforeEnter(el);
                        setDisplay(el, true);
                        transition.enter(el);
                    } else transition.leave(el, (() => {
                        setDisplay(el, false);
                    })); else setDisplay(el, value);
                },
                beforeUnmount(el, {value}) {
                    setDisplay(el, value);
                }
            };
            function setDisplay(el, value) {
                el.style.display = value ? el._vod : "none";
            }
            const rendererOptions = extend({
                patchProp
            }, nodeOps);
            let renderer;
            let enabledHydration = false;
            function ensureRenderer() {
                return renderer || (renderer = createRenderer(rendererOptions));
            }
            function ensureHydrationRenderer() {
                renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
                enabledHydration = true;
                return renderer;
            }
            const render = (...args) => {
                ensureRenderer().render(...args);
            };
            const hydrate = (...args) => {
                ensureHydrationRenderer().hydrate(...args);
            };
            const createApp = (...args) => {
                const app = ensureRenderer().createApp(...args);
                injectNativeTagCheck(app);
                injectCompilerOptionsCheck(app);
                const {mount} = app;
                app.mount = containerOrSelector => {
                    const container = normalizeContainer(containerOrSelector);
                    if (!container) return;
                    const component = app._component;
                    if (!isFunction(component) && !component.render && !component.template) component.template = container.innerHTML;
                    container.innerHTML = "";
                    const proxy = mount(container, false, container instanceof SVGElement);
                    if (container instanceof Element) {
                        container.removeAttribute("v-cloak");
                        container.setAttribute("data-v-app", "");
                    }
                    return proxy;
                };
                return app;
            };
            const createSSRApp = (...args) => {
                const app = ensureHydrationRenderer().createApp(...args);
                injectNativeTagCheck(app);
                injectCompilerOptionsCheck(app);
                const {mount} = app;
                app.mount = containerOrSelector => {
                    const container = normalizeContainer(containerOrSelector);
                    if (container) return mount(container, true, container instanceof SVGElement);
                };
                return app;
            };
            function injectNativeTagCheck(app) {
                Object.defineProperty(app.config, "isNativeTag", {
                    value: tag => isHTMLTag(tag) || isSVGTag(tag),
                    writable: false
                });
            }
            function injectCompilerOptionsCheck(app) {
                if (isRuntimeOnly()) {
                    const isCustomElement = app.config.isCustomElement;
                    Object.defineProperty(app.config, "isCustomElement", {
                        get() {
                            return isCustomElement;
                        },
                        set() {
                            warn(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
                        }
                    });
                    const compilerOptions = app.config.compilerOptions;
                    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.\n  - For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n  - For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n  - For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
                    Object.defineProperty(app.config, "compilerOptions", {
                        get() {
                            warn(msg);
                            return compilerOptions;
                        },
                        set() {
                            warn(msg);
                        }
                    });
                }
            }
            function normalizeContainer(container) {
                if (isString(container)) {
                    const res = document.querySelector(container);
                    if (!res) warn(`Failed to mount app: mount target selector "${container}" returned null.`);
                    return res;
                }
                if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
                return container;
            }
            const initDirectivesForSSR = NOOP;
            function initDev() {
                console.info(`You are running a development build of Vue.\n  Make sure to use the production build (*.prod.js) when deploying for production.`);
                initCustomFormatter();
            }
            function defaultOnError(error) {
                throw error;
            }
            function defaultOnWarn(msg) {
                console.warn(`[Vue warn] ${msg.message}`);
            }
            function createCompilerError(code, loc, messages, additionalMessage) {
                const msg = (messages || errorMessages)[code] + (additionalMessage || ``);
                const error = new SyntaxError(String(msg));
                error.code = code;
                error.loc = loc;
                return error;
            }
            const errorMessages = {
                [0]: "Illegal comment.",
                [1]: "CDATA section is allowed only in XML context.",
                [2]: "Duplicate attribute.",
                [3]: "End tag cannot have attributes.",
                [4]: "Illegal '/' in tags.",
                [5]: "Unexpected EOF in tag.",
                [6]: "Unexpected EOF in CDATA section.",
                [7]: "Unexpected EOF in comment.",
                [8]: "Unexpected EOF in script.",
                [9]: "Unexpected EOF in tag.",
                [10]: "Incorrectly closed comment.",
                [11]: "Incorrectly opened comment.",
                [12]: "Illegal tag name. Use '&lt;' to print '<'.",
                [13]: "Attribute value was expected.",
                [14]: "End tag name was expected.",
                [15]: "Whitespace was expected.",
                [16]: "Unexpected '\x3c!--' in comment.",
                [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
                [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
                [19]: "Attribute name cannot start with '='.",
                [21]: "'<?' is allowed only in XML context.",
                [20]: `Unexpected null character.`,
                [22]: "Illegal '/' in tags.",
                [23]: "Invalid end tag.",
                [24]: "Element is missing end tag.",
                [25]: "Interpolation end sign was not found.",
                [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
                [26]: "Legal directive name was expected.",
                [28]: `v-if/v-else-if is missing expression.`,
                [29]: `v-if/else branches must use unique keys.`,
                [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
                [31]: `v-for is missing expression.`,
                [32]: `v-for has invalid expression.`,
                [33]: `<template v-for> key should be placed on the <template> tag.`,
                [34]: `v-bind is missing expression.`,
                [35]: `v-on is missing expression.`,
                [36]: `Unexpected custom directive on <slot> outlet.`,
                [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
                [38]: `Duplicate slot names found. `,
                [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
                [40]: `v-slot can only be used on components or <template> tags.`,
                [41]: `v-model is missing expression.`,
                [42]: `v-model value must be a valid JavaScript member expression.`,
                [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
                [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.\n  Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
                [45]: `Error parsing JavaScript expression: `,
                [46]: `<KeepAlive> expects exactly one child component.`,
                [47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
                [48]: `ES module mode is not supported in this build of compiler.`,
                [49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
                [50]: `"scopeId" option is only supported in module mode.`,
                [51]: `@vnode-* hooks in templates are deprecated. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support will be removed in 3.4.`,
                [52]: `v-is="component-name" has been deprecated. Use is="vue:component-name" instead. v-is support will be removed in 3.4.`,
                [53]: ``
            };
            const FRAGMENT = Symbol(`Fragment`);
            const TELEPORT = Symbol(`Teleport`);
            const SUSPENSE = Symbol(`Suspense`);
            const KEEP_ALIVE = Symbol(`KeepAlive`);
            const BASE_TRANSITION = Symbol(`BaseTransition`);
            const OPEN_BLOCK = Symbol(`openBlock`);
            const CREATE_BLOCK = Symbol(`createBlock`);
            const CREATE_ELEMENT_BLOCK = Symbol(`createElementBlock`);
            const CREATE_VNODE = Symbol(`createVNode`);
            const CREATE_ELEMENT_VNODE = Symbol(`createElementVNode`);
            const CREATE_COMMENT = Symbol(`createCommentVNode`);
            const CREATE_TEXT = Symbol(`createTextVNode`);
            const CREATE_STATIC = Symbol(`createStaticVNode`);
            const RESOLVE_COMPONENT = Symbol(`resolveComponent`);
            const RESOLVE_DYNAMIC_COMPONENT = Symbol(`resolveDynamicComponent`);
            const RESOLVE_DIRECTIVE = Symbol(`resolveDirective`);
            const RESOLVE_FILTER = Symbol(`resolveFilter`);
            const WITH_DIRECTIVES = Symbol(`withDirectives`);
            const RENDER_LIST = Symbol(`renderList`);
            const RENDER_SLOT = Symbol(`renderSlot`);
            const CREATE_SLOTS = Symbol(`createSlots`);
            const TO_DISPLAY_STRING = Symbol(`toDisplayString`);
            const MERGE_PROPS = Symbol(`mergeProps`);
            const NORMALIZE_CLASS = Symbol(`normalizeClass`);
            const NORMALIZE_STYLE = Symbol(`normalizeStyle`);
            const NORMALIZE_PROPS = Symbol(`normalizeProps`);
            const GUARD_REACTIVE_PROPS = Symbol(`guardReactiveProps`);
            const TO_HANDLERS = Symbol(`toHandlers`);
            const CAMELIZE = Symbol(`camelize`);
            const CAPITALIZE = Symbol(`capitalize`);
            const TO_HANDLER_KEY = Symbol(`toHandlerKey`);
            const SET_BLOCK_TRACKING = Symbol(`setBlockTracking`);
            const PUSH_SCOPE_ID = Symbol(`pushScopeId`);
            const POP_SCOPE_ID = Symbol(`popScopeId`);
            const WITH_CTX = Symbol(`withCtx`);
            const UNREF = Symbol(`unref`);
            const IS_REF = Symbol(`isRef`);
            const WITH_MEMO = Symbol(`withMemo`);
            const IS_MEMO_SAME = Symbol(`isMemoSame`);
            const helperNameMap = {
                [FRAGMENT]: `Fragment`,
                [TELEPORT]: `Teleport`,
                [SUSPENSE]: `Suspense`,
                [KEEP_ALIVE]: `KeepAlive`,
                [BASE_TRANSITION]: `BaseTransition`,
                [OPEN_BLOCK]: `openBlock`,
                [CREATE_BLOCK]: `createBlock`,
                [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
                [CREATE_VNODE]: `createVNode`,
                [CREATE_ELEMENT_VNODE]: `createElementVNode`,
                [CREATE_COMMENT]: `createCommentVNode`,
                [CREATE_TEXT]: `createTextVNode`,
                [CREATE_STATIC]: `createStaticVNode`,
                [RESOLVE_COMPONENT]: `resolveComponent`,
                [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
                [RESOLVE_DIRECTIVE]: `resolveDirective`,
                [RESOLVE_FILTER]: `resolveFilter`,
                [WITH_DIRECTIVES]: `withDirectives`,
                [RENDER_LIST]: `renderList`,
                [RENDER_SLOT]: `renderSlot`,
                [CREATE_SLOTS]: `createSlots`,
                [TO_DISPLAY_STRING]: `toDisplayString`,
                [MERGE_PROPS]: `mergeProps`,
                [NORMALIZE_CLASS]: `normalizeClass`,
                [NORMALIZE_STYLE]: `normalizeStyle`,
                [NORMALIZE_PROPS]: `normalizeProps`,
                [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
                [TO_HANDLERS]: `toHandlers`,
                [CAMELIZE]: `camelize`,
                [CAPITALIZE]: `capitalize`,
                [TO_HANDLER_KEY]: `toHandlerKey`,
                [SET_BLOCK_TRACKING]: `setBlockTracking`,
                [PUSH_SCOPE_ID]: `pushScopeId`,
                [POP_SCOPE_ID]: `popScopeId`,
                [WITH_CTX]: `withCtx`,
                [UNREF]: `unref`,
                [IS_REF]: `isRef`,
                [WITH_MEMO]: `withMemo`,
                [IS_MEMO_SAME]: `isMemoSame`
            };
            function registerRuntimeHelpers(helpers) {
                Object.getOwnPropertySymbols(helpers).forEach((s => {
                    helperNameMap[s] = helpers[s];
                }));
            }
            const locStub = {
                source: "",
                start: {
                    line: 1,
                    column: 1,
                    offset: 0
                },
                end: {
                    line: 1,
                    column: 1,
                    offset: 0
                }
            };
            function createRoot(children, loc = locStub) {
                return {
                    type: 0,
                    children,
                    helpers: new Set,
                    components: [],
                    directives: [],
                    hoists: [],
                    imports: [],
                    cached: 0,
                    temps: 0,
                    codegenNode: void 0,
                    loc
                };
            }
            function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent = false, loc = locStub) {
                if (context) {
                    if (isBlock) {
                        context.helper(OPEN_BLOCK);
                        context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
                    } else context.helper(getVNodeHelper(context.inSSR, isComponent));
                    if (directives) context.helper(WITH_DIRECTIVES);
                }
                return {
                    type: 13,
                    tag,
                    props,
                    children,
                    patchFlag,
                    dynamicProps,
                    directives,
                    isBlock,
                    disableTracking,
                    isComponent,
                    loc
                };
            }
            function createArrayExpression(elements, loc = locStub) {
                return {
                    type: 17,
                    loc,
                    elements
                };
            }
            function createObjectExpression(properties, loc = locStub) {
                return {
                    type: 15,
                    loc,
                    properties
                };
            }
            function createObjectProperty(key, value) {
                return {
                    type: 16,
                    loc: locStub,
                    key: isString(key) ? createSimpleExpression(key, true) : key,
                    value
                };
            }
            function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
                return {
                    type: 4,
                    loc,
                    content,
                    isStatic,
                    constType: isStatic ? 3 : constType
                };
            }
            function createCompoundExpression(children, loc = locStub) {
                return {
                    type: 8,
                    loc,
                    children
                };
            }
            function createCallExpression(callee, args = [], loc = locStub) {
                return {
                    type: 14,
                    loc,
                    callee,
                    arguments: args
                };
            }
            function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
                return {
                    type: 18,
                    params,
                    returns,
                    newline,
                    isSlot,
                    loc
                };
            }
            function createConditionalExpression(test, consequent, alternate, newline = true) {
                return {
                    type: 19,
                    test,
                    consequent,
                    alternate,
                    newline,
                    loc: locStub
                };
            }
            function createCacheExpression(index, value, isVNode = false) {
                return {
                    type: 20,
                    index,
                    value,
                    isVNode,
                    loc: locStub
                };
            }
            function createBlockStatement(body) {
                return {
                    type: 21,
                    body,
                    loc: locStub
                };
            }
            function getVNodeHelper(ssr, isComponent) {
                return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
            }
            function getVNodeBlockHelper(ssr, isComponent) {
                return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
            }
            function convertToBlock(node, {helper, removeHelper, inSSR}) {
                if (!node.isBlock) {
                    node.isBlock = true;
                    removeHelper(getVNodeHelper(inSSR, node.isComponent));
                    helper(OPEN_BLOCK);
                    helper(getVNodeBlockHelper(inSSR, node.isComponent));
                }
            }
            const isStaticExp = p => p.type === 4 && p.isStatic;
            const isBuiltInType = (tag, expected) => tag === expected || tag === hyphenate(expected);
            function isCoreComponent(tag) {
                if (isBuiltInType(tag, "Teleport")) return TELEPORT; else if (isBuiltInType(tag, "Suspense")) return SUSPENSE; else if (isBuiltInType(tag, "KeepAlive")) return KEEP_ALIVE; else if (isBuiltInType(tag, "BaseTransition")) return BASE_TRANSITION;
            }
            const nonIdentifierRE = /^\d|[^\$\w]/;
            const isSimpleIdentifier = name => !nonIdentifierRE.test(name);
            const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
            const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
            const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
            const isMemberExpressionBrowser = path => {
                path = path.trim().replace(whitespaceRE, (s => s.trim()));
                let state = 0;
                let stateStack = [];
                let currentOpenBracketCount = 0;
                let currentOpenParensCount = 0;
                let currentStringType = null;
                for (let i = 0; i < path.length; i++) {
                    const char = path.charAt(i);
                    switch (state) {
                      case 0:
                        if (char === "[") {
                            stateStack.push(state);
                            state = 1;
                            currentOpenBracketCount++;
                        } else if (char === "(") {
                            stateStack.push(state);
                            state = 2;
                            currentOpenParensCount++;
                        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) return false;
                        break;

                      case 1:
                        if (char === `'` || char === `"` || char === "`") {
                            stateStack.push(state);
                            state = 3;
                            currentStringType = char;
                        } else if (char === `[`) currentOpenBracketCount++; else if (char === `]`) if (!--currentOpenBracketCount) state = stateStack.pop();
                        break;

                      case 2:
                        if (char === `'` || char === `"` || char === "`") {
                            stateStack.push(state);
                            state = 3;
                            currentStringType = char;
                        } else if (char === `(`) currentOpenParensCount++; else if (char === `)`) {
                            if (i === path.length - 1) return false;
                            if (!--currentOpenParensCount) state = stateStack.pop();
                        }
                        break;

                      case 3:
                        if (char === currentStringType) {
                            state = stateStack.pop();
                            currentStringType = null;
                        }
                        break;
                    }
                }
                return !currentOpenBracketCount && !currentOpenParensCount;
            };
            const isMemberExpression = isMemberExpressionBrowser;
            function getInnerRange(loc, offset, length) {
                const source = loc.source.slice(offset, offset + length);
                const newLoc = {
                    source,
                    start: advancePositionWithClone(loc.start, loc.source, offset),
                    end: loc.end
                };
                if (length != null) newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
                return newLoc;
            }
            function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
                return advancePositionWithMutation(extend({}, pos), source, numberOfCharacters);
            }
            function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
                let linesCount = 0;
                let lastNewLinePos = -1;
                for (let i = 0; i < numberOfCharacters; i++) if (source.charCodeAt(i) === 10) {
                    linesCount++;
                    lastNewLinePos = i;
                }
                pos.offset += numberOfCharacters;
                pos.line += linesCount;
                pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
                return pos;
            }
            function assert(condition, msg) {
                if (!condition) throw new Error(msg || `unexpected compiler condition`);
            }
            function findDir(node, name, allowEmpty = false) {
                for (let i = 0; i < node.props.length; i++) {
                    const p = node.props[i];
                    if (p.type === 7 && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) return p;
                }
            }
            function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
                for (let i = 0; i < node.props.length; i++) {
                    const p = node.props[i];
                    if (p.type === 6) {
                        if (dynamicOnly) continue;
                        if (p.name === name && (p.value || allowEmpty)) return p;
                    } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) return p;
                }
            }
            function isStaticArgOf(arg, name) {
                return !!(arg && isStaticExp(arg) && arg.content === name);
            }
            function hasDynamicKeyVBind(node) {
                return node.props.some((p => p.type === 7 && p.name === "bind" && (!p.arg || p.arg.type !== 4 || !p.arg.isStatic)));
            }
            function isText$1(node) {
                return node.type === 5 || node.type === 2;
            }
            function isVSlot(p) {
                return p.type === 7 && p.name === "slot";
            }
            function isTemplateNode(node) {
                return node.type === 1 && node.tagType === 3;
            }
            function isSlotOutlet(node) {
                return node.type === 1 && node.tagType === 2;
            }
            const propsHelperSet = new Set([ NORMALIZE_PROPS, GUARD_REACTIVE_PROPS ]);
            function getUnnormalizedProps(props, callPath = []) {
                if (props && !isString(props) && props.type === 14) {
                    const callee = props.callee;
                    if (!isString(callee) && propsHelperSet.has(callee)) return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
                }
                return [ props, callPath ];
            }
            function injectProp(node, prop, context) {
                let propsWithInjection;
                let props = node.type === 13 ? node.props : node.arguments[2];
                let callPath = [];
                let parentCall;
                if (props && !isString(props) && props.type === 14) {
                    const ret = getUnnormalizedProps(props);
                    props = ret[0];
                    callPath = ret[1];
                    parentCall = callPath[callPath.length - 1];
                }
                if (props == null || isString(props)) propsWithInjection = createObjectExpression([ prop ]); else if (props.type === 14) {
                    const first = props.arguments[0];
                    if (!isString(first) && first.type === 15) {
                        if (!hasProp(prop, first)) first.properties.unshift(prop);
                    } else if (props.callee === TO_HANDLERS) propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [ createObjectExpression([ prop ]), props ]); else props.arguments.unshift(createObjectExpression([ prop ]));
                    !propsWithInjection && (propsWithInjection = props);
                } else if (props.type === 15) {
                    if (!hasProp(prop, props)) props.properties.unshift(prop);
                    propsWithInjection = props;
                } else {
                    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [ createObjectExpression([ prop ]), props ]);
                    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) parentCall = callPath[callPath.length - 2];
                }
                if (node.type === 13) if (parentCall) parentCall.arguments[0] = propsWithInjection; else node.props = propsWithInjection; else if (parentCall) parentCall.arguments[0] = propsWithInjection; else node.arguments[2] = propsWithInjection;
            }
            function hasProp(prop, props) {
                let result = false;
                if (prop.key.type === 4) {
                    const propKeyName = prop.key.content;
                    result = props.properties.some((p => p.key.type === 4 && p.key.content === propKeyName));
                }
                return result;
            }
            function toValidAssetId(name, type) {
                return `_${type}_${name.replace(/[^\w]/g, ((searchValue, replaceValue) => searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString()))}`;
            }
            function getMemoedVNodeCall(node) {
                if (node.type === 14 && node.callee === WITH_MEMO) return node.arguments[1].returns; else return node;
            }
            const decodeRE = /&(gt|lt|amp|apos|quot);/g;
            const decodeMap = {
                gt: ">",
                lt: "<",
                amp: "&",
                apos: "'",
                quot: '"'
            };
            const defaultParserOptions = {
                delimiters: [ `{{`, `}}` ],
                getNamespace: () => 0,
                getTextMode: () => 0,
                isVoidTag: NO,
                isPreTag: NO,
                isCustomElement: NO,
                decodeEntities: rawText => rawText.replace(decodeRE, ((_, p1) => decodeMap[p1])),
                onError: defaultOnError,
                onWarn: defaultOnWarn,
                comments: true
            };
            function baseParse(content, options = {}) {
                const context = createParserContext(content, options);
                const start = getCursor(context);
                return createRoot(parseChildren(context, 0, []), getSelection(context, start));
            }
            function createParserContext(content, rawOptions) {
                const options = extend({}, defaultParserOptions);
                let key;
                for (key in rawOptions) options[key] = rawOptions[key] === void 0 ? defaultParserOptions[key] : rawOptions[key];
                return {
                    options,
                    column: 1,
                    line: 1,
                    offset: 0,
                    originalSource: content,
                    source: content,
                    inPre: false,
                    inVPre: false,
                    onWarn: options.onWarn
                };
            }
            function parseChildren(context, mode, ancestors) {
                const parent = last(ancestors);
                const ns = parent ? parent.ns : 0;
                const nodes = [];
                while (!isEnd(context, mode, ancestors)) {
                    const s = context.source;
                    let node;
                    if (mode === 0 || mode === 1) if (!context.inVPre && startsWith(s, context.options.delimiters[0])) node = parseInterpolation(context, mode); else if (mode === 0 && s[0] === "<") if (s.length === 1) emitError(context, 5, 1); else if (s[1] === "!") if (startsWith(s, "\x3c!--")) node = parseComment(context); else if (startsWith(s, "<!DOCTYPE")) node = parseBogusComment(context); else if (startsWith(s, "<![CDATA[")) if (ns !== 0) node = parseCDATA(context, ancestors); else {
                        emitError(context, 1);
                        node = parseBogusComment(context);
                    } else {
                        emitError(context, 11);
                        node = parseBogusComment(context);
                    } else if (s[1] === "/") if (s.length === 2) emitError(context, 5, 2); else if (s[2] === ">") {
                        emitError(context, 14, 2);
                        advanceBy(context, 3);
                        continue;
                    } else if (/[a-z]/i.test(s[2])) {
                        emitError(context, 23);
                        parseTag(context, TagType.End, parent);
                        continue;
                    } else {
                        emitError(context, 12, 2);
                        node = parseBogusComment(context);
                    } else if (/[a-z]/i.test(s[1])) node = parseElement(context, ancestors); else if (s[1] === "?") {
                        emitError(context, 21, 1);
                        node = parseBogusComment(context);
                    } else emitError(context, 12, 1);
                    if (!node) node = parseText(context, mode);
                    if (isArray(node)) for (let i = 0; i < node.length; i++) pushNode(nodes, node[i]); else pushNode(nodes, node);
                }
                let removedWhitespace = false;
                if (mode !== 2 && mode !== 1) {
                    const shouldCondense = context.options.whitespace !== "preserve";
                    for (let i = 0; i < nodes.length; i++) {
                        const node = nodes[i];
                        if (node.type === 2) if (!context.inPre) {
                            if (!/[^\t\r\n\f ]/.test(node.content)) {
                                const prev = nodes[i - 1];
                                const next = nodes[i + 1];
                                if (!prev || !next || shouldCondense && (prev.type === 3 && next.type === 3 || prev.type === 3 && next.type === 1 || prev.type === 1 && next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node.content))) {
                                    removedWhitespace = true;
                                    nodes[i] = null;
                                } else node.content = " ";
                            } else if (shouldCondense) node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
                        } else node.content = node.content.replace(/\r\n/g, "\n"); else if (node.type === 3 && !context.options.comments) {
                            removedWhitespace = true;
                            nodes[i] = null;
                        }
                    }
                    if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
                        const first = nodes[0];
                        if (first && first.type === 2) first.content = first.content.replace(/^\r?\n/, "");
                    }
                }
                return removedWhitespace ? nodes.filter(Boolean) : nodes;
            }
            function pushNode(nodes, node) {
                if (node.type === 2) {
                    const prev = last(nodes);
                    if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
                        prev.content += node.content;
                        prev.loc.end = node.loc.end;
                        prev.loc.source += node.loc.source;
                        return;
                    }
                }
                nodes.push(node);
            }
            function parseCDATA(context, ancestors) {
                advanceBy(context, 9);
                const nodes = parseChildren(context, 3, ancestors);
                if (context.source.length === 0) emitError(context, 6); else advanceBy(context, 3);
                return nodes;
            }
            function parseComment(context) {
                const start = getCursor(context);
                let content;
                const match = /--(\!)?>/.exec(context.source);
                if (!match) {
                    content = context.source.slice(4);
                    advanceBy(context, context.source.length);
                    emitError(context, 7);
                } else {
                    if (match.index <= 3) emitError(context, 0);
                    if (match[1]) emitError(context, 10);
                    content = context.source.slice(4, match.index);
                    const s = context.source.slice(0, match.index);
                    let prevIndex = 1, nestedIndex = 0;
                    while ((nestedIndex = s.indexOf("\x3c!--", prevIndex)) !== -1) {
                        advanceBy(context, nestedIndex - prevIndex + 1);
                        if (nestedIndex + 4 < s.length) emitError(context, 16);
                        prevIndex = nestedIndex + 1;
                    }
                    advanceBy(context, match.index + match[0].length - prevIndex + 1);
                }
                return {
                    type: 3,
                    content,
                    loc: getSelection(context, start)
                };
            }
            function parseBogusComment(context) {
                const start = getCursor(context);
                const contentStart = context.source[1] === "?" ? 1 : 2;
                let content;
                const closeIndex = context.source.indexOf(">");
                if (closeIndex === -1) {
                    content = context.source.slice(contentStart);
                    advanceBy(context, context.source.length);
                } else {
                    content = context.source.slice(contentStart, closeIndex);
                    advanceBy(context, closeIndex + 1);
                }
                return {
                    type: 3,
                    content,
                    loc: getSelection(context, start)
                };
            }
            function parseElement(context, ancestors) {
                const wasInPre = context.inPre;
                const wasInVPre = context.inVPre;
                const parent = last(ancestors);
                const element = parseTag(context, TagType.Start, parent);
                const isPreBoundary = context.inPre && !wasInPre;
                const isVPreBoundary = context.inVPre && !wasInVPre;
                if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
                    if (isPreBoundary) context.inPre = false;
                    if (isVPreBoundary) context.inVPre = false;
                    return element;
                }
                ancestors.push(element);
                const mode = context.options.getTextMode(element, parent);
                const children = parseChildren(context, mode, ancestors);
                ancestors.pop();
                element.children = children;
                if (startsWithEndTagOpen(context.source, element.tag)) parseTag(context, TagType.End, parent); else {
                    emitError(context, 24, 0, element.loc.start);
                    if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
                        const first = children[0];
                        if (first && startsWith(first.loc.source, "\x3c!--")) emitError(context, 8);
                    }
                }
                element.loc = getSelection(context, element.loc.start);
                if (isPreBoundary) context.inPre = false;
                if (isVPreBoundary) context.inVPre = false;
                return element;
            }
            var TagType = (TagType2 => {
                TagType2[TagType2["Start"] = 0] = "Start";
                TagType2[TagType2["End"] = 1] = "End";
                return TagType2;
            })(TagType || {});
            const isSpecialTemplateDirective = makeMap(`if,else,else-if,for,slot`);
            function parseTag(context, type, parent) {
                const start = getCursor(context);
                const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
                const tag = match[1];
                const ns = context.options.getNamespace(tag, parent);
                advanceBy(context, match[0].length);
                advanceSpaces(context);
                const cursor = getCursor(context);
                const currentSource = context.source;
                if (context.options.isPreTag(tag)) context.inPre = true;
                let props = parseAttributes(context, type);
                if (type === 0 && !context.inVPre && props.some((p => p.type === 7 && p.name === "pre"))) {
                    context.inVPre = true;
                    extend(context, cursor);
                    context.source = currentSource;
                    props = parseAttributes(context, type).filter((p => p.name !== "v-pre"));
                }
                let isSelfClosing = false;
                if (context.source.length === 0) emitError(context, 9); else {
                    isSelfClosing = startsWith(context.source, "/>");
                    if (type === 1 && isSelfClosing) emitError(context, 4);
                    advanceBy(context, isSelfClosing ? 2 : 1);
                }
                if (type === 1) return;
                let tagType = 0;
                if (!context.inVPre) if (tag === "slot") tagType = 2; else if (tag === "template") {
                    if (props.some((p => p.type === 7 && isSpecialTemplateDirective(p.name)))) tagType = 3;
                } else if (isComponent(tag, props, context)) tagType = 1;
                return {
                    type: 1,
                    ns,
                    tag,
                    tagType,
                    props,
                    isSelfClosing,
                    children: [],
                    loc: getSelection(context, start),
                    codegenNode: void 0
                };
            }
            function isComponent(tag, props, context) {
                const options = context.options;
                if (options.isCustomElement(tag)) return false;
                if (tag === "component" || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) return true;
                for (let i = 0; i < props.length; i++) {
                    const p = props[i];
                    if (p.type === 6) {
                        if (p.name === "is" && p.value) if (p.value.content.startsWith("vue:")) return true;
                    } else if (p.name === "is") return true; else if (p.name === "bind" && isStaticArgOf(p.arg, "is") && false) ;
                }
            }
            function parseAttributes(context, type) {
                const props = [];
                const attributeNames = new Set;
                while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
                    if (startsWith(context.source, "/")) {
                        emitError(context, 22);
                        advanceBy(context, 1);
                        advanceSpaces(context);
                        continue;
                    }
                    if (type === 1) emitError(context, 3);
                    const attr = parseAttribute(context, attributeNames);
                    if (attr.type === 6 && attr.value && attr.name === "class") attr.value.content = attr.value.content.replace(/\s+/g, " ").trim();
                    if (type === 0) props.push(attr);
                    if (/^[^\t\r\n\f />]/.test(context.source)) emitError(context, 15);
                    advanceSpaces(context);
                }
                return props;
            }
            function parseAttribute(context, nameSet) {
                var _a;
                const start = getCursor(context);
                const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
                const name = match[0];
                if (nameSet.has(name)) emitError(context, 2);
                nameSet.add(name);
                if (name[0] === "=") emitError(context, 19);
                {
                    const pattern = /["'<]/g;
                    let m;
                    while (m = pattern.exec(name)) emitError(context, 17, m.index);
                }
                advanceBy(context, name.length);
                let value;
                if (/^[\t\r\n\f ]*=/.test(context.source)) {
                    advanceSpaces(context);
                    advanceBy(context, 1);
                    advanceSpaces(context);
                    value = parseAttributeValue(context);
                    if (!value) emitError(context, 13);
                }
                const loc = getSelection(context, start);
                if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
                    const match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
                    let isPropShorthand = startsWith(name, ".");
                    let dirName = match2[1] || (isPropShorthand || startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
                    let arg;
                    if (match2[2]) {
                        const isSlot = dirName === "slot";
                        const startOffset = name.lastIndexOf(match2[2], name.length - (((_a = match2[3]) == null ? void 0 : _a.length) || 0));
                        const loc2 = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match2[2].length + (isSlot && match2[3] || "").length));
                        let content = match2[2];
                        let isStatic = true;
                        if (content.startsWith("[")) {
                            isStatic = false;
                            if (!content.endsWith("]")) {
                                emitError(context, 27);
                                content = content.slice(1);
                            } else content = content.slice(1, content.length - 1);
                        } else if (isSlot) content += match2[3] || "";
                        arg = {
                            type: 4,
                            content,
                            isStatic,
                            constType: isStatic ? 3 : 0,
                            loc: loc2
                        };
                    }
                    if (value && value.isQuoted) {
                        const valueLoc = value.loc;
                        valueLoc.start.offset++;
                        valueLoc.start.column++;
                        valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
                        valueLoc.source = valueLoc.source.slice(1, -1);
                    }
                    const modifiers = match2[3] ? match2[3].slice(1).split(".") : [];
                    if (isPropShorthand) modifiers.push("prop");
                    return {
                        type: 7,
                        name: dirName,
                        exp: value && {
                            type: 4,
                            content: value.content,
                            isStatic: false,
                            constType: 0,
                            loc: value.loc
                        },
                        arg,
                        modifiers,
                        loc
                    };
                }
                if (!context.inVPre && startsWith(name, "v-")) emitError(context, 26);
                return {
                    type: 6,
                    name,
                    value: value && {
                        type: 2,
                        content: value.content,
                        loc: value.loc
                    },
                    loc
                };
            }
            function parseAttributeValue(context) {
                const start = getCursor(context);
                let content;
                const quote = context.source[0];
                const isQuoted = quote === `"` || quote === `'`;
                if (isQuoted) {
                    advanceBy(context, 1);
                    const endIndex = context.source.indexOf(quote);
                    if (endIndex === -1) content = parseTextData(context, context.source.length, 4); else {
                        content = parseTextData(context, endIndex, 4);
                        advanceBy(context, 1);
                    }
                } else {
                    const match = /^[^\t\r\n\f >]+/.exec(context.source);
                    if (!match) return;
                    const unexpectedChars = /["'<=`]/g;
                    let m;
                    while (m = unexpectedChars.exec(match[0])) emitError(context, 18, m.index);
                    content = parseTextData(context, match[0].length, 4);
                }
                return {
                    content,
                    isQuoted,
                    loc: getSelection(context, start)
                };
            }
            function parseInterpolation(context, mode) {
                const [open, close] = context.options.delimiters;
                const closeIndex = context.source.indexOf(close, open.length);
                if (closeIndex === -1) {
                    emitError(context, 25);
                    return;
                }
                const start = getCursor(context);
                advanceBy(context, open.length);
                const innerStart = getCursor(context);
                const innerEnd = getCursor(context);
                const rawContentLength = closeIndex - open.length;
                const rawContent = context.source.slice(0, rawContentLength);
                const preTrimContent = parseTextData(context, rawContentLength, mode);
                const content = preTrimContent.trim();
                const startOffset = preTrimContent.indexOf(content);
                if (startOffset > 0) advancePositionWithMutation(innerStart, rawContent, startOffset);
                const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
                advancePositionWithMutation(innerEnd, rawContent, endOffset);
                advanceBy(context, close.length);
                return {
                    type: 5,
                    content: {
                        type: 4,
                        isStatic: false,
                        constType: 0,
                        content,
                        loc: getSelection(context, innerStart, innerEnd)
                    },
                    loc: getSelection(context, start)
                };
            }
            function parseText(context, mode) {
                const endTokens = mode === 3 ? [ "]]>" ] : [ "<", context.options.delimiters[0] ];
                let endIndex = context.source.length;
                for (let i = 0; i < endTokens.length; i++) {
                    const index = context.source.indexOf(endTokens[i], 1);
                    if (index !== -1 && endIndex > index) endIndex = index;
                }
                const start = getCursor(context);
                const content = parseTextData(context, endIndex, mode);
                return {
                    type: 2,
                    content,
                    loc: getSelection(context, start)
                };
            }
            function parseTextData(context, length, mode) {
                const rawText = context.source.slice(0, length);
                advanceBy(context, length);
                if (mode === 2 || mode === 3 || !rawText.includes("&")) return rawText; else return context.options.decodeEntities(rawText, mode === 4);
            }
            function getCursor(context) {
                const {column, line, offset} = context;
                return {
                    column,
                    line,
                    offset
                };
            }
            function getSelection(context, start, end) {
                end = end || getCursor(context);
                return {
                    start,
                    end,
                    source: context.originalSource.slice(start.offset, end.offset)
                };
            }
            function last(xs) {
                return xs[xs.length - 1];
            }
            function startsWith(source, searchString) {
                return source.startsWith(searchString);
            }
            function advanceBy(context, numberOfCharacters) {
                const {source} = context;
                advancePositionWithMutation(context, source, numberOfCharacters);
                context.source = source.slice(numberOfCharacters);
            }
            function advanceSpaces(context) {
                const match = /^[\t\r\n\f ]+/.exec(context.source);
                if (match) advanceBy(context, match[0].length);
            }
            function getNewPosition(context, start, numberOfCharacters) {
                return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
            }
            function emitError(context, code, offset, loc = getCursor(context)) {
                if (offset) {
                    loc.offset += offset;
                    loc.column += offset;
                }
                context.options.onError(createCompilerError(code, {
                    start: loc,
                    end: loc,
                    source: ""
                }));
            }
            function isEnd(context, mode, ancestors) {
                const s = context.source;
                switch (mode) {
                  case 0:
                    if (startsWith(s, "</")) for (let i = ancestors.length - 1; i >= 0; --i) if (startsWithEndTagOpen(s, ancestors[i].tag)) return true;
                    break;

                  case 1:
                  case 2:
                    {
                        const parent = last(ancestors);
                        if (parent && startsWithEndTagOpen(s, parent.tag)) return true;
                        break;
                    }

                  case 3:
                    if (startsWith(s, "]]>")) return true;
                    break;
                }
                return !s;
            }
            function startsWithEndTagOpen(source, tag) {
                return startsWith(source, "</") && source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
            }
            function hoistStatic(root, context) {
                walk(root, context, isSingleElementRoot(root, root.children[0]));
            }
            function isSingleElementRoot(root, child) {
                const {children} = root;
                return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
            }
            function walk(node, context, doNotHoistNode = false) {
                const {children} = node;
                const originalCount = children.length;
                let hoistedCount = 0;
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    if (child.type === 1 && child.tagType === 0) {
                        const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
                        if (constantType > 0) {
                            if (constantType >= 2) {
                                child.codegenNode.patchFlag = -1 + ` /* HOISTED */`;
                                child.codegenNode = context.hoist(child.codegenNode);
                                hoistedCount++;
                                continue;
                            }
                        } else {
                            const codegenNode = child.codegenNode;
                            if (codegenNode.type === 13) {
                                const flag = getPatchFlag(codegenNode);
                                if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
                                    const props = getNodeProps(child);
                                    if (props) codegenNode.props = context.hoist(props);
                                }
                                if (codegenNode.dynamicProps) codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
                            }
                        }
                    }
                    if (child.type === 1) {
                        const isComponent = child.tagType === 1;
                        if (isComponent) context.scopes.vSlot++;
                        walk(child, context);
                        if (isComponent) context.scopes.vSlot--;
                    } else if (child.type === 11) walk(child, context, child.children.length === 1); else if (child.type === 9) for (let i2 = 0; i2 < child.branches.length; i2++) walk(child.branches[i2], context, child.branches[i2].children.length === 1);
                }
                if (hoistedCount && context.transformHoist) context.transformHoist(children, context, node);
                if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) node.codegenNode.children = context.hoist(createArrayExpression(node.codegenNode.children));
            }
            function getConstantType(node, context) {
                const {constantCache} = context;
                switch (node.type) {
                  case 1:
                    if (node.tagType !== 0) return 0;
                    const cached = constantCache.get(node);
                    if (cached !== void 0) return cached;
                    const codegenNode = node.codegenNode;
                    if (codegenNode.type !== 13) return 0;
                    if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") return 0;
                    const flag = getPatchFlag(codegenNode);
                    if (!flag) {
                        let returnType2 = 3;
                        const generatedPropsType = getGeneratedPropsConstantType(node, context);
                        if (generatedPropsType === 0) {
                            constantCache.set(node, 0);
                            return 0;
                        }
                        if (generatedPropsType < returnType2) returnType2 = generatedPropsType;
                        for (let i = 0; i < node.children.length; i++) {
                            const childType = getConstantType(node.children[i], context);
                            if (childType === 0) {
                                constantCache.set(node, 0);
                                return 0;
                            }
                            if (childType < returnType2) returnType2 = childType;
                        }
                        if (returnType2 > 1) for (let i = 0; i < node.props.length; i++) {
                            const p = node.props[i];
                            if (p.type === 7 && p.name === "bind" && p.exp) {
                                const expType = getConstantType(p.exp, context);
                                if (expType === 0) {
                                    constantCache.set(node, 0);
                                    return 0;
                                }
                                if (expType < returnType2) returnType2 = expType;
                            }
                        }
                        if (codegenNode.isBlock) {
                            for (let i = 0; i < node.props.length; i++) {
                                const p = node.props[i];
                                if (p.type === 7) {
                                    constantCache.set(node, 0);
                                    return 0;
                                }
                            }
                            context.removeHelper(OPEN_BLOCK);
                            context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
                            codegenNode.isBlock = false;
                            context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
                        }
                        constantCache.set(node, returnType2);
                        return returnType2;
                    } else {
                        constantCache.set(node, 0);
                        return 0;
                    }

                  case 2:
                  case 3:
                    return 3;

                  case 9:
                  case 11:
                  case 10:
                    return 0;

                  case 5:
                  case 12:
                    return getConstantType(node.content, context);

                  case 4:
                    return node.constType;

                  case 8:
                    let returnType = 3;
                    for (let i = 0; i < node.children.length; i++) {
                        const child = node.children[i];
                        if (isString(child) || isSymbol(child)) continue;
                        const childType = getConstantType(child, context);
                        if (childType === 0) return 0; else if (childType < returnType) returnType = childType;
                    }
                    return returnType;

                  default:
                    return 0;
                }
            }
            const allowHoistedHelperSet = new Set([ NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS ]);
            function getConstantTypeOfHelperCall(value, context) {
                if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
                    const arg = value.arguments[0];
                    if (arg.type === 4) return getConstantType(arg, context); else if (arg.type === 14) return getConstantTypeOfHelperCall(arg, context);
                }
                return 0;
            }
            function getGeneratedPropsConstantType(node, context) {
                let returnType = 3;
                const props = getNodeProps(node);
                if (props && props.type === 15) {
                    const {properties} = props;
                    for (let i = 0; i < properties.length; i++) {
                        const {key, value} = properties[i];
                        const keyType = getConstantType(key, context);
                        if (keyType === 0) return keyType;
                        if (keyType < returnType) returnType = keyType;
                        let valueType;
                        if (value.type === 4) valueType = getConstantType(value, context); else if (value.type === 14) valueType = getConstantTypeOfHelperCall(value, context); else valueType = 0;
                        if (valueType === 0) return valueType;
                        if (valueType < returnType) returnType = valueType;
                    }
                }
                return returnType;
            }
            function getNodeProps(node) {
                const codegenNode = node.codegenNode;
                if (codegenNode.type === 13) return codegenNode.props;
            }
            function getPatchFlag(node) {
                const flag = node.patchFlag;
                return flag ? parseInt(flag, 10) : void 0;
            }
            function createTransformContext(root, {filename = "", prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = NOOP, isCustomElement = NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig}) {
                const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
                const context = {
                    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
                    prefixIdentifiers,
                    hoistStatic: hoistStatic2,
                    cacheHandlers,
                    nodeTransforms,
                    directiveTransforms,
                    transformHoist,
                    isBuiltInComponent,
                    isCustomElement,
                    expressionPlugins,
                    scopeId,
                    slotted,
                    ssr,
                    inSSR,
                    ssrCssVars,
                    bindingMetadata,
                    inline,
                    isTS,
                    onError,
                    onWarn,
                    compatConfig,
                    root,
                    helpers: new Map,
                    components: new Set,
                    directives: new Set,
                    hoists: [],
                    imports: [],
                    constantCache: new Map,
                    temps: 0,
                    cached: 0,
                    identifiers: Object.create(null),
                    scopes: {
                        vFor: 0,
                        vSlot: 0,
                        vPre: 0,
                        vOnce: 0
                    },
                    parent: null,
                    currentNode: root,
                    childIndex: 0,
                    inVOnce: false,
                    helper(name) {
                        const count = context.helpers.get(name) || 0;
                        context.helpers.set(name, count + 1);
                        return name;
                    },
                    removeHelper(name) {
                        const count = context.helpers.get(name);
                        if (count) {
                            const currentCount = count - 1;
                            if (!currentCount) context.helpers.delete(name); else context.helpers.set(name, currentCount);
                        }
                    },
                    helperString(name) {
                        return `_${helperNameMap[context.helper(name)]}`;
                    },
                    replaceNode(node) {
                        if (!context.currentNode) throw new Error(`Node being replaced is already removed.`);
                        if (!context.parent) throw new Error(`Cannot replace root node.`);
                        context.parent.children[context.childIndex] = context.currentNode = node;
                    },
                    removeNode(node) {
                        if (!context.parent) throw new Error(`Cannot remove root node.`);
                        const list = context.parent.children;
                        const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
                        if (removalIndex < 0) throw new Error(`node being removed is not a child of current parent`);
                        if (!node || node === context.currentNode) {
                            context.currentNode = null;
                            context.onNodeRemoved();
                        } else if (context.childIndex > removalIndex) {
                            context.childIndex--;
                            context.onNodeRemoved();
                        }
                        context.parent.children.splice(removalIndex, 1);
                    },
                    onNodeRemoved: () => {},
                    addIdentifiers(exp) {},
                    removeIdentifiers(exp) {},
                    hoist(exp) {
                        if (isString(exp)) exp = createSimpleExpression(exp);
                        context.hoists.push(exp);
                        const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
                        identifier.hoisted = exp;
                        return identifier;
                    },
                    cache(exp, isVNode = false) {
                        return createCacheExpression(context.cached++, exp, isVNode);
                    }
                };
                return context;
            }
            function transform(root, options) {
                const context = createTransformContext(root, options);
                traverseNode(root, context);
                if (options.hoistStatic) hoistStatic(root, context);
                if (!options.ssr) createRootCodegen(root, context);
                root.helpers = new Set([ ...context.helpers.keys() ]);
                root.components = [ ...context.components ];
                root.directives = [ ...context.directives ];
                root.imports = context.imports;
                root.hoists = context.hoists;
                root.temps = context.temps;
                root.cached = context.cached;
            }
            function createRootCodegen(root, context) {
                const {helper} = context;
                const {children} = root;
                if (children.length === 1) {
                    const child = children[0];
                    if (isSingleElementRoot(root, child) && child.codegenNode) {
                        const codegenNode = child.codegenNode;
                        if (codegenNode.type === 13) convertToBlock(codegenNode, context);
                        root.codegenNode = codegenNode;
                    } else root.codegenNode = child;
                } else if (children.length > 1) {
                    let patchFlag = 64;
                    let patchFlagText = PatchFlagNames[64];
                    if (children.filter((c => c.type !== 3)).length === 1) {
                        patchFlag |= 2048;
                        patchFlagText += `, ${PatchFlagNames[2048]}`;
                    }
                    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, root.children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true, void 0, false);
                }
            }
            function traverseChildren(parent, context) {
                let i = 0;
                const nodeRemoved = () => {
                    i--;
                };
                for (;i < parent.children.length; i++) {
                    const child = parent.children[i];
                    if (isString(child)) continue;
                    context.parent = parent;
                    context.childIndex = i;
                    context.onNodeRemoved = nodeRemoved;
                    traverseNode(child, context);
                }
            }
            function traverseNode(node, context) {
                context.currentNode = node;
                const {nodeTransforms} = context;
                const exitFns = [];
                for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
                    const onExit = nodeTransforms[i2](node, context);
                    if (onExit) if (isArray(onExit)) exitFns.push(...onExit); else exitFns.push(onExit);
                    if (!context.currentNode) return; else node = context.currentNode;
                }
                switch (node.type) {
                  case 3:
                    if (!context.ssr) context.helper(CREATE_COMMENT);
                    break;

                  case 5:
                    if (!context.ssr) context.helper(TO_DISPLAY_STRING);
                    break;

                  case 9:
                    for (let i2 = 0; i2 < node.branches.length; i2++) traverseNode(node.branches[i2], context);
                    break;

                  case 10:
                  case 11:
                  case 1:
                  case 0:
                    traverseChildren(node, context);
                    break;
                }
                context.currentNode = node;
                let i = exitFns.length;
                while (i--) exitFns[i]();
            }
            function createStructuralDirectiveTransform(name, fn) {
                const matches = isString(name) ? n => n === name : n => name.test(n);
                return (node, context) => {
                    if (node.type === 1) {
                        const {props} = node;
                        if (node.tagType === 3 && props.some(isVSlot)) return;
                        const exitFns = [];
                        for (let i = 0; i < props.length; i++) {
                            const prop = props[i];
                            if (prop.type === 7 && matches(prop.name)) {
                                props.splice(i, 1);
                                i--;
                                const onExit = fn(node, prop, context);
                                if (onExit) exitFns.push(onExit);
                            }
                        }
                        return exitFns;
                    }
                };
            }
            const PURE_ANNOTATION = `/*#__PURE__*/`;
            const aliasHelper = s => `${helperNameMap[s]}: _${helperNameMap[s]}`;
            function createCodegenContext(ast, {mode = "function", prefixIdentifiers = mode === "module", sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = "vue/server-renderer", ssr = false, isTS = false, inSSR = false}) {
                const context = {
                    mode,
                    prefixIdentifiers,
                    sourceMap,
                    filename,
                    scopeId,
                    optimizeImports,
                    runtimeGlobalName,
                    runtimeModuleName,
                    ssrRuntimeModuleName,
                    ssr,
                    isTS,
                    inSSR,
                    source: ast.loc.source,
                    code: ``,
                    column: 1,
                    line: 1,
                    offset: 0,
                    indentLevel: 0,
                    pure: false,
                    map: void 0,
                    helper(key) {
                        return `_${helperNameMap[key]}`;
                    },
                    push(code, node) {
                        context.code += code;
                    },
                    indent() {
                        newline(++context.indentLevel);
                    },
                    deindent(withoutNewLine = false) {
                        if (withoutNewLine) --context.indentLevel; else newline(--context.indentLevel);
                    },
                    newline() {
                        newline(context.indentLevel);
                    }
                };
                function newline(n) {
                    context.push("\n" + `  `.repeat(n));
                }
                return context;
            }
            function generate(ast, options = {}) {
                const context = createCodegenContext(ast, options);
                if (options.onContextCreated) options.onContextCreated(context);
                const {mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr} = context;
                const helpers = Array.from(ast.helpers);
                const hasHelpers = helpers.length > 0;
                const useWithBlock = !prefixIdentifiers && mode !== "module";
                const isSetupInlined = false;
                const preambleContext = isSetupInlined ? createCodegenContext(ast, options) : context;
                genFunctionPreamble(ast, preambleContext);
                const functionName = ssr ? `ssrRender` : `render`;
                const args = ssr ? [ "_ctx", "_push", "_parent", "_attrs" ] : [ "_ctx", "_cache" ];
                const signature = args.join(", ");
                push(`function ${functionName}(${signature}) {`);
                indent();
                if (useWithBlock) {
                    push(`with (_ctx) {`);
                    indent();
                    if (hasHelpers) {
                        push(`const { ${helpers.map(aliasHelper).join(", ")} } = _Vue`);
                        push(`\n  `);
                        newline();
                    }
                }
                if (ast.components.length) {
                    genAssets(ast.components, "component", context);
                    if (ast.directives.length || ast.temps > 0) newline();
                }
                if (ast.directives.length) {
                    genAssets(ast.directives, "directive", context);
                    if (ast.temps > 0) newline();
                }
                if (ast.temps > 0) {
                    push(`let `);
                    for (let i = 0; i < ast.temps; i++) push(`${i > 0 ? `, ` : ``}_temp${i}`);
                }
                if (ast.components.length || ast.directives.length || ast.temps) {
                    push(`\n  `);
                    newline();
                }
                if (!ssr) push(`return `);
                if (ast.codegenNode) genNode(ast.codegenNode, context); else push(`null`);
                if (useWithBlock) {
                    deindent();
                    push(`}`);
                }
                deindent();
                push(`}`);
                return {
                    ast,
                    code: context.code,
                    preamble: isSetupInlined ? preambleContext.code : ``,
                    map: context.map ? context.map.toJSON() : void 0
                };
            }
            function genFunctionPreamble(ast, context) {
                const {ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName} = context;
                const VueBinding = runtimeGlobalName;
                const helpers = Array.from(ast.helpers);
                if (helpers.length > 0) {
                    push(`const _Vue = ${VueBinding}\n  `);
                    if (ast.hoists.length) {
                        const staticHelpers = [ CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC ].filter((helper => helpers.includes(helper))).map(aliasHelper).join(", ");
                        push(`const { ${staticHelpers} } = _Vue\n  `);
                    }
                }
                genHoists(ast.hoists, context);
                newline();
                push(`return `);
            }
            function genAssets(assets, type, {helper, push, newline, isTS}) {
                const resolver = helper(type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
                for (let i = 0; i < assets.length; i++) {
                    let id = assets[i];
                    const maybeSelfReference = id.endsWith("__self");
                    if (maybeSelfReference) id = id.slice(0, -6);
                    push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
                    if (i < assets.length - 1) newline();
                }
            }
            function genHoists(hoists, context) {
                if (!hoists.length) return;
                context.pure = true;
                const {push, newline, helper, scopeId, mode} = context;
                newline();
                for (let i = 0; i < hoists.length; i++) {
                    const exp = hoists[i];
                    if (exp) {
                        push(`const _hoisted_${i + 1} = ${``}`);
                        genNode(exp, context);
                        newline();
                    }
                }
                context.pure = false;
            }
            function isText(n) {
                return isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
            }
            function genNodeListAsArray(nodes, context) {
                const multilines = nodes.length > 3 || nodes.some((n => isArray(n) || !isText(n)));
                context.push(`[`);
                multilines && context.indent();
                genNodeList(nodes, context, multilines);
                multilines && context.deindent();
                context.push(`]`);
            }
            function genNodeList(nodes, context, multilines = false, comma = true) {
                const {push, newline} = context;
                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    if (isString(node)) push(node); else if (isArray(node)) genNodeListAsArray(node, context); else genNode(node, context);
                    if (i < nodes.length - 1) if (multilines) {
                        comma && push(",");
                        newline();
                    } else comma && push(", ");
                }
            }
            function genNode(node, context) {
                if (isString(node)) {
                    context.push(node);
                    return;
                }
                if (isSymbol(node)) {
                    context.push(context.helper(node));
                    return;
                }
                switch (node.type) {
                  case 1:
                  case 9:
                  case 11:
                    assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`);
                    genNode(node.codegenNode, context);
                    break;

                  case 2:
                    genText(node, context);
                    break;

                  case 4:
                    genExpression(node, context);
                    break;

                  case 5:
                    genInterpolation(node, context);
                    break;

                  case 12:
                    genNode(node.codegenNode, context);
                    break;

                  case 8:
                    genCompoundExpression(node, context);
                    break;

                  case 3:
                    genComment(node, context);
                    break;

                  case 13:
                    genVNodeCall(node, context);
                    break;

                  case 14:
                    genCallExpression(node, context);
                    break;

                  case 15:
                    genObjectExpression(node, context);
                    break;

                  case 17:
                    genArrayExpression(node, context);
                    break;

                  case 18:
                    genFunctionExpression(node, context);
                    break;

                  case 19:
                    genConditionalExpression(node, context);
                    break;

                  case 20:
                    genCacheExpression(node, context);
                    break;

                  case 21:
                    genNodeList(node.body, context, true, false);
                    break;

                  case 22:
                    break;

                  case 23:
                    break;

                  case 24:
                    break;

                  case 25:
                    break;

                  case 26:
                    break;

                  case 10:
                    break;

                  default:
                    {
                        assert(false, `unhandled codegen node type: ${node.type}`);
                        const exhaustiveCheck = node;
                        return exhaustiveCheck;
                    }
                }
            }
            function genText(node, context) {
                context.push(JSON.stringify(node.content), node);
            }
            function genExpression(node, context) {
                const {content, isStatic} = node;
                context.push(isStatic ? JSON.stringify(content) : content, node);
            }
            function genInterpolation(node, context) {
                const {push, helper, pure} = context;
                if (pure) push(PURE_ANNOTATION);
                push(`${helper(TO_DISPLAY_STRING)}(`);
                genNode(node.content, context);
                push(`)`);
            }
            function genCompoundExpression(node, context) {
                for (let i = 0; i < node.children.length; i++) {
                    const child = node.children[i];
                    if (isString(child)) context.push(child); else genNode(child, context);
                }
            }
            function genExpressionAsPropertyKey(node, context) {
                const {push} = context;
                if (node.type === 8) {
                    push(`[`);
                    genCompoundExpression(node, context);
                    push(`]`);
                } else if (node.isStatic) {
                    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
                    push(text, node);
                } else push(`[${node.content}]`, node);
            }
            function genComment(node, context) {
                const {push, helper, pure} = context;
                if (pure) push(PURE_ANNOTATION);
                push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
            }
            function genVNodeCall(node, context) {
                const {push, helper, pure} = context;
                const {tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent} = node;
                if (directives) push(helper(WITH_DIRECTIVES) + `(`);
                if (isBlock) push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
                if (pure) push(PURE_ANNOTATION);
                const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent);
                push(helper(callHelper) + `(`, node);
                genNodeList(genNullableArgs([ tag, props, children, patchFlag, dynamicProps ]), context);
                push(`)`);
                if (isBlock) push(`)`);
                if (directives) {
                    push(`, `);
                    genNode(directives, context);
                    push(`)`);
                }
            }
            function genNullableArgs(args) {
                let i = args.length;
                while (i--) if (args[i] != null) break;
                return args.slice(0, i + 1).map((arg => arg || `null`));
            }
            function genCallExpression(node, context) {
                const {push, helper, pure} = context;
                const callee = isString(node.callee) ? node.callee : helper(node.callee);
                if (pure) push(PURE_ANNOTATION);
                push(callee + `(`, node);
                genNodeList(node.arguments, context);
                push(`)`);
            }
            function genObjectExpression(node, context) {
                const {push, indent, deindent, newline} = context;
                const {properties} = node;
                if (!properties.length) {
                    push(`{}`, node);
                    return;
                }
                const multilines = properties.length > 1 || properties.some((p => p.value.type !== 4));
                push(multilines ? `{` : `{ `);
                multilines && indent();
                for (let i = 0; i < properties.length; i++) {
                    const {key, value} = properties[i];
                    genExpressionAsPropertyKey(key, context);
                    push(`: `);
                    genNode(value, context);
                    if (i < properties.length - 1) {
                        push(`,`);
                        newline();
                    }
                }
                multilines && deindent();
                push(multilines ? `}` : ` }`);
            }
            function genArrayExpression(node, context) {
                genNodeListAsArray(node.elements, context);
            }
            function genFunctionExpression(node, context) {
                const {push, indent, deindent} = context;
                const {params, returns, body, newline, isSlot} = node;
                if (isSlot) push(`_${helperNameMap[WITH_CTX]}(`);
                push(`(`, node);
                if (isArray(params)) genNodeList(params, context); else if (params) genNode(params, context);
                push(`) => `);
                if (newline || body) {
                    push(`{`);
                    indent();
                }
                if (returns) {
                    if (newline) push(`return `);
                    if (isArray(returns)) genNodeListAsArray(returns, context); else genNode(returns, context);
                } else if (body) genNode(body, context);
                if (newline || body) {
                    deindent();
                    push(`}`);
                }
                if (isSlot) push(`)`);
            }
            function genConditionalExpression(node, context) {
                const {test, consequent, alternate, newline: needNewline} = node;
                const {push, indent, deindent, newline} = context;
                if (test.type === 4) {
                    const needsParens = !isSimpleIdentifier(test.content);
                    needsParens && push(`(`);
                    genExpression(test, context);
                    needsParens && push(`)`);
                } else {
                    push(`(`);
                    genNode(test, context);
                    push(`)`);
                }
                needNewline && indent();
                context.indentLevel++;
                needNewline || push(` `);
                push(`? `);
                genNode(consequent, context);
                context.indentLevel--;
                needNewline && newline();
                needNewline || push(` `);
                push(`: `);
                const isNested = alternate.type === 19;
                if (!isNested) context.indentLevel++;
                genNode(alternate, context);
                if (!isNested) context.indentLevel--;
                needNewline && deindent(true);
            }
            function genCacheExpression(node, context) {
                const {push, helper, indent, deindent, newline} = context;
                push(`_cache[${node.index}] || (`);
                if (node.isVNode) {
                    indent();
                    push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
                    newline();
                }
                push(`_cache[${node.index}] = `);
                genNode(node.value, context);
                if (node.isVNode) {
                    push(`,`);
                    newline();
                    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
                    newline();
                    push(`_cache[${node.index}]`);
                    deindent();
                }
                push(`)`);
            }
            const prohibitedKeywordRE = new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
            const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
            function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
                const exp = node.content;
                if (!exp.trim()) return;
                try {
                    new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
                } catch (e) {
                    let message = e.message;
                    const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
                    if (keywordMatch) message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
                    context.onError(createCompilerError(45, node.loc, void 0, message));
                }
            }
            const transformExpression = (node, context) => {
                if (node.type === 5) node.content = processExpression(node.content, context); else if (node.type === 1) for (let i = 0; i < node.props.length; i++) {
                    const dir = node.props[i];
                    if (dir.type === 7 && dir.name !== "for") {
                        const exp = dir.exp;
                        const arg = dir.arg;
                        if (exp && exp.type === 4 && !(dir.name === "on" && arg)) dir.exp = processExpression(exp, context, dir.name === "slot");
                        if (arg && arg.type === 4 && !arg.isStatic) dir.arg = processExpression(arg, context);
                    }
                }
            };
            function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
                validateBrowserExpression(node, context, asParams, asRawStatements);
                return node;
            }
            const transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, ((node, dir, context) => processIf(node, dir, context, ((ifNode, branch, isRoot) => {
                const siblings = context.parent.children;
                let i = siblings.indexOf(ifNode);
                let key = 0;
                while (i-- >= 0) {
                    const sibling = siblings[i];
                    if (sibling && sibling.type === 9) key += sibling.branches.length;
                }
                return () => {
                    if (isRoot) ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context); else {
                        const parentCondition = getParentCondition(ifNode.codegenNode);
                        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
                    }
                };
            }))));
            function processIf(node, dir, context, processCodegen) {
                if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
                    const loc = dir.exp ? dir.exp.loc : node.loc;
                    context.onError(createCompilerError(28, dir.loc));
                    dir.exp = createSimpleExpression(`true`, false, loc);
                }
                if (dir.exp) validateBrowserExpression(dir.exp, context);
                if (dir.name === "if") {
                    const branch = createIfBranch(node, dir);
                    const ifNode = {
                        type: 9,
                        loc: node.loc,
                        branches: [ branch ]
                    };
                    context.replaceNode(ifNode);
                    if (processCodegen) return processCodegen(ifNode, branch, true);
                } else {
                    const siblings = context.parent.children;
                    const comments = [];
                    let i = siblings.indexOf(node);
                    while (i-- >= -1) {
                        const sibling = siblings[i];
                        if (sibling && sibling.type === 3) {
                            context.removeNode(sibling);
                            comments.unshift(sibling);
                            continue;
                        }
                        if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
                            context.removeNode(sibling);
                            continue;
                        }
                        if (sibling && sibling.type === 9) {
                            if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) context.onError(createCompilerError(30, node.loc));
                            context.removeNode();
                            const branch = createIfBranch(node, dir);
                            if (comments.length && !(context.parent && context.parent.type === 1 && isBuiltInType(context.parent.tag, "transition"))) branch.children = [ ...comments, ...branch.children ];
                            {
                                const key = branch.userKey;
                                if (key) sibling.branches.forEach((({userKey}) => {
                                    if (isSameKey(userKey, key)) context.onError(createCompilerError(29, branch.userKey.loc));
                                }));
                            }
                            sibling.branches.push(branch);
                            const onExit = processCodegen && processCodegen(sibling, branch, false);
                            traverseNode(branch, context);
                            if (onExit) onExit();
                            context.currentNode = null;
                        } else context.onError(createCompilerError(30, node.loc));
                        break;
                    }
                }
            }
            function createIfBranch(node, dir) {
                const isTemplateIf = node.tagType === 3;
                return {
                    type: 10,
                    loc: node.loc,
                    condition: dir.name === "else" ? void 0 : dir.exp,
                    children: isTemplateIf && !findDir(node, "for") ? node.children : [ node ],
                    userKey: findProp(node, `key`),
                    isTemplateIf
                };
            }
            function createCodegenNodeForBranch(branch, keyIndex, context) {
                if (branch.condition) return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), createCallExpression(context.helper(CREATE_COMMENT), [ '"v-if"', "true" ])); else return createChildrenCodegenNode(branch, keyIndex, context);
            }
            function createChildrenCodegenNode(branch, keyIndex, context) {
                const {helper} = context;
                const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2));
                const {children} = branch;
                const firstChild = children[0];
                const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
                if (needFragmentWrapper) if (children.length === 1 && firstChild.type === 11) {
                    const vnodeCall = firstChild.codegenNode;
                    injectProp(vnodeCall, keyProperty, context);
                    return vnodeCall;
                } else {
                    let patchFlag = 64;
                    let patchFlagText = PatchFlagNames[64];
                    if (!branch.isTemplateIf && children.filter((c => c.type !== 3)).length === 1) {
                        patchFlag |= 2048;
                        patchFlagText += `, ${PatchFlagNames[2048]}`;
                    }
                    return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([ keyProperty ]), children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true, false, false, branch.loc);
                } else {
                    const ret = firstChild.codegenNode;
                    const vnodeCall = getMemoedVNodeCall(ret);
                    if (vnodeCall.type === 13) convertToBlock(vnodeCall, context);
                    injectProp(vnodeCall, keyProperty, context);
                    return ret;
                }
            }
            function isSameKey(a, b) {
                if (!a || a.type !== b.type) return false;
                if (a.type === 6) {
                    if (a.value.content !== b.value.content) return false;
                } else {
                    const exp = a.exp;
                    const branchExp = b.exp;
                    if (exp.type !== branchExp.type) return false;
                    if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) return false;
                }
                return true;
            }
            function getParentCondition(node) {
                while (true) if (node.type === 19) if (node.alternate.type === 19) node = node.alternate; else return node; else if (node.type === 20) node = node.value;
            }
            const transformFor = createStructuralDirectiveTransform("for", ((node, dir, context) => {
                const {helper, removeHelper} = context;
                return processFor(node, dir, context, (forNode => {
                    const renderExp = createCallExpression(helper(RENDER_LIST), [ forNode.source ]);
                    const isTemplate = isTemplateNode(node);
                    const memo = findDir(node, "memo");
                    const keyProp = findProp(node, `key`);
                    const keyExp = keyProp && (keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
                    const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
                    const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
                    const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
                    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag + ` /* ${PatchFlagNames[fragmentFlag]} */`, void 0, void 0, true, !isStableFragment, false, node.loc);
                    return () => {
                        let childBlock;
                        const {children} = forNode;
                        if (isTemplate) node.children.some((c => {
                            if (c.type === 1) {
                                const key = findProp(c, "key");
                                if (key) {
                                    context.onError(createCompilerError(33, key.loc));
                                    return true;
                                }
                            }
                        }));
                        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
                        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
                        if (slotOutlet) {
                            childBlock = slotOutlet.codegenNode;
                            if (isTemplate && keyProperty) injectProp(childBlock, keyProperty, context);
                        } else if (needFragmentWrapper) childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([ keyProperty ]) : void 0, node.children, 64 + ` /* ${PatchFlagNames[64]} */`, void 0, void 0, true, void 0, false); else {
                            childBlock = children[0].codegenNode;
                            if (isTemplate && keyProperty) injectProp(childBlock, keyProperty, context);
                            if (childBlock.isBlock !== !isStableFragment) if (childBlock.isBlock) {
                                removeHelper(OPEN_BLOCK);
                                removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                            } else removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                            childBlock.isBlock = !isStableFragment;
                            if (childBlock.isBlock) {
                                helper(OPEN_BLOCK);
                                helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                            } else helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                        }
                        if (memo) {
                            const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [ createSimpleExpression(`_cached`) ]));
                            loop.body = createBlockStatement([ createCompoundExpression([ `const _memo = (`, memo.exp, `)` ]), createCompoundExpression([ `if (_cached`, ...keyExp ? [ ` && _cached.key === `, keyExp ] : [], ` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached` ]), createCompoundExpression([ `const _item = `, childBlock ]), createSimpleExpression(`_item.memo = _memo`), createSimpleExpression(`return _item`) ]);
                            renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached++)));
                        } else renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true));
                    };
                }));
            }));
            function processFor(node, dir, context, processCodegen) {
                if (!dir.exp) {
                    context.onError(createCompilerError(31, dir.loc));
                    return;
                }
                const parseResult = parseForExpression(dir.exp, context);
                if (!parseResult) {
                    context.onError(createCompilerError(32, dir.loc));
                    return;
                }
                const {addIdentifiers, removeIdentifiers, scopes} = context;
                const {source, value, key, index} = parseResult;
                const forNode = {
                    type: 11,
                    loc: dir.loc,
                    source,
                    valueAlias: value,
                    keyAlias: key,
                    objectIndexAlias: index,
                    parseResult,
                    children: isTemplateNode(node) ? node.children : [ node ]
                };
                context.replaceNode(forNode);
                scopes.vFor++;
                const onExit = processCodegen && processCodegen(forNode);
                return () => {
                    scopes.vFor--;
                    if (onExit) onExit();
                };
            }
            const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
            const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
            const stripParensRE = /^\(|\)$/g;
            function parseForExpression(input, context) {
                const loc = input.loc;
                const exp = input.content;
                const inMatch = exp.match(forAliasRE);
                if (!inMatch) return;
                const [, LHS, RHS] = inMatch;
                const result = {
                    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
                    value: void 0,
                    key: void 0,
                    index: void 0
                };
                validateBrowserExpression(result.source, context);
                let valueContent = LHS.trim().replace(stripParensRE, "").trim();
                const trimmedOffset = LHS.indexOf(valueContent);
                const iteratorMatch = valueContent.match(forIteratorRE);
                if (iteratorMatch) {
                    valueContent = valueContent.replace(forIteratorRE, "").trim();
                    const keyContent = iteratorMatch[1].trim();
                    let keyOffset;
                    if (keyContent) {
                        keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
                        result.key = createAliasExpression(loc, keyContent, keyOffset);
                        validateBrowserExpression(result.key, context, true);
                    }
                    if (iteratorMatch[2]) {
                        const indexContent = iteratorMatch[2].trim();
                        if (indexContent) {
                            result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));
                            validateBrowserExpression(result.index, context, true);
                        }
                    }
                }
                if (valueContent) {
                    result.value = createAliasExpression(loc, valueContent, trimmedOffset);
                    validateBrowserExpression(result.value, context, true);
                }
                return result;
            }
            function createAliasExpression(range, content, offset) {
                return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
            }
            function createForLoopParams({value, key, index}, memoArgs = []) {
                return createParamsList([ value, key, index, ...memoArgs ]);
            }
            function createParamsList(args) {
                let i = args.length;
                while (i--) if (args[i]) break;
                return args.slice(0, i + 1).map(((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false)));
            }
            const defaultFallback = createSimpleExpression(`undefined`, false);
            const trackSlotScopes = (node, context) => {
                if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
                    const vSlot = findDir(node, "slot");
                    if (vSlot) {
                        vSlot.exp;
                        context.scopes.vSlot++;
                        return () => {
                            context.scopes.vSlot--;
                        };
                    }
                }
            };
            const buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
            function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
                context.helper(WITH_CTX);
                const {children, loc} = node;
                const slotsProperties = [];
                const dynamicSlots = [];
                let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
                const onComponentSlot = findDir(node, "slot", true);
                if (onComponentSlot) {
                    const {arg, exp} = onComponentSlot;
                    if (arg && !isStaticExp(arg)) hasDynamicSlots = true;
                    slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, children, loc)));
                }
                let hasTemplateSlots = false;
                let hasNamedDefaultSlot = false;
                const implicitDefaultChildren = [];
                const seenSlotNames = new Set;
                let conditionalBranchIndex = 0;
                for (let i = 0; i < children.length; i++) {
                    const slotElement = children[i];
                    let slotDir;
                    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
                        if (slotElement.type !== 3) implicitDefaultChildren.push(slotElement);
                        continue;
                    }
                    if (onComponentSlot) {
                        context.onError(createCompilerError(37, slotDir.loc));
                        break;
                    }
                    hasTemplateSlots = true;
                    const {children: slotChildren, loc: slotLoc} = slotElement;
                    const {arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc} = slotDir;
                    let staticSlotName;
                    if (isStaticExp(slotName)) staticSlotName = slotName ? slotName.content : `default`; else hasDynamicSlots = true;
                    const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
                    let vIf;
                    let vElse;
                    let vFor;
                    if (vIf = findDir(slotElement, "if")) {
                        hasDynamicSlots = true;
                        dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback));
                    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true)) {
                        let j = i;
                        let prev;
                        while (j--) {
                            prev = children[j];
                            if (prev.type !== 3) break;
                        }
                        if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
                            children.splice(i, 1);
                            i--;
                            let conditional = dynamicSlots[dynamicSlots.length - 1];
                            while (conditional.alternate.type === 19) conditional = conditional.alternate;
                            conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
                        } else context.onError(createCompilerError(30, vElse.loc));
                    } else if (vFor = findDir(slotElement, "for")) {
                        hasDynamicSlots = true;
                        const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
                        if (parseResult) dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [ parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true) ])); else context.onError(createCompilerError(32, vFor.loc));
                    } else {
                        if (staticSlotName) {
                            if (seenSlotNames.has(staticSlotName)) {
                                context.onError(createCompilerError(38, dirLoc));
                                continue;
                            }
                            seenSlotNames.add(staticSlotName);
                            if (staticSlotName === "default") hasNamedDefaultSlot = true;
                        }
                        slotsProperties.push(createObjectProperty(slotName, slotFunction));
                    }
                }
                if (!onComponentSlot) {
                    const buildDefaultSlotProperty = (props, children2) => {
                        const fn = buildSlotFn(props, children2, loc);
                        return createObjectProperty(`default`, fn);
                    };
                    if (!hasTemplateSlots) slotsProperties.push(buildDefaultSlotProperty(void 0, children)); else if (implicitDefaultChildren.length && implicitDefaultChildren.some((node2 => isNonWhitespaceContent(node2)))) if (hasNamedDefaultSlot) context.onError(createCompilerError(39, implicitDefaultChildren[0].loc)); else slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
                }
                const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
                let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, createSimpleExpression(slotFlag + ` /* ${slotFlagsText[slotFlag]} */`, false))), loc);
                if (dynamicSlots.length) slots = createCallExpression(context.helper(CREATE_SLOTS), [ slots, createArrayExpression(dynamicSlots) ]);
                return {
                    slots,
                    hasDynamicSlots
                };
            }
            function buildDynamicSlot(name, fn, index) {
                const props = [ createObjectProperty(`name`, name), createObjectProperty(`fn`, fn) ];
                if (index != null) props.push(createObjectProperty(`key`, createSimpleExpression(String(index), true)));
                return createObjectExpression(props);
            }
            function hasForwardedSlots(children) {
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    switch (child.type) {
                      case 1:
                        if (child.tagType === 2 || hasForwardedSlots(child.children)) return true;
                        break;

                      case 9:
                        if (hasForwardedSlots(child.branches)) return true;
                        break;

                      case 10:
                      case 11:
                        if (hasForwardedSlots(child.children)) return true;
                        break;
                    }
                }
                return false;
            }
            function isNonWhitespaceContent(node) {
                if (node.type !== 2 && node.type !== 12) return true;
                return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
            }
            const directiveImportMap = new WeakMap;
            const transformElement = (node, context) => function postTransformElement() {
                node = context.currentNode;
                if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) return;
                const {tag, props} = node;
                const isComponent = node.tagType === 1;
                let vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
                const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
                let vnodeProps;
                let vnodeChildren;
                let vnodePatchFlag;
                let patchFlag = 0;
                let vnodeDynamicProps;
                let dynamicPropNames;
                let vnodeDirectives;
                let shouldUseBlock = isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && (tag === "svg" || tag === "foreignObject");
                if (props.length > 0) {
                    const propsBuildResult = buildProps(node, context, void 0, isComponent, isDynamicComponent);
                    vnodeProps = propsBuildResult.props;
                    patchFlag = propsBuildResult.patchFlag;
                    dynamicPropNames = propsBuildResult.dynamicPropNames;
                    const directives = propsBuildResult.directives;
                    vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir => buildDirectiveArgs(dir, context)))) : void 0;
                    if (propsBuildResult.shouldUseBlock) shouldUseBlock = true;
                }
                if (node.children.length > 0) {
                    if (vnodeTag === KEEP_ALIVE) {
                        shouldUseBlock = true;
                        patchFlag |= 1024;
                        if (node.children.length > 1) context.onError(createCompilerError(46, {
                            start: node.children[0].loc.start,
                            end: node.children[node.children.length - 1].loc.end,
                            source: ""
                        }));
                    }
                    const shouldBuildAsSlots = isComponent && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE;
                    if (shouldBuildAsSlots) {
                        const {slots, hasDynamicSlots} = buildSlots(node, context);
                        vnodeChildren = slots;
                        if (hasDynamicSlots) patchFlag |= 1024;
                    } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
                        const child = node.children[0];
                        const type = child.type;
                        const hasDynamicTextChild = type === 5 || type === 8;
                        if (hasDynamicTextChild && getConstantType(child, context) === 0) patchFlag |= 1;
                        if (hasDynamicTextChild || type === 2) vnodeChildren = child; else vnodeChildren = node.children;
                    } else vnodeChildren = node.children;
                }
                if (patchFlag !== 0) {
                    if (patchFlag < 0) vnodePatchFlag = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`; else {
                        const flagNames = Object.keys(PatchFlagNames).map(Number).filter((n => n > 0 && patchFlag & n)).map((n => PatchFlagNames[n])).join(`, `);
                        vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
                    }
                    if (dynamicPropNames && dynamicPropNames.length) vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
                }
                node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, isComponent, node.loc);
            };
            function resolveComponentType(node, context, ssr = false) {
                let {tag} = node;
                const isExplicitDynamic = isComponentTag(tag);
                const isProp = findProp(node, "is");
                if (isProp) if (isExplicitDynamic || false) {
                    const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
                    if (exp) return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [ exp ]);
                } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) tag = isProp.value.content.slice(4);
                const isDir = !isExplicitDynamic && findDir(node, "is");
                if (isDir && isDir.exp) {
                    context.onWarn(createCompilerError(52, isDir.loc));
                    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [ isDir.exp ]);
                }
                const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
                if (builtIn) {
                    if (!ssr) context.helper(builtIn);
                    return builtIn;
                }
                context.helper(RESOLVE_COMPONENT);
                context.components.add(tag);
                return toValidAssetId(tag, `component`);
            }
            function buildProps(node, context, props = node.props, isComponent, isDynamicComponent, ssr = false) {
                const {tag, loc: elementLoc, children} = node;
                let properties = [];
                const mergeArgs = [];
                const runtimeDirectives = [];
                const hasChildren = children.length > 0;
                let shouldUseBlock = false;
                let patchFlag = 0;
                let hasRef = false;
                let hasClassBinding = false;
                let hasStyleBinding = false;
                let hasHydrationEventBinding = false;
                let hasDynamicKeys = false;
                let hasVnodeHook = false;
                const dynamicPropNames = [];
                const pushMergeArg = arg => {
                    if (properties.length) {
                        mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
                        properties = [];
                    }
                    if (arg) mergeArgs.push(arg);
                };
                const analyzePatchFlag = ({key, value}) => {
                    if (isStaticExp(key)) {
                        const name = key.content;
                        const isEventHandler = isOn(name);
                        if (isEventHandler && (!isComponent || isDynamicComponent) && name.toLowerCase() !== "onclick" && name !== "onUpdate:modelValue" && !isReservedProp(name)) hasHydrationEventBinding = true;
                        if (isEventHandler && isReservedProp(name)) hasVnodeHook = true;
                        if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) return;
                        if (name === "ref") hasRef = true; else if (name === "class") hasClassBinding = true; else if (name === "style") hasStyleBinding = true; else if (name !== "key" && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
                        if (isComponent && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
                    } else hasDynamicKeys = true;
                };
                for (let i = 0; i < props.length; i++) {
                    const prop = props[i];
                    if (prop.type === 6) {
                        const {loc, name, value} = prop;
                        let isStatic = true;
                        if (name === "ref") {
                            hasRef = true;
                            if (context.scopes.vFor > 0) properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
                        }
                        if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || false)) continue;
                        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
                    } else {
                        const {name, arg, exp, loc} = prop;
                        const isVBind = name === "bind";
                        const isVOn = name === "on";
                        if (name === "slot") {
                            if (!isComponent) context.onError(createCompilerError(40, loc));
                            continue;
                        }
                        if (name === "once" || name === "memo") continue;
                        if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || false)) continue;
                        if (isVOn && ssr) continue;
                        if (isVBind && isStaticArgOf(arg, "key") || isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")) shouldUseBlock = true;
                        if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
                        if (!arg && (isVBind || isVOn)) {
                            hasDynamicKeys = true;
                            if (exp) if (isVBind) {
                                pushMergeArg();
                                mergeArgs.push(exp);
                            } else pushMergeArg({
                                type: 14,
                                loc,
                                callee: context.helper(TO_HANDLERS),
                                arguments: isComponent ? [ exp ] : [ exp, `true` ]
                            }); else context.onError(createCompilerError(isVBind ? 34 : 35, loc));
                            continue;
                        }
                        const directiveTransform = context.directiveTransforms[name];
                        if (directiveTransform) {
                            const {props: props2, needRuntime} = directiveTransform(prop, node, context);
                            !ssr && props2.forEach(analyzePatchFlag);
                            if (isVOn && arg && !isStaticExp(arg)) pushMergeArg(createObjectExpression(props2, elementLoc)); else properties.push(...props2);
                            if (needRuntime) {
                                runtimeDirectives.push(prop);
                                if (isSymbol(needRuntime)) directiveImportMap.set(prop, needRuntime);
                            }
                        } else if (!isBuiltInDirective(name)) {
                            runtimeDirectives.push(prop);
                            if (hasChildren) shouldUseBlock = true;
                        }
                    }
                }
                let propsExpression;
                if (mergeArgs.length) {
                    pushMergeArg();
                    if (mergeArgs.length > 1) propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc); else propsExpression = mergeArgs[0];
                } else if (properties.length) propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
                if (hasDynamicKeys) patchFlag |= 16; else {
                    if (hasClassBinding && !isComponent) patchFlag |= 2;
                    if (hasStyleBinding && !isComponent) patchFlag |= 4;
                    if (dynamicPropNames.length) patchFlag |= 8;
                    if (hasHydrationEventBinding) patchFlag |= 32;
                }
                if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) patchFlag |= 512;
                if (!context.inSSR && propsExpression) switch (propsExpression.type) {
                  case 15:
                    let classKeyIndex = -1;
                    let styleKeyIndex = -1;
                    let hasDynamicKey = false;
                    for (let i = 0; i < propsExpression.properties.length; i++) {
                        const key = propsExpression.properties[i].key;
                        if (isStaticExp(key)) {
                            if (key.content === "class") classKeyIndex = i; else if (key.content === "style") styleKeyIndex = i;
                        } else if (!key.isHandlerKey) hasDynamicKey = true;
                    }
                    const classProp = propsExpression.properties[classKeyIndex];
                    const styleProp = propsExpression.properties[styleKeyIndex];
                    if (!hasDynamicKey) {
                        if (classProp && !isStaticExp(classProp.value)) classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [ classProp.value ]);
                        if (styleProp && (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || styleProp.value.type === 17)) styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [ styleProp.value ]);
                    } else propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [ propsExpression ]);
                    break;

                  case 14:
                    break;

                  default:
                    propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [ createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [ propsExpression ]) ]);
                    break;
                }
                return {
                    props: propsExpression,
                    directives: runtimeDirectives,
                    patchFlag,
                    dynamicPropNames,
                    shouldUseBlock
                };
            }
            function dedupeProperties(properties) {
                const knownProps = new Map;
                const deduped = [];
                for (let i = 0; i < properties.length; i++) {
                    const prop = properties[i];
                    if (prop.key.type === 8 || !prop.key.isStatic) {
                        deduped.push(prop);
                        continue;
                    }
                    const name = prop.key.content;
                    const existing = knownProps.get(name);
                    if (existing) {
                        if (name === "style" || name === "class" || isOn(name)) mergeAsArray(existing, prop);
                    } else {
                        knownProps.set(name, prop);
                        deduped.push(prop);
                    }
                }
                return deduped;
            }
            function mergeAsArray(existing, incoming) {
                if (existing.value.type === 17) existing.value.elements.push(incoming.value); else existing.value = createArrayExpression([ existing.value, incoming.value ], existing.loc);
            }
            function buildDirectiveArgs(dir, context) {
                const dirArgs = [];
                const runtime = directiveImportMap.get(dir);
                if (runtime) dirArgs.push(context.helperString(runtime)); else {
                    context.helper(RESOLVE_DIRECTIVE);
                    context.directives.add(dir.name);
                    dirArgs.push(toValidAssetId(dir.name, `directive`));
                }
                const {loc} = dir;
                if (dir.exp) dirArgs.push(dir.exp);
                if (dir.arg) {
                    if (!dir.exp) dirArgs.push(`void 0`);
                    dirArgs.push(dir.arg);
                }
                if (Object.keys(dir.modifiers).length) {
                    if (!dir.arg) {
                        if (!dir.exp) dirArgs.push(`void 0`);
                        dirArgs.push(`void 0`);
                    }
                    const trueExpression = createSimpleExpression(`true`, false, loc);
                    dirArgs.push(createObjectExpression(dir.modifiers.map((modifier => createObjectProperty(modifier, trueExpression))), loc));
                }
                return createArrayExpression(dirArgs, dir.loc);
            }
            function stringifyDynamicPropNames(props) {
                let propsNamesString = `[`;
                for (let i = 0, l = props.length; i < l; i++) {
                    propsNamesString += JSON.stringify(props[i]);
                    if (i < l - 1) propsNamesString += ", ";
                }
                return propsNamesString + `]`;
            }
            function isComponentTag(tag) {
                return tag === "component" || tag === "Component";
            }
            const transformSlotOutlet = (node, context) => {
                if (isSlotOutlet(node)) {
                    const {children, loc} = node;
                    const {slotName, slotProps} = processSlotOutlet(node, context);
                    const slotArgs = [ context.prefixIdentifiers ? `_ctx.$slots` : `$slots`, slotName, "{}", "undefined", "true" ];
                    let expectedLen = 2;
                    if (slotProps) {
                        slotArgs[2] = slotProps;
                        expectedLen = 3;
                    }
                    if (children.length) {
                        slotArgs[3] = createFunctionExpression([], children, false, false, loc);
                        expectedLen = 4;
                    }
                    if (context.scopeId && !context.slotted) expectedLen = 5;
                    slotArgs.splice(expectedLen);
                    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
                }
            };
            function processSlotOutlet(node, context) {
                let slotName = `"default"`;
                let slotProps;
                const nonNameProps = [];
                for (let i = 0; i < node.props.length; i++) {
                    const p = node.props[i];
                    if (p.type === 6) {
                        if (p.value) if (p.name === "name") slotName = JSON.stringify(p.value.content); else {
                            p.name = camelize(p.name);
                            nonNameProps.push(p);
                        }
                    } else if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
                        if (p.exp) slotName = p.exp;
                    } else {
                        if (p.name === "bind" && p.arg && isStaticExp(p.arg)) p.arg.content = camelize(p.arg.content);
                        nonNameProps.push(p);
                    }
                }
                if (nonNameProps.length > 0) {
                    const {props, directives} = buildProps(node, context, nonNameProps, false, false);
                    slotProps = props;
                    if (directives.length) context.onError(createCompilerError(36, directives[0].loc));
                }
                return {
                    slotName,
                    slotProps
                };
            }
            const fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
            const transformOn$1 = (dir, node, context, augmentor) => {
                const {loc, modifiers, arg} = dir;
                if (!dir.exp && !modifiers.length) context.onError(createCompilerError(35, loc));
                let eventName;
                if (arg.type === 4) if (arg.isStatic) {
                    let rawName = arg.content;
                    if (rawName.startsWith("vnode")) context.onWarn(createCompilerError(51, arg.loc));
                    if (rawName.startsWith("vue:")) rawName = `vnode-${rawName.slice(4)}`;
                    const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? toHandlerKey(camelize(rawName)) : `on:${rawName}`;
                    eventName = createSimpleExpression(eventString, true, arg.loc);
                } else eventName = createCompoundExpression([ `${context.helperString(TO_HANDLER_KEY)}(`, arg, `)` ]); else {
                    eventName = arg;
                    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
                    eventName.children.push(`)`);
                }
                let exp = dir.exp;
                if (exp && !exp.content.trim()) exp = void 0;
                let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
                if (exp) {
                    const isMemberExp = isMemberExpression(exp.content);
                    const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
                    const hasMultipleStatements = exp.content.includes(`;`);
                    validateBrowserExpression(exp, context, false, hasMultipleStatements);
                    if (isInlineStatement || shouldCache && isMemberExp) exp = createCompoundExpression([ `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`, exp, hasMultipleStatements ? `}` : `)` ]);
                }
                let ret = {
                    props: [ createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc)) ]
                };
                if (augmentor) ret = augmentor(ret);
                if (shouldCache) ret.props[0].value = context.cache(ret.props[0].value);
                ret.props.forEach((p => p.key.isHandlerKey = true));
                return ret;
            };
            const transformBind = (dir, _node, context) => {
                const {exp, modifiers, loc} = dir;
                const arg = dir.arg;
                if (arg.type !== 4) {
                    arg.children.unshift(`(`);
                    arg.children.push(`) || ""`);
                } else if (!arg.isStatic) arg.content = `${arg.content} || ""`;
                if (modifiers.includes("camel")) if (arg.type === 4) if (arg.isStatic) arg.content = camelize(arg.content); else arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`; else {
                    arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
                    arg.children.push(`)`);
                }
                if (!context.inSSR) {
                    if (modifiers.includes("prop")) injectPrefix(arg, ".");
                    if (modifiers.includes("attr")) injectPrefix(arg, "^");
                }
                if (!exp || exp.type === 4 && !exp.content.trim()) {
                    context.onError(createCompilerError(34, loc));
                    return {
                        props: [ createObjectProperty(arg, createSimpleExpression("", true, loc)) ]
                    };
                }
                return {
                    props: [ createObjectProperty(arg, exp) ]
                };
            };
            const injectPrefix = (arg, prefix) => {
                if (arg.type === 4) if (arg.isStatic) arg.content = prefix + arg.content; else arg.content = `\`${prefix}\${${arg.content}}\``; else {
                    arg.children.unshift(`'${prefix}' + (`);
                    arg.children.push(`)`);
                }
            };
            const transformText = (node, context) => {
                if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) return () => {
                    const children = node.children;
                    let currentContainer;
                    let hasText = false;
                    for (let i = 0; i < children.length; i++) {
                        const child = children[i];
                        if (isText$1(child)) {
                            hasText = true;
                            for (let j = i + 1; j < children.length; j++) {
                                const next = children[j];
                                if (isText$1(next)) {
                                    if (!currentContainer) currentContainer = children[i] = createCompoundExpression([ child ], child.loc);
                                    currentContainer.children.push(` + `, next);
                                    children.splice(j, 1);
                                    j--;
                                } else {
                                    currentContainer = void 0;
                                    break;
                                }
                            }
                        }
                    }
                    if (!hasText || children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && !node.props.find((p => p.type === 7 && !context.directiveTransforms[p.name])) && true)) return;
                    for (let i = 0; i < children.length; i++) {
                        const child = children[i];
                        if (isText$1(child) || child.type === 8) {
                            const callArgs = [];
                            if (child.type !== 2 || child.content !== " ") callArgs.push(child);
                            if (!context.ssr && getConstantType(child, context) === 0) callArgs.push(1 + ` /* ${PatchFlagNames[1]} */`);
                            children[i] = {
                                type: 12,
                                content: child,
                                loc: child.loc,
                                codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
                            };
                        }
                    }
                };
            };
            const seen$1 = new WeakSet;
            const transformOnce = (node, context) => {
                if (node.type === 1 && findDir(node, "once", true)) {
                    if (seen$1.has(node) || context.inVOnce || context.inSSR) return;
                    seen$1.add(node);
                    context.inVOnce = true;
                    context.helper(SET_BLOCK_TRACKING);
                    return () => {
                        context.inVOnce = false;
                        const cur = context.currentNode;
                        if (cur.codegenNode) cur.codegenNode = context.cache(cur.codegenNode, true);
                    };
                }
            };
            const transformModel$1 = (dir, node, context) => {
                const {exp, arg} = dir;
                if (!exp) {
                    context.onError(createCompilerError(41, dir.loc));
                    return createTransformProps();
                }
                const rawExp = exp.loc.source;
                const expString = exp.type === 4 ? exp.content : rawExp;
                const bindingType = context.bindingMetadata[rawExp];
                if (bindingType === "props" || bindingType === "props-aliased") {
                    context.onError(createCompilerError(44, exp.loc));
                    return createTransformProps();
                }
                const maybeRef = false;
                if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
                    context.onError(createCompilerError(42, exp.loc));
                    return createTransformProps();
                }
                const propName = arg ? arg : createSimpleExpression("modelValue", true);
                const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression([ '"onUpdate:" + ', arg ]) : `onUpdate:modelValue`;
                let assignmentExp;
                const eventArg = context.isTS ? `($event: any)` : `$event`;
                assignmentExp = createCompoundExpression([ `${eventArg} => ((`, exp, `) = $event)` ]);
                const props = [ createObjectProperty(propName, dir.exp), createObjectProperty(eventName, assignmentExp) ];
                if (dir.modifiers.length && node.tagType === 1) {
                    const modifiers = dir.modifiers.map((m => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`)).join(`, `);
                    const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([ arg, ' + "Modifiers"' ]) : `modelModifiers`;
                    props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
                }
                return createTransformProps(props);
            };
            function createTransformProps(props = []) {
                return {
                    props
                };
            }
            const seen = new WeakSet;
            const transformMemo = (node, context) => {
                if (node.type === 1) {
                    const dir = findDir(node, "memo");
                    if (!dir || seen.has(node)) return;
                    seen.add(node);
                    return () => {
                        const codegenNode = node.codegenNode || context.currentNode.codegenNode;
                        if (codegenNode && codegenNode.type === 13) {
                            if (node.tagType !== 1) convertToBlock(codegenNode, context);
                            node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [ dir.exp, createFunctionExpression(void 0, codegenNode), `_cache`, String(context.cached++) ]);
                        }
                    };
                }
            };
            function getBaseTransformPreset(prefixIdentifiers) {
                return [ [ transformOnce, transformIf, transformMemo, transformFor, transformExpression, transformSlotOutlet, transformElement, trackSlotScopes, transformText ], {
                    on: transformOn$1,
                    bind: transformBind,
                    model: transformModel$1
                } ];
            }
            function baseCompile(template, options = {}) {
                const onError = options.onError || defaultOnError;
                const isModuleMode = options.mode === "module";
                if (options.prefixIdentifiers === true) onError(createCompilerError(47)); else if (isModuleMode) onError(createCompilerError(48));
                const prefixIdentifiers = false;
                if (options.cacheHandlers) onError(createCompilerError(49));
                if (options.scopeId && !isModuleMode) onError(createCompilerError(50));
                const ast = isString(template) ? baseParse(template, options) : template;
                const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
                transform(ast, extend({}, options, {
                    prefixIdentifiers,
                    nodeTransforms: [ ...nodeTransforms, ...options.nodeTransforms || [] ],
                    directiveTransforms: extend({}, directiveTransforms, options.directiveTransforms || {})
                }));
                return generate(ast, extend({}, options, {
                    prefixIdentifiers
                }));
            }
            const noopDirectiveTransform = () => ({
                props: []
            });
            const V_MODEL_RADIO = Symbol(`vModelRadio`);
            const V_MODEL_CHECKBOX = Symbol(`vModelCheckbox`);
            const V_MODEL_TEXT = Symbol(`vModelText`);
            const V_MODEL_SELECT = Symbol(`vModelSelect`);
            const V_MODEL_DYNAMIC = Symbol(`vModelDynamic`);
            const V_ON_WITH_MODIFIERS = Symbol(`vOnModifiersGuard`);
            const V_ON_WITH_KEYS = Symbol(`vOnKeysGuard`);
            const V_SHOW = Symbol(`vShow`);
            const TRANSITION = Symbol(`Transition`);
            const TRANSITION_GROUP = Symbol(`TransitionGroup`);
            registerRuntimeHelpers({
                [V_MODEL_RADIO]: `vModelRadio`,
                [V_MODEL_CHECKBOX]: `vModelCheckbox`,
                [V_MODEL_TEXT]: `vModelText`,
                [V_MODEL_SELECT]: `vModelSelect`,
                [V_MODEL_DYNAMIC]: `vModelDynamic`,
                [V_ON_WITH_MODIFIERS]: `withModifiers`,
                [V_ON_WITH_KEYS]: `withKeys`,
                [V_SHOW]: `vShow`,
                [TRANSITION]: `Transition`,
                [TRANSITION_GROUP]: `TransitionGroup`
            });
            let decoder;
            function decodeHtmlBrowser(raw, asAttr = false) {
                if (!decoder) decoder = document.createElement("div");
                if (asAttr) {
                    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
                    return decoder.children[0].getAttribute("foo");
                } else {
                    decoder.innerHTML = raw;
                    return decoder.textContent;
                }
            }
            const isRawTextContainer = makeMap("style,iframe,script,noscript", true);
            const parserOptions = {
                isVoidTag,
                isNativeTag: tag => isHTMLTag(tag) || isSVGTag(tag),
                isPreTag: tag => tag === "pre",
                decodeEntities: decodeHtmlBrowser,
                isBuiltInComponent: tag => {
                    if (isBuiltInType(tag, `Transition`)) return TRANSITION; else if (isBuiltInType(tag, `TransitionGroup`)) return TRANSITION_GROUP;
                },
                getNamespace(tag, parent) {
                    let ns = parent ? parent.ns : 0;
                    if (parent && ns === 2) {
                        if (parent.tag === "annotation-xml") {
                            if (tag === "svg") return 1;
                            if (parent.props.some((a => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")))) ns = 0;
                        } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") ns = 0;
                    } else if (parent && ns === 1) if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") ns = 0;
                    if (ns === 0) {
                        if (tag === "svg") return 1;
                        if (tag === "math") return 2;
                    }
                    return ns;
                },
                getTextMode({tag, ns}) {
                    if (ns === 0) {
                        if (tag === "textarea" || tag === "title") return 1;
                        if (isRawTextContainer(tag)) return 2;
                    }
                    return 0;
                }
            };
            const transformStyle = node => {
                if (node.type === 1) node.props.forEach(((p, i) => {
                    if (p.type === 6 && p.name === "style" && p.value) node.props[i] = {
                        type: 7,
                        name: `bind`,
                        arg: createSimpleExpression(`style`, true, p.loc),
                        exp: parseInlineCSS(p.value.content, p.loc),
                        modifiers: [],
                        loc: p.loc
                    };
                }));
            };
            const parseInlineCSS = (cssText, loc) => {
                const normalized = parseStringStyle(cssText);
                return createSimpleExpression(JSON.stringify(normalized), false, loc, 3);
            };
            function createDOMCompilerError(code, loc) {
                return createCompilerError(code, loc, DOMErrorMessages);
            }
            const DOMErrorMessages = {
                [53]: `v-html is missing expression.`,
                [54]: `v-html will override element children.`,
                [55]: `v-text is missing expression.`,
                [56]: `v-text will override element children.`,
                [57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
                [58]: `v-model argument is not supported on plain elements.`,
                [59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
                [60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
                [61]: `v-show is missing expression.`,
                [62]: `<Transition> expects exactly one child element or component.`,
                [63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
            };
            const transformVHtml = (dir, node, context) => {
                const {exp, loc} = dir;
                if (!exp) context.onError(createDOMCompilerError(53, loc));
                if (node.children.length) {
                    context.onError(createDOMCompilerError(54, loc));
                    node.children.length = 0;
                }
                return {
                    props: [ createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression("", true)) ]
                };
            };
            const transformVText = (dir, node, context) => {
                const {exp, loc} = dir;
                if (!exp) context.onError(createDOMCompilerError(55, loc));
                if (node.children.length) {
                    context.onError(createDOMCompilerError(56, loc));
                    node.children.length = 0;
                }
                return {
                    props: [ createObjectProperty(createSimpleExpression(`textContent`, true), exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(context.helperString(TO_DISPLAY_STRING), [ exp ], loc) : createSimpleExpression("", true)) ]
                };
            };
            const transformModel = (dir, node, context) => {
                const baseResult = transformModel$1(dir, node, context);
                if (!baseResult.props.length || node.tagType === 1) return baseResult;
                if (dir.arg) context.onError(createDOMCompilerError(58, dir.arg.loc));
                function checkDuplicatedValue() {
                    const value = findProp(node, "value");
                    if (value) context.onError(createDOMCompilerError(60, value.loc));
                }
                const {tag} = node;
                const isCustomElement = context.isCustomElement(tag);
                if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
                    let directiveToUse = V_MODEL_TEXT;
                    let isInvalidType = false;
                    if (tag === "input" || isCustomElement) {
                        const type = findProp(node, `type`);
                        if (type) {
                            if (type.type === 7) directiveToUse = V_MODEL_DYNAMIC; else if (type.value) switch (type.value.content) {
                              case "radio":
                                directiveToUse = V_MODEL_RADIO;
                                break;

                              case "checkbox":
                                directiveToUse = V_MODEL_CHECKBOX;
                                break;

                              case "file":
                                isInvalidType = true;
                                context.onError(createDOMCompilerError(59, dir.loc));
                                break;

                              default:
                                checkDuplicatedValue();
                                break;
                            }
                        } else if (hasDynamicKeyVBind(node)) directiveToUse = V_MODEL_DYNAMIC; else checkDuplicatedValue();
                    } else if (tag === "select") directiveToUse = V_MODEL_SELECT; else checkDuplicatedValue();
                    if (!isInvalidType) baseResult.needRuntime = context.helper(directiveToUse);
                } else context.onError(createDOMCompilerError(57, dir.loc));
                baseResult.props = baseResult.props.filter((p => !(p.key.type === 4 && p.key.content === "modelValue")));
                return baseResult;
            };
            const isEventOptionModifier = makeMap(`passive,once,capture`);
            const isNonKeyModifier = makeMap(`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`);
            const maybeKeyModifier = makeMap("left,right");
            const isKeyboardEvent = makeMap(`onkeyup,onkeydown,onkeypress`, true);
            const resolveModifiers = (key, modifiers, context, loc) => {
                const keyModifiers = [];
                const nonKeyModifiers = [];
                const eventOptionModifiers = [];
                for (let i = 0; i < modifiers.length; i++) {
                    const modifier = modifiers[i];
                    if (isEventOptionModifier(modifier)) eventOptionModifiers.push(modifier); else if (maybeKeyModifier(modifier)) if (isStaticExp(key)) if (isKeyboardEvent(key.content)) keyModifiers.push(modifier); else nonKeyModifiers.push(modifier); else {
                        keyModifiers.push(modifier);
                        nonKeyModifiers.push(modifier);
                    } else if (isNonKeyModifier(modifier)) nonKeyModifiers.push(modifier); else keyModifiers.push(modifier);
                }
                return {
                    keyModifiers,
                    nonKeyModifiers,
                    eventOptionModifiers
                };
            };
            const transformClick = (key, event) => {
                const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
                return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([ `(`, key, `) === "onClick" ? "${event}" : (`, key, `)` ]) : key;
            };
            const transformOn = (dir, node, context) => transformOn$1(dir, node, context, (baseResult => {
                const {modifiers} = dir;
                if (!modifiers.length) return baseResult;
                let {key, value: handlerExp} = baseResult.props[0];
                const {keyModifiers, nonKeyModifiers, eventOptionModifiers} = resolveModifiers(key, modifiers, context, dir.loc);
                if (nonKeyModifiers.includes("right")) key = transformClick(key, `onContextmenu`);
                if (nonKeyModifiers.includes("middle")) key = transformClick(key, `onMouseup`);
                if (nonKeyModifiers.length) handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [ handlerExp, JSON.stringify(nonKeyModifiers) ]);
                if (keyModifiers.length && (!isStaticExp(key) || isKeyboardEvent(key.content))) handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [ handlerExp, JSON.stringify(keyModifiers) ]);
                if (eventOptionModifiers.length) {
                    const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
                    key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([ `(`, key, `) + "${modifierPostfix}"` ]);
                }
                return {
                    props: [ createObjectProperty(key, handlerExp) ]
                };
            }));
            const transformShow = (dir, node, context) => {
                const {exp, loc} = dir;
                if (!exp) context.onError(createDOMCompilerError(61, loc));
                return {
                    props: [],
                    needRuntime: context.helper(V_SHOW)
                };
            };
            const transformTransition = (node, context) => {
                if (node.type === 1 && node.tagType === 1) {
                    const component = context.isBuiltInComponent(node.tag);
                    if (component === TRANSITION) return () => {
                        if (!node.children.length) return;
                        if (hasMultipleChildren(node)) context.onError(createDOMCompilerError(62, {
                            start: node.children[0].loc.start,
                            end: node.children[node.children.length - 1].loc.end,
                            source: ""
                        }));
                        const child = node.children[0];
                        if (child.type === 1) for (const p of child.props) if (p.type === 7 && p.name === "show") node.props.push({
                            type: 6,
                            name: "persisted",
                            value: void 0,
                            loc: node.loc
                        });
                    };
                }
            };
            function hasMultipleChildren(node) {
                const children = node.children = node.children.filter((c => c.type !== 3 && !(c.type === 2 && !c.content.trim())));
                const child = children[0];
                return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
            }
            const ignoreSideEffectTags = (node, context) => {
                if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
                    context.onError(createDOMCompilerError(63, node.loc));
                    context.removeNode();
                }
            };
            const DOMNodeTransforms = [ transformStyle, transformTransition ];
            const DOMDirectiveTransforms = {
                cloak: noopDirectiveTransform,
                html: transformVHtml,
                text: transformVText,
                model: transformModel,
                on: transformOn,
                show: transformShow
            };
            function compile(template, options = {}) {
                return baseCompile(template, extend({}, parserOptions, options, {
                    nodeTransforms: [ ignoreSideEffectTags, ...DOMNodeTransforms, ...options.nodeTransforms || [] ],
                    directiveTransforms: extend({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
                    transformHoist: null
                }));
            }
            initDev();
            const compileCache = Object.create(null);
            function compileToFunction(template, options) {
                if (!isString(template)) if (template.nodeType) template = template.innerHTML; else {
                    warn(`invalid template option: `, template);
                    return NOOP;
                }
                const key = template;
                const cached = compileCache[key];
                if (cached) return cached;
                if (template[0] === "#") {
                    const el = document.querySelector(template);
                    if (!el) warn(`Template element not found or is empty: ${template}`);
                    template = el ? el.innerHTML : ``;
                }
                const opts = extend({
                    hoistStatic: true,
                    onError,
                    onWarn: e => onError(e, true)
                }, options);
                if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = tag => !!customElements.get(tag);
                const {code} = compile(template, opts);
                function onError(err, asWarning = false) {
                    const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
                    const codeFrame = err.loc && generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
                    warn(codeFrame ? `${message}\n  ${codeFrame}` : message);
                }
                const render = new Function(code)();
                render._rc = true;
                return compileCache[key] = render;
            }
            registerRuntimeCompiler(compileToFunction);
            exports.BaseTransition = BaseTransition;
            exports.BaseTransitionPropsValidators = BaseTransitionPropsValidators;
            exports.Comment = Comment;
            exports.EffectScope = EffectScope;
            exports.Fragment = Fragment;
            exports.KeepAlive = KeepAlive;
            exports.ReactiveEffect = ReactiveEffect;
            exports.Static = Static;
            exports.Suspense = Suspense;
            exports.Teleport = Teleport;
            exports.Text = Text;
            exports.Transition = Transition;
            exports.TransitionGroup = TransitionGroup;
            exports.VueElement = VueElement;
            exports.assertNumber = assertNumber;
            exports.callWithAsyncErrorHandling = callWithAsyncErrorHandling;
            exports.callWithErrorHandling = callWithErrorHandling;
            exports.camelize = camelize;
            exports.capitalize = capitalize;
            exports.cloneVNode = cloneVNode;
            exports.compatUtils = compatUtils;
            exports.compile = compileToFunction;
            exports.computed = computed;
            exports.createApp = createApp;
            exports.createBlock = createBlock;
            exports.createCommentVNode = createCommentVNode;
            exports.createElementBlock = createElementBlock;
            exports.createElementVNode = createBaseVNode;
            exports.createHydrationRenderer = createHydrationRenderer;
            exports.createPropsRestProxy = createPropsRestProxy;
            exports.createRenderer = createRenderer;
            exports.createSSRApp = createSSRApp;
            exports.createSlots = createSlots;
            exports.createStaticVNode = createStaticVNode;
            exports.createTextVNode = createTextVNode;
            exports.createVNode = createVNode;
            exports.customRef = customRef;
            exports.defineAsyncComponent = defineAsyncComponent;
            exports.defineComponent = defineComponent;
            exports.defineCustomElement = defineCustomElement;
            exports.defineEmits = defineEmits;
            exports.defineExpose = defineExpose;
            exports.defineModel = defineModel;
            exports.defineOptions = defineOptions;
            exports.defineProps = defineProps;
            exports.defineSSRCustomElement = defineSSRCustomElement;
            exports.defineSlots = defineSlots;
            exports.effect = effect;
            exports.effectScope = effectScope;
            exports.getCurrentInstance = getCurrentInstance;
            exports.getCurrentScope = getCurrentScope;
            exports.getTransitionRawChildren = getTransitionRawChildren;
            exports.guardReactiveProps = guardReactiveProps;
            exports.h = h;
            exports.handleError = handleError;
            exports.hasInjectionContext = hasInjectionContext;
            exports.hydrate = hydrate;
            exports.initCustomFormatter = initCustomFormatter;
            exports.initDirectivesForSSR = initDirectivesForSSR;
            exports.inject = inject;
            exports.isMemoSame = isMemoSame;
            exports.isProxy = isProxy;
            exports.isReactive = isReactive;
            exports.isReadonly = isReadonly;
            exports.isRef = isRef;
            exports.isRuntimeOnly = isRuntimeOnly;
            exports.isShallow = isShallow;
            exports.isVNode = isVNode;
            exports.markRaw = markRaw;
            exports.mergeDefaults = mergeDefaults;
            exports.mergeModels = mergeModels;
            exports.mergeProps = mergeProps;
            exports.nextTick = nextTick;
            exports.normalizeClass = normalizeClass;
            exports.normalizeProps = normalizeProps;
            exports.normalizeStyle = normalizeStyle;
            exports.onActivated = onActivated;
            exports.onBeforeMount = onBeforeMount;
            exports.onBeforeUnmount = onBeforeUnmount;
            exports.onBeforeUpdate = onBeforeUpdate;
            exports.onDeactivated = onDeactivated;
            exports.onErrorCaptured = onErrorCaptured;
            exports.onMounted = onMounted;
            exports.onRenderTracked = onRenderTracked;
            exports.onRenderTriggered = onRenderTriggered;
            exports.onScopeDispose = onScopeDispose;
            exports.onServerPrefetch = onServerPrefetch;
            exports.onUnmounted = onUnmounted;
            exports.onUpdated = onUpdated;
            exports.openBlock = openBlock;
            exports.popScopeId = popScopeId;
            exports.provide = provide;
            exports.proxyRefs = proxyRefs;
            exports.pushScopeId = pushScopeId;
            exports.queuePostFlushCb = queuePostFlushCb;
            exports.reactive = reactive;
            exports.readonly = readonly;
            exports.ref = ref;
            exports.registerRuntimeCompiler = registerRuntimeCompiler;
            exports.render = render;
            exports.renderList = renderList;
            exports.renderSlot = renderSlot;
            exports.resolveComponent = resolveComponent;
            exports.resolveDirective = resolveDirective;
            exports.resolveDynamicComponent = resolveDynamicComponent;
            exports.resolveFilter = resolveFilter;
            exports.resolveTransitionHooks = resolveTransitionHooks;
            exports.setBlockTracking = setBlockTracking;
            exports.setDevtoolsHook = setDevtoolsHook;
            exports.setTransitionHooks = setTransitionHooks;
            exports.shallowReactive = shallowReactive;
            exports.shallowReadonly = shallowReadonly;
            exports.shallowRef = shallowRef;
            exports.ssrContextKey = ssrContextKey;
            exports.ssrUtils = ssrUtils;
            exports.stop = stop;
            exports.toDisplayString = toDisplayString;
            exports.toHandlerKey = toHandlerKey;
            exports.toHandlers = toHandlers;
            exports.toRaw = toRaw;
            exports.toRef = toRef;
            exports.toRefs = toRefs;
            exports.toValue = toValue;
            exports.transformVNodeArgs = transformVNodeArgs;
            exports.triggerRef = triggerRef;
            exports.unref = unref;
            exports.useAttrs = useAttrs;
            exports.useCssModule = useCssModule;
            exports.useCssVars = useCssVars;
            exports.useModel = useModel;
            exports.useSSRContext = useSSRContext;
            exports.useSlots = useSlots;
            exports.useTransitionState = useTransitionState;
            exports.vModelCheckbox = vModelCheckbox;
            exports.vModelDynamic = vModelDynamic;
            exports.vModelRadio = vModelRadio;
            exports.vModelSelect = vModelSelect;
            exports.vModelText = vModelText;
            exports.vShow = vShow;
            exports.version = version;
            exports.warn = warn;
            exports.watch = watch;
            exports.watchEffect = watchEffect;
            exports.watchPostEffect = watchPostEffect;
            exports.watchSyncEffect = watchSyncEffect;
            exports.withAsyncContext = withAsyncContext;
            exports.withCtx = withCtx;
            exports.withDefaults = withDefaults;
            exports.withDirectives = withDirectives;
            exports.withKeys = withKeys;
            exports.withMemo = withMemo;
            exports.withModifiers = withModifiers;
            exports.withScopeId = withScopeId;
        })({});
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]") || el.closest(".sorting-box__close")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit(options = {
            validate: true
        }) {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    const formError = form.querySelector("._form-error");
                    if (formError && form.hasAttribute("data-goto-error")) gotoBlock(formError, true, 1e3);
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        document.addEventListener("DOMContentLoaded", (function() {
            var eventCalllback = function(e) {
                var el = e.target, clearVal = el.dataset.phoneClear, pattern = el.dataset.phonePattern, matrix_def = "+7(___) ___-__-__", matrix = pattern ? pattern : matrix_def, i = 0, def = matrix.replace(/\D/g, ""), val = e.target.value.replace(/\D/g, "");
                if (clearVal !== "false" && e.type === "blur") if (val.length < matrix.match(/([\_\d])/g).length) {
                    e.target.value = "";
                    return;
                }
                if (def.length >= val.length) val = def;
                e.target.value = matrix.replace(/./g, (function(a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
                }));
            };
            var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
            for (let elem of phone_inputs) for (let ev of [ "input", "blur", "focus" ]) elem.addEventListener(ev, eventCalllback);
        }));
        var jquery = __webpack_require__(755);
        isWebp();
        menuInit();
        spollers();
        formFieldsInit({
            viewPass: false
        });
        formSubmit();
        jquery(".input-file input[type=file]").on("change", (function() {
            let file = this.files[0];
            jquery(this).closest(".input-file").find(".input-file-text").html(file.name);
        }));
    })();
})();
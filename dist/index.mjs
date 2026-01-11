import e from"@actions/core";import t from"fs/promises";
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function n(e,t){let n=e.slice(0,t).split(/\r\n|\n|\r/g);return[n.length,n.pop().length+1]}function r(e,t,n){let r=e.split(/\r\n|\n|\r/g),i=``,a=(Math.log10(t+1)|0)+1;for(let e=t-1;e<=t+1;e++){let o=r[e-1];o&&(i+=e.toString().padEnd(a,` `),i+=`:  `,i+=o,i+=`
`,e===t&&(i+=` `.repeat(a+n+2),i+=`^
`))}return i}var i=class extends Error{line;column;codeblock;constructor(e,t){let[i,a]=n(t.toml,t.ptr),o=r(t.toml,i,a);super(`Invalid TOML document: ${e}\n\n${o}`,t),this.line=i,this.column=a,this.codeblock=o}};
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function a(e,t){let n=0;for(;e[t-++n]===`\\`;);return--n&&n%2}function o(e,t=0,n=e.length){let r=e.indexOf(`
`,t);return e[r-1]===`\r`&&r--,r<=n?r:-1}function s(e,t){for(let n=t;n<e.length;n++){let r=e[n];if(r===`
`)return n;if(r===`\r`&&e[n+1]===`
`)return n+1;if(r<` `&&r!==`	`||r===``)throw new i(`control characters are not allowed in comments`,{toml:e,ptr:t})}return e.length}function c(e,t,n,r){let i;for(;(i=e[t])===` `||i===`	`||!n&&(i===`
`||i===`\r`&&e[t+1]===`
`);)t++;return r||i!==`#`?t:c(e,s(e,t),n)}function l(e,t,n,r,a=!1){if(!r)return t=o(e,t),t<0?e.length:t;for(let i=t;i<e.length;i++){let t=e[i];if(t===`#`)i=o(e,i);else if(t===n)return i+1;else if(t===r||a&&(t===`
`||t===`\r`&&e[i+1]===`
`))return i}throw new i(`cannot find end of structure`,{toml:e,ptr:t})}function u(e,t){let n=e[t],r=n===e[t+1]&&e[t+1]===e[t+2]?e.slice(t,t+3):n;t+=r.length-1;do t=e.indexOf(r,++t);while(t>-1&&n!==`'`&&a(e,t));return t>-1&&(t+=r.length,r.length>1&&(e[t]===n&&t++,e[t]===n&&t++)),t}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let d=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;var f=class e extends Date{#e=!1;#t=!1;#n=null;constructor(e){let t=!0,n=!0,r=`Z`;if(typeof e==`string`){let i=e.match(d);i?(i[1]||(t=!1,e=`0000-01-01T${e}`),n=!!i[2],n&&e[10]===` `&&(e=e.replace(` `,`T`)),i[2]&&+i[2]>23?e=``:(r=i[3]||null,e=e.toUpperCase(),!r&&n&&(e+=`Z`))):e=``}super(e),isNaN(this.getTime())||(this.#e=t,this.#t=n,this.#n=r)}isDateTime(){return this.#e&&this.#t}isLocal(){return!this.#e||!this.#t||!this.#n}isDate(){return this.#e&&!this.#t}isTime(){return this.#t&&!this.#e}isValid(){return this.#e||this.#t}toISOString(){let e=super.toISOString();if(this.isDate())return e.slice(0,10);if(this.isTime())return e.slice(11,23);if(this.#n===null)return e.slice(0,-1);if(this.#n===`Z`)return e;let t=this.#n.slice(1,3)*60+ +this.#n.slice(4,6);return t=this.#n[0]===`-`?t:-t,new Date(this.getTime()-t*6e4).toISOString().slice(0,-1)+this.#n}static wrapAsOffsetDateTime(t,n=`Z`){let r=new e(t);return r.#n=n,r}static wrapAsLocalDateTime(t){let n=new e(t);return n.#n=null,n}static wrapAsLocalDate(t){let n=new e(t);return n.#t=!1,n.#n=null,n}static wrapAsLocalTime(t){let n=new e(t);return n.#e=!1,n.#n=null,n}};
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let p=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,m=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,h=/^[+-]?0[0-9_]/,g=/^[0-9a-f]{2,8}$/i,_={b:`\b`,t:`	`,n:`
`,f:`\f`,r:`\r`,e:`\x1B`,'"':`"`,"\\":`\\`};function v(e,t=0,n=e.length){let r=e[t]===`'`,a=e[t++]===e[t]&&e[t]===e[t+1];a&&(n-=2,e[t+=2]===`\r`&&t++,e[t]===`
`&&t++);let o=0,s,l=``,u=t;for(;t<n-1;){let n=e[t++];if(n===`
`||n===`\r`&&e[t]===`
`){if(!a)throw new i(`newlines are not allowed in strings`,{toml:e,ptr:t-1})}else if(n<` `&&n!==`	`||n===``)throw new i(`control characters are not allowed in strings`,{toml:e,ptr:t-1});if(s){if(s=!1,n===`x`||n===`u`||n===`U`){let r=e.slice(t,t+=n===`x`?2:n===`u`?4:8);if(!g.test(r))throw new i(`invalid unicode escape`,{toml:e,ptr:o});try{l+=String.fromCodePoint(parseInt(r,16))}catch{throw new i(`invalid unicode escape`,{toml:e,ptr:o})}}else if(a&&(n===`
`||n===` `||n===`	`||n===`\r`)){if(t=c(e,t-1,!0),e[t]!==`
`&&e[t]!==`\r`)throw new i(`invalid escape: only line-ending whitespace may be escaped`,{toml:e,ptr:o});t=c(e,t)}else if(n in _)l+=_[n];else throw new i(`unrecognized escape sequence`,{toml:e,ptr:o});u=t}else !r&&n===`\\`&&(o=t-1,s=!0,l+=e.slice(u,o))}return l+e.slice(u,n-1)}function y(e,t,n,r){if(e===`true`)return!0;if(e===`false`)return!1;if(e===`-inf`)return-1/0;if(e===`inf`||e===`+inf`)return 1/0;if(e===`nan`||e===`+nan`||e===`-nan`)return NaN;if(e===`-0`)return r?0n:0;let a=p.test(e);if(a||m.test(e)){if(h.test(e))throw new i(`leading zeroes are not allowed`,{toml:t,ptr:n});e=e.replace(/_/g,``);let o=+e;if(isNaN(o))throw new i(`invalid number`,{toml:t,ptr:n});if(a){if((a=!Number.isSafeInteger(o))&&!r)throw new i(`integer value cannot be represented losslessly`,{toml:t,ptr:n});(a||r===!0)&&(o=BigInt(e))}return o}let o=new f(e);if(!o.isValid())throw new i(`invalid value`,{toml:t,ptr:n});return o}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function b(e,t,n){let r=e.slice(t,n),i=r.indexOf(`#`);return i>-1&&(s(e,i),r=r.slice(0,i)),[r.trimEnd(),i]}function x(e,t,n,r,a){if(r===0)throw new i(`document contains excessively nested structures. aborting.`,{toml:e,ptr:t});let o=e[t];if(o===`[`||o===`{`){let[s,l]=o===`[`?T(e,t,r,a):w(e,t,r,a);if(n){if(l=c(e,l),e[l]===`,`)l++;else if(e[l]!==n)throw new i(`expected comma or end of structure`,{toml:e,ptr:l})}return[s,l]}let s;if(o===`"`||o===`'`){s=u(e,t);let r=v(e,t,s);if(n){if(s=c(e,s),e[s]&&e[s]!==`,`&&e[s]!==n&&e[s]!==`
`&&e[s]!==`\r`)throw new i(`unexpected character encountered`,{toml:e,ptr:s});s+=+(e[s]===`,`)}return[r,s]}s=l(e,t,`,`,n);let d=b(e,t,s-+(e[s-1]===`,`));if(!d[0])throw new i(`incomplete key-value declaration: no value specified`,{toml:e,ptr:t});return n&&d[1]>-1&&(s=c(e,t+d[1]),s+=+(e[s]===`,`)),[y(d[0],e,t,a),s]}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let S=/^[a-zA-Z0-9-_]+[ \t]*$/;function C(e,t,n=`=`){let r=t-1,a=[],s=e.indexOf(n,t);if(s<0)throw new i(`incomplete key-value: cannot find end of key`,{toml:e,ptr:t});do{let c=e[t=++r];if(c!==` `&&c!==`	`)if(c===`"`||c===`'`){if(c===e[t+1]&&c===e[t+2])throw new i(`multiline strings are not allowed in keys`,{toml:e,ptr:t});let l=u(e,t);if(l<0)throw new i(`unfinished string encountered`,{toml:e,ptr:t});r=e.indexOf(`.`,l);let d=e.slice(l,r<0||r>s?s:r),f=o(d);if(f>-1)throw new i(`newlines are not allowed in keys`,{toml:e,ptr:t+r+f});if(d.trimStart())throw new i(`found extra tokens after the string part`,{toml:e,ptr:l});if(s<l&&(s=e.indexOf(n,l),s<0))throw new i(`incomplete key-value: cannot find end of key`,{toml:e,ptr:t});a.push(v(e,t,l))}else{r=e.indexOf(`.`,t);let n=e.slice(t,r<0||r>s?s:r);if(!S.test(n))throw new i(`only letter, numbers, dashes and underscores are allowed in keys`,{toml:e,ptr:t});a.push(n.trimEnd())}}while(r+1&&r<s);return[a,c(e,s+1,!0,!0)]}function w(e,t,n,r){let a={},o=new Set,c;for(t++;(c=e[t++])!==`}`&&c;)if(c===`,`)throw new i(`expected value, found comma`,{toml:e,ptr:t-1});else if(c===`#`)t=s(e,t);else if(c!==` `&&c!==`	`&&c!==`
`&&c!==`\r`){let s,c=a,l=!1,[u,d]=C(e,t-1);for(let n=0;n<u.length;n++){if(n&&(c=l?c[s]:c[s]={}),s=u[n],(l=Object.hasOwn(c,s))&&(typeof c[s]!=`object`||o.has(c[s])))throw new i(`trying to redefine an already defined value`,{toml:e,ptr:t});!l&&s===`__proto__`&&Object.defineProperty(c,s,{enumerable:!0,configurable:!0,writable:!0})}if(l)throw new i(`trying to redefine an already defined value`,{toml:e,ptr:t});let[f,p]=x(e,d,`}`,n-1,r);o.add(f),c[s]=f,t=p}if(!c)throw new i(`unfinished table encountered`,{toml:e,ptr:t});return[a,t]}function T(e,t,n,r){let a=[],o;for(t++;(o=e[t++])!==`]`&&o;)if(o===`,`)throw new i(`expected value, found comma`,{toml:e,ptr:t-1});else if(o===`#`)t=s(e,t);else if(o!==` `&&o!==`	`&&o!==`
`&&o!==`\r`){let i=x(e,t-1,`]`,n-1,r);a.push(i[0]),t=i[1]}if(!o)throw new i(`unfinished array encountered`,{toml:e,ptr:t});return[a,t]}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function E(e,t,n,r){let i=t,a=n,o,s=!1,c;for(let t=0;t<e.length;t++){if(t){if(i=s?i[o]:i[o]={},a=(c=a[o]).c,r===0&&(c.t===1||c.t===2))return null;if(c.t===2){let e=i.length-1;i=i[e],a=a[e].c}}if(o=e[t],(s=Object.hasOwn(i,o))&&a[o]?.t===0&&a[o]?.d)return null;s||(o===`__proto__`&&(Object.defineProperty(i,o,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(a,o,{enumerable:!0,configurable:!0,writable:!0})),a[o]={t:t<e.length-1&&r===2?3:r,d:!1,i:0,c:{}})}if(c=a[o],c.t!==r&&!(r===1&&c.t===3)||(r===2&&(c.d||(c.d=!0,i[o]=[]),i[o].push(i={}),c.c[c.i++]=c={t:1,d:!1,i:0,c:{}}),c.d))return null;if(c.d=!0,r===1)i=s?i[o]:i[o]={};else if(r===0&&s)return null;return[o,i,c.c]}function D(e,{maxDepth:t=1e3,integersAsBigInt:n}={}){let r={},a={},o=r,s=a;for(let l=c(e,0);l<e.length;){if(e[l]===`[`){let t=e[++l]===`[`,n=C(e,l+=+t,`]`);if(t){if(e[n[1]-1]!==`]`)throw new i(`expected end of table declaration`,{toml:e,ptr:n[1]-1});n[1]++}let c=E(n[0],r,a,t?2:1);if(!c)throw new i(`trying to redefine an already defined table or value`,{toml:e,ptr:l});s=c[2],o=c[1],l=n[1]}else{let r=C(e,l),a=E(r[0],o,s,0);if(!a)throw new i(`trying to redefine an already defined table or value`,{toml:e,ptr:l});let c=x(e,r[1],void 0,t,n);a[1][a[0]]=c[0],l=c[1]}if(l=c(e,l,!0),e[l]&&e[l]!==`
`&&e[l]!==`\r`)throw new i(`each key-value declaration must be followed by an end-of-line`,{toml:e,ptr:l});l=c(e,l)}return r}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
let O=/^[a-z0-9-_]+$/i;function k(e){let t=typeof e;if(t===`object`){if(Array.isArray(e))return`array`;if(e instanceof Date)return`date`}return t}function A(e){for(let t=0;t<e.length;t++)if(k(e[t])!==`object`)return!1;return e.length!=0}function j(e){return JSON.stringify(e).replace(/\x7f/g,`\\u007f`)}function M(e,t,n,r){if(n===0)throw Error(`Could not stringify the object: maximum object depth exceeded`);if(t===`number`)return isNaN(e)?`nan`:e===1/0?`inf`:e===-1/0?`-inf`:r&&Number.isInteger(e)?e.toFixed(1):e.toString();if(t===`bigint`||t===`boolean`)return e.toString();if(t===`string`)return j(e);if(t===`date`){if(isNaN(e.getTime()))throw TypeError(`cannot serialize invalid date`);return e.toISOString()}if(t===`object`)return N(e,n,r);if(t===`array`)return P(e,n,r)}function N(e,t,n){let r=Object.keys(e);if(r.length===0)return`{}`;let i=`{ `;for(let a=0;a<r.length;a++){let o=r[a];a&&(i+=`, `),i+=O.test(o)?o:j(o),i+=` = `,i+=M(e[o],k(e[o]),t-1,n)}return i+` }`}function P(e,t,n){if(e.length===0)return`[]`;let r=`[ `;for(let i=0;i<e.length;i++){if(i&&(r+=`, `),e[i]===null||e[i]===void 0)throw TypeError(`arrays cannot contain null or undefined values`);r+=M(e[i],k(e[i]),t-1,n)}return r+` ]`}function F(e,t,n,r){if(n===0)throw Error(`Could not stringify the object: maximum object depth exceeded`);let i=``;for(let a=0;a<e.length;a++)i+=`${i&&`
`}[[${t}]]\n`,i+=I(0,e[a],t,n,r);return i}function I(e,t,n,r,i){if(r===0)throw Error(`Could not stringify the object: maximum object depth exceeded`);let a=``,o=``,s=Object.keys(t);for(let e=0;e<s.length;e++){let c=s[e];if(t[c]!==null&&t[c]!==void 0){let e=k(t[c]);if(e===`symbol`||e===`function`)throw TypeError(`cannot serialize values of type '${e}'`);let s=O.test(c)?c:j(c);if(e===`array`&&A(t[c]))o+=(o&&`
`)+F(t[c],n?`${n}.${s}`:s,r-1,i);else if(e===`object`){let e=n?`${n}.${s}`:s;o+=(o&&`
`)+I(e,t[c],e,r-1,i)}else a+=s,a+=` = `,a+=M(t[c],e,r,i),a+=`
`}}return e&&(a||!o)&&(a=a?`[${e}]\n${a}`:`[${e}]`),a&&o?`${a}\n${o}`:a||o}function L(e,{maxDepth:t=1e3,numbersAsFloat:n=!1}={}){if(k(e)!==`object`)throw TypeError(`stringify can only be called with an object`);let r=I(0,e,``,t,n);return r[r.length-1]===`
`?r:r+`
`}
/*!
* Copyright (c) Squirrel Chat et al., All rights reserved.
* SPDX-License-Identifier: BSD-3-Clause
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
* 3. Neither the name of the copyright holder nor the names of its contributors
*    may be used to endorse or promote products derived from this software without
*    specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
* SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
* CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var R={parse:D,stringify:L,TomlDate:f,TomlError:i};t.readFile(`${process.env.GITHUB_WORKSPACE}/dtmgr.toml`).then(t=>{let n=R.parse(t.toString()).dependencies;if(!Array.isArray(n)){e.setFailed(`dependencies not a list`);return}let r=``;n.every(t=>typeof t==`string`?(r+=t,r+=` `,!0):(e.setFailed(`non-string in dependencies list`),!1)),e.setOutput(`dtmgr_packages_list`,r)});export{};
/* ---------- Datos ---------- */
const P = (id, name, price, emoji, desc, image = '') => ({ id, name, price, emoji, desc, image });

const baseProducts = [
  P(1,'Comida Premium Gato 2kg',185.5,'🐟','Alimento sabor salmón'),
  P(2,'Rascador Torre Felino',450,'🐱','Torre de descanso y juegos'),
  P(3,'Correa Retráctil Perro',210,'🦮','Para paseos seguros'),
  P(4,'Juguete Hueso Mordedera',85,'🦴','Caucho resistente para perros'),
  P(5,'Jaula para Hámster Completa',550,'🐹','Incluye rueda y túneles'),
  P(6,'Alimento para Peces Betta',65,'🐠','Hojuelas nutritivas'),
  P(7,'Pecera de Cristal 10L',320,'🐟','Ideal para peces pequeños'),
  P(8,'Comedero para Aves / Loros',110,'🦜','Dispensador automático'),
  P(9,'Transportadora Mediana',390,'🧳','Ventilada y segura para viajes'),
  P(10,'Plato Doble Acero Inox.',95,'🥣','Antiderrapante, para agua y comida'),
  P(11,'Arnés Ajustable Perro',175,'🐕','Acolchado y reflejante'),
  P(12,'Heno Premium para Conejos',80,'🐰','Fibra natural, 1 kg'),
  P(13,'Filtro para Pecera',230,'💧','Silencioso, hasta 60L'),
  P(14,'Pelota Interactiva Gato',60,'⚽','Con cascabel y luz LED'),
  P(15,'Semillas Mix para Canarios',70,'🐤','Mezcla nutritiva 500 g'),
  P(16,'Casita de Madera para Conejo',620,'🏠','Para interior y exterior')
];

const bestSellers = [
  P(101,'Arena Felina Aromatizada 5kg',120,'🧺','Aglomerante de alta absorción'),
  P(102,'Snack Catnip Gourmet',35,'🌿','Premio saludable de hierba gatuna'),
  P(103,'Shampoo Antipulgas Perro/Gato',145,'🧴','Protección y pelaje brillante'),
  P(104,'Galletas Nutritivas para Perro',95,'🍪','Premios crujientes con vitaminas'),
  P(105,'Rueda de Ejercicio Hámster',160,'🎡','Silenciosa y segura'),
  P(106,'Croquetas Perro Adulto 8kg',420,'🥩','Receta de pollo y arroz'),
  P(107,'Paté Húmedo Gato (12 pzas)',210,'🥫','Sabores surtidos'),
  P(108,'Bolsas Biodegradables x120',55,'♻️','Para paseos limpios')
];

const recommendations = [
  P(201,'Fuente de Agua Automática',380,'⛲','Agua fresca constante'),
  P(202,'Cepillo Quitapelos Pro',85,'🪮','Elimina el pelo muerto'),
  P(203,'Cama Acolchonada Grande',499,'🛏️','Confort para razas medianas'),
  P(204,'Soga Mordedera de Algodón',70,'🪢','Ideal para limpiar dientes'),
  P(205,'Collar Luminoso LED',150,'💡','Seguridad nocturna'),
  P(206,'Túnel Plegable para Gatos',190,'🌀','Juego y escondite'),
  P(207,'Suéter Térmico para Perro',230,'🧥','Para días fríos'),
  P(208,'Cortaúñas con Guardia',99,'✂️','Corte seguro y preciso')
];

/* Imágenes de producto (por id) */
const IMG = {
 "1": "https://imgs.search.brave.com/zMNtcRqIIYw3xXTiv-mADJs5OyGbUEo3ZmZ3MmD3QUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxcnNZK0ltQkxM/LmpwZw",
 "2": "https://imgs.search.brave.com/D27PXg3ocVv6X5E7T4rzuxPehGMzpcV9QHqqbVSZ7as/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVr/dHJhLnZ0ZXhhc3Nl/dHMuY29tL2FycXVp/dm9zL2lkcy8xNzE4/NjU5MS01MDAtYXV0/bz92PTYzODkxOTIw/NzA0ODQzMDAwMCZ3/aWR0aD01MDAmaGVp/Z2h0PWF1dG8mYXNw/ZWN0PXRydWU",
 "3": "https://imgs.search.brave.com/NZwADusEcIUFXkIUVvit5YiQkMw1sPm68b9JouPxQ80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxYVM4djRjcnlM/LmpwZw",
 "4": "https://imgs.search.brave.com/1bZ_qxG_MkXN9sjScYva4mBAaH6UJG2P6CKPAEk4k98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY3MTM1OC1NTEE4/MDQyMzYxMDEwMl8x/MTIwMjQtVi53ZWJw",
 "5": "https://imgs.search.brave.com/RYYntaCWsu5oYN2tFTB6EGl_Wd9GagC5N4AnFL5wn6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY3ODAzMi1NTEE4/ODQwMzMwNjkwM18w/NzIwMjUtVi53ZWJw",
 "6": "https://imgs.search.brave.com/L50KkUMoNOchbUW85CGFfyJVG7d7LOUrdvITg0snwPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzcwMDY5Ny1NTE01/MDY1NTQ5Mjc3Ml8w/NzIwMjItVi53ZWJw",
 "7": "https://imgs.search.brave.com/IcYc0EKMROyl71yhAzsEDmOSCooIDRmmzDGbjHFKv-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFscEdlWnlpd0wu/anBn",
 "8": "https://imgs.search.brave.com/4PcTMnZNm9PfJpeFQid26UdBqdU5ou-j28Z8MBd5OmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZFJnUlIxUG1M/LmpwZw",
 "9": "https://imgs.search.brave.com/biuEK1QQHbA1lfsdESqGJoExZ2_zK5a1_jIlKWpjTX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY3Mjg1MS1NTEE5/OTUwMTM4NjU5Nl8x/MTIwMjUtVi53ZWJw",
 "10": "https://imgs.search.brave.com/D9-xPCiTbtv6qMT_5crispB1jtwrHOyT4TOWHF0Fzw0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFneFpDRnQwc0wu/anBn",
 "11": "https://imgs.search.brave.com/qbaHmj-D1zVxt8pLZoBDVsWbx-blSUvfu1Wp1jqH9zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdW01YXczYk1M/LmpwZw",
 "12": "https://imgs.search.brave.com/1nIxhhaQ905tHvCgRago8nyTp_h5Zpww8dsg7c_0-GQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYWNh/c2l0YWRlbG9zYW5p/bWFsZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA0/L2ZpYnJhNWtndHJh/cy5qcGc",
 "13": "https://imgs.search.brave.com/kQo2i251GLtX2HrEgpI5JX3v2EdEKhopZwEkPLiofTM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF83NDYzMTkt/Q0JUODg1MDI4MTM3/ODlfMDcyMDI1LUYt/eC1maWx0cm8tcGVj/ZXJhLWV4dGVybm8t/ZGUtY2FzY2FkYS1w/YXJhLXBlY2VyYXMt/MTUtYS0yMC53ZWJw",
 "14": "https://imgs.search.brave.com/0BxdAptQiKYzdN5MTVIoBefCrllY1hJAd4M4tyI6nec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF0UFRLUEtxYUwu/anBn",
 "15": "https://imgs.search.brave.com/nW8c2NxkrqrZ0QMum7-iB2-WZtF49gpPgKB89GaooMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYW1h/bGl0YXMubXgvY2Ru/L3Nob3AvZmlsZXMv/cHJvZHVjdC02MDky/MjYwLndlYnA_dj0x/NzcxMzY4ODU1Jndp/ZHRoPTE0NDU",
 "16": "https://imgs.search.brave.com/35_5TLba9EnmtDpy_V-7FGkgS_fGnKEBzTnCkuCH9Kw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL1ZoVUFB/T1N3UWtWbkFlbHUv/cy1sOTYwLndlYnA",
 "101": "https://imgs.search.brave.com/mWTpMPx1-D3zOTaNvVWhZ8-GNQJkkqXsY753oJ0BhYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcXVh/cml1bXRlcnJhbWFy/LmNvbS81MjcxLW1l/ZGl1bV9kZWZhdWx0/L2FyZW5hLWFyb21h/dGl6YWRhLWNpdHkt/NWtnLmpwZw",
 "102": "https://imgs.search.brave.com/POB4jX8v-0GGTA9BL0HtovIqgIKqgKZp1ITzzKz--NQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56b29wbHVzLmNv/bS9iaWxkZXIvOC84/MDAvMjU3NDk2X3Bs/YV9nb3VybWV0X25h/dHVyZXNjcmVhdGlv/bnNfc25hY2tfaHVo/bmt1cmJpc181eDEw/Z19oc18wMV84Lmpw/Zz93aWR0aD00MDAm/Zm9ybWF0PXdlYnA",
 "103": "https://imgs.search.brave.com/soALs6rNZmd5KUGTaSpJO0cpTZ6Zfs9qDqnivy4G5xE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGViLmNvbS5teC9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9o/ZWItcHJvZC5zdHly/ay5pby9sb29sdS9j/ZG4vZWNvbW1lcmNl/L2ltZy8xLzMzMDYx/My8zMzA2MTNfMDEu/d2VicD92PTk4ODY2/NWMzJnc9MTIwMCZx/PTc1",
 "104": "https://imgs.search.brave.com/91ekvuB8ob001mdCNwN68yO3B8go46kSF5NISeh1TIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taW1h/bGUuY29tLzM1NTY3/LWhvbWVfZGVmYXVs/dC9lZGdhcmQtY29v/cGVyLWdhbGxldGFz/LWRlLW1hbnphbmEt/eS1hcmFuZGFub3Mt/cGFyYS1wZXJyb3Mu/anBn",
 "105": "https://imgs.search.brave.com/xyVzfxmiox_3UjpXEvbTdPi2tOwcRzTqAd9n-B6iZzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZvdG9zLXByZW1p/dW0vaGFtc3Rlci1q/dWd1ZXRvbi1oYWNl/LWVqZXJjaWNpb3Mt/ZW5lcmdpY29zLXJ1/ZWRhLWJsYW5jYS1z/b2JyZS1mb25kby1i/bGFuY29fOTM2NzUt/MjgxNTUxLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA",
 "106": "https://imgs.search.brave.com/olorb1v9ZZdDT_q9OfLtd7XNLi8EIv6IpDCbQFdWgx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZXR6/ZXIubXgvY2RuL3No/b3AvcHJvZHVjdHMv/Q3JvcXVldGEtTnVw/ZWMtQWR1bHRvOGtn/LmpwZz92PTE2MTk0/NTc2OTAmd2lkdGg9/MTk0Ng",
 "107": "https://imgs.search.brave.com/wWYe09HIzVod2J3DrmjJqG9xitGaeknBY5Guy35K-9w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE1bmlDOHdabUwu/anBn",
 "108": "https://imgs.search.brave.com/EFd6p-Z641WDYQjLkNst_pW6n6LdKKrOpSr9ndJyu4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYmlkY29tLmNv/bS5hci9yZXNpemU_/c3JjPWh0dHBzOi8v/c3RhdGljLmJpZGNv/bS5jb20uYXIvcHVi/bGljYWNpb25lc01M/L3Byb2R1Y3Rvcy9C/T0xQRVQwMS8xMDAw/eDEwMDAtQk9MUEVU/MDEuanBnJnc9NTAw/JnE9MTAw",
 "201": "https://imgs.search.brave.com/rnDgMV54gyiAAuRJJVb7xNF5n6EZ_KYkFZoSORZxhOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZXN0/bWFzY290YS5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvNjFmZ2tC/eG9HekwuX0FDX1NM/MTIwMF8xMDI0eC5q/cGc_dj0xNjA3MzU2/MjQx",
 "202": "https://imgs.search.brave.com/qS8Q16anatrvRAHstAeWsbTMwsFGuihhk1tR7waUlmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEwVUxiQy1vNUwu/anBn",
 "203": "https://imgs.search.brave.com/hwqQiDlOW3JIse31RalZUzoLClgNELi41-J1O1cnJXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFYM0Fzc3ZPd0wu/anBn",
 "204": "https://imgs.search.brave.com/jZxWAssYJZxKMR6_LLCpK0wgCDIRVbCZAI2USpCO2nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxaFYrYktyLU9M/LmpwZw",
 "205": "https://imgs.search.brave.com/38M6ywC7Q93CwqzX32CtBFLwszi_uvL3tP0n1Li0das/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgzNDA5MC1NQ084/MTI4NTMzOTMwMV8x/MjIwMjQtRS53ZWJw",
 "206": "https://imgs.search.brave.com/-cfheAnPJ0HWPK0DSgNjEXZuCYAgcdK3nv_nDKlgdU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS56b29wbHVzLmNv/bS9tZWRpYS9zbXMt/YXJ0aWNsZS1hc3Nl/dHMtcHJvZC85OTkw/MDY0OTU4L3BpY3R1/cmVzLzUwNzViZGY5/YjJkN2I1ZDY1ODhl/MTk0YjA4Mjc0MTVl/L3c0MDAuanBn",
 "207": "https://imgs.search.brave.com/NVAt7jp7hLP6hv-eFbifw2ctrzs92GHnXTJV7KGTYlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxRFFqM1hablhM/LmpwZw",
 "208": "https://imgs.search.brave.com/VPL-y566UIgAm2pdBOb5hMNFZ17uYeygCgxlW1VXKWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFIWlQ5d09XMkwu/anBn"
};
[...baseProducts, ...bestSellers, ...recommendations].forEach(p => { p.image = IMG[p.id] || ''; });

const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};

let products = store.get('products', baseProducts);
let cart = [], wishlist = [], admin = false, query = '';
let reviews = [
  { user: 'Sofía Martínez', text: '¡Excelente servicio! Mi gato amó el rascador y llegó rapidísimo.' },
  { user: 'Carlos Gómez', text: 'Compré la fuente de agua y mis mascotas están fascinadas.' },
  { user: 'Mariana López', text: 'Muy buena variedad, compré cosas para mi perrito y para mi michi.' }
];

const TINTS = ['#ffe7a8','#cfe4ff','#d5f2de','#f7d9e3','#e6ddfb','#ffd9c2'];
const tint = p => TINTS[Math.abs(p.id) % TINTS.length];
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const findItem = id => [...products, ...bestSellers, ...recommendations].find(p => p.id === id);

function toast(msg) {
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2600);
}
const openModal = id => $(id).classList.add('open');
const closeModal = id => $(id).classList.remove('open');

/* ---------- Autenticación (demo en el navegador) ---------- */
// Aviso: usuarios y contraseñas se guardan en localStorage. Es una simulación;
// una tienda real necesita un servidor y contraseñas con hash seguro.
const hash = s => { let h = 5381; for (const c of s) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0; return h.toString(36); };
let session = store.get('session', null);
let authMode = 'login', pendingAction = null;

function renderAuth() {
  const box = $('auth-area');
  box.innerHTML = session
    ? `<span class="hi">Hola, ${esc(session.name.split(' ')[0])}</span><button class="btn-sm edit" onclick="logout()">Cerrar sesión</button>`
    : `<button class="btn-sm edit" onclick="openAuth('login')">Iniciar sesión</button><button class="btn-sm buy" onclick="openAuth('register')">Registrarme</button>`;
  $('hero-auth').style.display = session ? 'none' : '';
  if (session && !$('review-user').value) $('review-user').value = session.name;
}

function openAuth(mode, note = '') {
  authMode = mode;
  const reg = mode === 'register';
  $('auth-title').textContent = reg ? 'Crear cuenta' : 'Iniciar sesión';
  $('auth-submit').textContent = reg ? 'Crear cuenta' : 'Entrar';
  $('name-wrap').style.display = reg ? '' : 'none';
  $('pass2-wrap').style.display = reg ? '' : 'none';
  $('auth-name').required = reg; $('auth-pass2').required = reg;
  $('tab-login').classList.toggle('on', !reg); $('tab-register').classList.toggle('on', reg);
  $('auth-note').textContent = note; $('auth-error').textContent = '';
  openModal('auth-modal');
}

$('auth-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('auth-email').value.trim().toLowerCase(), pass = $('auth-pass').value;
  const users = store.get('users', {});
  const err = m => $('auth-error').textContent = m;
  if (authMode === 'register') {
    if (users[email]) return err('Ese correo ya tiene una cuenta. Inicia sesión.');
    if (pass !== $('auth-pass2').value) return err('Las contraseñas no coinciden.');
    users[email] = { name: $('auth-name').value.trim(), pass: hash(pass) };
    store.set('users', users);
  } else if (!users[email] || users[email].pass !== hash(pass)) {
    return err('Correo o contraseña incorrectos.');
  }
  session = { email, name: users[email].name };
  store.set('session', session);
  $('auth-form').reset(); closeModal('auth-modal'); renderAuth();
  toast(`¡Bienvenido, ${session.name.split(' ')[0]}!`);
  if (pendingAction) { const a = pendingAction; pendingAction = null; a(); }
});

function logout() {
  session = null; localStorage.removeItem('session'); cart = [];
  renderAuth(); renderCart(); toast('Sesión cerrada');
}

// Ejecuta la acción solo si hay sesión; si no, pide iniciar sesión primero
function requireLogin(action) {
  if (session) return action();
  pendingAction = action;
  openAuth('login', 'Inicia sesión o crea una cuenta para comprar.');
}

/* ---------- Tarjetas de producto ---------- */
function cardHTML(p, crud) {
  const img = p.image ? `<img referrerpolicy="no-referrer" src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">` : '';
  return `<article class="card">
    <div class="thumb" style="background:${tint(p)}">${p.emoji || '🐾'}${img}</div>
    <div class="card-body">
      <h3>${esc(p.name)}</h3>
      <p class="desc">${esc(p.desc)}</p>
      <span class="price">$${p.price.toFixed(2)}</span>
      <div class="actions">
        <button class="btn-sm buy" onclick="addToCart(${p.id})">Comprar</button>
        <button class="btn-sm wish" onclick="addToWishlist(${p.id})" aria-label="Agregar a deseos">❤️</button>
        ${crud ? `<button class="btn-sm edit" onclick="editProduct(${p.id})">Editar</button><button class="btn-sm del" onclick="deleteProduct(${p.id})">Eliminar</button>` : ''}
      </div>
    </div></article>`;
}

function renderAll() {
  $('bestsellers-list').innerHTML = bestSellers.map(p => cardHTML(p, false)).join('');
  $('recommendations-list').innerHTML = recommendations.map(p => cardHTML(p, false)).join('');
  renderProducts(); renderWishlist(); renderCart(); renderReviews();
}

/* ---------- CRUD ---------- */
const f = { id: $('product-id'), name: $('product-name'), price: $('product-price'), image: $('product-image'), desc: $('product-desc') };

$('product-form').addEventListener('submit', e => {
  e.preventDefault();
  const data = { name: f.name.value.trim(), price: parseFloat(f.price.value), image: f.image.value.trim(), desc: f.desc.value.trim() };
  if (f.id.value) {
    products = products.map(p => p.id === Number(f.id.value) ? { ...p, ...data } : p);
    toast('Producto actualizado');
  } else {
    products.push({ id: Date.now(), emoji: '🐾', ...data });
    toast('Producto guardado');
  }
  store.set('products', products); renderProducts();
  e.target.reset(); f.id.value = ''; $('save-btn').textContent = 'Guardar producto';
});

function renderProducts() {
  const q = query.toLowerCase();
  const list = products.filter(p => (p.name + ' ' + p.desc).toLowerCase().includes(q));
  $('product-list').innerHTML = list.length
    ? list.map(p => cardHTML(p, admin)).join('')
    : '<p class="empty">No encontramos productos con esa búsqueda.</p>';
}

function editProduct(id) {
  const p = products.find(x => x.id === id); if (!p) return;
  f.id.value = p.id; f.name.value = p.name; f.price.value = p.price; f.image.value = p.image; f.desc.value = p.desc;
  $('save-btn').textContent = 'Actualizar producto';
  $('catalog-anchor').scrollIntoView({ behavior: 'smooth' });
}

function deleteProduct(id) {
  if (!confirm('¿Eliminar este producto del catálogo?')) return;
  products = products.filter(p => p.id !== id);
  store.set('products', products); renderProducts();
}

/* ---------- Lista de deseos ---------- */
function addToWishlist(id) {
  if (wishlist.includes(id)) return toast('Ya está en tu lista de deseos');
  wishlist.push(id); renderWishlist(); toast('Agregado a tu lista de deseos ❤️');
}
function removeFromWishlist(id) { wishlist = wishlist.filter(x => x !== id); renderWishlist(); }
function renderWishlist() {
  const items = wishlist.map(findItem).filter(Boolean);
  $('wishlist-container').innerHTML = items.length
    ? items.map(p => `<article class="card"><div class="thumb" style="background:${tint(p)}">${p.emoji || '🐾'}${p.image ? `<img referrerpolicy="no-referrer" src="${esc(p.image)}" alt="${esc(p.name)}" onerror="this.remove()">` : ''}</div>
        <div class="card-body"><h3>${esc(p.name)}</h3><span class="price">$${p.price.toFixed(2)}</span>
        <div class="actions"><button class="btn-sm buy" onclick="addToCart(${p.id})">Comprar</button>
        <button class="btn-sm del" onclick="removeFromWishlist(${p.id})">Quitar</button></div></div></article>`).join('')
    : '<p class="empty">Aún no guardas productos. Toca ❤️ en cualquier tarjeta.</p>';
}

/* ---------- Carrito ---------- */
function addToCart(id) {
  requireLogin(() => {
    const p = findItem(id); if (!p) return;
    cart.push({ name: p.name, price: p.price }); renderCart(); toast(`${p.name} agregado al carrito`);
  });
}
function removeFromCart(i) { cart.splice(i, 1); renderCart(); }
function renderCart() {
  const total = cart.reduce((s, i) => s + i.price, 0);
  $('cart-items').innerHTML = cart.length
    ? cart.map((it, i) => `<li><span>${esc(it.name)} — $${it.price.toFixed(2)}</span><button class="btn-sm del" onclick="removeFromCart(${i})" aria-label="Quitar">✕</button></li>`).join('')
    : `<li>${session ? 'Tu carrito está vacío.' : 'Inicia sesión para empezar a comprar.'}</li>`;
  $('cart-total').textContent = total.toFixed(2);
  $('cart-count').textContent = cart.length;
  $('checkout-btn').style.display = cart.length ? 'block' : 'none';
}

/* ---------- Pago simulado ---------- */
function startCheckout() {
  requireLogin(() => {
    $('modal-total').textContent = cart.reduce((s, i) => s + i.price, 0).toFixed(2);
    openModal('payment-modal');
  });
}
function togglePaymentFields() {
  const m = $('payment-method').value;
  $('card-fields').style.display = m === 'card' ? 'block' : 'none';
  $('cash-fields').style.display = m === 'cash' ? 'block' : 'none';
}
function toggleInvoice() {
  const on = $('invoice').checked;
  $('invoice-fields').hidden = !on;
  ['inv-rfc', 'inv-name', 'inv-email'].forEach(i => $(i).required = on);
  if (on && !$('inv-email').value && session) $('inv-email').value = session.email;
}
$('payment-form').addEventListener('submit', e => {
  e.preventDefault();
  const err = m => $('pay-error').textContent = m;
  err('');
  if ($('invoice').checked && !/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/i.test($('inv-rfc').value.trim()))
    return err('El RFC no es válido. Revisa que tenga 12 o 13 caracteres.');
  const folio = 'CG-' + Date.now().toString(36).toUpperCase();
  const msg = $('payment-method').value === 'card'
    ? `¡Pago procesado! Folio ${folio}. Tu pedido va en camino.`
    : `Referencia ${folio}: tienes 48 h para pagar en OXXO o al recibir.`;
  toast(msg + ($('invoice').checked ? ' Enviaremos tu factura a ' + $('inv-email').value.trim() + '.' : ''));
  cart = []; renderCart(); closeModal('payment-modal'); e.target.reset(); toggleInvoice(); togglePaymentFields();
});

/* ---------- Reseñas ---------- */
$('review-form').addEventListener('submit', e => {
  e.preventDefault();
  reviews.unshift({ user: $('review-user').value.trim(), text: $('review-text').value.trim() });
  renderReviews(); $('review-text').value = ''; toast('¡Gracias por tu reseña!');
});
function renderReviews() {
  $('reviews-list').innerHTML = reviews.map(r => `<div class="review"><strong>${esc(r.user)}:</strong> ${esc(r.text)}</div>`).join('');
}

/* ---------- Inicio ---------- */
document.addEventListener('keydown', e => { if (e.key === 'Escape') ['auth-modal', 'payment-modal'].forEach(closeModal); });
// Añade a tu catálogo guardado los productos nuevos de esta versión
baseProducts.forEach(b => { if (!products.some(p => p.name === b.name)) products.push(b); });
[...bestSellers, ...recommendations].forEach(b => { if (!products.some(p => p.name === b.name)) products.push(b); });
// Limpia fotos antiguas guardadas que no coincidían con el producto
const baseByName = new Map([...baseProducts, ...bestSellers, ...recommendations].map(b => [b.name, b]));
products.forEach(p => { const b = baseByName.get(p.name); if (b) { p.image = b.image; p.emoji = b.emoji; } });
store.set('products', products);
$('search').addEventListener('input', e => { query = e.target.value.trim(); renderProducts(); });
$('admin-toggle').addEventListener('change', e => {
  if (!session) { e.target.checked = false; return requireLogin(() => {}); }
  admin = e.target.checked; $('product-form').hidden = !admin; renderProducts();
});
renderAuth(); renderAll();

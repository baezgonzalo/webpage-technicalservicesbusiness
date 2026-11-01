// City chips in the Service Areas section.
const cities = [
  'Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Garland', 'Irving',
  'Frisco', 'McKinney', 'Grand Prairie', 'Mesquite', 'Carrollton',
  'Castle Hills', 'Denton', 'Richardson', 'Lewisville', 'Allen',
  'Flower Mound', 'North Richland Hills', 'Mansfield', 'Rowlett',
  'Euless', 'DeSoto', 'Grapevine', 'Bedford', 'Cedar Hill', 'Wylie',
  'Keller', 'Coppell', 'Hurst', 'Rockwall', 'The Colony', 'Burleson',
  'Southlake', 'Farmers Branch', 'Waxahachie', 'Colleyville'
];
const cityList=document.querySelector('#city-list');
cityList.replaceChildren(...cities.map(name=>{const chip=document.createElement('span');chip.textContent=name;return chip}));

const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#primary-nav');
menuButton.addEventListener('click',()=>{const opened=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(opened));menuButton.setAttribute('aria-label',opened?'Close navigation':'Open navigation');nav.classList.toggle('open',opened)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.nav-group>button').forEach(button=>button.addEventListener('click',()=>{const opened=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(opened));button.parentElement.classList.toggle('open',opened)}));

// Service options shown as buttons in the estimate form.
const services = [
  'Security cameras', 'Alarm and monitoring', 'Access control',
  'Gate or intercom', 'Business phones/VoIP', 'Wi-Fi/network',
  'Payments/POS', 'Mobile camera trailer', 'Repair/maintenance',
  'Not sure'
];
const serviceWrap=document.querySelector('#service-chips');
serviceWrap.replaceChildren(...services.map(name=>{const button=document.createElement('button');button.type='button';button.className='form-chip';button.dataset.service=name;button.textContent=name;button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{const next=button.getAttribute('aria-pressed')!=='true';button.setAttribute('aria-pressed',String(next));document.querySelector('#service-error').textContent=''});return button}));
document.querySelectorAll('a[data-type],a[data-service]').forEach(link=>link.addEventListener('click',()=>{if(link.dataset.type)document.querySelector('#customer-type').value=link.dataset.type;if(link.dataset.service){const chip=[...serviceWrap.children].find(item=>item.dataset.service===link.dataset.service);if(chip)chip.setAttribute('aria-pressed','true')}}));

document.querySelectorAll('input[name=preferred]').forEach(radio=>radio.addEventListener('change',()=>{document.querySelector('#text-consent').hidden=document.querySelector('input[name=preferred]:checked').value!=='Text'}));
function track(event,section=''){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event,section})}
document.querySelectorAll('[data-event]').forEach(el=>el.addEventListener('click',()=>track(el.dataset.event,el.dataset.section||'')));

// Open the illustrated gate as the visitor scrolls through its section.
const gateStory = document.querySelector('#gate-experience');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let gateFrame = 0;
function updateGate() {
  gateFrame = 0;
  if (reducedMotion.matches) {
    gateStory.style.removeProperty('--gate-left');
    gateStory.style.removeProperty('--gate-right');
    return;
  }
  const bounds = gateStory.getBoundingClientRect();
  const distance = Math.max(1, bounds.height - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -bounds.top / distance));
  const shift = Math.round(progress * 101);
  gateStory.style.setProperty('--gate-left', `-${shift}%`);
  gateStory.style.setProperty('--gate-right', `${shift}%`);
}
function scheduleGate() {
  if (!gateFrame) gateFrame = window.requestAnimationFrame(updateGate);
}
window.addEventListener('scroll', scheduleGate, { passive: true });
window.addEventListener('resize', scheduleGate);
reducedMotion.addEventListener('change', scheduleGate);
scheduleGate();

const form=document.querySelector('#estimate-form');
form.addEventListener('submit',event=>{
  event.preventDefault();
  const status=document.querySelector('#form-status');
  status.textContent='';
  if(form.elements.website.value)return;
  let invalid=false;
  for(const field of form.querySelectorAll('[required]')){const bad=!field.value.trim()||!field.checkValidity();field.setAttribute('aria-invalid',String(bad));if(bad)invalid=true}
  const chosen=[...serviceWrap.querySelectorAll('[aria-pressed=true]')].map(chip=>chip.dataset.service);
  if(chosen.length===0){document.querySelector('#service-error').textContent='Please choose at least one service.';invalid=true}
  const preferred=form.querySelector('input[name=preferred]:checked').value;
  if(preferred==='Text'&&!form.elements.consent.checked){status.textContent='Please accept text contact or choose call or email.';invalid=true}
  if(invalid){if(!status.textContent)status.textContent='Please complete the required fields with valid contact information.';(form.querySelector('[aria-invalid=true]')||serviceWrap).focus();return}
  const name=form.elements.fullName.value.trim();
  const type=form.elements.customerType.value;
  const address=type==='Government or School'?'dir@heloutechnicalservices.com,info@heloutechnicalservices.com':'info@heloutechnicalservices.com';
  const subject='Free estimate request - '+name;
  const body=['Name: '+name,'Phone: '+form.elements.phone.value.trim(),'Email: '+form.elements.email.value.trim(),'City or ZIP: '+form.elements.city.value.trim(),'Customer type: '+type,'Services: '+chosen.join(', '),'Preferred contact: '+preferred,'','Project details:',form.elements.details.value.trim()||'(none provided)'].join('\n');
  const mailto='mailto:'+address+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  document.querySelector('#mailto-fallback').href=mailto;
  form.hidden=true;
  document.querySelector('#form-result').hidden=false;
  track('form_prepare_email','contact');
  window.location.href=mailto;
});

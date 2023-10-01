import './style.scss';
import * as qstr from './tools/qstr'; 

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1 class="text-3xl mb-3">Vitest Site</h1>

<h2 class="text-2xl mb-2">capitalizeFirstLetter()</h2>
<ul class="list-disc ml-6">
	<li>${qstr.capitalizeFirstLetter('this is a test')}</li>
</ul>
`;

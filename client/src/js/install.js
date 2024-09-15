const butInstall = document.getElementById('buttonInstall');

// Check installation state on page load
if (localStorage.getItem('appInstalled') === 'true') {
    butInstall.textContent = 'Installed';
    butInstall.classList.toggle('hidden', false);
}

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

	butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();

	window.deferredPrompt = null;

	
	butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;

	butInstall.textContent = 'Installed';
    butInstall.classList.toggle('hidden', false);

	// Store installation state in local storage
    localStorage.setItem('appInstalled', 'true');
});

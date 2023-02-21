function setDescription() {
    const descs = ['Stiglitz', 'Keating', 'Goodman', 'Jericho'];
    document.getElementById('description').innerText = descs[Math.floor(Math.random() * descs.length)] + 'pilled.';
}

let _modPath;

exports.initialize = (modPath) =>{
    _modPath = modPath;

    Database.languages.push({ name: 'Nederlands', key: 'nl', path: _modPath + 'nl.json' });
};

exports.onLoadGame = settings => {};
exports.onNewHour = settings => {};
exports.onNewDay = settings => {};

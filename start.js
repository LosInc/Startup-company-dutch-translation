let _modPath;

exports.initialize = (modPath) =>{
    _modPath = modPath;


    Database.languages.push({ name: 'Nederlands', key: 'nl', path: _modPath + 'nl.json' });

    // Add new furniture the purchase view
    Database.items.push(
        {
            id: 29,
            name: "coffeetable2",
            imagePath: `${modPath}images/coffee-table1-{orientation}.png`,
            price: 100,
            bonus: 0.5,
            width: 2,
            height: 2,
            tier: 1,
            placementOffset: [
                {top: -420, left: 100},
                {top: -420, left: 100},
                {top: -420, left: 100},
                {top: -420, left: 100},
            ]
        }
    );

    // Add new menu item 
    Modding.setMenuItem({
        name: 'xlosmod',
        tooltip: "Xlos Mod",
        tooltipPosition: 'left',
        faIcon: 'fa-cubes',
        badgeCount: 0,
    });

    // Define custom views
    exports.views = [
        {
            name: 'xlosmod',
            viewPath: _modPath + 'view.html',
            controller: function ($rootScope) {
                this.name = 'Thomas';
                this.giveMoney = (amount) => {
                  $rootScope.confirm('Are you sure?', `Are you sure you want ${numeral(amount).format(Configuration.CURRENCY_FORMAT)}?`, () => {
                    $rootScope.settings.balance += amount;
                  });
                }
            }
        }
    ]
};


exports.onLoadGame = settings => {};
exports.onNewHour = settings => {};
exports.onNewDay = settings => {};


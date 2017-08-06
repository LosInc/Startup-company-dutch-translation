let _modPath;

exports.initialize = (modPath) =>{
    _modPath = modPath;

    Database.languages.push(
        {
            name: 'Nederlands',
            key: 'nl',
            path: _modPath + 'nl.json'
        }
    );

    Database.competitors = [];

    // Competitors
    const CompetitorNames = {
        UberCode: 'Macaw',
        DevDevs: 'ISM eCompany',
        Errorless: 'Tam Tam',
        SuperstarDevs: 'Mirabeau',
        CodeCodeCodeInc: 'Clockwork',
        WeKnowWeb: 'Emakina',
        CodeHouse: 'eFocus'
    };

    Database.competitors = [
        {name: CompetitorNames.UberCode, competitiveness: 1},
        {name: CompetitorNames.DevDevs, competitiveness: 1},
        {name: CompetitorNames.Errorless, competitiveness: 1.2},
        {name: CompetitorNames.SuperstarDevs, competitiveness: 1.3},
        {name: CompetitorNames.CodeCodeCodeInc, competitiveness: 1.4},
        {name: CompetitorNames.WeKnowWeb, competitiveness: 1.5},
        {name: CompetitorNames.CodeHouse, competitiveness: 1.6}
    ];

    Database.newGameSettings.loans = [
        {
            provider: 'Rabobank',
            tier: 1,
            amount: 40000,
            days: 365,
            interest: 30,
            dailyPayment: 128.2,
            // Dynamics
            daysLeft: 0,
            amountLeft: 0,
            active: false
        },
        {
            provider: 'ABN Amro',
            tier: 3,
            amount: 70000,
            days: 365,
            interest: 30,
            dailyPayment: 224.3,
            // Dynamics
            daysLeft: 0,
            amountLeft: 0,
            active: false
        },
        {
            provider: 'Triodos bank',
            tier: 5,
            amount: 120000,
            days: 365,
            interest: 25,
            dailyPayment: 374.96,
            // Dynamics
            daysLeft: 0,
            amountLeft: 0,
            active: false
        }
    ];
};

exports.onLoadGame = settings => {};
exports.onNewHour = settings => {};
exports.onNewDay = settings => {};

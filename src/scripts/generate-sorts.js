const algoliasearch = require('algoliasearch');

// Helper function to set the sortby ranking strategy on two given indices
// It handles one for price asc and one for price dsc
const setRankingForSorts = (
    client,
    priceAscIndexName,
    priceDscIndexName,
    priceAttributeName
) => {
    return new Promise((resolve, reject) => {
        try {
            const indexPriceAsc = client.initIndex(priceAscIndexName);
            const indexPriceDsc = client.initIndex(priceDscIndexName);

            indexPriceAsc
                .setSettings({
                    ranking: [
                        `asc(${priceAttributeName})`,
                        'typo',
                        'geo',
                        'words',
                        'filters',
                        'proximity',
                        'attribute',
                        'exact'
                    ]
                })
                .then(() => {
                    indexPriceDsc
                        .setSettings({
                            ranking: [
                                `desc(${priceAttributeName})`,
                                'typo',
                                'geo',
                                'words',
                                'filters',
                                'proximity',
                                'attribute',
                                'exact'
                            ]
                        })
                        .then(() => resolve());
                });
        } catch (e) {
            reject(e);
        }
    });
};

// Checks for replicas for price ascending and descending, and creates them if not
// Also adds the correct ranking strategy for each one via the above helper function
const createSorts = (
    appID,
    key,
    indexName,
    priceAscIndexName,
    priceDscIndexName,
    priceAttributeName
) => {
    const client = algoliasearch(appID, key);

    return new Promise((resolve, reject) => {
        const index = client.initIndex(indexName);

        index.getSettings().then(settings => {
            console.log(settings);
            if (!settings.replicas) {
                console.log('no replicas, creating replicas');
                index
                    .setSettings({
                        replicas: [priceAscIndexName, priceDscIndexName]
                    })
                    .then(() => {
                        console.log('created replicas');
                        setRankingForSorts(
                            client,
                            priceAscIndexName,
                            priceDscIndexName,
                            priceAttributeName
                        ).then(() => {
                            console.log('set sorts on replicas');
                            resolve();
                        });
                    })
                    .catch(e => {
                        reject(e);
                    });
            } else {
                let hasPriceAsc = settings.replicas.includes(priceAscIndexName);
                let hasPriceDsc = settings.replicas.includes(priceDscIndexName);

                if (!hasPriceAsc || !hasPriceDsc) {
                    console.log(
                        'one or more of sort replicas missing, creating replicas'
                    );
                    index
                        .setSettings({
                            replicas: [priceAscIndexName, priceDscIndexName]
                        })
                        .then(() => {
                            console.log('created replicas');
                            setRankingForSorts(
                                client,
                                priceAscIndexName,
                                priceDscIndexName,
                                priceAttributeName
                            ).then(() => {
                                console.log('set sorts on replicas');
                                resolve();
                            });
                        })
                        .catch(e => {
                            reject(e);
                        });
                }
            }
        });
    });
};

export default createSorts;

'use strict'

// ----------------------------------------------------------------------------

const log = require ('ololog')
    , assert = require ('assert')

/*  ------------------------------------------------------------------------ */

module.exports = async (exchange) => {

    const method = 'watchBalance'

    if (!exchange.has[method]) {
        log (exchange.id, 'does not support', method + '() method')
        return
    }

    log ('watching balance...')

    const balance = await exchange[method] ({
        // 'code': 'BTC',
    })

    /*

    const currencies = [
        'USD',
        'CNY',
        'EUR',
        'BTC',
        'ETH',
        'JPY',
        'LTC',
        'DASH',
        'DOGE',
        'UAH',
        'RUB',
        'XRP',
    ]

    assert (typeof balance['total'] === 'object')
    assert (typeof balance['free'] === 'object')
    assert (typeof balance['used'] === 'object')

    for (let currency of Object.keys (balance['total'])) {
        let total = balance['total'][currency]
        let free = balance['free'][currency]
        let used = balance['used'][currency]
        if (total !== undefined && free !== undefined && used !== undefined) {
            assert (total === free + used, 'free and used do not sum to total ' + exchange.id)
        }
    }

    let result = currencies
        .filter ((currency) => (currency in balance) &&
            (balance[currency]['total'] !== undefined))

    if (result.length > 0) {
        result = result.map ((currency) => currency + ': ' + balance[currency]['total'])
        if (exchange.currencies.length > result.length) {
            result = result.join (', ') + ' + more...'
        } else {
            result = result.join (', ')
        }
    } else {
        result = 'zero balance'
    }

    log (result)

    */

    return balance
}

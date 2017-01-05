/**
 * _scripts/config.js
 * Loads site configuration for api endpoint
 *
 * @exports {Promise} default - a promise of the site configuration
 */

import Promise from 'core-js/fn/promise'

import { url } from '~/page'
import jQuery from '~/lib/jquery'

export default jQuery.then(($) => {
    console.log('config 1')
    const basePath = url()
    console.log('config 2', basePath)
    const configPath = `${basePath}/api/config`
    console.log('config 3', configPath)

    return new Promise((resolve, reject) => {
        console.log('config 4')
        $.getJSON(configPath)
        .done((config) => {
            console.log('config 5', config)
            console.log('Sitewide configuration loaded')
            return resolve(config)
        })
        .fail((jqxhr, status, err) => {
            console.log('config 6', status, err)
            console.error(`Failed to grab sitewide configuration with ${status}`)
            console.error(err)
            return reject(err)
        })
    })
})

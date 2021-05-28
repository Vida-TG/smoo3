
import sendJson from '../tmp_fetch_send_json'
import { ACCOUNT_HELPER_URL } from './wallet'
import * as Sentry from '@sentry/browser'

export const getLikelyContracts = async (accountId) => {
    try {
        return await sendJson('GET', `${ACCOUNT_HELPER_URL}/account/${accountId}/likelyTokens`)
    } catch (e) {
        logError(e);
    }
}

export const getMetadata = async (contract, account) => {
    let metadata = await logAndIgnoreError(account.viewFunction(contract, 'ft_metadata'))
    return {
        contract,
        metadata
    }
}

export const getBalanceOf = async (contract, account, accountId) => {
    let balance = await logAndIgnoreError(account.viewFunction(contract, 'ft_balance_of', { account_id: accountId }))
    return {
        contract,
        balance
    }
}

const logAndIgnoreError = (promise) => promise.catch(error => (console.warn(error), Sentry.captureException(error)));

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'e11f65d2bdmsh97ef15c54a3d19fp179f77jsn678f9d965bf6'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({                
            query: (counter) => createRequest(`/coins?limit=${counter}`),
        }),
        getCryptosDetails : builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getExchanges: builder.query({
            query: (counter) => createRequest(`/exchanges?limit=${counter}`),
        }),
        getHistory: builder.query({
            query: ({coinId, days}) => createRequest(`/coin/${coinId}/history/${days}`),
        }),
    })
})

export const {useGetCryptosQuery, useGetCryptosDetailsQuery, useGetExchangesQuery, useGetHistoryQuery} = cryptoApi;
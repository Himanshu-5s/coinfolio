import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const cryptoExchangesApiHeaders = {
  'X-RapidAPI-Key': '0ca255ed65mshd6c05edb99559dap17423fjsn370aa07d893a',
  'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
}

const baseUrl =  'https://coinpaprika1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoExchangesApiHeaders })

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    })
  })
})

export const { useGetCryptoExchangesQuery} = cryptoExchangesApi;
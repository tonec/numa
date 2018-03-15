import catchValidation from 'utils/catchValidation'

/*
* Actions
* * * * */

const prefix = '@numerals/convert'

export const REQUEST = `${prefix}/REQUEST`
export const REQUEST_SUCCESS = `${prefix}/REQUEST_SUCCESS`
export const REQUEST_FAIL = `${prefix}/REQUEST_FAIL`

/*
* Action creators
* * * * * * * * */

export const convert = ({ conversionType, conversionValue }) => {
  let endpoint = `/convert/${conversionType}?val=${conversionValue}`

  return {
    types: [ REQUEST, REQUEST_SUCCESS, REQUEST_FAIL ],
    promise: async ({ client }, dispatch) => {
      try {
        const response = await client.get(endpoint)
        return response.data
      } catch (error) {
        return catchValidation(error.data)
      }
    }
  }
}

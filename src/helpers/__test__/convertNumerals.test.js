import { toLatin, fromLatin } from '../convertNumerals'

describe('toLatin', () => {
  it('should return the correct roman numerals given an arabic number as input', () => {

    expect(toLatin(1)).toEqual('I')
    expect(toLatin(5)).toEqual('V')
    expect(toLatin(10)).toEqual('X')
    expect(toLatin(50)).toEqual('L')
    expect(toLatin(100)).toEqual('C')
    expect(toLatin(500)).toEqual('D')
    expect(toLatin(1000)).toEqual('M')

    expect(toLatin(15)).toEqual('XV')
    expect(toLatin(31)).toEqual('XXXI')
    expect(toLatin(222)).toEqual('CCXXII')
    expect(toLatin(561)).toEqual('DLXI')
    expect(toLatin(3020)).toEqual('MMMXX')
  })

  it('... and when subtraction is required', () => {
    expect(toLatin(4)).toEqual('IV')
    expect(toLatin(9)).toEqual('IX')
    expect(toLatin(339)).toEqual('CCCXXXIX')
    expect(toLatin(564)).toEqual('DLXIV')
    expect(toLatin(3999)).toEqual('MMMCMXCIX')
  })
})

describe('fromLatin', () => {
  it('should return the correct arabic number given latin numerals as input', () => {

    expect(fromLatin('I')).toEqual(1)
    expect(fromLatin('V')).toEqual(5)
    expect(fromLatin('X')).toEqual(10)
    expect(fromLatin('L')).toEqual(50)
    expect(fromLatin('C')).toEqual(100)
    expect(fromLatin('D')).toEqual(500)
    expect(fromLatin('M')).toEqual(1000)

    expect(fromLatin('XV')).toEqual(15)
    expect(fromLatin('XXXI')).toEqual(31)
    expect(fromLatin('CCXXII')).toEqual(222)
    expect(fromLatin('DLXI')).toEqual(561)
    expect(fromLatin('MMMXX')).toEqual(3020)

    expect(fromLatin('IV')).toEqual(4)
    expect(fromLatin('IX')).toEqual(9)
    expect(fromLatin('CCCXXXIX')).toEqual(339)
    expect(fromLatin('DLXIV')).toEqual(564)
    expect(fromLatin('MMMCMXCIX')).toEqual(3999)
  })
})

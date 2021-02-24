const {case1, case2, getTotalRent} = require('../main')

/*
rentfees = 
  {
    total:number
    rent:number
    condominium:number
    iptu:number
    iptu_annual:number // valor do IPTU/12 
    include_condominium:boolean
    include_iptu:boolean
    condominium_responsible: 'include_with_rent'|'tenant'|'owner'
    iptu_responsible: 'include_with_rent'|'tenant'|'owner'
  }
*/

const RENTFEES_PROPERTIES = [
  'total',
  'rent',
  'condominium',
  'iptu',
  'iptu_annual',
  'include_condominium',
  'include_iptu',
  'condominium_responsible',
  'iptu_responsible',
]

describe('Rentfees: Properties ', () => {

  it('Possui todas as propriedades necessarias', () => {
    RENTFEES_PROPERTIES.map((properties) => {
      expect(case1).toHaveProperty(properties)
    }) 
  })

  it('Nao possui todas as propriedades necessarias', () => {
    const expectedObjLen = Object.keys(RENTFEES_PROPERTIES).length
    const objLen = Object.keys(case2).length
    expect(objLen === expectedObjLen).toBeFalsy()
  })

})

describe('Rentfees: getTotalRent', () => {

  it('Retorna numero', () => {
    expect(typeof getTotalRent(case1)).toBe('number')
  })

  it('rent + iptu + condominium', () => {
    const totalRent = case1.rent + case1.iptu_annual + case1.condominium
    expect(getTotalRent(case1)).toEqual(totalRent)
  })

})


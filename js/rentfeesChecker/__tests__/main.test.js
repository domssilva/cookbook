const {
  rentIptuCondominium, 
  rentMissingProperty,
  getTotalRent,
  rentIptu,
  rentCondominium,
} = require('../main')

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
      expect(rentIptuCondominium).toHaveProperty(properties)
    }) 
  })

  it('Nao possui todas as propriedades necessarias', () => {
    const expectedObjLen = Object.keys(RENTFEES_PROPERTIES).length
    const objLen = Object.keys(rentMissingProperty).length
    expect(objLen === expectedObjLen).toBeFalsy()
  })

})

describe('Rentfees: getTotalRent', () => {

  it('Retorna numero', () => {
    expect(typeof getTotalRent(rentIptuCondominium)).toBe('number')
  })

  it('rentIptuCondominium === rent + iptu + condominium', () => {
    const totalRent = rentIptuCondominium.rent + rentIptuCondominium.iptu_annual + rentIptuCondominium.condominium
    expect(getTotalRent(rentIptuCondominium)).toEqual(totalRent)
  })

  it('rentIptu === rent + iptu', () => {
    const totalRent = rentIptu.rent + rentIptu.iptu_annual
    expect(getTotalRent(rentIptu)).toEqual(totalRent)
  })

  it('rentCondominium === rent + condominium', () => {
    const totalRent = rentCondominium.rent + rentCondominium.condominium
    expect(getTotalRent(rentCondominium)).toEqual(totalRent)
  })

  it('rentCondominium: !== rent + condominium + iptu', () => {
    const totalRent = rentCondominium.rent + rentCondominium.condominium + rentCondominium.iptu_annual
    expect(getTotalRent(rentCondominium)).not.toEqual(totalRent)
  })

})

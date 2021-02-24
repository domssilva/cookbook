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

const rentIptuCondominium = {
  total: 0,
  rent: 800,
  condominium: 100,
  iptu: 1200,
  iptu_annual: 100,
  include_condominium: true,
  include_iptu: true,
  condominium_responsible: "include_with_rent",
  iptu_responsible: "include_with_rent",
}

const rentMissingProperty = {
  total: 0,
  rent: 800,
  condominium: 100,
  iptu: 1200,
  iptu_annual: 100,
  include_condominium: true,
  include_iptu: true,
  condominium_responsible: "include_with_rent",
  // iptu_responsible: "include_with_rent",
}

const rentIptu = {
  total: 0,
  rent: 800,
  condominium: 100,
  iptu: 1200,
  iptu_annual: 100,
  include_condominium: true,
  include_iptu: true,
  condominium_responsible: "tenant",
  iptu_responsible: "include_with_rent",
}

const rentCondominium = {
  total: 0,
  rent: 800,
  condominium: 100,
  iptu: 1200,
  iptu_annual: 100,
  include_condominium: true,
  include_iptu: true,
  condominium_responsible: "owner",
  iptu_responsible: "include_with_rent",
}

const getTotalRent = (rentfees) => {

  let totalRent = rentfees.rent

  if (rentfees.include_condominium && rentfees.condominium_responsible === 'include_with_rent') {
    totalRent += rentfees.condominium
  }

  if (rentfees.include_iptu && rentfees.iptu_responsible === 'include_with_rent') {
    totalRent += rentfees.iptu_annual
  }

  return totalRent
}

module.exports = {
  rentIptuCondominium,
  rentMissingProperty,
  rentIptu,
  rentCondominium,
  getTotalRent,
}

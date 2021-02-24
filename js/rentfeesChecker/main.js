/*
  TESTS TO DO:

  1. VERIFY OBJECT HAS ALL PROPERTIES
  2. VERIFY IPTU_ANNUAL
  3. CONDITIONS TO CHECK IF CONDOMINIUM|IPTU_RESPONSIBLE = 'include_with_rent' REFLECTS ON rentfees.total
*/

const case1 = {
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

const case2 = {
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

const getTotalRent = (rentfees) => {

  totalRent = rentfees.rent

  if (rentfees.include_condominium) {
    totalRent += rentfees.condominium
  }

  if (rentfees.include_iptu) {
    totalRent += rentfees.iptu_annual
  }

  return totalRent
}

module.exports = {case1, case2, getTotalRent}

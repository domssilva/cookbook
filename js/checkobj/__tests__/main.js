const hasExtraInfo = require('../main.js')

const emtpyData = {
  contact_email: "",
  contact_name: "",
  contact_phone: "",
  contact_reference: null,
  hobby: "",
  how_long_in_rent: "no_response",
  in_rent: "no_response",
  more_peoples: "no_response",
  peoples_quantity: "",
  pets: "no_response",
  pets_details: "",
  reason_to_move: "",
  smoking: "no_response",
}

const filledData = {
  contact_email: "tenant@gmail.com",
  contact_name: "",
  contact_phone: "",
  contact_reference: null,
  hobby: "",
  how_long_in_rent: "no_response",
  in_rent: "no_response",
  more_peoples: "no_response",
  peoples_quantity: "",
  pets: "no_response",
  pets_details: "",
  reason_to_move: "",
  smoking: "no_response",
}

const filledData2 = {
  contact_email: "",
  contact_name: "",
  contact_phone: "",
  contact_reference: 1,
  hobby: "",
  how_long_in_rent: "no_response",
  in_rent: "no_response",
  more_peoples: "no_response",
  peoples_quantity: "",
  pets: "no_response",
  pets_details: "",
  reason_to_move: "",
  smoking: "no_response",
}

const filledData3 = {
  contact_email: "",
  contact_name: "",
  contact_phone: "",
  contact_reference: null,
  hobby: "",
  how_long_in_rent: "no_response",
  in_rent: "no_response",
  more_peoples: "no_response",
  peoples_quantity: "",
  pets: "cat",
  pets_details: "",
  reason_to_move: "",
  smoking: "no_response",
}
test('Without Extra Info must return false', () => {
  expect(hasExtraInfo(emtpyData)).toBeFalsy()
})

test('Extra Info(""): true', () => {
  expect(hasExtraInfo(filledData)).toBeTruthy()
})

test('Extra Info(null): true', () => {
  expect(hasExtraInfo(filledData2)).toBeTruthy()
})

test('Extra Info("no_response"): true', () => {
  expect(hasExtraInfo(filledData3)).toBeTruthy()
})


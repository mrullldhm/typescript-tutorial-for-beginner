type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
// Optional Property Access Operator
console.log(customer?.birthday?.getFullYear)

// Optional Element Access Operator
// Useful when dealing with arrays
// customers?.[0]

// OPtional call
let log: any = null
log?.('a')
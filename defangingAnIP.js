// Defanging an IP Address

/**
 * @param {string} address
 * @return {string}
 */
 const defangIPaddr = (address) => {
  // join on defanger
  return address.split('.').join('[.]');
};
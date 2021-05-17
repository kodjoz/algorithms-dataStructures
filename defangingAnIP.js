// Defanging an IP Address

/**
 * @param {string} address
 * @return {string}
 */
 const defangIPaddr = (address) => {
  // One liner
  // split on the dot
  // Join with our new separator
  return address.split('.').join('[.]');
};

var ipAddresses = ["1.1.1.1", '1.0.0.1', '8.8.8.8', '192.168.1.105'];

for (let i = 0; i < ipAddresses.length; i += 1) {
  console.log(defangIPaddr(ipAddresses[i]));
}
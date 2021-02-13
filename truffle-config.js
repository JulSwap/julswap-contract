module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      // port: 8545, // Standard Ethereum port (default: none)
      network_id: '*', // eslint-disable-line camelcase
    },

  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  //
  compilers: {
    solc: {
      version: "0.6.12",
    }
  }
};

const {wcURL,wcConsumerKey,wcConsumerSecret,wcVersion}=process.env

// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: wcURL, // Your store URL
  consumerKey: wcConsumerKey, // Your consumer key
  consumerSecret: wcConsumerSecret, // Your consumer secret
  version: wcVersion // WooCommerce WP REST API version
});

module.exports = {WooCommerce}
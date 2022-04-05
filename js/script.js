// Created by: Evgeny
// Created on: mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the payment you should get.
 */
function calculate () {
  // input
  const hours = parseInt(document.getElementById('hours-worked').value)
  const rate = parseInt(document.getElementById('hourly-rate').value)
  const taxes = 0.18

  // process
  const payment = (hours * rate) * (1 - taxes)
  const government = (hours + rate) * taxes

  // output
  document.getElementById('payment').innerHTML = '<p>Your pay will be: $' + payment.toFixed(2) + '</p>'
  document.getElementById('government').innerHTML = '<p>The government will take: $' + government.toFixed(2) + '</p>'
}

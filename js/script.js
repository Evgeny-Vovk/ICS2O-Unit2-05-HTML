// Created by: Evgeny
// Created on: mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the payment you should get.
 */
function calculate() {
  // input
  const TAXES = 0.18
  const hours = parseFloat(document.getElementById('hours-worked').value)
  const rate = parseFloat(document.getElementById('hourly-rate').value)
  
  // process
  const payment = (hours * rate) * (1 - TAXES)
  const government = (hours * rate) * TAXES

  // output
  document.getElementById('payment').innerHTML = '<p>Your pay will be: $' + payment.toFixed(2) + '</p>'
  document.getElementById('government').innerHTML = '<p>The government will take: $' + government.toFixed(2) + '</p>'
}

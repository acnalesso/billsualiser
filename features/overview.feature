Feature: Bill Overview
  In order to see a more detailed version of my bill
  As a customer I should be able to see the packages I have got
  And I should also be able to see what I am being charged for

Background:
  Given I am on the view bill page

Scenario: Period
  Then I should see '2015-01-26 - 2015-02-25' in '#period'

Scenario: TV package
  Then I should see 'TV - Variety with Movies HD £ 50.00' in '#tv_title'

Scenario: Broadband package
  Then I should see 'Broadband - Fibre Unlimited £ 16.40' in '#broadband_title'

Scenario: Talk package + total cost of charges
  Then I should see 'Talk - Sky Talk Anytime £ 5.00 + 59.64' in '#talk_title'

Scenario: Rentals
  Then I should see 'Rentals £ 4.99' in '#rentals_title'

Scenario: Buy & Keep
  Then I should see 'Buy & Keep £ 19.98' in '#buy_and_keep_title'

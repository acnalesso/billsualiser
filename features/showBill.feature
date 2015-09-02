Feature: Show Bill
  In order to see how much my bill is
  As a user I want to be able to see what Sky is charging me for
  And when my bill is due
  So that I know when to pay it and how much to pay

Background:
  Given I am on the view bill page

Scenario: Total
  Then I should see 'Total: £136.03' in '#total'

Scenario: Generated
  Then I should see 'Generated: 2015-01-11' in '#generated'

Scenario: Due
  Then I should see 'Due: 2015-01-25' in '#due'

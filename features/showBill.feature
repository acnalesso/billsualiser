Feature: Show Bill
  In order to see how much my bill is
  As a user I want to be able to see what Sky is charging me for
  And when my bill is due
  So that I know when to pay it and how much to pay

Scenario: Showing detailed bill
  Given I am on the view bill page
  Then the total of my bill should be '150'

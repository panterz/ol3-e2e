Feature: Map

Scenario: Check if map is rendered
Given a page with map
Then the map should contain data
And it should have a zoom control
And an attribution control

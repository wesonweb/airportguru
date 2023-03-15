// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ChatroomSubscriptionController from "./chatroom_subscription_controller"
application.register("chatroom-subscription", ChatroomSubscriptionController)

import FilterMeetupsController from "./filter_meetups_controller"
application.register("filter-meetups", FilterMeetupsController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import SearchAirportsController from "./search_airports_controller"
application.register("search-airports", SearchAirportsController)

import SearchFlightsController from "./search_flights_controller"
application.register("search-flights", SearchFlightsController)

import SearchMeetupsController from "./search_meetups_controller"
application.register("search-meetups", SearchMeetupsController)

import TipsSelectFilterController from "./tips_select_filter_controller"
application.register("tips-select-filter", TipsSelectFilterController)
